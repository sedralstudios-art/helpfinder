// LGLW6-D_electrical-residential-ny_01.js
// State-floor entry for residential electrical in New York.
// Applies everywhere in the state. Town/village entries layer on top.

export const entry = {
  id: "electrical-residential-ny",
  category: "trades",
  tier: "state",
  jurisdiction: "us-ny",
  authorityType: "state-statute",
  status: "active",

  title: {
    en: "Residential electrical work in New York: what state law requires"
  },

  summary: {
    en: "New York sets the floor for residential electrical work — the building code (which includes the National Electrical Code), the rules for licensed inspection, and protections for workers. The NY twist most people don't know: towns don't inspect electrical themselves. Third-party agencies do."
  },

  whatItMeans: {
    en: "Electrical work on homes in New York has to follow the NYS Uniform Fire Prevention and Building Code, which includes the National Electrical Code (NEC, also known as NFPA 70). Paid electricians must carry workers comp insurance (pays medical bills if a worker gets hurt on the job) and disability coverage.\n\nThere is NO statewide electrician license in New York. Licensing is local — each city, town, or village sets its own rules. NYC has Master and Special Electrician licenses. Buffalo has its own Master Electrician license. The City of Rochester has its own Examining Board of Electricians with Master Three-Phase, Master Single-Phase, and Single-Phase Residential licenses. Most upstate towns don't license electricians at all — they just require a permit and inspection.\n\nThe NY way that's different from most states: **third-party Electrical Inspection Agencies**. Towns don't do electrical inspections themselves. Instead, each town approves a list of inspection agencies. The homeowner or electrician picks one from the list, the agency inspects the work, and the agency issues a Certificate of Compliance. Common agencies in Monroe County: NY Electrical Inspection Agency (NYEIA), Commonwealth Electrical Inspection Service, Middle Department Inspection Agency (MDIA). Other NY agencies include NY Board of Fire Underwriters (NYBFU) and Atlantic-Inland.\n\nIn most of upstate New York, a homeowner can do their own electrical work in their own single-family home. They still need a permit and inspection. NYC does NOT allow homeowner electrical work — only licensed electricians."
  },

  example: {
    en: "A homeowner in a Monroe County suburb wants to add an EV charger (Level 2, 240V). In most towns, this needs a permit AND inspection. The homeowner files a permit at the Town Building Department, does the work (or hires a licensed electrician), then picks an approved Electrical Inspection Agency from the town's list. The agency inspects the work and issues a Certificate of Compliance. The town closes out the permit once the certificate comes in."
  },

  whoQualifies: {
    en: [
      "Any person doing electrical work on a home in New York, including homeowners doing their own work (outside NYC)",
      "Licensed electricians, their apprentices, day laborers, and subcontractors — state worker protections still apply",
      "Workers paid in cash, by check, or off the books — wage laws apply the same way",
      "Workers without work authorization — New York wage protections apply the same as any other worker"
    ]
  },

  yourRights: {
    en: [
      "The right to be paid for hours worked under Labor Law §191 and §193, even without a written contract",
      "The right to safe working conditions (Scaffold Law §240 and §241(6) for elevated electrical work)",
      "The right to workers comp if you get hurt working for a contractor",
      "The right to not be called a \"1099 contractor\" when you're really an employee",
      "The right to file a wage theft claim without punishment, no matter your immigration status",
      "The right, as a homeowner, to pick from your town's list of approved Electrical Inspection Agencies — the town should not force a specific one on you",
      "The right, as a homeowner, to dispute shoddy electrical work in court or through consumer protection channels (GBL § 349 for deceptive contractors)"
    ]
  },

  legalOptions: {
    en: [
      "The NY Department of Labor (dol.ny.gov/wage-theft-hub) takes complaints about unpaid electrical wages.",
      "The NY Attorney General's Labor Bureau investigates patterns of wage theft in construction.",
      "An electrician or laborer who wasn't paid can file a mechanic's lien against the property. You have 4 months on a single-family home, 8 months on other buildings (Lien Law § 3 and § 10).",
      "Small claims court handles disputes up to $5,000 in town/village court and up to $10,000 in city court. No lawyer needed.",
      "The NY Workers' Compensation Board takes injury claims — even if your boss didn't carry coverage.",
      "OSHA takes safety complaints, including anonymous ones. Electrical work has specific hazards covered by federal law: shock, arc flash, falls from elevation, and confined space issues.",
      "Consumers who hired a contractor who lied about their license can sue under General Business Law § 349. Remedies include actual damages, up to $1,000 extra, and attorney's fees.",
      "If work failed inspection or was done without a permit, the town Code Enforcement Officer can require it to be corrected, torn out, or redone. The house may not pass a final inspection or certificate of occupancy check until it is."
    ]
  },

  counsel: [
    {
      type: "free",
      name: "Worker Justice Center of New York",
      focus: "Wage theft, misclassification, and unpaid wages in construction and agriculture",
      qualifier: "Low-income workers; services available regardless of immigration status",
      access: "Walk-in and by appointment; Spanish and English",
      outcome: "Claim filing assistance, legal representation in wage disputes, worker education",
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
      focus: "Deceptive contractor practices, unlicensed work, false claims about licensing",
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

  relatedIds: ["roofing-residential-ny", "plumbing-residential-ny"],
  relatedHelpResources: [],

  tags: [
    "trades", "electrical", "electrician", "service panel",
    "EV charger", "generator", "circuit", "NEC",
    "permit", "inspection agency", "certificate of compliance",
    "wage theft", "day laborer", "master electrician",
    "workers comp", "mechanic lien", "home improvement"
  ],

  sources: [
    "https://dos.ny.gov/building-standards-and-codes",
    "https://www.nysenate.gov/legislation/laws/EXC/A18",
    "https://www.nysenate.gov/legislation/laws/LAB/191",
    "https://www.nysenate.gov/legislation/laws/LAB/193",
    "https://www.nysenate.gov/legislation/laws/LIE/3",
    "https://www.nysenate.gov/legislation/laws/LIE/10",
    "https://www.nysenate.gov/legislation/laws/GBS/349",
    "https://www.nfpa.org/codes-and-standards/nfpa-70",
    "https://dol.ny.gov/wage-theft-hub"
  ],

  lastVerified: "2026-04-14",
  volatility: "moderate",
  emergencyFlag: false,
  disclaimer: true,
  categoryDisclaimer: null
};
