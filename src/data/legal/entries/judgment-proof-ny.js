export const JUDGMENT_PROOF_NY = {
  id: "judgment-proof-ny",
  category: "consumer",
  tier: "state",
  jurisdiction: "us-ny",
  authorityType: "state-statute",
  status: "active",

  title: { en: "Judgment Proof — When a Creditor Wins a Judgment But Cannot Collect" },

  summary: {
    en: "A creditor can win a lawsuit and still not be able to collect. If the debtor's income and assets are all from protected sources — Social Security, SSI, SSDI, Temporary Assistance, unemployment, veterans' benefits, pensions, or wages below the garnishment threshold — the judgment cannot be enforced. This is called being 'judgment proof' or 'collection proof.' Understanding this can save someone from unnecessary bankruptcy or panic."
  },

  whoQualifies: {
    en: [
      "Anyone whose only income comes from Social Security, SSI, SSDI, Temporary Assistance, SNAP, unemployment, veterans' benefits, workers' compensation, or certain pensions.",
      "Anyone whose wages are below the garnishment threshold (30 times minimum wage per week).",
      "Anyone with no non-exempt assets (no real property, no investment accounts, no luxury items — just basic household goods and a car under a certain value).",
      "Being judgment proof does not mean the debt disappears — it means the creditor cannot collect right now."
    ]
  },

  whatItMeans: {
    en: "Under New York CPLR Article 52 and federal law, certain types of income and property are exempt from collection — meaning a creditor with a judgment cannot touch them. Fully exempt income includes: Social Security (all types), SSI, SSDI, Temporary Assistance, SNAP benefits, unemployment insurance, veterans' benefits, workers' compensation, most pensions, and child support received. Partially exempt income: wages can be garnished, but only the lesser of 10% of gross or 25% of disposable earnings above 30 times minimum wage. If disposable earnings are below that threshold, nothing can be taken. Exempt property in New York includes: basic household furniture and appliances, clothing, one motor vehicle up to a certain value (check CPLR § 5205 for the current exemption amount — it changes), professionally prescribed health aids, and certain other necessities. A person whose income is entirely from exempt sources and who has no non-exempt property is effectively judgment proof — the creditor has a judgment on paper but no legal way to collect. This status can change if the person's income or assets change. Being judgment proof is a reason NOT to file for bankruptcy in some cases — bankruptcy would be unnecessary if nothing can be collected anyway."
  },

  yourRights: {
    en: [
      "Social Security, SSI, SSDI, TA, SNAP, unemployment, veterans' benefits, and workers' comp are fully exempt from creditor collection.",
      "Wages below 30 times the minimum wage per week cannot be garnished at all.",
      "Basic household goods, clothing, and one vehicle (up to the exemption value) are protected.",
      "A bank account containing only exempt funds (like Social Security deposits) is protected — though the bank may freeze it initially until the exemption is verified.",
      "Being judgment proof does not eliminate the debt — but it means the creditor cannot collect right now.",
      "A person who is judgment proof may not need to file for bankruptcy."
    ]
  },

  legalOptions: {
    en: [
      "If a bank account is frozen (restrained) and it contains only exempt income, an exemption claim form can be filed with the court to release the funds. Banks are required to provide the form.",
      "Under NY CPLR § 5222-a, if the bank account receives only exempt direct deposits (Social Security, SSI, veterans' benefits, etc.), the bank must automatically protect a certain amount from restraint without the debtor having to take any action.",
      "Free legal help with judgment defense and exemption claims is available through Legal Aid Society of Rochester at (585) 232-4090.",
      "If a creditor is attempting to collect from exempt income, that is a violation. A complaint can be filed with the NY Attorney General or a lawsuit can be brought for damages.",
      "Consulting with a lawyer before deciding between bankruptcy and judgment-proof status is recommended. If all income and assets are exempt, bankruptcy may be an unnecessary step."
    ]
  },

  example: {
    en: "A retired woman in Rochester lives on Social Security alone — $1,400/month. A credit card company sues her for $6,000 and wins a default judgment. The company tries to garnish her bank account. The bank freezes her account but then applies the automatic exemption under CPLR § 5222-a because the account receives only Social Security direct deposits. The freeze is released. The creditor has a judgment but cannot collect because every dollar the woman has is from an exempt source. She is judgment proof. She does not need to file for bankruptcy."
  },

  counsel: [
    {
      type: "free",
      name: "Legal Aid Society of Rochester",
      focus: "Judgment defense, exemption claims, debt collection, bankruptcy alternatives",
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
    "wage-garnishment-defense-ny",
    "debt-collection-rights-ny",
    "default-judgment-ny",
    "respond-to-lawsuit-ny",
    "bankruptcy-chapter7-ny"
  ],

  relatedHelpResources: [],

  tags: [
    "judgment proof",
    "collection proof",
    "exempt income",
    "Social Security exempt",
    "SSI exempt",
    "cannot garnish",
    "bank account frozen",
    "CPLR 5222-a",
    "automatic exemption",
    "creditor cannot collect",
    "do I need bankruptcy",
    "protected income"
  ],

  sources: [
    "https://www.nysenate.gov/legislation/laws/CVP/5205",
    "https://www.nysenate.gov/legislation/laws/CVP/5222-A"
  ],

  lastVerified: "2026-04-16",
  volatility: "low",
  emergencyFlag: false,
  disclaimer: true,
  categoryDisclaimer: null
};
