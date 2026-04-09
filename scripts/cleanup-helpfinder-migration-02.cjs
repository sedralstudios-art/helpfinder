#!/usr/bin/env node
/**
 * scripts/cleanup-helpfinder-migration-02.cjs
 *
 * Final manual-patch + SAFETY AUDIT + content-rename pass for the migration.
 *
 * Six operations in order:
 *
 *   1. REACH_TIERS doc — extend with addressSuppressed convention
 *
 *   2. market (Rochester Public Market + Double Up)
 *      Verified address 280 N Union St, Rochester NY 14609 via
 *      cityofrochester.gov/publicmarket and community-wealth.org. Census
 *      Geocoder doesn't index this address. Hardcoding lat 43.1657,
 *      lng -77.5902 from two independent primary sources.
 *
 *   3. familycourthelp + supervvisit
 *      Both at the Hall of Justice, 99 Exchange Blvd, Rochester NY 14614.
 *      Public courthouse. Geocode normally via Census, apply to both.
 *
 *   4. SAFETY — crisisnursery (Crisis Nursery of Greater Rochester)
 *      Operator (Center for Youth) publishes only "on Genesee Park Blvd",
 *      no street number, for the safety of children in residence. The
 *      migration leaked "201" street number, "14619" zip, lat, lng — more
 *      specificity than the operator publishes themselves. Strip the
 *      leaked fields, modify ad: to match operator's published form,
 *      mark addressSuppressed:true.
 *
 *   5. SAFETY — owenshouse (Crisis Nursery East)
 *      Same operator, same protective convention. cleanup-01 left it
 *      correctly degraded. Add addressSuppressed:true so safety intent
 *      is machine-readable.
 *
 *   6. CONTENT — biv: Bivona Child Advocacy Center → renamed Aug 2024
 *      Per cacgroc.org/about: "On August 1, 2024... we are now The
 *      Child Advocacy Center of Greater Rochester (CACGROC)." Update
 *      display name to "Child Advocacy Center of Greater Rochester
 *      (formerly Bivona)" so users searching either name find it,
 *      and update url from bivonacac.org to cacgroc.org. The id
 *      stays as "biv" to avoid breaking any existing references.
 *      Address (1 Mt Hope Ave, Rochester NY 14620) and phone
 *      (585-935-7800) are unchanged per cacgroc.org footer.
 *
 * Idempotent: re-runs produce the same result.
 *
 * Runtime: ~3 seconds (1 Census call for 99 Exchange Blvd).
 */

const fs = require('fs');
const path = require('path');

const FILE = path.join(__dirname, '..', 'src', 'components', 'HelpFinder.jsx');
const GEOCODER_DELAY_MS = 1100;

if (typeof fetch === 'undefined') {
  console.error('ERROR: This script requires Node 18 or newer.');
  process.exit(1);
}

const sleep = (ms) => new Promise(r => setTimeout(r, ms));

// ─────────────────────────────────────────────
// VERIFIED COORDINATES (no Census call needed)
// ─────────────────────────────────────────────
const MARKET_COORDS = { lat: 43.1657, lng: -77.5902 };

// ─────────────────────────────────────────────
// CENSUS GEOCODER
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
// LINE-LEVEL HELPERS
// ─────────────────────────────────────────────

function findProgramLine(lines, id) {
  const idEscaped = id.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const idRe = new RegExp('^\\s*\\{\\s*id:"' + idEscaped + '"');
  for (let i = 0; i < lines.length; i++) {
    if (idRe.test(lines[i])) return i;
  }
  return -1;
}

function addFieldsBeforeReach(line, fields) {
  const filtered = fields.filter(f => {
    const fieldName = f.split(':')[0];
    return !new RegExp('\\b' + fieldName + ':').test(line);
  });
  if (filtered.length === 0) return line;
  if (/\breach:/.test(line)) {
    return line.replace(/(,\s*)reach:/, '$1' + filtered.join(', ') + ', reach:');
  }
  return line.replace(/\s*\}\s*,?\s*$/, ', ' + filtered.join(', ') + ' },');
}

