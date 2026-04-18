export const INTERNET_PURCHASE_CHARGEBACKS_NY = {
  id: "internet-purchase-chargebacks-ny",
  category: "consumer",
  tier: "federal",
  jurisdiction: "us-ny",
  authorityType: "federal-statute",
  primaryStatute: "15 USC 1666",
  status: "active",

  title: { en: "Online Purchase Disputes — Chargebacks, Refunds, and What to Do When a Seller Will Not Cooperate" },

  summary: {
    en: "When an online purchase goes wrong — the item never arrives, arrives broken, is significantly different from what was described, or the seller disappears — the buyer has options beyond begging the seller. Credit card chargebacks, PayPal and platform disputes, and FTC mail/internet order rules all protect online shoppers. Many people accept the loss because they do not know these protections exist."
  },

  whoQualifies: {
    en: [
      "Any person who paid for an online purchase and did not receive the item.",
      "Any person who received an item significantly different from what was described.",
      "Any person who was charged for a subscription or recurring payment they cancelled.",
      "These protections apply to credit card, debit card, PayPal, and most digital payment methods."
    ]
  },

  whatItMeans: {
    en: "Under the Fair Credit Billing Act (15 USC § 1666) and the FTC Mail, Internet, or Telephone Order Merchandise Rule (16 CFR Part 435): sellers must ship the item within the time promised (or 30 days if no time was stated). If the seller cannot ship on time, they must notify the buyer and offer the option to cancel for a full refund. If the item never arrives, the buyer is entitled to a full refund. For credit card purchases: the cardholder can dispute the charge with the card issuer (a chargeback). The issuer investigates and, if the dispute is valid, reverses the charge. The dispute must be filed within 60 days of the statement date. For PayPal, Venmo, and platform purchases (Amazon, eBay, Etsy): each platform has its own buyer protection program. Filing a dispute through the platform is usually faster than a credit card chargeback. For debit card purchases: the EFTA provides some protection, but the rules are less favorable than credit cards — this is one reason to use a credit card for online purchases when possible."
  },

  yourRights: {
    en: [
      "If the item never arrives, the buyer is entitled to a full refund.",
      "Sellers must ship within the promised time or 30 days — otherwise, the buyer can cancel.",
      "Credit card chargebacks reverse the charge if the dispute is valid.",
      "The dispute must be filed within 60 days of the credit card statement date.",
      "Platform buyer protection (Amazon, eBay, PayPal) provides additional remedies.",
      "Unauthorized recurring charges can be disputed and blocked."
    ]
  },

  legalOptions: {
    en: [
      "Step 1: Contact the seller directly and request a refund. Document the communication.",
      "Step 2: If the seller does not respond or refuses, file a dispute with the payment method — credit card chargeback (call the number on the back of the card), PayPal dispute (Resolution Center), or platform claim (Amazon A-to-Z, eBay Money Back Guarantee).",
      "Step 3: If the credit card issuer denies the chargeback, file a complaint with the CFPB at consumerfinance.gov/complaint.",
      "For online scams (seller disappears, fake website), file a report with the FTC at reportfraud.ftc.gov and with the NY AG at (800) 771-7755.",
      "For recurring charges that continue after cancellation, instruct the bank to block future charges from the merchant."
    ]
  },

  example: {
    en: "A man in Rochester orders a laptop online. The seller promises delivery in 7 days. After 3 weeks, no laptop and no tracking number. He emails the seller — no response. He files a credit card chargeback with his card issuer, explaining that the item was never received. The card issuer investigates, contacts the seller, and the seller cannot provide proof of delivery. The charge is reversed. The man gets his money back."
  },

  counsel: [
    {
      type: "free",
      name: "FTC — Online Shopping Complaints",
      focus: "Internet purchase fraud, undelivered merchandise, online scams",
      qualifier: "Any consumer in the US",
      access: "Online",
      outcome: "Complaint filing, enforcement data",
      phone: "(877) 382-4357",
      url: "https://reportfraud.ftc.gov",
      verified: true,
      bilingual: true,
      languages: ["es"]
    }
  ],

  relatedIds: [
    "unauthorized-charges-bank-ny",
    "scam-protection-ny",
    "consumer-fraud-ny",
    "return-refund-policy-ny",
    "identity-theft-ny"
  ],

  relatedHelpResources: [],

  tags: [
    "chargeback",
    "online purchase",
    "item not received",
    "internet order",
    "PayPal dispute",
    "Amazon claim",
    "credit card dispute",
    "FCBA",
    "FTC mail order rule",
    "seller disappeared",
    "online scam",
    "refund online"
  ],

  sources: [
    "https://www.law.cornell.edu/uscode/text/15/1666",
    "https://www.law.cornell.edu/cfr/text/16/part-435"
  ],

  lastVerified: "2026-04-16",
  volatility: "low",
  emergencyFlag: false,
  disclaimer: true,
  categoryDisclaimer: null
};
