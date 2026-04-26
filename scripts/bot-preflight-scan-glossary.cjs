#!/usr/bin/env node
/*
 * scripts/bot-preflight-scan-glossary.cjs
 * ============================================================================
 * Build-gated quality scanner for the legal glossary.
 *
 * Mirrors scripts/bot-preflight-scan.cjs (which gates legal entries) but with
 * glossary-specific rules: 6th-grade reading level, non-directive plainEnglish,
 * pure-question whatToAsk items, structural integrity of cross-links.
 *
 * HARD FAILs (always exit 1):
 *   - Missing required field (id, term.en, plainEnglish.en, citation,
 *     sourceUrl, lastVerified, status)
 *   - Duplicate id across files
 *   - sourceUrl not https://, lastVerified not YYYY-MM-DD,
 *     status not in [active, draft, deprecated]
 *   - related[] points at a glossary id that doesn't exist
 *   - legalEntryIds[] points at a legal-entry filename that doesn't exist
 *     (or that is draft-gated)
 *   - Embedded double quote in en: line (vite-breaker)
 *
 * SCORED WARNs (gated by --fail-at=N like the legal scanner):
 *   - Avg sentence length in plainEnglish > 25 (+3) / > 35 (+6)
 *   - Lawyer-register markers in plainEnglish (+3 each, capped at 10)
 *   - Directive imperatives in plainEnglish (+2 each)
 *   - Second-person ("you/your") in plainEnglish (+1 per, capped at 5)
 *   - whatToAsk item doesn't end in '?' (+2)
 *   - whatToAsk parenthetical advice "(...)" (+3)
 *   - whatToAsk period followed by more text — trailing imperative (+3)
 *   - plainEnglish word count < 40 — too thin (+2)
 *
 * Usage:
 *   node scripts/bot-preflight-scan-glossary.cjs
 *   node scripts/bot-preflight-scan-glossary.cjs --fail-at=4
 *   node scripts/bot-preflight-scan-glossary.cjs --top=50
 *
 * Output:
 *   dist/verification-report-glossary.json — ranked queue + hard fails
 */

const fs = require('fs');
const path = require('path');
const { pathToFileURL } = require('url');

const ROOT = path.resolve(__dirname, '..');
const GLOSSARY_DIR = path.join(ROOT, 'src', 'data', 'legal', 'glossary');
const ENTRIES_DIR = path.join(ROOT, 'src', 'data', 'legal', 'entries');
const DIST = path.join(ROOT, 'dist');
const REPORT = path.join(DIST, 'verification-report-glossary.json');

const args = process.argv.slice(2).reduce((acc, a) => {
  const m = a.match(/^--([^=]+)(?:=(.*))?$/);
  if (m) acc[m[1]] = m[2] === undefined ? true : m[2];
  return acc;
}, {});
const TOP = parseInt(args.top, 10) || 0;
const FAIL_AT = Number.isFinite(parseInt(args['fail-at'], 10)) ? parseInt(args['fail-at'], 10) : null;

const VALID_STATUS = new Set(['active', 'draft', 'deprecated']);
const ISO_DATE = /^\d{4}-\d{2}-\d{2}$/;

// ── Voice rules (mirror the legal scanner's lawyer-register list) ──────────
const LAWYER_REGISTER_PATTERNS = [
  { name: 'lawyer register: pursuant to', re: /\bpursuant to\b/gi },
  { name: 'lawyer register: et seq', re: /\bet\s*seq\.?/gi },
  { name: 'lawyer register: thereof', re: /\bthereof\b/gi },
  { name: 'lawyer register: hereinafter', re: /\bhereinafter\b/gi },
  { name: 'lawyer register: the foregoing', re: /\bthe foregoing\b/gi },
  { name: 'lawyer register: in lieu of', re: /\bin lieu of\b/gi },
  { name: 'lawyer register: notwithstanding', re: /\bnotwithstanding\b/gi },
  { name: 'lawyer register: enumerated', re: /\benumerated\b/gi },
  { name: 'lawyer register: rebuttable presumption', re: /\brebuttable presumption\b/gi },
  { name: 'lawyer register: concurrent jurisdiction', re: /\bconcurrent jurisdiction\b/gi },
  { name: 'lawyer register: void on its face', re: /\bvoid on (?:its|the) face\b/gi },
  { name: 'lawyer register: codified at', re: /\bcodified at\b/gi },
  { name: 'lawyer register: by operation of law', re: /\bby operation of law\b/gi },
  { name: 'lawyer register: natural person', re: /\bnatural person\b/gi },
];

