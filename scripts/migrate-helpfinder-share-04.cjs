#!/usr/bin/env node
/**
 * scripts/migrate-helpfinder-share-04.cjs
 *
 * Wires the new ShareButton component into BOTH LandingPage.jsx and
 * HelpFinder.jsx. The component file itself (src/components/ShareButton.jsx)
 * was created in a prior step and is not touched here.
 *
 * Atomic across both files: if any patch aborts, NO files are written.
 *
 * Four patches:
 *   1. LandingPage.jsx — add import for ShareButton
 *   2. LandingPage.jsx — render ShareButton between PayPal donate and disclaimer
 *   3. HelpFinder.jsx — add import for ShareButton
 *   4. HelpFinder.jsx — render ShareButton just below the header flex row,
 *      above the step indicator
 *
 * Each patch is idempotent (skips if already applied) and aborts cleanly
 * if its anchor isn't found.
 *
 * Note on i18n: button labels are hardcoded English for v1. The strings
 * `Share HelpFinder` and the share-text body should be moved into the
 * existing t() i18n table during the next translation pass. Tagged with
 * `// TODO: i18n` in the JSX so they're findable.
 */

const fs = require('fs');
const path = require('path');

const LANDING_FILE    = path.join(__dirname, '..', 'src', 'components', 'LandingPage.jsx');
const HELPFINDER_FILE = path.join(__dirname, '..', 'src', 'components', 'HelpFinder.jsx');

let src1 = fs.readFileSync(LANDING_FILE, 'utf8');
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
    abort(`${name}: anchor not found in ${file === 1 ? 'LandingPage.jsx' : 'HelpFinder.jsx'}`);
  }
  src = src.replace(oldStr, newStr);
  if (file === 1) src1 = src; else src2 = src;
  console.log(`  ${name}: applied`);
  patchesApplied++;
}

console.log('Reading source files...');
console.log('');

// ─────────────────────────────────────────────
// PATCH 1: LandingPage.jsx — add import
// ─────────────────────────────────────────────
console.log('━━ FILE 1: LandingPage.jsx ━━');
console.log('');
console.log('━━ 1. Add ShareButton import ━━');
{
  const importLine = 'import ShareButton from "./ShareButton";';
  if (src1.includes('./ShareButton')) {
    console.log('  already imported, skipping');
    patchesSkipped++;
  } else {
    const lines = src1.split('\n');
    let lastImportIdx = -1;
    for (let i = 0; i < Math.min(lines.length, 50); i++) {
      if (/^import\s/.test(lines[i])) lastImportIdx = i;
    }
    if (lastImportIdx === -1) {
      abort('LandingPage import: no import statement found in first 50 lines');
    }
    lines.splice(lastImportIdx + 1, 0, importLine);
    src1 = lines.join('\n');
    console.log('  added import after existing imports');
    patchesApplied++;
  }
}

// ─────────────────────────────────────────────
// PATCH 2: LandingPage.jsx — insert ShareButton in donate area
// ─────────────────────────────────────────────
console.log('');
console.log('━━ 2. Insert ShareButton between PayPal and disclaimer ━━');
{
  const oldBlock = `            {t(lang,"donatePaypal")}
          </a>

          {/* Disclaimer */}`;

  const newBlock = `            {t(lang,"donatePaypal")}
          </a>

          {/* Share — added April 9, 2026. TODO: i18n */}
          <div style={{ textAlign: "center", marginBottom: 20 }}>
            <ShareButton
              title="HelpFinder"
              text="Free help and legal info for Monroe County. No accounts, no ads, no tracking."
              url="https://helpfinder.help"
              label="Share HelpFinder"
              ariaLabel="Share HelpFinder with someone who needs it"
            />
          </div>

          {/* Disclaimer */}`;

  patch(
    1,
    'LandingPage ShareButton placement',
    (s) => s.includes('Share HelpFinder with someone who needs it'),
    oldBlock,
    newBlock
  );
}

// ─────────────────────────────────────────────
// PATCH 3: HelpFinder.jsx — add import
// ─────────────────────────────────────────────
console.log('');
console.log('━━ FILE 2: HelpFinder.jsx ━━');
console.log('');
console.log('━━ 3. Add ShareButton import ━━');
patch(
  2,
  'HelpFinder import',
  (s) => s.includes('./ShareButton'),
  'import { QUESTIONS, getFirstQuestion, isDirectToResults, isHiddenCategory, getInitialPrograms, applyAnswerFilters, applyTownFilter, getUrgencyLevel } from "./HelpFinderQuestions";',
  'import { QUESTIONS, getFirstQuestion, isDirectToResults, isHiddenCategory, getInitialPrograms, applyAnswerFilters, applyTownFilter, getUrgencyLevel } from "./HelpFinderQuestions";\nimport ShareButton from "./ShareButton";'
);

// ─────────────────────────────────────────────
// PATCH 4: HelpFinder.jsx — insert ShareButton below header flex
// ─────────────────────────────────────────────
console.log('');
console.log('━━ 4. Insert ShareButton below header flex, above step indicator ━━');
{
  const oldBlock = `            ))}
          </select>
        </div>

        {/* Step indicator */}`;

  const newBlock = `            ))}
          </select>
        </div>

        {/* Share — added April 9, 2026. TODO: i18n */}
        <div style={{ marginTop: 8, textAlign: "center" }}>
          <ShareButton
            title="HelpFinder"
            text="Free help and legal info for Monroe County. No accounts, no ads, no tracking."
            url="https://helpfinder.help"
            label="Share HelpFinder"
            ariaLabel="Share HelpFinder with someone who needs it"
          />
        </div>

        {/* Step indicator */}`;

  patch(
    2,
    'HelpFinder ShareButton placement',
    (s) => s.includes('Share HelpFinder with someone who needs it'),
    oldBlock,
    newBlock
  );
}

// ─────────────────────────────────────────────
// Write both files (only after all patches succeeded)
// ─────────────────────────────────────────────
if (hadCRLF1) src1 = src1.replace(/\n/g, '\r\n');
if (hadCRLF2) src2 = src2.replace(/\n/g, '\r\n');

if (src1 !== orig1) {
  fs.writeFileSync(LANDING_FILE, src1);
  console.log('');
  console.log(`LandingPage.jsx: ${orig1.length} → ${src1.length} bytes`);
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
console.log('  1. LandingPage: scroll to donate area → green outlined "Share HelpFinder" button visible');
console.log('  2. HelpFinder /help: at top of page → green outlined "Share HelpFinder" button visible below header');
console.log('  3. Click the share button on desktop → URL copies to clipboard, button briefly says "Copied!"');
console.log('  4. On phone (Samsung) → tapping the button should open the native Android share sheet');
console.log('  5. No console errors anywhere');
console.log('  6. Both share buttons share the same URL: https://helpfinder.help');
