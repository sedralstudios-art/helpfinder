#!/usr/bin/env node
/**
 * migrate-drop-income-comment-cleanup-51.cjs
 * ==========================================
 * Follow-up to migrate-drop-income-question-50. Removes the orphaned
 * `{/* ── HOW ── *\/}` section-header comment that was left behind above
 * the RESULTS render block after migration 50 deleted the HOW screen.
 *
 * Pure ASCII edit, but routed through the migration-script pattern per
 * CLAUDE.md ("Edits to source files go through numbered CJS migration
 * scripts") rather than paste-edited directly.
 */

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const HF = path.join(ROOT, 'src/components/HelpFinder.jsx');
let hf = fs.readFileSync(HF, 'utf8');
let failures = 0;
let successes = 0;

function doReplace(oldStr, newStr, label) {
  if (!hf.includes(oldStr)) {
    console.error('ABORT: ' + label);
    console.error('  Expected: ' + JSON.stringify(oldStr).slice(0, 160));
    failures++;
    return;
  }
  hf = hf.replace(oldStr, newStr);
  console.log('OK: ' + label);
  successes++;
}

doReplace(
  '        {/* \u2500\u2500 HOW \u2500\u2500 */}\n        {/* \u2500\u2500 RESULTS \u2500\u2500 */}\n',
  '        {/* \u2500\u2500 RESULTS \u2500\u2500 */}\n',
  'Remove orphaned HOW section-header comment'
);

if (failures === 0) {
  fs.writeFileSync(HF, hf, 'utf8');
}
console.log('\n' + successes + ' changes, ' + failures + ' failures.');
if (failures > 0) {
  console.error('\nABORT: source file NOT written.');
  process.exit(1);
}
console.log('\nWrote: ' + path.relative(ROOT, HF));
