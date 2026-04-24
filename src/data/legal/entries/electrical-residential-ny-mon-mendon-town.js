export const ELECTRICAL_RESIDENTIAL_NY_MON_MENDON_TOWN = {
  id: "electrical-residential-ny-mon-mendon-town",
  category: "trades",
  tier: "town",
  jurisdiction: "us-ny-monroe-mendon-town",
  authorityType: "local-ordinance",
  status: "active",

  title: { en: "Residential Electrical Work in the Town of Mendon — Chapter 134, Flexible Inspector Approval" },

  summary: {
    en: "The Town of Mendon requires a separate electrical permit under Chapter 134 of the Town Code. Unlike towns that maintain a fixed list of approved agencies, Mendon takes a flexible approach — the code deputizes any electrical inspector the town considers qualified. Commonwealth Electrical Inspection Service is headquartered in Mendon (1355 Pittsford-Mendon Rd) and is the default local choice, though NYEIA and MDIA are also active. The Building Department at (585) 624-6066 confirms qualified inspectors and permit scope. The Village of Honeoye Falls sits inside Mendon and has its own Code Enforcement Officer; village addresses go through the village."
  },

  whatItMeans: {
    en: "Mendon takes a different approach to electrical inspection than most Monroe County towns. Instead of maintaining a fixed approved-agency list, Chapter 134 of the Town Code delegates approval authority to the Code Enforcement Officer, who deputizes each electrical inspector the town deems qualified. In practice this produces the same outcome — Commonwealth, NYEIA, and MDIA are the active agencies — but the mechanism is more flexible.\n\nWhen a permit is required. Chapter 134 makes it a violation to install or alter electrical wiring until an inspection application is filed with a qualified electrical inspector or the Code Enforcement Officer. The town issues a separate electrical permit (one of five permit types — zoning, building, electrical, plumbing, gas). Like-for-like fixture swaps typically do not trigger the permit requirement. Panel replacements, new circuits, service upgrades, EV charger installs, and pool wiring all do.\n\nThe local advantage. Commonwealth Electrical Inspection Service is headquartered in Mendon at 1355 Pittsford-Mendon Road. Scheduling with a local agency often means faster turnaround than with a Rochester-based agency. A Mendon homeowner can typically get inspection within a few days when Commonwealth is available.\n\nJurisdictional boundary. The Village of Honeoye Falls sits inside the Town of Mendon but has its own Code Enforcement Officer. A property with a Honeoye Falls, NY 14472 mailing address can sit inside village limits (under village CEO) or in the surrounding Mendon town area (under Mendon Building Department). The Monroe County Real Property Portal confirms which office governs a specific address.\n\nContractor insurance. Electrical contractors working in Mendon need current general liability insurance and workers' compensation coverage under Workers' Compensation Law 10.\n\nHomeowner self-work. Chapter 134 does not explicitly address homeowner self-work. The code requires that the inspection be done by a qualified inspector, regardless of who performs the installation. A homeowner doing self-work on an owner-occupied single-family home can arrange the inspection the same way a contractor would. A call to the Building Department at (585) 624-6066 before starting confirms the current practice.\n\nInspection and closeout. After the work is complete, the qualified inspector performs the inspection against the National Electrical Code (NEC) and the NY Uniform Code. The inspector issues an electrical Certificate of Compliance. A copy is filed with the town Code Enforcement Officer. The town then closes out the electrical permit.\n\nContact hours. The Building Department is located at 16 West Main Street, First Floor Room B. Hours are Monday through Thursday from 8am to 4pm and Friday until 1pm.\n\nState protections. Wage theft protections (Labor Law 191 and 193), the Scaffold Law for elevated work (Labor Law 240 and 241(6)), mechanic's liens (Lien Law 3 and 10), and General Business Law 349 for deceptive home-improvement practices apply in Mendon as statewide. The statewide electrical-residential-ny entry covers those layers."
  },

  example: {
    en: "A Mendon homeowner, outside the Village of Honeoye Falls, wants to add a hot tub with a dedicated circuit and bonding. He files an electrical permit with the Mendon Building Department and an inspection application with Commonwealth (Commonwealth is based in Mendon). The electrician installs the dedicated circuit and bonding. Commonwealth inspects and issues the Certificate of Compliance. A copy is filed with the Mendon Code Enforcement Officer and the permit is closed."
  },

  whoQualifies: {
    en: [
      "A property owner or electrician doing residential electrical work in the Town of Mendon, outside village limits.",
      "A property owner with a Honeoye Falls, NY 14472 mailing address who is confirming whether the parcel sits in village limits or in the Mendon town area.",
      "An electrical contractor with current general liability insurance and workers' compensation coverage.",
      "A homeowner considering self-work who is coordinating inspection with a qualified inspector."
    ]
  },

  yourRights: {
    en: [
      "A property owner has the right to pick a qualified inspector (Commonwealth, NYEIA, MDIA in practice).",
      "A property owner has the right to clear guidance from the Building Department on permit scope.",
      "A property owner has the right to a clear answer on jurisdiction — Mendon or Honeoye Falls village — for a specific address.",
      "State worker protections — wage, safety, injury — apply in Mendon as statewide.",
      "A property owner has the right to dispute a deceptive electrical contractor under General Business Law 349."
    ]
  },

  legalOptions: {
    en: [
      "The Mendon Building Department at (585) 624-6066 handles electrical permits under Chapter 134.",
      "The code requires filing the inspection application with a qualified inspector before starting work.",
      "The qualified inspector issues the electrical Certificate of Compliance; a copy is filed with the town Code Enforcement Officer.",
      "For addresses inside village limits, the Village of Honeoye Falls Code Enforcement Officer handles the permit.",
      "For wage or injury issues on an electrical job, the statewide electrical-residential-ny entry covers state-level channels."
    ]
  },

  counsel: [{
    type: "free",
    name: "Town of Mendon Building Department",
    focus: "Electrical permits, approved agency questions, code compliance",
    qualifier: "Residents and contractors in Mendon outside village limits",
    access: "16 West Main St, First Floor Room B; phone; hours M-Th 8am-4pm, F 8am-1pm",
    outcome: "Permit issuance, agency coordination, code guidance",
    phone: "(585) 624-6066",
    url: "https://townofmendonny.gov/departments/building/",
    verified: true, bilingual: false, languages: ["en"]
  }],

  relatedIds: ["electrical-residential-ny", "electrical-residential-ny-mon-honeoye-falls-village"],
  relatedHelpResources: [],
  tags: ["trades", "electrical", "mendon", "monroe county", "Commonwealth", "chapter 134", "town ordinance", "village boundary"],
  sources: ["https://townofmendonny.gov/departments/building/", "https://ecode360.com/29673183"],
  lastVerified: "2026-04-23",
  volatility: "moderate", emergencyFlag: false, disclaimer: true, categoryDisclaimer: null
};
