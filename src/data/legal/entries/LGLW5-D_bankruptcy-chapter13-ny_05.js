// LGLW5-D_bankruptcy-chapter13-ny_05.js
// Category: consumer (Consumer & Debt)
// Jurisdiction: ny (New York State)
// Schema: V3 — English only (translation after verification)
// LGLW5-D | April 5, 2026

export const entry = {
  id: "bankruptcy-chapter13-ny",
  category: "consumer",
  tier: "federal",
  jurisdiction: "ny",
  status: "active",

  title: { en: "Chapter 13 Bankruptcy — Keeping Property Through a Repayment Plan" },

  summary: {
    en: "Chapter 13 lets you keep all your property while repaying some or all of your debts over 3–5 years. It can stop a foreclosure and protect assets that would be lost in Chapter 7, but it is complex, expensive, and most cases fail."
  },

  whoQualifies: {
    en: [
      "Anyone with regular income who needs to restructure debts or cure mortgage arrears",
      "Filers who do not qualify for Chapter 7 because their income is too high for the means test",
      "Filers who received a Chapter 7 discharge too recently to file another Chapter 7",
      "Debt limits apply — current limits are published at uscourts.gov"
    ]
  },

  whatItMeans: {
    en: "Chapter 13 is a court-supervised repayment plan lasting 3 to 5 years. You propose a plan that pays creditors from your disposable income each month. You keep all your property, but creditors must receive at least as much as they would have gotten in a Chapter 7 liquidation. The court and a trustee monitor your plan, and missing payments can result in dismissal of your case."
  },

  yourRights: {
    en: [
      "You keep all your property in Chapter 13, including assets that would be non-exempt in Chapter 7.",
      "You have the right to cure mortgage arrears over the life of your plan — even after foreclosure has begun.",
      "You may modify your plan if your financial situation changes significantly during the plan period.",
      "You have the right to dismiss your Chapter 13 case at any time.",
      "The automatic stay protects you from all collection actions during your plan."
    ]
  },

  legalOptions: {
    en: [
      "The Chapter 13 filing fee is $313. Payment in installments may be available.",
      "A 5-year plan is required if your income is above the median. A 3-year plan may be allowed if below.",
      "Pre-filing credit counseling is required — same as Chapter 7. Cost is $12–$50 with fee waivers available.",
      "Chapter 13 is complex, and hiring an attorney is generally necessary. Pro bono help is limited.",
      "Free legal guidance is available through Legal Aid Society of Rochester at (585) 232-4090.",
      "Monroe County Bar Association offers lawyer referrals at (585) 546-2130."
    ]
  },

  example: {
    en: "Rosa falls 6 months behind on her mortgage during a period of unemployment — $9,600 in arrears. Her bank begins foreclosure proceedings. She files Chapter 13 the day before the scheduled foreclosure sale. The automatic stay halts the sale. Her plan spreads the $9,600 in arrears over 60 months while she continues her regular mortgage payments. The plan is confirmed by the court. Five years later, she completes every payment. Her mortgage is current and she keeps her home."
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
      type: "low-cost",
      name: "Monroe County Bar Association — Lawyer Referral Service",
      focus: "Referral to bankruptcy attorneys",
      qualifier: "Anyone — fee-based consultations with referred attorneys",
      access: "Call for referral",
      outcome: "Connected with a bankruptcy attorney for consultation",
      phone: "(585) 546-2130",
      url: "https://www.mcba.org",
      verified: true,
      bilingual: false,
      languages: []
    }
  ],

  relatedIds: [
    "bankruptcy-chapter7-ny",
    "bankruptcy-means-test-ny",
    "bankruptcy-exemptions-ny",
    "bankruptcy-automatic-stay-ny",
    "bankruptcy-discharge-ny"
  ],
  relatedHelpResources: [],
  tags: [
    "chapter 13", "repayment plan", "save my home",
    "stop foreclosure", "catch up on mortgage", "keep my property",
    "income too high for chapter 7", "reorganization",
    "payment plan bankruptcy", "cure arrears", "behind on mortgage"
  ],
  sources: [
    "https://www.law.cornell.edu/uscode/text/11/chapter-13",
    "https://www.uscourts.gov/services-forms/bankruptcy"
  ],

  lastAudited: "2026-04-05",
  lastVerifiedBy: "Claude + Tony",
  volatility: "moderate",
  emergencyFlag: false,
  disclaimer: true,
  categoryDisclaimer: null
};
