#!/usr/bin/env node
/**
 * scripts/cleanup-helpfinder-migration-01.cjs
 *
 * Post-migration cleanup pass. Fixes 4 issues left by migrate-helpfinder-schema-02.cjs:
 *
 *   1. Cosmetic: removes leading space before the inserted-fields comma
 *      ("tg:[...] , reach:..." → "tg:[...], reach:...")
 *
 *   2. Stale "// ── PROGRAMS (all 130+) ──" comment → "// ── PROGRAMS (294 across 43 categories) ──"
 *
 *   3. Six PARSE-FAIL programs (addresses missing trailing zip codes):
 *      - Reads migration-report.txt to find them
 *      - Re-parses with a permissive parser (accepts addresses without zip)
 *      - Geocodes each via Census
 *      - Inserts town/zip?/lat/lng fields just before the existing reach: field
 *
 *   4. One hard GEOCODE-FAIL program (Rochester Public Market):
 *      - Retries with three address variant formats
 *      - If any succeed, inserts lat/lng before existing reach: field
 *
 * No re-processing of the 80 already-geocoded programs.
 * Idempotent: skips any program that already has a town: field.
 *
 * Runtime: ~10 seconds (7 Census calls max, 1.1s polite delay each).
 */

const fs = require('fs');
const path = require('path');

const FILE = path.join(__dirname, '..', 'src', 'components', 'HelpFinder.jsx');
const REPORT = path.join(__dirname, '..', 'migration-report.txt');
const GEOCODER_DELAY_MS = 1100;

if (typeof fetch === 'undefined') {
  console.error('ERROR: This script requires Node 18 or newer.');
  process.exit(1);
}

const sleep = (ms) => new Promise(r => setTimeout(r, ms));

// ─────────────────────────────────────────────
// CENSUS GEOCODER (same as migration script)
// ─────────────────────────────────────────────
async function geocodeOnce(address) {
  const url = `https://geocoding.geo.census.gov/geocoder/locations/onelineaddress?address=${encodeURIComponent(address)}&benchmark=2020&format=json`;
  try {
    const res = await fetch(url, {
      headers: { 'User-Agent': 'HelpFinder/1.0 (helpfinder.help, build-time enrichment)' },
    });
    if (!res.ok) return null;
    const data = await res.json();
    const matches = data && data.result && data.result.addressMatches;
    if (!matches || matches.length === 0) return null;
    const { x, y } = matches[0].coordinates;
    return {
      lat: parseFloat(parseFloat(y).toFixed(6)),
      lng: parseFloat(parseFloat(x).toFixed(6)),
    };
  } catch (e) {
    return null;
  }
}

// ─────────────────────────────────────────────
// PERMISSIVE ADDRESS PARSER
// Accepts both "STREET, City NY ZIP" and "STREET, City NY"
// ─────────────────────────────────────────────
function parseAddressPermissive(ad) {
  let m = ad.match(/^(.+),\s*([^,]+?)\s+NY\s+(\d{5})$/);
  if (m) return { street: m[1].trim(), city: m[2].trim(), zip: m[3] };

  m = ad.match(/^(.+),\s*([^,]+?)\s+NY\s*$/);
  if (m) return { street: m[1].trim(), city: m[2].trim(), zip: null };

  return null;
}

// ─────────────────────────────────────────────
// PATCH A SPECIFIC PROGRAM LINE
// Inserts new fields immediately before the existing `reach:` field
// to preserve canonical field ordering. Skips if program already has town.
// ─────────────────────────────────────────────
function patchProgramLine(src, id, newFields) {
  const lines = src.split('\n');
  const idEscaped = id.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const idRe = new RegExp('^\\s*\\{\\s*id:"' + idEscaped + '"');

  for (let i = 0; i < lines.length; i++) {
    if (!idRe.test(lines[i])) continue;

    if (/\btown:/.test(lines[i])) {
      console.log(`  SKIP ${id}: already has town field`);
      return src;
    }

    if (/\breach:/.test(lines[i])) {
      // Insert before existing reach: to keep canonical order
      lines[i] = lines[i].replace(/(,\s*)reach:/, '$1' + newFields.join(', ') + ', reach:');
    } else {
      // No reach (shouldn't happen after migration v2 but defensive)
      lines[i] = lines[i].replace(/\s*\}\s*,?\s*$/, ', ' + newFields.join(', ') + ' },');
    }

    return lines.join('\n');
  }

  console.log(`  PATCH-FAIL ${id}: line not found in HelpFinder.jsx`);
  return src;
}

// ─────────────────────────────────────────────
// ADD COORDS TO A PROGRAM THAT ALREADY HAS town/zip/reach
// (used for the market retry)
// ─────────────────────────────────────────────
function addCoordsToProgram(src, id, coords) {
  const lines = src.split('\n');
  const idEscaped = id.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const idRe = new RegExp('^\\s*\\{\\s*id:"' + idEscaped + '"');

  for (let i = 0; i < lines.length; i++) {
    if (!idRe.test(lines[i])) continue;
    if (/\blat:/.test(lines[i])) {
      console.log(`  SKIP ${id}: already has lat`);
      return src;
    }
    // Insert lat/lng immediately before reach:
    lines[i] = lines[i].replace(/(,\s*)reach:/, '$1lat:' + coords.lat + ', lng:' + coords.lng + ', reach:');
    return lines.join('\n');
  }
  return src;
}

