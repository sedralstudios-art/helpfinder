#!/usr/bin/env node
/**
 * migrate-jurisdiction-labels-38.cjs
 * ===================================
 * Adds displayName field to resolveJurisdiction return values so every
 * municipality renders with its official prefix:
 *   "Town of Greece", "Village of Fairport", "City of Rochester"
 *
 * Changes:
 *   1. resolveJurisdiction.js — add displayName to each match object
 *   2. LandingPage.jsx — use matches[0].displayName for city display
 *   3. LegalLibrary.jsx — use j.displayName for geo label text
 *
 * Slug generation (name + tier) is NOT changed — filtering still works.
 */

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
let failures = 0;

function replace(filePath, oldStr, newStr, label) {
  const abs = path.join(ROOT, filePath);
  const content = fs.readFileSync(abs, 'utf8');
  if (!content.includes(oldStr)) {
    console.error("ABORT: could not find expected string in " + filePath);
    console.error("  Label: " + label);
    console.error("  Expected: " + JSON.stringify(oldStr).slice(0, 120));
    failures++;
    return content;
  }
  const count = content.split(oldStr).length - 1;
  if (count > 1) {
    console.error("ABORT: found " + count + " matches (expected 1) in " + filePath);
    console.error("  Label: " + label);
    failures++;
    return content;
  }
  const updated = content.replace(oldStr, newStr);
  fs.writeFileSync(abs, updated, 'utf8');
  console.log("OK: " + label + " (" + filePath + ")");
  return updated;
}

// 1. resolveJurisdiction.js — add displayName to match objects
replace(
  'src/utils/resolveJurisdiction.js',
  '      matches.push({ name: feature.properties.name, tier: feature.properties.tier });',
  '      const tier = feature.properties.tier;\n'
  + '      const name = feature.properties.name;\n'
  + '      const prefix = tier === \'city\' ? \'City of\' : tier === \'village\' ? \'Village of\' : \'Town of\';\n'
  + '      matches.push({ name, tier, displayName: prefix + \' \' + name });',
  'resolveJurisdiction: add displayName field'
);

// 2. LandingPage.jsx — use displayName for city display
replace(
  'src/components/LandingPage.jsx',
  'const displayName = matches[0].name;',
  'const displayName = matches[0].displayName;',
  'LandingPage: use displayName'
);

// 3. LegalLibrary.jsx — use displayName in geo label
replace(
  'src/components/LegalLibrary.jsx',
  'jurisdictions.map(j => j.name).join(" + ")',
  'jurisdictions.map(j => j.displayName || j.name).join(" + ")',
  'LegalLibrary: use displayName in label'
);

if (failures > 0) {
  console.error("\n" + failures + " replacement(s) failed. No partial writes — review above.");
  process.exit(1);
} else {
  console.log("\nAll 3 replacements succeeded.");
}
