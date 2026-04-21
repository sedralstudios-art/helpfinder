#!/usr/bin/env node
/*
 * scripts/bot-preflight-scan.cjs
 * ============================================================================
 * Preflight content-quality scanner. Runs every entry through the full
 * preflight rule set (UPL patterns, length cap, voice drift, directive
 * imperatives, advisory headers, embedded quotes, reading-level proxy,
 * trust-source count, thin content) and produces a ranked queue of the worst
 * offenders for retrofit.
 *
 * This is different from scripts/verify-entry-uniqueness.cjs — that is the
 * build-gated structural validator. This bot is for content quality scoring
 * and driving the retrofit queue.
 *
 * BANKRUPTCY FILES ARE SKIPPED ENTIRELY. Prof. Germain approved every word
 * and they remain off-limits to any rewrite workflow.
 *
 * Usage:
 *   node scripts/bot-preflight-scan.cjs                # full scan
 *   node scripts/bot-preflight-scan.cjs --top=500      # cap queue size
 *   node scripts/bot-preflight-scan.cjs --min-score=3  # only entries with N+ issues
 *
 * Output:
 *   dist/verification-report-preflight.json — ranked queue of offenders
 *   Console summary with top 50 by issue score
 */

const fs = require('fs');
const path = require('path');
const { pathToFileURL } = require('url');

const ROOT = path.resolve(__dirname, '..');
const ENTRIES_DIR = path.join(ROOT, 'src', 'data', 'legal', 'entries');
const DIST = path.join(ROOT, 'dist');
const REPORT = path.join(DIST, 'verification-report-preflight.json');

const args = process.argv.slice(2).reduce((acc, a) => {
  const m = a.match(/^--([^=]+)(?:=(.*))?$/);
  if (m) acc[m[1]] = m[2] === undefined ? true : m[2];
  return acc;
}, {});
const TOP = parseInt(args.top, 10) || 0;
const MIN_SCORE = parseInt(args['min-score'], 10) || 0;

// ── Hard exclusions ─────────────────────────────────────────────────────────
const BANKRUPTCY_FILES = new Set([
  'bankruptcy-automatic-stay-ny.js',
  'bankruptcy-chapter13-ny.js',
  'bankruptcy-chapter7-ny.js',
  'bankruptcy-discharge-ny.js',
  'bankruptcy-exemptions-ny.js',
  'bankruptcy-means-test-ny.js',
  'bankruptcy-reaffirmation-ny.js',
]);

const TRUST_AUTHORITY_TYPES = new Set([
  'state-statute', 'federal-statute', 'state-regulation', 'federal-regulation', 'common-law',
]);

// ── Rule regexes ────────────────────────────────────────────────────────────
const UPL_PATTERNS = [
  { name: 'UPL: Strategic considerations', re: /Strategic considerations/i },
  { name: 'UPL: Bottom line:', re: /Bottom line:/i },
  { name: 'UPL: Engage X counsel', re: /Engage [^.,\n]{0,40}(counsel|attorney|lawyer)/i },
];

const ADVISORY_HEADERS = [
  { name: 'Advisory header: Best practice', re: /\bBest practice[:\b]/i },
  { name: 'Advisory header: Strategic considerations for', re: /\bStrategic considerations for (plaintiffs|defendants)/i },
];

// Directive imperatives start-of-sentence
const DIRECTIVE_PATTERNS = [
  { name: 'Directive: Save the/a', re: /(^|[\.\?\!]\s+)Save (the|a) /g },
  { name: 'Directive: Get a/an', re: /(^|[\.\?\!]\s+)Get an? /g },
  { name: 'Directive: Move fast', re: /(^|[\.\?\!]\s+)Move fast/g },
  { name: 'Directive: Take photos/action', re: /(^|[\.\?\!]\s+)Take (photos|action|notes)/g },
  { name: 'Directive: Document the', re: /(^|[\.\?\!]\s+)Document the /g },
  { name: 'Directive: Always/Never (start)', re: /(^|[\.\?\!]\s+)(Always|Never) [a-z]/g },
  { name: 'Directive: Make sure to', re: /(^|[\.\?\!]\s+)Make sure to /g },
];

