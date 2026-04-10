/**
 * migrate-jurisdiction-filter-34.cjs
 *
 * Wires jurisdiction stack into the legal library browse view:
 * 1. LandingPage stores jurisdictions locally + passes to LegalLibraryBrowse
 * 2. LegalLibraryBrowse filters entries by user's jurisdiction stack
 * 3. Federal/state/county entries always show. Town/village entries filter.
 * 4. "Show all" toggle when filtered. Location indicator when detected.
 *
 * Run: node scripts/migrate-jurisdiction-filter-34.cjs
 */

const fs = require('fs');
const path = require('path');

const SRC = path.join(__dirname, '..', 'src');
let changes = 0;

// ─── 1. PATCH LandingPage.jsx ────────────────────────────────────────

const lpPath = path.join(SRC, 'components', 'LandingPage.jsx');
let lp = fs.readFileSync(lpPath, 'utf8');

// 1a. Add local jurisdictions state after the city state line
const cityStateLine = 'const [city, setCity] = useState("your area");';
const jurisdictionsState = 'const [city, setCity] = useState("your area");\n  const [localJurisdictions, setLocalJurisdictions] = useState([]);';

if (!lp.includes('localJurisdictions')) {
  lp = lp.replace(cityStateLine, jurisdictionsState);
  console.log('✓ LandingPage — added localJurisdictions state');
  changes++;
}

// 1b. In the geo useEffect, also store locally
const oldGeoCallback = 'if (onJurisdictionsDetected) onJurisdictionsDetected(matches);';
const newGeoCallback = 'if (onJurisdictionsDetected) onJurisdictionsDetected(matches);\n        setLocalJurisdictions(matches);';

if (lp.includes(oldGeoCallback) && !lp.includes('setLocalJurisdictions(matches)')) {
  lp = lp.replace(oldGeoCallback, newGeoCallback);
  console.log('✓ LandingPage — store jurisdictions locally in geo callback');
  changes++;
}

// 1c. Pass jurisdictions to LegalLibraryBrowse
const oldBrowseRender = `<LegalLibraryBrowse
          legalLang={legalLang}
          setLegalLang={setLegalLang}
          categoryFilter={selectedCategory}
          onOpenEntry={openEntry}
          onBack={() => nav(PAGES.LEGAL_LIBRARY)}
        />`;

const newBrowseRender = `<LegalLibraryBrowse
          legalLang={legalLang}
          setLegalLang={setLegalLang}
          categoryFilter={selectedCategory}
          onOpenEntry={openEntry}
          onBack={() => nav(PAGES.LEGAL_LIBRARY)}
          jurisdictions={localJurisdictions}
        />`;

if (lp.includes(oldBrowseRender)) {
  lp = lp.replace(oldBrowseRender, newBrowseRender);
  console.log('✓ LandingPage — pass jurisdictions to LegalLibraryBrowse');
  changes++;
} else {
  console.log('⚠ Could not find exact LegalLibraryBrowse render block — trying flexible match');
  // Try matching just the closing pattern
  if (lp.includes('categoryFilter={selectedCategory}') && !lp.includes('jurisdictions={localJurisdictions}')) {
    lp = lp.replace(
      /onBack=\{[^}]*nav\(PAGES\.LEGAL_LIBRARY\)[^}]*\}\s*\/>/,
      (match) => match.replace('/>', '\n          jurisdictions={localJurisdictions}\n        />')
    );
    console.log('✓ LandingPage — pass jurisdictions (flexible match)');
    changes++;
  }
}

fs.writeFileSync(lpPath, lp);

// ─── 2. PATCH LegalLibrary.jsx ───────────────────────────────────────

const llPath = path.join(SRC, 'components', 'LegalLibrary.jsx');
let ll = fs.readFileSync(llPath, 'utf8');

// 2a. Update LegalLibraryBrowse function signature
const oldBrowseSig = 'export function LegalLibraryBrowse({ legalLang, setLegalLang, categoryFilter, onOpenEntry, onBack })';
const newBrowseSig = 'export function LegalLibraryBrowse({ legalLang, setLegalLang, categoryFilter, onOpenEntry, onBack, jurisdictions = [] })';

if (ll.includes(oldBrowseSig)) {
  ll = ll.replace(oldBrowseSig, newBrowseSig);
  console.log('✓ LegalLibrary — added jurisdictions prop to LegalLibraryBrowse');
  changes++;
}

