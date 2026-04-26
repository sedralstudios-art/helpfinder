export const STOP_AND_FRISK = {
  id: "stop-and-frisk",
  term: { en: "Stop and Frisk" },
  aka: ["Terry Stop", "Pat-Down"],
  category: "criminal",
  subtags: ["police", "fourth-amendment"],

  context: {
    en: "Stop and frisk is a brief police stop based on reasonable suspicion that a person is involved in a crime, plus a pat-down of the outer clothing for weapons if the officer reasonably believes the person is armed."
  },

  plainEnglish: {
    en: "A brief, on-the-street police stop based on reasonable suspicion that a person has committed, is committing, or is about to commit a crime. During the stop, the officer can ask questions and ask for ID. The officer can also frisk — pat down the outer clothing — for weapons. The frisk requires its own reasonable suspicion that the person is armed and dangerous. The legal standard comes from the U.S. Supreme Court case Terry v. Ohio, so this is sometimes called a Terry stop. Reasonable suspicion is more than a hunch but less than probable cause. The frisk is supposed to be limited to weapons, not a full search for evidence. Evidence found during a stop or frisk that exceeded the legal limits can be suppressed. NYPD's stop-and-frisk practices were ruled unconstitutional in Floyd v. City of New York for racial profiling in 2013. Reforms have followed."
  },

  whatToAsk: {
    en: [
      "What facts gave the officer reasonable suspicion to stop?",
      "Was there reasonable suspicion that the person was armed before the frisk?",
      "Did the frisk stay within the limits — outer clothing for weapons?",
      "Can a motion to suppress challenge the stop or the evidence found?",
      "Was anything seized that went beyond what the frisk allows?"
    ]
  },

  related: ["probable-cause", "search-warrant", "arrest", "miranda-rights"],
  legalEntryIds: [],

  citation: "Terry v. Ohio, 392 U.S. 1 (1968); NY CPL § 140.50",
  sourceUrl: "https://www.law.cornell.edu/supremecourt/text/392/1",
  lastVerified: "2026-04-26",
  status: "active"
};
