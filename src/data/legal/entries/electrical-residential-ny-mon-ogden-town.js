export const ELECTRICAL_RESIDENTIAL_NY_MON_OGDEN_TOWN = {
  id: "electrical-residential-ny-mon-ogden-town",
  category: "trades",
  tier: "town",
  jurisdiction: "us-ny-monroe-ogden-town",
  authorityType: "local-ordinance",
  status: "active",

  title: { en: "Residential Electrical Work in the Town of Ogden — Permits, Approved Inspection Agencies, and Spencerport Village Delegation" },

  summary: {
    en: "The Town of Ogden Building Department handles electrical permits for the town and, by delegation, for the Village of Spencerport. Ogden inspectors do not perform electrical inspections themselves — the work is done by approved third-party agencies. Ogden does not license electricians, though it does license plumbers. Homeowner self-work rules are not fully published; calling the Building Department before starting avoids surprises. Inspections typically require 48 hours of notice. The Building Department at (585) 617-6195 keeps the current approved-agency list."
  },

  whatItMeans: {
    en: "Ogden handles the electrical permit side through the Building Department and contracts the inspection side to approved third-party agencies. The combination is common in Monroe County.\n\nPermit triggers. Typical permit-triggering projects: a new service panel or subpanel, new circuits, EV chargers (240V Level 2), generator transfer switches, hot tubs, pool bonding, mini-split heat pumps, and finished basements. Small like-for-like repairs generally do not need a permit.\n\nApproved inspection agencies. Ogden keeps a current list of approved third-party agencies. Typical agencies that serve the area include NYEIA, Commonwealth, MDIA, and NY Board of Fire Underwriters. The specific list can change; calling (585) 617-6195 confirms which agencies are currently accepted.\n\nNo electrician license. Ogden does not license electricians. Contractors need current general liability and workers' compensation insurance, which the town verifies through a certificate of insurance on file.\n\nPlumbers are licensed. Ogden runs a separate plumber licensing program, which is unusual for Monroe County. A contractor working both trades has to track both programs.\n\nSpencerport village delegation. Spencerport sits inside Ogden and has delegated its building and electrical permitting entirely to Ogden. A property inside Spencerport village files with Ogden, not with the village. The Spencerport village Code Enforcement office handles only property maintenance issues — junk vehicles, signs, and refuse. Every permit for electrical, plumbing, HVAC, and building work inside Spencerport goes through Ogden. The electrical-residential-ny-mon-spencerport-village entry covers the village side.\n\nSpencerport Municipal Electric. The village operates its own electric utility. Service-level changes (new service, service upgrade, meter relocation) inside Spencerport require coordination between Ogden Building Department, the approved inspection agency, and Spencerport Municipal Electric. The utility handles disconnect and reconnect once the Certificate of Compliance is issued.\n\nFor Ogden addresses outside the village, RG&E typically serves the utility side. The workflow is the same permit-then-inspect-then-utility sequence, just with RG&E handling the disconnect and reconnect.\n\nHomeowner self-work. Whether a homeowner can perform electrical work on a home they own and occupy is not fully spelled out in the posted code. The default state rule permits it with a permit and inspection, but the Building Department has the final word for Ogden-specific practice.\n\nFee schedule. Ogden publishes a fee schedule; calling the Building Department confirms the current amounts before filing.\n\nInspection notice. Inspections typically require 48 hours of notice. Scheduling earlier than the planned work-completion date avoids delays.\n\nFailed inspection or unpermitted work. The Town Code Enforcement Officer can require corrections, tear-out, or a full redo when work was done without a permit or does not meet code.\n\nState-level rules. Wage theft protections (Labor Law 191 and 193), the Scaffold Law (LL 240 and 241(6)), mechanic's liens for unpaid work (Lien Law 3 and 10), and General Business Law 349 for deceptive contractors apply in Ogden as they do statewide. The electrical-residential-ny entry covers those layers."
  },

  example: {
    en: "An electrician doing work inside Spencerport village goes to the Town of Ogden Building Department for the electrical permit — not to the village hall. He picks an approved inspection agency from Ogden's list. The agency inspects the work and issues the Certificate of Compliance. Ogden closes the permit. Spencerport Municipal Electric schedules the disconnect and reconnect once the CoC is on file."
  },

  whoQualifies: {
    en: [
      "A property owner or contractor doing electrical work inside the Town of Ogden or the Village of Spencerport (Spencerport goes through Ogden).",
      "An electrician with general liability and workers' compensation insurance.",
      "A homeowner considering self-work; calling the Building Department confirms the rules."
    ]
  },

  yourRights: {
    en: [
      "A property owner inside Spencerport village has the right to know the permit goes through Ogden, not the village.",
      "A property owner has the right to the current approved-agency list from the Building Department.",
      "A permit applicant has the right to reasonable inspection scheduling with adequate notice.",
      "State worker protections — wage, safety, injury — apply in Ogden as they do statewide.",
      "A property owner has the right to dispute a deceptive contractor under General Business Law 349."
    ]
  },

  legalOptions: {
    en: [
      "The Ogden Building Department handles all electrical permits for Ogden and Spencerport village at (585) 617-6195.",
      "Third-party inspection agencies from Ogden's approved list perform the electrical inspection.",
      "Inspections typically require 48 hours of notice.",
      "For properties inside Spencerport village, see the electrical-residential-ny-mon-spencerport-village entry for the full village-plus-Ogden workflow.",
      "For wage or injury issues on an electrical job, the statewide electrical-residential-ny entry covers state-level channels."
    ]
  },

  counsel: [{
    type: "free",
    name: "Town of Ogden Building Department",
    focus: "Electrical permits for Ogden and Spencerport, approved agency list",
    qualifier: "Residents and contractors in Ogden or Spencerport",
    access: "Phone; hours Mon-Fri 8 a.m. to 4 p.m.",
    outcome: "Permit issuance, agency coordination, code guidance",
    phone: "(585) 617-6195",
    url: "https://ogdenny.gov/building-department/permits-guidelines/",
    verified: true, bilingual: false, languages: ["en"]
  }],

  relatedIds: ["electrical-residential-ny", "electrical-residential-ny-mon-spencerport-village"],
  relatedHelpResources: [],
  tags: ["trades", "electrical", "ogden", "spencerport", "monroe county", "delegated permits", "town ordinance"],
  sources: ["https://ogdenny.gov/building-department/permits-guidelines/", "https://ogdenny.gov/building-department/"],
  lastVerified: "2026-04-23",
  volatility: "moderate", emergencyFlag: false, disclaimer: true, categoryDisclaimer: null
};
