export const DEFAULT_JUDGMENT_NY = {
  id: "default-judgment-ny",
  category: "consumer",
  tier: "state",
  jurisdiction: "us-ny",
  authorityType: "state-statute",
  primaryStatute: "NY CVP 5015",
  status: "active",

  title: { en: "Default Judgments — What Happens When a Debt Lawsuit Is Ignored" },

  summary: {
    en: "When a creditor sues for a debt and the defendant does not respond, the court can enter a default judgment — meaning the creditor wins automatically without proving the case. Most debt collection judgments in New York are defaults. But a default judgment can sometimes be overturned if you were never properly served or have a valid defense."
  },

  whoQualifies: {
    en: [
      "Anyone who has had a default judgment entered against them in a debt case.",
      "Anyone who was sued but did not know about the lawsuit (sewer service — the papers were never actually delivered).",
      "Anyone who knew about the lawsuit but did not respond in time and wants to try to vacate the default."
    ]
  },

  whatItMeans: {
    en: "When a creditor files a lawsuit and the defendant does not answer within the required time (usually 20-30 days in New York), the creditor can ask the court to enter a default judgment. The court does not look at whether the debt is valid, whether the amount is correct, or whether the statute of limitations has passed — it just rules for the creditor because no one contested it. After the judgment, the creditor can use enforcement tools: wage garnishment, bank account freeze, and property liens. Under the 2021 Consumer Credit Fairness Act, creditors seeking a default judgment in consumer-debt cases must now submit supporting affidavits proving the debt chain and must confirm the statute of limitations has not expired. This is a significant new protection. If you believe you were never properly served with the lawsuit papers, you can file a motion to vacate the default judgment under CPLR § 5015(a)(1) (excusable default) or CPLR § 317 (never received notice). If the motion succeeds, the case reopens and you get a chance to defend."
  },

  yourRights: {
    en: [
      "You have the right to be properly served with the lawsuit before a default can be entered.",
      "You have the right to move to vacate (undo) a default judgment if you were never served or have a valid defense.",
      "Under the CCFA, the creditor must provide sworn proof of the debt chain and confirm the statute of limitations before getting a default.",
      "You have the right to challenge the amount of the judgment, including any interest or fees.",
      "You have the right to a lawyer. Free legal aid can help with vacatur motions."
    ]
  },

  legalOptions: {
    en: [
      "If you just received a summons and complaint for a debt: ANSWER IT within the deadline (20 days if served in person, 30 if by other methods). Even a simple answer denying the debt preserves your rights.",
      "If a default judgment already exists: contact Legal Aid Society of Rochester at (585) 232-4090 or LawNY at (585) 295-5700. They can evaluate whether a motion to vacate is viable.",
      "Under CPLR § 5015(a)(1), the court can vacate a default for excusable neglect if you show a reasonable excuse for not answering AND a meritorious defense to the claim.",
      "Under CPLR § 317, if you were not actually served (sewer service), you can move to vacate within one year of learning about the judgment or five years from entry, whichever is earlier.",
      "Check whether the debt is past the 3-year statute of limitations (CPLR § 214-i for consumer credit). If it is, that is a complete defense."
    ]
  },

  example: {
    en: "Andre moved apartments and never received the lawsuit papers that a debt collector filed against him. Two years later, his bank account is frozen. He calls Legal Aid, which discovers a default judgment was entered for $3,200. Legal Aid files a motion to vacate under CPLR § 317, arguing Andre was never properly served. The court grants the motion, reopens the case, and Legal Aid raises the statute of limitations as a defense — the debt is older than 3 years. The case is dismissed."
  },

  counsel: [
    {
      type: "free",
      name: "Legal Aid Society of Rochester",
      focus: "Debt defense, default judgment vacatur, consumer rights",
      qualifier: "Low-income residents of Monroe and surrounding counties",
      access: "Phone intake",
      outcome: "Direct representation on vacatur motions and debt defense",
      phone: "(585) 232-4090",
      url: "https://www.lasroc.org",
      verified: true,
      bilingual: true,
      languages: ["es"]
    }
  ],

  relatedIds: [
    "debt-collection-rights-ny",
    "medical-debt-ny",
    "bankruptcy-chapter7-ny"
  ],

  relatedHelpResources: [],

  tags: [
    "default judgment",
    "debt lawsuit",
    "did not respond",
    "sewer service",
    "never served",
    "vacate judgment",
    "CPLR 5015",
    "CPLR 317",
    "wage garnishment",
    "bank frozen",
    "debt collector lawsuit",
    "consumer credit fairness act"
  ],

  sources: [
    "https://www.nysenate.gov/legislation/laws/CVP/5015",
    "https://www.nysenate.gov/legislation/laws/CVP/317",
    "https://www.nysenate.gov/legislation/laws/CVP/214-I"
  ],

  lastVerified: "2026-04-16",
  volatility: "low",
  emergencyFlag: false,
  disclaimer: true,
  categoryDisclaimer: null
};
