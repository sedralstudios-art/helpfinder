// Glossary term: Warranty of Habitability
// Citation verified: NY RPL § 235-b. Every residential lease carries an
// implied warranty that the premises are fit for human habitation and
// free of conditions dangerous to life/health/safety. Non-waivable.
// Breach gives tenant the right to rent abatement (reduction) plus
// damages. Common breaches: no heat, no hot water, mold, pests, lead
// paint, broken plumbing, broken smoke/CO detectors.

export const WARRANTY_OF_HABITABILITY = {
  id: "warranty-of-habitability",
  term: { en: "Warranty of Habitability" },
  aka: ["Habitability"],
  category: "housing",
  subtags: ["rights", "repairs", "rent"],

  context: {
    en: "You hear this when a rental has serious problems — no heat, no hot water, broken plumbing, pests, mold — and people talk about the tenant's rights. Every rental lease in New York comes with this promise built in, even if the lease does not say so."
  },

  plainEnglish: {
    en: "A promise built into every rental lease in New York that says the home must be safe and fit to live in. The landlord has to keep up with basic things: heat and hot water, working plumbing, no pests, no mold, working smoke and carbon monoxide detectors, safe stairs and railings, and no lead paint hazards. The tenant cannot sign this right away — the lease is void on that point. If the landlord breaks this promise, the tenant can ask a court to reduce the rent (called a rent abatement), force repairs, and pay for damages. The tenant usually has to tell the landlord about the problem in writing first."
  },

  whatToAsk: {
    en: [
      "Did I tell the landlord about this in writing, and keep a copy?",
      "How long has the problem been going on?",
      "Can I file a complaint with the local code enforcement office?",
      "Can I hold back part of my rent, or do I have to pay and then sue?",
      "Can I get a free lawyer for a habitability case?"
    ]
  },

  related: ["eviction", "nonpayment-proceeding", "landlord-retaliation", "security-deposit"],
  legalEntryIds: ["tenant-habitability-ny"],

  citation: "NY RPL § 235-b",
  sourceUrl: "https://www.nysenate.gov/legislation/laws/RPP/235-B",
  lastVerified: "2026-04-15",
  status: "active"
};
