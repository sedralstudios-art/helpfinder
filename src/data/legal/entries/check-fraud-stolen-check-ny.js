export const CHECK_FRAUD_STOLEN_CHECK_NY = {
  id: "check-fraud-stolen-check-ny",
  category: "consumer",
  tier: "state",
  jurisdiction: "us-ny",
  authorityType: "state-statute",
  status: "active",

  title: { en: "Check Fraud and Stolen Checks — What to Do When a Check Is Altered or Forged" },

  summary: {
    en: "Check fraud — stealing, altering, or forging checks — has surged in recent years. Thieves steal checks from mailboxes, wash them (removing the ink and rewriting the payee and amount), and cash them. A person whose check is stolen and cashed fraudulently is generally not liable for the loss — the bank is. But acting quickly is critical to recovering the money."
  },

  whoQualifies: {
    en: [
      "Any person whose check was stolen from a mailbox and cashed by someone else.",
      "Any person who mailed a check that was intercepted and altered (washed).",
      "Any person whose bank account was drained by fraudulent checks.",
      "Any person who received a fake check and deposited it (check overpayment scam)."
    ]
  },

  whatItMeans: {
    en: "Under the Uniform Commercial Code (UCC Article 3, adopted in New York), a bank that pays a forged or altered check bears the loss — not the account holder — as long as the account holder reports the fraud promptly. Under UCC Section 4-406, an account holder must review bank statements and report unauthorized transactions within a reasonable time. Most banks interpret this as 30 to 60 days. After that, the bank may not be required to reimburse. Check washing is the most common form of check fraud. A thief steals a check from a residential mailbox or a USPS blue collection box, uses chemicals to remove the ink, rewrites the check to a different payee for a larger amount, and deposits it — often through a mobile app. The original payee never receives the payment. A fake check scam is different — someone sends a fake check to the victim (often as an overpayment for an online sale), the victim deposits it and sends back the difference before the check bounces. When the check bounces, the victim loses the money they sent. Under New York Penal Law, check fraud (forgery, possession of a forged instrument) is a felony. Filing a police report helps the investigation and supports the bank reimbursement claim. Positive Pay and other bank fraud-prevention services let an account holder pre-authorize each check by amount and payee, blocking any check that does not match. These services were once available only to business accounts but are increasingly offered to consumers, sometimes for a small monthly fee. Mobile deposit holds are another protection — most banks place a multi-day hold on mobile-deposited checks before releasing the funds, which gives the depositor time to detect a fake check before the money is committed. Cashier's checks are often used in scams precisely because consumers think they are unfailable; in reality cashier's checks can be counterfeited and the depositor is liable when the bank discovers the fraud. The safest verification is calling the issuing bank's main number (looked up independently, not from the check itself) and confirming the check is real. Identity theft often follows check theft because checks contain the routing number, account number, and signature — three pieces of information sufficient to set up new accounts in the victim's name."
  },

  yourRights: {
    en: [
      "A bank that pays a forged or altered check is generally liable for the loss — not the account holder (UCC Article 3).",
      "An account holder must report check fraud to the bank promptly — within 30 to 60 days of the statement showing the fraudulent transaction.",
      "A person whose check was stolen from a mailbox can file a report with the U.S. Postal Inspection Service — mail theft is a federal crime.",
      "A bank must investigate a fraud claim and provisionally credit the account while investigating.",
      "A person who deposited a fake check and sent money back is generally liable for the amount sent — the bank reverses the deposit when the check bounces.",
      "A person who receives an unexpected check in the mail and is asked to deposit it and send money back is being targeted by a scam."
    ]
  },

  legalOptions: {
    en: [
      "Report check fraud to the bank immediately. The bank will freeze the check, investigate, and issue provisional credit.",
      "File a police report. Rochester Police at 311. Monroe County Sheriff at (585) 753-4178.",
      "Report mail theft to the U.S. Postal Inspection Service at (877) 876-2455 or uspis.gov.",
      "File a complaint with the FTC at reportfraud.ftc.gov.",
      "If the bank refuses to reimburse, file a complaint with the NYS DFS at (800) 342-3736.",
      "To prevent check theft, use USPS Informed Delivery (free email alerts showing what mail is coming), mail checks from inside the post office (not blue collection boxes), and consider electronic payment instead of checks."
    ]
  },

  example: {
    en: "Angela mailed a $200 rent check from a blue USPS collection box in Irondequoit. A thief stole the check, washed it, rewrote it to a different person for $4,800, and deposited it through a mobile app. Angela discovered the fraud when her landlord said rent was never received and her bank account was $4,800 short. She reported the fraud to her bank immediately, filed a police report, and filed a complaint with the U.S. Postal Inspection Service. The bank investigated and credited the $4,800 back to her account within 10 business days."
  },

  counsel: [
    {
      type: "government",
      name: "U.S. Postal Inspection Service",
      focus: "Mail theft, check fraud, postal crimes",
      qualifier: "Any U.S. resident",
      access: "Phone at (877) 876-2455, report online at uspis.gov",
      outcome: "Investigation, arrest, prosecution of mail thieves",
      phone: "(877) 876-2455",
      url: "https://www.uspis.gov",
      verified: true,
      bilingual: false,
      languages: []
    }
  ],

  relatedIds: [
    "identity-theft-ny",
    "unauthorized-charges-bank-ny",
    "scam-protection-ny",
    "lost-stolen-wallet-what-to-do-ny-program",
    "credit-report-dispute-ny"
  ],

  relatedHelpResources: [],

  tags: [
    "check fraud",
    "stolen check",
    "check washing",
    "check stolen mailbox",
    "forged check",
    "altered check",
    "check scam",
    "fake check",
    "check overpayment scam",
    "mail theft check",
    "check fraud bank"
  ],

  sources: [
    "https://www.law.cornell.edu/ucc/3",
    "https://www.uspis.gov/news/scam-article/check-washing"
  ],

  lastVerified: "2026-04-17",
  factCheckedBy: { tool: "websearch+webfetch", date: "2026-04-27" },
  volatility: "low",
  emergencyFlag: false,
  disclaimer: true,
  categoryDisclaimer: null
};
