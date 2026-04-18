// LGLW6-D_electrical-residential-ny-mon-wheatland-town_01.js

export const entry = {
  id: "electrical-residential-ny-mon-wheatland-town",
  category: "trades",
  tier: "town",
  jurisdiction: "us-ny-monroe-wheatland-town",
  authorityType: "local-ordinance",
  status: "active",

  title: { en: "Electrical work in the Town of Wheatland: what the town requires" },

  summary: {
    en: "Wheatland requires a third-party Electrical Inspection Agency recognized by the town. The approved list isn't posted publicly — in practice Wheatland and Village of Scottsville (inside Wheatland) likely share agencies. Call the Building Department for the current list. Wheatland is strict about permits, with 4x penalties for unpermitted work."
  },

  whatItMeans: {
    en: "Wheatland's Building Department and Fire Marshal handle electrical permits for addresses outside Scottsville village. Town code language: a \"3rd party electrical inspection agency recognized by the town and authorized by the town to perform inspections.\"\n\nThe approved agency list isn't publicly posted — call (585) 889-1553 to get the current list. The Scottsville-approved list (Commonwealth, NYBFU, Genesee Star, NY Atlantic-Inland, MDIA) is the working presumption for Wheatland too, given the village/town close relationship.\n\nWheatland's enforcement is strict. Doing electrical work without a permit gets a penalty of 4x the normal permit fee plus a $100 stop-work order. Pull the permit first, always.\n\nThe town doesn't license electricians. Homeowner self-work rules aren't explicit on the public page.\n\nAfter the work passes, the approved agency issues the Certificate of Compliance. The town requires the CoC before the final Certificate of Occupancy.\n\nIMPORTANT: Scottsville village is inside Wheatland but has its own separate Code Enforcement office. Addresses inside village limits use the village."
  },

  example: {
    en: "A Wheatland homeowner (outside Scottsville village) wants to install a mini-split heat pump with an outdoor condenser unit. He calls Wheatland Building Dept for the approved agency list and picks Commonwealth. He files the permit FIRST — avoiding the 4x penalty for permitless work. His electrician installs the circuit. Commonwealth inspects. The town issues the final Certificate."
  },

  whoQualifies: {
    en: [
      "Property owners and contractors doing electrical work in Wheatland (outside Scottsville village)",
      "Electricians with liability insurance and workers comp",
      "Homeowners — call the Building Department to confirm homeowner electrical rules"
    ]
  },

  yourRights: {
    en: [
      "The right to avoid the 4x penalty by pulling the permit FIRST",
      "The right to clear guidance from the Building Department on the current approved agency list",
      "The right to know which jurisdiction (Wheatland vs Scottsville) your address is in",
      "State worker protections (wage, safety, injury) still apply here"
    ]
  },

  legalOptions: {
    en: [
      "The Wheatland Building Department and Fire Marshal handle electrical permits outside Scottsville village",
      "Town-recognized third-party agencies inspect electrical work",
      "Starting work without a permit costs 4x the normal fee plus a $100 stop-work order"
    ]
  },

  counsel: [{
    type: "free",
    name: "Town of Wheatland Building Department & Fire Marshal",
    focus: "Electrical permits, approved agency list, code compliance, fire safety",
    qualifier: "Open to residents and contractors in Wheatland (outside Scottsville village)",
    access: "22 Main St, Scottsville; phone; hours M 8-4 and 6-8, Tu-Th 8-4, F 8-1",
    outcome: "Permit issuance, agency coordination, code guidance",
    phone: "585-889-1553",
    url: "https://www.townofwheatland.org/building-department",
    verified: true, bilingual: false, languages: ["en"]
  }],

  relatedIds: ["electrical-residential-ny", "electrical-residential-ny-mon-scottsville-village"],
  relatedHelpResources: [],
  tags: ["trades", "electrical", "wheatland", "monroe county", "4x penalty", "strict permit", "scottsville", "village boundary", "town ordinance"],
  sources: ["https://www.townofwheatland.org/building-department", "https://ecode360.com/10499430"],
  lastVerified: "2026-04-14",
  volatility: "moderate", emergencyFlag: false, disclaimer: true, categoryDisclaimer: null
};
