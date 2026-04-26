export const REPOSSESSION = {
  id: "repossession",
  term: { en: "Repossession" },
  aka: ["Repo", "Self-Help Repossession"],
  category: "consumer",
  subtags: ["debt", "vehicle", "secured-debt"],

  context: {
    en: "Repossession is when a lender takes back property that secured a loan after the borrower falls behind on payments. The most common case is a car loan, but it can also apply to furniture, electronics, and other goods bought on credit."
  },

  plainEnglish: {
    en: "When a lender takes back property that was used as collateral for a loan after the borrower defaults. New York follows the Uniform Commercial Code (UCC Article 9). For a car loan, the lender can repossess without a court order or advance notice — but only if the repossession is done without 'breach of the peace.' Breach of the peace includes breaking into a locked garage, threats, or going forward over the borrower's clear in-person objection. After repossession, the lender must send a written notice describing the planned sale and the borrower's rights. The borrower usually has the right to redeem the property by paying off the loan in full before the sale, or to reinstate by paying past-due amounts and fees in some contracts. After the sale, the borrower can be sued for any deficiency — the gap between the sale price and what is still owed. The sale must be commercially reasonable. An unfair sale process is a defense against the deficiency."
  },

  whatToAsk: {
    en: [
      "Did the repossession happen without a breach of the peace?",
      "Did the lender send the required notice of sale?",
      "Can I redeem the property before the sale, and how much will that cost?",
      "Was the sale commercially reasonable, and what did it bring in?",
      "Is the lender suing for a deficiency, and is there a defense?"
    ]
  },

  related: ["wage-garnishment", "garnishment", "debt-collection", "default-judgment"],
  legalEntryIds: [],

  citation: "NY UCC Article 9 (§§ 9-609, 9-611, 9-623)",
  sourceUrl: "https://www.law.cornell.edu/ucc/9/article9",
  lastVerified: "2026-04-26",
  status: "active"
};
