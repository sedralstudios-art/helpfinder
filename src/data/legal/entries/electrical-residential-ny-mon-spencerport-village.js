export const ELECTRICAL_RESIDENTIAL_NY_MON_SPENCERPORT_VILLAGE = {
  id: "electrical-residential-ny-mon-spencerport-village",
  category: "trades",
  tier: "village",
  jurisdiction: "us-ny-monroe-spencerport-village",
  authorityType: "local-ordinance",
  status: "active",

  title: { en: "Residential Electrical Work in the Village of Spencerport — Permits Go Through the Town of Ogden" },

  summary: {
    en: "Electrical permits for Spencerport village addresses go through the Town of Ogden Building Department, not the village. The village Code Enforcement office handles only property maintenance issues — junk vehicles, signs, refuse, and unkempt property conditions. Spencerport Municipal Electric is the village-run utility that supplies power; it connects and disconnects service after the Town of Ogden issues the Certificate of Compliance. Ogden's list of approved third-party Electrical Inspection Agencies governs the inspection."
  },

  whatItMeans: {
    en: "Spencerport village sits inside the Town of Ogden. Unlike most villages in Monroe County, Spencerport does not run its own electrical permit process. The permit goes to Ogden.\n\nOgden handles the permit. The Town of Ogden Building Department at (585) 617-6195 is the permit authority for every Spencerport address. Calling the village with a building or electrical question usually ends with a referral to Ogden. Filing directly with Ogden saves a step.\n\nApproved inspection agencies. Ogden uses third-party Electrical Inspection Agencies the same way most Monroe County towns do. The current approved list is available from the Ogden Building Department. Typical agencies serving the area include Commonwealth, MDIA, NYEIA, and NY Board of Fire Underwriters, though the specific list can change — the town office has the current names.\n\nVillage Code Enforcement — limited scope. The Spencerport village Code Enforcement office only handles property maintenance issues. Junk vehicles, signage, refuse, and unkempt property conditions go there. Electrical, plumbing, HVAC, building, and structural work do not. A property owner unsure which office handles an issue can call Spencerport village first; they will redirect to Ogden when appropriate.\n\nSpencerport Municipal Electric. The village operates its own municipal electric utility — Spencerport Municipal Electric — that supplies power to village customers. The utility is not a permitting authority. It handles service connects and disconnects once the Town of Ogden has issued the Certificate of Compliance. The superintendent is Keith Bezon at (585) 352-6864.\n\nService change workflow. For a service-level change (new service entrance, service upgrade, new meter), the sequence is: (1) apply for the permit with the Town of Ogden; (2) schedule work through a licensed contractor or as a homeowner; (3) schedule the inspection with an Ogden-approved agency; (4) once the agency issues the Certificate of Compliance, coordinate with Spencerport Municipal Electric for the disconnect and reconnect. Running these steps in order avoids having an inspection complete but no utility service.\n\nPermit triggers. Typical permit-triggering projects: a new service panel or subpanel, new circuits, EV chargers (240V Level 2), generator transfer switches, hot tubs, pool bonding, and finished basements. Small like-for-like repairs (swapping a receptacle) generally do not need a permit.\n\nHomeowner self-work. Whether a homeowner can do their own electrical work in Spencerport follows Ogden's rules. The Ogden Building Department confirms homeowner rules for a specific project. The electrical-residential-ny-mon-ogden-town entry covers the town's rules in detail.\n\nState floor. The statewide electrical-residential-ny entry covers the worker protections and consumer rules — Scaffold Law, wage theft, mechanic's liens, and General Business Law 349 for deceptive contractors. Those apply in Spencerport as they do statewide."
  },

  example: {
    en: "A Spencerport village resident wants to upgrade her electrical service. She calls the village and is told electrical permits go through Ogden. She files the permit with the Ogden Building Department, picks an approved inspection agency from Ogden's list, and her electrician does the work. After the agency issues the Certificate of Compliance, Spencerport Municipal Electric schedules the service disconnect and reconnect."
  },

  whoQualifies: {
    en: [
      "A property owner or contractor doing electrical work inside the Village of Spencerport — the permit goes through Ogden.",
      "An electrician with general liability insurance and workers' compensation coverage.",
      "A homeowner considering self-work — calling the Town of Ogden Building Department confirms the rules."
    ]
  },

  yourRights: {
    en: [
      "A property owner has the right to know the permit goes through Ogden, not the village.",
      "A property owner has the right to clear guidance from the Ogden Building Department.",
      "A property owner has the right to a service reconnect through Spencerport Municipal Electric once the CoC is issued.",
      "State worker protections — wage, safety, injury — apply in Spencerport as they do statewide.",
      "A property owner has the right to dispute a deceptive contractor under General Business Law 349."
    ]
  },

  legalOptions: {
    en: [
      "The Town of Ogden Building Department handles all electrical permits for Spencerport addresses at (585) 617-6195.",
      "Spencerport Municipal Electric at (585) 352-6864 handles utility service connect and disconnect based on the Certificate of Compliance.",
      "The Spencerport village Code Enforcement office handles only property maintenance issues, not electrical.",
      "For a service-level change, the sequence is: permit (Ogden), inspection (approved agency), then utility schedule (Spencerport Municipal Electric).",
      "For wage or injury issues on an electrical job, the statewide electrical-residential-ny entry covers state-level options."
    ]
  },

  counsel: [
    {
      type: "free",
      name: "Town of Ogden Building Department (handles Spencerport permits)",
      focus: "Electrical permits, approved agency list, code compliance",
      qualifier: "Residents and contractors in Spencerport",
      access: "Phone; Mon-Fri 8 a.m. to 4 p.m.",
      outcome: "Permit issuance, agency coordination, code guidance",
      phone: "(585) 617-6195",
      url: "https://ogdenny.gov/building-department/",
      verified: true, bilingual: false, languages: ["en"]
    },
    {
      type: "free",
      name: "Spencerport Municipal Electric",
      focus: "Utility service connect and disconnect after inspection",
      qualifier: "Village customers",
      access: "Phone",
      outcome: "Service energizing after Certificate of Compliance",
      phone: "(585) 352-6864",
      url: "https://spencerport.gov/",
      verified: true, bilingual: false, languages: ["en"]
    }
  ],

  relatedIds: ["electrical-residential-ny", "electrical-residential-ny-mon-ogden-town"],
  relatedHelpResources: [],
  tags: ["trades", "electrical", "spencerport", "monroe county", "ogden", "municipal electric", "delegated permits", "village ordinance"],
  sources: ["https://spencerport.gov/code-enforcement/", "https://ogdenny.gov/building-department/"],
  lastVerified: "2026-04-22",
  volatility: "moderate", emergencyFlag: false, disclaimer: true, categoryDisclaimer: null
};
