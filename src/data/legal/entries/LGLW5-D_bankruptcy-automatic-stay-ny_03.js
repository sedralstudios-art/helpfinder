// LGLW5-D_bankruptcy-automatic-stay-ny_03.js
// Category: consumer (Consumer & Debt)
// Jurisdiction: ny (New York State)
// Source: Prof. Gregory Germain, Syracuse University College of Law
// Reviewed by Prof. Germain — April 2026
// Schema: V3 — English only (translation re-sync pending)
// LGLW5-D | Updated April 8, 2026

export const entry = {
  id: "bankruptcy-automatic-stay-ny",
  category: "consumer",
  tier: "federal",
  jurisdiction: "ny",
  status: "active",

  title: { en: "The Automatic Stay — Instant Protection From Creditors" },

  summary: {
    en: "When you file for bankruptcy, a federal court order called the automatic stay takes effect immediately (11 U.S.C. § 362(a)). It stops collection calls, lawsuits, wage garnishments, and foreclosures before any judge reviews your case."
  },

  whoQualifies: {
    en: [
      "Anyone who files a Chapter 7, Chapter 13, or Chapter 11 bankruptcy petition",
      "The stay begins the instant your petition is filed with the court",
      "Protection applies to secured and unsecured creditors alike",
      "Limited exceptions exist for domestic support obligations and certain tax actions"
    ]
  },

  whatItMeans: {
    en: "The automatic stay (11 U.S.C. § 362) is one of the strongest protections in bankruptcy law. It takes effect the moment your petition is filed — not when a judge reviews it. All collection calls, lawsuits, wage garnishments, bank levies, foreclosures, and repossessions must stop immediately. The stay lasts until the court issues your discharge, typically 3–4 months in Chapter 7."
  },

  yourRights: {
    en: [
      "The stay begins the instant you file — before any court hearing or review.",
      "Any creditor action taken after your filing that violates the stay is void.",
      "A creditor with notice of the bankruptcy filing who violates the stay can be held in contempt and ordered to pay damages, attorney fees, and punitive damages.",
      "Utility companies cannot shut off service for 20 days after filing, but can demand a reasonable deposit for post-bankruptcy utility usage (11 U.S.C. § 366).",
      "Creditors may ask the court to lift the stay, but the burden is on them to prove it should be lifted (11 U.S.C. § 362(d))."
    ]
  },

  legalOptions: {
    en: [
      "Records of creditor contact after filing — date, time, name, and details — can support a contempt motion in bankruptcy court.",
      "After discharge, the post-discharge injunction replaces the stay and permanently bars collection of discharged debts (11 U.S.C. § 524).",
      "Free legal help is available through Legal Aid Society of Rochester at (585) 232-4090.",
      "Empire Justice Center in Rochester provides consumer and bankruptcy legal assistance at (585) 454-4060."
    ]
  },

  example: {
    en: "Three debt collectors have been calling Nina every day. One has a wage garnishment order set to take effect on Friday. Nina files her Chapter 7 petition on Thursday afternoon. The filing timestamp is her protection. Friday morning, her employer receives the garnishment. Since Nina filed before the garnishment order took effect, the creditor must stop the garnishment upon learning of the bankruptcy, and must refund amounts collected after the bankruptcy. Creditors cannot take further collection actions during the bankruptcy case without a court order lifting the stay."
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
    }
  ],

  relatedIds: [
    "bankruptcy-chapter7-ny",
    "bankruptcy-chapter13-ny",
    "bankruptcy-discharge-ny",
    "debt-collectors-ny"
  ],
  relatedHelpResources: [],
  tags: [
    "automatic stay", "stop collection calls", "stop garnishment",
    "stop foreclosure", "bankruptcy protection", "creditor harassment",
    "wage garnishment stop", "bank levy", "repossession stop"
  ],
  sources: [
    "https://www.law.cornell.edu/uscode/text/11/362",
    "https://www.uscourts.gov/services-forms/bankruptcy"
  ],

  lastAudited: "2026-04-08",
  lastVerifiedBy: "Prof. Gregory Germain (reviewed) + Claude + Tony",
  reviewedBy: "Professor Gregory Germain, Syracuse University College of Law — April 2026",
  volatility: "low",
  emergencyFlag: false,
  disclaimer: true,
  categoryDisclaimer: null
};
