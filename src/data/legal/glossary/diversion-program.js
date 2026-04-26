export const DIVERSION_PROGRAM = {
  id: "diversion-program",
  term: { en: "Diversion Program" },
  aka: ["Pretrial Diversion", "Drug Court", "Mental Health Court"],
  category: "criminal",
  subtags: ["pre-trial", "alternatives"],

  context: {
    en: "A diversion program is an alternative to standard prosecution. The defendant agrees to treatment, classes, community service, or supervision. If they finish successfully, the case is dismissed or reduced. Common examples include drug court, mental health court, and DWI diversion."
  },

  plainEnglish: {
    en: "A program that lets a defendant avoid a conviction by completing treatment, classes, community service, or supervision instead. Diversion is voluntary. The defendant usually has to admit some responsibility and agree to specific conditions. If the program is completed successfully, the case is dismissed or the charge is reduced. If the defendant fails to complete the program, the original charges are reinstated. Common types in New York include Judicial Diversion under CPL Article 216 for non-violent felony drug cases, drug treatment courts, mental health treatment courts, veterans treatment courts, and pretrial diversion offered by some local district attorneys. Eligibility depends on the charge, the defendant's history, and the local program. The defense lawyer is the best source on whether diversion fits a specific case."
  },

  whatToAsk: {
    en: [
      "Is my case eligible for any diversion program?",
      "What does the program require — treatment, classes, supervision, drug tests?",
      "How long does the program last?",
      "What happens to my charge if I complete the program successfully?",
      "What happens if I fail to complete the program?"
    ]
  },

  related: ["plea", "plea-bargain", "conditional-discharge", "probation", "public-defender"],
  legalEntryIds: [],

  citation: "NY CPL Article 216 (Judicial Diversion); local DA programs",
  sourceUrl: "https://www.nysenate.gov/legislation/laws/CPL/A216",
  lastVerified: "2026-04-26",
  status: "active"
};
