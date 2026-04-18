// LGLW6-D_roofing-residential-ny_01.js
// State-floor entry for residential roofing in New York.
// Applies everywhere in the state. Town/village entries layer on top.

export const entry = {
  id: "roofing-residential-ny",
  category: "trades",
  tier: "state",
  jurisdiction: "us-ny",
  authorityType: "state-statute",
  primaryStatute: "NY LAB 191",
  status: "active",

  title: {
    en: "Residential roofing in New York: what state law requires"
  },

  summary: {
    en: "New York State sets the floor for residential roofing work — building code, insurance, and wage protections that apply everywhere in the state. Towns and villages add their own permit rules on top."
  },

  whatItMeans: {
    en: "Roofing work on one- and two-family homes in New York falls under the NYS Uniform Fire Prevention and Building Code. Paid contractors must carry workers comp and disability insurance under NY Workers' Compensation Law, or to hold a state waiver for people who work for themselves with no employees. Home improvement contractor licensing is required in New York City and the downstate counties of Nassau, Suffolk, Westchester, Rockland, and Putnam. Most of upstate New York, including Monroe County, has no statewide contractor license — licensing is handled town by town."
  },

  example: {
    en: "A day laborer is hired in cash to tear off and replace a roof in a Monroe County suburb. The homeowner refuses to pay the agreed amount after the work is done. Even with no written contract and no contractor license, New York Labor Law protects the worker's right to be paid for hours worked, and the NYS Mechanic's Lien Law allows an unpaid laborer to place a lien against the property where they performed the work."
  },

  whoQualifies: {
    en: [
      "Any person performing roofing work on a residential property in New York State, including homeowners doing their own work",
      "Licensed contractors, unlicensed workers, day laborers, and subcontractors — state-floor rules apply regardless of licensing",
      "Workers paid in cash, by check, or off the books — wage laws apply the same way",
      "Workers without work authorization — New York wage protections apply to undocumented workers the same as any other worker"
    ]
  },

  yourRights: {
    en: [
      "The right to be paid for hours worked under New York Labor Law §191 and §193, even without a written contract",
      "The right to safe working conditions, including fall protection for roofing work under OSHA and the NYS Industrial Code",
      "The right to workers comp coverage for injuries sustained while working for a contractor",
      "The right to not be misclassified as an independent contractor when working as an employee",
      "The right to file a wage theft claim without retaliation, regardless of immigration status"
    ]
  },

  legalOptions: {
    en: [
      "The NYS Department of Labor Division of Labor Standards accepts wage theft claims and investigates unpaid wages for construction work",
      "The NYS Attorney General's Labor Bureau investigates patterns of wage theft and worker exploitation in construction",
      "New York Mechanic's Lien Law §3 allows a laborer who performed work on a building to file a lien against the property for unpaid wages",
      "Small claims court in the county where the work was done handles disputes up to $5,000 in towns and $10,000 in New York City",
      "The NYS Workers' Compensation Board handles injury claims for construction workers, including workers whose employer failed to carry coverage",
      "The federal Occupational Safety and Health Administration accepts safety complaints for roofing work at heights, including anonymous complaints"
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
    }
  ],

  relatedIds: ["roofing-residential-ny-mon-pittsford-town"],
  relatedHelpResources: [],

  tags: [
    "trades", "roofing", "contractor", "construction",
    "wage theft", "day laborer", "unlicensed work",
    "workers compensation", "mechanic lien", "uniform code"
  ],

  sources: [
    "https://dos.ny.gov/building-standards-and-codes",
    "https://dol.ny.gov/wage-theft-hub",
    "https://www.nysenate.gov/legislation/laws/LAB/191",
    "https://www.nysenate.gov/legislation/laws/LIE/3"
  ],

  lastVerified: "2026-04-13",
  volatility: "moderate",
  emergencyFlag: false,
  disclaimer: true,
  categoryDisclaimer: null
};
