/**
 * Migration 21 — Trades category + first 2 entries
 *
 * 1. Adds "trades" to CATEGORY_META in LegalLibrary.jsx (React)
 * 2. Adds "trades" to CATEGORY_META in prerender-legal.cjs (static)
 * 3. Creates LGLW6-D_roofing-residential-ny_01.js (state floor)
 * 4. Creates LGLW6-D_roofing-residential-ny-mon-pittsford-town_01.js
 *
 * Dual rendering rule: both renderers patched in the same commit.
 *
 * Run: node scripts/migrate-trades-category-21.cjs
 */

const fs = require('fs');
const path = require('path');

const ENTRIES_DIR = path.join(__dirname, '..', 'src', 'data', 'legal', 'entries');

// ── 1. CATEGORY_META — LegalLibrary.jsx ──
console.log('\n=== LegalLibrary.jsx — CATEGORY_META ===');
const llPath = path.join(__dirname, '..', 'src', 'components', 'LegalLibrary.jsx');
let ll = fs.readFileSync(llPath, 'utf8');

const llAnchor = `  criminal: {
    icon: "⚖️",
    label: "Criminal Record",
    desc: "NY Clean Slate Act, sealing records, certificates of relief, expungement.",
  },
};`;

const llReplacement = `  criminal: {
    icon: "⚖️",
    label: "Criminal Record",
    desc: "NY Clean Slate Act, sealing records, certificates of relief, expungement.",
  },
  trades: {
    icon: "🔨",
    label: "Trades & Permits",
    desc: "Building permits, contractor requirements, and local ordinances by town.",
  },
};`;

if (ll.includes(llAnchor)) {
  ll = ll.replace(llAnchor, llReplacement);
  fs.writeFileSync(llPath, ll, 'utf8');
  console.log('  ✓ trades added to CATEGORY_META');
} else {
  console.error('  ✗ Anchor not found in LegalLibrary.jsx — check criminal block');
}

// ── 2. CATEGORY_META — prerender-legal.cjs ──
console.log('\n=== prerender-legal.cjs — CATEGORY_META ===');
const prPath = path.join(__dirname, '..', 'scripts', 'prerender-legal.cjs');
let pr = fs.readFileSync(prPath, 'utf8');

const prAnchor = `  criminal: {
    icon: '⚖️',
    label: 'Criminal Record',
    desc: 'NY Clean Slate Act, sealing records, certificates of relief, expungement — clear your record.',
    seoKeywords: 'NY Clean Slate Act, sealing criminal record, certificate of relief, expungement New York',
  },
};`;

const prReplacement = `  criminal: {
    icon: '⚖️',
    label: 'Criminal Record',
    desc: 'NY Clean Slate Act, sealing records, certificates of relief, expungement — clear your record.',
    seoKeywords: 'NY Clean Slate Act, sealing criminal record, certificate of relief, expungement New York',
  },
  trades: {
    icon: '🔨',
    label: 'Trades & Permits',
    desc: 'Building permits, contractor insurance, and local ordinances — what the rules are where you are.',
    seoKeywords: 'building permit NY, contractor requirements, roofing permit, town ordinance, Monroe County permits',
  },
};`;

if (pr.includes(prAnchor)) {
  pr = pr.replace(prAnchor, prReplacement);
  fs.writeFileSync(prPath, pr, 'utf8');
  console.log('  ✓ trades added to CATEGORY_META');
} else {
  console.error('  ✗ Anchor not found in prerender-legal.cjs — check criminal block');
}

// ── 3. State floor entry ──
console.log('\n=== Entry: roofing-residential-ny (state floor) ===');
const floorFile = path.join(ENTRIES_DIR, 'LGLW6-D_roofing-residential-ny_01.js');

