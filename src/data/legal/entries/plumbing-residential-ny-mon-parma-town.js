export const PLUMBING_RESIDENTIAL_NY_MON_PARMA_TOWN = {
  id: "plumbing-residential-ny-mon-parma-town",
  category: "trades",
  tier: "town",
  jurisdiction: "us-ny-monroe-parma-town",
  authorityType: "local-ordinance",
  status: "active",

  title: { en: "Residential Plumbing in the Town of Parma — General Building Permit, Village Boundary, and Fee Schedule" },

  summary: {
    en: "The Town of Parma handles plumbing under the general building permit rather than a separate plumbing permit. The Village of Hilton sits inside Parma and runs its own Building Department. A property's jurisdiction depends on which side of the village line it sits on. Parma does not maintain a separate plumber licensing chapter — plumbers need liability and workers' compensation insurance. A fee schedule is posted online but is worth confirming on the phone before filing."
  },

  whatItMeans: {
    en: "Parma's Building Department processes residential plumbing through the general building permit track. The state Uniform Fire Prevention and Building Code applies across the board.\n\nPermit triggers. Plumbing work that generally requires a permit: water heater replacement, new fixtures (sinks, toilets, tubs, showers), sewer laterals, water service lines, adding a bathroom, and changes to drain-waste-vent or water supply piping. The town code notes that certain 'listed portable' plumbing appliances may be exempt — the building office has the current exemption list.\n\nPlumber registration. Parma does not run a separate plumber licensing chapter the way some neighboring towns do (Brighton's Chapter 215 is an example). A contractor performing plumbing work still needs current general liability insurance and workers' compensation coverage on file. Whether Parma accepts a City of Rochester Examining Board of Plumbers certificate as a qualification is not published in the code — calling the building office before filing is the reliable way to confirm.\n\nHomeowner self-work. Whether a homeowner can perform plumbing work on their own single-family home in Parma is not explicitly spelled out on the town's public page. The default state rule generally permits homeowner work with a permit and inspection on an owner-occupied single-family home, but the town office has the final word for Parma-specific practice.\n\nInspection. A Parma town inspector performs the plumbing inspection as part of the general building inspection process. Inspections typically occur at rough-in (before walls are closed up) and at final.\n\nFees. The town has a published permit fee schedule (the current PDF dates from January 2023). Plumbing-specific fees are part of that schedule. Fees change — confirming the current amount by phone before filing avoids surprises.\n\nGas piping. Gas line work from the meter to an appliance is plumbing work. An HVAC tech can connect the appliance itself, but the gas pipe to the appliance goes with the plumbing permit. This parallels the treatment in Brighton and Greece.\n\nVillage of Hilton boundary. The Village of Hilton is inside the Town of Parma but runs its own code enforcement office. Addresses inside the village go through Hilton's Building Department, not Parma's. A property's mailing address (Hilton, NY 14468) does not always match its jurisdiction — the tax assessor or the town assessor confirms which office handles a specific address. The parallel plumbing-residential-ny-mon-hilton-village entry covers the village rules.\n\nFailed inspection or unpermitted work. The town Code Enforcement Officer can require corrections, tear-out, or a full redo when work was done without a permit or does not meet code. A house that fails a plumbing inspection usually cannot pass a final inspection or certificate of occupancy check until the plumbing is brought into compliance.\n\nState-level rules. Wage theft protections (Labor Law 191 and 193), the Scaffold Law for elevated work (LL 240 and 241(6)), mechanic's liens for unpaid work (Lien Law 3 and 10), and General Business Law 349 for deceptive contractors apply in Parma as they do statewide. The plumbing-residential-ny entry covers those layers."
  },

  example: {
    en: "A plumber in Parma (outside Hilton village) needs to run new drain lines for a kitchen remodel. She files a general building permit with Parma that covers the plumbing work. Across the street in Hilton village, her colleague is doing similar work — but for that address, the permit goes to the Hilton village Building Department, not Parma. She confirms the current fee by phone before filing, then schedules rough-in and final inspections with the Parma inspector."
  },

  whoQualifies: {
    en: [
      "A property owner or contractor doing plumbing work inside the Town of Parma, outside Hilton village limits.",
      "A plumber with liability insurance and workers' compensation coverage.",
      "A homeowner considering self-work — calling the Building Department confirms whether the work qualifies under Parma's rules."
    ]
  },

  yourRights: {
    en: [
      "A property owner has the right to clear guidance from the Building Department on what work needs a permit.",
      "A permit applicant has the right to the published fee schedule.",
      "A property owner has the right to a clear answer on which jurisdiction (Parma or Hilton village) covers the address.",
      "State worker protections — wage, safety, injury — apply in Parma as they do statewide.",
      "A property owner has the right to dispute a deceptive plumbing contractor under General Business Law 349."
    ]
  },

  legalOptions: {
    en: [
      "The Parma Building Department handles plumbing permits, inspections, and code compliance for Parma outside Hilton village.",
      "Plumbing work follows the state Uniform Fire Prevention and Building Code, including the NY State Plumbing Code.",
      "The Parma fee schedule covers plumbing fees; confirming the current amount before filing avoids surprises.",
      "The Hilton village Building Department handles addresses inside Hilton village limits; the plumbing-residential-ny-mon-hilton-village entry covers those rules.",
      "For wage or injury issues on a plumbing job, the statewide plumbing-residential-ny entry covers state-level options (NYS Department of Labor, OSHA, Workers' Compensation Board)."
    ]
  },

  counsel: [
    {
      type: "free",
      name: "Town of Parma Building Department",
      focus: "Plumbing permits, inspections, code compliance",
      qualifier: "Residents and contractors working in Parma outside Hilton village",
      access: "Phone; email building@parmany.org; hours Mon-Fri 8 a.m. to 4 p.m.",
      outcome: "Permit issuance, inspection scheduling, code guidance",
      phone: "(585) 392-9449",
      url: "https://parmany.gov/departments/building/",
      verified: true,
      bilingual: false,
      languages: ["en"]
    }
  ],

  relatedIds: ["plumbing-residential-ny", "plumbing-residential-ny-mon-hilton-village"],
  relatedHelpResources: [],

  tags: [
    "trades", "plumbing", "parma", "monroe county",
    "building permit", "water heater", "village boundary",
    "town ordinance"
  ],

  sources: [
    "https://parmany.gov/departments/building/",
    "https://parmany.gov/pdf/building/Building-Permit-Fees.pdf",
    "https://ecode360.com/8009030"
  ],

  lastVerified: "2026-04-22",
  volatility: "moderate",
  emergencyFlag: false,
  disclaimer: true,
  categoryDisclaimer: null
};
