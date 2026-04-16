// Glossary term: Holdover Proceeding
// Citation verified: NY RPAPL § 711(1). Requires a predicate notice
// (notice to cure, notice of termination, or notice to quit) before the
// case can be filed. Post-HSTPA (2019), RPL 226-c sets residential
// notice periods based on length of tenancy.

export const HOLDOVER = {
  id: "holdover",
  term: { en: "Holdover Proceeding" },
  aka: ["Holdover", "Holdover Case"],
  category: "housing",
  subtags: ["housing-court", "eviction-type"],

  context: {
    en: "You hear this when a landlord is trying to evict for a reason other than unpaid rent. Common reasons: the lease ended, the landlord gave notice to end a month-to-month, the landlord claims a lease rule was broken, or the tenant stayed past the end date."
  },

  plainEnglish: {
    en: "A court case a landlord files when they want to remove a tenant for a reason other than unpaid rent. Before filing, the landlord has to send a written notice — like a notice to end the lease or a notice to fix a problem. The kind of notice and how many days it gives depends on the reason and how long the tenant has lived there. In court, the tenant can fight the case, including by showing the notice was wrong or did not give enough time. If the landlord wins, the judge signs a warrant of eviction."
  },

  whatToAsk: {
    en: [
      "What notice did I get, and was it in writing?",
      "How many days did the notice give me?",
      "Does the reason the landlord gave actually apply to me?",
      "Is there a way to fix the problem and stop the case?",
      "Can I get a free lawyer?"
    ]
  },

  related: ["eviction", "nonpayment-proceeding", "warrant-of-eviction", "warranty-of-habitability"],
  legalEntryIds: ["eviction-process-ny"],

  citation: "NY RPAPL § 711(1); RPL § 226-c (residential notice periods)",
  sourceUrl: "https://www.nysenate.gov/legislation/laws/RPA/711",
  lastVerified: "2026-04-15",
  status: "active"
};
