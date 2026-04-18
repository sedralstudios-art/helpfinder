export const CREDIT_CARD_SURCHARGE_NY = {
  id: "credit-card-surcharge-ny",
  category: "consumer",
  tier: "state",
  jurisdiction: "us-ny",
  authorityType: "state-statute",
  primaryStatute: "NY GBS 518",
  status: "active",

  title: { en: "Credit Card Surcharge Disclosure — NY General Business Law 518 Rules on Charging More for Credit" },

  summary: {
    en: "New York General Business Law Section 518 lets merchants charge a surcharge on credit card payments if they properly disclose the total credit price. Under the 2024 update effective February 2024, merchants must post the highest credit card total price a consumer will pay as a single posted number, not merely the cash price plus a percentage. Failure to comply is a deceptive practice. Consumers overcharged can recover damages under GBL 349."
  },

  whoQualifies: {
    en: [
      "A consumer charged an undisclosed credit card surcharge at a retail store or restaurant.",
      "A consumer confused by posted prices vs charged prices at checkout.",
      "A consumer facing a high percentage surcharge with poor disclosure.",
      "A merchant trying to understand the 2024 disclosure rules for credit surcharges.",
      "A small business deciding whether to add a credit card surcharge.",
      "A point-of-sale vendor selecting a compliant surcharge workflow for NY merchants."
    ]
  },

  whatItMeans: {
    en: "General Business Law Section 518 governs credit card surcharges in New York. Background: historically GBL 518 banned surcharging entirely but allowed 'cash discounts.' Expressions Hair Design v. Schneiderman (U.S. 2017) held the distinction was a speech regulation requiring First Amendment analysis; the case settled under a framework that permitted surcharges if properly disclosed. 2024 update: NY amended GBL 518 effective February 11, 2024 to require clearer disclosure. A merchant may charge a surcharge for credit card use only if it clearly and conspicuously posts the total credit card price a consumer will pay — not merely a cash price plus a stated surcharge percentage. The displayed price must be the final out-of-the-door credit card price. A merchant can charge lower for cash, debit, or alternative payment, but the credit price must be the posted number. Example of compliance: 'Coffee: $5.25 cash / $5.50 credit' — compliant because both prices are fully stated. Non-compliant: 'Coffee $5.25 (+3 percent credit surcharge)' — the credit total is not directly stated. Surcharge cap: the merchant's surcharge cannot exceed the actual cost of processing (typically 1-4 percent for most cards). A surcharge above the processing cost is deceptive. The 2024 update effectively caps at 4 percent through interaction with Visa/Mastercard rules and contract. Prohibited on debit cards: federal Durbin Amendment (15 USC 1693o-2) and Visa/MC rules prohibit surcharging debit cards (including debit transactions that the cardholder chooses to run as credit). Surcharge can only apply to true credit transactions. NY Sales tax: the surcharge is added before or after sales tax depending on merchant system. NY regulation treats the credit card surcharge as part of the sales price subject to sales tax, per NYS Department of Taxation and Finance guidance. Merchants should collect sales tax on the full posted credit price. Enforcement: a consumer misled by non-compliant surcharging can file a complaint with the NY AG Consumer Frauds Bureau or local consumer protection. A civil claim under GBL 349 (deceptive practices) allows statutory damages of $50 plus actual damages, or treble damages up to $1,000 for willful violations, plus attorneys' fees. Common complaints: (1) Receipt shows a surcharge that was not displayed at the menu or checkout; (2) Percentage surcharge is added to a pre-tax price, with tax then calculated on the surcharged amount (compounding); (3) Surcharge applied to debit cards (unlawful under both NY and federal rules); (4) Surcharge exceeding actual cost of processing; (5) Surcharge applied at tips that increase after initial authorization. Restaurant industry practices: many restaurants added surcharges during post-2020 cost increases. Some label the surcharge a 'wellness fee,' 'service fee,' or 'operating fee' rather than a credit card fee to obscure the nature. These are actionable if they effectively target credit card users. Tipping platforms: Toast, Square, and other POS systems add credit card fees in various ways. Compliant vs non-compliant depends on how the price is displayed pre-charge. Merchant obligations: post signage at the entry, at the menu, at the table (if restaurant), and at the checkout. Train staff to explain if asked. Program POS to display the credit total at payment. Consumer remedies: (1) Request a corrected charge at the merchant. (2) Dispute the charge with the credit card issuer (chargeback) under Reg Z. (3) File a complaint with NY AG Consumer Frauds Bureau. (4) Sue under GBL 349 in small claims if appropriate. (5) Support class actions organized by plaintiff's attorneys for systemic merchant violations."
  },

  yourRights: {
    en: [
      "A consumer has the right to clear, posted disclosure of the total credit card price (GBS 518 as amended 2024).",
      "A consumer cannot be charged a surcharge on a debit card (Durbin Amendment 15 USC 1693o-2).",
      "A consumer has the right to a surcharge not exceeding the merchant's processing cost.",
      "A consumer misled by improper disclosure has GBL 349 remedies.",
      "A consumer has the right to a credit card chargeback for disputed fees under Reg Z.",
      "A consumer has the right to file a complaint with NY AG Consumer Frauds Bureau.",
      "A merchant using deceptive labels like 'wellness fee' for credit surcharges is subject to GBL 349.",
      "A merchant must post surcharge signage at point of sale."
    ]
  },

  legalOptions: {
    en: [
      "NY Attorney General Consumer Frauds at (800) 771-7755.",
      "Monroe County Consumer Protection at (585) 753-1661.",
      "Federal Trade Commission Consumer Response at (877) 382-4357.",
      "Consumer Financial Protection Bureau at (855) 411-2372 — debit card issues.",
      "Better Business Bureau Upstate NY at (716) 881-5222.",
      "Monroe County Bar Association Lawyer Referral at (585) 546-2130 — consumer attorneys.",
      "Legal Aid Society of Rochester at (585) 232-4090 — low-income consumer disputes.",
      "NY State Department of Taxation and Finance at (518) 457-2036 — sales tax treatment."
    ]
  },

  example: {
    en: "A Rochester diner at a restaurant saw a menu listing burgers at $16.95. The check arrived with the burger at $16.95 plus a 4 percent 'credit card surcharge' line added, making the total $17.63 plus tax. No mention of the surcharge appeared on the menu. The diner paid but kept the receipt. She filed a complaint with the NY AG Consumer Frauds Bureau. The AG sent the restaurant an advisory letter citing GBL 518 as amended 2024 and GBL 349. The restaurant updated its menu to list 'Burger $16.95 cash / $17.63 credit' and posted a sign at the entry. Multiple similar complaints triggered broader AG review of restaurant surcharging patterns."
  },

  counsel: [
    {
      type: "government",
      name: "NY Attorney General Consumer Frauds Bureau",
      focus: "Credit card surcharge enforcement, GBL 518 and GBL 349 violations",
      qualifier: "Any NY consumer",
      access: "Online complaint or (800) 771-7755",
      outcome: "Investigation, enforcement, restitution",
      phone: "(800) 771-7755",
      url: "https://ag.ny.gov/consumer-frauds/filing-consumer-complaint",
      verified: true,
      bilingual: true,
      languages: ["es"]
    },
    {
      type: "free",
      name: "Legal Aid Society of Rochester",
      focus: "Consumer overcharge disputes, small claims filing support",
      qualifier: "Low-income Monroe County residents",
      access: "Phone at (585) 232-4090",
      outcome: "Advice, chargeback support, small claims",
      phone: "(585) 232-4090",
      url: "https://www.lasroc.org",
      verified: true,
      bilingual: true,
      languages: ["es"]
    }
  ],

  relatedIds: [
    "deceptive-business-practices-ny",
    "internet-purchase-chargebacks-ny",
    "credit-report-dispute-ny",
    "small-claims-procedure-ny"
  ],

  relatedHelpResources: [],

  tags: [
    "credit card surcharge",
    "GBS 518",
    "2024 surcharge rule",
    "Expressions Hair Design",
    "Durbin Amendment",
    "debit card surcharge ban",
    "wellness fee",
    "service fee",
    "Reg Z chargeback",
    "GBL 349"
  ],

  sources: [
    "https://www.nysenate.gov/legislation/laws/GBS/518",
    "https://www.law.cornell.edu/uscode/text/15/1693o-2",
    "https://ag.ny.gov/consumer-frauds/filing-consumer-complaint"
  ],

  lastVerified: "2026-04-18",
  volatility: "medium",
  emergencyFlag: false,
  disclaimer: true,
  categoryDisclaimer: null
};
