// Glossary term: Preliminary Hearing (felony-level)
// Citation verified: NY CPL § 180.60 (hearing conduct on felony complaint).
// Standard: reasonable cause to believe defendant committed a felony,
// only non-hearsay evidence admissible (with narrow exceptions for experts
// and certain sworn statements). Defendant has right to be present, to
// testify, and to cross-examine.

export const PRELIMINARY_HEARING = {
  id: "preliminary-hearing",
  term: { en: "Preliminary Hearing" },
  aka: ["Prelim", "Felony Hearing"],
  category: "criminal",
  subtags: ["felony-stage", "pre-trial"],

  context: {
    en: "You hear this in a felony case, shortly after arraignment. It is a hearing in local criminal court where the prosecutor has to show there is enough evidence to send the case up to superior court. Many cases end up going to a grand jury instead, which skips the preliminary hearing."
  },

  plainEnglish: {
    en: "A hearing where the prosecutor has to show a judge there is reasonable cause to believe a felony was committed. It happens in the lower court, before a grand jury gets involved. The defense lawyer can cross-examine the prosecutor's witnesses. The defendant has the right to be there and to testify, though most defendants do not. Only first-hand, non-hearsay evidence counts at a preliminary hearing, with some narrow exceptions. If the judge finds reasonable cause, the case moves up to superior court. If not, the felony is dismissed. Most felony cases skip the preliminary hearing because the prosecutor goes to a grand jury first."
  },

  whatToAsk: {
    en: [
      "Am I getting a preliminary hearing, or is my case going straight to a grand jury?",
      "When is it scheduled?",
      "Should I waive the hearing, or insist on it?",
      "Can my lawyer get new information at the hearing that we don't have yet?"
    ]
  },

  related: ["arraignment", "grand-jury", "indictment", "felony", "public-defender", "motion-to-dismiss"],
  legalEntryIds: ["criminal-case-process-ny"],

  citation: "NY CPL § 180.60",
  sourceUrl: "https://www.nysenate.gov/legislation/laws/CPL/180.60",
  lastVerified: "2026-04-15",
  status: "active"
};