const SECOND_PERSON_RE = /\b(you|your|yours|you'?re|you'?ve|you'?ll|you'?d)\b/gi;
const EMBEDDED_QUOTE_RE = /"[^"]*"[^"]*"/; // naive but good enough for en: single-line scan

// ── Readability rules (added 2026-04-21) ────────────────────────────────────
// These catch lawyer-register drift that preflight-score-0 was missing. Score
// 0 should mean user-readable, not just validator-passing.

// Literal "(...)" citation placeholder — hard FAIL. Shipping "(...)" in a
// statute cite means the author didn't verify the subdivision number.
const CITATION_PLACEHOLDER_RE = /\(\.\.\.\)/;

// Lawyer-register markers — the worst offenders that a 6th-grade reader
// would not parse. Each occurrence adds score; capped to prevent one bad
// entry from dominating the queue.
const LAWYER_REGISTER_PATTERNS = [
  { name: 'Lawyer register: codified at', re: /\bcodified at\b/gi },
  { name: 'Lawyer register: by operation of law', re: /\bby operation of law\b/gi },
  { name: 'Lawyer register: pursuant to', re: /\bpursuant to\b/gi },
  { name: 'Lawyer register: thereof', re: /\bthereof\b/gi },
  { name: 'Lawyer register: hereinafter', re: /\bhereinafter\b/gi },
  { name: 'Lawyer register: the foregoing', re: /\bthe foregoing\b/gi },
  { name: 'Lawyer register: natural person', re: /\bnatural person\b/gi },
  { name: 'Lawyer register: in lieu of', re: /\bin lieu of\b/gi },
  { name: 'Lawyer register: notwithstanding', re: /\bnotwithstanding\b/gi },
  { name: 'Lawyer register: enumerated', re: /\benumerated\b/gi },
  { name: 'Lawyer register: authorized by', re: /\bauthorized by the\b/gi },
];

// Risky acronyms — must appear alongside an expansion (in parens, em-dash,
// or "(the X)") somewhere in the body. If the acronym is used without the
// expansion, the reader is left guessing. Common acronyms like SNAP, SSI,
// Medicaid, DMV, IRS are widely understood and not checked.
const RISKY_ACRONYMS = [
  { a: 'CSSA', expand: /Child Support Standards Act/i },
  { a: 'Title IV-D', expand: /federal child support|Social Security Act|child-support\s+services/i },
  { a: 'NICS', expand: /National Instant Criminal Background Check/i },
  { a: 'MBI-WPD', expand: /Medicaid Buy-In for Working People with Disabilities/i },
  { a: 'CCFA', expand: /Consumer Credit Fairness Act/i },
  { a: 'IDP', expand: /Impaired Driver Program/i },
  { a: 'DCJS', expand: /Division of Criminal Justice Services/i },
  { a: 'CCAP', expand: /Child Care Assistance Program/i },
  { a: 'ABD', expand: /Aged, Blind/i },
  { a: 'VITA', expand: /Volunteer Income Tax Assistance/i },
  { a: 'TCE', expand: /Tax Counseling for the Elderly/i },
  { a: 'DWAI', expand: /Driving While Ability Impaired|ability[- ]impaired/i },
  { a: 'IPV', expand: /intentional program violation/i },
];

// Statute-citation detector for density scoring. Matches §X, X USC Y,
// X CFR Y, X NYCRR Y, and NY code abbreviations like CPL 160.57.
const NY_CODE_RE = /\b(CPL|CPLR|DOM|FCT|VAT|VTL|GBS|GBL|GOB|CVP|SOS|SSL|PBH|RPP|RPL|LAB|RPA|RPT|EPT|EDN|EXC|INS|JUD|BSC|CVR|CRC|PML|SCA|SCP|VIL|WKC|TAX|PEN|CRS|MHY|NAV|PSL|PBO|PBA|PAR|PPH|DCD|OFP|ACA|NPC|ARS|MIL)\s+§?\s*\d+/g;
const CITATION_RE = /§\s*\d+[\w.\-]*|\b(\d+)\s+(USC|CFR|NYCRR)\s+[\w.\-]+/g;

