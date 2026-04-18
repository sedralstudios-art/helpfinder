export const STRUCTURED_SETTLEMENT_TRANSFER_REVIEW_NY = {
  id: "structured-settlement-transfer-review-ny",
  category: "consumer",
  tier: "state",
  jurisdiction: "us-ny",
  authorityType: "state-statute",
  status: "active",

  title: { en: "Structured Settlement Transfers — Court Review Before Selling Future Payments" },

  summary: {
    en: "A structured settlement pays out over time — monthly checks or lump sums at set dates — often from a personal injury lawsuit or wrongful death case. Selling those future payments to a factoring company for a lump sum requires court approval under New York General Obligations Law Section 5-1701. The court reviews the fairness of the deal. Most transfers lose the seller a substantial portion of the payment value."
  },

  whoQualifies: {
    en: [
      "Any person receiving a structured settlement (monthly or periodic payments from a prior lawsuit).",
      "Any person considering selling some or all future payments to a factoring company for cash now.",
      "Any person who already signed a transfer agreement but has not had the court approve it.",
      "Any family member concerned about a relative being pressured to transfer their settlement."
    ]
  },

  whatItMeans: {
    en: "A structured settlement is a negotiated payout that replaces a lump-sum judgment with scheduled future payments — usually through an annuity funded by the defendant's insurance. The idea is to protect the injured person (or family) from spending the money too quickly and to ensure income over time. A factoring company may approach the recipient offering a lump-sum payment in exchange for rights to future payments. The discount rate is typically harsh — a $100,000 stream of future payments might be bought for $45,000 to $60,000 now. Under General Obligations Law Section 5-1701 (the Structured Settlement Protection Act), a transfer of structured settlement payment rights is not legally effective without court approval. The court must find that the transfer is in the best interest of the payee (and any dependents) and complies with federal and state law. Federal tax consequences: Internal Revenue Code Section 5891 imposes a 40 percent excise tax on transfers that did not receive a qualified order — a strong incentive to get the court review. The application to the court includes: a copy of the transfer agreement, a disclosure statement showing the amounts, the discount rate, the effective interest rate, fees, and comparisons of the present value of future payments to the offer price. The court holds a hearing. The seller has the right to legal advice before the hearing (the factoring company sometimes pays for independent professional advice as part of the deal). The court considers the payee's financial situation, age, dependents, health, reasonable alternatives, the purpose of the transfer, and the fairness of the discount rate. If the purpose is a true emergency (medical bills, imminent eviction) or a one-time investment (buying a home), approval is more likely. If the purpose is discretionary spending, the court may deny approval. Serial transfers — selling payment streams repeatedly — are heavily scrutinized."
  },

  yourRights: {
    en: [
      "A structured settlement payment cannot be transferred without a court order under GOL 5-1701.",
      "A transfer agreement without court approval is legally ineffective — the annuity issuer is not required to pay the factoring company.",
      "A seller has the right to independent professional advice (financial counselor, attorney) before the court hearing, often paid for by the factoring company.",
      "The court must find the transfer is in the seller's best interest before approving.",
      "A seller can change their mind before final court approval.",
      "A seller has the right to a fair hearing with all required disclosures about the discount rate and fees."
    ]
  },

  legalOptions: {
    en: [
      "Before signing any offer from a factoring company, consult an attorney. Monroe County Bar Association referral at (585) 546-2130.",
      "A financial planner or certified financial counselor can compare the lump-sum offer to the present value of the future payments.",
      "Free legal help for low-income structured settlement recipients: Legal Aid Society of Rochester at (585) 232-4090.",
      "NYS Attorney General has taken enforcement actions against abusive structured settlement factoring companies. Complaints at (800) 771-7755.",
      "The National Association of Settlement Purchasers (NASP) is the industry trade group; its member directory does not equal fair pricing.",
      "For an alternative to transfer, consider a hardship loan against the structured settlement — some annuity issuers allow limited advances without transferring the payment stream.",
      "If an elderly or cognitively impaired person is considering a transfer, consult about guardianship or power of attorney protections before signing."
    ]
  },

  example: {
    en: "A Rochester resident receiving a structured settlement of $2,200 per month for life (from a 10-year-old personal injury case) was approached by a factoring company offering $85,000 cash for 120 months of future payments. Present value of those 120 payments at a reasonable discount rate was closer to $200,000. The court hearing under GOL 5-1701 examined the seller's financial situation, learned the $85,000 was intended for discretionary spending rather than a specific need, and denied the transfer as not in the seller's best interest. The seller kept the monthly payments. A later application to transfer a smaller amount ($20,000 for medical bills and vehicle repair) was approved."
  },

  counsel: [
    {
      type: "free",
      name: "Legal Aid Society of Rochester",
      focus: "Structured settlement transfer review, consumer protection, elder law",
      qualifier: "Low-income Monroe County residents",
      access: "Phone at (585) 232-4090",
      outcome: "Advice on transfer offers, representation at court review",
      phone: "(585) 232-4090",
      url: "https://www.lasroc.org",
      verified: true,
      bilingual: true,
      languages: ["es"]
    },
    {
      type: "government",
      name: "NYS Attorney General — Consumer Frauds",
      focus: "Abusive factoring company practices, misleading disclosures",
      qualifier: "Any NYS resident",
      access: "Phone at (800) 771-7755",
      outcome: "Investigation, enforcement",
      phone: "(800) 771-7755",
      url: "https://ag.ny.gov/consumer-frauds-bureau/file-complaint",
      verified: true,
      bilingual: true,
      languages: ["es"]
    }
  ],

  relatedIds: [
    "personal-injury-basics-ny",
    "wrongful-death-ny",
    "predatory-lending-ny",
    "refund-anticipation-loan-rights-ny",
    "bank-account-freeze-exemption-ny"
  ],

  relatedHelpResources: [],

  tags: [
    "structured settlement",
    "GOL 5-1701",
    "factoring company",
    "sell future payments",
    "annuity transfer",
    "settlement lump sum",
    "26 USC 5891",
    "Structured Settlement Protection Act",
    "court approval transfer",
    "best interest seller"
  ],

  sources: [
    "https://www.nysenate.gov/legislation/laws/GOB/5-1701",
    "https://www.law.cornell.edu/uscode/text/26/5891"
  ],

  lastVerified: "2026-04-18",
  volatility: "low",
  emergencyFlag: false,
  disclaimer: true,
  categoryDisclaimer: null
};
