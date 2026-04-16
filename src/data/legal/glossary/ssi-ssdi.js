export const SSI_SSDI = {
  id: "ssi-ssdi",
  term: { en: "SSI vs SSDI" },
  aka: ["SSI", "SSDI", "Supplemental Security Income", "Social Security Disability Insurance", "Disability Benefits"],
  category: "benefits",
  subtags: ["disability", "program-jargon"],

  context: {
    en: "You hear these when someone with a disability applies for monthly income. SSI and SSDI are both federal programs run by Social Security, but they have different rules for who qualifies and how much you get."
  },

  plainEnglish: {
    en: "Two different federal programs for people with disabilities. SSI (Supplemental Security Income) is for people with little or no work history who have a disability — it is based on need, not on past employment. SSDI (Social Security Disability Insurance) is for people who worked and paid into Social Security before becoming disabled — it is based on your work history. Some people qualify for both. SSI comes with automatic Medicaid in New York. SSDI comes with Medicare after a 24-month waiting period. Both require proof that the disability prevents substantial work. Applying can take months. If denied, there is an appeal process — many initial denials are overturned on appeal."
  },

  whatToAsk: {
    en: [
      "Am I applying for SSI, SSDI, or both?",
      "How long will the application process take?",
      "What medical records does Social Security need?",
      "If I am denied, what is the appeal process?",
      "Does this qualify me for Medicaid or Medicare automatically?"
    ]
  },

  related: ["medicaid", "fpl", "fair-hearing", "recertification"],
  legalEntryIds: [],

  citation: "42 USC § 1381+ (SSI); 42 USC § 423 (SSDI)",
  sourceUrl: "https://www.ssa.gov/benefits/disability/",
  lastVerified: "2026-04-16",
  status: "active"
};