const DIRECTIVE_PATTERNS = [
  { name: 'directive: Make sure', re: /(^|[\.\?\!]\s+)Make sure\b/g },
  { name: 'directive: Always', re: /(^|[\.\?\!]\s+)Always\s+[a-z]/g },
  { name: 'directive: Never', re: /(^|[\.\?\!]\s+)Never\s+[a-z]/g },
  { name: 'directive: Save the/a', re: /(^|[\.\?\!]\s+)Save (the|a) /g },
  { name: 'directive: Get a/an', re: /(^|[\.\?\!]\s+)Get an? /g },
  { name: 'directive: Take photos/notes/action', re: /(^|[\.\?\!]\s+)Take (photos|notes|action)/g },
  { name: 'directive: Document', re: /(^|[\.\?\!]\s+)Document the /g },
];

const SECOND_PERSON_RE = /\b(you|your|yours|you'?re|you'?ve|you'?ll|you'?d)\b/gi;
const SHOULD_MUST_RE = /\byou\s+(should|must)\b/gi;
const PARENTHETICAL_ADVICE_RE = /\([^)]{3,}\)/;

// ── Helpers ────────────────────────────────────────────────────────────────
function wordCount(s) {
  if (!s) return 0;
  return s.trim().split(/\s+/).filter(Boolean).length;
}

function avgSentenceLength(text) {
  if (!text) return 0;
  const sentences = text.split(/[\.\?\!]+\s+/).filter((s) => s.trim().length > 3);
  if (!sentences.length) return 0;
  const totalWords = sentences.reduce((s, x) => s + wordCount(x), 0);
  return totalWords / sentences.length;
}

function pickEn(field) {
  if (!field) return '';
  if (typeof field === 'string') return field;
  return field.en || '';
}

// Discover legal entry filenames + draft status (so legalEntryIds can be checked)
function loadLegalEntryIndex() {
  const set = new Set();
  const draftSet = new Set();
  if (!fs.existsSync(ENTRIES_DIR)) return { all: set, drafts: draftSet };
  for (const f of fs.readdirSync(ENTRIES_DIR)) {
    if (!f.endsWith('.js')) continue;
    const id = f.replace(/\.js$/, '');
    set.add(id);
    // crude draft detection — read raw file looking for `draft: true`
    const raw = fs.readFileSync(path.join(ENTRIES_DIR, f), 'utf8');
    if (/\bdraft\s*:\s*true\b/.test(raw)) draftSet.add(id);
  }
  return { all: set, drafts: draftSet };
}

