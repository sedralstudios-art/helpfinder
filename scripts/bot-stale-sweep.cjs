#!/usr/bin/env node
/*
 * scripts/bot-stale-sweep.cjs
 * ============================================================================
 * Stale-verified sweep. Lists every live entry whose lastVerified date is
 * older than a threshold (default 180 days). Output sorts by age descending
 * so the most outdated entries are at the top of the queue.
 *
 * Usage:
 *   node scripts/bot-stale-sweep.cjs                # default 180-day threshold
 *   node scripts/bot-stale-sweep.cjs --days=90      # custom threshold
 *   node scripts/bot-stale-sweep.cjs --category=housing  # filter one category
 *
 * Output:
 *   dist/verification-report-stale.json — machine-readable
 *   Console table of stale entries with age in days
 */

const fs = require('fs');
const path = require('path');
const { pathToFileURL } = require('url');

const ROOT = path.resolve(__dirname, '..');
const ENTRIES_DIR = path.join(ROOT, 'src', 'data', 'legal', 'entries');
const DIST = path.join(ROOT, 'dist');
const REPORT = path.join(DIST, 'verification-report-stale.json');

const args = process.argv.slice(2).reduce((acc, a) => {
  const m = a.match(/^--([^=]+)(?:=(.*))?$/);
  if (m) acc[m[1]] = m[2] === undefined ? true : m[2];
  return acc;
}, {});
const DAYS = parseInt(args.days, 10) || 180;
const CATEGORY = args.category || null;

async function main() {
  const files = fs.readdirSync(ENTRIES_DIR).filter((f) => f.endsWith('.js'));
  const now = Date.now();
  const rows = [];
  for (const f of files) {
    const mod = await import(pathToFileURL(path.join(ENTRIES_DIR, f)).href);
    const e = Object.values(mod)[0];
    if (!e || !e.id || e.draft || e.status !== 'active') continue;
    if (CATEGORY && e.category !== CATEGORY) continue;
    const dateStr = e.lastVerified || e.lastAudited;
    if (!dateStr) {
      rows.push({ file: f, id: e.id, category: e.category, ageDays: Infinity, lastVerified: null });
      continue;
    }
    const d = new Date(dateStr + 'T00:00:00Z');
    if (isNaN(d.getTime())) {
      rows.push({ file: f, id: e.id, category: e.category, ageDays: Infinity, lastVerified: dateStr });
      continue;
    }
    const ageDays = Math.floor((now - d.getTime()) / (1000 * 60 * 60 * 24));
    if (ageDays >= DAYS) {
      rows.push({ file: f, id: e.id, category: e.category, ageDays, lastVerified: dateStr });
    }
  }
  rows.sort((a, b) => b.ageDays - a.ageDays);

  const report = {
    runAt: new Date().toISOString(),
    threshold: DAYS,
    category: CATEGORY,
    totalStale: rows.length,
    entries: rows,
  };
  if (!fs.existsSync(DIST)) fs.mkdirSync(DIST, { recursive: true });
  fs.writeFileSync(REPORT, JSON.stringify(report, null, 2));

  console.log('HelpFinder stale-verified sweep');
  console.log('================================');
  console.log('Threshold:', DAYS, 'days');
  if (CATEGORY) console.log('Category filter:', CATEGORY);
  console.log('Entries past threshold:', rows.length);
  console.log('Report:', REPORT);
  console.log('');
  console.log('Top 25 oldest:');
  console.log('age(days)  category    file');
  console.log('---------  ---------  --------------------------------------------');
  for (const r of rows.slice(0, 25)) {
    const age = r.ageDays === Infinity ? 'none' : String(r.ageDays);
    console.log(age.padStart(9) + '  ' + String(r.category || '-').padEnd(10) + '  ' + r.file);
  }
}

main().catch((e) => {
  console.error('ERROR:', e);
  process.exit(1);
});
