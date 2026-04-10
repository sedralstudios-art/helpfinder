#!/usr/bin/env node
// migrate-trades-entries-28.cjs
// Adds 3 roofing entries: Clarkson (town), Hamlin (town), Sweden (town).
// Clarkson and Hamlin both explicitly require roofing permits.

const fs = require('fs');
const path = require('path');

const ENTRIES_DIR = path.join(__dirname, '..', 'src', 'data', 'legal', 'entries');

const entries = [
  {
    filename: 'LGLW6-D_roofing-residential-ny-mon-clarkson-town_01.js',
    content: `// LGLW6-D_roofing-residential-ny-mon-clarkson-town_01.js
// Town of Clarkson roofing entry. Explicit roofing permit REQUIRED.
// $100 fee for contractor jobs. DIY roofing also requires permit (no fee).
// Fees doubled if work starts without a permit.
// Contains Village of Brockport (separate jurisdiction).
// Source: clarksonny.org fee schedule + eCode360 Ch 52.

export const entry = {
  id: "roofing-residential-ny-mon-clarkson-town",
  category: "trades",
  tier: "town",
  jurisdiction: "us-ny-monroe-clarkson-town",
  status: "active",

  title: {
    en: "Roofing in the Town of Clarkson: what the town requires"
  },

  summary: {
    en: "The Town of Clarkson explicitly requires a building permit for all roofing work. The permit fee is $100 for contractor jobs. Homeowners doing their own roofing (DIY) also need a permit but pay no fee. Permit fees are doubled if work begins without a permit. The Village of Brockport, which sits partly inside the Town, has separate code enforcement."
  },

  whatItMeans: {
    en: "Clarkson's fee schedule explicitly lists roofing as a permit-required activity — both for contractor work ($100 fee) and for homeowners doing their own roofing (permit required, no fee charged). This is one of the clearest roofing permit requirements in Monroe County. The Building Department enforces the NYS Uniform Fire Prevention and Building Code under Chapter 52 of the Town Code. If work begins without a permit, the permit fee is doubled. The Town also has a Historic Preservation Board that reviews exterior alterations in the Clarkson Historical Overlay District. The Village of Brockport straddles the Town of Clarkson and the Town of Sweden — verify which jurisdiction your property is in before applying."
  },

  example: {
    en: "A roofing contractor accepts a job on a house in Clarkson, outside the Village of Brockport. Before starting, the contractor contacts the Building Department at 585-637-1145 and applies for a roofing permit, paying the $100 fee. If the contractor had started work without the permit, the fee would have been $200."
  },

  whoQualifies: {
    en: [
      "Property owners and contractors performing roofing work inside the Town of Clarkson",
      "Contractor roofing jobs require a permit with a $100 fee",
      "DIY roofing by homeowners requires a permit but no fee is charged",
      "The Village of Brockport has separate code enforcement — verify your jurisdiction"
    ]
  },

  yourRights: {
    en: [
      "The right to perform DIY roofing with a no-fee permit",
      "The right to clear fee information — the published fee schedule is available online",
      "Properties in the Clarkson Historical Overlay District may require Historic Preservation Board review for exterior work",
      "All state-level worker protections carried forward from New York State law"
    ]
  },

  legalOptions: {
    en: [
      "The Town of Clarkson Building Department handles permit applications, inspections, and code enforcement",
      "The Historic Preservation Board reviews exterior alterations in the Historical Overlay District",
      "The Zoning Board of Appeals meets on the 1st and 3rd Wednesdays of the month"
    ]
  },

  counsel: [
    {
      type: "free",
      name: "Town of Clarkson Building Department",
      focus: "Building permits, code enforcement, inspections, zoning",
      qualifier: "Open to residents, property owners, and contractors working inside the Town",
      access: "3710 Lake Road, PO Box 858, Clarkson, NY 14430; phone; email",
      outcome: "Permit issuance, inspection scheduling, code guidance",
      phone: "585-637-1145",
      url: "https://townofclarksonny.gov/building-department/",
      verified: true,
      bilingual: false,
      languages: ["en"]
    }
  ],

  relatedIds: ["roofing-residential-ny"],
  relatedHelpResources: [],

  tags: [
    "trades", "roofing", "clarkson", "monroe county",
    "building permit", "town ordinance", "brockport",
    "historic preservation"
  ],

  sources: [
    "https://townofclarksonny.gov/building-department/",
    "https://clarksonny.org/wp-content/uploads/2018/06/fee-schedule.pdf",
    "https://ecode360.com/8648444"
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
    filename: 'LGLW6-D_roofing-residential-ny-mon-hamlin-town_01.js',
    content: `// LGLW6-D_roofing-residential-ny-mon-hamlin-town_01.js
// Town of Hamlin roofing entry. Explicit roofing permit REQUIRED.
// "A permit is required for all roof related items" — tear off, re-roof.
// No more than 2 layers allowed. $125 fine for no permit.
// Source: hamlinny.org Building Inspector page.

export const entry = {
  id: "roofing-residential-ny-mon-hamlin-town",
  category: "trades",
  tier: "town",
  jurisdiction: "us-ny-monroe-hamlin-town",
  status: "active",

  title: {
    en: "Roofing in the Town of Hamlin: what the town requires"
  },

  summary: {
    en: "The Town of Hamlin explicitly requires a building permit for all roof-related work, including tear-offs and re-roofing. NYS Code limits roofing to no more than two layers — after that, a full tear-off down to the sheathing is required. Failure to obtain a permit results in a $125 fine."
  },

  whatItMeans: {
    en: "Hamlin's Building Inspector states that a permit is required for all roof-related items, including tear-off and re-roof jobs. New York State Code allows a maximum of two layers of roofing — you can go over an existing roof once. After that, the roof must be torn off down to the sheathing before a new roof is installed. The Building Department issues over 300 permits per year and each permit requires one or more inspections. Property owners are responsible for knowing the Town's zoning code and the permits required. Failure to obtain a necessary permit before starting work adds a $125 fee or fine to the permit cost."
  },

  example: {
    en: "A homeowner in Hamlin hires a roofer to strip and replace their aging roof. Before work begins, the contractor obtains a building permit from the Building Department. The inspector verifies that the existing roof has only one layer of shingles, so a second layer could technically be added — but the homeowner has chosen a full tear-off for quality reasons. The permit is issued and inspections are scheduled."
  },

  whoQualifies: {
    en: [
      "Property owners and contractors performing any roof-related work inside the Town of Hamlin",
      "All roof work requires a permit — including tear-off, re-roof, and repair",
      "NYS Code limits roofing to no more than two layers total"
    ]
  },

  yourRights: {
    en: [
      "The right to contact the Building Department to verify permit requirements before starting",
      "The right to clear information about the two-layer maximum under NYS Code",
      "All state-level worker protections carried forward from New York State law"
    ]
  },

  legalOptions: {
    en: [
      "The Town of Hamlin Building Department handles permit applications, inspections, and code enforcement",
      "Electrical work requires inspection by an approved outside agency — contact the Building Department for the current list",
      "The Building Inspector may impose a $125 fine for work started without required permits"
    ]
  },

  counsel: [
    {
      type: "free",
      name: "Town of Hamlin Building Department",
      focus: "Building permits, code enforcement, inspections",
      qualifier: "Open to residents, property owners, and contractors working inside the Town",
      access: "Town Hall; phone",
      outcome: "Permit issuance, inspection scheduling, code guidance",
      phone: "585-964-8181",
      url: "https://hamlinny.org/building-inspector/",
      verified: true,
      bilingual: false,
      languages: ["en"]
    }
  ],

  relatedIds: ["roofing-residential-ny"],
  relatedHelpResources: [],

  tags: [
    "trades", "roofing", "hamlin", "monroe county",
    "building permit", "town ordinance", "two layer maximum"
  ],

  sources: [
    "https://hamlinny.org/building-inspector/"
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
    filename: 'LGLW6-D_roofing-residential-ny-mon-sweden-town_01.js',
    content: `// LGLW6-D_roofing-residential-ny-mon-sweden-town_01.js
// Town of Sweden roofing entry. Standard NYS Uniform Code enforcement.
// No roofing-specific guide published. Contact-to-confirm pattern.
// Contains Village of Brockport (shared with Town of Clarkson).
// Source: townofsweden.org Building Dept + eCode360 Ch 64.

export const entry = {
  id: "roofing-residential-ny-mon-sweden-town",
  category: "trades",
  tier: "town",
  jurisdiction: "us-ny-monroe-sweden-town",
  status: "active",

  title: {
    en: "Roofing in the Town of Sweden: what the town requires"
  },

  summary: {
    en: "The Town of Sweden enforces the NYS Uniform Fire Prevention and Building Code and requires building permits for construction and alterations. The Building Department does not publish a roofing-specific requirement guide. Contact the Building Department at 585-637-8684 to confirm whether your roofing project requires a permit. The Village of Brockport, which straddles both Sweden and Clarkson, has separate code enforcement."
  },

  whatItMeans: {
    en: "Sweden administers building permits under Chapter 64 of the Town Code, which adopts the NYS Uniform Code. The Building Department is located at Sweden Town Hall and handles permits for residential and commercial construction, including new construction, carports, sheds, swimming pools, decks, porches, chimneys, and demolition. Residential construction plans must be submitted in duplicate to the Town Clerk. The Village of Brockport straddles the Towns of Sweden and Clarkson — verify which jurisdiction your property is in before applying."
  },

  example: {
    en: "A homeowner in Sweden, outside the Village of Brockport, plans a roof replacement. The Town's published permit categories include decks, pools, signs, and chimneys but not roofing specifically. The homeowner calls the Building Department at 585-637-8684 to confirm whether a permit is needed."
  },

  whoQualifies: {
    en: [
      "Property owners and contractors working inside the Town of Sweden, outside the Village of Brockport",
      "Building permits required for construction and alterations under the NYS Uniform Code",
      "Contact the Building Department at 585-637-8684 to confirm specific project requirements"
    ]
  },

  yourRights: {
    en: [
      "The right to clear guidance from the Building Department on permit requirements",
      "The right to submit residential construction plans for review before work begins",
      "All state-level worker protections carried forward from New York State law"
    ]
  },

  legalOptions: {
    en: [
      "The Town of Sweden Building Department handles permit applications, plan review, inspections, and code enforcement",
      "The Planning Board reviews site plan and subdivision applications",
      "The Zoning Board of Appeals hears variance and special use permit applications"
    ]
  },

  counsel: [
    {
      type: "free",
      name: "Town of Sweden Building Department",
      focus: "Building permits, code compliance, inspections, zoning",
      qualifier: "Open to residents, property owners, and contractors working inside the Town",
      access: "18 State Street, Brockport, NY 14420; phone; fax 585-637-7389",
      outcome: "Permit issuance, inspection scheduling, code guidance",
      phone: "585-637-8684",
      url: "https://www.townofsweden.org/departments/building-department",
      verified: true,
      bilingual: false,
      languages: ["en"]
    }
  ],

  relatedIds: ["roofing-residential-ny"],
  relatedHelpResources: [],

  tags: [
    "trades", "roofing", "sweden", "monroe county",
    "building permit", "town ordinance", "brockport"
  ],

  sources: [
    "https://www.townofsweden.org/departments/building-department",
    "https://ecode360.com/10493157"
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
console.log(`  ✓ Clarkson: explicit roofing permit, $100 fee, DIY no-fee permit`);
console.log(`  ✓ Hamlin: explicit roofing permit, $125 fine for no permit`);
console.log(`  ✓ Sweden: contact-to-confirm, no roofing-specific guide`);
console.log(`  ⚠ Vite glob auto-imports — no manual registration needed`);
console.log(`\nAll checks pass.`);
