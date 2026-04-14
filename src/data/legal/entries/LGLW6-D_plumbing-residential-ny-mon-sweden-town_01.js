// LGLW6-D_plumbing-residential-ny-mon-sweden-town_01.js
// Town of Sweden plumbing entry. No separate plumber licensing.
// Separate sewer connection permit (fee set by Town Board).
// Sweden covers the area OUTSIDE Brockport village; Brockport has its own dept.
// Source: townofswedenny.gov + eCode360 SW0122.

export const entry = {
  id: "plumbing-residential-ny-mon-sweden-town",
  category: "trades",
  tier: "town",
  jurisdiction: "us-ny-monroe-sweden-town",
  status: "active",

  title: {
    en: "Plumbing in the Town of Sweden: what the town requires"
  },

  summary: {
    en: "Sweden handles plumbing under the general building permit. There's no separate plumber license. The town has a separate building sewer connection permit with its own fee. Sweden's Building Department covers the area outside Brockport village — the village runs its own Building and Code Department for addresses inside village limits."
  },

  whatItMeans: {
    en: "Sweden Town Building Department handles plumbing under the general building permit process. The town follows the state Uniform Fire Prevention and Building Code. A separate permit is needed for building sewer connections — the fee is set by Town Board.\n\nSweden doesn't have its own plumber licensing chapter. Plumbers need liability insurance and workers comp. Whether Sweden accepts a Rochester Examining Board plumber certificate is not published — call to confirm.\n\nA 2026 fee schedule PDF is online. Call the Building Department at (585) 637-8684 to confirm current plumbing line items.\n\nIMPORTANT: The Village of Brockport is inside Sweden but has its own Building and Code Department. For addresses inside Brockport village limits, go to the village. For the rest of Sweden, go to the Town Building Department."
  },

  example: {
    en: "A homeowner in Sweden (outside Brockport village) wants to hook up a new sewer line to the town main. They apply for a building permit with the Town Building Department AND a separate sewer connection permit. Both fees are set by the Town Board. The town inspector comes out for both the plumbing rough-in and the sewer connection."
  },

  whoQualifies: {
    en: [
      "Property owners and contractors doing plumbing work inside Sweden (outside Brockport village)",
      "Plumbers with liability insurance and workers comp",
      "Homeowners — call the Building Department to confirm homeowner plumbing rules"
    ]
  },

  yourRights: {
    en: [
      "The right to clear guidance from the Building Department",
      "The right to know if your work needs a separate sewer connection permit",
      "State worker protections (wage, safety, injury) still apply here"
    ]
  },

  legalOptions: {
    en: [
      "The Sweden Town Building Department handles plumbing permits, inspections, and code compliance outside Brockport",
      "A separate sewer connection permit is needed for new sewer hookups",
      "Plumbing work follows the state Uniform Fire Prevention and Building Code"
    ]
  },

  counsel: [
    {
      type: "free",
      name: "Town of Sweden Building Department",
      focus: "Plumbing permits, sewer connection permits, inspections, code compliance",
      qualifier: "Open to residents and contractors working in Sweden (outside Brockport village)",
      access: "18 State Street, Brockport; phone; email PlanningZoning@townofswedenny.gov; hours M-F 8:30am-4:30pm",
      outcome: "Permit issuance, inspection scheduling, code guidance",
      phone: "585-637-8684",
      url: "https://www.townofswedenny.gov/building-department",
      verified: true,
      bilingual: false,
      languages: ["en"]
    }
  ],

  relatedIds: ["plumbing-residential-ny", "plumbing-residential-ny-mon-brockport-village"],
  relatedHelpResources: [],

  tags: [
    "trades", "plumbing", "sweden", "monroe county",
    "building permit", "sewer connection", "water heater",
    "town ordinance", "village boundary"
  ],

  sources: [
    "https://www.townofswedenny.gov/building-department",
    "https://www.townofswedenny.gov/static/sitefiles/2026_Bldg_Fees.pdf",
    "https://ecode360.com/10493157",
    "https://ecode360.com/10494646"
  ],

  lastVerified: "2026-04-13",
  volatility: "moderate",
  emergencyFlag: false,
  disclaimer: true,
  categoryDisclaimer: null
};
