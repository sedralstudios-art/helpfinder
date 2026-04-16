// Glossary term: Parole
// Citation verified: NY Executive Law § 259-i (Board of Parole procedures,
// conditions, supervision). Penal Law § 70.40 covers release eligibility.
// Community Supervision Handbook (DOCCS 2026) is the plain-language guide
// to condition categories. Per 2021 Marijuana Regulation & Taxation Act,
// lawful cannabis use cannot be the basis for a parole violation.

export const PAROLE = {
  id: "parole",
  term: { en: "Parole" },
  aka: ["Community Supervision", "Post-Release Supervision", "PRS"],
  category: "criminal",
  subtags: ["post-sentence", "supervision"],

  context: {
    en: "You hear this about people finishing a prison sentence. Parole is the state's supervision when someone is let out of prison before the full sentence is over, or when supervision continues after a prison sentence is finished. It is handled by the state — not by the local probation office."
  },

  plainEnglish: {
    en: "Being released from state prison under supervision. A parole officer checks in with the person, and the person follows rules set by the Parole Board — like living at an approved address, reporting in, holding a job, staying away from certain people or places, and no new arrests. Breaking the rules can send the person back to prison. Parole is state-run, not county-run, and different from probation, which usually happens instead of prison. A New York law change means lawful cannabis use cannot be used to violate parole."
  },

  whatToAsk: {
    en: [
      "What are the exact rules of my parole? Is there a written copy?",
      "Who is my parole officer and how do I reach them?",
      "When is my parole hearing, and can I have a lawyer?",
      "How long does parole last?",
      "What counts as a violation, and what does the process look like if I am accused of one?"
    ]
  },

  related: ["probation", "violation-of-probation", "sentence", "felony"],
  legalEntryIds: ["parole-community-supervision-ny"],

  citation: "NY Executive Law § 259-i (conditions, supervision); Penal Law § 70.40 (release)",
  sourceUrl: "https://www.nysenate.gov/legislation/laws/EXC/259-I",
  lastVerified: "2026-04-15",
  status: "active"
};
