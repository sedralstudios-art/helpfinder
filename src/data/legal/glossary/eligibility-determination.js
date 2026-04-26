export const ELIGIBILITY_DETERMINATION = {
  id: "eligibility-determination",
  term: { en: "Eligibility Determination" },
  aka: ["Eligibility Decision", "Determination"],
  category: "benefits",
  subtags: ["program-jargon"],

  context: {
    en: "You hear this after you apply for a benefit like SNAP, Medicaid, or housing assistance. It is the agency's decision on whether you qualify."
  },

  plainEnglish: {
    en: "The official decision by an agency about whether an applicant qualifies for a program. After the application is filed, the agency reviews the applicant's income, household size, and other factors and issues a determination — approved or denied. For SNAP, the decision must come within 30 days (7 days for expedited). For Medicaid, the timeline depends on the category. The determination comes as a written notice that explains the decision, the reasons, and the applicant's right to appeal. A denied applicant has the right to request a fair hearing."
  },

  whatToAsk: {
    en: [
      "When will I get the determination?",
      "If I am approved, when do benefits start?",
      "If I am denied, what is the reason?",
      "How do I appeal a denial?",
      "Can I reapply if my situation changes?"
    ]
  },

  related: ["fair-hearing", "adequate-notice", "snap", "medicaid", "temporary-assistance", "recertification"],
  legalEntryIds: ["benefits-denial-appeal-ny"],

  citation: "18 NYCRR Part 358 (notice and fair hearing); program-specific regulations",
  sourceUrl: "https://otda.ny.gov/oah/",
  lastVerified: "2026-04-16",
  status: "active"
};
