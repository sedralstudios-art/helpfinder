export const PAYDAY_LOAN = {
  id: "payday-loan",
  term: { en: "Payday Loan" },
  aka: ["Cash Advance Loan", "Deferred Deposit Loan"],
  category: "consumer",
  subtags: ["debt", "high-cost-credit"],

  context: {
    en: "Payday loans are short-term, very high-interest loans typically due on the borrower's next payday. New York bans payday lending under state usury laws, but online and tribal lenders still try to operate here."
  },

  plainEnglish: {
    en: "A short-term loan, usually for a small amount, repayable on or around the borrower's next payday. Annual percentage rates often run several hundred percent. New York bans payday lending under its civil and criminal usury laws. The civil usury cap is generally 16 percent. The criminal usury cap is 25 percent. Loans above the cap are generally unenforceable, and the lender can be sued. Despite the ban, online and tribal lenders sometimes try to make payday loans to New Yorkers. The NY Department of Financial Services has issued cease-and-desist letters to many of these lenders. A New York borrower targeted by an unlicensed payday lender can usually refuse to pay, request a full refund of any payments made, and file a complaint with DFS. Banks have also been ordered to block ACH withdrawals from accounts of unlicensed lenders. Lower-cost alternatives include credit union small-dollar loans (PALs), employer hardship programs, and community emergency assistance funds."
  },

  whatToAsk: {
    en: [
      "Is the lender licensed in New York to make this loan?",
      "What is the APR and total cost over the loan term?",
      "Does this loan exceed the New York usury cap?",
      "Can I stop the lender from withdrawing from my bank account?",
      "Are there lower-cost alternatives I can use instead?"
    ]
  },

  related: ["usury", "debt-collection", "garnishment", "predatory-lending"],
  legalEntryIds: [],

  citation: "NY Banking Law § 14-a (civil usury); NY General Obligations Law § 5-501",
  sourceUrl: "https://www.dfs.ny.gov/consumers/banking/payday_loans",
  lastVerified: "2026-04-26",
  status: "active"
};
