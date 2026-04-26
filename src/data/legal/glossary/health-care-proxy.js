export const HEALTH_CARE_PROXY = {
  id: "health-care-proxy",
  term: { en: "Health Care Proxy" },
  aka: ["Medical Power of Attorney", "Health Care Agent"],
  category: "family",
  subtags: ["elder-law", "advance-directive", "health"],

  context: {
    en: "A health care proxy is a New York advance-directive form that names another person to make medical decisions when the patient cannot speak for themselves. The named person is called the health care agent and only takes over after a doctor finds the patient lacks decision-making capacity."
  },

  plainEnglish: {
    en: "A short legal document under NY Public Health Law Article 29-C that names another person — the health care agent — to make medical decisions for the patient when the patient cannot decide for themselves. The proxy only takes effect when a doctor determines that the patient lacks capacity. Until then, the patient continues to make their own decisions. The agent can make almost any medical decision the patient could have made, including decisions about treatment, surgery, hospital care, and end-of-life care. Special rules govern decisions about artificial nutrition and hydration unless the proxy specifically addresses them. The form does not need a lawyer or notary — it just needs the patient's signature and two adult witnesses (with limits on who can witness). The form can be revoked at any time. A health care proxy is different from a living will, which states the patient's own treatment wishes, and from a regular power of attorney, which covers financial decisions."
  },

  whatToAsk: {
    en: [
      "Who is named as the health care agent and as the alternate?",
      "Have my agent and I talked about my treatment wishes?",
      "Does the proxy address artificial nutrition and hydration?",
      "Where will copies of the signed proxy be kept so they are easy to find?",
      "How is a proxy revoked or updated?"
    ]
  },

  related: ["power-of-attorney", "guardianship", "trustee", "beneficiary", "will"],
  legalEntryIds: [],

  citation: "NY Public Health Law Article 29-C (§§ 2980-2994)",
  sourceUrl: "https://www.health.ny.gov/professionals/patients/health_care_proxy/",
  lastVerified: "2026-04-26",
  status: "active"
};
