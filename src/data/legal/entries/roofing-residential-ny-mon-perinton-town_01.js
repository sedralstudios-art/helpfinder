// LGLW6-D_roofing-residential-ny-mon-perinton-town_01.js
// Town of Perinton roofing entry. No permit required for re-roofing.
// Source: perinton.org Building and Codes FAQ + eCode360 Ch 53.

export const entry = {
  id: "roofing-residential-ny-mon-perinton-town",
  category: "trades",
  tier: "town",
  jurisdiction: "us-ny-monroe-perinton-town",
  authorityType: "local-ordinance",
  status: "active",

  title: {
    en: "Roofing in the Town of Perinton: what the town requires"
  },

  summary: {
    en: "The Town of Perinton does not require a building permit for re-roofing, re-siding, flooring, cabinet installation, or replacement of windows and doors when the opening size is not changed. The Village of Fairport, which sits inside the Town, has separate rules."
  },

  whatItMeans: {
    en: "Re-roofing in the Town of Perinton is explicitly listed as exempt from the building permit requirement, along with re-siding, flooring, cabinet installation, and window or door replacement where the opening is not enlarged. The Building and Codes Department verifies contractor insurance when a contractor is named on any permit application. All state-level rules still apply — Workers' Compensation, NYS Uniform Code compliance, and wage protections. Larger projects involving additions, decks, or major structural renovations do require permits and may require working drawings and a site survey."
  },

  example: {
    en: "A homeowner in Perinton hires a contractor to strip and replace the roof. Because Perinton exempts re-roofing from permits, no application is needed. The homeowner confirms the contractor carries workers comp insurance (pays medical bills if a worker gets hurt on the job). After the job, if the homeowner has concerns about the workmanship, they can contact the Building and Codes Department."
  },

  whoQualifies: {
    en: [
      "Property owners and contractors working inside the Town of Perinton boundary, outside the Village of Fairport",
      "Re-roofing, re-siding, flooring, cabinet installation, and same-size window or door replacement",
      "Work that involves structural changes, additions, or enlarged openings still requires a permit"
    ]
  },

  yourRights: {
    en: [
      "The right to have re-roofing done without a Town building permit",
      "The right to verify a contractor's insurance through the Building and Codes Department",
      "State worker protections (wage, safety, injury) still apply here"
    ]
  },

  legalOptions: {
    en: [
      "The Town of Perinton Building and Codes Department handles permits, contractor insurance verification, and construction complaints",
      "The Director of Building and Codes enforces the NYS Uniform Code, Energy Code, and Town codes within the Town boundary",
      "Code compliance orders specify the violation, the applicable code provision, and a reasonable time period to achieve compliance"
    ]
  },

  counsel: [
    {
      type: "free",
      name: "Town of Perinton Building and Codes Department",
      focus: "Building permits, code enforcement, contractor insurance verification",
      qualifier: "Open to residents, property owners, and contractors working inside the Town",
      access: "Town Hall; phone; online permit application at perinton.org",
      outcome: "Permit guidance, inspection scheduling, complaint intake",
      phone: "585-223-0770",
      url: "https://perinton.org/departments/public-works/building-and-codes-department/",
      verified: true,
      bilingual: false,
      languages: ["en"]
    }
  ],

  relatedIds: ["roofing-residential-ny", "roofing-residential-ny-mon-fairport-village"],
  relatedHelpResources: [],

  tags: [
    "trades", "roofing", "perinton", "monroe county",
    "building permit", "town ordinance", "contractor insurance"
  ],

  sources: [
    "https://perinton.org/departments/public-works/building-and-codes-department/frequently-asked-questions-concerning-building-permits/",
    "https://ecode360.com/6739149"
  ],

  lastVerified: "2026-04-13",
  volatility: "moderate",
  emergencyFlag: false,
  disclaimer: true,
  categoryDisclaimer: null
};
