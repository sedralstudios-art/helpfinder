#!/usr/bin/env node
/**
 * scripts/migrate-helpfinder-serves-02.cjs
 *
 * Adds the multi-town `serves` field plumbing to the help program schema.
 *
 * Two files, five logical patches (six edits). All patches happen in-memory
 * first — if any patch aborts, NO files are written. Atomic across both files.
 *
 * File 1: src/components/HelpFinderQuestions.js
 *   1. Add applyTownFilter helper function (exported, no-op when userTown null)
 *
 * File 2: src/components/HelpFinder.jsx
 *   2. Add SERVES doc block adjacent to the existing REACH_TIERS block
 *   3. Add applyTownFilter to the existing import statement
 *   4. Add userTown state variable (initialized to null)
 *   5. Wire applyTownFilter into the filteredPrograms useMemo
 *   5b. Add userTown to the dep array
 *
 * After this ships, the schema is ready to receive `serves: [...]` arrays on
 * individual programs, and the filter is ready to apply town-level filtering
 * the moment a userTown value comes from anywhere (town picker UI, zip→town
 * lookup, URL parameter, etc). Until then applyTownFilter is a no-op.
 *
 * Each patch is idempotent (skips if already applied) and aborts cleanly
 * if its anchor isn't found.
 */

const fs = require('fs');
const path = require('path');

const QUESTIONS_FILE = path.join(__dirname, '..', 'src', 'components', 'HelpFinderQuestions.js');
const HELPFINDER_FILE = path.join(__dirname, '..', 'src', 'components', 'HelpFinder.jsx');

// ─────────────────────────────────────────────
// Read both files, normalize line endings
// ─────────────────────────────────────────────
let src1 = fs.readFileSync(QUESTIONS_FILE, 'utf8');
let src2 = fs.readFileSync(HELPFINDER_FILE, 'utf8');
const orig1 = src1;
const orig2 = src2;
const hadCRLF1 = src1.includes('\r\n');
const hadCRLF2 = src2.includes('\r\n');
src1 = src1.replace(/\r\n/g, '\n');
src2 = src2.replace(/\r\n/g, '\n');

let patchesApplied = 0;
let patchesSkipped = 0;

function abort(msg) {
  console.error('FATAL:', msg);
  console.error('No changes written to either file.');
  process.exit(1);
}

function patch(file, name, alreadyAppliedCheck, oldStr, newStr) {
  let src = file === 1 ? src1 : src2;
  if (alreadyAppliedCheck(src)) {
    console.log(`  ${name}: already applied, skipping`);
    patchesSkipped++;
    return;
  }
  if (!src.includes(oldStr)) {
    abort(`${name}: anchor not found in ${file === 1 ? 'HelpFinderQuestions.js' : 'HelpFinder.jsx'}`);
  }
  src = src.replace(oldStr, newStr);
  if (file === 1) src1 = src; else src2 = src;
  console.log(`  ${name}: applied`);
  patchesApplied++;
}

console.log('Reading source files...');
console.log('');

// ─────────────────────────────────────────────
// FILE 1: HelpFinderQuestions.js
// PATCH 1: Add applyTownFilter helper
// ─────────────────────────────────────────────
console.log('━━ FILE 1: HelpFinderQuestions.js ━━');
console.log('');
console.log('━━ 1. Add applyTownFilter helper ━━');
{
  const newFunction = `
// Returns programs filtered by user's town. A program matches if either:
//   - its \`town\` field equals userTown (single-town program), OR
//   - its \`serves\` array includes userTown (multi-town program)
// When userTown is null/undefined, returns programs unchanged (no-op).
//
// Multi-town schema fix added April 9, 2026: programs that serve multiple
// specific towns (e.g. a Foodlink mobile pantry stopping in 6 villages, or
// a workforce program serving Spencerport, Hilton, and Hamlin from a Greece
// office) can declare \`serves: ["brockport","spencerport","hilton"]\` and
// will appear in each town's results without needing duplicate program entries.
export function applyTownFilter(programs, userTown) {
  if (!userTown) return programs;
  return programs.filter(p => p.town === userTown || (p.serves && p.serves.includes(userTown)));
}
`;

  patch(
    1,
    'applyTownFilter helper',
    (s) => s.includes('export function applyTownFilter'),
    'export function applyAnswerFilters(programs, answers) {\n  let result = programs;\n  for (const [questionKey, value] of Object.entries(answers || {})) {\n    const question = QUESTIONS[questionKey];\n    if (question && typeof question.filter === \'function\') {\n      result = question.filter(result, value);\n    }\n  }\n  return result;\n}',
    `export function applyAnswerFilters(programs, answers) {\n  let result = programs;\n  for (const [questionKey, value] of Object.entries(answers || {})) {\n    const question = QUESTIONS[questionKey];\n    if (question && typeof question.filter === 'function') {\n      result = question.filter(result, value);\n    }\n  }\n  return result;\n}\n${newFunction}`
  );
}

// ─────────────────────────────────────────────
// FILE 2: HelpFinder.jsx
// ─────────────────────────────────────────────
console.log('');
console.log('━━ FILE 2: HelpFinder.jsx ━━');
console.log('');

