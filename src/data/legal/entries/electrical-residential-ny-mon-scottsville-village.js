export const ELECTRICAL_RESIDENTIAL_NY_MON_SCOTTSVILLE_VILLAGE = {
  id: "electrical-residential-ny-mon-scottsville-village",
  category: "trades",
  tier: "village",
  jurisdiction: "us-ny-monroe-scottsville-village",
  authorityType: "local-ordinance",
  status: "active",

  title: { en: "Residential Electrical Work in the Village of Scottsville — Approved Inspection Agencies and the NYEIA Exception" },

  summary: {
    en: "Scottsville's approved Electrical Inspection Agency list differs from other Monroe County towns. Five agencies are approved: Commonwealth, NY Board of Fire Underwriters, Genesee Star, NY Atlantic-Inland, and MDIA. NYEIA is not on the list. Scottsville registers plumbing contractors formally but does not register electrical contractors. A homeowner can sign a permit application as their own contractor. Any new or altered electrical work triggers a permit under Village Code 63-11.A. Scottsville sits inside the Town of Wheatland; addresses outside village limits go through the Wheatland town Building Department."
  },

  whatItMeans: {
    en: "Scottsville village runs its own Code Enforcement office and keeps its own list of approved Electrical Inspection Agencies. The list looks similar to neighboring towns at first glance, but one common agency — NYEIA — is missing. That difference trips up contractors who do most of their work elsewhere in Monroe County.\n\nApproved agencies in Scottsville:\n- Commonwealth Electrical Inspection Service at (585) 624-2380\n- NY Board of Fire Underwriters (NYBFU) at (800) 595-9600\n- Genesee Star Agency at (585) 768-6696\n- NY Atlantic-Inland at (607) 753-7118\n- Middle Department Inspection Agency (MDIA) at (518) 273-0861\n\nNYEIA is not on the Scottsville list. A contractor who normally works with NYEIA has to pick a different agency for Scottsville jobs. The village file will reject a NYEIA certificate even if the work is perfect.\n\nContractor registration. Scottsville registers plumbing contractors formally. It does not register electrical contractors. The electrical side is governed by two things: the third-party inspection requirement (one of the five approved agencies) and proof of insurance (workers' comp, general liability, and disability).\n\nHomeowner self-work. A homeowner can sign the permit application as their own contractor. The permit form has both a Homeowner signature line and a Contractor signature line. The homeowner still needs to meet the NY State Uniform Code and schedule the inspection through an approved agency.\n\nPermit triggers. Village Code 63-11.A exempts work that is not structural and does not touch plumbing, electrical, heating, or ventilation. That language means any new or altered electrical work needs a permit — replacing a panel, adding circuits, installing an EV charger, wiring a hot tub, or any service upgrade. Small like-for-like repairs (replacing a receptacle) generally do not need a permit.\n\nInspection flow. The homeowner or contractor picks an approved agency and schedules the inspection. The agency checks the work against the NY State Uniform Fire Prevention and Building Code, which includes the National Electrical Code (NEC / NFPA 70). When the work passes, the agency issues a Certificate of Compliance and sends a copy to the village. Code Enforcement closes the permit once the CoC is on file.\n\nWheatland boundary. Scottsville sits inside the Town of Wheatland. Addresses outside village limits — even when the mailing address is 'Scottsville, NY 14546' — go through the Wheatland town Building Department. The tax assessor or the town assessor confirms which jurisdiction handles a specific address. The electrical-residential-ny-mon-wheatland-town entry covers the town rules.\n\nUtility coordination. For a service-level change (new service entrance, service upgrade), the village and the approved agency coordinate with the utility. RG&E serves most of Scottsville. The disconnect and reconnect schedule has to align with the inspection.\n\nState floor. The statewide electrical-residential-ny entry covers the worker protections and consumer rules that apply on top of Scottsville's local practice — Scaffold Law, wage theft protections, mechanic's liens, and General Business Law 349 for deceptive contractors."
  },

  example: {
    en: "A Scottsville village electrician realizes his usual NYEIA certificate will not work for this job. He picks Commonwealth from the village's approved list. His client fills out the building permit form (the homeowner signs as her own contractor since she owns and occupies the property). Commonwealth inspects the work and issues a Certificate of Compliance. The village Code Enforcement office files the CoC and issues the final certificate."
  },

  whoQualifies: {
    en: [
      "A property owner or contractor doing electrical work inside the Village of Scottsville.",
      "An electrician with general liability, workers' compensation, and disability insurance.",
      "A homeowner signing the permit as their own contractor on a home they own and occupy."
    ]
  },

  yourRights: {
    en: [
      "A property owner has the right to pick from the five approved agencies; NYEIA is not on the Scottsville list.",
      "A homeowner has the right to sign as their own contractor on the permit form.",
      "A property owner has the right to clear guidance from the village Code Enforcement office.",
      "A property owner has the right to a clear answer on which jurisdiction (Scottsville village or Wheatland town) covers the address.",
      "State worker protections — wage, safety, injury — apply in Scottsville as they do statewide.",
      "A property owner has the right to dispute a deceptive contractor under General Business Law 349."
    ]
  },

  legalOptions: {
    en: [
      "The village Code Enforcement office handles electrical permits inside village limits.",
      "Five approved agencies: Commonwealth, NYBFU, Genesee Star, NY Atlantic-Inland, MDIA.",
      "NYEIA is not approved for Scottsville — switching to a Scottsville-approved agency is required.",
      "Addresses outside village limits use the Wheatland town Building Department; the electrical-residential-ny-mon-wheatland-town entry covers those rules.",
      "For wage or injury issues on an electrical job, the statewide electrical-residential-ny entry covers state-level options."
    ]
  },

  counsel: [{
    type: "free",
    name: "Village of Scottsville Code Enforcement",
    focus: "Electrical permits, approved agency list, code compliance",
    qualifier: "Residents and contractors inside the Village",
    access: "22 Main Street, Suite 3; phone; email code@scottsvilleny.org",
    outcome: "Permit issuance, agency coordination, code guidance",
    phone: "(585) 889-6050",
    url: "https://www.scottsvilleny.org/code-enforcement-building-inspector",
    verified: true, bilingual: false, languages: ["en"]
  }],

  relatedIds: ["electrical-residential-ny", "electrical-residential-ny-mon-wheatland-town"],
  relatedHelpResources: [],
  tags: ["trades", "electrical", "scottsville", "monroe county", "Commonwealth", "NYBFU", "Genesee Star", "NY Atlantic-Inland", "MDIA", "unusual list", "village ordinance"],
  sources: ["https://www.scottsvilleny.org/code-enforcement-building-inspector", "https://ecode360.com/12254732"],
  lastVerified: "2026-04-22",
  volatility: "moderate", emergencyFlag: false, disclaimer: true, categoryDisclaimer: null
};
