#!/usr/bin/env node
/*
 * scripts/verify-program-walkthroughs.cjs
 * ============================================================================
 * Validator for the program → walkthrough bridge.
 *
 * Each program in src/data/programs.js may optionally include a
 * `walkthroughEntryId` field that names a legal entry providing a
 * section-by-section walkthrough of the program's application form
 * (e.g., NY State of Health → health-insurance-application-walkthrough-ny).
 *
 * This script enforces the bridge:
 *   - The field, if present, must be a string.
 *   - The string must match an existing legal-entry filename (minus .js)
 *     in src/data/legal/entries/.
 *   - The target entry must not be draft-gated (else it won't render in
 *     the legal library and the link would dead-end).
 *
 * Hard-fails the build on any violation.
 *
 * Usage:
 *   node scripts/verify-program-walkthroughs.cjs
 */

const fs = require('fs');
const path = require('path');
const { pathToFileURL } = require('url');

const ROOT = path.resolve(__dirname, '..');
const PROGRAMS_FILE = path.join(ROOT, 'src', 'data', 'programs.js');
const ENTRIES_DIR = path.join(ROOT, 'src', 'data', 'legal', 'entries');

function loadLegalEntryIndex() {
  const all = new Set();
  const drafts = new Set();
  if (!fs.existsSync(ENTRIES_DIR)) return { all, drafts };
  for (const f of fs.readdirSync(ENTRIES_DIR)) {
    if (!f.endsWith('.js')) continue;
    const id = f.replace(/\.js$/, '');
    all.add(id);
    const raw = fs.readFileSync(path.join(ENTRIES_DIR, f), 'utf8');
    if (/\bdraft\s*:\s*true\b/.test(raw)) drafts.add(id);
  }
  return { all, drafts };
}

async function main() {
  const legalIndex = loadLegalEntryIndex();
  const mod = await import(pathToFileURL(PROGRAMS_FILE).href);
  const programs = mod.PROGRAMS || [];

  const failures = [];
  let bridgesFound = 0;

  for (const p of programs) {
    if (!Object.prototype.hasOwnProperty.call(p, 'walkthroughEntryId')) continue;
    bridgesFound++;
    const w = p.walkthroughEntryId;
    const programLabel = p.id || p.n || '(unknown)';

    if (typeof w !== 'string' || w.length === 0) {
      failures.push({
        program: programLabel,
        rule: 'walkthroughEntryId must be a non-empty string',
        detail: typeof w + ' (' + JSON.stringify(w) + ')',
      });
      continue;
    }

    if (!legalIndex.all.has(w)) {
      failures.push({
        program: programLabel,
        rule: 'walkthroughEntryId points at unknown legal entry',
        detail: w,
      });
      continue;
    }

    if (legalIndex.drafts.has(w)) {
      failures.push({
        program: programLabel,
        rule: 'walkthroughEntryId points at draft-gated legal entry (will not render)',
        detail: w,
      });
      continue;
    }
  }

  console.log('Program walkthrough validator');
  console.log('=============================');
  console.log('Programs scanned :', programs.length);
  console.log('Bridges declared :', bridgesFound);
  console.log('Failures         :', failures.length);

  if (failures.length > 0) {
    console.log('');
    console.log('FAIL: program walkthrough bridge has issues:');
    for (const f of failures) {
      console.log('  ✗ ' + f.program + ' — ' + f.rule + ' (' + f.detail + ')');
    }
    process.exit(1);
  }

  console.log('');
  console.log('OK: every walkthroughEntryId resolves to a published legal entry.');
}

main().catch((e) => {
  console.error('ERROR:', e);
  process.exit(1);
});
