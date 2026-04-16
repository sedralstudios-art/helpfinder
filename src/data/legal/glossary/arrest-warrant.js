// Glossary term: Arrest Warrant (distinct from bench warrant)
// Citation verified: NY CPL Article 120 (§ 120.10 definition; § 120.20 when
// issuable; § 120.90 post-arrest procedure). An arrest warrant is issued
// BEFORE arraignment when a case has been filed against someone who has
// not yet come under the court's control — different from a bench warrant
// (CPL 530.70), which issues AFTER someone missed a scheduled court date.

export const ARREST_WARRANT = {
  id: "arrest-warrant",
  term: { en: "Arrest Warrant" },
  aka: ["Warrant of Arrest"],
  category: "criminal",
  subtags: ["pre-arraignment", "arrest", "warrant"],

  context: {
    en: "You hear this when a case has been filed against someone and the court orders the police to go find them. It is different from a bench warrant. A bench warrant comes out after a missed court date. An arrest warrant usually comes out before anyone has been arrested or arraigned at all."
  },

  plainEnglish: {
    en: "A paper signed by a judge that tells the police to arrest a specific person and bring them to court. Before issuing one, the judge looks at the charging paper and decides if there is enough reason to order the arrest. The goal of the warrant is to bring the person to arraignment — that is the first court date. An arrest warrant is different from a bench warrant. An arrest warrant starts the case. A bench warrant comes later, after a missed court date."
  },

  whatToAsk: {
    en: [
      "Is there an arrest warrant with my name on it?",
      "What case is the warrant for, and what are the charges?",
      "Can I turn myself in instead of being found?",
      "Will I be released at arraignment, or held?"
    ]
  },

  related: ["bench-warrant", "arrest", "arraignment", "summons", "desk-appearance-ticket"],
  legalEntryIds: ["rights-when-arrested-ny"],

  citation: "NY CPL Article 120 (§ 120.10, § 120.20, § 120.90)",
  sourceUrl: "https://www.nysenate.gov/legislation/laws/CPL/A120",
  lastVerified: "2026-04-15",
  status: "active"
};