// Title suffix that reads as lawyer titling rather than user-friendly.
// "Under CPL 160.57" at the end of a title tells the user nothing useful.
const TITLE_LAWYER_SUFFIX_RE = /\s+Under\s+(?:NY\s+)?(CPL|CPLR|DOM|FCT|VAT|VTL|GBS|GBL|GOB|CVP|SOS|SSL|PBH|RPP|LAB|\d+\s+USC|\d+\s+CFR|\d+\s+NYCRR)\s+\S+\s*$/i;

// ── Helpers ─────────────────────────────────────────────────────────────────
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

function citationDensity(text) {
  if (!text) return { ratio: 0, perSentence: 0, total: 0, sentences: 0 };
  const sentences = text.split(/[\.\?\!]+\s+/).filter((s) => s.trim().length > 3);
  if (!sentences.length) return { ratio: 0, perSentence: 0, total: 0, sentences: 0 };
  const cites = (text.match(CITATION_RE) || []).length + (text.match(NY_CODE_RE) || []).length;
  return { ratio: cites / sentences.length, total: cites, sentences: sentences.length };
}

function citationOpenerRatio(text) {
  if (!text) return 0;
  const sentences = text.split(/[\.\?\!]+\s+/).filter((s) => s.trim().length > 3);
  if (!sentences.length) return 0;
  const openerRe = /^\s*(§|\d+\s+(USC|CFR|NYCRR)|\b(CPL|CPLR|DOM|FCT|VAT|VTL|GBS|GBL|GOB|CVP|SOS|SSL|PBH|RPP|LAB)\s+§?\s*\d+)/i;
  const withCiteOpener = sentences.filter((s) => openerRe.test(s.slice(0, 60))).length;
  return withCiteOpener / sentences.length;
}

function findUndefinedAcronyms(text) {
  if (!text) return [];
  const missing = [];
  for (const { a, expand } of RISKY_ACRONYMS) {
    // Escape hyphens and dots in the acronym for regex
    const aEsc = a.replace(/[-.]/g, '\\$&');
    const used = new RegExp(`\\b${aEsc}\\b`).test(text);
    if (used && !expand.test(text)) missing.push(a);
  }
  return missing;
}

