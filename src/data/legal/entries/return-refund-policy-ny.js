export const RETURN_REFUND_POLICY_NY = {
  id: "return-refund-policy-ny",
  category: "consumer",
  tier: "state",
  jurisdiction: "us-ny",
  authorityType: "state-statute",
  primaryStatute: "NY GBS 218-A",
  status: "active",

  title: { en: "Store Return and Refund Policies in New York — Disclosure Rules Under GBL 218-a" },

  summary: {
    en: "New York does not require stores to accept returns. It does require stores to post their return policy clearly. When a store posts no policy, the statute kicks in with a default: the customer has 20 days to return merchandise in original condition for a full refund. Many stores try to enforce 'all sales final' without posting it — that doesn't work under GBL 218-a. Defective merchandise is separate: a store cannot refuse a return of defective goods under the implied warranty of merchantability (UCC 2-314) regardless of the posted policy."
  },

  whoQualifies: {
    en: [
      "A consumer who bought goods from a retail store in New York and wants to return them.",
      "A consumer who was told 'no returns' but saw no posted policy at the time of purchase.",
      "A consumer who received a defective product.",
      "A small business trying to make its return policy compliant with New York disclosure rules."
    ]
  },

  whatItMeans: {
    en: "General Business Law 218-a is the core statute. It does not force a retailer to accept returns, but it requires the retailer to tell customers, in advance, what the return policy actually is. When the retailer does not post a policy, a statutory default kicks in.\n\nThe disclosure rule. A retail store has to conspicuously post its refund and return policy at the point of sale. 'Conspicuously' means the sign is visible to a customer deciding to buy. A policy printed only on the receipt does not count, because the customer sees the receipt after the purchase is done. An in-store sign at the register, a prominent sign at the entrance, or a sign on the product itself typically does the job.\n\nThe default when no policy is posted. When the retailer has not posted a policy, GBL 218-a gives the customer 20 days from the date of purchase to return the merchandise in original condition. The refund has to be in cash (or the form of the original payment) unless the customer chooses an exchange or store credit.\n\nEnforceable policies. When the store does post a policy, that policy controls. Common enforceable forms: '14-day returns for a full refund,' 'exchange only,' 'store credit only,' 'final sale — no returns,' 'store credit after 30 days.' The key is that the policy was visible at the time of purchase.\n\nReceipt requirements. A posted policy can require a receipt for a refund. A policy that requires a receipt has to say so clearly. A store that normally takes returns without receipts cannot suddenly demand one to defeat a specific return.\n\nExempt categories. Some categories are exempt from 218-a or carry their own rules: food, perishable goods, custom-made items, sale items marked 'final sale' at the point of sale, health-sensitive items (undergarments, swimwear), and items from a going-out-of-business sale.\n\nOnline orders. GBL 218-a's posting rule is about brick-and-mortar retail. Online sellers are governed by the policy they show on the product page or at checkout. The FTC Mail Order Rule (16 CFR 435) adds federal timing requirements for mail and online sellers. Many online sellers voluntarily offer 30- or 90-day return windows to compete.\n\nDefective merchandise. A store cannot sell a defective product and then refuse to take it back by pointing to 'all sales final.' The UCC's implied warranty of merchantability (UCC 2-314) applies to every retail sale by a merchant in goods of that kind. A defective item entitles the buyer to a remedy — repair, replacement, or refund. The implied warranty can only be disclaimed with conspicuous 'as is' language; a 'final sale' label alone does not disclaim it.\n\nGift cards. Gift cards are handled separately under GBL 5-702 — see the gift-card-rights-ny entry. The return policy on merchandise is a different body of law.\n\nRemedies for violations. A store that refuses a proper return can be reported to the NYS Attorney General's Consumer Frauds Bureau. A consumer with a specific dollar amount at stake can file in small claims court. Both routes are inexpensive and don't require an attorney."
  },

  yourRights: {
    en: [
      "A consumer has the right to a clearly posted return policy at the point of sale (GBL 218-a).",
      "When the store posts no policy, the consumer has 20 days to return the merchandise in original condition for a full refund.",
      "A policy on the receipt alone does not satisfy the posting requirement.",
      "When a policy is posted, that policy controls as long as it was visible at the time of purchase.",
      "A defective product can be returned regardless of the posted policy under the UCC implied warranty of merchantability.",
      "A consumer has the right to file a complaint with the NYS Attorney General when a store refuses a proper return."
    ]
  },

  legalOptions: {
    en: [
      "When a store refuses a return and had no posted policy, citing GBL 218-a and asking for the 20-day default refund usually resolves it.",
      "When the store still refuses, a complaint can be filed with the NYS Attorney General's Consumer Frauds Bureau at (800) 771-7755.",
      "For defective products, a complaint can also go to the Better Business Bureau or to small claims court under UCC 2-314.",
      "Small claims court handles disputes up to $5,000 in town or village court and up to $10,000 in city court. Filing is inexpensive and no attorney is required.",
      "Free advice on consumer disputes is available through Legal Aid Society of Rochester at (585) 232-4090."
    ]
  },

  example: {
    en: "A woman buys a jacket at a Rochester clothing store. She brings it back 10 days later, unworn with the tags on. The cashier says 'all sales final.' The woman looks around the store and at the register — there is no posted return policy. Under GBL 218-a, with no policy posted, she is entitled to a full refund within 20 days of purchase. She cites the law. When the store still refuses, she files a complaint with the NYS Attorney General."
  },

  counsel: [
    {
      type: "free",
      name: "NY Attorney General — Consumer Frauds Bureau",
      focus: "Return policy violations, consumer complaints",
      qualifier: "Any consumer in New York",
      access: "Phone or online",
      outcome: "Investigation, mediation, enforcement",
      phone: "(800) 771-7755",
      url: "https://ag.ny.gov/consumer-frauds-bureau",
      verified: true,
      bilingual: false,
      languages: []
    }
  ],

  relatedIds: [
    "warranty-rights-ny",
    "small-claims-procedure-ny",
    "deceptive-business-practices-ny",
    "scam-protection-ny"
  ],

  relatedHelpResources: [],

  tags: [
    "return policy",
    "refund policy",
    "all sales final",
    "20 day return",
    "GBL 218-a",
    "no posted policy",
    "store refund",
    "exchange policy",
    "store credit",
    "defective product return",
    "consumer return rights",
    "receipt policy"
  ],

  sources: [
    "https://www.nysenate.gov/legislation/laws/GBS/218-A",
    "https://ag.ny.gov/consumer-frauds-bureau",
    "https://www.law.cornell.edu/ucc/2/2-314"
  ],

  lastVerified: "2026-04-22",
  volatility: "low",
  emergencyFlag: false,
  disclaimer: true,
  categoryDisclaimer: null
};