function removeFields(line, fieldNames) {
  let result = line;
  for (const name of fieldNames) {
    const re = new RegExp(',\\s*' + name + ':(?:"[^"]*"|[\\d.\\-]+|true|false|null)', 'g');
    result = result.replace(re, '');
  }
  return result;
}

// Replace the value of a quoted-string field on a program line.
// newValueQuoted should include the surrounding quotes (e.g. '"new value"').
function modifyQuotedField(line, fieldName, newValueQuoted) {
  const re = new RegExp('(\\b' + fieldName + ':)"[^"]*"');
  return line.replace(re, '$1' + newValueQuoted);
}

function patchProgram(src, id, transform) {
  const lines = src.split('\n');
  const idx = findProgramLine(lines, id);
  if (idx === -1) {
    console.log(`  PATCH-FAIL ${id}: line not found`);
    return src;
  }
  lines[idx] = transform(lines[idx]);
  return lines.join('\n');
}

// ─────────────────────────────────────────────
// REACH_TIERS DOC UPDATE
// Idempotent.
// ─────────────────────────────────────────────
function updateReachTiersDoc(src) {
  if (src.includes('addressSuppressed:true is a SAFETY flag')) {
    return { src, changed: false };
  }

  const oldMarker = '// MUST show "approximate location" notice for these programs.';
  if (!src.includes(oldMarker)) {
    return { src, changed: false, warn: 'REACH_TIERS doc block not found in expected format' };
  }

  const newBlock = oldMarker + `
//
// addressSuppressed:true is a SAFETY flag for programs serving vulnerable
// populations (crisis nurseries, DV shelters, residential refuges) where
// the operator deliberately publishes only a street name or general area,
// never the building number. When addressSuppressed is true:
//   - lat/lng fields MUST be absent (or stripped if accidentally added)
//   - zip MAY be absent if it would narrow the location too much
//   - the program MUST NOT appear in distance-sorted Near Me results
//   - any future map UI MUST NOT render a pin
//   - any list view should display the operator's published address only
//
// HelpFinder's rule: match the operator's published specificity, never
// exceed it. Aggregation in a directory amplifies discovery risk for
// vulnerable populations beyond what each source intended.`;

  return { src: src.replace(oldMarker, newBlock), changed: true };
}

