// Glossary term: Eviction (umbrella)
// Citation: RPAPL Article 7 (Summary Proceedings to Recover Possession of
// Real Property) is the controlling article for residential and commercial
// evictions in NY. Two main pathways: nonpayment (RPAPL 711(2)) and
// holdover (RPAPL 711(1)). Final court step is a warrant of eviction
// (RPAPL 749) executed by the sheriff or a city marshal.

export const EVICTION = {
  id: "eviction",
  term: { en: "Eviction" },
  aka: ["Dispossess"],
  category: "housing",
  subtags: ["housing-court", "process"],

  context: {
    en: "You hear this when a landlord is trying to force a tenant out. It is a court process. A landlord cannot just change the locks or move a tenant's things out — that is illegal. Every eviction in New York has to go through housing court first."
  },

  plainEnglish: {
    en: "A court process a landlord uses to remove a tenant. In New York, a landlord has to file papers in court, serve the tenant, and get a judge's order before anyone can be physically removed. The sheriff or a city marshal is the only one who can carry out the removal — never the landlord directly. Self-help lockouts are illegal and a tenant can sue a landlord who does one. There are two main kinds of eviction: nonpayment (for unpaid rent) and holdover (for everything else, like a lease ending)."
  },

  whatToAsk: {
    en: [
      "Has the landlord actually filed in court, or only sent a notice?",
      "Is this a nonpayment case or a holdover?",
      "When is the court date?",
      "Can I get a free lawyer for housing court?",
      "What happens if I pay everything I owe — does the case end?"
    ]
  },

  related: ["holdover", "nonpayment-proceeding", "warrant-of-eviction", "warranty-of-habitability", "landlord-retaliation"],
  legalEntryIds: ["eviction-process-ny", "illegal-eviction-ny"],

  citation: "NY RPAPL Article 7 (Summary Proceedings)",
  sourceUrl: "https://www.nysenate.gov/legislation/laws/RPA/A7",
  lastVerified: "2026-04-15",
  status: "active"
};
