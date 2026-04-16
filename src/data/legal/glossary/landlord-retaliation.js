// Glossary term: Landlord Retaliation
// Citation verified: NY RPL § 223-b. 1-year rebuttable presumption when
// landlord serves notice to quit, files eviction, or substantially alters
// tenancy within a year of a tenant's good-faith complaint. Exception:
// owner-occupied dwellings with fewer than four units. Triple-damages
// penalty for fee-based retaliation lease provisions.

export const LANDLORD_RETALIATION = {
  id: "landlord-retaliation",
  term: { en: "Landlord Retaliation" },
  aka: ["Retaliatory Eviction", "Retaliation"],
  category: "housing",
  subtags: ["rights", "defenses"],

  context: {
    en: "You hear this when a landlord tries to evict or push out a tenant who has complained — about repairs, health code violations, or other problems. New York law protects tenants from this. It can be a defense in housing court."
  },

  plainEnglish: {
    en: "New York law makes it illegal for a landlord to evict, raise the rent, or refuse to renew a lease because the tenant complained in good faith about repairs, safety, or their rights. If any of these things happens within one year of a complaint, the law assumes it was retaliation. The landlord has to prove there was some other real reason. This rule does not apply to owner-occupied buildings with fewer than four units. If the lease tries to charge a fee for complaining, that part of the lease is void and the landlord could owe the tenant three times the fee."
  },

  whatToAsk: {
    en: [
      "When did I complain, and do I have a written record of it?",
      "How long between my complaint and the landlord's action?",
      "Is my building owner-occupied with fewer than four units?",
      "Can I raise retaliation as a defense in housing court?",
      "Can I get a free lawyer?"
    ]
  },

  related: ["eviction", "holdover", "nonpayment-proceeding", "warranty-of-habitability"],
  legalEntryIds: ["tenant-rights-repairs-ny","eviction-process-ny"],

  citation: "NY RPL § 223-b",
  sourceUrl: "https://www.nysenate.gov/legislation/laws/RPP/223-B",
  lastVerified: "2026-04-15",
  status: "active"
};
