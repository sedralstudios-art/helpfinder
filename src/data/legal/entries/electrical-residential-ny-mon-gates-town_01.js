// LGLW6-D_electrical-residential-ny-mon-gates-town_01.js

export const entry = {
  id: "electrical-residential-ny-mon-gates-town",
  category: "trades",
  tier: "town",
  jurisdiction: "us-ny-monroe-gates-town",
  authorityType: "local-ordinance",
  status: "active",

  title: { en: "Electrical work in the Town of Gates: what the town requires" },

  summary: {
    en: "Gates requires a separate electrical permit. Inspection is done by one of the town's approved third-party agencies. NYEIA is confirmed; two more agencies are approved (very likely MDIA and Commonwealth, the standard Monroe County trio)."
  },

  whatItMeans: {
    en: "Gates requires a separate electrical permit for electrical work. It's applied for through the town Building Department.\n\nInspection is done by one of three town-approved third-party Electrical Inspection Agencies. NY Electrical Inspection Agency (NYEIA) is explicitly listed on the town's approved-inspectors page. The other two are very likely MDIA (Middle Department) and Commonwealth — the standard Rochester-area set — but call the Building Inspector at (585) 429-8241 to confirm the current list.\n\nGates licenses plumbers (Chapter 143) but does NOT have its own electrician license. The town likely accepts electricians holding a valid local license (e.g., Rochester). Homeowner self-work rules aren't posted — call to confirm."
  },

  example: {
    en: "A Gates homeowner wants to install a whole-house generator. He calls the Building Dept to confirm the approved agency list. He files the electrical permit with the town. His electrician does the generator install with the automatic transfer switch. NYEIA inspects and issues the Certificate of Compliance. The town closes out the permit."
  },

  whoQualifies: {
    en: [
      "Property owners and contractors doing electrical work inside the Town of Gates",
      "Electricians with liability insurance and workers comp",
      "Homeowners — call the Building Department to confirm homeowner electrical rules"
    ]
  },

  yourRights: {
    en: [
      "The right to see the current approved-agency list — town maintains one",
      "The right to clear guidance from the Building Inspector",
      "State worker protections (wage, safety, injury) still apply here"
    ]
  },

  legalOptions: {
    en: [
      "The Gates Building Department handles electrical permits and approved-agency questions",
      "NYEIA is confirmed as an approved inspection agency",
      "Plumbers are licensed (Ch 143) but electricians are not licensed at the town level"
    ]
  },

  counsel: [{
    type: "free",
    name: "Town of Gates Building Department",
    focus: "Electrical permits, approved agency list, code compliance",
    qualifier: "Open to residents and contractors working inside the Town",
    access: "1605 Buffalo Road; phone; email trech@townofgates.org",
    outcome: "Permit issuance, agency coordination, code guidance",
    phone: "585-429-8241",
    url: "https://www.townofgatesny.gov/town-approved-electrical-inspectors/",
    verified: true, bilingual: false, languages: ["en"]
  }],

  relatedIds: ["electrical-residential-ny"],
  relatedHelpResources: [],
  tags: ["trades", "electrical", "gates", "monroe county", "NYEIA", "town ordinance", "generator", "EV charger"],
  sources: ["https://www.townofgatesny.gov/town-approved-electrical-inspectors/", "https://www.townofgatesny.gov/building-department-permit-issuance/", "https://ecode360.com/GA0050"],
  lastVerified: "2026-04-14",
  volatility: "moderate", emergencyFlag: false, disclaimer: true, categoryDisclaimer: null
};
