#!/usr/bin/env node
/**
 * migrate-dead-links-39.cjs
 * =========================
 * Replaces 8 dead/moved URLs with verified working replacements.
 *
 * Verified 2026-04-12 via WebFetch:
 *   1. rochesterfec.org → cityofrochester.gov (City FEC, same phone 585-252-7110)
 *   2. rochesteraa.com → rochesteraa.org (same org, domain changed)
 *   3. applications.labor.ny.gov/IndividualReg → dol.ny.gov unemployment portal
 *   4. labor.ny.gov/.../beforeyouapplyfaq.shtm → dol.ny.gov unemployment portal
 *   5. pflag.org/chapter/pflag-rochester/ → pflag.org/find-a-chapter/
 *   6. va.gov/rochester-health-care/ → va.gov/finger-lakes-health-care/
 *   7. dol.ny.gov/wage-theft → dol.ny.gov/wage-theft-hub (2 occurrences)
 *   8. dos.ny.gov/uniform-code → dos.ny.gov/building-standards-and-codes
 *   9. townofgatesny.gov/building-department-permit-issuance/ →
 *      townofgatesny.gov/building-department-and-public-works/ (2 occurrences)
 */

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
let failures = 0;
let successes = 0;

function replaceAll(filePath, oldStr, newStr, label) {
  const abs = path.join(ROOT, filePath);
  const content = fs.readFileSync(abs, 'utf8');
  if (!content.includes(oldStr)) {
    console.error("ABORT: could not find expected string in " + filePath);
    console.error("  Label: " + label);
    console.error("  Expected: " + JSON.stringify(oldStr).slice(0, 120));
    failures++;
    return;
  }
  const count = content.split(oldStr).length - 1;
  const updated = content.split(oldStr).join(newStr);
  fs.writeFileSync(abs, updated, 'utf8');
  console.log("OK: " + label + " (" + count + "x in " + filePath + ")");
  successes++;
}

// === HelpFinder.jsx ===
const HF = 'src/components/HelpFinder.jsx';

// 1. Rochester FEC → City of Rochester Financial Empowerment Center
replaceAll(HF,
  'url:"https://www.rochesterfec.org"',
  'url:"https://www.cityofrochester.gov/departments/office-financial-empowerment/"',
  'FEC: rochesterfec.org → cityofrochester.gov'
);

// 2. Rochester AA: .com → .org
replaceAll(HF,
  'url:"https://rochesteraa.com"',
  'url:"https://rochesteraa.org"',
  'AA: rochesteraa.com → rochesteraa.org'
);

// 3. Unemployment: dead apply URL
replaceAll(HF,
  'aurl:"https://applications.labor.ny.gov/IndividualReg"',
  'aurl:"https://dol.ny.gov/unemployment/unemployment-insurance-assistance"',
  'Unemployment: applications.labor.ny.gov → dol.ny.gov'
);

// 4. Unemployment: old info URL (redirects but update to canonical)
replaceAll(HF,
  'url:"https://labor.ny.gov/ui/claimantinfo/beforeyouapplyfaq.shtm"',
  'url:"https://dol.ny.gov/unemployment/unemployment-insurance-assistance"',
  'Unemployment: labor.ny.gov FAQ → dol.ny.gov'
);

// 5. PFLAG: chapter page → find-a-chapter
replaceAll(HF,
  'url:"https://pflag.org/chapter/pflag-rochester/"',
  'url:"https://pflag.org/find-a-chapter/"',
  'PFLAG: chapter page → find-a-chapter'
);

// 6. VA: Rochester → Finger Lakes
replaceAll(HF,
  'url:"https://www.va.gov/rochester-health-care/"',
  'url:"https://www.va.gov/finger-lakes-health-care/"',
  'VA: rochester-health-care → finger-lakes-health-care'
);

// === Legal entries ===

// 7. DOL wage theft (2 occurrences in NY roofing entry)
replaceAll(
  'src/data/legal/entries/LGLW6-D_roofing-residential-ny_01.js',
  'https://dol.ny.gov/wage-theft',
  'https://dol.ny.gov/wage-theft-hub',
  'DOL: wage-theft → wage-theft-hub'
);

// 8. DOS uniform code
replaceAll(
  'src/data/legal/entries/LGLW6-D_roofing-residential-ny_01.js',
  'https://dos.ny.gov/uniform-code',
  'https://dos.ny.gov/building-standards-and-codes',
  'DOS: uniform-code → building-standards-and-codes'
);

// 9. Gates building dept (2 occurrences)
replaceAll(
  'src/data/legal/entries/LGLW6-D_roofing-residential-ny-mon-gates-town_01.js',
  'https://www.townofgatesny.gov/building-department-permit-issuance/',
  'https://www.townofgatesny.gov/building-department-and-public-works/',
  'Gates: building-department-permit-issuance → building-department-and-public-works'
);

console.log("\n" + successes + " replacements succeeded, " + failures + " failed.");
if (failures > 0) process.exit(1);
