// LGLW6-D_hvac-residential-ny-mon-ogden-town_01.js

export const entry = {
  id: "hvac-residential-ny-mon-ogden-town",
  category: "trades",
  tier: "town",
  jurisdiction: "us-ny-monroe-ogden-town",
  authorityType: "local-ordinance",
  status: "active",

  title: { en: "HVAC work in the Town of Ogden: what the town requires" },

  summary: {
    en: "Town of Ogden does not license HVAC contractors. Gas line work for a new furnace still needs a licensed plumber — the gas pipe is plumbing work. Town staff do HVAC inspections directly (no third-party agencies). The state Energy Code (2025) applies to all permits filed after December 31, 2025."
  },

  whatItMeans: {
    en: "Town of Ogden follows the state Uniform Fire Prevention and Building Code for HVAC work. That includes the Mechanical Code and the Fuel Gas Code. The 2025 Energy Code applies to any permit filed after December 31, 2025 — replacement furnaces, heat pumps, and AC units all have to meet the stricter efficiency rules.\n\nThe town does NOT license HVAC contractors. But gas line work is plumbing. Gas line work needs a qualified plumber.\n\nHVAC permits go through the Building Department. There's no separate third-party agency for HVAC inspection — the town's own inspectors handle it. That's different from electrical, which does use outside agencies.\n\nAnyone handling refrigerant must have federal EPA Section 608 certification.\n\nHomeowner rules: Call the Building Department at (585) 617-6195 to confirm homeowner HVAC rules.\n\nOgden also handles all HVAC permits for properties inside the Village of Spencerport — Spencerport delegates all building/mechanical permits to Ogden."
  },

  example: {
    en: "A homeowner in Town of Ogden replaces an old furnace with a new high-efficiency gas furnace. The HVAC contractor files the mechanical permit with the Building Department. A licensed plumber files a separate plumbing permit for the gas line work. The town's own inspector checks the final install. Because the permit was filed after December 31, 2025, the new unit has to meet the 2025 Energy Code."
  },

  whoQualifies: {
    en: [
      "Property owners and contractors doing HVAC work inside Town of Ogden",
      "Plumbers for gas line work (licensing per local rules)",
      "Homeowners doing work on their own home (call the Building Department to confirm)"
    ]
  },

  yourRights: {
    en: [
      "The right to clear guidance from the Building Department on what HVAC work needs a permit",
      "The right to know the current permit fee",
      "The right to inspection by town staff (not a third-party agency)",
      "State worker protections (wage, safety, injury) still apply here"
    ]
  },

  legalOptions: {
    en: [
      "Town of Ogden Building Department handles HVAC permits and inspections",
      "Gas line work needs a licensed plumber (local rules vary)",
      "Anyone handling refrigerant needs federal EPA Section 608 certification"
    ]
  },

  counsel: [{
    type: "free",
    name: "Town of Ogden Building Department",
    focus: "HVAC permits, inspections, code compliance",
    qualifier: "Open to residents and contractors working in Town of Ogden",
    access: "Phone",
    outcome: "Permit issuance, inspection scheduling, code guidance",
    phone: "585-617-6195",
    url: "https://ogdenny.gov/building-department/",
    verified: true,
    bilingual: false,
    languages: ["en"]
  }],

  relatedIds: ["hvac-residential-ny", "plumbing-residential-ny-mon-ogden-town", "electrical-residential-ny-mon-ogden-town"],
  relatedHelpResources: [],
  tags: ["trades", "HVAC", "furnace", "heat pump", "ogden", "monroe county", "town ordinance", "energy code", "gas line"],
  sources: ["https://ogdenny.gov/building-department/"],
  lastVerified: "2026-04-14",
  volatility: "moderate",
  emergencyFlag: false,
  disclaimer: true,
  categoryDisclaimer: null
};
