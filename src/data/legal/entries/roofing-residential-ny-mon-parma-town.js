// LGLW6-D_roofing-residential-ny-mon-parma-town_01.js
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

  authorityType: "local-ordinance",
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
      "The Building Department (585-392-9449) is the office that confirms specific project requirements"
    ]
  },

  yourRights: {
    en: [
      "The right to clear guidance from the Building Department on permit requirements",
      "The right to file code enforcement complaints through the Building Department",
      "State worker protections (wage, safety, injury) still apply here"
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

  relatedIds: ["roofing-residential-ny", "roofing-residential-ny-mon-hilton-village"],
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

  lastVerified: "2026-04-13",
  volatility: "moderate",
  emergencyFlag: false,
  disclaimer: true,
  categoryDisclaimer: null
};
