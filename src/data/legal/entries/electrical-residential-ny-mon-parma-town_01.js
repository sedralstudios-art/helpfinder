// LGLW6-D_electrical-residential-ny-mon-parma-town_01.js

export const entry = {
  id: "electrical-residential-ny-mon-parma-town",
  category: "trades",
  tier: "town",
  jurisdiction: "us-ny-monroe-parma-town",
  authorityType: "local-ordinance",
  status: "active",

  title: { en: "Electrical work in the Town of Parma: what the town requires" },

  summary: {
    en: "Parma handles electrical permits through its Building Department. A third-party inspection agency inspects — NYEIA is confirmed. The Village of Hilton is inside Parma but has its own Building Department. Check which jurisdiction your address falls in before filing."
  },

  whatItMeans: {
    en: "The Parma Building Department issues electrical permits for properties in Parma outside the Village of Hilton. Town inspectors handle building plan review; electrical inspection is done by a third-party agency.\n\nNYEIA is confirmed as an approved inspection agency for Parma. Other agencies (MDIA, Commonwealth) are likely also approved but call (585) 392-9449 to confirm the current list.\n\nParma doesn't license electricians. Whether the town formally accepts a Rochester Examining Board license isn't published.\n\nIMPORTANT: The Village of Hilton is inside Parma but has its own Building Department. For addresses inside the Hilton village limits, use the Hilton village office, not Parma.\n\nFee schedules are online (2023 version). Call to confirm current electrical permit amounts."
  },

  example: {
    en: "A homeowner in Parma (outside Hilton village) wants to add a subpanel for a detached garage. They file an electrical permit with the Parma Building Department. They pick NYEIA as their inspection agency. After the work passes, NYEIA issues the Certificate of Compliance. Parma closes the permit."
  },

  whoQualifies: {
    en: [
      "Property owners and contractors doing electrical work in Parma (outside Hilton village)",
      "Electricians with liability insurance and workers comp",
      "Homeowners — call the Building Department to confirm homeowner electrical rules"
    ]
  },

  yourRights: {
    en: [
      "The right to clear guidance on which jurisdiction (Parma vs Hilton village) your property falls in",
      "The right to pick from the current approved-agency list",
      "State worker protections (wage, safety, injury) still apply here"
    ]
  },

  legalOptions: {
    en: [
      "The Parma Building Department handles electrical permits for Parma outside Hilton village",
      "NYEIA confirmed as approved; other agencies may also be approved",
      "For properties inside Hilton village, use the village Building Department instead"
    ]
  },

  counsel: [{
    type: "free",
    name: "Town of Parma Building Department",
    focus: "Electrical permits, approved agency list, code compliance",
    qualifier: "Open to residents and contractors in Parma (outside Hilton village)",
    access: "1300 Hilton Parma Corners Rd; phone; email building@parmany.org; M-F 8am-4pm",
    outcome: "Permit issuance, agency coordination, code guidance",
    phone: "585-392-9449",
    url: "https://parmany.gov/departments/building/",
    verified: true, bilingual: false, languages: ["en"]
  }],

  relatedIds: ["electrical-residential-ny", "electrical-residential-ny-mon-hilton-village"],
  relatedHelpResources: [],
  tags: ["trades", "electrical", "parma", "monroe county", "NYEIA", "village boundary", "town ordinance"],
  sources: ["https://parmany.gov/departments/building/", "https://ecode360.com/8009030"],
  lastVerified: "2026-04-14",
  volatility: "moderate", emergencyFlag: false, disclaimer: true, categoryDisclaimer: null
};
