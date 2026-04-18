export const STOP_PAYMENT_ORDER_CHECK_NY = {
  id: "stop-payment-order-check-ny",
  category: "consumer",
  tier: "state",
  jurisdiction: "us-ny",
  authorityType: "state-statute",
  primaryStatute: "NY UCC 4-403",
  status: "active",

  title: { en: "Stop Payment Order on a Check — Stopping a Check Before the Bank Pays It" },

  summary: {
    en: "A stop payment order is a request to a bank not to pay a specific check. Under the New York Uniform Commercial Code Section 4-403, a drawer has the right to stop payment on any check the drawer has written, as long as the stop reaches the bank before the bank has paid it. Oral orders last 14 days; written orders last 6 months and are renewable. A bank that pays a check after a valid stop may be liable to the customer for the loss."
  },

  whoQualifies: {
    en: [
      "An individual who wrote a check and now wants to stop it — lost, stolen, sent by mistake, or where the other side is disputing delivery.",
      "A business or sole proprietor trying to stop a check to a contractor or vendor before the work is completed.",
      "A person who wrote a check under pressure or fraud and wants to prevent it from clearing.",
      "A personal representative of a deceased person whose checks have not yet cleared.",
      "A joint account holder entitled to stop payment on a check written by the other holder (in many cases).",
      "A customer who wrote a check and discovered that the payee is unauthorized or fraudulent."
    ]
  },

  whatItMeans: {
    en: "NY Uniform Commercial Code Section 4-403 governs stop payment orders. The rule: a bank customer (the drawer or a person authorized to draw on the account) may order the bank to stop payment on any item payable from the customer's account. The order must describe the item with reasonable certainty, usually by check number, date, amount, and payee. The order must be received in time to give the bank a reasonable opportunity to act on it before payment, certification, or final settlement. Oral vs written: UCC 4-403(2) provides that an oral stop payment order is binding for 14 calendar days and can be confirmed in writing within that period, in which case it lasts 6 months. A written order, or written confirmation, lasts 6 months from the date given. After 6 months the order lapses unless renewed in writing. Fees: banks charge a stop payment fee — typically $30 to $35 per order in New York, waived in some situations (lost check, reported fraud). Renewal requires another fee. Bank liability: UCC 4-403(3) puts the burden on the customer to establish the fact and amount of loss caused by payment contrary to a valid stop order. If the bank pays after a valid stop, the customer can seek re-credit up to the amount of the loss. The bank is subrogated to the customer's rights against the payee (UCC 4-407). Limits on stop orders: some checks cannot be stopped. Cashier's checks, teller's checks, and certified checks are the bank's own obligations and generally cannot be stopped because the bank has already committed to pay. UCC 3-411 provides a limited remedy for damages from wrongful dishonor of a cashier's check. An exception under UCC 3-312 lets a remitter claim relief on a lost cashier's check after a 90-day waiting period. Post-dated checks: a check dated in the future can be presented early and the bank can pay it. UCC 4-401(3) allows the customer to give notice of the post-date to protect against early payment. Electronic payments: ACH debits and electronic checks are governed by NACHA rules and Regulation E for consumer accounts. A consumer can stop preauthorized electronic payments with 3 business days notice under 15 USC 1693e. Reissued checks: stopping a check does not cancel the underlying debt. If the recipient was owed money and the check was the payment, the payer may still owe. The underlying obligation is separate from the check (UCC 3-310). Customer duties: a customer should examine bank statements promptly. Under UCC 4-406, the customer has a duty to report unauthorized signatures and alterations within a reasonable time (typically 30 days). Failure to report can limit bank liability."
  },

  yourRights: {
    en: [
      "A bank customer has the right to stop payment on any check the customer wrote (UCC 4-403).",
      "An oral stop order is binding for 14 calendar days (UCC 4-403(2)).",
      "A written stop order lasts 6 months and is renewable in writing.",
      "A bank that pays over a valid stop order is liable for the customer's loss (UCC 4-403(3)).",
      "A customer has the right to reasonable fees for a stop order — often $30 to $35.",
      "A customer has the right to protect against premature payment of a post-dated check with notice (UCC 4-401(3)).",
      "A consumer has the right to stop preauthorized electronic payments with 3 business days notice (15 USC 1693e).",
      "A customer has the duty to examine statements and report unauthorized items promptly (UCC 4-406)."
    ]
  },

  legalOptions: {
    en: [
      "NY Department of Financial Services (DFS) at (800) 342-3736 — bank complaints.",
      "Consumer Financial Protection Bureau at (855) 411-2372 — federally regulated banks.",
      "Office of the Comptroller of the Currency at (800) 613-6743 — national banks.",
      "Federal Reserve Consumer Help at (888) 851-1920 — state member banks.",
      "NCUA Consumer Assistance at (800) 755-1030 — federal credit unions.",
      "Monroe County Bar Association Lawyer Referral at (585) 546-2130 — UCC and banking matters.",
      "Legal Aid Society of Rochester at (585) 232-4090 — consumer banking disputes."
    ]
  },

  example: {
    en: "A Rochester homeowner wrote a $1,800 check to a driveway contractor. After signing the check and handing it over, the homeowner noticed the contractor did not have a Home Improvement Contractor license as required in Monroe County. She called her bank within an hour to place an oral stop payment. The bank confirmed the stop and charged a $32 fee. Within 10 days the homeowner followed up with a written stop order which extended the stop for 6 months. The contractor attempted to cash the check 3 days later; the bank refused payment. The homeowner hired a licensed contractor, and the unlicensed contractor's demand for payment failed because under General Business Law 481 an unlicensed home improvement contractor cannot enforce the contract."
  },

  counsel: [
    {
      type: "free",
      name: "Legal Aid Society of Rochester",
      focus: "Consumer banking disputes, stop payment and wrongful dishonor claims",
      qualifier: "Low-income Monroe County residents",
      access: "Phone at (585) 232-4090",
      outcome: "Advice, bank complaint assistance, UCC claims",
      phone: "(585) 232-4090",
      url: "https://www.lasroc.org",
      verified: true,
      bilingual: true,
      languages: ["es"]
    },
    {
      type: "government",
      name: "NY Department of Financial Services",
      focus: "Complaints against state-chartered banks and credit unions",
      qualifier: "Any NY customer of a state-regulated institution",
      access: "Online complaint portal or phone (800) 342-3736",
      outcome: "Investigation, bank response, regulator enforcement",
      phone: "(800) 342-3736",
      url: "https://www.dfs.ny.gov/complaints",
      verified: true,
      bilingual: true,
      languages: ["es"]
    }
  ],

  relatedIds: [
    "small-claims-procedure-ny",
    "contractor-home-improvement-deposit-ny",
    "home-improvement-contractor-ny",
    "credit-report-dispute-ny"
  ],

  relatedHelpResources: [],

  tags: [
    "stop payment",
    "UCC 4-403",
    "check order",
    "bank liability",
    "oral stop order",
    "written stop order",
    "Regulation E",
    "electronic payment stop",
    "post-dated check",
    "UCC 4-406"
  ],

  sources: [
    "https://www.nysenate.gov/legislation/laws/UCC/4-403",
    "https://www.nysenate.gov/legislation/laws/UCC/4-406",
    "https://www.law.cornell.edu/uscode/text/15/1693e"
  ],

  lastVerified: "2026-04-18",
  volatility: "low",
  emergencyFlag: false,
  disclaimer: true,
  categoryDisclaimer: null
};
