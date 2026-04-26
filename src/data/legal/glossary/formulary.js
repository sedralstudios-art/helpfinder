export const FORMULARY = {
  id: "formulary",
  term: { en: "Formulary (Health Insurance)" },
  aka: ["Drug List", "Preferred Drug List"],
  category: "benefits",
  subtags: ["health", "billing"],

  context: {
    en: "A formulary is the list of prescription drugs that a health insurance plan covers. Drugs are usually grouped into tiers — generic, preferred brand, non-preferred brand, and specialty — with different copays. Drugs not on the formulary may not be covered at all without an exception."
  },

  plainEnglish: {
    en: "The list of prescription drugs that a specific health insurance plan covers. Most plans organize the formulary into tiers. Generic drugs are usually the lowest copay. Preferred brand-name drugs are middle. Non-preferred brand-name drugs and specialty drugs are highest. Drugs not on the formulary at all may not be covered without a formal exception or coverage determination. The plan can change the formulary during the year, but is generally required to give notice and provide a transition supply for current users. Medicaid managed care plans in New York follow a state preferred drug list overlaid on the plan's formulary. Patients can ask the prescriber to switch to a covered alternative or file a formulary exception request when a non-covered drug is medically necessary. Federal Medicare Part D plans have their own formularies and exception process under 42 CFR § 423.578."
  },

  whatToAsk: {
    en: [
      "Is the prescribed drug on this plan's formulary, and what tier?",
      "Is there a covered alternative the prescriber can switch to?",
      "How is a formulary exception request filed?",
      "Does the plan require step therapy or prior authorization for this drug?",
      "What is the appeal process if the exception is denied?"
    ]
  },

  related: ["copay", "deductible", "in-network", "managed-care", "prior-authorization"],
  legalEntryIds: [],

  citation: "42 CFR § 423.578 (Medicare Part D); NY Insurance Law § 4900+",
  sourceUrl: "https://www.cms.gov/medicare/coverage/prescription-drug-coverage",
  lastVerified: "2026-04-26",
  status: "active"
};
