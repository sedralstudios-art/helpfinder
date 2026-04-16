// Glossary term: Judgment
// Citation verified: NY CPLR § 5011 (definition); CPLR Article 52
// (enforcement — §§ 5201-5253). Judgment is enforceable for 20 years
// from entry. Interest accrues at 9% for most judgments (CPLR § 5004),
// reduced to 2% for unpaid consumer-debt judgments (CCFA 2022 change).

export const JUDGMENT = {
  id: "judgment",
  term: { en: "Judgment" },
  aka: ["Money Judgment"],
  category: "consumer",
  subtags: ["post-trial", "debt"],

  context: {
    en: "You hear this after a civil case — small claims, debt lawsuit, housing case — when the judge rules. A judgment is the court's official ruling on who owes what. Having a judgment is different from collecting on it."
  },

  plainEnglish: {
    en: "The court's final decision in a civil case. In a money case, a judgment says who owes how much, plus court costs and sometimes interest. A judgment in New York stays enforceable for 20 years. For unpaid consumer debt, interest now runs at 2% per year (lowered from 9% in 2022). Winning a judgment does not automatically get the winner the money — the winner has to use tools like wage garnishment, bank account restraint, or property execution to collect. The loser can sometimes challenge the judgment if it was entered by default without proper notice."
  },

  whatToAsk: {
    en: [
      "Was a judgment actually entered, or is the case still open?",
      "How was I served — if I never got the papers, can I move to vacate the default?",
      "What is the total amount owed including interest and costs?",
      "How can the judgment be collected against me?",
      "If I can't pay, what options do I have?"
    ]
  },

  related: ["debt-collection", "wage-garnishment", "small-claims", "bankruptcy", "automatic-stay", "statute-of-limitations-debt"],
  legalEntryIds: ["debt-collection-rights-ny"],

  citation: "NY CPLR § 5011; Article 52 (§§ 5201-5253)",
  sourceUrl: "https://www.nysenate.gov/legislation/laws/CVP/5011",
  lastVerified: "2026-04-15",
  status: "active"
};