// PATCH 2: SERVES doc block adjacent to REACH_TIERS
console.log('━━ 2. Add SERVES doc block near REACH_TIERS ━━');
{
  const servesDocBlock = `// SERVES — multi-town service declaration (added April 9, 2026)
//
//   serves: ["town1","town2",...]  Optional array of additional towns this
//                                  program serves. A program shows in a town's
//                                  results if program.town === userTown OR
//                                  program.serves.includes(userTown).
//
//   Use serves when ONE program physically operates in or covers MULTIPLE
//   specific towns — e.g. a Foodlink mobile pantry stopping in 6 villages,
//   or a workforce program serving Spencerport, Hilton, and Hamlin from a
//   Greece office. Do NOT use serves to express "regional" coverage that
//   isn't town-specific — use reach:"regional" for that.
//
//   serves is OPTIONAL. Single-town programs use only the existing town field.
//   Multi-town programs may set both town (the primary location) and serves
//   (the additional towns covered).
// ─────────────────────────────────────────────

`;

  patch(
    2,
    'SERVES doc block',
    (s) => s.includes('SERVES — multi-town service declaration'),
    `// HelpFinder's rule: match the operator's published specificity, never\n// exceed it. Aggregation in a directory amplifies discovery risk for\n// vulnerable populations beyond what each source intended.\n// ─────────────────────────────────────────────\n\nconst DATA_VERIFIED`,
    `// HelpFinder's rule: match the operator's published specificity, never\n// exceed it. Aggregation in a directory amplifies discovery risk for\n// vulnerable populations beyond what each source intended.\n// ─────────────────────────────────────────────\n\n${servesDocBlock}const DATA_VERIFIED`
  );
}

// PATCH 3: Add applyTownFilter to import statement
console.log('');
console.log('━━ 3. Add applyTownFilter to import ━━');
patch(
  2,
  'import update',
  (s) => s.includes('applyAnswerFilters, applyTownFilter, getUrgencyLevel'),
  'import { QUESTIONS, getFirstQuestion, isDirectToResults, isHiddenCategory, getInitialPrograms, applyAnswerFilters, getUrgencyLevel } from "./HelpFinderQuestions";',
  'import { QUESTIONS, getFirstQuestion, isDirectToResults, isHiddenCategory, getInitialPrograms, applyAnswerFilters, applyTownFilter, getUrgencyLevel } from "./HelpFinderQuestions";'
);

// PATCH 4: Add userTown state variable
console.log('');
console.log('━━ 4. Add userTown state ━━');
patch(
  2,
  'userTown state',
  (s) => s.includes('setUserTown'),
  '  const [currentQuestionKey, setCurrentQuestionKey] = useState(null);\n  const containerRef = useRef(null);',
  '  const [currentQuestionKey, setCurrentQuestionKey] = useState(null);\n  const [userTown, setUserTown] = useState(null);  // null = no town filter; set by future town picker / zip lookup / URL param\n  const containerRef = useRef(null);'
);

// PATCH 5: Wire applyTownFilter into filteredPrograms useMemo
console.log('');
console.log('━━ 5. Wire applyTownFilter into filteredPrograms ━━');
patch(
  2,
  'filteredPrograms wire',
  (s) => s.includes('applyTownFilter(progs, userTown)'),
  '    progs = applyAnswerFilters(progs, answers);',
  '    progs = applyAnswerFilters(progs, answers);\n    progs = applyTownFilter(progs, userTown);'
);

// PATCH 5b: Add userTown to dep array
console.log('');
console.log('━━ 5b. Add userTown to dep array ━━');
patch(
  2,
  'dep array update',
  (s) => /\}, \[category, who, how, nearMe, userCoords, answers, userTown\]\);/.test(s),
  '}, [category, who, how, nearMe, userCoords, answers]);',
  '}, [category, who, how, nearMe, userCoords, answers, userTown]);'
);

// ─────────────────────────────────────────────
// Write both files (only after all patches succeeded)
// ─────────────────────────────────────────────
if (hadCRLF1) src1 = src1.replace(/\n/g, '\r\n');
if (hadCRLF2) src2 = src2.replace(/\n/g, '\r\n');

if (src1 !== orig1) {
  fs.writeFileSync(QUESTIONS_FILE, src1);
  console.log('');
  console.log(`HelpFinderQuestions.js: ${orig1.length} → ${src1.length} bytes`);
}
if (src2 !== orig2) {
  fs.writeFileSync(HELPFINDER_FILE, src2);
  console.log(`HelpFinder.jsx: ${orig2.length} → ${src2.length} bytes`);
}

if (src1 === orig1 && src2 === orig2) {
  console.log('');
  console.log('No changes (all patches already applied).');
}

console.log('');
console.log(`Patches applied: ${patchesApplied}, skipped: ${patchesSkipped}`);
console.log('');
console.log('TEST IN DEV MODE BEFORE COMMITTING:');
console.log('  npm run dev');
console.log('');
console.log('Manual test checklist:');
console.log('  1. Site still loads, no console errors');
console.log('  2. Pick any category → results appear (filter chain still works)');
console.log('  3. Pick legal flow → branching still works (regression check)');
console.log('  4. Pick crisis flow → branching still works (regression check)');
