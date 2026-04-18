export const WAGE_GARNISHMENT_DEFENSE_NY = {
  id: "wage-garnishment-defense-ny",
  category: "consumer",
  tier: "state",
  jurisdiction: "us-ny",
  authorityType: "state-statute",
  status: "active",

  title: { en: "Wage Garnishment Defense — Protecting Your Paycheck in New York" },

  summary: {
    en: "If a creditor has a judgment against you, they can take money directly from your paycheck through an income execution (wage garnishment). New York law limits how much can be taken and protects certain types of income entirely. If too much is being taken or protected income is being garnished, the court can stop or reduce it."
  },

  whoQualifies: {
    en: [
      "Anyone whose wages are being garnished (income execution) to pay a debt judgment.",
      "Anyone who has received notice of an income execution from their employer.",
      "Anyone whose bank account has been frozen (restrained) by a creditor with a judgment."
    ]
  },

  whatItMeans: {
    en: "After a creditor wins a judgment in court, one of the enforcement tools available is an income execution under CPLR § 5231. The creditor sends the income execution to the debtor's employer, and the employer withholds a portion of each paycheck and sends it to the creditor. New York law limits the amount: the lesser of 10% of gross income or 25% of disposable earnings (after taxes and mandatory deductions). Nothing can be taken unless disposable earnings for the week exceed 30 times the higher of the federal or state minimum wage. Certain types of income are fully exempt from garnishment: Social Security, SSI, SSDI, Temporary Assistance, SNAP, unemployment benefits, workers' compensation, veterans' benefits, and most pension/retirement income. If any of these are being garnished, or if the amount being taken exceeds the legal limit, a motion can be filed with the court under CPLR § 5231(i) to modify or vacate the income execution. The debtor can also claim a hardship exemption."
  },

  yourRights: {
    en: [
      "The garnishment cannot exceed 10% of gross income or 25% of disposable earnings, whichever is less.",
      "Nothing can be taken if disposable earnings are below 30 times the applicable minimum wage for the week.",
      "Social Security, SSI, SSDI, TA, SNAP, unemployment, workers' comp, and veterans' benefits are fully exempt.",
      "A motion can be filed with the court to reduce or stop the garnishment based on hardship (CPLR § 5231(i)).",
      "The debtor has the right to be notified before garnishment begins.",
      "If the underlying judgment was a default and the debtor was never properly served, the judgment itself can be challenged."
    ]
  },

  legalOptions: {
    en: [
      "If exempt income (Social Security, SSI, SSDI, TA, SNAP, unemployment) is being garnished, a motion to vacate the income execution can be filed with the court that issued the judgment.",
      "If the amount being taken exceeds the 10%/25% limit, the employer should be notified in writing. If the employer does not adjust, a court motion is the next step.",
      "A hardship modification under CPLR § 5231(i) can reduce the garnishment if it is causing extreme financial difficulty. Documentation of income and expenses is needed.",
      "Free legal help with wage garnishment defense is available through Legal Aid Society of Rochester at (585) 232-4090.",
      "Filing for bankruptcy triggers the automatic stay (11 USC § 362), which stops all garnishments immediately. Whether bankruptcy is the right option depends on the full financial picture."
    ]
  },

  example: {
    en: "A single mother in Rochester has her paycheck garnished for an old credit card debt. After the garnishment, she cannot afford rent. She contacts Legal Aid, which discovers that the garnishment exceeds the 10% limit because the employer calculated it wrong. Legal Aid files a motion under CPLR § 5231(i), and the court reduces the garnishment to the correct amount and orders a refund of the excess already taken."
  },

  counsel: [
    {
      type: "free",
      name: "Legal Aid Society of Rochester",
      focus: "Wage garnishment defense, debt, consumer rights",
      qualifier: "Low-income residents of Monroe and surrounding counties",
      access: "Phone intake",
      outcome: "Direct representation or advice",
      phone: "(585) 232-4090",
      url: "https://www.lasroc.org",
      verified: true,
      bilingual: true,
      languages: ["es"]
    }
  ],

  relatedIds: [
    "debt-collection-rights-ny",
    "default-judgment-ny",
    "respond-to-lawsuit-ny",
    "bankruptcy-chapter7-ny"
  ],

  relatedHelpResources: [],

  tags: [
    "wage garnishment",
    "income execution",
    "paycheck garnished",
    "garnishment defense",
    "exempt income",
    "Social Security exempt",
    "CPLR 5231",
    "too much garnished",
    "hardship modification",
    "bank account frozen",
    "judgment enforcement"
  ],

  sources: [
    "https://www.nysenate.gov/legislation/laws/CVP/5231",
    "https://www.dfs.ny.gov/industry_guidance/exemption_from_judgments"
  ],

  lastVerified: "2026-04-16",
  volatility: "low",
  emergencyFlag: false,
  disclaimer: true,
  categoryDisclaimer: null
};
