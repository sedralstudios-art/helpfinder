export const REFERRAL = {
  id: "referral",
  term: { en: "Referral" },
  aka: [],
  category: "general",
  subtags: ["health", "program-jargon"],

  context: {
    en: "You hear this in two ways. In health care, it means your doctor sends you to a specialist and your insurance may require it. In social services, it means one agency connects you with another agency that can help."
  },

  plainEnglish: {
    en: "When one provider or agency sends you to another for a specific service. In health care, a referral from your primary care doctor may be required before you can see a specialist, depending on your insurance plan. Medicaid managed care plans in New York often require referrals for specialists. In social services, a referral means an agency is connecting you with a program that fits your needs — they may call ahead, give you a name to ask for, or send your information (with your permission). A referral is not a guarantee of service — the receiving program still does its own intake and eligibility check."
  },

  whatToAsk: {
    en: [
      "Do I need a referral from my doctor to see this specialist?",
      "Has the referral been sent yet?",
      "Who specifically should I contact at the place I am being referred to?",
      "Does the referral expire after a certain time?"
    ]
  },

  related: ["prior-authorization", "intake", "case-manager", "medicaid"],
  legalEntryIds: [],

  citation: "Common health care and social services term",
  sourceUrl: "https://www.health.ny.gov/health_care/medicaid/redesign/managed_care/",
  lastVerified: "2026-04-16",
  status: "active"
};
