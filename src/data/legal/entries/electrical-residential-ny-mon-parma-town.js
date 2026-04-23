export const ELECTRICAL_RESIDENTIAL_NY_MON_PARMA_TOWN = {
  id: "electrical-residential-ny-mon-parma-town",
  category: "trades",
  tier: "town",
  jurisdiction: "us-ny-monroe-parma-town",
  authorityType: "local-ordinance",
  status: "active",

  title: { en: "Residential Electrical Work in the Town of Parma — Permits, Approved Inspection Agencies, and the Hilton Village Boundary" },

  summary: {
    en: "The Town of Parma Building Department handles electrical permits for addresses outside the Village of Hilton. NYEIA is confirmed as an approved inspection agency; the Building Department confirms which other agencies are accepted. The Village of Hilton sits inside Parma and runs its own Building Department — a property's jurisdiction depends on which side of the village line the address sits. Parma does not license electricians directly. Fee schedules are posted; confirming the current amount with the Building Department at (585) 392-9449 before filing avoids surprises."
  },

  whatItMeans: {
    en: "The Parma Building Department issues electrical permits for properties in Parma outside the Village of Hilton. Town inspectors handle building plan review; the electrical inspection is done by an approved third-party agency.\n\nPermit triggers. Typical permit-triggering projects: a new service panel or subpanel, new circuits, EV chargers (240V Level 2), generator transfer switches, hot tubs, pool bonding, mini-split installations, and finished basements. Small like-for-like repairs (swapping a receptacle) usually do not need a permit.\n\nApproved inspection agencies. NYEIA (New York Electrical Inspection Agency) is confirmed as an approved agency for Parma. Other agencies (Commonwealth, MDIA, Genesee Star, NY Atlantic-Inland, NYBFU) are likely also approved but the current list is confirmed by the Building Department. Confirming before scheduling avoids rejection of an inspection report.\n\nContractor insurance. Electricians working in Parma need current general liability and workers' compensation insurance. The town collects a certificate of insurance before issuing a permit.\n\nNo electrician license. Parma does not license electricians directly. Whether the town formally accepts a City of Rochester Examining Board of Plumbers certificate (applicable to plumbing, not electrical) is a separate question; electrical work relies on the third-party inspection plus insurance verification.\n\nHomeowner self-work. Whether a homeowner can perform electrical work on a home they own and occupy is not fully published on the town's page. The default New York rule permits it with a permit and inspection, but the Building Department has the final word for Parma-specific practice.\n\nInspection flow. The homeowner or contractor picks an approved agency and schedules the inspection. The agency inspects the work against the NY State Uniform Fire Prevention and Building Code, which incorporates the National Electrical Code (NEC / NFPA 70). When the work passes, the agency issues a Certificate of Compliance and sends a copy to the town. The town uses the CoC to close the permit.\n\nHilton village boundary. The Village of Hilton sits inside Parma and runs its own Building Department. Addresses inside Hilton village limits go through the village, not the town. A property's mailing address (Hilton, NY 14468) does not always match jurisdiction. The tax assessor or the town assessor confirms which office handles a specific address. The electrical-residential-ny-mon-hilton-village entry covers the village side.\n\nFee schedule. Parma posts a fee schedule (currently the 2023 version online). Calling the Building Department confirms current electrical permit amounts before filing.\n\nUtility coordination. For a service-level change, RG&E typically serves Parma addresses outside the village. The utility disconnect and reconnect schedule has to align with the inspection.\n\nFailed inspection or unpermitted work. The Town Code Enforcement Officer can require corrections, tear-out, or a full redo when work was done without a permit or does not meet code.\n\nState-level rules. Wage theft protections (Labor Law 191 and 193), the Scaffold Law (LL 240 and 241(6)), mechanic's liens for unpaid work (Lien Law 3 and 10), and General Business Law 349 for deceptive contractors apply in Parma as they do statewide. The electrical-residential-ny entry covers those layers."
  },

  example: {
    en: "A homeowner in Parma outside the Hilton village limits wants to add a subpanel for a detached garage. She files an electrical permit with the Parma Building Department. She picks NYEIA as the inspection agency. After the wiring is complete, NYEIA inspects the panel, the service feeder, and the grounding, and issues the Certificate of Compliance. Parma closes the permit once the CoC is on file."
  },

  whoQualifies: {
    en: [
      "A property owner or contractor doing electrical work in Parma outside the Village of Hilton.",
      "An electrician with current general liability and workers' compensation insurance.",
      "A homeowner considering self-work; calling the Building Department confirms the rules.",
      "A property owner unsure whether the address is inside Hilton village limits or in Parma proper."
    ]
  },

  yourRights: {
    en: [
      "A property owner has the right to clear guidance on which jurisdiction (Parma town or Hilton village) covers the address.",
      "A property owner has the right to pick from the current approved-agency list.",
      "A property owner has the right to clear fee and inspection information from the Building Department.",
      "State worker protections — wage, safety, injury — apply in Parma as they do statewide.",
      "A property owner has the right to dispute a deceptive contractor under General Business Law 349."
    ]
  },

  legalOptions: {
    en: [
      "The Parma Building Department handles electrical permits for Parma outside Hilton village at (585) 392-9449.",
      "NYEIA is confirmed as an approved agency; the Building Department has the current approved list.",
      "For properties inside Hilton village, the village Building Department handles the permit; the electrical-residential-ny-mon-hilton-village entry covers those rules.",
      "For wage or injury issues on an electrical job, the statewide electrical-residential-ny entry covers state-level channels."
    ]
  },

  counsel: [{
    type: "free",
    name: "Town of Parma Building Department",
    focus: "Electrical permits, approved agency list, code compliance",
    qualifier: "Residents and contractors in Parma outside Hilton village",
    access: "1300 Hilton Parma Corners Rd; phone; email building@parmany.org; hours Mon-Fri 8 a.m. to 4 p.m.",
    outcome: "Permit issuance, agency coordination, code guidance",
    phone: "(585) 392-9449",
    url: "https://parmany.gov/departments/building/",
    verified: true, bilingual: false, languages: ["en"]
  }],

  relatedIds: ["electrical-residential-ny", "electrical-residential-ny-mon-hilton-village"],
  relatedHelpResources: [],
  tags: ["trades", "electrical", "parma", "monroe county", "NYEIA", "village boundary", "town ordinance"],
  sources: ["https://parmany.gov/departments/building/", "https://ecode360.com/8009030"],
  lastVerified: "2026-04-23",
  volatility: "moderate", emergencyFlag: false, disclaimer: true, categoryDisclaimer: null
};
