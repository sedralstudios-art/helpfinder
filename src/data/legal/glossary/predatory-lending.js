export const PREDATORY_LENDING = {
  id: "predatory-lending",
  term: { en: "Predatory Lending" },
  aka: ["Subprime Predatory Loan"],
  category: "consumer",
  subtags: ["debt", "scam"],

  context: {
    en: "Predatory lending is a pattern of unfair, deceptive, or abusive loan terms aimed at borrowers with limited options — high fees, hidden terms, balloon payments, prepayment penalties, or coerced refinancing. It targets seniors, low-income borrowers, and people with damaged credit."
  },

  plainEnglish: {
    en: "Lending practices that take advantage of a borrower's limited options or limited information. Common red flags include very high interest rates and fees, balloon payments at the end, large prepayment penalties, mandatory arbitration that strips court rights, repeated refinancing that strips home equity (loan flipping), pressure to sign without time to read, false income or asset entries on the application, and steering borrowers toward worse loans than they qualify for. Federal laws that target predatory lending include the Truth in Lending Act, the Home Ownership and Equity Protection Act (HOEPA), the Equal Credit Opportunity Act, and the Real Estate Settlement Procedures Act. New York has additional protections under Banking Law and General Business Law. The CFPB and the NY Department of Financial Services accept complaints. Free legal help with predatory mortgage cases is available through Empire Justice Center and other nonprofits."
  },

  whatToAsk: {
    en: [
      "Did the loan disclose all fees, the APR, and the total cost in writing?",
      "Are there balloon payments, prepayment penalties, or mandatory arbitration?",
      "Was I steered to a worse loan than I qualified for?",
      "Could the loan be voidable under TILA, HOEPA, or NY law?",
      "Where can I file a complaint with the CFPB or NY DFS?"
    ]
  },

  related: ["mortgage", "foreclosure", "debt-collection", "arbitration", "discrimination"],
  legalEntryIds: [],

  citation: "TILA (15 USC § 1601); HOEPA (15 USC § 1639); NY Banking Law Article 6-l",
  sourceUrl: "https://www.consumerfinance.gov/",
  lastVerified: "2026-04-26",
  status: "active"
};
