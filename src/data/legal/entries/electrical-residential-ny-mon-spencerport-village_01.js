// LGLW6-D_electrical-residential-ny-mon-spencerport-village_01.js

export const entry = {
  id: "electrical-residential-ny-mon-spencerport-village",
  category: "trades",
  tier: "village",
  jurisdiction: "us-ny-monroe-spencerport-village",
  authorityType: "local-ordinance",
  status: "active",

  title: { en: "Electrical work in the Village of Spencerport: what the village requires" },

  summary: {
    en: "IMPORTANT: Electrical permits for Spencerport village properties go through the Town of Ogden Building Department — NOT the village. The village Code Enforcement office only handles property-maintenance issues. Spencerport Municipal Electric is the utility."
  },

  whatItMeans: {
    en: "Spencerport is a village inside the Town of Ogden. The village does NOT run its own electrical permit process. All electrical permits for Spencerport addresses go to the Town of Ogden Building Department — (585) 617-6195.\n\nThe village's own Code Enforcement office handles only property maintenance (junk vehicles, signs, refuse, unkempt properties). If you call the village with a building or electrical question, they'll refer you to Ogden.\n\nSpencerport Municipal Electric is the village-run utility that provides power. They're not a permitting authority. Their superintendent is Keith Bezon — (585) 352-6864. They can help coordinate service changes once your permit and inspection are complete.\n\nOgden's approved third-party Electrical Inspection Agencies apply to Spencerport work. Call Ogden to get the current list."
  },

  example: {
    en: "A Spencerport village resident wants to upgrade her electrical service. She calls the village and is told electrical permits go to Ogden. She files the permit with Ogden, picks an approved inspection agency from Ogden's list, and her electrician does the work. After the agency issues the Certificate of Compliance, Spencerport Municipal Electric reconnects the upgraded service."
  },

  whoQualifies: {
    en: [
      "Property owners and contractors doing electrical work inside the Village of Spencerport (use Ogden)",
      "Electricians with liability insurance and workers comp",
      "Homeowners — call the Town of Ogden Building Department to confirm homeowner electrical rules"
    ]
  },

  yourRights: {
    en: [
      "The right to know the permit actually goes to Ogden, not the village",
      "The right to clear guidance from the Ogden Building Department",
      "State worker protections (wage, safety, injury) still apply here"
    ]
  },

  legalOptions: {
    en: [
      "The Town of Ogden Building Department handles ALL electrical permits for Spencerport properties",
      "Spencerport Municipal Electric is the utility — they connect/disconnect service based on the Certificate of Compliance",
      "The Village Code Enforcement office handles ONLY property-maintenance issues, not electrical"
    ]
  },

  counsel: [
    {
      type: "free",
      name: "Town of Ogden Building Department (handles Spencerport permits)",
      focus: "Electrical permits, approved agency list, code compliance",
      qualifier: "Open to residents and contractors in Spencerport",
      access: "Phone; M-F 8am-4pm",
      outcome: "Permit issuance, agency coordination, code guidance",
      phone: "585-617-6195",
      url: "https://ogdenny.gov/building-department/",
      verified: true, bilingual: false, languages: ["en"]
    },
    {
      type: "free",
      name: "Spencerport Municipal Electric",
      focus: "Utility service connect/disconnect after inspection",
      qualifier: "Village customers",
      access: "Phone",
      outcome: "Service energizing after Certificate of Compliance",
      phone: "585-352-6864",
      url: "https://spencerport.gov/",
      verified: true, bilingual: false, languages: ["en"]
    }
  ],

  relatedIds: ["electrical-residential-ny", "electrical-residential-ny-mon-ogden-town"],
  relatedHelpResources: [],
  tags: ["trades", "electrical", "spencerport", "monroe county", "ogden", "municipal electric", "delegated permits", "village ordinance"],
  sources: ["https://spencerport.gov/code-enforcement/", "https://ogdenny.gov/building-department/"],
  lastVerified: "2026-04-14",
  volatility: "moderate", emergencyFlag: false, disclaimer: true, categoryDisclaimer: null
};
