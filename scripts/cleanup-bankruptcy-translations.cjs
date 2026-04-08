#!/usr/bin/env node
/*
 * scripts/cleanup-bankruptcy-translations.cjs
 * ============================================
 * One-time cleanup: removes the 7 bankruptcy entry IDs from every translation
 * file in src/data/legal/translations/.
 *
 * Background:
 * On April 8, 2026, Germain's V3 Revised content shipped to the 7 bankruptcy
 * entries in English. The Spanish and Chinese translations currently in
 * translations/es.js and translations/zh.js were generated against the
 * pre-V3 English and are now stale. Rather than silently show outdated
 * content to users who switch languages, we remove those keys from each
 * translation file. The loader in src/data/legal/index.js then falls back
 * to English for those 7 entries via pickText()'s `field[lang] || field.en`
 * logic, which is a transparent and honest fallback.
 *
 * The prerender script (scripts/prerender-legal.cjs) already renders a
 * "Full translation in progress" banner on any non-English entry, so
 * users hitting /es/know-your-rights/bankruptcy-chapter7-ny will see
 * that banner plus English content — exactly the right UX for an entry
 * awaiting re-translation.
 *
 * This script is safe to run multiple times. If the keys are already
 * absent, it does nothing and exits cleanly.
 *
 * Usage: node scripts/cleanup-bankruptcy-translations.cjs
 */

const fs = require('fs');
const path = require('path');
const { pathToFileURL } = require('url');

const ROOT = path.resolve(__dirname, '..');
const TRANSLATIONS_DIR = path.join(ROOT, 'src', 'data', 'legal', 'translations');

const BANKRUPTCY_IDS = [
  'bankruptcy-chapter7-ny',
  'bankruptcy-exemptions-ny',
  'bankruptcy-automatic-stay-ny',
  'bankruptcy-means-test-ny',
  'bankruptcy-chapter13-ny',
  'bankruptcy-discharge-ny',
  'bankruptcy-reaffirmation-ny',
];

async function main() {
  if (!fs.existsSync(TRANSLATIONS_DIR)) {
    console.error('ERROR: ' + TRANSLATIONS_DIR + ' not found.');
    process.exit(1);
  }

  const files = fs
    .readdirSync(TRANSLATIONS_DIR)
    .filter((f) => f.endsWith('.js') && !f.includes('.bak'));

  if (files.length === 0) {
    console.log('No translation files found. Nothing to do.');
    return;
  }

  console.log('Scanning ' + files.length + ' translation file(s)...\n');

  let totalRemoved = 0;
  let filesChanged = 0;

  for (const file of files) {
    const abs = path.join(TRANSLATIONS_DIR, file);
    const lang = path.basename(file, '.js');

    const mod = await import(pathToFileURL(abs).href);
    const data = (mod && mod.default) || mod || {};

    const before = Object.keys(data).length;
    const filtered = {};
    const removed = [];

    for (const [id, value] of Object.entries(data)) {
      if (BANKRUPTCY_IDS.includes(id)) {
        removed.push(id);
      } else {
        filtered[id] = value;
      }
    }

    if (removed.length === 0) {
      console.log('[' + lang + '] No bankruptcy entries present. Skipping.');
      continue;
    }

    const after = Object.keys(filtered).length;
    totalRemoved += removed.length;
    filesChanged++;

    const header =
      '// src/data/legal/translations/' + file + '\n' +
      '// ' + removed.length + ' stale bankruptcy translations removed April 8, 2026.\n' +
      '// Germain V3 English landed; prior translations were stale; English fallback active\n' +
      '// for these entries until the translation pipeline re-runs against the new English.\n' +
      '// File re-serialized by scripts/cleanup-bankruptcy-translations.cjs\n\n';

    const body = 'export default ' + JSON.stringify(filtered, null, 2) + ';\n';

    fs.writeFileSync(abs, header + body, 'utf8');

    console.log('[' + lang + '] Removed ' + removed.length + ' entries (' + before + ' -> ' + after + '):');
    for (const id of removed) console.log('  - ' + id);
  }

  console.log('');
  console.log('Summary: ' + totalRemoved + ' entries removed across ' + filesChanged + ' file(s).');
  console.log('Review: git diff src/data/legal/translations/');
  console.log('Done.');
}

main().catch((e) => {
  console.error('ERROR:', e);
  process.exit(1);
});
