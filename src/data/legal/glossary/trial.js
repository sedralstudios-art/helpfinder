// Glossary term: Trial
// Citation verified: NY CPL Article 260 (jury trials), Article 320
// (waiver of jury; non-jury/bench trials). Verdict rendered by jury (or
// by court in a waived case). NY City criminal court has special rule
// for misdemeanors with max sentence ≤ 6 months — single-judge trial.

export const TRIAL = {
  id: "trial",
  term: { en: "Trial" },
  aka: [],
  category: "criminal",
  subtags: ["fact-finding", "disposition"],

  context: {
    en: "You hear this when a case did not end in a plea deal or a dismissal. It is where the facts get decided — either by a jury or by a judge alone. Most criminal cases in New York never go to trial. Most end with a plea."
  },

  plainEnglish: {
    en: "A formal hearing where the facts of the case are decided. The prosecutor has to prove every part of the charge beyond a reasonable doubt. Most criminal trials in New York are jury trials — 12 jurors in felony cases, 6 in most misdemeanor cases. A defendant can also give up the jury and have a bench trial, where the judge alone decides. Each side gives opening statements, calls witnesses, shows evidence, and gives closing statements. Then the jury (or the judge, in a bench trial) returns a verdict of guilty or not guilty. A not-guilty verdict ends the case. A guilty verdict leads to sentencing."
  },

  whatToAsk: {
    en: [
      "What is my realistic chance at trial based on the evidence?",
      "Jury or bench trial — what are the pros and cons in my case?",
      "How long will a trial take?",
      "What is the worst-case sentence if I lose?",
      "Is there still time to accept a plea instead?"
    ]
  },

  related: ["plea", "plea-bargain", "discovery", "speedy-trial", "public-defender", "sentence", "appeal"],
  legalEntryIds: ["criminal-case-process-ny"],

  citation: "NY CPL Article 260 (jury); Article 320 (non-jury)",
  sourceUrl: "https://www.nysenate.gov/legislation/laws/CPL/A260",
  lastVerified: "2026-04-15",
  status: "active"
};
