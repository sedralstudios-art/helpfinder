export const HVAC_RESIDENTIAL_NY_MON_PENFIELD_TOWN = {
  id: "hvac-residential-ny-mon-penfield-town",
  category: "trades",
  tier: "town",
  jurisdiction: "us-ny-monroe-penfield-town",
  authorityType: "local-ordinance",
  status: "active",

  title: { en: "Residential HVAC Work in the Town of Penfield — No Town HVAC License, Homeowner Self-Work Explicit" },

  summary: {
    en: "The Town of Penfield follows the New York Uniform Fire Prevention and Building Code for HVAC work, including the Mechanical Code and the Fuel Gas Code. The town does not license HVAC contractors directly. Gas line work attached to a new furnace still needs a qualified plumber (gas piping is plumbing work). Town staff inspect the HVAC work in-house rather than delegating to third-party agencies. Penfield explicitly allows homeowners to do their own HVAC with a permit and passed inspection. The 2025 NY Energy Code applies to permits filed after December 31, 2025. The Building Department at (585) 340-8636 confirms scope and fees."
  },

  whatItMeans: {
    en: "Penfield's approach to HVAC is consistent with its approach to electrical: the rules are clearly published, homeowners are explicitly allowed to do their own work, and inspection is done in-house rather than through a paid third-party agency. The Building and Zoning Department handles both filing and inspection.\n\nNo town HVAC license. The town does not license HVAC contractors. New York does not have a statewide HVAC license — the statewide trade is self-regulated through insurance, EPA certifications, and the Home Improvement Contractor requirements.\n\nGas line work is plumbing. Any gas line installation or alteration attached to a new HVAC unit (furnace, boiler, water heater) is plumbing work. It requires a qualified plumber and a separate plumbing permit. The HVAC contractor pulls the mechanical permit; a plumber pulls a separate permit for the gas line from the meter to the appliance.\n\nIn-house inspection. Unlike electrical (which uses third-party inspection agencies), the town does HVAC inspections in-house. Building Department staff inspect the mechanical installation.\n\nHomeowner self-work — explicitly allowed. Penfield's public information explicitly states that property owners can do their own HVAC work. The homeowner pulls the permit, does the work, and schedules the inspection. The same 'Property owners are responsible for installs/alterations/repairs and must obtain permits and pass inspection' language that applies to electrical also covers HVAC.\n\n2025 Energy Code. New York adopted the 2020 Energy Conservation Construction Code (ECCCNYS) with the stretch code update effective after December 31, 2025. Permits filed after that date have to meet the newer efficiency standards. For HVAC work, that means minimum AFUE ratings for furnaces (typically 95 percent for gas), minimum SEER2 for air conditioners, and tighter duct sealing requirements.\n\nEPA Section 608 certification. Anyone handling refrigerant — including during AC or heat pump installation, repair, or removal — must have federal EPA Section 608 certification under 40 CFR Part 82. This is a federal requirement. A homeowner cannot legally recover refrigerant when replacing an old unit.\n\nContact. The Building and Zoning Department is at 3100 Atlantic Avenue. Phone (585) 340-8636. Email building@penfield.org.\n\nState protections. Wage theft protections (Labor Law 191 and 193), the Scaffold Law for elevated work (Labor Law 240 and 241(6)), mechanic's liens (Lien Law 3 and 10), and General Business Law 349 for deceptive home-improvement practices apply in Penfield as statewide. The statewide hvac-residential-ny entry covers those layers."
  },

  example: {
    en: "A homeowner in Penfield replaces an old natural-gas furnace with a new high-efficiency condensing furnace. Because Penfield explicitly allows homeowner HVAC work, he files the mechanical permit personally as the property owner. He hires a licensed plumber for the gas line, who pulls a separate plumbing permit. Town staff inspect both installations. Because the permit is filed after December 31, 2025, the new furnace has to meet the 2025 Energy Code's 95 percent AFUE minimum for gas furnaces."
  },

  whoQualifies: {
    en: [
      "A property owner or HVAC contractor doing residential HVAC work in the Town of Penfield.",
      "A homeowner who wants to do HVAC work personally on an owner-occupied home — Penfield explicitly allows this.",
      "A plumber doing gas line work attached to an HVAC install (separate plumbing permit required).",
      "An HVAC contractor new to Penfield who needs to confirm the permit process and fees."
    ]
  },

  yourRights: {
    en: [
      "A homeowner has the right to do HVAC work personally on an owner-occupied home.",
      "A property owner has the right to clear guidance from the Building Department on which HVAC scopes require a permit.",
      "A property owner has the right to inspection by town staff rather than a paid third-party agency.",
      "State worker protections — wage, safety, injury — apply in Penfield as statewide.",
      "A property owner has the right to dispute a deceptive HVAC contractor under General Business Law 349."
    ]
  },

  legalOptions: {
    en: [
      "The Town of Penfield Building Department at (585) 340-8636 handles HVAC permits and inspections.",
      "Gas line work requires a separate plumbing permit and a licensed plumber.",
      "Refrigerant handling requires federal EPA Section 608 certification under 40 CFR Part 82.",
      "Property owners are responsible for the permit and inspection regardless of who performs the HVAC work.",
      "For wage or injury issues on an HVAC job, the statewide hvac-residential-ny entry covers state-level channels."
    ]
  },

  counsel: [{
    type: "free",
    name: "Town of Penfield Building Department",
    focus: "HVAC permits, inspections, code compliance",
    qualifier: "Residents and contractors working in Town of Penfield",
    access: "Phone; email building@penfield.org",
    outcome: "Permit issuance, inspection scheduling, code guidance",
    phone: "(585) 340-8636",
    url: "https://www.penfieldny.gov/your_government/departments/building/",
    verified: true,
    bilingual: false,
    languages: ["en"]
  }],

  relatedIds: ["hvac-residential-ny", "plumbing-residential-ny-mon-penfield-town", "electrical-residential-ny-mon-penfield-town"],
  relatedHelpResources: [],
  tags: ["trades", "HVAC", "furnace", "heat pump", "penfield", "monroe county", "town ordinance", "energy code", "gas line"],
  sources: ["https://www.penfieldny.gov/your_government/departments/building/", "https://ecode360.com/41364370"],
  lastVerified: "2026-04-23",
  volatility: "moderate",
  emergencyFlag: false,
  disclaimer: true,
  categoryDisclaimer: null
};
