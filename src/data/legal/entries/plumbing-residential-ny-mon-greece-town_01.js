// LGLW6-D_plumbing-residential-ny-mon-greece-town_01.js
// Town of Greece plumbing entry. Plumber registration required.
// Combined residential building/plumbing permit application.
// Source: greeceny.gov Building Dept forms.

export const entry = {
  id: "plumbing-residential-ny-mon-greece-town",
  category: "trades",
  tier: "town",
  jurisdiction: "us-ny-monroe-greece-town",
  authorityType: "local-ordinance",
  status: "active",

  title: {
    en: "Plumbing in the Town of Greece: what the town requires"
  },

  summary: {
    en: "Greece requires plumbers to register with the Town Building Department before pulling permits. Plumbing work uses the same residential permit form as general building work. The town's own inspectors do plumbing inspections (unlike electrical, which Greece contracts to outside agencies)."
  },

  whatItMeans: {
    en: "Plumbers have to register with Greece using the town's Plumbers Registration form before they can pull plumbing permits. Registration runs on a 2-year cycle.\n\nFor residential work, Greece uses a single combined application for building AND plumbing permits. This is a paper form you turn in at the Building Department. It's different from Rochester (which uses a separate online portal for plumbing).\n\nA plumbing permit is generally needed for new fixtures, changes to plumbing layout, water heater replacement, sewer line work, and water service line work. Some small projects don't need a permit — the town publishes a list of exemptions (like kiddie pools under 24 inches, artificial lawn ponds, and ventless gas appliances).\n\nPlumbing inspections are done by town inspectors. The town inspection line is (585) 723-1923."
  },

  example: {
    en: "A homeowner in Greece wants to add a half-bath to their basement. They fill out the town's combined residential building/plumbing permit application and turn it in at the Building Department. The town reviews the plans. A registered plumber does the work (or the homeowner does it themselves — call the town to confirm the current homeowner rules). A town inspector checks the rough-in before the walls close, then comes back to check the finished work."
  },

  whoQualifies: {
    en: [
      "Property owners and contractors doing plumbing work inside the Town of Greece",
      "Plumbers registered with the Town of Greece Building Department",
      "Homeowners may be able to work on their own home — call the town to confirm current rules"
    ]
  },

  yourRights: {
    en: [
      "The right to see the list of projects that don't need a permit",
      "The right to clear guidance from the Building Department before starting work",
      "State worker protections (wage, safety, injury) still apply here"
    ]
  },

  legalOptions: {
    en: [
      "The Greece Building Department handles plumber registration, permits, and inspections",
      "Plumbing permits are filed using the combined residential building/plumbing application",
      "The Building Inspector can issue stop-work orders (a formal order to halt a job) for work done without required permits or out of code"
    ]
  },

  counsel: [
    {
      type: "free",
      name: "Town of Greece Building Department",
      focus: "Plumber registration, plumbing permits, inspections, code compliance",
      qualifier: "Open to residents, property owners, and plumbers working inside the Town",
      access: "Town Hall; phone; email BuildingDepartment@greeceny.gov",
      outcome: "Registration, permit issuance, inspection scheduling, code guidance",
      phone: "585-723-2443",
      url: "https://greeceny.gov/departments/building/",
      verified: true,
      bilingual: false,
      languages: ["en"]
    }
  ],

  relatedIds: ["plumbing-residential-ny"],
  relatedHelpResources: [],

  tags: [
    "trades", "plumbing", "greece", "monroe county",
    "plumber registration", "building permit", "water heater",
    "town ordinance", "combined application"
  ],

  sources: [
    "https://greeceny.gov/departments/building/",
    "https://greeceny.gov/wp-content/uploads/Plumber-Regist-Form-Instructions-2026-2027.pdf",
    "https://greeceny.gov/wp-content/uploads/APPLICATION_FOR_RESIDENTIAL_BUILDING_PLUMBING_PERMIT.pdf"
  ],

  lastVerified: "2026-04-13",
  volatility: "moderate",
  emergencyFlag: false,
  disclaimer: true,
  categoryDisclaimer: null
};
