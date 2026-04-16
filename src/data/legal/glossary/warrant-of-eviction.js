// Glossary term: Warrant of Eviction
// Citation verified: NY RPAPL § 749. Sheriff/marshal gives 14 days written
// notice before execution; execution only on business days, sunrise to
// sunset. Post-HSTPA (2019): warrant no longer annuls the tenancy, and
// for nonpayment cases the court must vacate the warrant if the tenant
// pays the full amount owed any time before execution (unless bad-faith
// withholding is proved).

export const WARRANT_OF_EVICTION = {
  id: "warrant-of-eviction",
  term: { en: "Warrant of Eviction" },
  aka: ["Eviction Warrant"],
  category: "housing",
  subtags: ["housing-court", "post-judgment"],

  context: {
    en: "You hear this after a judge rules for the landlord in housing court. It is the paper that lets the sheriff or a city marshal actually remove the tenant and their belongings. It is not the same as a notice from the landlord — only the court can issue it."
  },

  plainEnglish: {
    en: "A court paper that tells the sheriff or a city marshal to remove the tenant from the home. Before it can be used, the officer must give the tenant at least 14 days written notice of the exact date the eviction will happen. The eviction can only happen on a business day, and only between sunrise and sunset. For a nonpayment case, paying everything owed — rent, fees, court costs — before the officer comes usually makes the judge cancel the warrant. This is called 'pay and stay' and the tenant keeps the home."
  },

  whatToAsk: {
    en: [
      "What is the exact date the eviction can happen?",
      "How much do I have to pay to stop it, and to whom?",
      "Is there a hardship stay I can ask for more time?",
      "What happens to my things if I am not home?",
      "Can I get a free lawyer right now?"
    ]
  },

  related: ["eviction", "nonpayment-proceeding", "holdover", "warranty-of-habitability"],
  legalEntryIds: ["eviction-process-ny"],

  citation: "NY RPAPL § 749",
  sourceUrl: "https://www.nysenate.gov/legislation/laws/RPA/749",
  lastVerified: "2026-04-15",
  status: "active"
};