const floorContent = `// LGLW6-D_roofing-residential-ny_01.js
// State-floor entry for residential roofing in New York.
// Applies everywhere in the state. Town/village entries layer on top.

export const entry = {
  id: "roofing-residential-ny",
  category: "trades",
  tier: "state",
  jurisdiction: "us-ny",
  status: "active",

  title: {
    en: "Residential roofing in New York: what state law requires"
  },

  summary: {
    en: "New York State sets the floor for residential roofing work — building code, insurance, and wage protections that apply everywhere in the state. Towns and villages add their own permit rules on top."
  },

  whatItMeans: {
    en: "Roofing work on one- and two-family homes in New York falls under the NYS Uniform Fire Prevention and Building Code. Paid contractors are required to carry Workers' Compensation and disability insurance under NY Workers' Compensation Law, or to hold a state-issued waiver for sole proprietors with no employees. Home improvement contractor licensing is required in New York City and the downstate counties of Nassau, Suffolk, Westchester, Rockland, and Putnam. Most of upstate New York, including Monroe County, has no statewide contractor license — licensing is handled town by town."
  },

  example: {
    en: "A day laborer is hired in cash to tear off and replace a roof in a Monroe County suburb. The homeowner refuses to pay the agreed amount after the work is done. Even with no written contract and no contractor license, New York Labor Law protects the worker's right to be paid for hours worked, and the NYS Mechanic's Lien Law allows an unpaid laborer to place a lien against the property where they performed the work."
  },

  whoQualifies: {
    en: [
      "Any person performing roofing work on a residential property in New York State, including homeowners doing their own work",
      "Licensed contractors, unlicensed workers, day laborers, and subcontractors — state-floor rules apply regardless of licensing",
      "Workers paid in cash, by check, or off the books — wage laws apply the same way",
      "Workers without work authorization — New York wage protections apply to undocumented workers the same as any other worker"
    ]
  },

  yourRights: {
    en: [
      "The right to be paid for hours worked under New York Labor Law §191 and §193, even without a written contract",
      "The right to safe working conditions, including fall protection for roofing work under OSHA and the NYS Industrial Code",
      "The right to Workers' Compensation coverage for injuries sustained while working for a contractor",
      "The right to not be misclassified as an independent contractor when working as an employee",
      "The right to file a wage theft claim without retaliation, regardless of immigration status"
    ]
  },

  legalOptions: {
    en: [
      "The NYS Department of Labor Division of Labor Standards accepts wage theft claims and investigates unpaid wages for construction work",
      "The NYS Attorney General's Labor Bureau investigates patterns of wage theft and worker exploitation in construction",
      "New York Mechanic's Lien Law §3 allows a laborer who performed work on a building to file a lien against the property for unpaid wages",
      "Small claims court in the county where the work was done handles disputes up to $5,000 in towns and $10,000 in New York City",
      "The NYS Workers' Compensation Board handles injury claims for construction workers, including workers whose employer failed to carry coverage",
      "The federal Occupational Safety and Health Administration accepts safety complaints for roofing work at heights, including anonymous complaints"
    ]
  },

  counsel: [
    {
      type: "free",
      name: "Worker Justice Center of New York",
      focus: "Wage theft, misclassification, and unpaid wages in construction and agriculture",
      qualifier: "Low-income workers; services available regardless of immigration status",
      access: "Walk-in and by appointment; Spanish and English",
      outcome: "Claim filing assistance, legal representation in wage disputes, worker education",
      phone: "585-325-3050",
      url: "https://www.wjcny.org",
      verified: true,
      bilingual: true,
      languages: ["en", "es"]
    },
    {
      type: "free",
      name: "Legal Assistance of Western New York (LawNY)",
      focus: "Civil legal aid for low-income residents including employment and wage issues",
      qualifier: "Income-eligible residents of Monroe and surrounding counties",
      access: "Phone intake and online application",
      outcome: "Advice, brief services, and full representation depending on the case",
      phone: "585-325-2520",
      url: "https://www.lawny.org",
      verified: true,
      bilingual: false,
      languages: ["en"]
    },
    {
      type: "free",
      name: "NYS Department of Labor — Division of Labor Standards",
      focus: "Unpaid wages and wage theft complaints across all industries",
      qualifier: "Any worker in New York, regardless of immigration or licensing status",
      access: "Online complaint form or phone intake",
      outcome: "State investigation and potential recovery of unpaid wages",
      phone: "1-888-469-7365",
      url: "https://dol.ny.gov/wage-theft",
      verified: true,
      bilingual: true,
      languages: ["en", "es"]
    }
  ],

  relatedIds: ["roofing-residential-ny-mon-pittsford-town"],
  relatedHelpResources: [],

  tags: [
    "trades", "roofing", "contractor", "construction",
    "wage theft", "day laborer", "unlicensed work",
    "workers compensation", "mechanic lien", "uniform code"
  ],

  sources: [
    "https://dos.ny.gov/uniform-code",
    "https://dol.ny.gov/wage-theft",
    "https://www.nysenate.gov/legislation/laws/LAB/191",
    "https://www.nysenate.gov/legislation/laws/LIE/3"
  ],

  lastAudited: "2026-04-10",
  lastVerifiedBy: "Claude + Tony",
  volatility: "moderate",
  emergencyFlag: false,
  disclaimer: true,
  categoryDisclaimer: null
};
`;

if (!fs.existsSync(floorFile)) {
  fs.writeFileSync(floorFile, floorContent, 'utf8');
  console.log('  ✓ Created ' + path.basename(floorFile));
} else {
  console.log('  ⚠ File already exists — skipping');
}

// ── 4. Pittsford town entry ──
console.log('\n=== Entry: roofing-residential-ny-mon-pittsford-town ===');
const pittFile = path.join(ENTRIES_DIR, 'LGLW6-D_roofing-residential-ny-mon-pittsford-town_01.js');

