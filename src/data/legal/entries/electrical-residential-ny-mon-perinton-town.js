export const ELECTRICAL_RESIDENTIAL_NY_MON_PERINTON_TOWN = {
  id: "electrical-residential-ny-mon-perinton-town",
  category: "trades",
  tier: "town",
  jurisdiction: "us-ny-monroe-perinton-town",
  authorityType: "local-ordinance",
  status: "active",

  title: { en: "Residential Electrical Work in the Town of Perinton — In-House Inspections, No Third-Party Agencies" },

  summary: {
    en: "Perinton is the outlier in Monroe County. The town performs its own electrical inspections and does not accept reports from third-party agencies. One permit, one town inspector, one path. A homeowner can pull the permit in their own name. Contractor insurance is required when a contractor does the work. For a service-level change, Perinton coordinates with the utility — RG&E or Fairport Electric. The Village of Fairport sits inside the town and runs its own Building and Code Enforcement office; village addresses go through Fairport, not Perinton."
  },

  whatItMeans: {
    en: "Perinton's Building and Codes Department handles residential electrical permits and performs the inspections in-house. The town explicitly rejects third-party agency reports: 'The Town of Perinton performs all electrical inspections and does not accept inspection reports from third-party agencies.'\n\nThis is unusual for New York. Every other Monroe County town uses approved third-party inspection agencies for electrical work (NYEIA, Commonwealth, MDIA are the common ones). Perinton is the exception.\n\nOne permit form. Electrical work in Perinton uses the general Building Permit application. The town does not have a separate electrical permit form. When the electrical is part of a larger project (new construction, remodel, addition), it is covered under that project's building permit — no separate form needed. Standalone electrical work (a service upgrade, a new hot tub circuit, an EV charger install) uses the same Building Permit application.\n\nPermit triggers. Typical permit-triggering electrical projects in Perinton: a new service panel or subpanel, new circuits, EV chargers (240V Level 2), generator transfer switches, hot tubs, pool bonding, and finished basements. Small like-for-like repairs (swapping a receptacle) usually do not need a permit, but the Building and Codes Department sets the line.\n\nHomeowner self-work. A homeowner can pull the permit in their own name and perform electrical work on their own home. A permit and inspection are still required. The town does not allow homeowner electrical work on property the homeowner does not occupy.\n\nContractor insurance. Any contractor doing electrical work in Perinton has to file proof of general liability, workers' compensation, and disability insurance with the town. Homeowners doing their own work are exempt from the insurance requirement.\n\nUtility coordination on service changes. For a new service entrance or service upgrade, the town coordinates with the utility that serves the property. RG&E handles most of Perinton; Fairport Electric serves the village area and parts of the town through its municipal utility. RG&E disconnect and reconnect: (585) 743-2110. Fairport Electric: (585) 223-9500. Scheduling the utility disconnect has to align with the town inspection.\n\nInspection flow. The homeowner or contractor schedules the town electrical inspection. A Perinton inspector visits, checks the installation against the NY State Uniform Fire Prevention and Building Code (which incorporates the National Electrical Code / NFPA 70), and issues a Certificate of Compliance when the work passes. The CoC goes straight to the town file — no third-party paperwork.\n\nVillage of Fairport boundary. Fairport village sits inside Perinton but runs its own Building and Code Enforcement office. Addresses inside the village go through Fairport, not Perinton. A property's mailing address is not always the same as its jurisdiction; the tax assessor confirms. The electrical-residential-ny-mon-fairport-village entry covers the village rules.\n\nState floor. The statewide electrical-residential-ny entry covers the worker protections and consumer rules that apply on top of Perinton's local practice — Scaffold Law, wage theft protections, mechanic's liens, and General Business Law 349 for deceptive contractors."
  },

  example: {
    en: "A homeowner in Perinton wants to add a hot tub. She files a Building Permit application with the town. A town electrical inspector — not a third-party agency — comes out to check the bonding, the dedicated circuit, and the GFCI protection. The town issues the Certificate of Compliance in-house and closes the permit."
  },

  whoQualifies: {
    en: [
      "A property owner or contractor doing electrical work in Perinton outside the Village of Fairport.",
      "An electrician with general liability, workers' compensation, and disability insurance.",
      "A homeowner doing their own electrical work on a home they own and occupy — the town allows it with a permit and inspection."
    ]
  },

  yourRights: {
    en: [
      "A property owner has the right to one inspection by the town — no third-party agency fee.",
      "A homeowner has the right to pull the permit in their own name and do the work.",
      "A property owner has the right to clear guidance from the Building and Codes Department.",
      "A property owner has the right to a clear answer on which jurisdiction (Perinton or Fairport village) covers the address.",
      "State worker protections — wage, safety, injury — apply in Perinton as they do statewide.",
      "A property owner has the right to dispute a deceptive contractor under General Business Law 349."
    ]
  },

  legalOptions: {
    en: [
      "The Perinton Building and Codes Department handles electrical permits and performs the inspections in-house.",
      "Third-party inspection agency reports are not accepted in Perinton — the town inspector does the inspection.",
      "For a service change, the town coordinates with the utility (RG&E or Fairport Electric).",
      "For addresses inside Fairport village, the village Code Enforcement office handles permits and inspections; the electrical-residential-ny-mon-fairport-village entry covers those rules.",
      "For wage or injury issues on an electrical job, the statewide electrical-residential-ny entry covers state-level options (NYS Department of Labor, OSHA, Workers' Compensation Board)."
    ]
  },

  counsel: [{
    type: "free",
    name: "Town of Perinton Building and Codes Department",
    focus: "Electrical permits and inspections (in-house)",
    qualifier: "Residents and contractors working in Perinton outside Fairport village",
    access: "1350 Turk Hill Road; phone; email building@perinton.org",
    outcome: "Permit issuance, electrical inspection, certificate of compliance",
    phone: "(585) 223-0770",
    url: "https://perinton.gov/departments/public-works/building-and-codes-department/",
    verified: true, bilingual: false, languages: ["en"]
  }],

  relatedIds: ["electrical-residential-ny", "electrical-residential-ny-mon-fairport-village"],
  relatedHelpResources: [],
  tags: ["trades", "electrical", "perinton", "monroe county", "town inspection", "no third party", "unusual"],
  sources: ["https://perinton.gov/departments/public-works/building-and-codes-department/", "https://perinton.gov/wp-content/uploads/Electrical-Permits-and-Service-Upgrades.pdf"],
  lastVerified: "2026-04-22",
  volatility: "moderate", emergencyFlag: false, disclaimer: true, categoryDisclaimer: null
};
