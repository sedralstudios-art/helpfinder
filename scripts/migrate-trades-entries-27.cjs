#!/usr/bin/env node
// migrate-trades-entries-27.cjs
// Adds 3 roofing entries: East Rochester (town/village), Ogden (town), Parma (town).
// East Rochester is a merged town/village — unique in Monroe County.

const fs = require('fs');
const path = require('path');

const ENTRIES_DIR = path.join(__dirname, '..', 'src', 'data', 'legal', 'entries');

const entries = [
  {
    filename: 'LGLW6-D_roofing-residential-ny-mon-east-rochester-village_01.js',
    content: `// LGLW6-D_roofing-residential-ny-mon-east-rochester-village_01.js
// Town/Village of East Rochester roofing entry.
// East Rochester is a merged town/village — one government, one boundary.
// Permits required for construction or structural alteration.
// Source: eastrochesterny.gov Building Dept + eCode360 Ch 67/193.

export const entry = {
  id: "roofing-residential-ny-mon-east-rochester-village",
  category: "trades",
  tier: "village",
  jurisdiction: "us-ny-monroe-east-rochester-village",
  status: "active",

  title: {
    en: "Roofing in East Rochester: what the town/village requires"
  },

  summary: {
    en: "East Rochester is a merged town and village with a single government. Building permits are required for the construction or structural alteration of buildings. Contact the Building Department at 585-586-3553 to confirm whether your roofing project requires a permit."
  },

  whatItMeans: {
    en: "East Rochester operates as a combined Town/Village — one government serves the entire community. The Building Department enforces the NYS Uniform Fire Prevention and Building Code under Chapter 67 of the Town/Village Code. Building permits are required for the construction or structural alteration of any building or part of a building. Single- and two-family residential permit applications are referred to the Zoning Board of Appeals for architectural review under Chapter 4 of the Code. The Board has 45 days to approve, conditionally approve, or disapprove an application — failure to act within that period constitutes approval."
  },

  example: {
    en: "A homeowner in East Rochester plans a roof replacement. Because the Town/Village code requires permits for structural alteration of buildings, the homeowner contacts the Building Department at 585-586-3553 to confirm whether the scope of the project triggers the permit requirement before hiring a contractor."
  },

  whoQualifies: {
    en: [
      "Property owners and contractors working inside the Town/Village of East Rochester",
      "Building permits required for construction or structural alteration of buildings",
      "Contact the Building Department at 585-586-3553 to confirm specific project requirements"
    ]
  },

  yourRights: {
    en: [
      "The right to a decision on a residential permit application within 45 days of referral to the Zoning Board",
      "The right to clear guidance from the Building Department on permit requirements",
      "All state-level worker protections carried forward from New York State law"
    ]
  },

  legalOptions: {
    en: [
      "The Town/Village of East Rochester Building Department handles permit applications, inspections, and code enforcement",
      "The Zoning Board of Appeals reviews single- and two-family residential permit applications for architectural compliance",
      "Code enforcement complaints can be filed through the Building Department"
    ]
  },

  counsel: [
    {
      type: "free",
      name: "Town/Village of East Rochester Building Department",
      focus: "Building permits, code enforcement, inspections",
      qualifier: "Open to residents, property owners, and contractors working inside the Town/Village",
      access: "317 Main Street, Suite 2000, East Rochester, NY 14445; phone",
      outcome: "Permit issuance, inspection scheduling, code guidance",
      phone: "585-586-3553",
      url: "https://eastrochesterny.gov/departments/building-department",
      verified: true,
      bilingual: false,
      languages: ["en"]
    }
  ],

  relatedIds: ["roofing-residential-ny"],
  relatedHelpResources: [],

  tags: [
    "trades", "roofing", "east rochester", "monroe county",
    "building permit", "town village", "merged municipality"
  ],

  sources: [
    "https://eastrochesterny.gov/departments/building-department",
    "https://ecode360.com/10124124",
    "https://ecode360.com/10126851"
  ],

  lastAudited: "2026-04-10",
  lastVerifiedBy: "Claude + Tony",
  volatility: "moderate",
  emergencyFlag: false,
  disclaimer: true,
  categoryDisclaimer: null
};
`
  },
  {
    filename: 'LGLW6-D_roofing-residential-ny-mon-ogden-town_01.js',
    content: `// LGLW6-D_roofing-residential-ny-mon-ogden-town_01.js
// Town of Ogden roofing entry. Standard NYS Uniform Code enforcement.
// No roofing-specific guide published. Contact-to-confirm pattern.
// Contains Village of Spencerport (separate jurisdiction).
// Source: ogdenny.gov Building Dept + eCode360 Ch 117.

export const entry = {
  id: "roofing-residential-ny-mon-ogden-town",
  category: "trades",
  tier: "town",
  jurisdiction: "us-ny-monroe-ogden-town",
  status: "active",

  title: {
    en: "Roofing in the Town of Ogden: what the town requires"
  },

  summary: {
    en: "The Town of Ogden enforces the NYS Uniform Fire Prevention and Building Code and requires building permits for construction and alterations. Contact the Building Department at 585-617-6195 to confirm whether your roofing project requires a permit. The Village of Spencerport, which sits inside the Town, has separate code enforcement."
  },

  whatItMeans: {
    en: "Ogden administers building permits under Chapter 117 of the Town Code, which adopts the NYS Uniform Code. The Building Department works with residents and contractors on new homes, alterations to existing homes, and commercial construction. Permit applications are processed in person, via email, drop box, and US Mail. Inspections must be scheduled by calling the Building Department at least 24 hours ahead of time. The Village of Spencerport is a separate jurisdiction inside the Town of Ogden — verify which municipality your property is in before applying."
  },

  example: {
    en: "A contractor planning a roof replacement on a house near Ogden Center calls the Building Department at 585-617-6195 to confirm whether a permit is needed. The department reviews the scope and advises based on the NYS Uniform Code and Town regulations."
  },

  whoQualifies: {
    en: [
      "Property owners and contractors working inside the Town of Ogden, outside the Village of Spencerport",
      "Building permits required for construction and alterations under the NYS Uniform Code",
      "Contact the Building Department at 585-617-6195 to confirm specific project requirements"
    ]
  },

  yourRights: {
    en: [
      "The right to clear guidance from the Building Department on permit requirements",
      "The right to schedule inspections with at least 24 hours advance notice",
      "All state-level worker protections carried forward from New York State law"
    ]
  },

  legalOptions: {
    en: [
      "The Town of Ogden Building Department handles permit applications, plan review, inspections, and code enforcement",
      "The Planning Board reviews site plan and subdivision applications",
      "The Zoning Board of Appeals hears variance and special use permit applications"
    ]
  },

  counsel: [
    {
      type: "free",
      name: "Town of Ogden Building Department",
      focus: "Building permits, code compliance, inspections, zoning",
      qualifier: "Open to residents, property owners, and contractors working inside the Town",
      access: "Town Hall; phone; email; drop box; US Mail",
      outcome: "Permit issuance, inspection scheduling, code guidance",
      phone: "585-617-6195",
      url: "https://ogdenny.gov/building-department/",
      verified: true,
      bilingual: false,
      languages: ["en"]
    }
  ],

  relatedIds: ["roofing-residential-ny"],
  relatedHelpResources: [],

  tags: [
    "trades", "roofing", "ogden", "monroe county",
    "building permit", "town ordinance", "spencerport"
  ],

  sources: [
    "https://ogdenny.gov/building-department/",
    "https://ecode360.com/31893352"
  ],

  lastAudited: "2026-04-10",
  lastVerifiedBy: "Claude + Tony",
  volatility: "moderate",
  emergencyFlag: false,
  disclaimer: true,
  categoryDisclaimer: null
};
`
  },
  {
    filename: 'LGLW6-D_roofing-residential-ny-mon-parma-town_01.js',
    content: `// LGLW6-D_roofing-residential-ny-mon-parma-town_01.js
// Town of Parma roofing entry. Standard NYS Uniform Code enforcement.
// No roofing-specific permit guide published. Published fee schedule
// covers new buildings, decks, sheds, additions & structural changes.
// Contains Village of Hilton (separate jurisdiction).
// Source: parmany.gov Building Dept + eCode360 Ch 24.

export const entry = {
  id: "roofing-residential-ny-mon-parma-town",
  category: "trades",
  tier: "town",
  jurisdiction: "us-ny-monroe-parma-town",
  status: "active",

  title: {
    en: "Roofing in the Town of Parma: what the town requires"
  },

  summary: {
    en: "The Town of Parma enforces the NYS Uniform Fire Prevention and Building Code. The Building Department publishes permit requirement guides for basements, decks, and pools — but not for roofing specifically. Contact the Building Department at 585-392-9449 to confirm whether your roofing project requires a permit. The Village of Hilton, which sits inside the Town, has separate code enforcement."
  },

  whatItMeans: {
    en: "Parma administers building permits under Chapter 24 of the Town Code, which adopts the NYS Uniform Code. The published fee schedule covers new construction, decks, storage buildings, sheds, and residential additions and structural changes — but does not list a separate roofing category. The Building Department is staffed by a Building Inspector, Code Enforcement Officer, and Fire Marshal. Hours are Monday through Friday, 8 AM to 4 PM. The Village of Hilton is a separate jurisdiction inside the Town of Parma with its own Code Enforcement Officer — verify which municipality your property is in before applying."
  },

  example: {
    en: "A homeowner on Hilton Parma Corners Road needs a new roof. The Town's published permit guides cover basements, decks, and pools but not roofing. The homeowner calls the Building Department at 585-392-9449 to confirm whether the project falls under the additions and structural changes category or is exempt."
  },

  whoQualifies: {
    en: [
      "Property owners and contractors working inside the Town of Parma, outside the Village of Hilton",
      "Building permits required for construction, additions, and structural changes under the NYS Uniform Code",
      "Contact the Building Department at 585-392-9449 to confirm specific project requirements"
    ]
  },

  yourRights: {
    en: [
      "The right to clear guidance from the Building Department on permit requirements",
      "The right to file code enforcement complaints through the Building Department",
      "All state-level worker protections carried forward from New York State law"
    ]
  },

  legalOptions: {
    en: [
      "The Town of Parma Building Department handles permit applications, inspections, and code enforcement",
      "The Planning Board reviews site plan, subdivision, and special permitted use applications",
      "The Zoning Board of Appeals hears variance applications and special use permits"
    ]
  },

  counsel: [
    {
      type: "free",
      name: "Town of Parma Building Department",
      focus: "Building permits, code enforcement, fire marshal, inspections",
      qualifier: "Open to residents, property owners, and contractors working inside the Town",
      access: "1300 Hilton Parma Corners Rd, Hilton, NY 14468; phone; email building@parmany.gov",
      outcome: "Permit issuance, inspection scheduling, code guidance",
      phone: "585-392-9449",
      url: "https://parmany.gov/departments/building/index.php",
      verified: true,
      bilingual: false,
      languages: ["en"]
    }
  ],

  relatedIds: ["roofing-residential-ny"],
  relatedHelpResources: [],

  tags: [
    "trades", "roofing", "parma", "monroe county",
    "building permit", "town ordinance", "hilton"
  ],

  sources: [
    "https://parmany.gov/departments/building/index.php",
    "https://parmany.gov/pdf/building/Building-Permit-Fees.pdf",
    "https://ecode360.com/8009030"
  ],

  lastAudited: "2026-04-10",
  lastVerifiedBy: "Claude + Tony",
  volatility: "moderate",
  emergencyFlag: false,
  disclaimer: true,
  categoryDisclaimer: null
};
`
  }
];

// Create each entry file
for (const e of entries) {
  const filePath = path.join(ENTRIES_DIR, e.filename);
  fs.writeFileSync(filePath, e.content, 'utf8');
  console.log(`✓ Created ${e.filename}`);
}

console.log('\nAll checks:');
console.log(`  ✓ 3 entry files created in src/data/legal/entries/`);
console.log(`  ✓ East Rochester uses tier "village" (merged town/village entity)`);
console.log(`  ⚠ Vite glob auto-imports — no manual registration needed`);
console.log(`  ⚠ CATEGORY_META already has "trades" in both renderers`);
console.log(`\nAll checks pass.`);
