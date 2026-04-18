// LGLW5-D_bankruptcy-chapter7-ny_01.js
// Category: consumer (Consumer & Debt)
// Jurisdiction: ny (New York State)
// Source: Prof. Gregory Germain, Syracuse University College of Law
// Reviewed by Prof. Germain — April 2026
// Schema: V3 — English only (translation re-sync pending)
// LGLW5-D | Updated April 8, 2026

export const entry = {
  id: "bankruptcy-chapter7-ny",
  category: "consumer",
  tier: "federal",
  jurisdiction: "us-ny",

  authorityType: "federal-statute",
  status: "active",

  title: { en: "Chapter 7 Bankruptcy — Eliminating Debt and Starting Over" },

  summary: {
    en: "Chapter 7 is the most common type of personal bankruptcy. It eliminates most unsecured debt — credit cards, medical bills, personal loans — in about 4 months."
  },

  whoQualifies: {
    en: [
      "Anyone whose income is at or below New York's median for their household size, or who passes the full means test",
      "You file your bankruptcy case in the court for the county where you resided the most during the 180 days before filing",
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
      "The automatic stay stops all collection calls, lawsuits, and wage garnishments the moment you file (11 U.S.C. § 362).",
      "A Chapter 7 discharge is permanent — creditors can never legally collect a discharged debt again (11 U.S.C. § 524(a)).",
      "You cannot be fired from your job, or denied a government benefit, because you filed for bankruptcy (11 U.S.C. § 525).",
      "You may keep your exempt property (11 U.S.C. § 522). If you are subject to New York's exemptions, you have the right to choose between the New York state exemptions or the federal bankruptcy exemptions.",
      "If a creditor knowingly violates the automatic stay or discharge order, you may be entitled to damages and sanctions (11 U.S.C. § 362(k), § 524).",
      "You are free to voluntarily pay any discharged debt if you choose to, but the creditor cannot take any action to obtain payment (11 U.S.C. § 524(f))."
    ]
  },

  legalOptions: {
    en: [
      "An approved credit counseling course is required prior to filing bankruptcy. Courses cost between $12–$50 and are available over the internet, over the telephone, and in some cases in person. Fee waivers are available.",
      "An approved debtor education course is required after filing and prior to receiving a discharge. Cost and formats are similar to the pre-filing course.",
      "The Chapter 7 filing fee is $338. Filers with income below 150% of the federal poverty line may request a waiver from the Bankruptcy Court (Bankruptcy Rule 1006(c), 28 U.S.C. § 1930(f)). Installment payment of the fee is also available (Bankruptcy Rule 1006(b)).",
      "Monroe County residents file with the U.S. Bankruptcy Court for the Western District of New York, 100 State Street, Rochester, NY 14614.",
      "Official bankruptcy forms are available at uscourts.gov/forms/bankruptcy-forms.",
      "Free legal help is available through Legal Aid Society of Rochester at (585) 232-4090."
    ]
  },

  example: {
    en: "Marco has $34,000 in credit card debts and $12,000 in medical bills. He earns $2,800 a month after taxes — below New York's median for a single person. He files Chapter 7. The automatic stay stops two collection lawsuits the day he files. The trustee reviews his assets — he owns no real estate, his car equity is below the exemption cap, and his other possessions are exempt. There is nothing to liquidate. About four months after filing, he receives his discharge. All $46,000 in unsecured debt is eliminated."
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
      focus: "Bankruptcy case assistance for residents of Syracuse and surrounding counties",
      qualifier: "Income-eligible individuals",
      access: "Call for intake",
      outcome: "Law students supervised by law faculty provide direct bankruptcy help",
      phone: "(315) 443-4582",
      url: "https://law.syracuse.edu/academics/experiential-courses-clinics-externships/clinics/bankruptcy-clinic/",
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
    "https://www.law.cornell.edu/uscode/text/11/chapter-7",
    "https://www.law.cornell.edu/uscode/text/11/362",
    "https://www.law.cornell.edu/uscode/text/11/522",
    "https://www.uscourts.gov/services-forms/bankruptcy",
    "https://www.justice.gov/ust/means-testing",
    "https://www.justia.com/bankruptcy/exemptions/bankruptcy-exemptions-50-state-survey/",
    "https://www.nywb.uscourts.gov"
  ],

  lastAudited: "2026-04-08",
  lastVerifiedBy: "Prof. Gregory Germain (reviewed) + Claude + Tony",
  reviewedBy: "Professor Gregory Germain, Syracuse University College of Law — April 2026",
  volatility: "moderate",
  emergencyFlag: false,
  disclaimer: true,
  categoryDisclaimer: null
};
