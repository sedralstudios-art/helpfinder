// LGLW6-D_roofing-residential-ny-mon-greece-town_01.js
// Town of Greece roofing entry. Conditional permit — only when
// sheathing/plywood replacement is involved. Simple re-shingling exempt.
// Source: greeceny.gov Building Dept brochure + eCode360 Ch 114.

export const entry = {
  id: "roofing-residential-ny-mon-greece-town",
  category: "trades",
  tier: "town",
  jurisdiction: "us-ny-monroe-greece-town",
  status: "active",

  title: {
    en: "Roofing in the Town of Greece: what the town requires"
  },

  summary: {
    en: "The Town of Greece requires a building permit for roof work only when the job involves replacing plywood or sheathing. Simple re-shingling over existing sound sheathing does not require a permit. Plumbers must be registered with the Town."
  },

  whatItMeans: {
    en: "Greece takes a middle position on roofing permits. The Town's Building Department guidelines list 'replacing a roof that needs new plywood or sheathing' as requiring a permit, while simple re-roofing (shingle replacement over sound decking) is not listed among permit-required work. This means the permit requirement depends on the condition of the roof deck, not just whether the shingles are being replaced. Contractors should confirm the scope with the Building Department before starting if there is any uncertainty about whether sheathing will need replacement. The Town administers its own code under NYS Uniform Fire Prevention and Building Code. Plumbing work requires a permit obtained by a plumber registered with the Town of Greece."
  },

  example: {
    en: "A roofing contractor inspects a house in Greece and finds the shingles are worn but the plywood decking underneath is solid. The contractor can proceed with a tear-off and re-shingle without a Town permit. On the next job two streets over, the decking has water damage and needs partial replacement. That job requires a permit from the Building Department before work begins."
  },

  whoQualifies: {
    en: [
      "Property owners and contractors working inside the Town of Greece",
      "Roof replacement involving plywood or sheathing replacement requires a permit",
      "Simple re-shingling over sound existing decking does not require a permit"
    ]
  },

  yourRights: {
    en: [
      "The right to have simple re-shingling done without a building permit when the roof deck is sound",
      "The right to contact the Building Department for guidance when the scope is uncertain",
      "State worker protections (wage, safety, injury) still apply here"
    ]
  },

  legalOptions: {
    en: [
      "The Town of Greece Building Department handles permit applications, plan review, and inspections for construction work inside the Town",
      "Electrical inspections are performed by outside agencies licensed by the Town — the applicant chooses the agency",
      "The Building Inspector may issue stop-work orders for construction performed in violation of code or without required permits"
    ]
  },

  counsel: [
    {
      type: "free",
      name: "Town of Greece Building Department",
      focus: "Building permits, code compliance, inspections, zoning",
      qualifier: "Open to residents, property owners, and contractors working inside the Town",
      access: "Town Hall; phone; email BuildingDepartment@greeceny.gov",
      outcome: "Permit issuance, inspection scheduling, code guidance",
      phone: "585-723-2443",
      url: "https://greeceny.gov/departments/building/",
      verified: true,
      bilingual: false,
      languages: ["en"]
    }
  ],

  relatedIds: ["roofing-residential-ny"],
  relatedHelpResources: [],

  tags: [
    "trades", "roofing", "greece", "monroe county",
    "building permit", "town ordinance", "conditional permit"
  ],

  sources: [
    "https://greeceny.gov/departments/building/",
    "https://greeceny.gov/files/Guildlines_for_residential_permits_brochurexfinalx.pdf",
    "https://ecode360.com/10838059"
  ],

  lastVerified: "2026-04-13",
  volatility: "moderate",
  emergencyFlag: false,
  disclaimer: true,
  categoryDisclaimer: null
};