function scanEntry(file, entry, raw) {
  const issues = [];
  let score = 0;
  const wim = (entry.whatItMeans && entry.whatItMeans.en) || '';
  const sum = (entry.summary && entry.summary.en) || '';

  // Hard FAILs (highest weight)
  for (const p of UPL_PATTERNS) {
    if (p.re.test(wim) || p.re.test(sum)) {
      issues.push({ severity: 'fail', rule: p.name });
      score += 10;
    }
  }

  const wimWords = wordCount(wim);
  if (wimWords > 1800) {
    issues.push({ severity: 'fail', rule: 'whatItMeans > 1800 words', detail: wimWords });
    score += 10;
  } else if (wimWords > 1500) {
    issues.push({ severity: 'warn', rule: 'whatItMeans approaching cap', detail: wimWords });
    score += 3;
  }

  // Trust sources
  const srcCount = Array.isArray(entry.sources) ? entry.sources.length : 0;
  if (TRUST_AUTHORITY_TYPES.has(entry.authorityType) && srcCount < 2) {
    issues.push({ severity: 'warn', rule: 'trust source < 2', detail: srcCount });
    score += 4;
  }

  // Advisory headers
  for (const p of ADVISORY_HEADERS) {
    if (p.re.test(wim) || p.re.test(sum)) {
      issues.push({ severity: 'warn', rule: p.name });
      score += 5;
    }
  }

  // Second-person scan over all body text fields
  const bodyFields = [
    ['summary', sum],
    ['whatItMeans', wim],
    ['example', (entry.example && entry.example.en) || ''],
  ];
  if (Array.isArray((entry.whoQualifies && entry.whoQualifies.en) || null)) {
    bodyFields.push(['whoQualifies', entry.whoQualifies.en.join(' ')]);
  }
  if (Array.isArray((entry.yourRights && entry.yourRights.en) || null)) {
    bodyFields.push(['yourRights', entry.yourRights.en.join(' ')]);
  }
  if (Array.isArray((entry.legalOptions && entry.legalOptions.en) || null)) {
    bodyFields.push(['legalOptions', entry.legalOptions.en.join(' ')]);
  }
  let secondPersonHits = 0;
  const spFieldHits = {};
  for (const [fieldName, text] of bodyFields) {
    const matches = text.match(SECOND_PERSON_RE) || [];
    if (matches.length > 0) {
      spFieldHits[fieldName] = matches.length;
      secondPersonHits += matches.length;
    }
  }
  if (secondPersonHits > 0) {
    issues.push({ severity: 'warn', rule: 'second-person in body', detail: secondPersonHits, fields: spFieldHits });
    score += Math.min(secondPersonHits, 10); // cap so one bad entry doesn't dominate
  }

  // Directive imperatives
  const directiveHits = [];
  for (const p of DIRECTIVE_PATTERNS) {
    const matches = (wim.match(p.re) || []).length + (sum.match(p.re) || []).length;
    if (matches > 0) {
      directiveHits.push({ rule: p.name, count: matches });
      score += matches * 2;
    }
  }
  if (directiveHits.length > 0) {
    issues.push({ severity: 'warn', rule: 'directive imperatives', detail: directiveHits });
  }

  // Reading level proxy — avg sentence length
  const avgSent = avgSentenceLength(wim);
  if (avgSent > 35) {
    issues.push({ severity: 'warn', rule: 'long sentences (avg > 35 words)', detail: Math.round(avgSent) });
    score += 2;
  }

  // Thin content
  if (wimWords < 300) {
    issues.push({ severity: 'warn', rule: 'thin whatItMeans (< 300 words)', detail: wimWords });
    score += 3;
  }

  // Embedded quote in en: line — strip escaped \" first, since those are
  // valid JS and don't break vite. Only raw unescaped quotes inside the string
  // are the real FAIL. Earlier version flagged escaped quotes as false
  // positives on all legacy entries using \"aid continuing\" etc.
  const enLines = raw.match(/en:\s*"[^\n]*"/g) || [];
  for (const line of enLines) {
    const stripped = line.replace(/\\"/g, '');
    const quoteCount = (stripped.match(/"/g) || []).length;
    if (quoteCount > 2) {
      issues.push({ severity: 'fail', rule: 'embedded double quote in en:' });
      score += 10;
      break;
    }
  }

  // ── Readability rules ─────────────────────────────────────────────────────
  // Gather body text for readability scoring
  const bodyParts = [wim, sum];
  if (Array.isArray((entry.yourRights && entry.yourRights.en) || null))
    bodyParts.push(entry.yourRights.en.join(' '));
  if (Array.isArray((entry.whoQualifies && entry.whoQualifies.en) || null))
    bodyParts.push(entry.whoQualifies.en.join(' '));
  if (Array.isArray((entry.legalOptions && entry.legalOptions.en) || null))
    bodyParts.push(entry.legalOptions.en.join(' '));
  if (entry.example && entry.example.en) bodyParts.push(entry.example.en);
  const fullBody = bodyParts.join(' ');

  // Hard FAIL — literal (...) placeholder means the author never resolved the
  // subdivision number. Shipping that is an error.
  if (CITATION_PLACEHOLDER_RE.test(fullBody)) {
    const count = (fullBody.match(/\(\.\.\.\)/g) || []).length;
    issues.push({ severity: 'fail', rule: 'citation placeholder (...)', detail: count });
    score += 10;
  }

  // Lawyer-register markers — 3 points each, capped at 10
  const lawyerHits = [];
  for (const p of LAWYER_REGISTER_PATTERNS) {
    const count = (fullBody.match(p.re) || []).length;
    if (count > 0) lawyerHits.push({ rule: p.name, count });
  }
  if (lawyerHits.length > 0) {
    const totalLawyerHits = lawyerHits.reduce((s, x) => s + x.count, 0);
    issues.push({ severity: 'warn', rule: 'lawyer register markers', detail: lawyerHits });
    score += Math.min(totalLawyerHits * 3, 10);
  }

  // Citation density in whatItMeans — too many statute cites per sentence
  // means the reader can't parse the prose. Target is < 0.8 citations per
  // sentence on average for a user-readable explainer.
  const cd = citationDensity(wim);
  if (cd.ratio > 1.2) {
    issues.push({ severity: 'warn', rule: 'citation density > 1.2 per sentence', detail: cd.ratio.toFixed(2) });
    score += 5;
  } else if (cd.ratio > 0.8) {
    issues.push({ severity: 'warn', rule: 'citation density > 0.8 per sentence', detail: cd.ratio.toFixed(2) });
    score += 2;
  }

  // Citation-opener density — sentences starting with a statute cite read
  // like a legal memo. Target < 25% of sentences opening with a cite.
  const coRatio = citationOpenerRatio(wim);
  if (coRatio > 0.35) {
    issues.push({ severity: 'warn', rule: 'citation-opener sentences > 35%', detail: (coRatio * 100).toFixed(0) + '%' });
    score += 3;
  }

  // Undefined acronyms — flagged list must be expanded somewhere in the body
  const undef = findUndefinedAcronyms(fullBody);
  if (undef.length > 0) {
    issues.push({ severity: 'warn', rule: 'acronyms used without expansion', detail: undef });
    score += Math.min(undef.length, 5);
  }

  // Tighter avg-sentence-length threshold for readability (existing rule
  // already catches > 35; this catches 28-35 as a lower-severity nudge).
  if (avgSent > 28 && avgSent <= 35) {
    issues.push({ severity: 'warn', rule: 'long sentences (avg 28-35 words)', detail: Math.round(avgSent) });
    score += 1;
  }

  // Title lawyer-suffix — "Under CPL 160.57" etc. at the end of the title
  const title = (entry.title && entry.title.en) || '';
  if (TITLE_LAWYER_SUFFIX_RE.test(title)) {
    issues.push({ severity: 'warn', rule: 'title ends with statute-cite suffix' });
    score += 2;
  }

  return { file, id: entry.id, category: entry.category, authorityType: entry.authorityType, lastVerified: entry.lastVerified, wimWords, srcCount, score, issues };
}

async function main() {
  const files = fs.readdirSync(ENTRIES_DIR).filter((f) => f.endsWith('.js'));
  const rows = [];
  for (const f of files) {
    if (BANKRUPTCY_FILES.has(f)) continue;
    const abs = path.join(ENTRIES_DIR, f);
    const mod = await import(pathToFileURL(abs).href);
    const e = Object.values(mod)[0];
    if (!e || !e.id) continue;
    if (e.draft || e.status !== 'active') continue;
    const raw = fs.readFileSync(abs, 'utf8');
    const row = scanEntry(f, e, raw);
    if (row.score >= MIN_SCORE) rows.push(row);
  }
  rows.sort((a, b) => b.score - a.score);
  const queue = TOP > 0 ? rows.slice(0, TOP) : rows;

  const report = {
    runAt: new Date().toISOString(),
    totalScanned: files.length - BANKRUPTCY_FILES.size,
    bankruptcySkipped: BANKRUPTCY_FILES.size,
    withIssues: rows.length,
    queueSize: queue.length,
    rules: {
      hardFails: 'UPL patterns, whatItMeans > 1800 words, embedded double quotes',
      warnings: 'advisory headers, second-person in body, directive imperatives, long sentences, thin content, trust source < 2, whatItMeans > 1500',
    },
    queue,
  };

  if (!fs.existsSync(DIST)) fs.mkdirSync(DIST, { recursive: true });
  fs.writeFileSync(REPORT, JSON.stringify(report, null, 2));

  console.log('HelpFinder preflight scanner');
  console.log('=============================');
  console.log('Entries scanned :', report.totalScanned);
  console.log('Bankruptcy skip :', report.bankruptcySkipped);
  console.log('With issues     :', rows.length);
  console.log('Queue size      :', queue.length);
  console.log('Report          :', REPORT);
  console.log('');
  console.log('Top 50 by score:');
  console.log('score  issues  category    file');
  console.log('-----  ------  ---------  --------------------------------------------');
  for (const r of queue.slice(0, 50)) {
    console.log(String(r.score).padStart(5) + '  ' + String(r.issues.length).padStart(6) + '  ' + String(r.category || '-').padEnd(10) + '  ' + r.file);
  }
}

main().catch((e) => {
  console.error('ERROR:', e);
  process.exit(1);
});
