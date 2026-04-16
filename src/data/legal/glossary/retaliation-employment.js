// Glossary term: Retaliation (employment)
// Citation verified: NY Labor Law § 215 (wage-complaint retaliation);
// Labor Law § 740 (whistleblower, expanded 2022); Exec Law § 296(7)
// (discrimination-complaint retaliation). Up to $20,000 in liquidated
// damages, reinstatement or front pay, attorney fees. 2-year limit.

export const RETALIATION_EMPLOYMENT = {
  id: "retaliation-employment",
  term: { en: "Retaliation (at work)" },
  aka: ["Workplace Retaliation"],
  category: "employment",
  subtags: ["rights"],

  context: {
    en: "You hear this when a worker complains about something at work — wages, safety, discrimination — and then gets punished for it. New York law treats retaliation as its own violation, separate from whatever the original complaint was about."
  },

  plainEnglish: {
    en: "When an employer punishes a worker for speaking up about something illegal. Punishment can be firing, demotion, a pay cut, a bad shift change, or harassment that makes the job unbearable. New York law protects complaints about unpaid wages (Labor Law § 215), any illegal activity (the whistleblower law, § 740, which was broadened in 2022), and discrimination or harassment (Human Rights Law § 296). A worker who wins a retaliation case in New York can get up to $20,000 in extra damages, their job back (or pay instead), and attorney fees. The complaint does not have to be 100% right — a good-faith complaint is protected even if it turns out to be wrong."
  },

  whatToAsk: {
    en: [
      "What did I complain about, and when — is there any paper or text record?",
      "How soon after the complaint did something bad happen to me?",
      "Which statute applies: § 215 (wages), § 740 (general whistleblower), or § 296 (discrimination)?",
      "What is the deadline — 2 years for most retaliation claims?",
      "Can I get my job back plus back pay and damages?"
    ]
  },

  related: ["wage-theft", "human-rights-law", "at-will-employment", "unemployment-insurance"],
  legalEntryIds: ["wage-theft-ny","wrongful-termination-ny"],

  citation: "NY Labor Law § 215; § 740; Exec Law § 296(7)",
  sourceUrl: "https://www.nysenate.gov/legislation/laws/LAB/215",
  lastVerified: "2026-04-15",
  status: "active"
};
