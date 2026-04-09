#!/usr/bin/env node
/**
 * scripts/migrate-helpfinder-schema-02.cjs
 *
 * v2 of HelpFinder.jsx schema migration. Adds a 3-tier geocoding fallback
 * ladder so addresses with building names, suites, or parenthetical
 * clarifiers don't silently get dropped.
 *
 * Adds these fields to every PROGRAMS entry:
 *   town        (lowercase slug, parsed from existing `ad:` field)
 *   zip         (parsed from existing `ad:` field)
 *   lat         (geocoded via US Census Bureau, build-time only)
 *   lng         (geocoded via US Census Bureau, build-time only)
 *   reach       (one of: local, regional, statewide, national, remote)
 *   coordApprox (true ONLY if lat/lng came from Tier 3 centroid fallback;
 *                otherwise the field is omitted entirely)
 *
 * Geocoding ladder (each tier hits Census once with a polite 1.1s delay):
 *   Tier 1 — exact address as written
 *   Tier 2 — normalized: strip parenthetical clarifiers, leading building/org
 *            names, and middle suite/apt/floor/room designators
 *   Tier 3 — city + NY + zip (returns city/zip centroid; marked coordApprox)
 *
 * Also:
 *   - Adds MONROE_TOWNS const after CATEGORIES
 *   - Adds REACH_TIERS doc block
 *   - Fixes the stale header comment (43 categories, 294 programs)
 *
 * RUN ONCE. Idempotent: skips any program that already has a `town:` field,
 * so a partial run can be resumed safely.
 *
 * Output:
 *   - src/components/HelpFinder.jsx rewritten in place
 *   - migration-report.txt at repo root with every decision logged
 *
 * Privacy note: Census Bureau Geocoder is hit at BUILD TIME from this developer
 * machine. Public organization addresses go out, lat/lng comes back, gets baked
 * into HelpFinder.jsx as plain numbers. The production site never makes any
 * external geocoding calls. CMPL geolocation directive (March 28) governs USER
 * coordinates only — this script does not touch user data.
 *
 * Runtime: ~5–11 minutes depending on how many addresses need the fallback ladder.
 */

const fs = require('fs');
const path = require('path');

// ─────────────────────────────────────────────
// CONFIG
// ─────────────────────────────────────────────
const FILE = path.join(__dirname, '..', 'src', 'components', 'HelpFinder.jsx');
const REPORT_FILE = path.join(__dirname, '..', 'migration-report.txt');
const GEOCODER_DELAY_MS = 1100; // be polite to census.gov

if (typeof fetch === 'undefined') {
  console.error('ERROR: This script requires Node 18 or newer (for built-in fetch).');
  console.error('Run `node --version` to check. If older, upgrade Node or install node-fetch.');
  process.exit(1);
}

const sleep = (ms) => new Promise(r => setTimeout(r, ms));

// ─────────────────────────────────────────────
// REACH HEURISTIC
// Returns [reachValue, reasoningString]
// ─────────────────────────────────────────────
function assignReach({ id, url, ph, desc, ad }) {
  const u = (url || '').toLowerCase();
  const p = (ph || '');
  const d = (desc || '').toLowerCase();
  const has = (s) => u.includes(s);

  if (p === '988') return ['national', 'phone is 988 (national crisis lifeline)'];
  if (p === '211') return ['national', 'phone is 211 (national info line)'];
  if (p === '311') return ['regional', 'phone is 311 (city services)'];

  if (has('988lifeline') || has('crisistextline')) return ['national', 'national crisis service URL'];
  if (has('irs.gov') || has('va.gov') || has('hud.gov') || has('ssa.gov') || has('usa.gov')) {
    return ['national', 'federal agency URL'];
  }
  if (has('needymeds') || has('rxoutreach.org')) return ['national', 'national patient assistance program'];

  if (has('mybenefits.ny.gov') || has('otda.ny.gov') ||
      has('health.ny.gov') || has('nystateofhealth') ||
      has('dhr.ny.gov') || has('agriculture.ny.gov') ||
      has('criminaljustice.ny.gov') || has('nyserda.ny.gov') ||
      has('ag.ny.gov') || has('dol.ny.gov')) {
    return ['statewide', 'NY state agency URL'];
  }
  if (has('newyorkrxcard')) return ['statewide', 'NY-only Rx discount card'];

  if (has('211lifeline.org')) return ['regional', '211 Finger Lakes regional service'];
  if (has('foodlinkny')) return ['regional', 'Foodlink covers ~10 county region'];

  if (!ad) {
    if (id.includes('text') || d.includes('text ')) return ['remote', 'text-based service, no address'];
    if (u && !p) return ['remote', 'online tool only, no address or phone'];
    return ['remote', 'no physical address — review'];
  }

  return ['local', 'has physical address'];
}