// ─────────────────────────────────────────────
// MAIN
// ─────────────────────────────────────────────
async function main() {
  console.log('Reading HelpFinder.jsx...');
  let src = fs.readFileSync(FILE, 'utf8');
  const originalLength = src.length;

  // ── 1. Cosmetic comma fix ──
  console.log('');
  console.log('━━ 1. Cosmetic comma fix ━━');
  const cosmeticBefore = (src.match(/ , (town|zip|lat|lng|coordApprox|reach):/g) || []).length;
  src = src.replace(/ , (town|zip|lat|lng|coordApprox|reach):/g, ', $1:');
  console.log(`  Removed ${cosmeticBefore} leading-space-comma occurrences.`);

  // ── 2. Fix stale "130+" PROGRAMS comment ──
  console.log('');
  console.log('━━ 2. Stale comment fix ━━');
  const commentRe = /\/\/ ── PROGRAMS \(all 130\+\) ──/;
  if (commentRe.test(src)) {
    src = src.replace(commentRe, '// ── PROGRAMS (294 across 43 categories) ──');
    console.log('  Fixed: "(all 130+)" → "(294 across 43 categories)"');
  } else {
    console.log('  Comment already correct or pattern not found.');
  }

  // ── 3. Parse failures from migration report ──
  console.log('');
  console.log('━━ 3. Parse-failure retries ━━');
  if (!fs.existsSync(REPORT)) {
    console.log('  WARNING: migration-report.txt not found, skipping parse-fail retries.');
  } else {
    const reportText = fs.readFileSync(REPORT, 'utf8');
    const parseFails = [];
    for (const line of reportText.split('\n')) {
      const m = line.match(/^PARSE-FAIL (\S+): could not parse address "(.+)"$/);
      if (m) parseFails.push({ id: m[1], address: m[2] });
    }
    console.log(`  Found ${parseFails.length} parse failures to retry.`);

    for (const { id, address } of parseFails) {
      const parsed = parseAddressPermissive(address);
      if (!parsed) {
        console.log(`  SKIP ${id}: even permissive parser failed on "${address}"`);
        continue;
      }

      process.stdout.write(`  retry ${id} ("${address}") ... `);
      const coords = await geocodeOnce(address);
      await sleep(GEOCODER_DELAY_MS);

      const town = parsed.city.toLowerCase().replace(/\s+/g, '-');
      const newFields = [`town:"${town}"`];
      if (parsed.zip) newFields.push(`zip:"${parsed.zip}"`);
      if (coords) {
        newFields.push(`lat:${coords.lat}`);
        newFields.push(`lng:${coords.lng}`);
        console.log(`${coords.lat}, ${coords.lng}`);
      } else {
        console.log('no coords from Census (town/zip still patched)');
      }

      src = patchProgramLine(src, id, newFields);
    }
  }

  // ── 4. Market retry with name variants ──
  console.log('');
  console.log('━━ 4. Rochester Public Market retry ━━');
  const marketVariants = [
    '280 North Union Street, Rochester NY 14609',
    '280 N Union Street, Rochester NY 14609',
    '280 North Union St, Rochester NY 14609',
    'Public Market, 280 N Union St, Rochester NY 14609',
  ];

  let marketCoords = null;
  let marketVariantUsed = null;
  for (const variant of marketVariants) {
    process.stdout.write(`  trying "${variant}" ... `);
    const result = await geocodeOnce(variant);
    await sleep(GEOCODER_DELAY_MS);
    if (result) {
      marketCoords = result;
      marketVariantUsed = variant;
      console.log(`${result.lat}, ${result.lng}`);
      break;
    } else {
      console.log('no match');
    }
  }

  if (marketCoords) {
    src = addCoordsToProgram(src, 'market', marketCoords);
    console.log(`  market patched via "${marketVariantUsed}"`);
  } else {
    console.log('  market still failed after all variants — manual fix needed.');
    console.log('  Suggested coords from public knowledge: lat:43.165, lng:-77.604 (intersection of N Union and Railroad St)');
    console.log('  To patch manually after this script:');
    console.log('    grep -n \'id:"market"\' src/components/HelpFinder.jsx');
    console.log('    Edit that line, insert lat:43.165, lng:-77.604, before reach:"local"');
  }

  // ── Write file ──
  fs.writeFileSync(FILE, src);

  console.log('');
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
  console.log(`File size: ${originalLength} → ${src.length} bytes`);
  console.log('Done.');
  console.log('');
  console.log('Next: review the diff');
  console.log('  git diff src/components/HelpFinder.jsx | head -120');
  console.log('  git diff --stat src/components/HelpFinder.jsx');
}

main().catch(e => { console.error('FATAL:', e); process.exit(1); });
