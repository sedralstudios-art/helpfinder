#!/usr/bin/env node
/*
 * scripts/migrate-add-primary-statute-69.cjs
 * ------------------------------------------
 * Adds `primaryStatute: "..."` to every legal entry. Parses the sources[]
 * URLs to extract a canonical statute citation, and inserts the field
 * immediately after the `authorityType:` line.
 *
 * - Idempotent: skips files that already have a primaryStatute field.
 * - Leaves primaryStatute unset (no field) if no URL in sources is parseable.
 *   These can be hand-filled for entries like common-law or agency-program
 *   that intentionally do not have a single governing statute.
 *
 * Pairs with the uniqueness validator update that enforces collision
 * detection on (normalizedPrimaryStatute, jurisdiction, authorityType).
 */

const fs = require('fs');
const path = require('path');
const { pathToFileURL } = require('url');
const { parseStatuteFromSources } = require('./lib/parse-statute.cjs');

const ROOT = path.resolve(__dirname, '..');
const ENTRIES_DIR = path.join(ROOT, 'src', 'data', 'legal', 'entries');

async function loadEntry(abs) {
  const mod = await import(pathToFileURL(abs).href);
  return Object.values(mod)[0];
}

async function main() {
  const files = fs.readdirSync(ENTRIES_DIR).filter((f) => f.endsWith('.js'));

  let added = 0;
  let skipAlreadyHas = 0;
  let skipNoParse = 0;
  let mismatched = 0;
  const noParseList = [];

  for (const f of files) {
    const abs = path.join(ENTRIES_DIR, f);
    const src = fs.readFileSync(abs, 'utf8');

    if (/^\s*primaryStatute:/m.test(src)) {
      skipAlreadyHas++;
      continue;
    }

    let entry;
    try {
      entry = await loadEntry(abs);
    } catch (e) {
      console.error('LOAD FAIL: ' + f + ' — ' + e.message);
      mismatched++;
      continue;
    }

    const statute = parseStatuteFromSources(entry && entry.sources);
    if (!statute) {
      skipNoParse++;
      noParseList.push(f);
      continue;
    }

    // Insert `  primaryStatute: "XXX",` immediately after the
    // `  authorityType: "...",` line. Preserve the file's newline style
    // (some entries use CRLF).
    const authorityLine = src.match(/  authorityType: "[^"]+",(\r?\n)/);
    if (!authorityLine) {
      console.error('NO AUTHORITY LINE: ' + f);
      mismatched++;
      continue;
    }
    const nl = authorityLine[1];
    const insert = authorityLine[0] + '  primaryStatute: "' + statute + '",' + nl;
    const out = src.replace(authorityLine[0], insert);
    if (out === src || !out.includes('primaryStatute: "' + statute + '"')) {
      console.error('REPLACE FAIL: ' + f);
      mismatched++;
      continue;
    }
    fs.writeFileSync(abs, out, 'utf8');
    added++;
  }

  console.log('---');
  console.log('added: ' + added);
  console.log('skipped (already had): ' + skipAlreadyHas);
  console.log('skipped (no parseable URL): ' + skipNoParse);
  console.log('mismatched: ' + mismatched);
  console.log('total scanned: ' + files.length);
  if (skipNoParse) {
    console.log('');
    console.log('Needs manual review (no parseable statute URL):');
    for (const f of noParseList.slice(0, 50)) console.log('  ' + f);
    if (noParseList.length > 50) console.log('  ... and ' + (noParseList.length - 50) + ' more');
  }

  if (mismatched) process.exit(1);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
