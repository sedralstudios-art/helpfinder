#!/usr/bin/env node
/**
 * migrate-remove-counts-37.cjs
 *
 * Remove hardcoded, stale counts from user-facing copy on LandingPage.jsx.
 * Site grows multiple times daily — numbers are a maintenance tax and a
 * trust hazard when they drift. "75" on one page and "46" on another is
 * exactly the problem we're fixing.
 *
 * Changes (5 string replacements, all in LandingPage.jsx):
 *   1. Know Your Rights card (line ~785, EN only, no i18n key)
 *   2. aboutP2 EN  (line ~115)
 *   3. aboutP2 ES  (line ~189)
 *   4. aboutP2 AR  (line ~288)
 *   5. aboutP2 ZH  (line ~443)
 *
 * DELIBERATELY SKIPPED (awaiting native-speaker review per README in
 * src/data/legal/translations/): NE, SW, MY, SO aboutP2 strings. Their
 * current (stale) copy stays live rather than shipping an unreviewed
 * rewrite. Do NOT "helpfully" fill these in from machine translation —
 * the whole pitch is trust.
 *
 * ALSO UNTOUCHED: LegalLibrary.jsx {LEGAL_ENTRIES.length} — dynamic,
 * self-updating, always truthful. That's the one count on the site that
 * can never be wrong.
 */

const fs = require('fs');
const path = require('path');

const FILE = path.join(__dirname, '..', 'src', 'components', 'LandingPage.jsx');

const REPLACEMENTS = [
  {
    label: 'Know Your Rights card (EN)',
    from: '46 free legal guides. Benefits, housing, employment, immigration. In 20 languages.',
    to:   'Free legal guides. Benefits, housing, employment, immigration.',
  },
  {
    label: 'aboutP2 EN',
    from: 'Starting in Rochester, NY — with 250+ programs across 36 categories in 8 languages. Food, housing, healthcare, legal help, mental health, job training, and more. Every program is verified by hand.',
    to:   'Starting in Rochester, NY. Free. Verified. No account needed. Growing daily.',
  },
  {
    label: 'aboutP2 ES',
    from: 'Comenzando en Rochester, NY — con más de 250 programas en 36 categorías en 8 idiomas. Comida, vivienda, salud, ayuda legal, salud mental, capacitación laboral y más. Cada programa verificado a mano.',
    to:   'Comenzando en Rochester, NY. Gratis. Verificado. Sin cuenta. Creciendo cada día.',
  },
  {
    label: 'aboutP2 AR',
    from: 'المدينة الأولى روتشستر — أكثر من 180 برنامجاً في 34 فئة.',
    to:   'نبدأ في روتشستر، نيويورك. مجاني. موثّق. بدون حساب. ينمو كل يوم.',
  },
  {
    label: 'aboutP2 ZH',
    from: '第一个城市是Rochester, NY — 34个类别中有180+个项目。',
    to:   '从纽约州罗切斯特起步。免费。已核实。无需账户。每日更新。',
  },
];

if (!fs.existsSync(FILE)) {
  console.error('✗ File not found: ' + FILE);
  console.error('  Run this script from the repo root: node scripts/migrate-remove-counts-37.cjs');
  process.exit(1);
}

let src = fs.readFileSync(FILE, 'utf8');
let applied = 0;
const failures = [];

for (const r of REPLACEMENTS) {
  const count = src.split(r.from).length - 1;
  if (count === 0) {
    failures.push(r.label + ' — source string NOT FOUND (already migrated or file drift?)');
    continue;
  }
  if (count > 1) {
    failures.push(r.label + ' — source string matched ' + count + ' times (expected 1), aborting to avoid collateral damage');
    continue;
  }
  src = src.replace(r.from, r.to);
  console.log('✓ ' + r.label);
  applied++;
}

if (failures.length > 0) {
  console.error('\n── Failures ──');
  for (const f of failures) console.error('✗ ' + f);
  console.error('\nNo changes written. Fix the failures above and re-run.');
  process.exit(1);
}

fs.writeFileSync(FILE, src, 'utf8');

// Verification
console.log('\n── Verification ──');
const after = fs.readFileSync(FILE, 'utf8');
const checks = [
  ['No "46 free legal guides"',      !after.includes('46 free legal guides')],
  ['No "250+ programs"',             !after.includes('250+ programs')],
  ['No "más de 250 programas"',      !after.includes('más de 250 programas')],
  ['No "180 برنامجاً"',              !after.includes('180 برنامجاً')],
  ['No "180+个项目"',                !after.includes('180+个项目')],
  ['New EN aboutP2 present',         after.includes('Growing daily.')],
  ['New ES aboutP2 present',         after.includes('Creciendo cada día.')],
  ['New AR aboutP2 present',         after.includes('ينمو كل يوم.')],
  ['New ZH aboutP2 present',         after.includes('每日更新。')],
  ['New legal card copy present',    after.includes('Free legal guides. Benefits, housing, employment, immigration.')],
  // Guard: confirm we did NOT touch the 4 deferred languages
  ['NE aboutP2 untouched',           after.includes('पहिलो शहर Rochester')],
  ['SW aboutP2 untouched',           after.includes('Mji wa kwanza ni Rochester')],
  ['MY aboutP2 untouched',           after.includes('ပထမမြို့မှာ Rochester')],
  ['SO aboutP2 untouched',           after.includes('Magaalada kowaad waa Rochester')],
];

let failed = 0;
for (const [label, ok] of checks) {
  console.log((ok ? '✓ ' : '✗ ') + label);
  if (!ok) failed++;
}

if (failed > 0) {
  console.error('\n' + failed + ' verification check(s) failed. Review LandingPage.jsx before committing.');
  process.exit(1);
}

console.log('\n' + applied + ' changes applied. Ready to commit.');
