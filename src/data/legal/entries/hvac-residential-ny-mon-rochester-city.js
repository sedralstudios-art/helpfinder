// LGLW6-D_hvac-residential-ny-mon-rochester-city_01.js

export const entry = {
  id: "hvac-residential-ny-mon-rochester-city",
  category: "trades",
  tier: "city",
  jurisdiction: "us-ny-monroe-rochester-city",

  authorityType: "local-ordinance",
  status: "active",

  title: { en: "HVAC work in the City of Rochester: what the city requires" },

  summary: {
    en: "Rochester does NOT have a separate HVAC contractor license. But gas line work for a new furnace DOES require a Rochester-licensed plumber. Permits are filed online through the CIVICS portal. Homeowner self-work is allowed on owner-occupied single-family homes."
  },

  whatItMeans: {
    en: "Rochester licenses electricians and plumbers — but not HVAC contractors. A licensed Rochester plumber is still needed for the gas line work (the pipe from the meter to the furnace). The HVAC tech can set and connect the furnace; the plumber handles the gas piping.\n\nThe city also has a Stationary Engineer / Refrigeration Operator license (Chapter 103 of the City Code). That's for people who OPERATE large boiler and refrigeration systems in commercial buildings. It usually does not apply to regular residential furnace or AC work.\n\nHVAC permits are filed online through the city's CIVICS portal at infor.cityofrochester.gov. Like-kind replacements (same furnace type, same spot) may not need a permit — but non-like-kind installs (new unit type, oil to gas, adding central AC) do. Call the Building Permit Office at (585) 428-6526 to confirm.\n\nHomeowner self-work is allowed on owner-occupied single-family homes. This is unusual — NYC and Buffalo don't allow it.\n\nCity inspectors (not a third-party agency) do the mechanical inspection. For the gas line, a Rochester-licensed plumber is required.\n\nThe 2025 New York Energy Code applies for permits filed after December 31, 2025. Manual J heat loss calculations are commonly required for furnace sizing."
  },

  example: {
    en: "A Rochester homeowner converts from oil heat to gas. She files through the CIVICS portal. Her HVAC contractor applies for the mechanical permit for the furnace and ductwork. A Rochester-licensed plumber applies for the plumbing permit for the gas line. She hires an EPA Section 608 certified tech for the refrigerant side. A city inspector comes for final inspection on both permits. The new furnace has to meet the 2025 Energy Code."
  },

  whoQualifies: {
    en: [
      "Property owners and contractors doing HVAC work inside the City of Rochester",
      "Plumbers with a Rochester city license for any gas line work",
      "Homeowners working on their own owner-occupied single-family home"
    ]
  },

  yourRights: {
    en: [
      "The right as an owner-occupant to pull an HVAC permit on your own single-family home",
      "The right to file permits online through the CIVICS portal",
      "The right to inspection by a city inspector, not a third-party",
      "State worker protections (wage, safety, injury) still apply here"
    ]
  },

  legalOptions: {
    en: [
      "The City of Rochester Building Permit Office handles mechanical permits through the CIVICS online portal",
      "Rochester Examining Board of Plumbers issues the plumber license required for gas line work (City Hall Room 121B)",
      "The Bureau of Buildings and Compliance enforces HVAC code violations",
      "Unlicensed gas-line work is a city code violation — even if the HVAC install itself is OK"
    ]
  },

  counsel: [
    {
      type: "free",
      name: "City of Rochester Building Permit Office",
      focus: "HVAC permits, inspections, code compliance",
      qualifier: "Open to residents, property owners, and contractors inside the City",
      access: "Online through CIVICS portal; phone; walk-ins Mon/Wed/Fri",
      outcome: "Permit issuance, inspection scheduling, code guidance",
      phone: "585-428-6526",
      url: "https://www.cityofrochester.gov/departments/neighborhood-and-business-development/building-permits",
      verified: true,
      bilingual: false,
      languages: ["en"]
    },
    {
      type: "free",
      name: "City of Rochester Examining Board of Plumbers",
      focus: "Plumber licensing (required for gas line work on HVAC installs)",
      qualifier: "Plumbers operating inside the City of Rochester",
      access: "City Hall Room 121B; phone",
      outcome: "Plumber license issuance",
      phone: "585-428-9339",
      url: "https://www.cityofrochester.gov/departments/neighborhood-and-business-development/examining-board-plumbers",
      verified: true,
      bilingual: false,
      languages: ["en"]
    }
  ],

  relatedIds: ["hvac-residential-ny", "plumbing-residential-ny-mon-rochester-city", "electrical-residential-ny-mon-rochester-city"],
  relatedHelpResources: [],
  tags: ["trades", "HVAC", "furnace", "heat pump", "rochester", "monroe county", "CIVICS portal", "gas line", "city ordinance", "energy code"],
  sources: [
    "https://www.cityofrochester.gov/departments/neighborhood-and-business-development/building-permits",
    "https://www.cityofrochester.gov/sites/default/files/2024-10/HVAC%20OCTOBER%202024_0.pdf",
    "https://ecode360.com/8678490"
  ],

  lastVerified: "2026-04-14",
  volatility: "moderate",
  emergencyFlag: false,
  disclaimer: true,
  categoryDisclaimer: null
};
