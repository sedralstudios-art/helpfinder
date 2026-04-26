export const ABLE_ACCOUNT = {
  id: "able-account",
  term: { en: "ABLE Account" },
  aka: ["529A", "Achieving a Better Life Experience Account"],
  category: "benefits",
  subtags: ["disability", "savings", "tax-advantaged"],

  context: {
    en: "An ABLE account is a tax-advantaged savings account for a person with a disability. Money in the account does not count against SSI and Medicaid asset limits up to a federal threshold. New York's program is at My NY ABLE."
  },

  plainEnglish: {
    en: "A tax-advantaged savings account for a person whose disability began before a federal age cutoff (raised to 46 starting in 2026). Annual contributions are capped by federal law and adjusted yearly. Earnings grow tax-free. Withdrawals are tax-free as long as they are used for qualified disability expenses — housing, transportation, education, assistive technology, health, employment training, and many other categories. Money in the account does not count against SSI or Medicaid asset limits up to a federal balance threshold. Above that threshold, SSI is suspended but not terminated. Medicaid coverage is unaffected at any balance. NY State residents also get a state tax deduction on contributions. NY's program is at mynyable.org. ABLE is more flexible than a Special Needs Trust for everyday spending and is much easier and cheaper to set up. Many families use both — ABLE for day-to-day, SNT for larger inheritances or settlements."
  },

  whatToAsk: {
    en: [
      "Did the disability begin before the federal age cutoff?",
      "What expenses count as qualified disability expenses?",
      "How does the ABLE account compare with a Special Needs Trust for our situation?",
      "What is the annual contribution cap and the SSI threshold?",
      "How do I open an account through mynyable.org?"
    ]
  },

  related: ["special-needs-trust", "ssi-ssdi", "medicaid", "trustee", "beneficiary"],
  legalEntryIds: ["ny-able-savings-disability-ny"],

  citation: "26 USC § 529A (federal ABLE Act); NY EPTL Article 17",
  sourceUrl: "https://www.mynyable.org/",
  lastVerified: "2026-04-26",
  status: "active"
};