// 2b. Add jurisdiction filtering logic + state after the entries line
const oldEntriesLine = '  const entries = LEGAL_ENTRIES_BY_CATEGORY[categoryFilter] || [];';

const newEntriesBlock = `  const allEntries = LEGAL_ENTRIES_BY_CATEGORY[categoryFilter] || [];

  // Jurisdiction filtering: town/village entries filter to user's location.
  // Federal, state, and county entries always show.
  const [showAll, setShowAll] = React.useState(false);
  const hasGeo = jurisdictions.length > 0;

  // Build jurisdiction slugs from geo matches: "Sweden" + "town" → "sweden-town"
  const geoSlugs = jurisdictions.map(j =>
    j.name.toLowerCase().replace(/\\s+/g, '-') + '-' + j.tier
  );

  const filteredEntries = (!hasGeo || showAll) ? allEntries : allEntries.filter(entry => {
    // Always show federal, state, county entries
    if (entry.tier === 'federal' || entry.tier === 'state' || entry.tier === 'county') return true;
    // Town/village/city entries: check if jurisdiction matches any geo slug
    return geoSlugs.some(slug => entry.jurisdiction && entry.jurisdiction.endsWith(slug));
  });

  const entries = filteredEntries;
  const hiddenCount = allEntries.length - filteredEntries.length;`;

if (ll.includes(oldEntriesLine)) {
  ll = ll.replace(oldEntriesLine, newEntriesBlock);
  console.log('✓ LegalLibrary — added jurisdiction filtering logic');
  changes++;
}

// 2c. Add location indicator + show all toggle after the guide count line
const oldGuideCount = `<p style={{ fontSize: 12, color: C.dust, marginBottom: 22 }}>{entries.length} guide{entries.length === 1 ? "" : "s"}</p>`;

const newGuideCount = `<p style={{ fontSize: 12, color: C.dust, marginBottom: hasGeo && !showAll && hiddenCount > 0 ? 8 : 22 }}>
        {entries.length} guide{entries.length === 1 ? "" : "s"}
        {hasGeo && !showAll ? " for " + jurisdictions.map(j => j.name).join(" + ") : ""}
      </p>
      {hasGeo && hiddenCount > 0 && (
        <button
          onClick={() => setShowAll(!showAll)}
          style={{
            background: "none", border: "none", cursor: "pointer",
            fontSize: 12, color: C.forest, padding: "0 0 14px", fontFamily: "inherit",
            textDecoration: "underline"
          }}
        >
          {showAll ? "Show my area only" : "Show all " + allEntries.length + " jurisdictions"}
        </button>
      )}`;

if (ll.includes(oldGuideCount)) {
  ll = ll.replace(oldGuideCount, newGuideCount);
  console.log('✓ LegalLibrary — added location indicator + show all toggle');
  changes++;
}

fs.writeFileSync(llPath, ll);

// ─── 3. VERIFY ───────────────────────────────────────────────────────

const lpFinal = fs.readFileSync(lpPath, 'utf8');
const llFinal = fs.readFileSync(llPath, 'utf8');

const checks = [
  ['LandingPage has localJurisdictions state', lpFinal.includes('const [localJurisdictions, setLocalJurisdictions] = useState([])') ],
  ['LandingPage stores jurisdictions locally', lpFinal.includes('setLocalJurisdictions(matches)')],
  ['LandingPage passes jurisdictions to Browse', lpFinal.includes('jurisdictions={localJurisdictions}')],
  ['LegalLibrary Browse accepts jurisdictions prop', llFinal.includes('jurisdictions = []')],
  ['LegalLibrary has geoSlugs matching', llFinal.includes('geoSlugs')],
  ['LegalLibrary filters by tier', llFinal.includes("entry.tier === 'state'")],
  ['LegalLibrary has show all toggle', llFinal.includes('Show all ')],
  ['LegalLibrary shows location name', llFinal.includes('jurisdictions.map(j => j.name)')],
];

console.log('\n── Verification ──');
let allGood = true;
for (const [label, ok] of checks) {
  console.log(ok ? '✓' : '✗', label);
  if (!ok) allGood = false;
}

console.log('\n' + changes + ' changes applied.');
if (allGood) {
  console.log('All checks passed. Ready to commit.');
} else {
  console.log('SOME CHECKS FAILED — review before committing.');
}
