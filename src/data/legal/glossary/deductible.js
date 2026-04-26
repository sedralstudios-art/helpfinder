export const DEDUCTIBLE = {
  id: "deductible",
  term: { en: "Deductible" },
  aka: [],
  category: "benefits",
  subtags: ["health", "program-jargon"],

  context: {
    en: "You hear this with health insurance. It is the amount you pay out of pocket before insurance starts covering costs. Medicaid in New York generally has no deductible."
  },

  plainEnglish: {
    en: "The amount of money you pay for health care before your insurance kicks in. For example, if your deductible is $500, you pay the first $500 of medical bills yourself. After that, insurance covers its share (minus any co-pay). Deductibles reset every year. Medicaid in New York generally has no deductible — services are covered from day one. Marketplace plans (NY State of Health) have deductibles that vary by plan level: bronze plans have higher deductibles and lower premiums; silver and gold have lower deductibles and higher premiums."
  },

  whatToAsk: {
    en: [
      "What is my deductible, and how much have I used so far this year?",
      "Does this service count toward my deductible?",
      "Are there services covered before the deductible is met?",
      "Does Medicaid have a deductible?"
    ]
  },

  related: ["copay", "medicaid", "sliding-scale", "prior-authorization"],
  legalEntryIds: [],

  citation: "Common insurance term",
  sourceUrl: "https://www.healthcare.gov/glossary/deductible/",
  lastVerified: "2026-04-16",
  status: "active"
};
