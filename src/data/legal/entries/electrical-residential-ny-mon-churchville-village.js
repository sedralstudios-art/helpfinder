export const ELECTRICAL_RESIDENTIAL_NY_MON_CHURCHVILLE_VILLAGE = {
  id: "electrical-residential-ny-mon-churchville-village",
  category: "trades",
  tier: "village",
  jurisdiction: "us-ny-monroe-churchville-village",
  authorityType: "local-ordinance",
  status: "active",

  title: { en: "Residential Electrical Work in the Village of Churchville — Electrician's Report and Municipal Electric" },

  summary: {
    en: "Churchville is unusual — the village runs its own electrical utility, Churchville Municipal Electric. That adds a step most New York villages do not have. For new service or any service-level change (a service upgrade, a new service entrance, a meter relocation), the electrician has to file a village Electrician's Report before the utility will energize. Electrical inspections are handled by a third-party agency; NYEIA is explicitly set up as an approved inspector for Churchville. The Building Inspector at (585) 293-3720 ext 134 confirms which other agencies the village accepts."
  },

  whatItMeans: {
    en: "Churchville's combination of a village Building Department and a village-run electric utility makes the workflow different from a town where an outside utility like RG&E handles service changes.\n\nMunicipal electric. The Village of Churchville operates Churchville Municipal Electric, which supplies power to village addresses. The utility is not a permitting authority, but the utility coordinates closely with the Building Inspector on service-level work. The utility will not energize new or upgraded service until the permit and inspection cycle is complete.\n\nElectrician's Report. For service-level changes — a new service, a service upgrade (for example, 100A to 200A), a meter relocation, or a new service entrance — the electrician has to complete and file the village's Electrician's Report form. The form confirms the installation details, the load calculation, and the contact information for scheduling. Churchville Municipal Electric uses the form to plan the disconnect, the final inspection, and the reconnect. Projects that do not change the service (for example, new circuits, EV chargers that do not require a service upgrade, or hot tub bonding) usually do not require the Electrician's Report, though the building permit and inspection still apply.\n\nApproved inspection agencies. NYEIA is explicitly listed by Churchville Municipal Electric as an inspector for the village. Whether other agencies (Commonwealth, MDIA, Genesee Star, NY Atlantic-Inland, NYBFU) are accepted varies; the village Building Inspector has the current list. Some jurisdictions accept a broad list; Churchville's published list is narrower.\n\nBuilding permit. Electrical work in the village also needs a village building permit in addition to the Electrician's Report for service work. The Building Inspector issues the permit and confirms the inspection requirements at the time the permit is pulled.\n\nInspection flow. The approved third-party agency inspects the work against the NY State Uniform Fire Prevention and Building Code, which incorporates the National Electrical Code (NEC / NFPA 70). When the work passes, the agency issues a Certificate of Compliance and sends a copy to the village. Churchville Municipal Electric then schedules the reconnect when a service-level change is involved.\n\nContractor insurance. Electricians working in the village need current general liability insurance and workers' compensation coverage. The village and the agency typically ask for proof.\n\nHomeowner self-work. Whether a homeowner can perform electrical work on a home they own and occupy is not fully spelled out in the posted code. The default state rule allows it with a permit and inspection, but the village office has the final word for Churchville-specific practice.\n\nFailed inspection or unpermitted work. The village Code Enforcement Officer can require corrections, tear-out, or a full redo when work was done without a permit or does not meet code. Churchville Municipal Electric will not energize a service that lacks the final Certificate of Compliance.\n\nRelation to the Town of Riga. Churchville village sits inside the Town of Riga. Addresses outside village limits go through the Town of Riga Building Department, not the village. Mailing address does not always match jurisdiction; the tax assessor or the town assessor confirms which office handles a specific address.\n\nState-level rules. Wage theft protections (Labor Law 191 and 193), the Scaffold Law (LL 240 and 241(6)), mechanic's liens for unpaid work (Lien Law 3 and 10), and General Business Law 349 for deceptive contractors apply in Churchville as they do statewide."
  },

  example: {
    en: "A Churchville homeowner upgrades from a 100-amp to a 200-amp service panel. Her electrician files the Electrician's Report with the village and pulls a building permit. NYEIA inspects the new panel and issues the Certificate of Compliance. The village Building Inspector signs off. Only then does Churchville Municipal Electric schedule the disconnect and the reconnect of the upgraded service."
  },

  whoQualifies: {
    en: [
      "A property owner or contractor doing electrical work inside the Village of Churchville.",
      "An electrician filing the Electrician's Report for any service-level change.",
      "A homeowner considering self-work; calling the Building Inspector confirms the rules.",
      "A property owner unsure whether the address is inside Churchville village or the surrounding Town of Riga."
    ]
  },

  yourRights: {
    en: [
      "A homeowner has the right to know the Electrician's Report requirement before Churchville Municipal Electric energizes new service.",
      "A property owner has the right to clear guidance from the Building Inspector on permit and inspection requirements.",
      "A property owner has the right to a clear answer on jurisdiction (Churchville village or Town of Riga) for the address.",
      "State worker protections — wage, safety, injury — apply in Churchville as they do statewide.",
      "A property owner has the right to dispute a deceptive contractor under General Business Law 349."
    ]
  },

  legalOptions: {
    en: [
      "The village Building Inspector handles electrical permits and the Electrician's Report form at (585) 293-3720 ext 134.",
      "Churchville Municipal Electric, the village-run utility, requires a Certificate of Compliance before energizing.",
      "Third-party inspection agencies (NYEIA explicitly; others as confirmed by the village) perform the electrical inspection.",
      "For addresses outside the village limits in the Town of Riga, the Riga Building Department handles the permit.",
      "For wage or injury issues on an electrical job, the statewide electrical-residential-ny entry covers state-level channels."
    ]
  },

  counsel: [{
    type: "free",
    name: "Village of Churchville Building Inspector",
    focus: "Electrical permits, Electrician's Report, utility coordination",
    qualifier: "Residents and contractors working inside the Village",
    access: "23 E Buffalo St; phone ext 134; hours Mon-Fri 7 a.m. to 3:30 p.m.",
    outcome: "Permit issuance, Electrician's Report processing, code guidance",
    phone: "(585) 293-3720",
    url: "https://churchville.net/building-inspector-code-enforcement-officer/",
    verified: true, bilingual: false, languages: ["en"]
  }],

  relatedIds: ["electrical-residential-ny"],
  relatedHelpResources: [],
  tags: ["trades", "electrical", "churchville", "monroe county", "NYEIA", "municipal electric", "electrician's report", "service upgrade"],
  sources: ["https://churchville.net/building-inspector-code-enforcement-officer/", "https://www.nyeia.com/power-company-links-churchville-municipal-electric/"],
  lastVerified: "2026-04-23",
  volatility: "moderate", emergencyFlag: false, disclaimer: true, categoryDisclaimer: null
};
