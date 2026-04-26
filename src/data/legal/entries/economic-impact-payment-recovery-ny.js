export const ECONOMIC_IMPACT_PAYMENT_RECOVERY_NY = {
  id: "economic-impact-payment-recovery-ny",
  category: "benefits",
  tier: "federal",
  jurisdiction: "us-ny",
  authorityType: "federal-statute",
  primaryStatute: "26 USC 6428",
  status: "active",

  title: { en: "Missing Stimulus Checks and Recovery Rebate Credits — How to Claim Past Payments" },

  summary: {
    en: "The federal government issued three rounds of Economic Impact Payments (stimulus checks) in 2020 and 2021. People who missed a payment or received less than the law entitled them to can still claim the Recovery Rebate Credit by filing or amending a tax return. The deadline for claiming the 2020 and 2021 credits is three years after the original due date — a narrow but real window."
  },

  whoQualifies: {
    en: [
      "Anyone who did not receive one or more of the three Economic Impact Payments (EIPs) issued in 2020-2021.",
      "Anyone whose EIP was less than the amount the law entitled them to — because of a dependent not counted, income misread, or other error.",
      "Anyone who had a baby, adopted a child, or gained a dependent in the tax year and did not receive the dependent portion of the EIP.",
      "Anyone who did not file a tax return in 2020 or 2021 but was eligible for payments."
    ]
  },

  whatItMeans: {
    en: "Three rounds of Economic Impact Payments were authorized by Congress during the COVID-19 pandemic: the first round up to $1,200 per adult plus $500 per dependent under the CARES Act of 2020, the second round up to $600 plus $600 per dependent under the Consolidated Appropriations Act of late 2020, and the third round up to $1,400 plus $1,400 per dependent under the American Rescue Plan of 2021. These were authorized under Internal Revenue Code Section 6428 and related sections. Payments were based on the most recent tax return on file with the IRS. People who did not file, who had major life changes (new baby, divorce, job loss), or whose IRS information was outdated often received less than they were entitled to — or nothing. The Recovery Rebate Credit is the mechanism to claim missing stimulus. For the first and second rounds, the credit is claimed on the 2020 tax return (Form 1040 line 30). For the third round, it is claimed on the 2021 tax return. A person who did not file for 2020 or 2021 can still file a late return to claim the credit — there is no penalty for filing late when the taxpayer is owed a refund. The claim deadline is three years from the original filing deadline: April 15, 2024 for the 2020 tax year (now past for most people), April 15, 2025 for the 2021 tax year (past for those who have not yet filed). The IRS generally does not issue these credits automatically — the taxpayer must file or amend a return. For people with no income, filing is still worth it if there is a Recovery Rebate Credit or other refundable credit (EITC, Child Tax Credit) to claim.\n\nWhere to get free help. The Volunteer Income Tax Assistance (VITA) program prepares amended and late returns at no cost for taxpayers under an income threshold reset each year by the IRS. VITA sites are staffed by IRS-certified volunteers and know the Recovery Rebate Credit forms well. The current VITA income threshold and nearest sites are at irs.gov/individuals/free-tax-return-preparation-for-qualifying-taxpayers. Monroe County VITA locations change each tax season; calling 211 or the United Way hotline gives the current list. AARP Tax-Aide serves moderate-income filers of any age at no cost and does not require AARP membership."
  },

  yourRights: {
    en: [
      "An eligible person who did not receive an EIP has the right to claim the Recovery Rebate Credit by filing or amending the applicable tax return.",
      "Filing is free for most taxpayers — VITA and IRS Free File cover the typical return.",
      "The IRS cannot take Economic Impact Payments or Recovery Rebate Credits to satisfy federal income tax debts, though they can be offset by child support arrears.",
      "A person with no income can file a zero-income return just to claim the Rebate Credit and any other refundable credits.",
      "Noncitizens who had an SSN valid for work were generally eligible; ITIN filers had mixed eligibility that varied by round.",
      "A mixed-status household (one spouse with SSN, one with ITIN) was retroactively made eligible under later legislation."
    ]
  },

  legalOptions: {
    en: [
      "For free tax preparation help including Recovery Rebate Credit claims, VITA sites in Monroe County take appointments during tax season. Text FOOD to 304-304 or call 211 for VITA site info (WIC and VITA use similar hotlines).",
      "AARP Tax-Aide at (888) 227-7669 offers free tax prep for moderate-income filers.",
      "For individual IRS questions: (800) 829-1040.",
      "IRS Free File at irs.gov/freefile allows no-cost online filing for many returns.",
      "Legal Aid Society of Rochester at (585) 232-4090 can advise on complex tax situations for low-income residents.",
      "For offsets (reduced refunds due to child support or federal debts), the Bureau of the Fiscal Service Treasury Offset Program handles inquiries at (800) 304-3107."
    ]
  },

  example: {
    en: "A mother in Rochester had a baby in February 2021. She filed her 2020 tax return before the third Economic Impact Payment was issued, so her payment did not include the $1,400 dependent portion for the new baby. When she filed her 2021 tax return with a VITA volunteer, the preparer calculated that she was owed the $1,400 Recovery Rebate Credit. The amount was added to her 2021 refund, which she received by direct deposit about a month later."
  },

  counsel: [
    {
      type: "free",
      name: "VITA Free Tax Preparation",
      focus: "Free tax preparation for low and moderate income filers, Recovery Rebate Credit",
      qualifier: "Generally income under the VITA threshold (check current year)",
      access: "Phone 211 for nearest site",
      outcome: "Return preparation including stimulus claims",
      phone: "211",
      url: "https://www.irs.gov/individuals/free-tax-return-preparation-for-qualifying-taxpayers",
      verified: true,
      bilingual: true,
      languages: ["es"]
    },
    {
      type: "government",
      name: "IRS Individual Help Line",
      focus: "Tax account issues, Recovery Rebate Credit questions, refund tracking",
      qualifier: "Any U.S. taxpayer",
      access: "Phone at (800) 829-1040",
      outcome: "Account lookups, amended return guidance",
      phone: "(800) 829-1040",
      url: "https://www.irs.gov/coronavirus",
      verified: true,
      bilingual: true,
      languages: ["es"]
    }
  ],

  relatedIds: [
    "free-tax-filing-ny",
    "earned-income-tax-credit-ny",
    "tax-refund-garnishment-ny",
    "child-support-enforcement-ny"
  ],

  relatedHelpResources: [],

  tags: [
    "stimulus check",
    "Economic Impact Payment",
    "EIP",
    "Recovery Rebate Credit",
    "missing stimulus",
    "CARES Act payment",
    "American Rescue Plan",
    "Section 6428",
    "EIP for baby",
    "mixed status stimulus"
  ],

  sources: [
    "https://www.law.cornell.edu/uscode/text/26/6428",
    "https://www.law.cornell.edu/uscode/text/26/6428A",
    "https://www.irs.gov/newsroom/recovery-rebate-credit"
  ],

  lastVerified: "2026-04-23",
  volatility: "low",
  emergencyFlag: false,
  disclaimer: true,
  categoryDisclaimer: null
};
