// LGLW6-D_plumbing-residential-ny-mon-ogden-town_01.js
// Town of Ogden plumbing entry. Plumbing covered under general building permit.
// Ogden also handles permits and inspections for the Village of Spencerport.
// Source: ogdenny.gov + eCode360 OG0089.

export const entry = {
  id: "plumbing-residential-ny-mon-ogden-town",
  category: "trades",
  tier: "town",
  jurisdiction: "us-ny-monroe-ogden-town",
  status: "active",

  title: {
    en: "Plumbing in the Town of Ogden: what the town requires"
  },

  summary: {
    en: "Ogden handles plumbing under the general building permit. There's no separate plumbing permit. Ogden also does all building and plumbing permits for the Village of Spencerport. A fee schedule is published — call for specific plumbing line items."
  },

  whatItMeans: {
    en: "Ogden's Building Department handles plumbing work under its general building permit process. The town follows the state Uniform Fire Prevention and Building Code. Plumbing work that needs a permit includes water heater replacement, new fixtures, sewer laterals, and water service lines.\n\nThe town has no separate plumber licensing chapter. Plumbers need liability insurance and workers comp (or a CE-200 waiver for sole proprietors). Whether Ogden accepts a Rochester Examining Board plumber certificate is not published — call to confirm.\n\nA fee schedule PDF is online, but specific plumbing line items aren't easy to read from the public page. Call the Building Department to confirm.\n\nImportant: Ogden also handles permits for Spencerport village. If you're working in Spencerport, you go to Ogden — not the village hall — for a building or plumbing permit."
  },

  example: {
    en: "A plumber in Spencerport needs to install a water heater. Even though Spencerport has its own village government, the plumbing permit goes to the Town of Ogden Building Department. The plumber applies there, pays the town fee, and the town inspector signs off."
  },

  whoQualifies: {
    en: [
      "Property owners and contractors doing plumbing work inside the Town of Ogden",
      "Property owners and contractors doing plumbing work inside the Village of Spencerport (Ogden handles it)",
      "Plumbers with liability insurance and workers comp",
      "Homeowners — call the Building Department to confirm homeowner plumbing rules"
    ]
  },

  yourRights: {
    en: [
      "The right to clear guidance from the Building Department on what work needs a permit",
      "The right to know the current fee schedule — call the town",
      "State worker protections (wage, safety, injury) still apply here"
    ]
  },

  legalOptions: {
    en: [
      "The Ogden Building Department handles plumbing permits, inspections, and code compliance — for Ogden AND Spencerport",
      "Plumbing work follows the state Uniform Fire Prevention and Building Code",
      "Work without a permit can lead to stop-work orders and fines"
    ]
  },

  counsel: [
    {
      type: "free",
      name: "Town of Ogden Building Department",
      focus: "Plumbing permits, inspections, code compliance (Ogden + Spencerport)",
      qualifier: "Open to residents and contractors working in Ogden or Spencerport",
      access: "Phone; email; hours M-F 8am-4pm",
      outcome: "Permit issuance, inspection scheduling, code guidance",
      phone: "585-617-6195",
      url: "https://ogdenny.gov/building-department/",
      verified: true,
      bilingual: false,
      languages: ["en"]
    }
  ],

  relatedIds: ["plumbing-residential-ny", "plumbing-residential-ny-mon-spencerport-village"],
  relatedHelpResources: [],

  tags: [
    "trades", "plumbing", "ogden", "spencerport",
    "monroe county", "building permit", "water heater",
    "town ordinance"
  ],

  sources: [
    "https://ogdenny.gov/building-department/",
    "https://ecode360.com/31893352",
    "https://ecode360.com/OG0089"
  ],

  lastVerified: "2026-04-13",
  volatility: "moderate",
  emergencyFlag: false,
  disclaimer: true,
  categoryDisclaimer: null
};
