export const EARNED_INCOME_TAX_CREDIT_NY = {
  id: "earned-income-tax-credit-ny",
  category: "benefits",
  tier: "state",
  jurisdiction: "us-ny",
  authorityType: "state-statute",
  primaryStatute: "26 USC 32",
  status: "active",

  title: { en: "Earned Income Tax Credit — Money Back for Working Families" },

  summary: {
    en: "The Earned Income Tax Credit is a refundable tax credit for people who work and earn low to moderate income. You can get money back even if you do not owe any taxes. New York State adds an additional credit worth 30% of the federal amount. You must file a tax return to receive it."
  },

  whoQualifies: {
    en: [
      "Workers with earned income from wages, salary, tips, or self-employment.",
      "Families with qualifying children who lived with them for more than half the year.",
      "Workers without children who are between ages 25 and 64 may qualify for a smaller credit.",
      "Income must be below the federal EITC income limits for your filing status and number of qualifying children.",
      "Investment income must be below the annual limit set by the IRS.",
      "You must have a valid Social Security number.",
      "You cannot be claimed as a dependent on someone else's tax return.",
      "The credit is available whether you work full-time, part-time, or are self-employed."
    ]
  },

  whatItMeans: {
    en: "The Earned Income Tax Credit is one of the largest cash benefits available to working families. It is a refundable credit, which means you receive the full amount even if you owe no income tax. The federal credit amount depends on your income, filing status, and number of qualifying children. Families with more children receive a larger credit. New York State provides an additional credit equal to 30% of the federal credit amount. These credits are claimed when you file your federal and state tax returns. You do not need to apply separately. If you qualify for the federal EITC, you automatically qualify for the New York State credit. New York also offers a Non-Custodial Parent Earned Income Credit for non-custodial parents who are current on child support payments. The Empire State Child Credit may provide additional money for families with young children. Credit amounts and income limits change each year. Current figures are published by the IRS and the NYS Department of Taxation and Finance."
  },

  yourRights: {
    en: [
      "You have the right to claim the EITC by filing a federal and New York State tax return, even if your income is too low to owe taxes.",
      "You have the right to claim the credit for up to three prior tax years if you were eligible but did not file.",
      "You have the right to free tax preparation help if your income is below certain thresholds, through IRS Volunteer Income Tax Assistance (VITA) sites and other free programs.",
      "You have the right to file your New York State return for free through the NYS Department of Taxation and Finance Free File program.",
      "You have the right to receive both the federal and state EITC. Receiving the EITC does not reduce your SNAP, Medicaid, or other public benefits."
    ]
  },

  legalOptions: {
    en: [
      "Under 26 U.S.C. § 32 (federal) and NY Tax Law § 606(d) (state), the EITC is claimed by filing federal Form 1040 and New York State Form IT-215.",
      "The IRS provides an online EITC eligibility tool and income limit tables at irs.gov/eitc.",
      "The NYS Department of Taxation and Finance provides state credit information at tax.ny.gov/pit/credits/earned_income_credit.htm.",
      "Free tax preparation is available through IRS VITA (Volunteer Income Tax Assistance) and TCE (Tax Counseling for the Elderly) sites. To find a free tax prep site, the IRS locator is available at irs.treasury.gov/freetaxprep.",
      "The NYS Department of Taxation and Finance offers free e-filing through its Free File program at tax.ny.gov.",
      "Non-custodial parents who are current on child support may be eligible for the New York State Non-Custodial Parent Earned Income Credit. Information is available at tax.ny.gov.",
      "The Empire State Child Credit may provide additional refundable credits for families with qualifying children. For tax year 2025, the credit is up to $1,000 per qualifying child under age 4.",
      "Free legal help with tax-related benefits issues is available through Empire Justice Center's Low-Income Taxpayer Clinic at (585) 900-1024."
    ]
  },

  example: {
    en: "David works as a warehouse associate in Monroe County and earns about $28,000 a year. He has two children. He filed his federal and state tax returns through a free VITA site at a local library. His federal EITC was several thousand dollars. His New York State credit added another 30% on top of that. He also received the Empire State Child Credit. The combined refund helped him pay for car repairs and catch up on bills. He did not have to pay anything for the tax preparation."
  },

  counsel: [
    {
      type: "free",
      name: "Empire Justice Center — Low-Income Taxpayer Clinic",
      focus: "Tax credits, EITC, IRS disputes, low-income taxpayer issues",
      qualifier: "Low income residents statewide (all NYS counties except NYC)",
      access: "Phone intake at (585) 900-1024",
      outcome: "Tax preparation assistance, IRS dispute resolution, advocacy",
      phone: "(585) 900-1024",
      url: "https://www.empirejustice.org",
      verified: true,
      bilingual: false,
      languages: []
    },
    {
      type: "free",
      name: "Legal Aid Society of Rochester",
      focus: "Public benefits, tax credits, fair hearings",
      qualifier: "Low income residents of Monroe and surrounding counties",
      access: "Phone intake, walk-in, or referral",
      outcome: "Direct representation and advice on benefits cases",
      phone: "(585) 232-4090",
      url: "https://www.lasroc.org",
      verified: true,
      bilingual: true,
      languages: ["es"]
    },
    {
      type: "free",
      name: "Legal Assistance of Western New York (LawNY)",
      focus: "Public benefits, consumer issues",
      qualifier: "Low income residents in 14 Western NY counties including Monroe",
      access: "Phone intake at (585) 325-2520",
      outcome: "Direct representation",
      phone: "(585) 325-2520",
      url: "https://www.lawny.org",
      verified: true,
      bilingual: false,
      languages: []
    }
  ],

  relatedIds: [
    "snap-rights-ny",
    "childcare-assistance-ny",
    "minimum-wage-ny",
    "benefits-denial-appeal-ny"
  ],

  relatedHelpResources: [],

  tags: [
    "tax refund",
    "EITC",
    "earned income credit",
    "tax credit for working",
    "money back taxes",
    "free tax filing",
    "low income tax credit",
    "child tax credit",
    "working family credit",
    "tax help",
    "VITA free tax prep",
    "refundable tax credit"
  ],

  sources: [
    "https://www.irs.gov/credits-deductions/individuals/earned-income-tax-credit-eitc",
    "https://www.tax.ny.gov/pit/credits/earned_income_credit.htm",
    "https://www.law.cornell.edu/uscode/text/26/32"
  ],

  lastVerified: "2026-04-04",
  volatility: "moderate",
  emergencyFlag: false,
  disclaimer: true,
  categoryDisclaimer: null
};
