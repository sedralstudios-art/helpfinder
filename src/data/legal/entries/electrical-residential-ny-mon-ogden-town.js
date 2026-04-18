// LGLW6-D_electrical-residential-ny-mon-ogden-town_01.js

export const entry = {
  id: "electrical-residential-ny-mon-ogden-town",
  category: "trades",
  tier: "town",
  jurisdiction: "us-ny-monroe-ogden-town",
  authorityType: "local-ordinance",
  status: "active",

  title: { en: "Electrical work in the Town of Ogden: what the town requires" },

  summary: {
    en: "Ogden does electrical through its Building Department. Town inspectors do NOT inspect electrical — it's done by approved third-party agencies. Ogden also handles all building and electrical permits for the Village of Spencerport."
  },

  whatItMeans: {
    en: "The Ogden Building Department handles electrical permits. Town inspectors do not do electrical inspections themselves — the town contracts that out to approved third-party agencies. The town keeps a current approved list; call (585) 617-6195 to get it.\n\nOgden doesn't license electricians. Plumbers are licensed locally, electricians are not.\n\nImportant: Ogden also handles permits for the Village of Spencerport. If you're doing electrical work inside Spencerport village limits, you file with Ogden, not with the village. (The village only handles property-maintenance issues.)\n\nHomeowner self-work rules aren't clearly published. Fee schedules are available but call to confirm current numbers. Inspections typically need 48 hours notice."
  },

  example: {
    en: "An electrician in Spencerport (inside the village) goes to the Town of Ogden Building Department for the electrical permit — NOT to the village hall. He picks an approved inspection agency from Ogden's list. The agency inspects and issues the Certificate of Compliance. Ogden closes out the permit."
  },

  whoQualifies: {
    en: [
      "Property owners and contractors doing electrical work inside Ogden (includes all of Spencerport village)",
      "Electricians with liability insurance and workers comp",
      "Homeowners — call the Building Department to confirm homeowner electrical rules"
    ]
  },

  yourRights: {
    en: [
      "The right to know the permit actually goes to Ogden, not Spencerport village",
      "The right to the current approved-agency list",
      "State worker protections (wage, safety, injury) still apply here"
    ]
  },

  legalOptions: {
    en: [
      "The Ogden Building Department handles all electrical permits for Ogden AND Spencerport village",
      "Third-party agencies inspect electrical work",
      "Inspections typically require 48 hours notice"
    ]
  },

  counsel: [{
    type: "free",
    name: "Town of Ogden Building Department",
    focus: "Electrical permits for Ogden and Spencerport, approved agency list",
    qualifier: "Open to residents and contractors in Ogden or Spencerport",
    access: "Phone; hours M-F 8am-4pm",
    outcome: "Permit issuance, agency coordination, code guidance",
    phone: "585-617-6195",
    url: "https://ogdenny.gov/building-department/permits-guidelines/",
    verified: true, bilingual: false, languages: ["en"]
  }],

  relatedIds: ["electrical-residential-ny", "electrical-residential-ny-mon-spencerport-village"],
  relatedHelpResources: [],
  tags: ["trades", "electrical", "ogden", "spencerport", "monroe county", "delegated permits", "town ordinance"],
  sources: ["https://ogdenny.gov/building-department/permits-guidelines/", "https://ogdenny.gov/building-department/"],
  lastVerified: "2026-04-14",
  volatility: "moderate", emergencyFlag: false, disclaimer: true, categoryDisclaimer: null
};
