export const CREDIT_FREEZE = {
  id: "credit-freeze",
  term: { en: "Credit Freeze" },
  aka: ["Security Freeze"],
  category: "consumer",
  subtags: ["credit", "identity-theft"],

  context: {
    en: "A credit freeze blocks a credit bureau from sharing the consumer's credit report with most new lenders. It is one of the strongest tools to prevent identity thieves from opening new accounts in someone's name. Freezes are free and can be lifted any time."
  },

  plainEnglish: {
    en: "A free service that blocks a credit bureau from sharing the consumer's credit report with most new lenders. Without access to the report, a thief usually cannot open a new credit card, loan, or account in the victim's name. A freeze must be placed separately at each of the three major bureaus — Equifax, Experian, and TransUnion. Each takes a few minutes online or by phone. The bureaus are required by federal law to place a freeze for free and to lift it for free. The consumer keeps a PIN or password to lift the freeze when applying for new credit. Existing accounts and creditors with prior access are not affected. A freeze is stronger than a fraud alert (which only requires the lender to verify identity). Both can be in place at the same time. The freeze stays until the consumer lifts it."
  },

  whatToAsk: {
    en: [
      "How do I place a credit freeze with each of the three credit bureaus?",
      "What is the difference between a credit freeze and a fraud alert?",
      "How do I lift a freeze when I want to apply for new credit?",
      "Are there any fees for placing or lifting the freeze?",
      "Can I freeze the credit reports of my minor children?"
    ]
  },

  related: ["credit-report", "identity-theft", "adverse-action-notice"],
  legalEntryIds: [],

  citation: "Fair Credit Reporting Act (15 USC § 1681c-1)",
  sourceUrl: "https://consumer.ftc.gov/articles/what-know-about-credit-freezes-fraud-alerts",
  lastVerified: "2026-04-26",
  status: "active"
};
