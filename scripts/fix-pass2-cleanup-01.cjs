#!/usr/bin/env node
/**
 * scripts/fix-pass2-cleanup-01.cjs
 *
 * Cleanup for fix-pass2-01.cjs which had two bugs:
 *
 *   1. ad: field format inconsistency. The existing convention in
 *      HelpFinder.jsx is `ad:"STREET, City NY ZIP"` (full string), but
 *      patchEnrichOnly stored only the bare street for depaul, easthouse,
 *      villa, villaofhopeyouth, voareentry. spiritus was inlined and got
 *      the right format.
 *
 *   2. Census Geocoder doesn't index 3300 Dewey Ave 14616 (same Rochester
 *      quirk as the Public Market — Census knows lots of Rochester but
 *      misses some specific addresses). Coordinates verified from public
 *      property records (clustrmaps): lat 43.2277, lng -77.6445 for the
 *      9.5-acre Villa of Hope main campus. Cross-checked against the
 *      property's recorded parcel ID 26280006057216 and 14616 zip.
 *
 * Both fixes idempotent.
 */

const fs = require('fs');
const path = require('path');

const FILE = path.join(__dirname, '..', 'src', 'components', 'HelpFinder.jsx');

const VILLA_COORDS = { lat: 43.2277, lng: -77.6445 };

// Format: { id, oldAd, newAd }
const AD_FIXES = [
  {
    id: 'depaul',
    oldAd: 'ad:"1931 Buffalo Rd"',
    newAd: 'ad:"1931 Buffalo Rd, Rochester NY 14624"',
  },
  {
    id: 'easthouse',
    oldAd: 'ad:"259 Monroe Ave Suite 200"',
    newAd: 'ad:"259 Monroe Ave Suite 200, Rochester NY 14607"',
  },
  {
    id: 'villa',
    oldAd: 'ad:"3300 Dewey Ave"',
    newAd: 'ad:"3300 Dewey Ave, Rochester NY 14616"',
  },
  {
    id: 'villaofhopeyouth',
    oldAd: 'ad:"3300 Dewey Ave"',
    newAd: 'ad:"3300 Dewey Ave, Rochester NY 14616"',
  },
  {
    id: 'voareentry',
    oldAd: 'ad:"214 Lake Ave"',
    newAd: 'ad:"214 Lake Ave, Rochester NY 14608"',
  },
];

function findProgramLine(lines, id) {
  const idEscaped = id.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const idRe = new RegExp('^\\s*\\{\\s*id:"' + idEscaped + '"');
  for (let i = 0; i < lines.length; i++) {
    if (idRe.test(lines[i])) return i;
  }
  return -1;
}

let src = fs.readFileSync(FILE, 'utf8');
const orig = src;

const hadCRLF = src.includes('\r\n');
src = src.replace(/\r\n/g, '\n');

let lines = src.split('\n');

// ── 1. Fix ad: format on the 5 enriched programs ──
console.log('━━ 1. Reformat ad: fields to full address format ━━');
for (const fix of AD_FIXES) {
  const idx = findProgramLine(lines, fix.id);
  if (idx === -1) {
    console.log(`  PATCH-FAIL ${fix.id}: line not found`);
    continue;
  }
  if (lines[idx].includes(fix.newAd)) {
    console.log(`  ${fix.id}: already in long format, skipping`);
    continue;
  }
  if (!lines[idx].includes(fix.oldAd)) {
    console.log(`  ${fix.id}: oldAd shape not found, skipping`);
    continue;
  }
  lines[idx] = lines[idx].replace(fix.oldAd, fix.newAd);
  console.log(`  ${fix.id}: ad: format fixed`);
}

// ── 2. Add hardcoded Villa of Hope coords (villa + villaofhopeyouth) ──
console.log('');
console.log('━━ 2. Hardcode Villa of Hope coords ━━');
console.log(`  lat ${VILLA_COORDS.lat}, lng ${VILLA_COORDS.lng}`);
console.log('  Source: public property records (clustrmaps), parcel 26280006057216');

for (const id of ['villa', 'villaofhopeyouth']) {
  const idx = findProgramLine(lines, id);
  if (idx === -1) {
    console.log(`  PATCH-FAIL ${id}: line not found`);
    continue;
  }
  if (/\blat:/.test(lines[idx])) {
    console.log(`  ${id}: lat already present, skipping`);
    continue;
  }
  // Insert lat/lng before reach:
  const insertion = `lat:${VILLA_COORDS.lat}, lng:${VILLA_COORDS.lng}, `;
  lines[idx] = lines[idx].replace(/(,\s*)reach:/, '$1' + insertion + 'reach:');
  console.log(`  ${id}: added lat/lng`);
}

src = lines.join('\n');
if (hadCRLF) src = src.replace(/\n/g, '\r\n');

if (src === orig) {
  console.log('');
  console.log('No changes.');
} else {
  fs.writeFileSync(FILE, src);
  console.log('');
  console.log(`Done. ${orig.length} → ${src.length} bytes`);
}

console.log('');
console.log('Spot check:');
console.log('  grep -E \'id:"(spiritus|depaul|easthouse|villa|villaofhopeyouth|voareentry)"\' src/components/HelpFinder.jsx');
