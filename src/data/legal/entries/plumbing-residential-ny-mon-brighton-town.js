// LGLW6-D_plumbing-residential-ny-mon-brighton-town_01.js
// Town of Brighton plumbing entry. Local license required; Rochester cert honored.
// Homeowner self-work allowed in own single-family home. Fixture-based fee.
// Source: brightonny.gov + eCode360 Ch 215 (Plumbers, Licensing of).

export const entry = {
  id: "plumbing-residential-ny-mon-brighton-town",
  category: "trades",
  tier: "town",
  jurisdiction: "us-ny-monroe-brighton-town",
  authorityType: "local-ordinance",
  status: "active",

  title: {
    en: "Plumbing in the Town of Brighton: what the town requires"
  },

  summary: {
    en: "Brighton requires a plumber to register with the town before pulling a plumbing permit. If you already have a City of Rochester plumber certificate, Brighton will honor it. Homeowners can do their own plumbing in their own single-family home, but they still need a permit. Fees are $5.50 per fixture."
  },

  whatItMeans: {
    en: "A plumbing permit is required for any new plumbing or changes to existing plumbing in Brighton. That includes kitchen and bath remodels with new fixtures, water heater installs, moving fixtures, and layout changes. Either a Brighton-registered plumber OR the owner of a single-family home (doing their own work) can pull the permit. Registered plumbers have to file an insurance certificate with the town. Homeowners doing work on their own home do NOT need to file insurance, but the work still has to meet the state building code. Brighton also automatically honors a Rochester Examining Board of Plumbers certificate — if you hold that, you can get a Brighton license."
  },

  example: {
    en: "A homeowner in Brighton wants to replace their water heater. They go to the Town Building and Planning Department, fill out a plumbing permit application, and pay $5.50 per fixture plus a $45 Certificate of Occupancy fee. Because it's their own home, they don't need to hire a licensed plumber — but the work still has to pass inspection by the town inspector."
  },

  whoQualifies: {
    en: [
      "Property owners and contractors doing plumbing work inside the Town of Brighton",
      "Plumbers registered with Brighton, or who hold a Rochester Examining Board certificate",
      "Homeowners working on their own single-family home"
    ]
  },

  yourRights: {
    en: [
      "The right to pull a plumbing permit as a homeowner on your own single-family home, without hiring a licensed plumber",
      "The right to a permit decision within a reasonable time after filing a complete application",
      "State worker protections (wage, safety, injury) still apply here"
    ]
  },

  legalOptions: {
    en: [
      "The Brighton Building and Planning Department handles plumbing permits, inspections, and code complaints",
      "Rochester Examining Board of Plumbers certificates are accepted for a Brighton license",
      "Unregistered plumbers can be denied permits and may face enforcement action"
    ]
  },

  counsel: [
    {
      type: "free",
      name: "Town of Brighton Building and Planning Department",
      focus: "Plumbing permits, registrations, inspections, code compliance",
      qualifier: "Open to residents, property owners, and plumbers working inside the Town",
      access: "Temporarily at 680 Westfall Road during Town Hall renovation; phone",
      outcome: "Permit issuance, inspection scheduling, code guidance",
      phone: "585-784-5250",
      url: "https://www.brightonny.gov/595/Building-and-Planning",
      verified: true,
      bilingual: false,
      languages: ["en"]
    }
  ],

  relatedIds: ["plumbing-residential-ny"],
  relatedHelpResources: [],

  tags: [
    "trades", "plumbing", "brighton", "monroe county",
    "plumber registration", "water heater", "homeowner plumbing",
    "permit fee", "town ordinance"
  ],

  sources: [
    "https://www.brightonny.gov/595/Building-and-Planning",
    "https://www.brightonny.gov/584/Requirements-Fees-for-Residential-Projec",
    "https://ecode360.com/9444783"
  ],

  lastVerified: "2026-04-13",
  volatility: "moderate",
  emergencyFlag: false,
  disclaimer: true,
  categoryDisclaimer: null
};
