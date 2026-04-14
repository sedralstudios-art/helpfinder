// LGLW6-D_plumbing-residential-ny-mon-fairport-village_01.js
// Village of Fairport plumbing entry. Separate from Perinton — village has its
// own Building & Code Enforcement office for properties inside village limits.
// Source: village.fairport.ny.us + eCode360 FA0327.

export const entry = {
  id: "plumbing-residential-ny-mon-fairport-village",
  category: "trades",
  tier: "village",
  jurisdiction: "us-ny-monroe-fairport-village",
  status: "active",

  title: {
    en: "Plumbing in the Village of Fairport: what the village requires"
  },

  summary: {
    en: "Fairport village has its own Code Enforcement office — separate from Perinton. The village has a dedicated plumbing permit application. Call to confirm fees and homeowner rules before starting work."
  },

  whatItMeans: {
    en: "The Village of Fairport runs its own Building and Code Enforcement department for properties inside village limits. The village has a dedicated plumbing permit application — it's not bundled with the general building permit.\n\nAny changes to plumbing, gas, or electrical systems need a permit. That covers water heater replacement, new fixtures, sewer line work, and more.\n\nThe village has a 2025-2026 fee schedule posted online. Whether Fairport honors a Rochester Examining Board plumber certificate, whether homeowners can pull their own plumbing permits, and the specific per-fixture or flat fee aren't easy to confirm from the public page. Call (585) 421-3207 to confirm.\n\nFor properties OUTSIDE the village (in Perinton but not Fairport), you use the Town of Perinton Building Department, not the village."
  },

  example: {
    en: "A homeowner in Fairport village wants to replace a water heater. They download the village's plumbing permit application from village.fairport.ny.us, fill it out, and turn it in at the Code Enforcement office at 31 South Main Street. A village inspector signs off on the install. A neighbor across the canal in Perinton (outside the village) uses the Town of Perinton instead."
  },

  whoQualifies: {
    en: [
      "Property owners and contractors doing plumbing work inside the Village of Fairport",
      "Plumbers with liability insurance and workers comp",
      "Homeowners — call the village to confirm homeowner plumbing rules"
    ]
  },

  yourRights: {
    en: [
      "The right to use the village's dedicated plumbing permit application",
      "The right to clear guidance from Village Code Enforcement",
      "State worker protections (wage, safety, injury) still apply here"
    ]
  },

  legalOptions: {
    en: [
      "The Village Building and Code Enforcement office handles plumbing permits and inspections inside village limits",
      "Plumbing work follows the state Uniform Fire Prevention and Building Code",
      "For work outside the village (in Perinton), use the Town of Perinton Building Department instead"
    ]
  },

  counsel: [
    {
      type: "free",
      name: "Village of Fairport Building and Code Enforcement",
      focus: "Plumbing permits, inspections, code compliance",
      qualifier: "Open to residents and contractors working inside the Village",
      access: "31 South Main Street; phone; hours M-F 8am-4pm",
      outcome: "Permit issuance, inspection scheduling, code guidance",
      phone: "585-421-3207",
      url: "https://www.village.fairport.ny.us/departments/building_planning___zoning_code_enforcement/",
      verified: true,
      bilingual: false,
      languages: ["en"]
    }
  ],

  relatedIds: ["plumbing-residential-ny", "plumbing-residential-ny-mon-perinton-town"],
  relatedHelpResources: [],

  tags: [
    "trades", "plumbing", "fairport", "monroe county",
    "village ordinance", "building permit", "water heater",
    "village boundary"
  ],

  sources: [
    "https://www.village.fairport.ny.us/departments/building_planning___zoning_code_enforcement/",
    "https://www.village.fairport.ny.us/departments/building_planning___zoning_code_enforcement/permit_applications.php",
    "https://ecode360.com/FA0327"
  ],

  lastVerified: "2026-04-13",
  volatility: "moderate",
  emergencyFlag: false,
  disclaimer: true,
  categoryDisclaimer: null
};
