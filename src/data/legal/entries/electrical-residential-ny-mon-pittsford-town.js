export const ELECTRICAL_RESIDENTIAL_NY_MON_PITTSFORD_TOWN = {
  id: "electrical-residential-ny-mon-pittsford-town",
  category: "trades",
  tier: "town",
  jurisdiction: "us-ny-monroe-pittsford-town",
  authorityType: "local-ordinance",
  status: "active",

  title: { en: "Residential Electrical Work in the Town of Pittsford — Chapter 79 Standards and the Village of Pittsford Boundary" },

  summary: {
    en: "The Town of Pittsford handles electrical permits through its Code Enforcement Department. Town Code Chapter 79 sets the electrical standards. The town licenses plumbers annually under Chapter 114 but does not license electricians separately. Inspection is done by an approved third-party Electrical Inspection Agency; the Code Enforcement Department has the current list. The Town of Pittsford and the Village of Pittsford are separate governments with separate Building Departments — the property's jurisdiction depends on which side of the village line the address sits."
  },

  whatItMeans: {
    en: "Pittsford town administers electrical work through Code Enforcement. Chapter 79 of the Town Code sets the framework, tying into the NY State Uniform Code and the National Electrical Code (NEC / NFPA 70). The permit and inspection process follows the Monroe County third-party agency pattern.\n\nPermit triggers. A building permit is needed for most electrical work. Typical projects: a new service panel or subpanel, new circuits, EV chargers (240V Level 2), generator transfer switches, hot tubs, pool bonding, mini-split heat pumps, finished basements, and pool wiring. Calling Code Enforcement at (585) 248-6265 before starting confirms whether a specific project needs a separate electrical permit on top of the building permit.\n\nNo electrician license. Pittsford town does not license electricians. Any qualified electrician can work in Pittsford. Most electricians working in the town hold a City of Rochester Examining Board of Electricians credential or equivalent. Insurance verification replaces the license process — current general liability and workers' compensation coverage is required.\n\nPlumbers licensed separately. Pittsford licenses plumbers annually under Chapter 114 of the Town Code. This is unusual for Monroe County. An electrician and plumber doing coordinated work (for example, HVAC with a gas line) need to track each track separately.\n\nApproved inspection agencies. The town's list is not posted online. Calling Code Enforcement confirms the current list. The regional standard agencies serving Pittsford include Commonwealth Electrical Inspection Service, Middle Department Inspection Agency (MDIA), and NYEIA. NY Atlantic-Inland, Genesee Star, and NY Board of Fire Underwriters also appear on some town lists; the town confirms.\n\nHomeowner self-work. Whether a homeowner can perform electrical work on a home they own and occupy is not explicitly published. The default New York rule permits it with a permit and inspection, but Code Enforcement has the final word for Pittsford-specific practice.\n\nInspection flow. The homeowner or contractor picks an approved agency from the town's current list. The agency inspects the work against the NY State Uniform Code and the NEC. When the work passes, the agency issues a Certificate of Compliance and sends a copy to the town. Code Enforcement uses the CoC to close the permit.\n\nVillage of Pittsford boundary. The Village of Pittsford is a separate municipality inside the town. Addresses inside the village go through the village Building Inspector at (585) 586-4332. Mailing address ('Pittsford, NY 14534') does not always match jurisdiction. The tax assessor or the town assessor confirms which office handles a specific address.\n\nHistoric district overlay. Parts of Pittsford town fall within a historic district with additional review requirements. Electrical work that affects the exterior of a historic property may need Architectural Review Board approval alongside the building permit. Code Enforcement flags this at permit application when it applies.\n\nFailed inspection or unpermitted work. The Town Code Enforcement Officer can require corrections, tear-out, or a full redo when work was done without a permit or does not meet code. Unpermitted electrical work can block a future certificate of occupancy check and can surface at resale.\n\nState-level rules. Wage theft protections (Labor Law 191 and 193), the Scaffold Law (LL 240 and 241(6)), mechanic's liens for unpaid work (Lien Law 3 and 10), and General Business Law 349 for deceptive contractors apply in Pittsford as they do statewide. The electrical-residential-ny entry covers those layers."
  },

  example: {
    en: "A homeowner in Pittsford town (outside the village) wants to add a generator. He calls Code Enforcement at (585) 248-6265 to ask about the permit and the current approved agency list. The town gives him the list and confirms that the generator install triggers a permit. His electrician files the permit, performs the install, and the agency he picked inspects the transfer switch, generator grounding, and the connection to the panel. The agency issues the Certificate of Compliance and the town closes the permit."
  },

  whoQualifies: {
    en: [
      "A property owner or contractor doing electrical work in Pittsford town outside the Village of Pittsford.",
      "An electrician with current general liability and workers' compensation insurance.",
      "A homeowner considering self-work; calling Code Enforcement confirms the rules.",
      "A property owner in a historic district area who may need Architectural Review Board approval."
    ]
  },

  yourRights: {
    en: [
      "A property owner has the right to clear guidance on which jurisdiction (Pittsford town or Pittsford village) covers the address.",
      "A property owner has the right to the current approved-agency list from Code Enforcement.",
      "State worker protections — wage, safety, injury — apply in Pittsford as they do statewide.",
      "A property owner in a historic district has the right to a clear explanation of the Architectural Review Board process when it applies.",
      "A property owner has the right to dispute a deceptive contractor under General Business Law 349."
    ]
  },

  legalOptions: {
    en: [
      "The Pittsford Code Enforcement Department handles electrical permits and approved-agency coordination at (585) 248-6265.",
      "Chapter 79 sets electrical standards; Chapter 114 licenses plumbers separately.",
      "For properties inside the Village of Pittsford, the village Building Inspector at (585) 586-4332 handles the permit.",
      "For wage or injury issues on an electrical job, the statewide electrical-residential-ny entry covers state-level channels."
    ]
  },

  counsel: [{
    type: "free",
    name: "Town of Pittsford Code Enforcement Department",
    focus: "Electrical permits, approved agency list, code compliance",
    qualifier: "Residents and contractors in Pittsford town outside the village",
    access: "11 South Main Street; phone",
    outcome: "Permit issuance, agency coordination, code guidance",
    phone: "(585) 248-6265",
    url: "https://www.townofpittsfordny.gov/code",
    verified: true, bilingual: false, languages: ["en"]
  }],

  relatedIds: ["electrical-residential-ny"],
  relatedHelpResources: [],
  tags: ["trades", "electrical", "pittsford", "monroe county", "chapter 79", "village boundary", "town ordinance"],
  sources: ["https://www.townofpittsfordny.gov/code", "https://ecode360.com/PI1657"],
  lastVerified: "2026-04-23",
  volatility: "moderate", emergencyFlag: false, disclaimer: true, categoryDisclaimer: null
};
