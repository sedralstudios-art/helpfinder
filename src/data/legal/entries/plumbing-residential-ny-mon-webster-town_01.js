// LGLW6-D_plumbing-residential-ny-mon-webster-town_01.js
// Town of Webster plumbing entry. Webster town uses its own Building Dept.
// Village of Webster is separate. Insurance cert must name Town of Webster.
// Source: websterny.gov Building Dept page.

export const entry = {
  id: "plumbing-residential-ny-mon-webster-town",
  category: "trades",
  tier: "town",
  jurisdiction: "us-ny-monroe-webster-town",
  authorityType: "local-ordinance",
  status: "active",

  title: {
    en: "Plumbing in the Town of Webster: what the town requires"
  },

  summary: {
    en: "Webster's Building Department handles plumbing work outside the Village of Webster. The town uses the state Uniform Code. Contractors must list Town of Webster as certificate holder on insurance. Call to confirm fees and homeowner rules."
  },

  whatItMeans: {
    en: "The Town of Webster's Building Department handles plumbing permits for properties outside the Village of Webster. (The village has its own separate government and code enforcement.)\n\nWebster advises calling before starting any project. Most plumbing work — water heater replacement, new fixtures, sewer and water line work — needs a permit under the state Uniform Fire Prevention and Building Code. Construction over $20,000 may require stamped plans.\n\nInsurance certificates have to list Town of Webster (1000 Ridge Rd, Webster NY 14580) as the certificate holder.\n\nThere's no separate plumber license chapter. Whether Webster honors a Rochester Examining Board plumber certificate and whether homeowners can pull their own plumbing permits are not clearly published. Call (585) 872-7036 to confirm.\n\nIMPORTANT: For addresses inside Village of Webster limits, use the village Building Department, not the town."
  },

  example: {
    en: "A plumber does work in Webster town (outside the village). They fill out the town's building permit application, attach their insurance certificate with Town of Webster listed as cert holder, and pay the fee. A town inspector signs off. For their next job inside the village, they'll use the Village of Webster's separate Building Department."
  },

  whoQualifies: {
    en: [
      "Property owners and contractors doing plumbing work inside Webster (outside the Village)",
      "Plumbers with liability insurance and workers comp, with Town of Webster listed as cert holder",
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
      "The Webster Town Building Department handles plumbing permits, inspections, and code compliance",
      "Plumbing work follows the state Uniform Fire Prevention and Building Code",
      "Construction over $20,000 may require stamped architectural or engineering plans"
    ]
  },

  counsel: [
    {
      type: "free",
      name: "Town of Webster Building Department",
      focus: "Plumbing permits, inspections, code compliance",
      qualifier: "Open to residents and contractors working in Webster (outside village)",
      access: "1000 Ridge Rd; phone",
      outcome: "Permit issuance, inspection scheduling, code guidance",
      phone: "585-872-7036",
      url: "https://www.websterny.gov/162/Building-Department",
      verified: true,
      bilingual: false,
      languages: ["en"]
    }
  ],

  relatedIds: ["plumbing-residential-ny"],
  relatedHelpResources: [],

  tags: [
    "trades", "plumbing", "webster", "monroe county",
    "building permit", "water heater", "village boundary",
    "town ordinance"
  ],

  sources: [
    "https://www.websterny.gov/162/Building-Department"
  ],

  lastVerified: "2026-04-13",
  volatility: "moderate",
  emergencyFlag: false,
  disclaimer: true,
  categoryDisclaimer: null
};
