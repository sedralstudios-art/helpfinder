// LGLW6-D_roofing-residential-ny-mon-hamlin-town_01.js
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