// ─────────────────────────────────────────────
// MAIN
// ─────────────────────────────────────────────
async function main() {
  console.log('Reading HelpFinder.jsx...');
  let src = fs.readFileSync(FILE, 'utf8');
  const originalLength = src.length;

  // ── 1. REACH_TIERS doc update ──
  console.log('');
  console.log('━━ 1. REACH_TIERS doc — add addressSuppressed convention ━━');
  const docResult = updateReachTiersDoc(src);
  src = docResult.src;
  if (docResult.changed) console.log('  Updated.');
  else if (docResult.warn) console.log('  WARN:', docResult.warn);
  else console.log('  Already updated, skipping.');

  // ── 2. Market — hardcoded verified coords ──
  console.log('');
  console.log('━━ 2. Rochester Public Market (verified hardcoded) ━━');
  console.log(`  lat ${MARKET_COORDS.lat}, lng ${MARKET_COORDS.lng}`);
  src = patchProgram(src, 'market', line => addFieldsBeforeReach(line, [
    `lat:${MARKET_COORDS.lat}`,
    `lng:${MARKET_COORDS.lng}`,
  ]));
  console.log('  patched market');

  // ── 3. Family Court — geocode and patch both programs ──
  console.log('');
  console.log('━━ 3. Family Court (familycourthelp + supervvisit) ━━');
  process.stdout.write('  geocoding "99 Exchange Blvd, Rochester NY 14614" ... ');
  const fcCoords = await geocodeOnce('99 Exchange Blvd, Rochester NY 14614');
  await sleep(GEOCODER_DELAY_MS);

  if (fcCoords) {
    console.log(`${fcCoords.lat}, ${fcCoords.lng}`);
    const fcFields = [
      'town:"rochester"',
      'zip:"14614"',
      `lat:${fcCoords.lat}`,
      `lng:${fcCoords.lng}`,
    ];
    src = patchProgram(src, 'familycourthelp', line => addFieldsBeforeReach(line, fcFields));
    src = patchProgram(src, 'supervvisit', line => addFieldsBeforeReach(line, fcFields));
    console.log('  patched familycourthelp and supervvisit');
  } else {
    console.log('FAIL — Census did not recognize 99 Exchange Blvd. Patching town/zip only.');
    const fbFields = ['town:"rochester"', 'zip:"14614"'];
    src = patchProgram(src, 'familycourthelp', line => addFieldsBeforeReach(line, fbFields));
    src = patchProgram(src, 'supervvisit', line => addFieldsBeforeReach(line, fbFields));
  }

  // ── 4. SAFETY — crisisnursery: strip migration leak, mark suppressed ──
  console.log('');
  console.log('━━ 4. SAFETY: crisisnursery — strip leak, mark suppressed ━━');
  console.log('  Operator publishes only "on Genesee Park Blvd"');
  console.log('  Stripping leaked 201/zip/lat/lng, modifying ad:, marking addressSuppressed');
  src = patchProgram(src, 'crisisnursery', line => {
    line = modifyQuotedField(line, 'ad', '"Genesee Park Blvd, Rochester NY"');
    line = removeFields(line, ['zip', 'lat', 'lng']);
    line = addFieldsBeforeReach(line, ['addressSuppressed:true']);
    return line;
  });
  console.log('  patched crisisnursery');

  // ── 5. SAFETY — owenshouse: mark explicit ──
  console.log('');
  console.log('━━ 5. SAFETY: owenshouse — mark addressSuppressed explicit ━━');
  src = patchProgram(src, 'owenshouse', line =>
    addFieldsBeforeReach(line, ['addressSuppressed:true'])
  );
  console.log('  patched owenshouse');

  // ── 6. CONTENT — Bivona rebrand to Child Advocacy Center of Greater Rochester ──
  console.log('');
  console.log('━━ 6. CONTENT: biv — Bivona renamed to CACGROC (Aug 2024) ━━');
  console.log('  Source: cacgroc.org/about');
  console.log('  Display name → "Child Advocacy Center of Greater Rochester (formerly Bivona)"');
  console.log('  URL → https://cacgroc.org');
  src = patchProgram(src, 'biv', line => {
    line = modifyQuotedField(line, 'n', '"Child Advocacy Center of Greater Rochester (formerly Bivona)"');
    line = modifyQuotedField(line, 'url', '"https://cacgroc.org"');
    return line;
  });
  console.log('  patched biv');

  // ── Write file ──
  fs.writeFileSync(FILE, src);

  console.log('');
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
  console.log(`File size: ${originalLength} → ${src.length} bytes`);
  console.log('Done.');
  console.log('');
  console.log('CRITICAL spot check:');
  console.log('  grep -E \'id:"(crisisnursery|owenshouse|market|familycourthelp|supervvisit|biv)"\' src/components/HelpFinder.jsx');
  console.log('');
  console.log('Expected:');
  console.log('  crisisnursery   → ad="Genesee Park Blvd, Rochester NY", NO lat/lng/zip, addressSuppressed:true');
  console.log('  owenshouse      → addressSuppressed:true, no lat/lng/zip');
  console.log('  market          → lat:43.1657, lng:-77.5902');
  console.log('  familycourthelp → town/zip/lat/lng all present');
  console.log('  supervvisit     → town/zip/lat/lng all present');
  console.log('  biv             → n contains "Child Advocacy Center of Greater Rochester", url is cacgroc.org');
}

main().catch(e => { console.error('FATAL:', e); process.exit(1); });
