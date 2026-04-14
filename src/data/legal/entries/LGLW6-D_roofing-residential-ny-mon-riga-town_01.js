// LGLW6-D_roofing-residential-ny-mon-riga-town_01.js
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
      "State worker protections (wage, safety, injury) still apply here"
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

  relatedIds: ["roofing-residential-ny", "roofing-residential-ny-mon-churchville-village"],
  relatedHelpResources: [],

  tags: [
    "trades", "roofing", "riga", "monroe county",
    "building permit", "town ordinance", "churchville"
  ],

  sources: [
    "https://www.townofriga.com/building-department/",
    "https://ecode360.com/9619068"
  ],

  lastVerified: "2026-04-13",
  volatility: "moderate",
  emergencyFlag: false,
  disclaimer: true,
  categoryDisclaimer: null
};
