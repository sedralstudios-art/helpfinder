// LGLW6-D_hvac-residential-ny_01.js
// State-floor entry for residential HVAC in New York.
// Applies everywhere in the state. Town/village entries layer on top.

export const entry = {
  id: "hvac-residential-ny",
  category: "trades",
  tier: "state",
  jurisdiction: "us-ny",
  authorityType: "state-statute",
  status: "active",

  title: { en: "Residential HVAC work in New York: what state law requires" },

  summary: {
    en: "New York sets the floor for furnace, AC, heat pump, and other heating and cooling work. That includes the building code, the energy code (which got stricter on December 31, 2025), a federal rule about handling refrigerants, and worker protections. Towns and villages run the permit and inspection process."
  },

  whatItMeans: {
    en: "HVAC work (heating, ventilation, air conditioning) on homes in New York has to follow the NYS Uniform Fire Prevention and Building Code. That code includes the Mechanical Code and the Fuel Gas Code. The Energy Conservation Construction Code of NY State (ECCCNYS) also applies — and the 2025 version of that code took effect December 31, 2025. Permits filed after that date have to meet the stricter energy rules.\n\nThere is NO statewide HVAC contractor license in New York. Licensing is local. Most Monroe County towns don't license HVAC contractors at all. They do require a licensed PLUMBER for gas line work (the pipe from the gas meter to the furnace). HVAC techs can set and connect the furnace, but the gas piping itself is plumbing work.\n\nAnyone who handles refrigerant (the stuff that makes AC cold) must have federal EPA Section 608 certification. This is a lifetime certification — no renewal — but it's required by federal law (40 CFR Part 82).\n\nHVAC inspections are done by the town Building Inspector directly — NOT by third-party agencies (that's different from electrical, which does use third-party agencies in NY).\n\nIn most of upstate New York, a homeowner can do HVAC work on their own home. A permit and inspection are still required. NYC does NOT allow homeowner HVAC work."
  },

  example: {
    en: "A homeowner in a Monroe County suburb wants to replace an old oil furnace with a new gas furnace. This is a big job. The homeowner needs: (1) a mechanical permit from the town for the furnace, (2) a plumbing permit for the gas line (pulled by a licensed plumber), (3) a chimney review, and (4) inspections after install. The town Building Inspector — not a third-party agency — does the inspection. Because the permit is filed after December 31, 2025, the new furnace has to meet the 2025 Energy Code efficiency rules."
  },

  whoQualifies: {
    en: [
      "Any person doing HVAC work on a home in New York, including homeowners doing their own work (outside NYC)",
      "HVAC contractors, their workers, day laborers, and subcontractors — state worker protections still apply",
      "Workers paid in cash, by check, or off the books — wage laws apply the same way",
      "Workers without work authorization — New York wage protections apply the same as any other worker",
      "Anyone handling refrigerant must have EPA Section 608 certification (federal law)"
    ]
  },

  yourRights: {
    en: [
      "The right to be paid for hours worked under Labor Law §191 and §193, even without a written contract",
      "The right to safe working conditions (Scaffold Law §240 and §241(6) for elevated work)",
      "The right to workers comp if you get hurt working for a contractor",
      "The right to not be called a \"1099 contractor\" when you're really an employee",
      "The right to file a wage theft claim without punishment, no matter your immigration status",
      "The right, as a homeowner, to do HVAC work on your own home (outside NYC) with a permit and inspection",
      "The right to dispute a bad HVAC job through consumer protection channels (GBL § 349 for deceptive contractors)"
    ]
  },

  legalOptions: {
    en: [
      "The NY Department of Labor (dol.ny.gov/wage-theft-hub) takes complaints about unpaid HVAC wages.",
      "An HVAC worker who wasn't paid can file a mechanic's lien against the property. You have 4 months on a single-family home, 8 months on other buildings (Lien Law § 3 and § 10).",
      "Small claims court handles disputes up to $5,000 in town/village court and up to $10,000 in city court.",
      "The NY Workers' Compensation Board takes injury claims — even if your boss didn't carry coverage.",
      "OSHA takes safety complaints, including anonymous ones. HVAC work involves risks: refrigerant exposure, electrical hazards, confined space, falls, and carbon monoxide.",
      "Consumers who hired a contractor who lied about their license or qualifications can sue under General Business Law § 349. Remedies include actual damages, up to $1,000 extra, and attorney's fees.",
      "For refrigerant spills or improper handling, complaints go to the federal EPA (epa.gov/section608).",
      "If work failed inspection or was done without a permit, the town Code Enforcement Officer can require it to be fixed or redone before the house can get a final inspection or certificate of occupancy."
    ]
  },

  counsel: [
    {
      type: "free",
      name: "Worker Justice Center of New York",
      focus: "Wage theft, misclassification, and unpaid wages in construction and trades",
      qualifier: "Low-income workers; services available regardless of immigration status",
      access: "Walk-in and by appointment; Spanish and English",
      outcome: "Claim filing assistance, legal representation, worker education",
      phone: "585-325-3050",
      url: "https://www.wjcny.org",
      verified: true,
      bilingual: true,
      languages: ["en", "es"]
    },
    {
      type: "free",
      name: "Legal Assistance of Western New York (LawNY)",
      focus: "Civil legal aid for low-income residents including employment and wage issues",
      qualifier: "Income-eligible residents of Monroe and surrounding counties",
      access: "Phone intake and online application",
      outcome: "Advice, brief services, and full representation depending on the case",
      phone: "585-325-2520",
      url: "https://www.lawny.org",
      verified: true,
      bilingual: false,
      languages: ["en"]
    },
    {
      type: "free",
      name: "NYS Department of Labor — Division of Labor Standards",
      focus: "Unpaid wages and wage theft complaints across all industries",
      qualifier: "Any worker in New York, regardless of immigration or licensing status",
      access: "Online complaint form or phone intake",
      outcome: "State investigation and potential recovery of unpaid wages",
      phone: "1-888-469-7365",
      url: "https://dol.ny.gov/wage-theft-hub",
      verified: true,
      bilingual: true,
      languages: ["en", "es"]
    },
    {
      type: "free",
      name: "NYS Attorney General — Consumer Frauds Bureau",
      focus: "Deceptive contractor practices, unlicensed work, false claims about certifications",
      qualifier: "Any New York consumer",
      access: "Online complaint form; phone intake",
      outcome: "State investigation and possible enforcement action",
      phone: "1-800-771-7755",
      url: "https://ag.ny.gov/consumer-frauds",
      verified: true,
      bilingual: true,
      languages: ["en", "es"]
    }
  ],

  relatedIds: ["roofing-residential-ny", "plumbing-residential-ny", "electrical-residential-ny"],
  relatedHelpResources: [],

  tags: [
    "trades", "HVAC", "heating", "cooling", "furnace", "air conditioning",
    "heat pump", "mini-split", "refrigerant", "EPA Section 608",
    "gas line", "energy code", "ECCCNYS",
    "permit", "wage theft", "mechanic lien"
  ],

  sources: [
    "https://dos.ny.gov/building-standards-and-codes",
    "https://www.nysenate.gov/legislation/laws/EXC/A18",
    "https://www.nysenate.gov/legislation/laws/LAB/191",
    "https://www.nysenate.gov/legislation/laws/LAB/193",
    "https://www.nysenate.gov/legislation/laws/LIE/3",
    "https://www.nysenate.gov/legislation/laws/GBS/349",
    "https://www.epa.gov/section608/section-608-technician-certification-requirements",
    "https://www.nyserda.ny.gov/All-Programs/Energy-Code",
    "https://dol.ny.gov/wage-theft-hub"
  ],

  lastVerified: "2026-04-14",
  volatility: "moderate",
  emergencyFlag: false,
  disclaimer: true,
  categoryDisclaimer: null
};
