export const LOAN_MODIFICATION = {
  id: "loan-modification",
  term: { en: "Loan Modification" },
  aka: ["Mortgage Modification", "Mod"],
  category: "housing",
  subtags: ["mortgage", "foreclosure-defense"],

  context: {
    en: "A loan modification is a permanent change to a mortgage to make payments affordable. It usually lowers the interest rate, extends the term, or adds missed payments to the back of the loan. It is one of the main alternatives to foreclosure."
  },

  plainEnglish: {
    en: "A permanent change to the terms of an existing mortgage to make the monthly payment more affordable. Common changes include lowering the interest rate, extending the loan term, capitalizing missed payments into the principal, and in some cases reducing the principal balance. A loan modification is different from a refinance. A refinance is a new loan that replaces the old one. A modification keeps the same loan and changes the terms. Federal law requires most mortgage servicers to evaluate a homeowner for loss mitigation options — including modifications — before completing a foreclosure. New York requires the lender to attend a court-supervised settlement conference for owner-occupied home foreclosure cases. The conference is a key opportunity to apply for a modification with court oversight. Free legal help with modification applications and foreclosure defense is available in Monroe County through Empire Justice Center and Legal Aid Society of Rochester."
  },

  whatToAsk: {
    en: [
      "Has the servicer evaluated me for all available modification programs?",
      "What documents does the servicer need to process the application?",
      "Can the application be made at the court settlement conference?",
      "How will the modification change my monthly payment and total cost?",
      "Where can I get free legal help with the application?"
    ]
  },

  related: ["mortgage", "foreclosure", "escrow", "predatory-lending"],
  legalEntryIds: [],

  citation: "12 CFR § 1024.41 (RESPA loss mitigation); NY CPLR § 3408 (settlement conference)",
  sourceUrl: "https://www.consumerfinance.gov/owning-a-home/loan-options/",
  lastVerified: "2026-04-26",
  status: "active"
};
