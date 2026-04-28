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
    en: "In New York, most debts have a statute of limitations — a deadline after which the creditor can no longer sue to collect. Under the Consumer Credit Fairness Act, the deadline for consumer credit debt (credit cards, store cards, personal loans) is 3 years. After that, the debt is time-barred. A debt collector can still call and send letters, but cannot file a lawsuit. If a collector sues on a time-barred debt, the debtor has a complete defense."
  },

  whoQualifies: {
    en: [
      "Any person being contacted by a debt collector about an old debt past the statute of limitations.",
      "Any person who was sued for a debt they believe is past the statute of limitations.",
      "Any person who received a letter about an old debt offering to settle for less.",
      "Any person who wants to understand when old debts expire in New York."
    ]
  },

  whatItMeans: {
    en: "New York has more than one statute of limitations for debt depending on the kind of debt. Under CPLR Section 213, written contracts traditionally carried a 6-year limit, and that 6-year window still applies to many ordinary breach-of-contract claims. But in 2021 the Consumer Credit Fairness Act added CPLR Section 214-i, which sets a shorter 3-year limit for actions on a consumer credit transaction — credit cards, store cards, and other consumer credit. The clock generally starts from the default date and does not restart even if the debt is sold to a debt buyer or charged off and re-aged. After the limitations period runs, the debt is time-barred. The creditor or collector cannot sue to collect it. If they do file a lawsuit, the debtor can raise the statute of limitations as a complete defense and the case will be dismissed. Important: the debt still exists after the statute expires — it just cannot be enforced through a lawsuit. A collector can still call, send letters, and ask for payment, subject to other federal and state limits on how often and how. A dangerous trap exists in many states: making a partial payment on a time-barred debt can restart the statute of limitations. New York closed that trap for consumer credit. Under CPLR 214-i, a partial payment, oral acknowledgment, or other voluntary act by the debtor does not revive the limitations period for a consumer credit transaction. Old debts are often sold to debt buyers for pennies on the dollar. These buyers aggressively pursue collection, sometimes filing lawsuits on debts they know are time-barred, hoping the debtor will not show up to court. If the debtor does not appear, the collector can get a default judgment — even on a time-barred debt — and that judgment can then be enforced through wage garnishment or bank levies. Recent rules have tightened restrictions on suing on time-barred debt. The CFPB's 2021 Regulation F prohibits a debt collector from filing or threatening to file a lawsuit on a debt the collector knows or should know is time-barred. The Consumer Credit Fairness Act also requires plaintiffs in New York consumer credit lawsuits to attach specific documentation — the original creditor's account information, an itemized statement of the debt, and a chain of assignments if the debt was sold — before the court will enter a default judgment. The reforms came after the NY Department of Financial Services found that debt buyers were obtaining hundreds of thousands of default judgments every year on stale debts, simply by suing debtors who did not respond."
  },

  yourRights: {
    en: [
      "A consumer credit debt past the 3-year limit set by CPLR 214-i is time-barred in New York — the creditor cannot sue. Other contract debts may carry a different limit; check the kind of debt against CPLR 213.",
      "If a collector sues on a time-barred debt, the debtor can raise the statute of limitations as a complete defense.",
      "A debt collector cannot sue or threaten to sue on a debt the collector knows or should know is time-barred — that is prohibited by CFPB Regulation F.",
      "In New York, a partial payment or oral acknowledgment on a time-barred consumer credit debt does not restart the limitations period (CPLR 214-i).",
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
    en: "A debt collector contacted Rosa about an old credit card debt. Rosa had not made a payment in more than 4 years. Because the 3-year limit in CPLR 214-i had run, the debt was time-barred — no lawsuit could be filed on it. The collector offered to settle for a fraction of the balance. Rosa sent a written letter telling the collector the debt was past the statute of limitations and to stop contacting her. The collector stopped. If the collector had sued anyway, Rosa could have raised the statute of limitations as a defense and the case would have been dismissed."
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
    "https://www.nysenate.gov/legislation/laws/CVP/214-I",
    "https://www.nysenate.gov/legislation/laws/CVP/213",
    "https://www.consumerfinance.gov/consumer-tools/debt-collection/"
  ],

  lastVerified: "2026-04-17",
  factCheckedBy: { tool: "websearch+webfetch", date: "2026-04-28" },
  volatility: "low",
  emergencyFlag: false,
  disclaimer: true,
  categoryDisclaimer: null
};
