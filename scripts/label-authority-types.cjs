// scripts/label-authority-types.cjs
// One-shot labeling pass. Reads each entry's `tier` field and inserts a default
// authorityType. Skips entries that already have authorityType set (so manually-
// corrected entries like common-law, agency-program, federal-regulation are not
// overwritten).
//
// Defaults:
//   tier: "town"    -> authorityType: "local-ordinance"
//   tier: "federal" -> authorityType: "federal-statute"
//   tier: "state"   -> authorityType: "state-statute"
//
// After this pass, hand-corrections may be needed for specific entries that
// are actually state-regulation (NYCRR-based) or federal-regulation (CFR-based).
// The validator will keep them distinct as long as authorityType is right.

const path = require('path');
const fs = require('fs');

const ENTRIES_DIR = path.join(__dirname, '..', 'src', 'data', 'legal', 'entries');

const TIER_TO_AUTHORITY = {
  town: 'local-ordinance',
  village: 'local-ordinance',
  city: 'local-ordinance',
  county: 'local-ordinance',
  local: 'local-ordinance',
  federal: 'federal-statute',
  state: 'state-statute',
};

function labelFile(filename) {
  const filepath = path.join(ENTRIES_DIR, filename);
  const src = fs.readFileSync(filepath, 'utf8');

  if (/authorityType:\s*"/.test(src)) return 'skip-already-labeled';

  const tierMatch = src.match(/tier:\s*"([a-z]+)"/);
  if (!tierMatch) return 'skip-no-tier';

  const tier = tierMatch[1];
  const authority = TIER_TO_AUTHORITY[tier];
  if (!authority) return `skip-unknown-tier-${tier}`;

  // Insert authorityType line after jurisdiction line
  const jurisdictionLineRegex = /(^\s*jurisdiction:\s*"[^"]+",\n)/m;
  if (!jurisdictionLineRegex.test(src)) return 'skip-no-jurisdiction';

  const indent = (src.match(/^(\s*)jurisdiction:/m) || [, '  '])[1];
  const replacement = `$1${indent}authorityType: "${authority}",\n`;
  const updated = src.replace(jurisdictionLineRegex, replacement);

  if (updated === src) return 'skip-no-change';

  fs.writeFileSync(filepath, updated);
  return `labeled-${authority}`;
}

function main() {
  const files = fs.readdirSync(ENTRIES_DIR).filter(f => f.endsWith('.js'));
  const counts = {};
  for (const f of files) {
    const result = labelFile(f);
    counts[result] = (counts[result] || 0) + 1;
  }
  console.log('label-authority-types results:');
  for (const [k, v] of Object.entries(counts).sort((a, b) => b[1] - a[1])) {
    console.log(`  ${k}: ${v}`);
  }
}

main();
