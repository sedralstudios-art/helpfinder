export const RENT_ABATEMENT = {
  id: "rent-abatement",
  term: { en: "Rent Abatement" },
  aka: ["rent reduction", "rent credit", "abatement"],
  category: "housing",
  subtags: ["tenant-rights", "repairs", "habitability"],

  context: {
    en: "This comes up when a tenant has been living with a serious problem — no heat, no hot water, mold, pests, broken plumbing — and the landlord has not fixed it. The court can reduce the rent for the period the apartment was not fully livable."
  },

  plainEnglish: {
    en: "Rent abatement is a reduction in rent for the time a rental unit was not in good condition. If the landlord failed to make repairs and the apartment was not fully livable, a judge can order the landlord to give back some of the rent — or reduce what the tenant owes. The amount depends on how serious the problem was and how long it lasted. No heat in winter might justify a larger abatement than a leaky faucet. Rent abatement can be awarded in an HP proceeding, an eviction defense, or a separate lawsuit."
  },

  whatToAsk: {
    en: [
      "How much of a rent reduction can I get for the conditions in my apartment?",
      "Do I need to prove I told the landlord about the problem?",
      "Can I get rent abatement for past months, or only going forward?",
      "Can the landlord evict me for not paying full rent if the apartment has serious problems?"
    ]
  },

  related: ["warranty-of-habitability", "hp-proceeding", "eviction", "landlord-retaliation"],
  legalEntryIds: ["tenant-rights-repairs-ny", "tenant-habitability-ny", "mold-tenant-rights-ny"],

  citation: "NY RPL § 235-b",
  sourceUrl: "https://www.nysenate.gov/legislation/laws/RPP/235-B",
  lastVerified: "2026-04-16",
  status: "active"
};