// ─────────────────────────────────────────────
// CENSUS BUREAU GEOCODER — single low-level call, no delay
// Returns { lat, lng } or null on no match
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
// ADDRESS NORMALIZER
// Strips parens, leading building/org names, and middle suite designators.
// Returns the normalized string, or null if nothing changed.
// ─────────────────────────────────────────────
function normalizeAddressForRetry(ad) {
  // Remove parenthetical clarifications: "65 Genesee St (St. Mary's Campus), ..."
  let cleaned = ad.replace(/\s*\([^)]*\)/g, '');

  // Split, trim, drop empties
  let parts = cleaned.split(',').map(s => s.trim()).filter(s => s.length > 0);

  // Drop leading building/org name: 3+ parts AND first part doesn't start with a digit
  if (parts.length >= 3 && !/^\d/.test(parts[0])) {
    parts.shift();
  }

  // Drop middle suite/apt/floor/room/PO box designators
  const SUITE_RE = /^(suite|ste|apt|apartment|unit|floor|fl|room|rm|#|building|bldg|po box|p\.o\.\s*box)\b/i;
  parts = parts.filter((part, i) => {
    // Always keep the last part (city/state/zip line)
    if (i === parts.length - 1) return true;
    // Always keep parts that start with a digit (street numbers)
    if (/^\d/.test(part)) return true;
    // Always keep parts that look like a city/state/zip
    if (/\bNY\s+\d{5}/.test(part)) return true;
    // Drop suite/apt/etc designators
    if (SUITE_RE.test(part)) return false;
    return true;
  });

  const result = parts.join(', ');
  return (result && result !== ad) ? result : null;
}

// ─────────────────────────────────────────────
// GEOCODE WITH FALLBACK LADDER
// Returns { lat, lng, approx, tier, attempts } or null
// Each HTTP call is followed by a polite delay.
// ─────────────────────────────────────────────
async function geocodeWithFallback(ad, parsedCity, parsedZip) {
  const attempts = [];

  // Tier 1: exact address
  let coords = await geocodeOnce(ad);
  attempts.push('exact');
  await sleep(GEOCODER_DELAY_MS);
  if (coords) return { ...coords, approx: false, tier: 'exact', attempts };

  // Tier 2: normalized
  const normalized = normalizeAddressForRetry(ad);
  if (normalized) {
    coords = await geocodeOnce(normalized);
    attempts.push(`normalized="${normalized}"`);
    await sleep(GEOCODER_DELAY_MS);
    if (coords) return { ...coords, approx: false, tier: 'normalized', attempts };
  }

  // Tier 3: city + state + zip centroid
  if (parsedCity && parsedZip) {
    const cityZip = `${parsedCity}, NY ${parsedZip}`;
    coords = await geocodeOnce(cityZip);
    attempts.push(`centroid="${cityZip}"`);
    await sleep(GEOCODER_DELAY_MS);
    if (coords) return { ...coords, approx: true, tier: 'centroid', attempts };
  }

  return { failed: true, attempts };
}

// ─────────────────────────────────────────────
// ADDRESS PARSER
// Input:  "STREET, City NY ZIP"
// Output: { street, city, zip } or null
// ─────────────────────────────────────────────
function parseAddress(ad) {
  const m = ad.match(/^(.+),\s*([^,]+?)\s+NY\s+(\d{5})$/);
  if (!m) return null;
  return {
    street: m[1].trim(),
    city: m[2].trim(),
    zip: m[3],
  };
}

