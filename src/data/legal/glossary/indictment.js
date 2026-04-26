// Glossary term: Indictment
// Citation verified: NY CPL § 200.10 (definition — written grand jury
// accusation filed with superior court charging a person with a crime).

export const INDICTMENT = {
  id: "indictment",
  term: { en: "Indictment" },
  aka: [],
  category: "criminal",
  subtags: ["felony-stage", "charging-document"],

  context: {
    en: "You hear this after the grand jury votes. It is the paper that makes the felony case real and moves it from local criminal court up to superior court (county court)."
  },

  plainEnglish: {
    en: "The official paper from a grand jury that says the defendant is charged with a felony. After indictment, the case moves to superior court (also called county court). The defendant is arraigned again — this time on the indictment — and the next stages (hearings, motions, trial) happen there. An indictment is not a finding of guilt. It only means the case is going forward."
  },

  whatToAsk: {
    en: [
      "What exactly am I indicted for?",
      "When is my arraignment on the indictment?",
      "Can my lawyer file a motion to dismiss the indictment?",
      "Can the prosecutor add charges later?"
    ]
  },

  related: ["grand-jury", "felony", "arraignment", "motion-to-dismiss"],
  legalEntryIds: ["criminal-case-process-ny"],

  citation: "NY CPL § 200.10",
  sourceUrl: "https://www.nysenate.gov/legislation/laws/CPL/200.10",
  lastVerified: "2026-04-15",
  status: "active"
};
