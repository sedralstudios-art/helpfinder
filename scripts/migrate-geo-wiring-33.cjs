/**
 * migrate-geo-wiring-33.cjs
 * 
 * Patches App.jsx and LandingPage.jsx to:
 * 1. Kill Nominatim reverse geocode call (CMPL compliance)
 * 2. Wire in resolveJurisdiction for local-only town detection
 * 3. Pass jurisdiction stack from App → HelpFinder for future use
 * 
 * Run: node scripts/migrate-geo-wiring-33.cjs
 */

const fs = require('fs');
const path = require('path');

const SRC = path.join(__dirname, '..', 'src');
let changes = 0;

// ─── 1. PATCH App.jsx ───────────────────────────────────────────────

const appPath = path.join(SRC, 'App.jsx');
let app = fs.readFileSync(appPath, 'utf8');

// Replace the full App.jsx — it's only 18 lines, safer than surgical patching
const newApp = `import { useState } from "react";
import LandingPage from "./components/LandingPage.jsx";
import HelpFinder from "./components/HelpFinder.jsx";

// HELPFINDER.HELP — App Router
// One purpose. One product. Free help, everywhere.

const VIEWS = { LANDING: "landing", HELP: "help" };

export default function App() {
  const [view, setView] = useState(VIEWS.LANDING);
  const [lang, setLang] = useState("en");
  const [city, setCity] = useState("your area");
  const [jurisdictions, setJurisdictions] = useState([]);

  const goToHelp = () => { setView(VIEWS.HELP); window.scrollTo(0, 0); };
  const goHome = () => { setView(VIEWS.LANDING); window.scrollTo(0, 0); };

  if (view === VIEWS.HELP) return <HelpFinder onExit={goHome} city={city} jurisdictions={jurisdictions} />;
  return <LandingPage onNavigateHelp={goToHelp} onLangChange={setLang} onCityDetected={setCity} onJurisdictionsDetected={setJurisdictions} />;
}
`;

fs.writeFileSync(appPath, newApp);
console.log('✓ App.jsx — added jurisdictions state, pass to HelpFinder + LandingPage');
changes++;

// ─── 2. PATCH LandingPage.jsx ────────────────────────────────────────

const lpPath = path.join(SRC, 'components', 'LandingPage.jsx');
let lp = fs.readFileSync(lpPath, 'utf8');

// 2a. Add the import for resolveJurisdiction after the last existing import
const lastImportMatch = lp.match(/^import .+$/m);
if (!lastImportMatch) {
  console.error('✗ Could not find import line in LandingPage.jsx');
  process.exit(1);
}

// Find the position after all imports (look for the last import statement)
const importLines = lp.split('\n');
let lastImportIdx = -1;
for (let i = 0; i < importLines.length; i++) {
  if (importLines[i].trimStart().startsWith('import ')) {
    lastImportIdx = i;
  }
  // Stop looking after first non-import, non-empty, non-comment line after finding imports
  if (lastImportIdx > -1 && i > lastImportIdx + 1 && importLines[i].trim() && !importLines[i].trim().startsWith('//') && !importLines[i].trim().startsWith('import')) {
    break;
  }
}

const resolveImport = 'import { resolveJurisdiction } from "../utils/resolveJurisdiction.js";';
if (!lp.includes('resolveJurisdiction')) {
  importLines.splice(lastImportIdx + 1, 0, resolveImport);
  lp = importLines.join('\n');
  console.log('✓ LandingPage.jsx — added resolveJurisdiction import');
  changes++;
}

// 2b. Add onJurisdictionsDetected to the destructured props
const oldProps = 'export default function HelpFinderLanding({ onNavigateHelp, onLangChange, onCityDetected })';
const newProps = 'export default function HelpFinderLanding({ onNavigateHelp, onLangChange, onCityDetected, onJurisdictionsDetected })';
if (lp.includes(oldProps)) {
  lp = lp.replace(oldProps, newProps);
  console.log('✓ LandingPage.jsx — added onJurisdictionsDetected prop');
  changes++;
}

// 2c. Replace the Nominatim useEffect block
const nominatimBlock = `  // Detect city via geolocation + free reverse geocode
  useEffect(() => {
    if (!navigator.geolocation) return;
    navigator.geolocation.getCurrentPosition((pos) => {
      const { latitude, longitude } = pos.coords;
      fetch(\`https://nominatim.openstreetmap.org/reverse?lat=\${latitude}&lon=\${longitude}&format=json\`)
        .then((r) => r.json())
        .then((d) => {
          const addr = d.address || {};
          const place = addr.city || addr.town || addr.village || addr.county || null;
          if (place) { setCity(place); if (onCityDetected) onCityDetected(place); }
        })
        .catch(() => {});
    }, () => {});
  }, []);`;

const localGeoBlock = `  // Detect town/village via local GeoJSON — no coordinates leave the device
  useEffect(() => {
    if (!navigator.geolocation) return;
    navigator.geolocation.getCurrentPosition((pos) => {
      const { latitude, longitude } = pos.coords;
      const matches = resolveJurisdiction({ lat: latitude, lng: longitude });
      if (matches.length > 0) {
        // Use the most specific match (village first, then town/city) for display
        const displayName = matches[0].name;
        setCity(displayName);
        if (onCityDetected) onCityDetected(displayName);
        if (onJurisdictionsDetected) onJurisdictionsDetected(matches);
      }
    }, () => {});
  }, []);`;

if (lp.includes(nominatimBlock)) {
  lp = lp.replace(nominatimBlock, localGeoBlock);
  console.log('✓ LandingPage.jsx — replaced Nominatim with local resolveJurisdiction');
  changes++;
} else {
  // Try a more flexible match — the block might have minor whitespace differences
  const nominatimUrl = 'nominatim.openstreetmap.org';
  if (lp.includes(nominatimUrl)) {
    console.error('✗ Found Nominatim URL but could not match the exact block.');
    console.error('  Manual patch needed. The Nominatim useEffect block has changed from expected.');
    console.error('  Look for lines containing "nominatim.openstreetmap.org" in LandingPage.jsx');
    process.exit(1);
  } else {
    console.log('⚠ Nominatim block not found — may already be removed');
  }
}

fs.writeFileSync(lpPath, lp);

// ─── 3. VERIFY ───────────────────────────────────────────────────────

const appFinal = fs.readFileSync(appPath, 'utf8');
const lpFinal = fs.readFileSync(lpPath, 'utf8');

const checks = [
  ['App.jsx has jurisdictions state', appFinal.includes('const [jurisdictions, setJurisdictions] = useState([])') ],
  ['App.jsx passes jurisdictions to HelpFinder', appFinal.includes('jurisdictions={jurisdictions}')],
  ['App.jsx passes onJurisdictionsDetected to Landing', appFinal.includes('onJurisdictionsDetected={setJurisdictions}')],
  ['LandingPage has resolveJurisdiction import', lpFinal.includes('resolveJurisdiction')],
  ['LandingPage has NO Nominatim URL', !lpFinal.includes('nominatim.openstreetmap.org')],
  ['LandingPage calls resolveJurisdiction', lpFinal.includes('resolveJurisdiction({ lat:')],
  ['LandingPage calls onJurisdictionsDetected', lpFinal.includes('onJurisdictionsDetected(matches)')],
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
