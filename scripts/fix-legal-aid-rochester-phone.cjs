// scripts/fix-legal-aid-rochester-phone.cjs
//
// One-shot: Legal Aid Society of Rochester is consistently miscited as
// (585) 295-5727 across 77 entries. Correct number is (585) 232-4090,
// confirmed in fact-check passes B2-B6 (2026-04-27) against
// https://www.lasroc.org and recurring across multiple cited sources.
//
// Idempotent — re-running is a no-op.

const fs = require('fs');
const path = require('path');

const ENTRIES_DIR = path.join(__dirname, '..', 'src', 'data', 'legal', 'entries');
const BANKRUPTCY_FILES = new Set([
  'bankruptcy-automatic-stay-ny.js',
  'bankruptcy-chapter13-ny.js',
  'bankruptcy-chapter7-ny.js',
  'bankruptcy-discharge-ny.js',
  'bankruptcy-exemptions-ny.js',
  'bankruptcy-means-test-ny.js',
  'bankruptcy-reaffirmation-ny.js',
]);

const WRONG = '(585) 295-5727';
const RIGHT = '(585) 232-4090';

function main() {
  const files = fs.readdirSync(ENTRIES_DIR).filter(f => f.endsWith('.js'));
  let touched = 0;
  for (const f of files) {
    if (BANKRUPTCY_FILES.has(f)) continue;
    const filePath = path.join(ENTRIES_DIR, f);
    const src = fs.readFileSync(filePath, 'utf8');
    if (!src.includes(WRONG)) continue;
    const next = src.split(WRONG).join(RIGHT);
    fs.writeFileSync(filePath, next);
    console.log('Fixed: ' + f);
    touched++;
  }
  console.log(`\n${touched} files updated.`);
}

main();
