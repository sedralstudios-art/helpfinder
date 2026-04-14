// LGLW6-D_electrical-residential-ny-mon-brighton-town_01.js
// Town of Brighton electrical entry. No town electrician licensing. Three
// approved inspection agencies: NYEIA, MDIA, Commonwealth.
// Source: brightonny.gov + eCode360 Ch 62 (Electrical Standards).

export const entry = {
  id: "electrical-residential-ny-mon-brighton-town",
  category: "trades",
  tier: "town",
  jurisdiction: "us-ny-monroe-brighton-town",
  status: "active",

  title: {
    en: "Electrical work in the Town of Brighton: what the town requires"
  },

  summary: {
    en: "Brighton doesn't license electricians. Instead, the town approves three inspection agencies: NYEIA, Middle Department, and Commonwealth. The electrician (or homeowner) picks an agency, does the work, and the agency inspects. The agency reports to the town Commissioner, who then issues the Certificate of Compliance."
  },

  whatItMeans: {
    en: "Brighton doesn't issue its own electrician license. Electrical standards are in Chapter 62 of the town code.\n\nBefore starting ANY electrical install, alteration, or repair (lighting, heating, cooling, power, signal systems), a written application has to be filed with the electrical inspector. The work has to meet the state building code (NYS Uniform Fire Prevention and Building Code).\n\nBrighton has THREE approved Electrical Inspection Agencies. Pick one:\n\n1) New York Electrical Inspection Agency (NYEIA) — (585) 436-4460\n2) Middle Department Inspection Agency (MDIA) — (585) 454-5191\n3) Commonwealth Electrical Inspection Service — (585) 624-2380\n\nNo electricity can be turned on until the inspector gives a temporary certificate, or the town's Commissioner of Public Works (or designee) issues an occupancy permit.\n\nHomeowner self-work on electrical in Brighton isn't spelled out clearly in the public code. Call the Building Department at (585) 784-5250 to confirm before doing your own work."
  },

  example: {
    en: "A Brighton homeowner wants to add a 240V outlet in the garage for an EV charger. She fills out a written application with the town and picks NYEIA as her inspection agency. A licensed electrician (or she herself, if the town allows) does the work. NYEIA inspects, writes an approval report, and the town's Commissioner of Public Works issues the Certificate of Compliance. Only then can the circuit be energized."
  },

  whoQualifies: {
    en: [
      "Property owners and contractors doing electrical work inside the Town of Brighton",
      "Electricians with liability insurance and workers comp",
      "Homeowners — call the Building Department to confirm homeowner electrical rules"
    ]
  },

  yourRights: {
    en: [
      "The right to pick from three approved inspection agencies (NYEIA, MDIA, Commonwealth)",
      "The right to clear guidance from the Building and Planning Department before starting work",
      "The right to a temporary certificate to energize work that has passed inspection",
      "State worker protections (wage, safety, injury) still apply here"
    ]
  },

  legalOptions: {
    en: [
      "The Brighton Building and Planning Department handles electrical permits and coordinates with approved agencies",
      "Chapter 62 of the town code sets the electrical standards",
      "The three approved inspection agencies inspect work and report to the town Commissioner of Public Works",
      "The Commissioner (or designee) issues the Certificate of Compliance based on the agency's approval"
    ]
  },

  counsel: [
    {
      type: "free",
      name: "Town of Brighton Building and Planning Department",
      focus: "Electrical permits, approved inspection agency coordination, code compliance",
      qualifier: "Open to residents, property owners, and electricians working inside the Town",
      access: "Temporarily at 680 Westfall Road during Town Hall renovation; phone",
      outcome: "Permit issuance, agency coordination, code guidance",
      phone: "585-784-5250",
      url: "https://www.brightonny.gov/595/Building-and-Planning",
      verified: true,
      bilingual: false,
      languages: ["en"]
    }
  ],

  relatedIds: ["electrical-residential-ny"],
  relatedHelpResources: [],

  tags: [
    "trades", "electrical", "electrician", "brighton",
    "monroe county", "NYEIA", "MDIA", "Commonwealth",
    "inspection agency", "chapter 62", "EV charger",
    "service panel", "town ordinance"
  ],

  sources: [
    "https://www.brightonny.gov/595/Building-and-Planning",
    "https://ecode360.com/9443921",
    "https://ecode360.com/9444042"
  ],

  lastVerified: "2026-04-14",
  volatility: "moderate",
  emergencyFlag: false,
  disclaimer: true,
  categoryDisclaimer: null
};
