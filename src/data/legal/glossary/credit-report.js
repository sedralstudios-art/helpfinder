export const CREDIT_REPORT = {
  id: "credit-report",
  term: { en: "Credit Report" },
  aka: ["Consumer Report"],
  category: "consumer",
  subtags: ["credit", "rights"],

  context: {
    en: "A credit report is the file that tracks a person's borrowing history. Lenders, landlords, employers, and insurers may use it to make decisions. Errors are common and can be disputed for free."
  },

  plainEnglish: {
    en: "A record of a person's borrowing and bill-paying history kept by the three major credit bureaus — Equifax, Experian, and TransUnion. The report shows credit cards, loans, and payment history. It also shows collection accounts, public records like bankruptcies and judgments, and inquiries (when the report was pulled). Lenders, landlords, employers, and insurers use credit reports to make decisions. Under the federal Fair Credit Reporting Act (FCRA), a free copy of each report is available once a year at AnnualCreditReport.com. Inaccurate information can be disputed in writing with the bureau and the source of the information. The bureau has 30 days to investigate and correct errors. Negative items like late payments and charge-offs generally drop off after 7 years. Bankruptcy stays on the report for 10 years. A credit freeze blocks new credit from being opened."
  },

  whatToAsk: {
    en: [
      "How do I get a free copy of my credit report from each bureau?",
      "What is the process for disputing an inaccurate item?",
      "How long does negative information stay on my report?",
      "How is a credit freeze different from a fraud alert?",
      "Can I get free help reviewing my credit report?"
    ]
  },

  related: ["adverse-action-notice", "debt-collection", "identity-theft", "statute-of-limitations-debt"],
  legalEntryIds: [],

  citation: "Fair Credit Reporting Act (15 USC § 1681+)",
  sourceUrl: "https://www.law.cornell.edu/uscode/text/15/1681",
  lastVerified: "2026-04-26",
  status: "active"
};
