// LGLW6-D_electrical-residential-ny-mon-chili-town_01.js

export const entry = {
  id: "electrical-residential-ny-mon-chili-town",
  category: "trades",
  tier: "town",
  jurisdiction: "us-ny-monroe-chili-town",
  authorityType: "local-ordinance",
  status: "active",

  title: { en: "Electrical work in the Town of Chili: what the town requires" },

  summary: {
    en: "Chili has a unique setup. The town doesn't license electricians, but it DOES license the Electrical Inspection Agencies that operate inside Chili. Only agencies holding an annual Chili license can inspect electrical work here. Chapter 248 of the town code covers this."
  },

  whatItMeans: {
    en: "Chili has a unique electrical rule. The town doesn't license individual electricians, BUT it does license the inspection agencies. Any agency that wants to inspect electrical work in Chili has to hold an annual license from the Chili Building Department. That's Chapter 248 of the town code (adopted 1985).\n\nBefore starting any electrical wiring, you have to file an application with the Electrical Inspector. You pick from the agencies that currently hold a Chili license. Call the Building Department at (585) 889-6143 to get the current licensed list.\n\nElectricity can't be turned on until the inspector issues a temporary certificate. The final Certificate of Compliance then goes to the town CEO, who issues the occupancy permit.\n\nChili also licenses plumbers (Chapter on plumbing licenses) — so Chili is unusual for running its own licensing program for both trades. Building permits are separate and go through CloudPermit.\n\nHomeowner self-work on electrical isn't explicitly addressed in the code sections we can read. Call the Building Department to confirm before doing DIY electrical."
  },

  example: {
    en: "A Chili homeowner wants to install an EV charger. She calls the Chili Building Department to ask which inspection agencies currently hold a Chili license. The town gives her the list — she picks one. Her electrician files a permit and does the install. The licensed agency inspects. Only after the agency's final certificate does the town issue the occupancy sign-off."
  },

  whoQualifies: {
    en: [
      "Property owners and contractors doing electrical work inside the Town of Chili",
      "Electricians using a Chili-licensed Inspection Agency",
      "Homeowners — call the Building Department to confirm homeowner electrical rules"
    ]
  },

  yourRights: {
    en: [
      "The right to pick from Chili-licensed Electrical Inspection Agencies",
      "The right to clear guidance from the Building Department",
      "State worker protections (wage, safety, injury) still apply here"
    ]
  },

  legalOptions: {
    en: [
      "The Chili Building Department handles agency licensing (Chapter 248), electrical permits, and occupancy signoffs",
      "Only agencies currently holding a Chili license can inspect electrical work in Chili",
      "Building permits are separate and filed through CloudPermit"
    ]
  },

  counsel: [{
    type: "free",
    name: "Town of Chili Building Department",
    focus: "Electrical inspection agency licensing, permits, code compliance",
    qualifier: "Open to residents and contractors working in Chili",
    access: "3333 Chili Ave; phone; email building@chiliny.gov",
    outcome: "Licensed-agency list, permit issuance, code guidance",
    phone: "585-889-6143",
    url: "https://www.chiliny.gov/202/Building-Department",
    verified: true, bilingual: false, languages: ["en"]
  }],

  relatedIds: ["electrical-residential-ny"],
  relatedHelpResources: [],
  tags: ["trades", "electrical", "chili", "monroe county", "inspection agency license", "chapter 248", "CloudPermit", "town ordinance"],
  sources: ["https://www.chiliny.gov/202/Building-Department", "https://ecode360.com/12423687"],
  lastVerified: "2026-04-14",
  volatility: "moderate", emergencyFlag: false, disclaimer: true, categoryDisclaimer: null
};