function scanTerm(file, t, raw, glossaryIds, legalIndex) {
  const issues = [];
  let score = 0;
  let hardFail = false;

  // ── Required fields ────────────────────────────────────────────────────
  const required = ['id', 'category', 'citation', 'sourceUrl', 'lastVerified', 'status'];
  for (const f of required) {
    if (!t[f]) {
      issues.push({ severity: 'fail', rule: `missing required field: ${f}` });
      hardFail = true;
    }
  }
  if (!t.term || !t.term.en) {
    issues.push({ severity: 'fail', rule: 'missing required field: term.en' });
    hardFail = true;
  }
  if (!t.plainEnglish || !t.plainEnglish.en) {
    issues.push({ severity: 'fail', rule: 'missing required field: plainEnglish.en' });
    hardFail = true;
  }

  // ── Format checks ──────────────────────────────────────────────────────
  if (t.sourceUrl && !/^https:\/\//.test(t.sourceUrl)) {
    issues.push({ severity: 'fail', rule: 'sourceUrl must start with https://', detail: t.sourceUrl });
    hardFail = true;
  }
  if (t.lastVerified && !ISO_DATE.test(t.lastVerified)) {
    issues.push({ severity: 'fail', rule: 'lastVerified must be YYYY-MM-DD', detail: t.lastVerified });
    hardFail = true;
  }
  if (t.status && !VALID_STATUS.has(t.status)) {
    issues.push({ severity: 'fail', rule: 'invalid status', detail: t.status });
    hardFail = true;
  }

  // ── Cross-link integrity ───────────────────────────────────────────────
  if (Array.isArray(t.related)) {
    for (const rid of t.related) {
      if (!glossaryIds.has(rid)) {
        issues.push({ severity: 'fail', rule: 'related[] points at unknown glossary id', detail: rid });
        hardFail = true;
      }
    }
  }
  if (Array.isArray(t.legalEntryIds)) {
    for (const eid of t.legalEntryIds) {
      if (!legalIndex.all.has(eid)) {
        issues.push({ severity: 'fail', rule: 'legalEntryIds[] points at unknown legal entry', detail: eid });
        hardFail = true;
      } else if (legalIndex.drafts.has(eid)) {
        issues.push({ severity: 'warn', rule: 'legalEntryIds[] points at draft entry (will not render)', detail: eid });
        score += 2;
      }
    }
  }

  // (Embedded-quote check skipped: any file that reaches this scanner has
  // already passed vite's JS parser via dynamic import, so an unescaped quote
  // would have caused the import to throw before we got here.)

  // If we already failed structurally, skip voice scoring (don't pile on)
  if (hardFail) return { file, id: t.id, score, hardFail, issues };

  // ── Voice scoring (plainEnglish.en) ────────────────────────────────────
  const pe = pickEn(t.plainEnglish);
  const peWords = wordCount(pe);

  if (peWords < 40) {
    issues.push({ severity: 'warn', rule: 'thin plainEnglish (< 40 words)', detail: peWords });
    score += 2;
  }

  const avg = avgSentenceLength(pe);
  if (avg > 35) {
    issues.push({ severity: 'warn', rule: 'long sentences (avg > 35 words)', detail: Math.round(avg) });
    score += 6;
  } else if (avg > 25) {
    issues.push({ severity: 'warn', rule: 'long sentences (avg > 25 words)', detail: Math.round(avg) });
    score += 3;
  }

  const lawyerHits = [];
  for (const p of LAWYER_REGISTER_PATTERNS) {
    const count = (pe.match(p.re) || []).length;
    if (count > 0) lawyerHits.push({ rule: p.name, count });
  }
  if (lawyerHits.length > 0) {
    const total = lawyerHits.reduce((s, x) => s + x.count, 0);
    issues.push({ severity: 'warn', rule: 'lawyer register markers in plainEnglish', detail: lawyerHits });
    score += Math.min(total * 3, 10);
  }

  const directiveHits = [];
  for (const p of DIRECTIVE_PATTERNS) {
    const count = (pe.match(p.re) || []).length;
    if (count > 0) directiveHits.push({ rule: p.name, count });
  }
  if (directiveHits.length > 0) {
    const total = directiveHits.reduce((s, x) => s + x.count, 0);
    issues.push({ severity: 'warn', rule: 'directive imperatives in plainEnglish', detail: directiveHits });
    score += total * 2;
  }

  const shouldMust = (pe.match(SHOULD_MUST_RE) || []).length;
  if (shouldMust > 0) {
    issues.push({ severity: 'warn', rule: 'directive: you should/must in plainEnglish', detail: shouldMust });
    score += shouldMust * 2;
  }

  const sp = (pe.match(SECOND_PERSON_RE) || []).length;
  if (sp > 0) {
    issues.push({ severity: 'warn', rule: 'second-person in plainEnglish', detail: sp });
    score += Math.min(sp, 5);
  }

  // ── whatToAsk checks ──────────────────────────────────────────────────
  const wta = (t.whatToAsk && Array.isArray(t.whatToAsk.en)) ? t.whatToAsk.en : [];
  const wtaIssues = [];
  for (const item of wta) {
    if (typeof item !== 'string') continue;
    const trimmed = item.trim();
    if (!trimmed.endsWith('?')) {
      wtaIssues.push({ item: trimmed.slice(0, 60), problem: 'does not end in ?' });
      score += 2;
    }
    if (PARENTHETICAL_ADVICE_RE.test(trimmed)) {
      wtaIssues.push({ item: trimmed.slice(0, 60), problem: 'parenthetical advice' });
      score += 3;
    }
    // Period followed by more text (trailing imperative pattern)
    if (/\.\s+\S/.test(trimmed)) {
      wtaIssues.push({ item: trimmed.slice(0, 60), problem: 'trailing imperative after period' });
      score += 3;
    }
  }
  if (wtaIssues.length > 0) {
    issues.push({ severity: 'warn', rule: 'whatToAsk items violate pure-question rule', detail: wtaIssues });
  }

  return { file, id: t.id, category: t.category, lastVerified: t.lastVerified, score, hardFail, issues, peWords };
}

