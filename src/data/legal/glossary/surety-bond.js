export const SURETY_BOND = {
  id: "surety-bond",
  term: { en: "Surety Bond" },
  aka: ["bond", "court bond", "lien bond", "performance bond"],
  category: "courts",
  subtags: ["lien", "contractor", "court-filing"],

  context: {
    en: "This comes up in two common situations: when a contractor is required to post a bond before starting a job, or when a homeowner wants to remove a mechanic's lien from their property while the dispute is resolved."
  },

  plainEnglish: {
    en: "A surety bond is a guarantee — backed by a bonding company — that a person or business will do what they promised. In construction, a performance bond guarantees the contractor will finish the job. If the contractor walks away, the bonding company pays. In a lien dispute, posting a bond with the court removes the lien from the property while the case is decided. The bond substitutes for the property — if the lien holder wins, they get paid from the bond instead of from the property. Bonds are purchased from insurance or bonding companies. The cost is usually a small percentage of the bond amount."
  },

  whatToAsk: {
    en: [
      "Is the contractor bonded? What does the bond cover?",
      "How much does it cost to post a bond to discharge a lien?",
      "If I post a bond, does the lien come off my property right away?",
      "What happens to the bond if I win the dispute?"
    ]
  },

  related: ["mechanic-lien", "bail", "judgment"],
  legalEntryIds: ["mechanic-lien-ny", "home-improvement-contractor-ny", "contractor-fraud-ny"],

  citation: "NY Lien Law § 19",
  sourceUrl: "https://www.nysenate.gov/legislation/laws/LIE/19",
  lastVerified: "2026-04-16",
  status: "active"
};
