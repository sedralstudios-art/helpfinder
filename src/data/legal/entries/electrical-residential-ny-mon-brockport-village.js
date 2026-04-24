export const ELECTRICAL_RESIDENTIAL_NY_MON_BROCKPORT_VILLAGE = {
  id: "electrical-residential-ny-mon-brockport-village",
  category: "trades",
  tier: "village",
  jurisdiction: "us-ny-monroe-brockport-village",
  authorityType: "local-ordinance",
  status: "active",

  title: { en: "Residential Electrical Work in the Village of Brockport — Third-Party Inspection Required" },

  summary: {
    en: "The Village of Brockport does not issue its own electrician license. Chapter 17 of the Village Code requires a permit for any new electrical work, alteration, or repair and directs that the work be inspected by a village-approved third-party electrical inspection agency. Pool and EV charger installs have a specific third-party inspection call-out in the code. The Village Building and Code Enforcement Office at (585) 637-5300 maintains the current approved agency list and confirms scope for each project."
  },

  whatItMeans: {
    en: "Brockport village delegates electrical inspection to approved third-party agencies rather than running its own inspection program. The arrangement is codified in Chapter 17 of the Village Code. This is separate from the Town of Sweden (which wraps around the village) and the Town of Clarkson (which the village crosses into along its north edge). A property outside village limits with a Brockport mailing address goes through the town, not the village.\n\nWhen a permit is required. Any install, alteration, or repair to lighting, heating, cooling, power, or signal systems requires a permit from the Village Building and Code Enforcement Office. Like-for-like fixture swaps generally do not. Anything that extends a circuit, adds a new circuit, replaces a panel, or touches a grounding or bonding system requires the permit.\n\nSpecific third-party inspection triggers. The village code calls out electrical inspection specifically for swimming pool installations (pool bonding and dedicated circuit) and EV charger installations. Both are high-risk scopes where the Uniform Code and the National Electrical Code (NEC) have detailed bonding and grounding requirements.\n\nApproved inspection agencies. The village keeps a current list at the Building and Code Enforcement Office. Common agencies serving Brockport include the New York Electrical Inspection Agency (NYEIA), Middle Department Inspection Agency (MDIA), NY Atlantic-Inland Inspection Agency, and the NY Board of Fire Underwriters. A call to (585) 637-5300 confirms the current list.\n\nInspection and closeout. After the work is complete, the third-party agency performs the inspection. If the work passes, the agency issues a Certificate of Compliance to the village. The village then closes out the permit. The certificate is the document the regulated utility (RG&E) requires before connecting new service or restoring service after significant panel work.\n\nHomeowner self-work. Brockport's public code does not clearly spell out whether homeowners can pull permits and do their own electrical work on an owner-occupied single-family home. The Building and Code Enforcement Office confirms the current rule for a specific project.\n\nVillage rental registration. Brockport operates a rental registration program driven in part by the SUNY Brockport student-housing population. A landlord replacing a panel or adding new circuits in a registered rental pulls the same electrical permit but the rental registration file is checked at the same time. Deferred electrical maintenance that surfaces during an inspection can trigger a rental re-inspection.\n\nContractor insurance. Electricians working in the village need current general liability insurance and workers' compensation coverage under Workers' Compensation Law 10.\n\nState protections. Wage theft protections (Labor Law 191 and 193), the Scaffold Law for elevated work (Labor Law 240 and 241(6)), mechanic's liens (Lien Law 3 and 10), and General Business Law 349 for deceptive home-improvement practices apply in Brockport village as statewide. The electrical-residential-ny entry covers those layers."
  },

  example: {
    en: "A Brockport village homeowner wants to install an in-ground pool. The village code requires a building permit and a third-party electrical inspection for the pool bonding and dedicated circuit. The homeowner files the permit, picks NYEIA as the inspection agency, and NYEIA inspects the bonding and circuit work. The agency issues a Certificate of Compliance to the village, and the village closes out the permit."
  },

  whoQualifies: {
    en: [
      "A property owner or electrician doing residential electrical work inside the Village of Brockport.",
      "A homeowner planning a pool or EV charger install, which both trigger the specific third-party inspection call-out in Chapter 17.",
      "A property owner with a Brockport, NY 14420 mailing address who is confirming whether the parcel sits in village limits or in Sweden or Clarkson.",
      "An electrician new to the village who needs to coordinate with an approved inspection agency."
    ]
  },

  yourRights: {
    en: [
      "A property owner has the right to pick from the village's approved list of electrical inspection agencies.",
      "A property owner has the right to clear guidance from the Building and Code Enforcement Office on permit scope.",
      "A property owner has the right to a clear answer on jurisdiction — Brockport village, Sweden, or Clarkson — for a specific address.",
      "State worker protections — wage, safety, injury — apply in Brockport village as statewide.",
      "A property owner has the right to dispute a deceptive electrical contractor under General Business Law 349."
    ]
  },

  legalOptions: {
    en: [
      "The Village Building and Code Enforcement Office at (585) 637-5300 handles electrical permits and maintains the approved inspection agency list.",
      "Chapter 17 of the Village Code sets electrical standards, with specific call-outs for pool and EV charger inspection.",
      "Third-party inspection agencies issue the Certificate of Compliance; the village closes out the permit after the certificate is received.",
      "For addresses outside village limits, the Town of Sweden or Town of Clarkson building office handles the permit.",
      "For wage or injury issues on an electrical job, the statewide electrical-residential-ny entry covers state-level channels."
    ]
  },

  counsel: [{
    type: "free",
    name: "Village of Brockport Building and Code Enforcement",
    focus: "Electrical permits, approved agency list, code compliance",
    qualifier: "Residents and electricians working inside the Village",
    access: "127 Main Street; phone; hours M-F 8:30am-4:30pm",
    outcome: "Permit issuance, agency list, code guidance",
    phone: "(585) 637-5300",
    url: "https://brockportny.org/building-code/",
    verified: true, bilingual: false, languages: ["en"]
  }],

  relatedIds: ["electrical-residential-ny", "electrical-residential-ny-mon-sweden-town"],
  relatedHelpResources: [],
  tags: ["trades", "electrical", "brockport", "monroe county", "village ordinance", "EV charger", "pool"],
  sources: ["https://brockportny.org/building-code/", "https://ecode360.com/BR0227"],
  lastVerified: "2026-04-23",
  volatility: "moderate", emergencyFlag: false, disclaimer: true, categoryDisclaimer: null
};
