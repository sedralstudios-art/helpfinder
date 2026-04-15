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
    en: "The official paper from a grand jury that says you are charged with a felony. Once you are indicted, the case moves to superior court (also called county court). You get arraigned again — this time on the indictment — and the next stages (hearings, motions, trial) happen there. An indictment is not a finding of guilt. It only means the case is going forward."
  },

  whatToAsk: {
    en: [
      "What exactly am I indicted for? (The indictment lists each count.)",
      "When is my arraignment on the indictment?",
      "Can my lawyer file a motion to dismiss the indictment?",
      "Can the prosecutor add charges later?"
    ]
  },

  related: ["grand-jury", "felony", "arraignment", "motion-to-dismiss"],
  legalEntryIds: [],

  citation: "NY CPL § 200.10",
  sourceUrl: "https://www.nysenate.gov/legislation/laws/CPL/200.10",
  lastVerified: "2026-04-15",
  status: "active"
};
