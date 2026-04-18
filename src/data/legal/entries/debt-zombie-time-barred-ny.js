export const DEBT_ZOMBIE_TIME_BARRED_NY = {
  id: "debt-zombie-time-barred-ny",
  category: "consumer",
  tier: "state",
  jurisdiction: "us-ny",
  authorityType: "state-statute",
  primaryStatute: "NY CVP 213",
  status: "active",

  title: { en: "Zombie Debt — When a Collector Tries to Collect a Debt That Is Too Old to Sue On" },

  summary: {
    en: "In New York, most debts have a statute of limitations — a deadline after which the creditor can no longer sue to collect. For most consumer debts, the deadline is 6 years. After that, the debt is time-barred. A debt collector can still call and send letters, but cannot file a lawsuit. If a collector sues on a time-barred debt, the debtor has a complete defense."
  },

  whoQualifies: {
    en: [
      "Any person being contacted by a debt collector about a debt that is more than 6 years old.",
      "Any person who was sued for a debt they believe is past the statute of limitations.",
      "Any person who received a letter about an old debt offering to settle for less.",
      "Any person who wants to understand when old debts expire in New York."
    ]
  },

  whatItMeans: {
    en: "Under CPLR Section 213, the statute of limitations for most consumer debts in New York is 6 years. This includes credit card debt, medical debt, personal loans, and most other unsecured debts. The clock starts from the date of the last payment or the date the debt went into default — whichever is later. After 6 years, the debt is time-barred. The creditor or collector cannot sue to collect it. If they do file a lawsuit, the debtor can raise the statute of limitations as a complete defense and the case will be dismissed. Important: the debt still exists after the statute expires — it just cannot be enforced through a lawsuit. A collector can still call, send letters, and ask for payment. But the collector must disclose that the debt is too old to sue on (under 2021 amendments to the federal debt collection rules). A dangerous trap: making a partial payment on a time-barred debt can restart the statute of limitations in some states. In New York, under CPLR Section 214-d, a partial payment does not restart the clock unless the payment is accompanied by a signed written acknowledgment of the debt. Old debts are often sold to debt buyers for pennies on the dollar. These buyers aggressively pursue collection, sometimes filing lawsuits on debts they know are time-barred, hoping the debtor will not show up to court. If the debtor does not appear, the collector can get a default judgment — even on a time-barred debt."
  },

  yourRights: {
    en: [
      "A debt that is more than 6 years past the last payment or default date is time-barred in New York — the creditor cannot sue.",
      "If a collector sues on a time-barred debt, the debtor can raise the statute of limitations as a complete defense.",
      "A collector must disclose that a debt is too old to sue on when attempting to collect.",
      "In New York, a partial payment on a time-barred debt does not restart the statute unless accompanied by a signed written acknowledgment.",
      "A debtor who is sued on an old debt must appear in court and raise the defense — if they do not appear, the collector can get a default judgment.",
      "A debtor can send a written cease-and-desist letter telling the collector to stop contacting them — the collector must comply (FDCPA Section 805(c))."
    ]
  },

  legalOptions: {
    en: [
      "If sued on a time-barred debt, answer the lawsuit and raise the statute of limitations defense — do not ignore it.",
      "Legal Aid Society of Rochester at (585) 232-4090 handles debt collection defense for low-income residents.",
      "Empire Justice Center at (585) 454-4060 handles consumer debt and collection cases.",
      "LawNY at (585) 325-2520 provides free legal help with debt collection defense.",
      "The NYS Attorney General at (800) 771-7755 handles complaints about debt collectors suing on time-barred debts.",
      "The FTC and CFPB accept debt collection complaints at reportfraud.ftc.gov and consumerfinance.gov.",
      "A debtor can check the date of last payment on their credit report or request it from the collector in writing."
    ]
  },

  example: {
    en: "A debt collector contacted Rosa about a credit card debt from 2017. Rosa had not made a payment since 2018 — over 7 years ago. The collector offered to settle for 40% of the balance. Rosa checked the date of her last payment and confirmed the debt was time-barred. She sent a written letter telling the collector the debt was past the statute of limitations and to stop contacting her. The collector stopped. If the collector had sued, Rosa could have raised the statute of limitations as a defense and the case would have been dismissed."
  },

  counsel: [
    {
      type: "free",
      name: "Legal Aid Society of Rochester",
      focus: "Debt collection defense, time-barred debt, consumer protection",
      qualifier: "Low income residents of Monroe County",
      access: "Phone intake at (585) 232-4090",
      outcome: "Legal advice, court representation, debt defense",
      phone: "(585) 232-4090",
      url: "https://www.lasroc.org",
      verified: true,
      bilingual: true,
      languages: ["es"]
    }
  ],

  relatedIds: [
    "debt-collection-rights-ny",
    "debt-collection-harassment-ny",
    "debt-statute-of-limitations-ny",
    "respond-to-lawsuit-ny",
    "default-judgment-ny",
    "judgment-proof-ny"
  ],

  relatedHelpResources: [],

  tags: [
    "zombie debt",
    "time barred debt",
    "old debt collection",
    "statute of limitations debt",
    "expired debt",
    "debt too old",
    "debt buyer",
    "old credit card debt",
    "time barred lawsuit",
    "debt 6 years",
    "can they still sue"
  ],

  sources: [
    "https://www.nysenate.gov/legislation/laws/CVP/213",
    "https://www.nysenate.gov/legislation/laws/CVP/214-D",
    "https://www.consumerfinance.gov/consumer-tools/debt-collection/"
  ],

  lastVerified: "2026-04-17",
  volatility: "low",
  emergencyFlag: false,
  disclaimer: true,
  categoryDisclaimer: null
};
