// LGLW6-D_plumbing-residential-ny-mon-parma-town_01.js
// Town of Parma plumbing entry. Plumbing under general building permit.
// Parma and Village of Hilton are separate jurisdictions — check address.
// Source: parmany.gov + eCode360 PA0391.

export const entry = {
  id: "plumbing-residential-ny-mon-parma-town",
  category: "trades",
  tier: "town",
  jurisdiction: "us-ny-monroe-parma-town",
  authorityType: "local-ordinance",
  status: "active",

  title: {
    en: "Plumbing in the Town of Parma: what the town requires"
  },

  summary: {
    en: "Parma handles plumbing under the general building permit. There's no separate plumbing permit in Parma's town code. The Village of Hilton is inside Parma but has its own Building Department — which office handles your permit depends on which side of the village line your property sits."
  },

  whatItMeans: {
    en: "Parma's Building Department handles plumbing under the general building permit process. The town follows the state Uniform Fire Prevention and Building Code. Plumbing work that typically needs a permit includes water heater replacement, new fixtures, sewer laterals, and water service lines. The town code notes that \"listed portable\" plumbing appliances may not need a permit — check the exemption list.\n\nThe town has no separate plumber licensing chapter. Plumbers need liability insurance and workers comp. Whether Parma accepts a Rochester Examining Board plumber certificate is not published — call to confirm.\n\nA fee schedule PDF (effective January 1, 2023) is online but may have been updated — confirm current numbers before filing.\n\nIMPORTANT: The Village of Hilton is inside Parma but has its own Building Department. If your property is inside the village limits, you use the Hilton village Building Department, not Parma."
  },

  example: {
    en: "A plumber in Parma (outside Hilton village) needs to run new drain lines for a kitchen remodel. She files a building permit with Parma. Across the street in Hilton village, her colleague is doing similar work — but for that address, the permit goes to the Hilton village Building Department, not Parma."
  },

  whoQualifies: {
    en: [
      "Property owners and contractors doing plumbing work inside the Town of Parma (outside Hilton village limits)",
      "Plumbers with liability insurance and workers comp",
      "Homeowners — call the Building Department to confirm homeowner plumbing rules"
    ]
  },

  yourRights: {
    en: [
      "The right to clear guidance from the Building Department on what work needs a permit",
      "The right to the published fee schedule",
      "State worker protections (wage, safety, injury) still apply here"
    ]
  },

  legalOptions: {
    en: [
      "The Parma Building Department handles plumbing permits, inspections, and code compliance for Parma outside Hilton village",
      "Plumbing work follows the state Uniform Fire Prevention and Building Code",
      "The Parma fee schedule (currently Jan 2023 version) covers plumbing fees"
    ]
  },

  counsel: [
    {
      type: "free",
      name: "Town of Parma Building Department",
      focus: "Plumbing permits, inspections, code compliance",
      qualifier: "Open to residents and contractors working in Parma (outside Hilton village)",
      access: "Phone; email building@parmany.org; hours M-F 8am-4pm",
      outcome: "Permit issuance, inspection scheduling, code guidance",
      phone: "585-392-9449",
      url: "https://parmany.gov/departments/building/",
      verified: true,
      bilingual: false,
      languages: ["en"]
    }
  ],

  relatedIds: ["plumbing-residential-ny", "plumbing-residential-ny-mon-hilton-village"],
  relatedHelpResources: [],

  tags: [
    "trades", "plumbing", "parma", "monroe county",
    "building permit", "water heater", "village boundary",
    "town ordinance"
  ],

  sources: [
    "https://parmany.gov/departments/building/",
    "https://parmany.gov/pdf/building/Building-Permit-Fees.pdf",
    "https://ecode360.com/8009030"
  ],

  lastVerified: "2026-04-13",
  volatility: "moderate",
  emergencyFlag: false,
  disclaimer: true,
  categoryDisclaimer: null
};
