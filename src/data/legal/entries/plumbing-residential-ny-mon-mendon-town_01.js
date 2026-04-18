// LGLW6-D_plumbing-residential-ny-mon-mendon-town_01.js
// Town of Mendon plumbing entry. Building Dept issues zoning, building,
// electrical, plumbing, and gas permits separately under one department.
// Source: townofmendonny.gov + eCode360 Ch 241.

export const entry = {
  id: "plumbing-residential-ny-mon-mendon-town",
  category: "trades",
  tier: "town",
  jurisdiction: "us-ny-monroe-mendon-town",
  authorityType: "local-ordinance",
  status: "active",

  title: {
    en: "Plumbing in the Town of Mendon: what the town requires"
  },

  summary: {
    en: "Mendon issues zoning, building, electrical, plumbing, and gas permits — all separately — through one Building Department. Town inspectors do plumbing inspections in-house. A 2026 fee schedule is posted. Call for specific plumbing fees and homeowner rules. Village of Honeoye Falls is inside Mendon but has its own code office."
  },

  whatItMeans: {
    en: "Mendon's Building Department handles plumbing as one of five separate permit types: zoning, building, electrical, plumbing, and gas. A plumbing permit is likely a distinct line on the general application.\n\nPlumbing work that needs a permit includes water heater replacement, new fixtures, sewer and waste line changes, and water service line work.\n\nThere's no separate plumber licensing chapter in Mendon's code. Plumbers need liability insurance and workers comp. Whether Mendon honors a Rochester Examining Board plumber certificate and specific homeowner rules aren't clearly published. Call (585) 624-6066 to confirm.\n\nA 2026 fee schedule is linked from the Building Department page — call for specific plumbing line items.\n\nTown inspectors (in-house) do plumbing inspections.\n\nIMPORTANT: The Village of Honeoye Falls is inside Mendon but has its own Code Enforcement office for village-limit addresses. Use the village office for permits inside the village."
  },

  example: {
    en: "A Mendon homeowner (outside Honeoye Falls village) wants to install a whole-house water filter. They call the Building Department to check the permit requirement. They apply, pay the plumbing permit fee, and the town inspector signs off after install. A neighbor inside Honeoye Falls village would file with the village Code Enforcement office instead."
  },

  whoQualifies: {
    en: [
      "Property owners and contractors doing plumbing work inside Mendon (outside Honeoye Falls village)",
      "Plumbers with liability insurance and workers comp",
      "Homeowners — call the Building Department to confirm homeowner plumbing rules"
    ]
  },

  yourRights: {
    en: [
      "The right to clear guidance from the Building Department on which permits your project needs",
      "The right to the posted 2026 fee schedule",
      "State worker protections (wage, safety, injury) still apply here"
    ]
  },

  legalOptions: {
    en: [
      "The Mendon Building Department handles plumbing permits and inspections outside Honeoye Falls village",
      "Five separate permit types are issued: zoning, building, electrical, plumbing, gas",
      "Town inspectors (in-house) do plumbing inspections — not a third-party"
    ]
  },

  counsel: [
    {
      type: "free",
      name: "Town of Mendon Building Department",
      focus: "Plumbing permits, inspections, code compliance",
      qualifier: "Open to residents and contractors working in Mendon (outside Honeoye Falls)",
      access: "Mendon Town Hall, 16 West Main St, Room B; phone; hours M-Th 8am-4pm, F 8am-1pm",
      outcome: "Permit issuance, inspection scheduling, code guidance",
      phone: "585-624-6066",
      url: "https://townofmendonny.gov/departments/building/",
      verified: true,
      bilingual: false,
      languages: ["en"]
    }
  ],

  relatedIds: ["plumbing-residential-ny", "plumbing-residential-ny-mon-honeoye-falls-village"],
  relatedHelpResources: [],

  tags: [
    "trades", "plumbing", "mendon", "monroe county",
    "building permit", "water heater", "village boundary",
    "town ordinance", "honeoye falls"
  ],

  sources: [
    "https://townofmendonny.gov/departments/building/",
    "https://ecode360.com/29607558"
  ],

  lastVerified: "2026-04-13",
  volatility: "moderate",
  emergencyFlag: false,
  disclaimer: true,
  categoryDisclaimer: null
};
