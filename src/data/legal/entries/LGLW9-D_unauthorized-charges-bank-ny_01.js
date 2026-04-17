export const UNAUTHORIZED_CHARGES_BANK_NY = {
  id: "unauthorized-charges-bank-ny",
  category: "consumer",
  tier: "federal",
  jurisdiction: "us-ny",
  status: "active",

  title: { en: "Unauthorized Bank and Credit Card Charges — How to Dispute and Get Your Money Back" },

  summary: {
    en: "If someone uses a credit card, debit card, or bank account without authorization — whether through theft, fraud, or a billing error — federal law limits the cardholder's liability and requires the bank to investigate. For credit cards, the maximum liability is $50 (and most issuers waive it entirely). For debit cards, the liability depends on how quickly the fraud is reported. The bank must investigate and provisionally credit the account within 10 business days."
  },

  whoQualifies: {
    en: [
      "Any person who sees charges on their credit card, debit card, or bank statement that they did not authorize.",
      "Any person whose card was lost, stolen, or used without permission.",
      "Any person who was charged for goods or services they did not receive or that were significantly different from what was described.",
      "Any person whose bank account was drained by unauthorized electronic transfers."
    ]
  },

  whatItMeans: {
    en: "Credit cards: under the Fair Credit Billing Act (15 USC § 1666), the cardholder's maximum liability for unauthorized charges is $50 — and most card issuers have zero-liability policies. The cardholder must dispute the charge in writing within 60 days of the statement date. The issuer must investigate and respond within 30 days (or 2 billing cycles). During the investigation, the disputed amount cannot be reported as delinquent. Debit cards: under the Electronic Fund Transfer Act (15 USC § 1693), liability depends on timing. If reported within 2 business days: maximum $50 liability. If reported between 2 and 60 days: maximum $500 liability. If reported after 60 days: the cardholder may be liable for the full amount. This is why reporting debit card fraud immediately is critical. Bank accounts: unauthorized electronic transfers (ACH, wire) are covered by the same EFTA rules. The bank must investigate within 10 business days and provisionally credit the account if the investigation takes longer. Chargebacks: for goods or services not received or not as described, the credit card holder can dispute the charge and request a chargeback. The card issuer reverses the charge and the merchant must prove the transaction was legitimate."
  },

  yourRights: {
    en: [
      "Credit card: maximum $50 liability for unauthorized charges (most issuers waive it entirely).",
      "Debit card: report within 2 days for $50 max liability — after 60 days, full liability is possible.",
      "The bank must investigate and provisionally credit the account within 10 business days.",
      "Disputed charges cannot be reported as delinquent during the investigation.",
      "For goods not received or not as described, a chargeback can reverse the charge.",
      "The dispute must be in writing within 60 days of the statement date."
    ]
  },

  legalOptions: {
    en: [
      "Report unauthorized charges to the bank or card issuer immediately — by phone first, then in writing within 60 days.",
      "For credit cards, send a written dispute to the address listed on the statement for billing inquiries (not the payment address).",
      "For debit cards, contact the bank within 2 business days to limit liability to $50.",
      "If the bank refuses to investigate or credit the account, file a complaint with the CFPB at consumerfinance.gov/complaint.",
      "For recurring unauthorized charges (subscriptions, memberships), the bank can block future charges from the merchant.",
      "Free legal help with banking disputes is available through Legal Aid Society of Rochester at (585) 232-4090."
    ]
  },

  example: {
    en: "A woman in Rochester checks her bank app and sees 3 charges totaling $800 on her debit card from a store she has never visited. She calls the bank within an hour — well within the 2-day window. Her maximum liability is $50. The bank cancels the card, issues a new one, and provisionally credits the $800 while it investigates. The investigation confirms the charges were fraudulent, and the credit becomes permanent."
  },

  counsel: [
    {
      type: "free",
      name: "CFPB — Banking Complaints",
      focus: "Unauthorized charges, bank disputes, credit card fraud",
      qualifier: "Any consumer in the US",
      access: "Online",
      outcome: "Investigation, bank must respond within 15 days",
      phone: "(855) 411-2372",
      url: "https://www.consumerfinance.gov/complaint/",
      verified: true,
      bilingual: true,
      languages: ["es"]
    }
  ],

  relatedIds: [
    "identity-theft-ny",
    "credit-report-dispute-ny",
    "scam-protection-ny",
    "debt-collection-rights-ny"
  ],

  relatedHelpResources: [],

  tags: [
    "unauthorized charge",
    "credit card fraud",
    "debit card fraud",
    "chargeback",
    "dispute charge",
    "FCBA",
    "EFTA",
    "bank fraud",
    "stolen card",
    "$50 liability",
    "provisional credit",
    "billing dispute"
  ],

  sources: [
    "https://www.law.cornell.edu/uscode/text/15/1666",
    "https://www.law.cornell.edu/uscode/text/15/1693"
  ],

  lastVerified: "2026-04-16",
  volatility: "low",
  emergencyFlag: false,
  disclaimer: true,
  categoryDisclaimer: null
};
