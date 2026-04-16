// Glossary term: Security Deposit
// Citation verified: NY GOL § 7-108. Post-HSTPA (2019): one month cap
// statewide for unregulated tenancies. Itemized statement + return due
// within 14 days after tenant vacates. Missing the 14-day deadline
// forfeits all retention rights. Allowed deductions: unpaid rent,
// damage beyond normal wear-and-tear, unpaid utilities, moving/storage.

export const SECURITY_DEPOSIT = {
  id: "security-deposit",
  term: { en: "Security Deposit" },
  aka: ["Deposit"],
  category: "housing",
  subtags: ["money", "move-in", "move-out"],

  context: {
    en: "You hear this when you first sign a lease and again when you move out. A security deposit is money a landlord holds in case of damage or unpaid rent. It is the tenant's money — not the landlord's — the landlord is only holding it."
  },

  plainEnglish: {
    en: "Money a tenant pays at move-in that the landlord holds until move-out. In New York, the maximum is one month's rent. It has to be kept in a separate account and cannot be spent by the landlord during the tenancy. When the tenant moves out, the landlord has 14 days to return the deposit. If money is kept back, the landlord must send a written list of exactly what each deduction is for and copies of receipts or invoices. If the landlord misses the 14-day deadline, they lose the right to keep any of it — the full amount must be returned. Allowed deductions are limited to unpaid rent, damage beyond normal wear and tear, unpaid utilities, and moving or storage costs."
  },

  whatToAsk: {
    en: [
      "How much was my deposit, and when was it paid?",
      "Was the deposit ever put in a separate account with my name?",
      "How many days has it been since I moved out?",
      "Did the landlord send an itemized list of deductions and receipts?",
      "If the landlord missed the 14-day deadline, how do I get the full amount back?"
    ]
  },

  related: ["warranty-of-habitability", "eviction", "small-claims"],
  legalEntryIds: ["security-deposit-ny"],

  citation: "NY GOL § 7-108",
  sourceUrl: "https://www.nysenate.gov/legislation/laws/GOB/7-108",
  lastVerified: "2026-04-15",
  status: "active"
};