const pittContent = `// LGLW6-D_roofing-residential-ny-mon-pittsford-town_01.js
// Town of Pittsford roofing entry. Layers on top of the state floor.
// Source: Town of Pittsford Building Dept guidelines (Rev. 03/04/2025)
//         and eCode360 Chapter 64.

export const entry = {
  id: "roofing-residential-ny-mon-pittsford-town",
  category: "trades",
  tier: "town",
  jurisdiction: "us-ny-monroe-pittsford-town",
  status: "active",

  title: {
    en: "Roofing in the Town of Pittsford: what the town requires"
  },

  summary: {
    en: "The Town of Pittsford does not require a building permit for re-roofing, siding, or replacement windows on existing homes. State-level rules still apply. The Village of Pittsford, which sits inside the Town, has separate rules."
  },

  whatItMeans: {
    en: "As of the most recent Town of Pittsford Building Department guidance (revised March 2025), building permits for roofing, siding, and replacement windows on existing houses are not required inside the Town. All state-level rules still apply — Workers' Compensation, NYS Uniform Code, and wage laws. Any contractor working in the Town of Pittsford must provide proof of $1,000,000 liability insurance listing the Town of Pittsford (11 South Main Street, Pittsford, NY 14534) as certificate holder, plus Workers' Compensation and disability insurance or a NYS waiver of exemption. Firms performing plumbing work must hold an annual plumbing license from the Town Code Enforcement Department."
  },

  example: {
    en: "A homeowner on Monroe Avenue in the Town of Pittsford hires a roofer to replace asphalt shingles. Because the property is inside the Town boundary (not the Village), no Town building permit is required. The contractor still provides Workers' Compensation insurance and lists the Town as certificate holder on their liability policy before starting."
  },

  whoQualifies: {
    en: [
      "Property owners and contractors working inside the Town of Pittsford boundary, outside the Village of Pittsford",
      "Roofing, siding, and replacement window work on existing one- and two-family homes",
      "Properties designated as Town of Pittsford Landmarks may require Design Review and Historic Preservation Board approval for exterior work"
    ]
  },

  yourRights: {
    en: [
      "The right to have re-roofing, siding, or window replacement done without a Town building permit",
      "All state-level worker protections carried forward from New York State law",
      "The right to verify a contractor's insurance filings with the Town Code Enforcement Department before work begins"
    ]
  },

  legalOptions: {
    en: [
      "The Town of Pittsford Code Enforcement Department handles contractor insurance verification and construction complaints inside the Town boundary",
      "The Town of Pittsford maintains a plumbing license registry for firms licensed to perform plumbing work inside the Town",
      "Properties in or adjacent to historically designated or inventoried properties may require review by the Design Review and Historic Preservation Board before exterior work begins"
    ]
  },

  counsel: [
    {
      type: "free",
      name: "Town of Pittsford Code Enforcement Department",
      focus: "Building permits, contractor insurance verification, construction complaints",
      qualifier: "Open to residents, property owners, and contractors working inside the Town",
      access: "Walk-in at Town Hall, 11 South Main Street, Pittsford, NY 14534; phone",
      outcome: "Permit guidance, insurance verification, complaint intake",
      phone: "585-248-6265",
      url: "https://www.townofpittsfordny.gov/code",
      verified: true,
      bilingual: false,
      languages: ["en"]
    }
  ],

  relatedIds: ["roofing-residential-ny"],
  relatedHelpResources: [],

  tags: [
    "trades", "roofing", "pittsford", "monroe county",
    "building permit", "town ordinance", "contractor insurance"
  ],

  sources: [
    "https://ecode360.com/6434784",
    "https://www.townofpittsfordny.gov/code",
    "https://www.townofpittsfordny.gov/sites/default/files/forms/bldg_permit.pdf"
  ],

  lastAudited: "2026-04-10",
  lastVerifiedBy: "Claude + Tony",
  volatility: "moderate",
  emergencyFlag: false,
  disclaimer: true,
  categoryDisclaimer: null
};
`;

if (!fs.existsSync(pittFile)) {
  fs.writeFileSync(pittFile, pittContent, 'utf8');
  console.log('  ✓ Created ' + path.basename(pittFile));
} else {
  console.log('  ⚠ File already exists — skipping');
}

// ── VERIFY ──
console.log('\n=== Verification ===');
const llFinal = fs.readFileSync(llPath, 'utf8');
const prFinal = fs.readFileSync(prPath, 'utf8');

const llHas = llFinal.includes('trades:') && llFinal.includes('"Trades & Permits"');
const prHas = prFinal.includes('trades:') && prFinal.includes("'Trades & Permits'");
const f1 = fs.existsSync(floorFile);
const f2 = fs.existsSync(pittFile);

console.log(`  LegalLibrary.jsx CATEGORY_META has trades: ${llHas ? '✓' : '✗'}`);
console.log(`  prerender-legal.cjs CATEGORY_META has trades: ${prHas ? '✓' : '✗'}`);
console.log(`  Floor entry exists: ${f1 ? '✓' : '✗'}`);
console.log(`  Pittsford entry exists: ${f2 ? '✓' : '✗'}`);

if (llHas && prHas && f1 && f2) {
  console.log('\n  ✅ Migration 21 complete. All checks pass.');
  console.log('  Next: git add + commit + push. Build will generate prerendered HTML for both entries.');
} else {
  console.log('\n  ⚠️  Something failed — review output above.');
}
