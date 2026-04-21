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

  // Embedded quote in en: line (rough check on raw)
  const enLines = raw.match(/en:\s*"[^\n]*"/g) || [];
  for (const line of enLines) {
    const quoteCount = (line.match(/"/g) || []).length;
    if (quoteCount > 2) {
      issues.push({ severity: 'fail', rule: 'embedded double quote in en:' });
      score += 10;
      break;
    }
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
