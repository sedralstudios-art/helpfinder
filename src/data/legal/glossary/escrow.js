export const ESCROW = {
  id: "escrow",
  term: { en: "Escrow" },
  aka: ["Escrow Account"],
  category: "housing",
  subtags: ["mortgage", "real-estate", "money"],

  context: {
    en: "Escrow comes up in two main settings. In a real estate purchase, money or documents are held by a neutral third party until the deal closes. In a mortgage, the lender collects extra money each month to pay property taxes and homeowners insurance."
  },

  plainEnglish: {
    en: "An arrangement where money, documents, or property are held by a neutral third party until certain conditions are met. There are two common kinds. Real estate escrow holds the buyer's deposit and the deed during a home purchase. The escrow agent releases the money and documents at closing, after both sides have done what the contract requires. Mortgage escrow is an account run by the lender that collects part of the borrower's monthly payment to cover property taxes and homeowners insurance. The lender then pays the tax bills and insurance premiums when due. Federal RESPA rules limit how much extra cushion the lender can hold and require an annual statement showing all activity. A borrower with a tax escrow shortage usually has the option to pay the shortage in a lump sum or spread it over the next year. Escrow accounts are also used in housing court for tenants who deposit disputed rent with the court."
  },

  whatToAsk: {
    en: [
      "Who is the escrow agent and what are they holding?",
      "When and how does the escrow get released?",
      "How much extra does the lender keep in my mortgage escrow as a cushion?",
      "Can I see the annual escrow statement and challenge an error?",
      "Can rent be paid into a court escrow during a habitability dispute?"
    ]
  },

  related: ["lease", "warranty-of-habitability", "small-claims"],
  legalEntryIds: [],

  citation: "Real Estate Settlement Procedures Act (12 USC § 2609); NY Real Property Law generally",
  sourceUrl: "https://www.law.cornell.edu/uscode/text/12/2609",
  lastVerified: "2026-04-26",
  status: "active"
};
