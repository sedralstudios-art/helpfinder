export const TAX_REFUND_GARNISHMENT_NY = {
  id: "tax-refund-garnishment-ny",
  category: "consumer",
  tier: "state",
  jurisdiction: "us-ny",
  authorityType: "state-statute",
  primaryStatute: "31 USC 3720A",
  status: "active",

  title: { en: "Tax Refund Taken by the Government — Why It Happens and What to Do" },

  summary: {
    en: "If a tax refund was smaller than expected or did not arrive at all, it may have been taken to pay a debt. The federal government can take federal refunds for child support, student loans, and other government debts. New York State can take state refunds for past-due taxes and other obligations. There are ways to challenge it."
  },

  whoQualifies: {
    en: [
      "Anyone whose federal or state tax refund was reduced or taken entirely.",
      "Anyone who received a notice that their refund was applied to a debt they did not know about.",
      "A spouse who filed jointly and lost their share of the refund because of the other spouse's debt.",
      "Anyone who believes the debt that triggered the offset is wrong or already paid."
    ]
  },

  whatItMeans: {
    en: "The federal Treasury Offset Program allows the government to take part or all of a federal tax refund to pay certain debts. The most common reasons are past-due child support, defaulted federal student loans, unpaid federal taxes, and certain state debts. The IRS sends a notice (usually a CP49 letter) explaining how much was taken and why. For New York State refunds, the Department of Taxation and Finance can take the refund for past-due state taxes, unpaid child support, and other state debts. When a refund is taken, this is called an offset. If a married couple filed jointly and only one spouse owes the debt, the other spouse can file an Injured Spouse Allocation (IRS Form 8379) to get their share of the refund back. This is not the same as Innocent Spouse Relief, which is for disputes about taxes the other spouse failed to report. If the debt that triggered the offset is wrong — for example, the child support is actually current or the student loan was already rehabilitated — the person can challenge the offset by contacting the agency that reported the debt."
  },

  yourRights: {
    en: [
      "A person whose refund was offset has the right to receive a written notice explaining the amount taken and the debt it was applied to.",
      "A person has the right to challenge the offset if they believe the debt is wrong, already paid, or not theirs.",
      "A spouse who filed jointly has the right to file an Injured Spouse Allocation (Form 8379) to recover their share of a refund taken for the other spouse's debt.",
      "A person whose refund was taken for student loans has the right to request a review if the loan was rehabilitated or consolidated before the offset.",
      "A person has the right to contact the agency that reported the debt (child support enforcement, student loan servicer, or state tax department) to dispute the amount.",
      "If the offset was for child support, the person has the right to request a review of the support order if circumstances have changed."
    ]
  },

  legalOptions: {
    en: [
      "The Treasury Offset Program can be reached at (800) 304-3107 to find out which agency received the offset and why.",
      "IRS Form 8379 (Injured Spouse Allocation) can be filed with the tax return or separately after the offset happens. Processing takes about 14 weeks.",
      "For child support offsets, the Monroe County Child Support Enforcement Unit can be reached at (585) 753-6071.",
      "For federal student loan offsets, the Department of Education's Default Resolution Group can be reached at (800) 621-3115.",
      "For New York State tax refund offsets, the NYS Department of Taxation and Finance can be reached at (518) 457-5181.",
      "Free legal help with tax refund offsets and debt disputes is available through Legal Aid Society of Rochester at (585) 232-4090 and Empire Justice Center at (585) 454-4060."
    ]
  },

  example: {
    en: "LaShonda expected a $3,200 federal refund but only received $1,400. She received a letter from the IRS saying $1,800 was taken for past-due child support reported by Monroe County. LaShonda believed the amount was wrong because she had been making payments. She called the Child Support Enforcement Unit, which reviewed her account and found that a payment had not been credited. After the correction, the offset was reversed and LaShonda received the remaining $1,800."
  },

  counsel: [
    {
      type: "government",
      name: "Treasury Offset Program — Call Center",
      focus: "Information about federal tax refund offsets",
      qualifier: "Anyone whose federal refund was offset",
      access: "Phone at (800) 304-3107",
      outcome: "Information about which agency received the offset and how to dispute",
      phone: "(800) 304-3107",
      url: "https://fiscal.treasury.gov/top/",
      verified: true,
      bilingual: true,
      languages: ["es"]
    },
    {
      type: "free",
      name: "Legal Aid Society of Rochester",
      focus: "Tax issues, debt disputes, child support",
      qualifier: "Low income residents of Monroe and surrounding counties",
      access: "Phone intake at (585) 232-4090",
      outcome: "Legal advice and representation",
      phone: "(585) 232-4090",
      url: "https://www.lasroc.org",
      verified: true,
      bilingual: true,
      languages: ["es"]
    }
  ],

  relatedIds: [
    "child-support-ny",
    "child-support-modification-ny",
    "student-loan-options-ny",
    "student-loan-forgiveness-pslf-ny",
    "wage-garnishment-defense-ny",
    "free-tax-filing-ny"
  ],

  relatedHelpResources: [],

  tags: [
    "tax refund taken",
    "refund offset",
    "tax refund garnished",
    "refund applied to debt",
    "injured spouse",
    "child support refund",
    "student loan refund",
    "treasury offset",
    "tax refund missing",
    "refund smaller than expected"
  ],

  sources: [
    "https://www.law.cornell.edu/uscode/text/31/3720A",
    "https://www.nysenate.gov/legislation/laws/TAX/171-C",
    "https://fiscal.treasury.gov/top/",
    "https://www.irs.gov/forms-pubs/about-form-8379"
  ],

  lastVerified: "2026-04-17",
  volatility: "moderate",
  emergencyFlag: false,
  disclaimer: true,
  categoryDisclaimer: null
};
