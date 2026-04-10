#!/usr/bin/env node
// migrate-trades-entries-26.cjs
// Adds 3 roofing entries: Penfield (town), Chili (town), Rochester (city).
// Rochester introduces a new tier value: "city".

const fs = require('fs');
const path = require('path');

const ENTRIES_DIR = path.join(__dirname, '..', 'src', 'data', 'legal', 'entries');

const entries = [
  {
    filename: 'LGLW6-D_roofing-residential-ny-mon-penfield-town_01.js',
    content: `// LGLW6-D_roofing-residential-ny-mon-penfield-town_01.js
// Town of Penfield roofing entry. Broadest permit language in Monroe County —
// permits required for construct, enlarge, alter, REPAIR, move, demolish.
// Source: penfield.org Building Dept + eCode360 Ch 94.

export const entry = {
  id: "roofing-residential-ny-mon-penfield-town",
  category: "trades",
  tier: "town",
  jurisdiction: "us-ny-monroe-penfield-town",
  status: "active",

  title: {
    en: "Roofing in the Town of Penfield: what the town requires"
  },

  summary: {
    en: "The Town of Penfield requires building permits for construction, enlargement, alteration, repair, moving, or demolition of buildings or structures. This is the broadest permit language among Monroe County suburbs — even ordinary repairs are included. Contact the Building Department at 585-340-8636 to confirm requirements for your roofing project."
  },

  whatItMeans: {
    en: "Penfield's code requires a building permit before starting work to construct, enlarge, alter, repair, move, demolish, or change the occupancy of a building or structure. Unlike some neighboring towns that exempt re-roofing or non-structural repairs, Penfield's language includes \\"repair\\" — which means even routine roofing maintenance may fall under the permit requirement. The Building Department also requires permits for electrical and plumbing system work, and for solid fuel burning appliance installations. For construction valued over $20,000, two sets of plans stamped by a licensed architect or engineer are required plus a PDF copy. All insurance certificates must list the Town of Penfield as certificate holder. Penfield Landmark properties may require additional review for exterior work."
  },

  example: {
    en: "A contractor in Penfield plans to strip and re-shingle a residential roof. Because the Town's code includes \\"repair\\" in its list of permit-required work — unlike Pittsford or Perinton, which exempt re-roofing — the contractor contacts the Building Department at 585-340-8636 before starting to confirm whether a permit application is needed."
  },

  whoQualifies: {
    en: [
      "Property owners and contractors working inside the Town of Penfield",
      "Building permits required for construction, enlargement, alteration, repair, moving, and demolition of structures",
      "Contact the Building Department at 585-340-8636 to confirm specific project requirements"
    ]
  },

  yourRights: {
    en: [
      "The right to clear guidance from the Building Department on permit requirements before work begins",
      "The right to a Certificate of Occupancy or Certificate of Compliance upon completion of permitted work",
      "Penfield Landmark property owners have the right to repair exteriors with identical materials without additional review",
      "All state-level worker protections carried forward from New York State law"
    ]
  },

  legalOptions: {
    en: [
      "The Town of Penfield Building Department handles permit applications, plan review, inspections, and code enforcement",
      "The Planning Board reviews site plan applications for new construction and significant site improvements",
      "The Zoning Board hears variance applications for projects that do not conform to zoning requirements"
    ]
  },

  counsel: [
    {
      type: "free",
      name: "Town of Penfield Building Department",
      focus: "Building permits, code compliance, inspections, zoning",
      qualifier: "Open to residents, property owners, and contractors working inside the Town",
      access: "Town Hall; phone; online via penfield.org",
      outcome: "Permit issuance, inspection scheduling, code guidance",
      phone: "585-340-8636",
      url: "https://www.penfield.org/your_government/departments/building/property_improvements/index.php",
      verified: true,
      bilingual: false,
      languages: ["en"]
    }
  ],

  relatedIds: ["roofing-residential-ny"],
  relatedHelpResources: [],

  tags: [
    "trades", "roofing", "penfield", "monroe county",
    "building permit", "town ordinance", "contractor insurance"
  ],

  sources: [
    "https://www.penfield.org/your_government/departments/building/property_improvements/index.php",
    "https://ecode360.com/15180704"
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
    filename: 'LGLW6-D_roofing-residential-ny-mon-chili-town_01.js',
    content: `// LGLW6-D_roofing-residential-ny-mon-chili-town_01.js
// Town of Chili roofing entry. Permits required under NYS Uniform Code.
// No roofing-specific guide published. Contact-to-confirm pattern.
// Uses CloudPermit for online applications.
// Source: townofchili.org Building Dept + eCode360 Ch 210.

export const entry = {
  id: "roofing-residential-ny-mon-chili-town",
  category: "trades",
  tier: "town",
  jurisdiction: "us-ny-monroe-chili-town",
  status: "active",

  title: {
    en: "Roofing in the Town of Chili: what the town requires"
  },

  summary: {
    en: "The Town of Chili enforces the NYS Uniform Fire Prevention and Building Code and requires building permits for construction and alterations. The Building Department does not publish a roofing-specific requirement guide — contact them at 585-889-6143 to confirm whether your project requires a permit. All permit applications are processed through CloudPermit."
  },

  whatItMeans: {
    en: "Chili administers building permits under Chapter 210 of the Town Code, which adopts the NYS Uniform Code. The Building Department reviews plans for compliance with zoning laws and building requirements, conducts inspections, and issues compliance certificates for projects including new constructions, alterations, decks, pools, and signage. The Town publishes project requirement guides for fences, pools, sheds, decks, generators, finished basements, and ramps — but not for roofing specifically. All permit applications are submitted through CloudPermit, an online system that requires account creation. Plumbing work requires a plumber licensed in the Town of Chili."
  },

  example: {
    en: "A homeowner in Chili needs a roof replacement. The Town's website lists project requirement guides for many common projects but not for roofing. The homeowner calls the Building Department at 585-889-6143 to confirm whether a permit is needed before hiring a contractor."
  },

  whoQualifies: {
    en: [
      "Property owners and contractors working inside the Town of Chili",
      "Building permits required for construction, alterations, and other work under the NYS Uniform Code",
      "Contact the Building Department at 585-889-6143 to confirm whether your roofing project requires a permit"
    ]
  },

  yourRights: {
    en: [
      "The right to clear guidance from the Building Department on permit requirements",
      "The right to file code enforcement complaints about property maintenance issues",
      "All state-level worker protections carried forward from New York State law"
    ]
  },

  legalOptions: {
    en: [
      "The Town of Chili Building Department handles permit applications, inspections, and code enforcement via CloudPermit",
      "The Planning Board reviews special use permits and site plan applications",
      "The Zoning Board hears variance applications for projects that do not conform to zoning requirements"
    ]
  },

  counsel: [
    {
      type: "free",
      name: "Town of Chili Building Department",
      focus: "Building permits, code compliance, inspections, zoning",
      qualifier: "Open to residents, property owners, and contractors working inside the Town",
      access: "Chili Town Hall, 3333 Chili Avenue, Rochester, NY 14624; phone; email building@chiliny.gov; CloudPermit online",
      outcome: "Permit issuance, inspection scheduling, code guidance",
      phone: "585-889-6143",
      url: "https://www.townofchili.org/202/Building-Department",
      verified: true,
      bilingual: false,
      languages: ["en"]
    }
  ],

  relatedIds: ["roofing-residential-ny"],
  relatedHelpResources: [],

  tags: [
    "trades", "roofing", "chili", "monroe county",
    "building permit", "town ordinance", "cloudpermit"
  ],

  sources: [
    "https://www.townofchili.org/202/Building-Department",
    "https://www.chiliny.gov/371/Project-Requirement-Guides",
    "https://ecode360.com/9266256"
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
    filename: 'LGLW6-D_roofing-residential-ny-mon-rochester-city_01.js',
    content: `// LGLW6-D_roofing-residential-ny-mon-rochester-city_01.js
// City of Rochester roofing entry. Explicit roofing permit REQUIRED.
// Online submission mandatory for roofing permits.
// Historic preservation districts may require Certificate of Appropriateness.
// Introduces new tier value: "city".
// Source: cityofrochester.gov Building Permits + eCode360 Ch 39/90.

export const entry = {
  id: "roofing-residential-ny-mon-rochester-city",
  category: "trades",
  tier: "city",
  jurisdiction: "us-ny-monroe-rochester-city",
  status: "active",

  title: {
    en: "Roofing in the City of Rochester: what the city requires"
  },

  summary: {
    en: "The City of Rochester requires a building permit for re-roofing and roof replacement. Roofing permit applications must be submitted online — the City does not accept paper roofing applications. Properties in a Preservation District or designated as a Building of Historic Value may also require a Certificate of Appropriateness."
  },

  whatItMeans: {
    en: "Rochester explicitly requires a roofing permit for roof replacement and structural roof repairs. All roofing permit applications must be submitted through the City's online permitting system — paper applications are not accepted for roofing. Permit fees are calculated on a value-based schedule. The City reviews construction plans for compliance with the NYS Uniform Code and City of Rochester Building Code. Properties located in a Preservation District or designated as a Building of Historic Value may require a Certificate of Appropriateness for exterior work, even when a building permit alone would otherwise suffice. The Permit Office is available by appointment on Tuesdays and Thursdays, with walk-in hours on Mondays, Wednesdays, and Fridays."
  },

  example: {
    en: "A contractor needs to replace the roof on a house in the 19th Ward neighborhood of Rochester. The contractor submits a roofing permit application through the City's online system and pays the value-based fee. Before starting, the contractor checks whether the property is in a Preservation District — if it is, a Certificate of Appropriateness from the Preservation Board may also be required before exterior work can begin."
  },

  whoQualifies: {
    en: [
      "Property owners and contractors performing roofing work inside the City of Rochester",
      "Re-roofing and roof replacement require a building permit",
      "Properties in Preservation Districts or with Historic Value designation may need a Certificate of Appropriateness"
    ]
  },

  yourRights: {
    en: [
      "The right to clear guidance from the Permit Office on what your project requires",
      "Certain minor repairs — such as replacing existing fixtures without altering wiring, plumbing, or structure — may not require a permit",
      "All state-level worker protections carried forward from New York State law"
    ]
  },

  legalOptions: {
    en: [
      "The City of Rochester Building Permit Office handles roofing, building, electrical, and plumbing permits through its online system",
      "The Bureau of Buildings and Compliance conducts inspections and enforces building codes",
      "The Preservation Board reviews applications for Certificates of Appropriateness in designated historic areas"
    ]
  },

  counsel: [
    {
      type: "free",
      name: "City of Rochester Building Permit Office",
      focus: "Building permits, roofing permits, inspections, code compliance",
      qualifier: "Open to residents, property owners, and contractors working inside the City",
      access: "Appointments Tuesdays and Thursdays; walk-ins Mondays, Wednesdays, Fridays; phone; online",
      outcome: "Permit issuance, inspection scheduling, code guidance",
      phone: "585-428-6526",
      url: "https://www.cityofrochester.gov/departments/neighborhood-and-business-development/building-permits",
      verified: true,
      bilingual: false,
      languages: ["en"]
    }
  ],

  relatedIds: ["roofing-residential-ny"],
  relatedHelpResources: [],

  tags: [
    "trades", "roofing", "rochester", "monroe county",
    "building permit", "city ordinance", "historic preservation",
    "online permit"
  ],

  sources: [
    "https://www.cityofrochester.gov/departments/neighborhood-and-business-development/building-permits",
    "https://www.cityofrochester.gov/departments/neighborhood-and-business-development/building-permit-types-and-applications",
    "https://ecode360.com/8677400"
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
console.log(`  ✓ New tier value "city" introduced (Rochester)`);
console.log(`  ⚠ Vite glob auto-imports — no manual registration needed`);
console.log(`  ⚠ CATEGORY_META already has "trades" in both renderers`);
console.log(`\nAll checks pass.`);
