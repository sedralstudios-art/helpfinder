// LGLW6-D_plumbing-residential-ny-mon-hilton-village_01.js
// Village of Hilton plumbing entry. Hilton is inside Town of Parma but has its
// own Building Department for village-limit properties.
// Source: hiltonny.org Building Dept page.

export const entry = {
  id: "plumbing-residential-ny-mon-hilton-village",
  category: "trades",
  tier: "village",
  jurisdiction: "us-ny-monroe-hilton-village",
  authorityType: "local-ordinance",
  status: "active",

  title: {
    en: "Plumbing in the Village of Hilton: what the village requires"
  },

  summary: {
    en: "Hilton village has its own Code Enforcement/Building Department for village-limit properties. The Village of Hilton is inside the Town of Parma, but the two run separate Building Departments — which office handles your permit depends on which side of the village line your property sits."
  },

  whatItMeans: {
    en: "The Village of Hilton has its own Code Enforcement Officer (Mark Mazzucco), who also serves as Fire Marshal. The village administers the state Uniform Fire Prevention and Building Code directly for properties inside village limits.\n\nPlumbing work inside the village goes through the village Building Department. Water heater replacement, new fixtures, sewer and water service lines generally need a permit.\n\nHilton doesn't have its own plumber licensing chapter. Plumbers need liability insurance and workers comp. Whether Hilton honors a Rochester Examining Board plumber certificate, the fee schedule, and homeowner rules aren't fully published. Call (585) 392-4144 ext 106 or email mark@hiltonny.org to confirm.\n\nIMPORTANT: The Town of Parma surrounds Hilton but uses its own Building Department for Parma-outside-village addresses. A plumber doing work in Hilton proper needs to pull the permit from the village — NOT from Parma."
  },

  example: {
    en: "A plumber doing work in Parma all morning then heads over to a Hilton village address in the afternoon. For the Parma house, she used the Parma Building Department. For the Hilton house, she has to file a separate permit with the Village of Hilton Building Department. Two jobs, two permits, two different offices."
  },

  whoQualifies: {
    en: [
      "Property owners and contractors doing plumbing work inside the Village of Hilton",
      "Plumbers with liability insurance and workers comp",
      "Homeowners — call the village to confirm homeowner plumbing rules"
    ]
  },

  yourRights: {
    en: [
      "The right to clear guidance from the village Code Enforcement Officer",
      "The right to know which jurisdiction (village vs Parma) your property falls in",
      "State worker protections (wage, safety, injury) still apply here"
    ]
  },

  legalOptions: {
    en: [
      "The Village of Hilton Building Department handles plumbing permits and inspections for village addresses",
      "The Code Enforcement Officer is also the Fire Marshal",
      "For properties outside the village (in Parma), use the Parma Building Department instead"
    ]
  },

  counsel: [
    {
      type: "free",
      name: "Village of Hilton Building Department",
      focus: "Plumbing permits, inspections, code compliance, fire safety",
      qualifier: "Open to residents and contractors working inside the Village",
      access: "Phone; email mark@hiltonny.org",
      outcome: "Permit issuance, inspection scheduling, code guidance",
      phone: "585-392-4144",
      url: "https://www.hiltonny.org/html/building-dept.html",
      verified: true,
      bilingual: false,
      languages: ["en"]
    }
  ],

  relatedIds: ["plumbing-residential-ny", "plumbing-residential-ny-mon-parma-town"],
  relatedHelpResources: [],

  tags: [
    "trades", "plumbing", "hilton", "monroe county",
    "village ordinance", "building permit", "water heater",
    "village boundary", "parma"
  ],

  sources: [
    "https://www.hiltonny.org/html/building-dept.html"
  ],

  lastVerified: "2026-04-13",
  volatility: "moderate",
  emergencyFlag: false,
  disclaimer: true,
  categoryDisclaimer: null
};
