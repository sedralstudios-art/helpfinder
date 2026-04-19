export const CREDIT_CARD_MINIMUM_PURCHASE_RULES_NY = {
  id: "credit-card-minimum-purchase-rules-ny",
  category: "consumer",
  tier: "federal",
  jurisdiction: "us-ny",
  authorityType: "federal-statute",
  primaryStatute: "15 USC 1666F",
  status: "active",

  title: { en: "Credit Card Minimum Purchase — Federal CARD Act Rules and Merchant Limits" },

  summary: {
    en: "Under 15 USC 1666f (the Credit CARD Act of 2009), merchants accepting credit cards may set a minimum purchase requirement of up to $10. Any minimum above $10 violates federal law and the merchant's Visa/Mastercard agreement. Debit cards cannot be subject to minimum purchase requirements. A consumer facing an excessive minimum can buy at the lawful $10 minimum, report the merchant to the card network and CFPB, or take their business elsewhere."
  },

  whoQualifies: {
    en: [
      "A consumer at a retailer or restaurant required to spend a minimum for credit card acceptance.",
      "A consumer told the minimum is $20 or more to use a credit card.",
      "A consumer whose debit card was rejected for a $5 purchase.",
      "A merchant trying to understand the federal rules and card network agreements.",
      "A consumer charged a small-purchase fee despite making a small purchase.",
      "A consumer who noticed the merchant started requiring a minimum after adopting a surcharge."
    ]
  },

  whatItMeans: {
    en: "The Credit Card Accountability Responsibility and Disclosure Act of 2009 (CARD Act) amended the Truth in Lending Act and added 15 USC 1666f. Section 1666f(a) permits a merchant to set a minimum dollar amount for credit card acceptance, but only up to $10. Federal Reserve regulators can raise this ceiling, but as of 2026 the cap remains $10. Any minimum over $10 violates the CARD Act and the merchant's card-network agreement. Debit cards: 15 USC 1693o-2 (Durbin Amendment) permits minimums on credit cards but generally not on debit cards. A merchant cannot set a minimum debit card amount without running afoul of the Durbin rules. Some small merchants are unaware and try to apply minimums to debit; this is actionable. Card network agreements: Visa, Mastercard, American Express, and Discover all require merchants to accept their cards without excessive minimums or other burdens. A merchant violating the network rules can have their merchant account terminated. Consumers can report non-compliant merchants to the card network. Visa: report at usa.visa.com. Mastercard: report at mastercard.com. American Express: (800) 528-4800. Discover: (800) 347-2683. Minimum purchase signage: a merchant imposing a minimum must clearly post it at the entry and at the checkout. Failure to post is a deceptive practice. Workarounds and violations: some merchants impose a 'small purchase fee' or 'card processing fee' on transactions below their desired threshold. These may be permissible under GBL 518 if disclosed as credit card surcharges (see credit-card-surcharge-ny) but must stay within actual processing cost and must be clearly disclosed. Charging a fee labeled 'minimum avoidance' is often a disguised excessive minimum. Federal enforcement: Consumer Financial Protection Bureau (CFPB) enforces the CARD Act for card issuers. For merchant practices, FTC and state attorneys general are primary enforcers. NY AG Consumer Frauds takes CARD Act complaints involving deceptive pricing. Consumer recourse: (1) Complete the transaction at the minimum stated if it is $10 or less, (2) Offer to buy additional items to meet a lawful minimum, (3) Leave without buying and report to the card network, (4) File an FTC or NY AG Consumer Frauds complaint for consistent pattern violations, (5) Dispute small transactions with the card issuer under Reg Z. Minimums and tipping: some merchants try to set minimums on payments that include tips. The card network rules require that tips on card transactions be processed at the time of payment and cannot be subject to minimums. A merchant requiring cash tips on top of a card subtotal violates card network rules. Small business perspective: merchants incur processing costs of roughly 1.5-3 percent per transaction plus a small fixed fee (typically 5-15 cents per transaction). For a $2 purchase, the fee can consume the profit. This is why the CARD Act permits the $10 minimum. Merchants can also address small-transaction margins through surcharging (compliant with GBL 518), cash-discount programs, or simply accepting the lower margin. Refusing to accept cards entirely is permitted — a merchant can go cash-only. But once a merchant accepts card payment, the CARD Act and network rules apply. Notable cases: The CFPB and various state AGs have taken action against merchants imposing $20, $25, or $50 minimums on credit cards. Enforcement is typically through merchant account termination and civil penalties rather than direct consumer restitution."
  },

  yourRights: {
    en: [
      "A consumer has the right to use a credit card for any purchase of $10 or more (15 USC 1666f).",
      "A consumer has the right to use a debit card with no minimum (Durbin Amendment).",
      "A consumer has the right to a clearly posted minimum-purchase sign.",
      "A consumer has the right to report a non-compliant merchant to Visa, Mastercard, Amex, or Discover.",
      "A consumer has the right to file CFPB, FTC, and NY AG complaints for pattern violations.",
      "A consumer has the right to a small-purchase transaction without disguised fees.",
      "A consumer has the right to dispute small charges under Reg Z if the merchant bundled an unauthorized minimum fee.",
      "A merchant accepting cards is bound by both federal law and card-network rules."
    ]
  },

  legalOptions: {
    en: [
      "Consumer Financial Protection Bureau at (855) 411-2372.",
      "Federal Trade Commission Consumer Response at (877) 382-4357.",
      "NY Attorney General Consumer Frauds at (800) 771-7755.",
      "Visa Consumer Complaints at usa.visa.com.",
      "Mastercard Consumer Complaints at mastercard.us.",
      "American Express Customer Service at (800) 528-4800.",
      "Discover Card at (800) 347-2683.",
      "Monroe County Consumer Protection at (585) 753-1661."
    ]
  },

  example: {
    en: "A Rochester cafe near Park Avenue posted a sign 'Credit card minimum $15.' A customer buying a single $4 coffee pointed to the sign and asked to use her credit card. The cashier refused. She filed an online complaint with Visa through usa.visa.com and CC'd the merchant. She also filed a CFPB complaint. Within two weeks Visa contacted the merchant about the excessive minimum. The merchant lowered the minimum sign to $10 (the legal cap) and later eliminated it entirely after calculating that the lost sales exceeded the processing fee costs."
  },

  counsel: [
    {
      type: "government",
      name: "Consumer Financial Protection Bureau",
      focus: "Federal CARD Act enforcement, credit card issuer practices",
      qualifier: "Any U.S. consumer",
      access: "Online complaint or phone (855) 411-2372",
      outcome: "Investigation, merchant account sanctions",
      phone: "(855) 411-2372",
      url: "https://www.consumerfinance.gov/complaint",
      verified: true,
      bilingual: true,
      languages: ["es"]
    },
    {
      type: "government",
      name: "NY Attorney General Consumer Frauds Bureau",
      focus: "State-level merchant enforcement, disguised fee practices",
      qualifier: "Any NY consumer",
      access: "Online complaint or phone (800) 771-7755",
      outcome: "Investigation, enforcement, merchant sanctions",
      phone: "(800) 771-7755",
      url: "https://ag.ny.gov/consumer-frauds/filing-consumer-complaint",
      verified: true,
      bilingual: true,
      languages: ["es"]
    }
  ],

  relatedIds: [
    "credit-card-surcharge-ny",
    "deceptive-business-practices-ny",
    "internet-purchase-chargebacks-ny",
    "small-claims-procedure-ny"
  ],

  relatedHelpResources: [],

  tags: [
    "credit card minimum",
    "15 USC 1666f",
    "CARD Act 2009",
    "Durbin Amendment",
    "debit card no minimum",
    "Visa Mastercard rules",
    "merchant processing fee",
    "disguised minimum fee",
    "CFPB merchant",
    "small purchase fee"
  ],

  sources: [
    "https://www.law.cornell.edu/uscode/text/15/1666f",
    "https://www.law.cornell.edu/uscode/text/15/1693o-2",
    "https://www.consumerfinance.gov/complaint"
  ],

  lastVerified: "2026-04-18",
  volatility: "low",
  emergencyFlag: false,
  disclaimer: true,
  categoryDisclaimer: null
};
