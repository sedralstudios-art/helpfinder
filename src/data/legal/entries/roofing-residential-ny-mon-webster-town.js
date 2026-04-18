// LGLW6-D_roofing-residential-ny-mon-webster-town_01.js
// Town of Webster roofing entry. Broad permit language.
// Note: Village of Webster is a separate jurisdiction with its own code.
// Source: websterny.gov Building Dept + eCode360 Ch 119.

export const entry = {
  id: "roofing-residential-ny-mon-webster-town",
  category: "trades",
  tier: "town",
  jurisdiction: "us-ny-monroe-webster-town",

  authorityType: "local-ordinance",
  status: "active",

  title: {
    en: "Roofing in the Town of Webster: what the town requires"
  },

  summary: {
    en: "The Town of Webster requires building permits for construction work that must conform to the NYS Uniform Building Code. Permits are required for accessory structures, sheds, pools, decks, generators, finished basements, and demolition. If you are unsure whether your roofing project requires a permit, the Building Department advises contacting them before starting. The Village of Webster has separate code enforcement."
  },

  whatItMeans: {
    en: "Webster's Building Department administers the NYS Uniform Code for building construction and local zoning compliance. Permit applications must be accompanied by appropriate documentation and may require duplicate copies of plans and specifications. All insurance certificates must list the Town of Webster (1000 Ridge Rd, Webster, NY 14580) as certificate holder. For construction over $20,000, two sets of plans stamped by a licensed architect or engineer are required plus a PDF copy. The Town explicitly advises contacting the Building Department at 585-872-7036 to confirm whether a permit is needed before starting any project."
  },

  example: {
    en: "A contractor planning a residential roof replacement in Webster calls the Building Department to confirm permit requirements. The department reviews the scope and advises whether the project falls under permit-required work based on the NYS Uniform Code and Town regulations."
  },

  whoQualifies: {
    en: [
      "Property owners and contractors working inside the Town of Webster boundary",
      "The Village of Webster is a separate jurisdiction — verify which you are in before starting",
      "The Building Department (585-872-7036) is the office that confirms permit needs before starting"
    ]
  },

  yourRights: {
    en: [
      "The right to clear guidance from the Building Department on permit requirements before work begins",
      "State worker protections (wage, safety, injury) still apply here"
    ]
  },

  legalOptions: {
    en: [
      "The Town of Webster Building Department handles permit applications, plan review, inspections, and code enforcement",
      "The Building Inspector may revoke a permit if work does not conform to approved plans or applicable code"
    ]
  },

  counsel: [
    {
      type: "free",
      name: "Town of Webster Building Department",
      focus: "Building permits, code compliance, inspections, zoning",
      qualifier: "Open to residents, property owners, and contractors working inside the Town",
      access: "1000 Ridge Rd, Webster, NY 14580; phone",
      outcome: "Permit issuance, inspection scheduling, code guidance",
      phone: "585-872-7036",
      url: "https://www.websterny.gov/162/Building-Department",
      verified: true,
      bilingual: false,
      languages: ["en"]
    }
  ],

  relatedIds: ["roofing-residential-ny"],
  relatedHelpResources: [],

  tags: [
    "trades", "roofing", "webster", "monroe county",
    "building permit", "town ordinance", "contractor insurance"
  ],

  sources: [
    "https://www.websterny.gov/162/Building-Department",
    "https://ecode360.com/38732484"
  ],

  lastVerified: "2026-04-13",
  volatility: "moderate",
  emergencyFlag: false,
  disclaimer: true,
  categoryDisclaimer: null
};
