// Glossary term: Motion to Dismiss
// Citation verified: NY CPL § 170.30 (misdemeanor/information) and
// § 210.20 (felony/indictment). Grounds include defective instrument,
// immunity, double jeopardy, untimely, speedy trial, interest of justice,
// and — for indictments — insufficient grand jury evidence.

export const MOTION_TO_DISMISS = {
  id: "motion-to-dismiss",
  term: { en: "Motion to Dismiss" },
  aka: [],
  category: "criminal",
  subtags: ["pre-trial", "disposition"],

  context: {
    en: "Your lawyer files this paper asking the judge to throw the case out before a trial. It can happen for many reasons. If the judge agrees, the case ends."
  },

  plainEnglish: {
    en: "A written request to the judge asking to end the case. The defense lawyer gives reasons — the paperwork has a mistake, too much time has passed, the defendant was already tried for this, or the evidence is too weak. The prosecutor gets to answer. The judge then decides. If granted, the case is over. If denied, the case keeps going — the defendant can still fight it at trial or settle it with a plea."
  },

  whatToAsk: {
    en: [
      "Do I have any grounds to file a motion to dismiss?",
      "What are the strongest grounds in my case?",
      "When is the deadline to file?",
      "If the motion is denied, what are my next options?"
    ]
  },

  related: ["arraignment", "plea", "public-defender", "speedy-trial"],
  legalEntryIds: ["criminal-case-process-ny"],

  citation: "NY CPL § 170.30 (misdemeanor); NY CPL § 210.20 (felony)",
  sourceUrl: "https://www.nysenate.gov/legislation/laws/CPL/170.30",
  lastVerified: "2026-04-15",
  status: "active"
};
