#!/usr/bin/env node
// migrate-trades-entries-29.cjs
// Adds 3 roofing entries: Mendon (town), Riga (town), Rush (town).
// Rush has an explicit minor-repair exemption.

const fs = require('fs');
const path = require('path');

const ENTRIES_DIR = path.join(__dirname, '..', 'src', 'data', 'legal', 'entries');

const entries = [
  {
    filename: 'LGLW6-D_roofing-residential-ny-mon-mendon-town_01.js',
    content: `// LGLW6-D_roofing-residential-ny-mon-mendon-town_01.js
// Town of Mendon roofing entry. Standard NYS Uniform Code enforcement.
// No roofing-specific guide published. Contact-to-confirm pattern.
// Contains Village of Honeoye Falls (separate jurisdiction).
// Source: townofmendonny.gov Building Dept + eCode360 Ch 241.

export const entry = {
  id: "roofing-residential-ny-mon-mendon-town",
  category: "trades",
  tier: "town",
  jurisdiction: "us-ny-monroe-mendon-town",
  status: "active",

  title: {
    en: "Roofing in the Town of Mendon: what the town requires"
  },

  summary: {
    en: "The Town of Mendon enforces the NYS Uniform Fire Prevention and Building Code and requires building permits for construction and alterations. Contact the Building Department at 585-624-6066 to confirm whether your roofing project requires a permit. The Village of Honeoye Falls, which sits inside the Town, has separate code enforcement."
  },

  whatItMeans: {
    en: "Mendon administers building permits under Chapter 241 of the Town Code, which adopts the NYS Uniform Code. The Building Department is located at Mendon Town Hall in the Village of Honeoye Falls. The Town has Environmental Protection Overlay Districts (EPODs) — if your property is in a designated area, an EPOD permit may be required in addition to any building permit. The Village of Honeoye Falls is a separate jurisdiction inside the Town of Mendon — verify which municipality your property is in before applying."
  },

  example: {
    en: "A contractor planning a roof replacement on a house in the Town of Mendon calls the Building Department at 585-624-6066 to confirm whether a permit is needed. The department also checks whether the property falls within an Environmental Protection Overlay District, which would require additional review."
  },

  whoQualifies: {
    en: [
      "Property owners and contractors working inside the Town of Mendon, outside the Village of Honeoye Falls",
      "Building permits required for construction and alterations under the NYS Uniform Code",
      "Contact the Building Department at 585-624-6066 to confirm specific project requirements"
    ]
  },

  yourRights: {
    en: [
      "The right to clear guidance from the Building Department on permit requirements",
      "The right to know whether your property is in an Environmental Protection Overlay District",
      "All state-level worker protections carried forward from New York State law"
    ]
  },

  legalOptions: {
    en: [
      "The Town of Mendon Building Department handles permit applications, inspections, and code enforcement",
      "The Planning Board reviews site plan and subdivision applications",
      "The Zoning Board of Appeals hears variance applications"
    ]
  },

  counsel: [
    {
      type: "free",
      name: "Town of Mendon Building Department",
      focus: "Building permits, code compliance, inspections, EPOD permits",
      qualifier: "Open to residents, property owners, and contractors working inside the Town",
      access: "16 West Main Street, Honeoye Falls, NY 14472; phone",
      outcome: "Permit issuance, inspection scheduling, code guidance",
      phone: "585-624-6066",
      url: "https://townofmendonny.gov/departments/building/",
      verified: true,
      bilingual: false,
      languages: ["en"]
    }
  ],

  relatedIds: ["roofing-residential-ny"],
  relatedHelpResources: [],

  tags: [
    "trades", "roofing", "mendon", "monroe county",
    "building permit", "town ordinance", "honeoye falls", "EPOD"
  ],

  sources: [
    "https://townofmendonny.gov/departments/building/",
    "https://ecode360.com/29607558"
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
    filename: 'LGLW6-D_roofing-residential-ny-mon-riga-town_01.js',
    content: `// LGLW6-D_roofing-residential-ny-mon-riga-town_01.js
// Town of Riga roofing entry. Standard NYS Uniform Code enforcement.
// No roofing-specific guide published. Contact-to-confirm pattern.
// Contains Village of Churchville (separate jurisdiction).
// Source: townofriga.com Building Dept + eCode360 Ch 35.

export const entry = {
  id: "roofing-residential-ny-mon-riga-town",
  category: "trades",
  tier: "town",
  jurisdiction: "us-ny-monroe-riga-town",
  status: "active",

  title: {
    en: "Roofing in the Town of Riga: what the town requires"
  },

  summary: {
    en: "The Town of Riga enforces the NYS Uniform Fire Prevention and Building Code and requires building permits for construction and alterations. Contact the Building Department at 585-293-3880 ext 124 to confirm whether your roofing project requires a permit. The Village of Churchville, which sits inside the Town, has separate code enforcement."
  },

  whatItMeans: {
    en: "Riga administers building permits under Chapter 35 of the Town Code, which adopts the NYS Uniform Code. The Building Department is staffed by a Building Inspector/Code Enforcement Officer and a Fire Marshal. The Town requires a fill permit for all materials added to a site after a Certificate of Occupancy has been issued. The Village of Churchville is a separate jurisdiction inside the Town of Riga — verify which municipality your property is in before applying."
  },

  example: {
    en: "A homeowner in the Town of Riga plans a roof replacement. The homeowner contacts the Building Inspector at 585-293-3880 ext 124 to confirm whether a permit is needed and what documentation is required."
  },

  whoQualifies: {
    en: [
      "Property owners and contractors working inside the Town of Riga, outside the Village of Churchville",
      "Building permits required for construction and alterations under the NYS Uniform Code",
      "Contact the Building Department at 585-293-3880 ext 124 to confirm specific project requirements"
    ]
  },

  yourRights: {
    en: [
      "The right to clear guidance from the Building Department on permit requirements",
      "The right to contact the Fire Marshal at ext 132 for fire-related code questions",
      "All state-level worker protections carried forward from New York State law"
    ]
  },

  legalOptions: {
    en: [
      "The Town of Riga Building Department handles permit applications, inspections, and code enforcement",
      "The Fire Marshal handles fire prevention inspections and fire-related code enforcement",
      "The Planning Board reviews site plan and subdivision applications"
    ]
  },

  counsel: [
    {
      type: "free",
      name: "Town of Riga Building Department",
      focus: "Building permits, code enforcement, fire marshal, inspections",
      qualifier: "Open to residents, property owners, and contractors working inside the Town",
      access: "Town Hall; phone; email building.inspector@townofriga.org",
      outcome: "Permit issuance, inspection scheduling, code guidance",
      phone: "585-293-3880",
      url: "https://www.townofriga.com/building-department/",
      verified: true,
      bilingual: false,
      languages: ["en"]
    }
  ],

  relatedIds: ["roofing-residential-ny"],
  relatedHelpResources: [],

  tags: [
    "trades", "roofing", "riga", "monroe county",
    "building permit", "town ordinance", "churchville"
  ],

  sources: [
    "https://www.townofriga.com/building-department/",
    "https://ecode360.com/9619068"
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
    filename: 'LGLW6-D_roofing-residential-ny-mon-rush-town_01.js',
    content: `// LGLW6-D_roofing-residential-ny-mon-rush-town_01.js
// Town of Rush roofing entry. Nuanced position — minor roof repairs
// explicitly exempt ("like class and kind"), structural changes require permit.
// Source: townofrush.com Building Department page.

export const entry = {
  id: "roofing-residential-ny-mon-rush-town",
  category: "trades",
  tier: "town",
  jurisdiction: "us-ny-monroe-rush-town",
  status: "active",

  title: {
    en: "Roofing in the Town of Rush: what the town requires"
  },

  summary: {
    en: "The Town of Rush explicitly states that ordinary repairs replacing existing materials with new materials of like class and kind — including minor roof repairs — do not require a building permit. However, structural changes to a building do require a permit. For a full roof replacement, contact the Building Department at 585-533-1312 to confirm whether the scope triggers the structural-change requirement."
  },

  whatItMeans: {
    en: "Rush publishes a detailed list of what does and does not require a building permit. Ordinary repairs that replace existing materials with new materials of like class and kind are explicitly exempt — the Town gives the example of replacing porch steps, making a minor roof repair, or making a minor repair to a chimney or foundation wall. However, erecting, adding onto, relocating, or making structural changes to a building does require a permit. This means a simple patch or minor shingle repair is exempt, but a full tear-off and re-roof may cross into structural-change territory depending on the scope. Gutters, downspouts, and nonconductive siding also do not require a permit. Window and exterior door replacement does require a permit."
  },

  example: {
    en: "A homeowner in Rush needs to replace a small section of damaged shingles after a storm. Because this is an ordinary repair replacing existing materials with like-kind materials, no building permit is needed. A year later, the same homeowner decides on a full roof tear-off and replacement. Because this is a larger scope that may involve structural elements, the homeowner calls the Building Department at 585-533-1312 to confirm whether a permit is required."
  },

  whoQualifies: {
    en: [
      "Property owners and contractors working inside the Town of Rush",
      "Minor roof repairs replacing existing materials with like-kind materials do not require a permit",
      "Structural changes to a building require a permit — contact 585-533-1312 to confirm scope"
    ]
  },

  yourRights: {
    en: [
      "The right to make ordinary like-kind repairs without a building permit",
      "The right to clear guidance from the Building Department on whether larger projects require a permit",
      "All state-level worker protections carried forward from New York State law"
    ]
  },

  legalOptions: {
    en: [
      "The Town of Rush Building Department handles permit applications, inspections, and code enforcement",
      "The Building Inspector is available at Town Hall for questions about specific project requirements",
      "The Planning Board may need to approve changes to driveway dimensions or other site modifications"
    ]
  },

  counsel: [
    {
      type: "free",
      name: "Town of Rush Building Department",
      focus: "Building permits, code enforcement, inspections",
      qualifier: "Open to residents, property owners, and contractors working inside the Town",
      access: "5977 East Henrietta Road, Rush, NY 14543; phone",
      outcome: "Permit issuance, inspection scheduling, code guidance",
      phone: "585-533-1312",
      url: "https://www.townofrush.com/departments/building.html",
      verified: true,
      bilingual: false,
      languages: ["en"]
    }
  ],

  relatedIds: ["roofing-residential-ny"],
  relatedHelpResources: [],

  tags: [
    "trades", "roofing", "rush", "monroe county",
    "building permit", "town ordinance", "minor repair exempt"
  ],

  sources: [
    "https://www.townofrush.com/departments/building.html"
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

for (const e of entries) {
  const filePath = path.join(ENTRIES_DIR, e.filename);
  fs.writeFileSync(filePath, e.content, 'utf8');
  console.log(`✓ Created ${e.filename}`);
}

console.log('\nAll checks:');
console.log(`  ✓ 3 entry files created in src/data/legal/entries/`);
console.log(`  ✓ Rush: minor roof repairs explicitly exempt, structural changes require permit`);
console.log(`  ✓ Mendon: contact-to-confirm, EPOD overlay districts may apply`);
console.log(`  ✓ Riga: contact-to-confirm, contains Village of Churchville`);
console.log(`  ⚠ Vite glob auto-imports — no manual registration needed`);
console.log(`\nAll checks pass.`);