// ─────────────────────────────────────────────
// FIELD EXTRACTOR
// Word-boundary-safe so `d:` does not match `id:` or `doc:`.
// ─────────────────────────────────────────────
function extractField(line, field) {
  const re = new RegExp('(?:^|[\\s,{])' + field + ':"((?:[^"\\\\]|\\\\.)*)"');
  const m = line.match(re);
  return m ? m[1] : '';
}

// ─────────────────────────────────────────────
// MAIN
// ─────────────────────────────────────────────
async function main() {
  console.log('Reading HelpFinder.jsx...');
  let src = fs.readFileSync(FILE, 'utf8');
  const originalLength = src.length;

  const report = [];
  report.push('HelpFinder.jsx schema migration v2 (with fallback ladder)');
  report.push(`Run at: ${new Date().toISOString()}`);
  report.push('');

  // ── 1. Fix stale header comment ──
  const headerOld = /\/\/ \d+ Categories · \d+ Programs · 8 Languages/;
  if (headerOld.test(src)) {
    src = src.replace(headerOld, '// 43 Categories · 294 Programs · 8 Languages');
    console.log('Header comment fixed.');
    report.push('== HEADER ==');
    report.push('Stale category/program count corrected to 43 / 294.');
    report.push('');
  }

  // ── 2. Process PROGRAMS array line by line ──
  const lines = src.split('\n');
  const newLines = [];
  let inPrograms = false;
  let processed = 0, skipped = 0;
  let geoExact = 0, geoNormalized = 0, geoCentroid = 0, geoFailed = 0;
  let parseFailed = 0;

  report.push('== PROGRAMS ==');

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    if (!inPrograms && /^const PROGRAMS = \[/.test(line)) {
      inPrograms = true;
      newLines.push(line);
      continue;
    }

    if (inPrograms && /^\];?\s*$/.test(line)) {
      inPrograms = false;
      newLines.push(line);
      continue;
    }

    if (!inPrograms) {
      newLines.push(line);
      continue;
    }

    const idMatch = line.match(/^\s*\{\s*id:"([^"]+)"/);
    if (!idMatch) {
      newLines.push(line);
      continue;
    }

    const id = idMatch[1];

    if (/\btown:/.test(line)) {
      newLines.push(line);
      skipped++;
      report.push(`SKIP ${id}: already has town field`);
      continue;
    }

    const ad = extractField(line, 'ad');
    const url = extractField(line, 'url');
    const ph = extractField(line, 'ph');
    const desc = extractField(line, 'd');

    let town = null, zip = null, lat = null, lng = null, coordApprox = false;
    let geoNote = '';

    if (ad) {
      const parsed = parseAddress(ad);
      if (parsed) {
        town = parsed.city.toLowerCase().replace(/\s+/g, '-');
        zip = parsed.zip;

        process.stdout.write(`  geocoding ${id} ... `);
        const result = await geocodeWithFallback(ad, parsed.city, parsed.zip);

        if (result && !result.failed) {
          lat = result.lat;
          lng = result.lng;
          coordApprox = result.approx;
          if (result.tier === 'exact') { geoExact++; console.log(`${lat}, ${lng} [exact]`); }
          else if (result.tier === 'normalized') { geoNormalized++; console.log(`${lat}, ${lng} [normalized]`); }
          else if (result.tier === 'centroid') { geoCentroid++; console.log(`${lat}, ${lng} [APPROX centroid]`); }
          geoNote = `[${result.tier}${coordApprox ? ' APPROX' : ''}]`;
        } else {
          geoFailed++;
          console.log('FAIL all tiers');
          geoNote = `[GEOCODE-FAIL: tried ${(result && result.attempts || []).join(' → ')}]`;
        }
      } else {
        parseFailed++;
        report.push(`PARSE-FAIL ${id}: could not parse address "${ad}"`);
        geoNote = '[parse-fail]';
      }
    }

    const [reach, reachReason] = assignReach({ id, url, ph, desc, ad });

    const newFields = [];
    if (town !== null)        newFields.push(`town:"${town}"`);
    if (zip !== null)         newFields.push(`zip:"${zip}"`);
    if (lat !== null)         newFields.push(`lat:${lat}`);
    if (lng !== null)         newFields.push(`lng:${lng}`);
    if (coordApprox === true) newFields.push(`coordApprox:true`);
    newFields.push(`reach:"${reach}"`);

    const newLine = line.replace(/}\s*,?\s*$/, ', ' + newFields.join(', ') + ' },');

    if (newLine === line) {
      report.push(`INSERT-FAIL ${id}: regex did not match closing brace pattern`);
      newLines.push(line);
    } else {
      newLines.push(newLine);
      processed++;
      const fieldSummary = `town=${town || '-'} zip=${zip || '-'} lat=${lat || '-'} lng=${lng || '-'} reach=${reach}`;
      report.push(`OK ${id}: ${fieldSummary} ${geoNote} (${reachReason})`);
    }
  }

  src = newLines.join('\n');

  // ── 3. Add MONROE_TOWNS + REACH_TIERS doc if not already present ──
  if (!src.includes('const MONROE_TOWNS')) {
    const monroeBlock = `
// ─────────────────────────────────────────────
// MONROE_TOWNS — canonical list of towns and villages in Monroe County, NY
// Used for URL slugs, gap detection, and town-level filtering.
// Slugs are lowercase, hyphenated. Match the \`town:\` field on every program.
// ─────────────────────────────────────────────
const MONROE_TOWNS = [
  "brighton", "brockport", "chili", "churchville", "clarkson",
  "east-rochester", "fairport", "gates", "greece", "hamlin",
  "henrietta", "hilton", "honeoye-falls", "irondequoit", "mendon",
  "ogden", "parma", "penfield", "perinton", "pittsford",
  "riga", "rochester", "rush", "scottsville", "spencerport",
  "sweden", "webster", "wheatland",
];

// ─────────────────────────────────────────────
// REACH_TIERS — how far a program's help extends
//   local      Physical address matters. Sort by distance from user.
//   regional   Multi-county or county-wide service. Visit physical office.
//   statewide  Serves anywhere in NY. May have a local office for in-person work.
//   national   Serves anywhere in the US.
//   remote     Phone, mail, video, online. Location-independent.
//
// coordApprox:true means lat/lng came from a Tier 3 city/zip centroid lookup,
// not the program's actual building. Distance math still works for sort order
// to within ~1 mile, but any UI that renders a map pin or "directions" link
// MUST show "approximate location" notice for these programs.
// ─────────────────────────────────────────────

`;
    src = src.replace(/(const DATA_VERIFIED = "April 2026";)/, monroeBlock + '$1');
    console.log('MONROE_TOWNS and REACH_TIERS doc inserted.');
    report.push('');
    report.push('== CONSTS ==');
    report.push('MONROE_TOWNS const added (28 towns/villages).');
    report.push('REACH_TIERS documentation block added.');
  }

  // ── Write file and report ──
  fs.writeFileSync(FILE, src);

  report.push('');
  report.push('== SUMMARY ==');
  report.push(`Programs processed:    ${processed}`);
  report.push(`Programs skipped:      ${skipped} (already migrated)`);
  report.push(`Geocoded exact:        ${geoExact}`);
  report.push(`Geocoded normalized:   ${geoNormalized}`);
  report.push(`Geocoded approx (centroid): ${geoCentroid}`);
  report.push(`Geocode failed (all tiers): ${geoFailed}`);
  report.push(`Address parse failures: ${parseFailed}`);
  report.push(`File size: ${originalLength} → ${src.length} bytes`);

  fs.writeFileSync(REPORT_FILE, report.join('\n') + '\n');

  console.log('');
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
  console.log(`Programs processed:         ${processed}`);
  console.log(`Programs skipped:           ${skipped} (already migrated)`);
  console.log(`Geocoded exact:             ${geoExact}`);
  console.log(`Geocoded normalized:        ${geoNormalized}`);
  console.log(`Geocoded approx (centroid): ${geoCentroid}`);
  console.log(`Geocode failed (all tiers): ${geoFailed}`);
  console.log(`Address parse failures:     ${parseFailed}`);
  console.log(`File size: ${originalLength} → ${src.length} bytes`);
  console.log(`Report:    ${REPORT_FILE}`);
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
  console.log('Next: review the report, then `git diff src/components/HelpFinder.jsx | head -200`');
}

main().catch(e => { console.error('FATAL:', e); process.exit(1); });
