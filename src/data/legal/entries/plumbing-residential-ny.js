// LGLW6-D_plumbing-residential-ny_01.js
// State-floor entry for residential plumbing in New York.
// Applies everywhere in the state. Town/village entries layer on top.

export const entry = {
  id: "plumbing-residential-ny",
  category: "trades",
  tier: "state",
  jurisdiction: "us-ny",
  authorityType: "state-statute",
  status: "active",

  title: {
    en: "Residential plumbing in New York: what state law requires"
  },

  summary: {
    en: "New York sets the floor for residential plumbing work — the building code, the public health rules for drinking water, and protections for workers. Towns and villages add their own rules on top, including who can pull a permit."
  },

  whatItMeans: {
    en: "Plumbing work on one- and two-family homes in New York has to follow the NYS Uniform Fire Prevention and Building Code. The state also has separate public health rules for drinking water safety (10 NYCRR Part 5). Paid plumbers must carry workers comp insurance (pays medical bills if a worker gets hurt on the job) and disability coverage. There is NO statewide plumber license in New York. Each city, town, or village decides who can pull a plumbing permit. Most of upstate — including Monroe County — lets a master plumber register with the town and then pull permits. NYC and some other cities have their own stricter licensing. In most of upstate, a homeowner can do plumbing in their OWN single-family home without hiring a licensed plumber. But they still have to pull a permit and pass an inspection. NYC is different — you generally can't do your own plumbing work there."
  },

  example: {
    en: "A homeowner in a Monroe County suburb wants to replace their water heater. In most towns, this needs a permit even though it seems simple. The homeowner goes to the Town Building Department, fills out a permit, and either hires a registered plumber or (in most upstate towns) pulls the permit themselves as a DIY homeowner. After the install, a town inspector checks the work. If the work passes, the homeowner gets a certificate of compliance."
  },

  whoQualifies: {
    en: [
      "Any person doing plumbing work on a home in New York, including homeowners doing their own work",
      "Registered plumbers, their workers, day laborers, and subcontractors — state worker protections (wage, safety, injury) still apply here",
      "Workers paid in cash, by check, or off the books — wage laws apply the same way",
      "Workers without work authorization — New York wage protections apply the same as any other worker"
    ]
  },

  yourRights: {
    en: [
      "The right to be paid for hours worked under Labor Law §191 and §193, even without a written contract",
      "The right to safe working conditions (Scaffold Law §240 and §241(6) for elevation-related plumbing work)",
      "The right to workers comp if you get hurt working for a contractor",
      "The right to not be called a \"1099 contractor\" when you're really an employee",
      "The right to file a wage theft claim without punishment, no matter your immigration status",
      "The right, as a homeowner, to safe drinking water free from cross-connections (backflow that could pull dirty water into your pipes) (Public Health Law § 225; 10 NYCRR Part 5)",
      "The right, as a homeowner, to dispute a bad plumbing job in court or through consumer protection channels"
    ]
  },

  legalOptions: {
    en: [
      "The NY Department of Labor (dol.ny.gov/wage-theft-hub) takes complaints about unpaid plumbing wages.",
      "The NY Attorney General's Labor Bureau investigates patterns of wage theft in construction.",
      "A plumber or laborer who wasn't paid can file a mechanic's lien against the property. You have 4 months on a single-family home, 8 months on other buildings (Lien Law § 3 and § 10).",
      "Small claims court handles disputes up to $5,000 in town/village court and up to $10,000 in city court. No lawyer needed.",
      "The NY Workers' Compensation Board takes injury claims — even if your boss didn't carry coverage.",
      "OSHA takes safety complaints for plumbing work, including anonymous complaints. Falls from elevation, confined-space work, and chemical exposures are common concerns.",
      "Consumers who hired a contractor who lied about their license can sue under General Business Law § 349. Remedies include actual damages, up to $1,000 extra, and attorney's fees.",
      "For drinking water problems — contamination, backflow, well issues — contact the Monroe County Department of Public Health, not the building department. State Public Health Law § 225 is the authority.",
      "If a plumbing job failed inspection or was done without a permit, the town Code Enforcement Officer can \"red-tag\" the work. That means it has to be fixed or torn out before the house can be sold, refinanced, or get a certificate of occupancy."
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

  relatedIds: ["roofing-residential-ny"],
  relatedHelpResources: [],

  tags: [
    "trades", "plumbing", "plumber", "water heater",
    "sewer line", "backflow", "permit",
    "wage theft", "day laborer", "master plumber",
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
    "https://www.health.ny.gov/environmental/water/drinking/",
    "https://dol.ny.gov/wage-theft-hub"
  ],

  lastVerified: "2026-04-13",
  volatility: "moderate",
  emergencyFlag: false,
  disclaimer: true,
  categoryDisclaimer: null
};