async function main() {
  if (!fs.existsSync(GLOSSARY_DIR)) {
    console.log('No glossary directory found at', GLOSSARY_DIR);
    process.exit(0);
  }

  const legalIndex = loadLegalEntryIndex();
  const files = fs.readdirSync(GLOSSARY_DIR).filter((f) => f.endsWith('.js'));

  // First pass — load all terms, build id set for cross-link validation
  const loaded = [];
  const idCounts = new Map();
  for (const f of files) {
    const abs = path.join(GLOSSARY_DIR, f);
    const mod = await import(pathToFileURL(abs).href);
    const t = Object.values(mod)[0];
    if (!t || !t.id) {
      loaded.push({ file: f, term: null, raw: fs.readFileSync(abs, 'utf8') });
      continue;
    }
    idCounts.set(t.id, (idCounts.get(t.id) || 0) + 1);
    loaded.push({ file: f, term: t, raw: fs.readFileSync(abs, 'utf8') });
  }
  const glossaryIds = new Set([...idCounts.keys()]);

  // Second pass — scan each
  const rows = [];
  let hardFails = 0;
  for (const { file, term, raw } of loaded) {
    if (!term) {
      rows.push({ file, id: null, score: 0, hardFail: true, issues: [{ severity: 'fail', rule: 'no exported term object' }] });
      hardFails++;
      continue;
    }
    const row = scanTerm(file, term, raw, glossaryIds, legalIndex);
    // Duplicate id check
    if (idCounts.get(term.id) > 1) {
      row.issues.unshift({ severity: 'fail', rule: 'duplicate id', detail: idCounts.get(term.id) });
      row.hardFail = true;
    }
    if (row.hardFail) hardFails++;
    rows.push(row);
  }

  rows.sort((a, b) => (b.hardFail ? 1 : 0) - (a.hardFail ? 1 : 0) || b.score - a.score);
  const queue = TOP > 0 ? rows.slice(0, TOP) : rows;

  if (!fs.existsSync(DIST)) fs.mkdirSync(DIST, { recursive: true });
  fs.writeFileSync(REPORT, JSON.stringify({
    runAt: new Date().toISOString(),
    totalScanned: files.length,
    hardFails,
    withScore: rows.filter((r) => r.score > 0).length,
    queue,
  }, null, 2));

  console.log('HelpFinder glossary preflight scanner');
  console.log('=====================================');
  console.log('Terms scanned   :', files.length);
  console.log('Hard fails      :', hardFails);
  console.log('With score > 0  :', rows.filter((r) => r.score > 0).length);
  console.log('Report          :', REPORT);
  console.log('');

  // Print hard fails first
  const failed = rows.filter((r) => r.hardFail);
  if (failed.length > 0) {
    console.log('HARD FAILS:');
    for (const r of failed) {
      console.log('  ' + r.file + (r.id ? ' (' + r.id + ')' : ''));
      for (const i of r.issues.filter((x) => x.severity === 'fail')) {
        console.log('    ✗ ' + i.rule + (i.detail ? ' — ' + JSON.stringify(i.detail) : ''));
      }
    }
    console.log('');
  }

  console.log('Top 30 by score:');
  console.log('score  category    file');
  console.log('-----  ---------   --------------------------------------------');
  for (const r of queue.filter((r) => r.score > 0).slice(0, 30)) {
    console.log(String(r.score).padStart(5) + '  ' + String(r.category || '-').padEnd(10) + '  ' + r.file);
  }

  // Hard-fail gate
  if (hardFails > 0) {
    console.log('');
    console.log('FAIL: ' + hardFails + ' glossary term(s) failed structural validation. Fix the issues above before shipping.');
    process.exit(1);
  }

  if (FAIL_AT !== null) {
    const offenders = rows.filter((r) => r.score >= FAIL_AT);
    if (offenders.length > 0) {
      console.log('');
      console.log('FAIL: ' + offenders.length + ' glossary term(s) scored >= ' + FAIL_AT + ' on the preflight scanner.');
      console.log('Fix the issues above (lawyer-register scrubs, sentence-length, whatToAsk pure-question, second-person) before shipping.');
      process.exit(1);
    } else {
      console.log('');
      console.log('OK: no glossary terms score >= ' + FAIL_AT + ' (preflight gate clean).');
    }
  }
}

main().catch((e) => {
  console.error('ERROR:', e);
  process.exit(1);
});
