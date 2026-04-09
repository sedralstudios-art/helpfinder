#!/usr/bin/env node
/**
 * scripts/fix-pass2-01.cjs
 *
 * Pass 2 sensitive-category audit results.
 * Six programs patched. Five categories researched (addiction, mental,
 * youth, reentry, lgbtq).
 *
 * RULE APPLIED: "always enrich if not crossing boundaries; if multiple
 * credible third parties publish, the info is already public."
 * Credible third parties = NY OASAS, NY OMH, 211lifeline, county gov,
 * Chamber of Commerce, LinkedIn (operator's own profile). NOT credible =
 * SEO farms (rehab.com, detoxrehabs.net, yourfirststep.org, etc).
 *
 * BOUNDARY THAT DOESN'T MOVE: vulnerable-resident addresses where the
 * operator deliberately suppresses for safety (children's crisis nurseries,
 * DV shelters, trafficking refuges). Crisisnursery, owenshouse stay
 * suppressed regardless of third-party listings.
 *
 * Patches:
 *
 *   1. spiritus (Spiritus Christi Prison Outreach) — three bugs:
 *        - url pointed to spirituschristi.org (parent church) instead of
 *          spirituschristiprisonoutreach.org (the actual outreach program)
 *        - missing phone (operator publishes 585-288-0504)
 *        - missing admin address (operator publishes 30 Millbank St on
 *          /contact-us; residences Jennifer/Nielsen House are referenced
 *          by name only — same convention as Owen's House, KEEP suppressed)
 *
 *   2. depaul (DePaul Mental Health + Addiction Housing) — enrich
 *        - admin office: 1931 Buffalo Rd, Rochester NY 14624
 *        - confirmed by depaul.org, NY OASAS, 211lifeline, county
 *          behavioral health providers list
 *        - residential locations (Edgerton Square, etc.) NOT added —
 *          operator suppresses these for vulnerable resident safety
 *
 *   3. easthouse (East House) — enrich
 *        - admin office: 259 Monroe Ave Suite 200, Rochester NY 14607
 *        - confirmed by easthouse.org/contact-us, NY OASAS, 211lifeline
 *        - residential locations (Hanson House, Bohem Lodge, Affinity
 *          Place) NOT added — operator references by name only on their
 *          own site
 *
 *   4. villa (Villa of Hope, mental category) — enrich
 *        - main campus: 3300 Dewey Ave, Rochester NY 14616
 *        - confirmed by villaofhope.org/contact-us, 211lifeline
 *        - prominently published by operator
 *
 *   5. villaofhopeyouth (Villa of Hope, youth category) — enrich
 *        - same main campus address as villa (same physical building)
 *
 *   6. voareentry (VOA Residential Reentry) — enrich
 *        - HQ: 214 Lake Avenue, Rochester NY 14608
 *        - confirmed by linkedin.com/company/volunteers-of-america-of-
 *          upstate-new-york (operator's own LinkedIn profile lists this
 *          as Primary), 211lifeline, Yelp, Chamber of Commerce, Yelp
 *        - voaupny.org/contact references "offices in Rochester and
 *          Binghamton" without listing the street address inline, but
 *          their LinkedIn — which is operator-controlled — lists 214 Lake
 *          Ave as Primary HQ. Multiple credible third parties confirm.
 *
 * For all six programs, reach: "remote" → "local" since they're now
 * address-having and Rochester-based.
 *
 * Idempotent. ~6 seconds runtime (5 Census geocodes with 1.1s delays).
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

function findProgramLine(lines, id) {
  const idEscaped = id.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const idRe = new RegExp('^\\s*\\{\\s*id:"' + idEscaped + '"');
  for (let i = 0; i < lines.length; i++) {
    if (idRe.test(lines[i])) return i;
  }
  return -1;
}

// Adds ad/town/zip/lat/lng before reach. Skips if ad already present.
// Also flips reach: "remote" → "local".
function enrichWithAddress(line, ad, town, zip, coords) {
  if (/\bad:/.test(line)) {
    return { line, changed: false, reason: 'ad already present' };
  }

  const insertion = coords
    ? `ad:"${ad}", town:"${town}", zip:"${zip}", lat:${coords.lat}, lng:${coords.lng}, `
    : `ad:"${ad}", town:"${town}", zip:"${zip}", `;

  let newLine = line.replace(/(,\s*)reach:/, '$1' + insertion + 'reach:');
  newLine = newLine.replace('reach:"remote"', 'reach:"local"');

  return { line: newLine, changed: true, geocoded: !!coords };
}

async function patchEnrichOnly(src, id, ad, town, zip, geocodeAd) {
  const lines = src.split('\n');
  const idx = findProgramLine(lines, id);
  if (idx === -1) {
    console.log(`  PATCH-FAIL ${id}: line not found`);
    return src;
  }

  if (/\bad:/.test(lines[idx])) {
    console.log(`  ${id}: ad already present, skipping`);
    return src;
  }

  // Use geocodeAd if provided (e.g. strip "Suite 200" for the geocode call
  // while keeping it in the display ad), otherwise use the display ad as-is
  const addressForGeocoder = geocodeAd || ad;
  process.stdout.write(`  geocoding "${addressForGeocoder}, ${town} NY ${zip}" ... `);
  const coords = await geocodeOnce(`${addressForGeocoder}, ${town} NY ${zip}`);
  await sleep(GEOCODER_DELAY_MS);

  if (coords) {
    console.log(`${coords.lat}, ${coords.lng}`);
  } else {
    console.log('FAIL — patching town/zip only');
  }

  const result = enrichWithAddress(lines[idx], ad, town, zip, coords);
  lines[idx] = result.line;
  console.log(`  ${id}: enriched + reach→local`);
  return lines.join('\n');
}

async function main() {
  let src = fs.readFileSync(FILE, 'utf8');
  const orig = src;

  const hadCRLF = src.includes('\r\n');
  src = src.replace(/\r\n/g, '\n');

  // ── 1. spiritus — URL fix + phone + address + reach ──
  console.log('');
  console.log('━━ 1. spiritus — URL fix + phone + admin address ━━');
  {
    const lines = src.split('\n');
    const idx = findProgramLine(lines, 'spiritus');
    if (idx === -1) {
      console.log('  PATCH-FAIL: spiritus line not found');
    } else {
      let line = lines[idx];

      // URL fix
      if (line.includes('url:"https://www.spirituschristi.org"')) {
        line = line.replace(
          'url:"https://www.spirituschristi.org"',
          'url:"https://www.spirituschristiprisonoutreach.org"'
        );
        console.log('  fixed url → spirituschristiprisonoutreach.org');
      } else {
        console.log('  url already correct or unexpected shape, skipping');
      }

      // Add phone
      if (!/\bph:/.test(line)) {
        line = line.replace(/(url:"[^"]*"),\s*hr:/, '$1, ph:"585-288-0504", hr:');
        console.log('  added ph:585-288-0504');
      } else {
        console.log('  ph already present, skipping');
      }

      // Add address (geocoded)
      if (!/\bad:/.test(line)) {
        process.stdout.write('  geocoding "30 Millbank St, Rochester NY 14609" ... ');
        const coords = await geocodeOnce('30 Millbank St, Rochester NY 14609');
        await sleep(GEOCODER_DELAY_MS);
        if (coords) console.log(`${coords.lat}, ${coords.lng}`);
        else console.log('FAIL — patching town/zip only');

        const insertion = coords
          ? `ad:"30 Millbank St, Rochester NY 14609", town:"rochester", zip:"14609", lat:${coords.lat}, lng:${coords.lng}, `
          : `ad:"30 Millbank St, Rochester NY 14609", town:"rochester", zip:"14609", `;
        line = line.replace(/(,\s*)reach:/, '$1' + insertion + 'reach:');
        console.log('  added admin office address');
      } else {
        console.log('  ad already present, skipping');
      }

      // reach: remote → local
      if (line.includes('reach:"remote"')) {
        line = line.replace('reach:"remote"', 'reach:"local"');
        console.log('  reach: remote → local');
      }

      lines[idx] = line;
      src = lines.join('\n');
    }
  }

  // ── 2. depaul ──
  console.log('');
  console.log('━━ 2. depaul — admin office enrichment ━━');
  src = await patchEnrichOnly(src, 'depaul', '1931 Buffalo Rd', 'rochester', '14624');

  // ── 3. easthouse ──
  console.log('');
  console.log('━━ 3. easthouse — admin office enrichment ━━');
  src = await patchEnrichOnly(src, 'easthouse', '259 Monroe Ave Suite 200', 'rochester', '14607', '259 Monroe Ave');

  // ── 4. villa (mental) — uses Villa of Hope main campus ──
  console.log('');
  console.log('━━ 4. villa — main campus enrichment ━━');
  src = await patchEnrichOnly(src, 'villa', '3300 Dewey Ave', 'rochester', '14616');

  // ── 5. villaofhopeyouth (youth) — same campus ──
  console.log('');
  console.log('━━ 5. villaofhopeyouth — main campus enrichment ━━');
  src = await patchEnrichOnly(src, 'villaofhopeyouth', '3300 Dewey Ave', 'rochester', '14616');

  // ── 6. voareentry ──
  console.log('');
  console.log('━━ 6. voareentry — HQ enrichment ━━');
  src = await patchEnrichOnly(src, 'voareentry', '214 Lake Ave', 'rochester', '14608');

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
}

main().catch(e => { console.error('FATAL:', e); process.exit(1); });
