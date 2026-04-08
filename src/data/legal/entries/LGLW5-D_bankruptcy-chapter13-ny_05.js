// LGLW5-D_bankruptcy-chapter13-ny_05.js
// Category: consumer (Consumer & Debt)
// Jurisdiction: ny (New York State)
// Source: Prof. Gregory Germain, Syracuse University College of Law
// Reviewed by Prof. Germain — April 2026
// Schema: V3 — English only (translation re-sync pending)
// LGLW5-D | Updated April 8, 2026

export const entry = {
  id: "bankruptcy-chapter13-ny",
  category: "consumer",
  tier: "federal",
  jurisdiction: "ny",
  status: "active",

  title: { en: "Chapter 13 Bankruptcy — Keeping Property Through a Repayment Plan" },

  summary: {
    en: "Chapter 13 lets you keep all of your property, cure home mortgage defaults, and restructure secured debt. You pay creditors from your post-bankruptcy income over 3–5 years. It can stop a foreclosure, but it is long, complex, expensive, and many cases fail."
  },

  whoQualifies: {
    en: [
      "Anyone with regular income under the debt limits who needs to restructure secured debts or cure home mortgage arrears",
      "Filers who do not qualify for Chapter 7 because their income is too high for the means test",
      "Filers who received a Chapter 7 discharge too recently to file another Chapter 7",
      "Current Chapter 13 debt limits: approximately $526,700 unsecured / $1,580,125 secured (11 U.S.C. § 109(e), subject to periodic adjustment)"
    ]
  },

  whatItMeans: {
    en: "Chapter 13 is a court-supervised repayment plan lasting 3 to 5 years. You pay your \"projected disposable income\" each month to a trustee who distributes the funds to creditors. Below-median debtors use a simpler calculation based on means test income less reasonable living expenses allowed by the bankruptcy judge. Above-median debtors use IRS-allowed national and local living expenses plus debt service and trustee expenses (11 U.S.C. § 1325(b)). Creditors must receive at least as much in present value as they would have received in a Chapter 7 liquidation (11 U.S.C. § 1325(a)(4)). Missing plan payments can result in dismissal."
  },

  yourRights: {
    en: [
      "You keep all your property in Chapter 13, but you must pay creditors more in value than they would have received from the liquidation of your property in Chapter 7.",
      "You have the right to cure mortgage arrears over the life of your plan if you file before the foreclosure sale takes place.",
      "You may restructure secured claims other than home mortgages by paying them off in equal monthly installments over the plan term at potentially lower interest rates than your contract (11 U.S.C. § 1322(b)(2), § 1325(a)(5)). You can also strip off secured claims exceeding the value of the property, except on home loans and car loans less than 910 days old.",
      "You or any party may seek to modify your plan to decrease or increase payments if your financial situation changes significantly during the plan period (11 U.S.C. § 1329).",
      "You have the right to dismiss your Chapter 13 case at any time (11 U.S.C. § 1307).",
      "The automatic stay protects you from all collection actions during your plan."
    ]
  },

  legalOptions: {
    en: [
      "The Chapter 13 filing fee is $313. Installment payment of the fee may be available.",
      "A 5-year plan is required if your income is above the median. A 3-year plan may be allowed if below (11 U.S.C. § 1325(b)(4)).",
      "Credit counseling and debtor education courses are required — same as Chapter 7. Cost is $12–$50 with fee waivers available.",
      "Chapter 13 is complex, and hiring an attorney is generally necessary. Attorney fees are much higher than for Chapter 7. Pro bono help is limited.",
      "Free legal guidance is available through Legal Aid Society of Rochester at (585) 232-4090.",
      "Monroe County Bar Association offers lawyer referrals at (585) 546-2130."
    ]
  },

  example: {
    en: "Rosa falls 6 months behind on her mortgage during a period of unemployment — $9,600 in arrears. Her bank begins foreclosure proceedings. She files Chapter 13 the day before the scheduled foreclosure sale. The automatic stay halts the sale. Her plan spreads the $9,600 in arrears over 60 months while she continues her regular mortgage payments. The plan is confirmed by the court. Five years later, she completes every payment. Her mortgage is current and she keeps her home, and she receives a discharge of the debts she was unable to pay using her projected disposable income during the plan term."
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
      focus: "Referral to bankruptcy attorneys (fee-based)",
      qualifier: "Open to all Monroe County residents",
      access: "Call for referral",
      outcome: "Connects you with a licensed bankruptcy attorney; attorney fees are separate",
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
    "bankruptcy-discharge-ny",
    "eviction-process-ny"
  ],
  relatedHelpResources: [],
  tags: [
    "chapter 13", "stop foreclosure", "save my house",
    "mortgage arrears", "repayment plan", "keep my home",
    "behind on mortgage", "wage earner bankruptcy"
  ],
  sources: [
    "https://www.law.cornell.edu/uscode/text/11/chapter-13",
    "https://www.uscourts.gov/services-forms/bankruptcy"
  ],

  lastAudited: "2026-04-08",
  lastVerifiedBy: "Prof. Gregory Germain (reviewed) + Claude + Tony",
  reviewedBy: "Professor Gregory Germain, Syracuse University College of Law — April 2026",
  volatility: "moderate",
  emergencyFlag: false,
  disclaimer: true,
  categoryDisclaimer: null
};
