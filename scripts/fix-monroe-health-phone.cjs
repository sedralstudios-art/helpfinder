// scripts/fix-monroe-health-phone.cjs
//
// One-shot: Monroe County Department of Public Health main line is
// consistently miscited as (585) 753-5171 in 18 entries. Correct main
// line is (585) 753-5555, verified against monroecounty.gov/health-contact
// (2026-04-28). Idempotent — re-running is a no-op.

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

const WRONG = '(585) 753-5171';
const RIGHT = '(585) 753-5555';

function main() {
  const files = fs.readdirSync(ENTRIES_DIR).filter(f => f.endsWith('.js'));
  let touched = 0;
  for (const f of files) {
    if (BANKRUPTCY_FILES.has(f)) continue;
    const filePath = path.join(ENTRIES_DIR, f);
    const src = fs.readFileSync(filePath, 'utf8');
    if (!src.includes(WRONG)) continue;
    fs.writeFileSync(filePath, src.split(WRONG).join(RIGHT));
    console.log('Fixed: ' + f);
    touched++;
  }
  console.log(`\n${touched} files updated.`);
}

main();
