export const RETIREMENT_401K_EARLY_WITHDRAWAL_NY = {
  id: "retirement-401k-early-withdrawal-ny",
  category: "benefits",
  tier: "federal",
  jurisdiction: "us-ny",
  authorityType: "federal-statute",
  primaryStatute: "26 USC 72",
  status: "active",

  title: { en: "Early Withdrawal From a 401(k) or IRA — Tax Penalty and Hardship Exceptions" },

  summary: {
    en: "Taking money out of a 401(k) or IRA before age 59½ usually triggers a 10 percent federal penalty on top of regular income tax. But several hardship exceptions skip the penalty — medical bills over a certain threshold, permanent disability, first-time home purchase (IRA only), higher-education costs, and others. Knowing the exceptions before withdrawing prevents a surprise tax bill."
  },

  whoQualifies: {
    en: [
      "Any person under age 59½ considering a 401(k), IRA, or 403(b) withdrawal.",
      "Any person who was laid off and needs to access retirement funds.",
      "Any person facing a major medical bill, education cost, or first home purchase.",
      "Any person with a disability who needs retirement funds and wants to avoid the penalty."
    ]
  },

  whatItMeans: {
    en: "Under Internal Revenue Code Section 72(t) (26 USC 72(t)), a distribution from a qualified retirement plan taken before age 59½ is subject to a 10 percent additional tax — on top of regular federal income tax and New York state income tax. This applies to traditional 401(k), 403(b), governmental 457(b), and IRA accounts. Roth IRA contributions can be withdrawn without penalty at any age (earnings have separate rules). Exceptions to the 10 percent penalty include: total and permanent disability, unreimbursed medical expenses exceeding 7.5 percent of AGI, a series of substantially equal periodic payments under Section 72(t)(2)(A)(iv), distributions after separation from service at age 55 or later (the Rule of 55, for 401(k) only), qualified higher education expenses (IRA only, up to tuition/fees/room/board), first-time home purchase up to $10,000 (IRA only, lifetime limit), birth or adoption up to $5,000 per child, qualified disaster relief, IRS levies on the account, and qualified reservist distributions. The SECURE 2.0 Act added more exceptions in recent years — emergency expenses up to $1,000 per year, domestic abuse survivors up to the lesser of $10,000 or 50 percent of the account, and terminally ill individuals. Even when the penalty is waived, the withdrawal is still taxable as ordinary income. New York does not impose its own early withdrawal penalty, but the distribution is New York taxable income for residents. A better alternative for many people is a 401(k) loan (up to $50,000 or 50 percent of the vested balance), which is not a taxable distribution if repaid on time. Hardship distributions are a separate concept — they allow access to 401(k) funds for immediate and heavy financial need but still count as taxable and penalty-subject unless an exception applies."
  },

  yourRights: {
    en: [
      "An account holder has the right to take a distribution from their own retirement account.",
      "An account holder qualifying for an exception has the right to avoid the 10 percent penalty — the exception is claimed on Form 5329 when filing taxes.",
      "A person separated from service at age 55 or later can withdraw from the 401(k) without penalty (Rule of 55).",
      "A Roth IRA contribution (not earnings) can be withdrawn at any time without penalty or tax.",
      "An account holder can take a 401(k) loan if the plan allows, avoiding the taxable distribution entirely if repaid.",
      "A domestic abuse survivor can withdraw up to $10,000 or 50 percent of the account without penalty under SECURE 2.0."
    ]
  },

  legalOptions: {
    en: [
      "Before withdrawing, compare against a 401(k) loan — loans are not taxed and not penalized when repaid on schedule.",
      "For hardship distributions, the plan administrator verifies eligibility — request the plan's hardship distribution form.",
      "File Form 5329 with the federal tax return to claim any penalty exception.",
      "Free tax preparation help for low and moderate income filers is available through VITA (see free-tax-filing-ny entry) — ask about early withdrawal reporting.",
      "For complex planning, a certified financial planner or CPA can model the tax impact. Monroe County Bar Association referral for tax attorneys at (585) 546-2130.",
      "IRS questions: (800) 829-1040 or irs.gov."
    ]
  },

  example: {
    en: "After being laid off at 56, Marcus rolled his 401(k) from his former employer into an IRA. Two years later he needed $20,000 to cover medical bills. He withdrew from the IRA. Because the Rule of 55 only applies to the original 401(k) (not the IRA after rollover), he owed the 10 percent penalty on the withdrawal — about $2,000 — plus regular income tax. Had he left the funds in the 401(k), the Rule of 55 would have waived the penalty. A consultation with a tax preparer before the rollover would have flagged this."
  },

  counsel: [
    {
      type: "government",
      name: "IRS — Individual Taxpayer Assistance",
      focus: "Early withdrawal rules, exceptions, Form 5329",
      qualifier: "Any U.S. taxpayer",
      access: "Phone at (800) 829-1040",
      outcome: "Guidance on tax treatment and exception claims",
      phone: "(800) 829-1040",
      url: "https://www.irs.gov/retirement-plans/plan-participant-employee/retirement-topics-tax-on-early-distributions",
      verified: true,
      bilingual: true,
      languages: ["es"]
    },
    {
      type: "free",
      name: "AARP Tax-Aide (Free Tax Prep)",
      focus: "Free tax preparation for middle and low income filers, retirement account reporting",
      qualifier: "Any filer — AARP membership not required",
      access: "Phone or online to find a site",
      outcome: "Return preparation including early withdrawal reporting",
      phone: "(888) 227-7669",
      url: "https://www.aarp.org/money/taxes/aarp_taxaide/",
      verified: true,
      bilingual: false,
      languages: []
    }
  ],

  relatedIds: [
    "ssdi-denial-appeal-ny",
    "free-tax-filing-ny",
    "earned-income-tax-credit-ny",
    "wage-garnishment-exemptions-ny"
  ],

  relatedHelpResources: [],

  tags: [
    "401k early withdrawal",
    "IRA early withdrawal",
    "10 percent penalty",
    "Rule of 55",
    "hardship distribution",
    "SECURE 2.0 exceptions",
    "retirement account penalty",
    "Section 72(t)",
    "Form 5329",
    "401k loan vs withdrawal"
  ],

  sources: [
    "https://www.law.cornell.edu/uscode/text/26/72",
    "https://www.law.cornell.edu/uscode/text/26/401",
    "https://www.irs.gov/retirement-plans/plan-participant-employee/retirement-topics-tax-on-early-distributions"
  ],

  lastVerified: "2026-04-18",
  volatility: "medium",
  emergencyFlag: false,
  disclaimer: true,
  categoryDisclaimer: null
};
