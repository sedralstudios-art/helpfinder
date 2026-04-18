// LGLW6-D_roofing-residential-ny-mon-mendon-town_01.js
// Town of Mendon roofing entry. Standard NYS Uniform Code enforcement.
// No roofing-specific guide published. Contact-to-confirm pattern.
// Contains Village of Honeoye Falls (separate jurisdiction).
// Source: townofmendonny.gov Building Dept + eCode360 Ch 241.

export const entry = {
  id: "roofing-residential-ny-mon-mendon-town",
  category: "trades",
  tier: "town",
  jurisdiction: "us-ny-monroe-mendon-town",

  authorityType: "local-ordinance",
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
      "The Building Department (585-624-6066) is the office that confirms specific project requirements"
    ]
  },

  yourRights: {
    en: [
      "The right to clear guidance from the Building Department on permit requirements",
      "The right to know whether your property is in an Environmental Protection Overlay District",
      "State worker protections (wage, safety, injury) still apply here"
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

  relatedIds: ["roofing-residential-ny", "roofing-residential-ny-mon-honeoye-falls-village"],
  relatedHelpResources: [],

  tags: [
    "trades", "roofing", "mendon", "monroe county",
    "building permit", "town ordinance", "honeoye falls", "EPOD"
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
