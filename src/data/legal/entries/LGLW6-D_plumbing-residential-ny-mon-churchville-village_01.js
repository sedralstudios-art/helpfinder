// LGLW6-D_plumbing-residential-ny-mon-churchville-village_01.js
// Village of Churchville plumbing entry. Small village — single general building
// permit covers plumbing. No separate plumber licensing chapter.
// Source: churchville.net + eCode360 Ch CH0874.

export const entry = {
  id: "plumbing-residential-ny-mon-churchville-village",
  category: "trades",
  tier: "village",
  jurisdiction: "us-ny-monroe-churchville-village",
  status: "active",

  title: {
    en: "Plumbing in the Village of Churchville: what the village requires"
  },

  summary: {
    en: "Churchville uses a single building permit application that also covers plumbing work. The village doesn't have its own plumber licensing — plumbing has to meet the state building code, and the work gets checked by the village inspector. Call the village office to confirm current fees and homeowner rules."
  },

  whatItMeans: {
    en: "Churchville is a small village. There's no separate plumber license chapter in the village code. Instead, all building work (including plumbing) goes through one combined permit application. The application asks for proof of liability insurance and workers comp (or a \"Self/No employees\" box for a homeowner or sole proprietor).\n\nPlumbing work follows the state Uniform Code. That covers things like water heater replacement, new fixtures, and sewer/water line work. The village building inspector/code enforcement officer inspects the work and enforces the code.\n\nExact fees and whether homeowners can pull their own plumbing permits are not published online. Call the Building Inspector at (585) 293-3720 ext. 134 to confirm."
  },

  example: {
    en: "A Churchville homeowner needs to replace their water heater. They call the Building Inspector to check whether the village allows homeowner self-work on their own home. They fill out the combined village building permit application, mark \"Self/No employees,\" pay the fee, and do the work. The village inspector signs off after the install."
  },

  whoQualifies: {
    en: [
      "Property owners and contractors doing plumbing work inside the Village of Churchville",
      "Plumbers with liability insurance and workers comp coverage",
      "Homeowners — call the village to confirm homeowner plumbing rules"
    ]
  },

  yourRights: {
    en: [
      "The right to clear guidance from the Building Inspector on what work needs a permit",
      "The right to know the current fee schedule — call the village office",
      "State worker protections (wage, safety, injury) still apply here"
    ]
  },

  legalOptions: {
    en: [
      "The Village Building Inspector / Code Enforcement Officer issues permits and inspects plumbing work",
      "Plumbing work follows the state building code (NYS Uniform Fire Prevention and Building Code)",
      "The village office also handles water/sewer connections and general construction questions"
    ]
  },

  counsel: [
    {
      type: "free",
      name: "Village of Churchville Building Inspector",
      focus: "Building permits (covering plumbing), inspections, code compliance",
      qualifier: "Open to residents, property owners, and contractors working inside the Village",
      access: "23 E Buffalo St; phone; hours M-F 7am-3:30pm",
      outcome: "Permit issuance, inspection scheduling, code guidance",
      phone: "585-293-3720",
      url: "https://churchville.net/applications/",
      verified: true,
      bilingual: false,
      languages: ["en"]
    }
  ],

  relatedIds: ["plumbing-residential-ny"],
  relatedHelpResources: [],

  tags: [
    "trades", "plumbing", "churchville", "monroe county",
    "building permit", "village ordinance", "water heater",
    "combined permit"
  ],

  sources: [
    "https://churchville.net/applications/",
    "https://ecode360.com/CH0874"
  ],

  lastVerified: "2026-04-13",
  volatility: "moderate",
  emergencyFlag: false,
  disclaimer: true,
  categoryDisclaimer: null
};
