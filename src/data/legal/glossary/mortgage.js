export const MORTGAGE = {
  id: "mortgage",
  term: { en: "Mortgage" },
  aka: ["Home Loan"],
  category: "housing",
  subtags: ["real-estate", "secured-debt"],

  context: {
    en: "A mortgage is a loan secured by real estate. The borrower promises to repay the loan, and the lender holds a lien on the home until the loan is paid off. If the borrower defaults, the lender can foreclose."
  },

  plainEnglish: {
    en: "A loan used to buy or refinance real estate, secured by the property itself. The borrower (mortgagor) signs a promissory note promising to repay the loan over time. The borrower also signs a mortgage document (called a deed of trust in some states) giving the lender (mortgagee) a lien on the property. If the borrower stops paying, the lender can foreclose and sell the property to recover what is owed. Most home mortgages run 15 to 30 years and have either a fixed interest rate or an adjustable rate. The monthly payment usually includes principal, interest, and an escrow deposit for property taxes and homeowners insurance. Federal law requires lenders to offer most borrowers a chance to apply for a loan modification before foreclosure starts. New York requires the lender to send a 90-day pre-foreclosure notice and to participate in a settlement conference for owner-occupied homes. Free legal help is available for homeowners in foreclosure."
  },

  whatToAsk: {
    en: [
      "What is the interest rate, and is it fixed or adjustable?",
      "Does my monthly payment include taxes and insurance through escrow?",
      "Can I apply for a loan modification if I am behind?",
      "What is the 90-day pre-foreclosure notice and the settlement conference?",
      "Where can I get free legal help with a foreclosure case?"
    ]
  },

  related: ["foreclosure", "lien", "escrow", "deed", "warranty-of-habitability"],
  legalEntryIds: [],

  citation: "NY RPAPL § 1304 (90-day notice); NY CPLR § 3408 (settlement conference)",
  sourceUrl: "https://www.nysenate.gov/legislation/laws/RPA/1304",
  lastVerified: "2026-04-26",
  status: "active"
};
