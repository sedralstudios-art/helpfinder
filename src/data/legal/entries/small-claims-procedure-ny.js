export const SMALL_CLAIMS_PROCEDURE_NY = {
  id: "small-claims-procedure-ny",
  category: "consumer",
  tier: "state",
  jurisdiction: "us-ny",
  authorityType: "state-statute",
  status: "active",

  title: { en: "How to File a Small Claims Case in New York" },

  summary: {
    en: "Small claims court is designed for people to handle money disputes themselves, without a lawyer. The limit is $5,000 outside New York City (or $10,000 inside NYC). Filing fees are low, the process is simplified, and most cases are decided in a single hearing. Common cases include unpaid debts, security deposit disputes, property damage, and breach of contract."
  },

  whoQualifies: {
    en: [
      "Any individual 18 or older who is owed money and the amount is $5,000 or less (outside NYC) or $10,000 or less (inside NYC).",
      "The case must be filed in the city, town, or village court where the person or business you are suing lives or does business.",
      "Businesses and sole proprietors can file in small claims. Corporations use a related 'commercial claims' part."
    ]
  },

  whatItMeans: {
    en: "Small claims court is a fast, low-cost way to resolve money disputes. You file a claim at the clerk's office of your local city, town, or village court. The filing fee is typically $10 to $20. The clerk schedules a hearing, usually within a few weeks. Both sides show up, present evidence (receipts, photos, texts, contracts, witnesses), and the judge makes a decision — often the same day. Lawyers are not required and most people do not bring one. If you win, you get a judgment — but collecting on it is a separate step. The losing side does not have an automatic right to appeal in small claims (only the defendant can appeal, and only on limited grounds). If you lose, your options are limited."
  },

  yourRights: {
    en: [
      "You have the right to file a small claims case without a lawyer.",
      "You have the right to present evidence, call witnesses, and question the other side's witnesses.",
      "You have the right to request an adjournment if you need more time (the judge decides).",
      "You have the right to a written judgment explaining the decision.",
      "If you are the defendant and lose, you have the right to appeal to the county court within 30 days."
    ]
  },

  legalOptions: {
    en: [
      "The clerk's office of the city, town, or village court where the other party lives or works is where claims are filed. In Monroe County, Rochester City Court Small Claims is at the Hall of Justice, 99 Exchange Blvd, Rochester NY 14614. Phone: (585) 428-2444.",
      "Identification, the other party's name and address, and a brief description of what happened and how much is owed may be needed. The clerk will help fill out the form.",
      "Filing fees were typically $10-$20 as of April 2026 (subject to change — verify with the court clerk) depending on the court and the amount claimed. An additional fee may apply for service by mail or in person.",
      "At the hearing, it is recommended to bring ALL evidence: contracts, receipts, invoices, photos, texts, emails, and any witnesses. Organizing it clearly helps — the judge sees many cases in one session.",
      "If you win and the other party does not pay, you can use CPLR Article 52 enforcement tools: income execution (garnishment), bank account restraint, or property execution. The court clerk or a free legal aid organization can explain the process."
    ]
  },

  example: {
    en: "Sarah's landlord in Irondequoit kept $800 of her $1,000 security deposit without any itemized list of deductions. She goes to the Irondequoit Town Court clerk's office, fills out a small claims form for $1,000 (the full deposit), and pays the $10 filing fee. Two weeks later, both sides appear. Sarah brings her lease, move-in photos, move-out photos, and the deposit receipt. The landlord has no receipts for the claimed damage. The judge awards Sarah the full $1,000. The landlord pays within 30 days."
  },

  counsel: [
    {
      type: "free",
      name: "Rochester City Court Small Claims",
      focus: "Small claims filings and information",
      qualifier: "Open to anyone filing in Rochester city jurisdiction",
      access: "Clerk's window, Hall of Justice",
      outcome: "Filing assistance and scheduling",
      phone: "(585) 428-2444",
      url: "https://ww2.nycourts.gov/courts/7jd/courts/city/civil/small_claims.shtml",
      verified: true,
      bilingual: false,
      languages: []
    },
    {
      type: "free",
      name: "Legal Aid Society of Rochester",
      focus: "Consumer disputes, debt defense, small claims advice",
      qualifier: "Low-income residents of Monroe and surrounding counties",
      access: "Phone intake",
      outcome: "Advice on how to prepare a small claims case",
      phone: "(585) 232-4090",
      url: "https://www.lasroc.org",
      verified: true,
      bilingual: true,
      languages: ["es"]
    }
  ],

  relatedIds: [
    "debt-collection-rights-ny",
    "security-deposit-ny"
  ],

  relatedHelpResources: [],

  tags: [
    "small claims",
    "sue someone",
    "small claims court",
    "how to file",
    "money dispute",
    "security deposit lawsuit",
    "breach of contract",
    "property damage",
    "unpaid debt",
    "collecting a judgment",
    "filing fee",
    "no lawyer needed"
  ],

  sources: [
    "https://www.nysenate.gov/legislation/laws/UJC/1801",
    "https://ww2.nycourts.gov/courts/7jd/courts/city/civil/small_claims.shtml",
    "https://www.nycourts.gov/courts/nyc/SSI/pdfs/smallclaims.pdf"
  ],

  lastVerified: "2026-04-16",
  volatility: "low",
  emergencyFlag: false,
  disclaimer: true,
  categoryDisclaimer: null
};
