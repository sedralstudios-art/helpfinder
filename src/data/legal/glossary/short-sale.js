export const SHORT_SALE = {
  id: "short-sale",
  term: { en: "Short Sale" },
  aka: ["Short Pay", "Pre-Foreclosure Sale"],
  category: "housing",
  subtags: ["mortgage", "foreclosure-defense"],

  context: {
    en: "A short sale is when a homeowner sells the house for less than what is owed on the mortgage, with the lender's permission to accept the lower amount as full or partial payoff. It is one of the alternatives to foreclosure when a homeowner cannot keep paying."
  },

  plainEnglish: {
    en: "A sale of a house for less than the balance owed on the mortgage, with the lender's written approval. The lender accepts the sale proceeds as either full payoff or partial payoff of the loan. Short sales are usually used when the homeowner cannot keep paying the mortgage and the home has lost value below the loan amount. The process starts with a hardship application to the loan servicer, supported by financial documents. The servicer reviews and decides whether to approve. The homeowner finds a buyer at a price the lender will accept. The closing pays the lender from the sale proceeds. The lender may forgive the gap (the deficiency) or may try to collect it later. Forgiven debt can sometimes count as taxable income, though the federal Mortgage Forgiveness Debt Relief Act has provided exceptions in many years for principal residences. Free legal help with short sales is available through Empire Justice Center and Legal Aid Society of Rochester."
  },

  whatToAsk: {
    en: [
      "Will the lender approve a short sale at the price an offer is at?",
      "Will the lender release the deficiency, or pursue it later?",
      "Are there tax consequences for any forgiven debt?",
      "How does a short sale compare with a deed in lieu of foreclosure or a loan modification?",
      "Where can free legal help with the application be found?"
    ]
  },

  related: ["mortgage", "foreclosure", "loan-modification", "predatory-lending"],
  legalEntryIds: [],

  citation: "26 USC § 108 (cancellation of debt income); NY RPAPL Article 13 (foreclosure)",
  sourceUrl: "https://www.consumerfinance.gov/ask-cfpb/what-is-a-short-sale-en-117/",
  lastVerified: "2026-04-26",
  status: "active"
};
