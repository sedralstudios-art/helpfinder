// LGLW6-D_electrical-residential-ny-mon-mendon-town_01.js

export const entry = {
  id: "electrical-residential-ny-mon-mendon-town",
  category: "trades",
  tier: "town",
  jurisdiction: "us-ny-monroe-mendon-town",
  authorityType: "local-ordinance",
  status: "active",

  title: { en: "Electrical work in the Town of Mendon: what the town requires" },

  summary: {
    en: "Mendon's Chapter 134 requires filing an electrical inspection application before starting work. The town deputizes any qualified inspector the town considers qualified — no fixed list in the code. Commonwealth is local (Mendon) and likely accepted. Village of Honeoye Falls is inside Mendon but has its own code office."
  },

  whatItMeans: {
    en: "Mendon's Building Department issues a separate electrical permit as one of five permit types (zoning, building, electrical, plumbing, gas).\n\nChapter 134 of the town code says it is a violation to install or alter electrical wiring until an inspection application is filed with a qualified electrical inspector or the Code Enforcement Officer.\n\nMendon's code takes a flexible approach — instead of naming a fixed list of agencies, the code deputizes the CEO and \"each electrical inspector as the Town may deem qualified.\" In practice Commonwealth (based in Mendon — their address is 1355 Pittsford-Mendon Rd), NYEIA, and MDIA are the active agencies. Call (585) 624-6066 to confirm.\n\nThe town doesn't license electricians. Homeowner self-work isn't explicitly addressed — Chapter 134 just requires the inspection, regardless of who does the work.\n\nThe approved inspector issues the electrical Certificate of Compliance. A copy goes to the town CEO.\n\nIMPORTANT: The Village of Honeoye Falls is inside Mendon but has its own Code Enforcement Officer. For village-limit addresses, use the village."
  },

  example: {
    en: "A Mendon homeowner (outside Honeoye Falls village) wants to add a hot tub. He files an electrical permit with Mendon and an inspection application with Commonwealth (they're right down the road). His electrician installs the dedicated circuit and bonding. Commonwealth inspects and issues the Certificate of Compliance. A copy goes to the Mendon CEO. The town closes the permit."
  },

  whoQualifies: {
    en: [
      "Property owners and contractors doing electrical work in Mendon (outside Honeoye Falls village)",
      "Electricians with liability insurance and workers comp",
      "Homeowners — call the Building Department to confirm homeowner electrical rules"
    ]
  },

  yourRights: {
    en: [
      "The right to pick a qualified agency (Commonwealth, NYEIA, MDIA in practice)",
      "The right to clear guidance from the Building Department",
      "The right to know which jurisdiction (Mendon vs Honeoye Falls village) your address is in",
      "State worker protections (wage, safety, injury) still apply here"
    ]
  },

  legalOptions: {
    en: [
      "The Mendon Building Department handles electrical permits (separate permit type)",
      "Chapter 134 requires filing with a qualified inspector before starting",
      "The approved inspector issues the electrical Certificate of Compliance; a copy goes to the town CEO"
    ]
  },

  counsel: [{
    type: "free",
    name: "Town of Mendon Building Department",
    focus: "Electrical permits, approved agency questions, code compliance",
    qualifier: "Open to residents and contractors in Mendon (outside Honeoye Falls village)",
    access: "16 West Main St, First Floor Room B; phone; hours M-Th 8am-4pm, F 8am-1pm",
    outcome: "Permit issuance, agency coordination, code guidance",
    phone: "585-624-6066",
    url: "https://townofmendonny.gov/departments/building/",
    verified: true, bilingual: false, languages: ["en"]
  }],

  relatedIds: ["electrical-residential-ny", "electrical-residential-ny-mon-honeoye-falls-village"],
  relatedHelpResources: [],
  tags: ["trades", "electrical", "mendon", "monroe county", "Commonwealth", "chapter 134", "town ordinance", "village boundary"],
  sources: ["https://townofmendonny.gov/departments/building/", "https://ecode360.com/29673183"],
  lastVerified: "2026-04-14",
  volatility: "moderate", emergencyFlag: false, disclaimer: true, categoryDisclaimer: null
};
