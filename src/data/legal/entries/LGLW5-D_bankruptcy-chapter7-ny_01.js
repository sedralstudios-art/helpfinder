// LGLW5-D_bankruptcy-chapter7-ny_01.js
// Category: consumer (Consumer & Debt)
// Jurisdiction: ny (New York State)
// Schema: V3 — English only (translation after verification)
// LGLW5-D | April 5, 2026

export const entry = {
  id: "bankruptcy-chapter7-ny",
  category: "consumer",
  tier: "federal",
  jurisdiction: "ny",
  status: "active",

  title: { en: "Chapter 7 Bankruptcy — Eliminating Debt and Starting Over" },

  summary: {
    en: "Chapter 7 is the most common type of personal bankruptcy. It eliminates most unsecured debt — credit cards, medical bills, personal loans — in about 4 months."
  },

  whoQualifies: {
    en: [
      "Anyone whose income is at or below New York's median for their household size, or who passes the full means test",
      "You must have lived in your county continuously for at least 91 days before filing",
      "You must not have received a Chapter 7 discharge in a case filed within the past 8 years",
      "A pre-filing credit counseling course must be completed before filing",
      "You do not need to be unemployed to file Chapter 7"
    ]
  },

  whatItMeans: {
    en: "Chapter 7 is a federal court process that wipes out most unsecured debt. You file detailed schedules listing everything you own, everyone you owe, and your income and expenses. A court-appointed trustee reviews your case at a short meeting about 30 days after filing. Most filers in New York keep all their property because it falls within the allowed exemptions."
  },

  yourRights: {
    en: [
      "The automatic stay stops all collection calls, lawsuits, and wage garnishments the moment you file.",
      "A Chapter 7 discharge is permanent — creditors can never legally collect a discharged debt again.",
      "You cannot be fired or denied a government benefit because you filed for bankruptcy (11 U.S.C. § 525).",
      "You have the right to choose between New York state exemptions and federal bankruptcy exemptions.",
      "If a creditor violates the automatic stay or discharge order, you may be entitled to damages and sanctions.",
      "You are free to voluntarily pay any discharged debt if you choose to do so."
    ]
  },

  legalOptions: {
    en: [
      "Pre-filing credit counseling is required and costs $12–$50 through approved providers. Fee waivers are available.",
      "The Chapter 7 filing fee is $338. Waivers are available for filers with income below 150% of the federal poverty line.",
      "Monroe County residents file with the U.S. Bankruptcy Court for the Western District of New York, 100 State Street, Rochester, NY 14614.",
      "Official bankruptcy forms are available at uscourts.gov/forms/bankruptcy-forms.",
      "Free legal help is available through Legal Aid Society of Rochester at (585) 232-4090.",
      "A post-filing debtor education course must be completed before the court issues a discharge."
    ]
  },

  example: {
    en: "Marco has $34,000 in credit card debt and $12,000 in medical bills. He earns $2,800 a month after taxes — below New York's median for a single person. He files Chapter 7. The automatic stay stops two collection lawsuits the day he files. The trustee reviews his assets — he owns no real estate and his car equity is below the exemption cap. There is nothing to liquidate. About four months after filing, he receives his discharge. All $46,000 in unsecured debt is eliminated."
  },

  counsel: [
    {
      type: "free",
      name: "Legal Aid Society of Rochester",
      focus: "General civil legal help including bankruptcy guidance",
      qualifier: "Low-income Monroe County residents",
      access: "Call or visit during business hours",
      outcome: "Free legal guidance or referral",
      phone: "(585) 232-4090",
      url: "https://www.lasroc.org",
      verified: true,
      bilingual: false,
      languages: []
    },
    {
      type: "free",
      name: "Empire Justice Center",
      focus: "Consumer and bankruptcy legal assistance",
      qualifier: "Low-income individuals in western and central New York",
      access: "Call Rochester office",
      outcome: "Free legal assistance or referral",
      phone: "(585) 454-4060",
      url: "https://www.empirejustice.org",
      verified: true,
      bilingual: false,
      languages: []
    },
    {
      type: "free",
      name: "Syracuse University College of Law — Bankruptcy Clinic",
      focus: "Bankruptcy case assistance",
      qualifier: "Income-eligible individuals",
      access: "Call for intake",
      outcome: "Law students supervised by faculty provide direct bankruptcy help",
      phone: "(315) 443-4582",
      url: "https://law.syr.edu",
      verified: true,
      bilingual: false,
      languages: []
    }
  ],

  relatedIds: [
    "bankruptcy-exemptions-ny",
    "bankruptcy-automatic-stay-ny",
    "bankruptcy-means-test-ny",
    "bankruptcy-chapter13-ny",
    "bankruptcy-discharge-ny",
    "bankruptcy-reaffirmation-ny"
  ],
  relatedHelpResources: [],
  tags: [
    "bankruptcy", "debt relief", "chapter 7", "wipe out debt",
    "fresh start", "credit card debt", "medical bills",
    "collection calls", "wage garnishment", "file bankruptcy",
    "can't pay bills", "debt forgiveness", "start over", "too much debt"
  ],
  sources: [
    "https://www.uscourts.gov/services-forms/bankruptcy",
    "https://www.justice.gov/ust/means-testing",
    "https://www.justia.com/bankruptcy/exemptions/bankruptcy-exemptions-50-state-survey/",
    "https://www.nywb.uscourts.gov"
  ],

  lastAudited: "2026-04-05",
  lastVerifiedBy: "Claude + Tony",
  volatility: "moderate",
  emergencyFlag: false,
  disclaimer: true,
  categoryDisclaimer: null
};
