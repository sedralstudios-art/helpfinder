// LGLW6-D_plumbing-residential-ny-mon-spencerport-village_01.js
// Village of Spencerport plumbing entry. CRITICAL: Spencerport delegates
// all building and plumbing permits to the Town of Ogden.
// Village CEO handles only property-maintenance issues.
// Source: spencerport.gov/code-enforcement + ogdenny.gov.

export const entry = {
  id: "plumbing-residential-ny-mon-spencerport-village",
  category: "trades",
  tier: "village",
  jurisdiction: "us-ny-monroe-spencerport-village",
  authorityType: "local-ordinance",
  status: "active",

  title: {
    en: "Plumbing in the Village of Spencerport: what the village requires"
  },

  summary: {
    en: "IMPORTANT: Plumbing permits for properties inside Spencerport are handled by the Town of Ogden Building Department — NOT by the Village. The Village Code Enforcement officer only handles property-maintenance issues (things like junk vehicles, unkempt properties, signage)."
  },

  whatItMeans: {
    en: "Spencerport is a village inside the Town of Ogden. The Village does not run its own building or plumbing permit process. Instead, it hands all of that off to the Town of Ogden Building Department.\n\nSo if you need a plumbing permit for a property inside Spencerport — water heater, fixtures, sewer line, whatever — you go to Ogden, not the village.\n\nThe Village's Code Enforcement office handles other things: property maintenance, junk vehicles, signs, refuse complaints. If you have a question about those, call the village at (585) 352-4771.\n\nFor plumbing, see the Town of Ogden Building Department at (585) 617-6195."
  },

  example: {
    en: "A homeowner in Spencerport village wants to replace their water heater. They call the village and are told plumbing permits are handled by Ogden. They go to the Town of Ogden Building Department, file a plumbing permit there, and the town inspector signs off on the work."
  },

  whoQualifies: {
    en: [
      "Property owners and contractors doing plumbing work inside the Village of Spencerport (use Ogden)",
      "Plumbers with liability insurance and workers comp",
      "Homeowners — call the Town of Ogden Building Department to confirm homeowner plumbing rules"
    ]
  },

  yourRights: {
    en: [
      "The right to know the permit actually goes to Ogden, not the village",
      "The right to clear guidance from the Ogden Building Department",
      "State worker protections (wage, safety, injury) still apply here"
    ]
  },

  legalOptions: {
    en: [
      "The Town of Ogden Building Department handles all plumbing permits for Spencerport",
      "The Village of Spencerport Code Enforcement handles property-maintenance issues only, not plumbing",
      "Unified enforcement: Ogden inspectors check plumbing work inside the village"
    ]
  },

  counsel: [
    {
      type: "free",
      name: "Town of Ogden Building Department (handles Spencerport permits)",
      focus: "Plumbing permits, inspections, code compliance for Spencerport properties",
      qualifier: "Open to residents and contractors working inside Spencerport",
      access: "Phone; hours M-F 8am-4pm",
      outcome: "Permit issuance, inspection scheduling, code guidance",
      phone: "585-617-6195",
      url: "https://ogdenny.gov/building-department/",
      verified: true,
      bilingual: false,
      languages: ["en"]
    },
    {
      type: "free",
      name: "Village of Spencerport Code Enforcement (property maintenance only)",
      focus: "Property maintenance, junk vehicles, signs, refuse complaints (NOT plumbing)",
      qualifier: "Village residents and property owners",
      access: "Village Hall, 27 West Ave; phone",
      outcome: "Non-building code enforcement",
      phone: "585-352-4771",
      url: "https://spencerport.gov/code-enforcement/",
      verified: true,
      bilingual: false,
      languages: ["en"]
    }
  ],

  relatedIds: ["plumbing-residential-ny", "plumbing-residential-ny-mon-ogden-town"],
  relatedHelpResources: [],

  tags: [
    "trades", "plumbing", "spencerport", "monroe county",
    "ogden", "building permit", "water heater",
    "village ordinance", "delegated permits"
  ],

  sources: [
    "https://spencerport.gov/code-enforcement/",
    "https://ogdenny.gov/building-department/",
    "https://ecode360.com/SP0233"
  ],

  lastVerified: "2026-04-13",
  volatility: "moderate",
  emergencyFlag: false,
  disclaimer: true,
  categoryDisclaimer: null
};
