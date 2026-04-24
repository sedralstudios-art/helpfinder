export const AMENDED_TAX_RETURN_1040X_NY = {
  id: "amended-tax-return-1040x-ny",
  category: "consumer",
  tier: "federal",
  jurisdiction: "us-ny",
  authorityType: "federal-statute",
  primaryStatute: "26 USC 6511",
  status: "active",

  title: { en: "Amending a Federal Tax Return — Form 1040-X and the Three-Year Refund Window" },

  summary: {
    en: "A taxpayer who discovered a missed deduction, forgotten income, a wrong filing status, or an unclaimed credit after filing can correct the return with Form 1040-X. The refund window is generally three years from the original filing date (or two years from when the tax was paid, whichever is later). After the window closes, the refund is lost. For New York state returns, Form IT-201-X is the parallel process."
  },

  whoQualifies: {
    en: [
      "Any taxpayer who filed a federal return and later discovered an error that affects their tax or refund.",
      "Any taxpayer who forgot to claim a deduction, credit, or dependent.",
      "Any taxpayer who should have filed as Head of Household but filed as Single.",
      "Any taxpayer who missed a refundable credit such as EITC, Child Tax Credit, or a Recovery Rebate Credit.",
      "Any taxpayer who received a corrected W-2 or 1099 after filing."
    ]
  },

  whatItMeans: {
    en: "Internal Revenue Code Section 6511 sets the time limits for tax refund claims. For most taxpayers, an amended return claiming a refund must be filed within three years from the date the original return was filed or two years from the date the tax was paid, whichever is later. A return filed on or before its due date is treated as filed on the due date — so a 2023 return filed in February 2024 is considered filed April 15, 2024, and the three-year window runs to April 15, 2027. Form 1040-X is the federal amendment form. It includes three columns: original amount, correction, and corrected amount. Common reasons to amend: missed a 1099 or W-2, forgot to claim a dependent, wrong filing status (Single instead of Head of Household), missed a refundable credit (EITC, Child Tax Credit, American Opportunity Credit for education), or the IRS sent an adjustment that the taxpayer disputes. Form 1040-X can be e-filed for recent tax years (2021 forward generally) or paper-filed. Attach any schedules or forms that changed. Processing takes about 16 weeks. The IRS has a Where's My Amended Return tool at irs.gov/filing. For an amended return that increases tax owed, the taxpayer must pay the additional tax with the amended return — the IRS will bill penalties and interest from the original due date. For New York state, Form IT-201-X is the state amended return. Same three-year window. Filing a federal amendment also typically requires filing a state amendment because state tax is often based on federal AGI. If the original return had math errors, the IRS usually catches these and adjusts automatically — no amended return needed. Amending a return does not restart the three-year IRS audit window unless the amendment substantially changes the original.\n\nFree help is available. The Volunteer Income Tax Assistance (VITA) program prepares amended returns at no cost for taxpayers under an income threshold (around $64,000 for 2024). VITA sites are staffed by IRS-certified volunteers and handle both federal and NY state amendments. AARP Tax-Aide serves moderate-income filers of any age at no cost and does not require AARP membership. Both programs prepare the return, verify the math, and confirm the claim is within the three-year window before filing."
  },

  yourRights: {
    en: [
      "A taxpayer has the right to amend a return within three years of filing to claim a refund owed (26 USC 6511).",
      "A taxpayer who paid additional tax has two years from payment to claim a refund.",
      "Missed refundable credits (EITC, CTC, Recovery Rebate) can be claimed on an amendment if within the window.",
      "The IRS generally must pay interest on refunds issued after 45 days.",
      "A taxpayer who disputes an IRS adjustment has appeal rights through the IRS Office of Appeals.",
      "A state amendment (NY IT-201-X) can be filed up to three years from the original state return."
    ]
  },

  legalOptions: {
    en: [
      "Form 1040-X (federal) and IT-201-X (NY state) are both free to file. Use tax software, paper forms, or free tax preparation help.",
      "VITA and AARP Tax-Aide sites prepare amended returns at no charge. Find a VITA site by calling 211 or texting FOOD to 304-304 (VITA and summer meals use the same hotline).",
      "AARP Tax-Aide: (888) 227-7669 — no AARP membership required, serves moderate-income taxpayers.",
      "IRS Free File amended return option: available at irs.gov/freefile.",
      "For federal amendments resulting in large refunds or complex situations, the Low Income Taxpayer Clinic at Legal Aid Society of Rochester at (585) 232-4090 provides free representation.",
      "To track an amended return: Where's My Amended Return tool at irs.gov/filing/wheres-my-amended-return.",
      "IRS help line for individual taxpayers: (800) 829-1040."
    ]
  },

  example: {
    en: "A Rochester taxpayer filed his 2022 return and claimed Single filing status. A VITA volunteer later pointed out that since he maintained a home for his qualifying child more than half the year and the child lived with him, he qualified for Head of Household — a lower tax bracket and a higher standard deduction. He filed Form 1040-X changing the filing status and received an additional refund of about $1,200. Because he filed the amendment in 2024, he was well within the three-year window for the 2022 return. He also filed IT-201-X to update his state return and received a smaller additional NY state refund."
  },

  counsel: [
    {
      type: "free",
      name: "VITA Free Tax Preparation",
      focus: "Free tax preparation including amended returns for qualifying filers",
      qualifier: "Generally income under VITA threshold",
      access: "211 or (800) 906-9887 for site locations",
      outcome: "Preparation of 1040-X and IT-201-X at no charge",
      phone: "211",
      url: "https://www.irs.gov/individuals/free-tax-return-preparation-for-qualifying-taxpayers",
      verified: true,
      bilingual: true,
      languages: ["es"]
    },
    {
      type: "government",
      name: "IRS Individual Help Line",
      focus: "Tax account issues, amended return questions, refund tracking",
      qualifier: "Any U.S. taxpayer",
      access: "Phone at (800) 829-1040",
      outcome: "Account lookups, amended return guidance",
      phone: "(800) 829-1040",
      url: "https://www.irs.gov/filing/wheres-my-amended-return",
      verified: true,
      bilingual: true,
      languages: ["es"]
    }
  ],

  relatedIds: [
    "free-tax-filing-ny",
    "earned-income-tax-credit-ny",
    "economic-impact-payment-recovery-ny",
    "irs-offer-in-compromise-ny",
    "tax-refund-garnishment-ny"
  ],

  relatedHelpResources: [],

  tags: [
    "Form 1040-X",
    "amended tax return",
    "IT-201-X",
    "three year refund window",
    "26 USC 6511",
    "missed deduction",
    "wrong filing status",
    "claim forgotten credit",
    "corrected W-2",
    "tax amendment"
  ],

  sources: [
    "https://www.law.cornell.edu/uscode/text/26/6511",
    "https://www.irs.gov/forms-pubs/about-form-1040x"
  ],

  lastVerified: "2026-04-23",
  volatility: "low",
  emergencyFlag: false,
  disclaimer: true,
  categoryDisclaimer: null
};
