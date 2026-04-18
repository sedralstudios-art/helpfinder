// LGLW6-D_plumbing-residential-ny-mon-perinton-town_01.js
// Town of Perinton plumbing entry. Covers area OUTSIDE Fairport village.
// Online portal at app.govwell.com/perinton. Residential fee: $0.20/sq ft, $50 min.
// Source: perinton.gov + eCode360 PE0097.

export const entry = {
  id: "plumbing-residential-ny-mon-perinton-town",
  category: "trades",
  tier: "town",
  jurisdiction: "us-ny-monroe-perinton-town",
  authorityType: "local-ordinance",
  status: "active",

  title: {
    en: "Plumbing in the Town of Perinton: what the town requires"
  },

  summary: {
    en: "Perinton's Building and Codes Department handles plumbing permits for properties outside Fairport village. Permits can be filed online through the town's GovWell portal. Fees for general building permits start at $0.20/sq ft with a $50 minimum — call for plumbing-specific fees."
  },

  whatItMeans: {
    en: "Perinton runs its own Building and Codes Department for properties outside Fairport village. (Inside the village, you use the Village of Fairport Code Enforcement office instead.)\n\nPlumbing permits go through the town. Perinton has an online portal at app.govwell.com/perinton that takes residential applications.\n\nFees are posted in the town's 2025 Fee Schedule. The general residential building permit fee is $0.20 per square foot with a $50 minimum. Plumbing-specific fee structure (per-fixture vs. flat) isn't as clear in the public schedule — call (585) 223-0770 to confirm.\n\nThe town doesn't have a separate plumber license chapter. Plumbers need liability insurance and workers comp. Whether Perinton honors a Rochester Examining Board plumber certificate is not published."
  },

  example: {
    en: "A plumber in Perinton (outside Fairport village) files a plumbing permit through the town's online GovWell portal. He pays the fee and gets scheduled for inspection. For the job across the canal inside Fairport village, he files with the village's separate Building and Code Enforcement office instead."
  },

  whoQualifies: {
    en: [
      "Property owners and contractors doing plumbing work inside Perinton (outside Fairport village)",
      "Plumbers with liability insurance and workers comp",
      "Homeowners — call the Building Department to confirm homeowner plumbing rules"
    ]
  },

  yourRights: {
    en: [
      "The right to file plumbing permits online through the GovWell portal",
      "The right to the published town fee schedule",
      "State worker protections (wage, safety, injury) still apply here"
    ]
  },

  legalOptions: {
    en: [
      "The Perinton Building and Codes Department handles plumbing permits and inspections outside Fairport village",
      "Permits can be filed online at app.govwell.com/perinton",
      "Plumbing work follows the state Uniform Fire Prevention and Building Code"
    ]
  },

  counsel: [
    {
      type: "free",
      name: "Town of Perinton Building and Codes Department",
      focus: "Plumbing permits, inspections, code compliance",
      qualifier: "Open to residents and contractors working in Perinton (outside Fairport village)",
      access: "1350 Turk Hill Road; phone; email building@perinton.org; hours M-F 9am-5pm",
      outcome: "Permit issuance, inspection scheduling, code guidance",
      phone: "585-223-0770",
      url: "https://perinton.gov/departments/public-works/building-and-codes-department/",
      verified: true,
      bilingual: false,
      languages: ["en"]
    }
  ],

  relatedIds: ["plumbing-residential-ny", "plumbing-residential-ny-mon-fairport-village"],
  relatedHelpResources: [],

  tags: [
    "trades", "plumbing", "perinton", "monroe county",
    "building permit", "water heater", "online portal",
    "town ordinance", "village boundary", "GovWell"
  ],

  sources: [
    "https://perinton.gov/departments/public-works/building-and-codes-department/",
    "https://perinton.org/fee-schedule/",
    "https://ecode360.com/PE0097"
  ],

  lastVerified: "2026-04-13",
  volatility: "moderate",
  emergencyFlag: false,
  disclaimer: true,
  categoryDisclaimer: null
};
