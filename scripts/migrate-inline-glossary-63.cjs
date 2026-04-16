#!/usr/bin/env node
/**
 * migrate-inline-glossary-63.cjs
 * ================================
 * Wires the GlossaryTooltip component into HelpFinder program cards.
 * Program descriptions that contain glossary terms (EBT, sliding scale,
 * intake, etc.) now render those terms as tappable highlights that expand
 * the plain-English definition inline — no page navigation.
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
    console.error('  Expected: ' + JSON.stringify(oldStr).slice(0, 200));
    failures++;
    return;
  }
  hf = hf.replace(oldStr, newStr);
  console.log('OK: ' + label);
  successes++;
}

// 1. Import GlossaryText after existing imports
doReplace(
  'import { helpFinderToGlossaryCategory, glossaryCategoryLabel } from "../data/legal/glossary-tag-map";\nimport { GLOSSARY_TERMS_BY_CATEGORY } from "../data/legal/glossary-index";\n',
  'import { helpFinderToGlossaryCategory, glossaryCategoryLabel } from "../data/legal/glossary-tag-map";\nimport { GLOSSARY_TERMS_BY_CATEGORY } from "../data/legal/glossary-index";\nimport GlossaryText from "./GlossaryTooltip";\n',
  'Import GlossaryText component'
);

// 2. Replace plain {desc} with <GlossaryText text={desc} /> in ProgramCard
doReplace(
  '          <div style={{ fontSize: 13, color: "#555", marginTop: 3, lineHeight: 1.45 }}>{desc}</div>\n',
  '          <div style={{ fontSize: 13, color: "#555", marginTop: 3, lineHeight: 1.45 }}><GlossaryText text={desc} maxHighlights={2} /></div>\n',
  'Replace program description with GlossaryText in ProgramCard'
);

if (failures === 0) {
  fs.writeFileSync(HF, hf, 'utf8');
}
console.log('\n' + successes + ' changes, ' + failures + ' failures.');
if (failures > 0) {
  console.error('\nABORT: file NOT written.');
  process.exit(1);
}
console.log('\nWrote: ' + path.relative(ROOT, HF));
