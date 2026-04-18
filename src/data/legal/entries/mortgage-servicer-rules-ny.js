export const MORTGAGE_SERVICER_RULES_NY = {
  id: "mortgage-servicer-rules-ny",
  category: "housing",
  tier: "federal",
  jurisdiction: "us-ny",
  authorityType: "federal-regulation",
  primaryStatute: "12 CFR PART 1024",
  status: "active",

  title: { en: "Mortgage Servicer Rules — Monthly Statements, Escrow, and Dispute Rights Under RESPA and NY Banking Law" },

  summary: {
    en: "A mortgage servicer is the company that collects monthly payments and manages the escrow account for a home loan. Under federal RESPA Regulation X (12 CFR Part 1024) and New York Banking Law Article 12-D, servicers must send monthly statements, apply payments on the day received, respond to written disputes, and handle loss mitigation fairly. A borrower whose servicer is charging wrong fees, misapplying payments, or refusing loan modification requests has concrete rights."
  },

  whoQualifies: {
    en: [
      "A homeowner making monthly mortgage payments to a servicer.",
      "A homeowner whose loan was recently transferred to a new servicer.",
      "A homeowner who has received a late-fee charge or payment-application error.",
      "A homeowner who has applied or wants to apply for loan modification after hardship.",
      "A homeowner whose escrow account has an unexplained shortage or overage.",
      "A borrower at risk of foreclosure seeking loss mitigation."
    ]
  },

  whatItMeans: {
    en: "Mortgage servicing is governed by federal rules under the Real Estate Settlement Procedures Act (RESPA) at 12 CFR Part 1024 (Regulation X) and Truth in Lending Act (TILA) at 12 CFR Part 1026 (Regulation Z), plus New York Banking Law Article 12-D and the NY Department of Financial Services servicing regulations at 3 NYCRR 419. Monthly statement: the servicer must send a monthly statement (Regulation Z 1026.41) showing the principal balance, the payment amount due and due date, the account status, transaction activity for the period, payment breakdown (principal, interest, escrow, fees), and contact information for the servicer. The statement must be sent or made available at least 3 business days before the payment due date for most loans. Payment posting: Regulation X 1024.36 requires the servicer to credit a payment as of the day received if the payment meets the servicer's requirements (correct amount, correct account). Wrong posting generates disputes. Escrow: if the loan has an escrow account, the servicer must perform an annual escrow analysis (1024.17), send an escrow statement, and refund any surplus over $50. Shortages are collected over 12 months unless the borrower chooses to pay in a lump sum. Servicer transfers: when servicing is transferred, the old servicer must send a goodbye letter at least 15 days before transfer, and the new servicer must send a hello letter within 15 days after (Regulation X 1024.33). For 60 days after transfer, payments sent to the old servicer must not be treated as late. Requests for information and notices of error: Regulation X 1024.35-36 allow a borrower to send a written Notice of Error or Request for Information to the servicer's designated address. The servicer must acknowledge within 5 business days and resolve within 30 business days (with 15-day extension possible). Failure to respond can result in statutory damages up to $2,000 plus actual damages under 12 USC 2605(f). Loss mitigation (Regulation X 1024.41): when a borrower submits a complete loss mitigation application at least 37 days before a scheduled foreclosure sale, the servicer must evaluate it within 30 days, offer any available options in writing, and cannot proceed with foreclosure until the process concludes (dual-tracking ban). The borrower has 14 days to accept or reject an offer. Appeals are available for denials of most loan modification options. Force-placed insurance: if the servicer believes the borrower's homeowners insurance has lapsed, strict notice requirements apply before force-placing expensive coverage (Regulation X 1024.37). NY additional protections: New York Banking Law Article 12-D requires servicer registration with the Department of Financial Services. 3 NYCRR Part 419 imposes additional duties on servicers operating in NY. NY-specific foreclosure steps include the 90-day pre-foreclosure notice under RPAPL 1304 and mandatory settlement conferences under CPLR 3408. Enforcement: a borrower can sue under RESPA 12 USC 2605 for violations, file a Consumer Financial Protection Bureau (CFPB) complaint, file a NY DFS complaint, or assert RESPA violations as a counterclaim in foreclosure."
  },

  yourRights: {
    en: [
      "A homeowner has the right to a monthly mortgage statement (12 CFR 1026.41).",
      "A homeowner has the right to have payments credited the day received (12 CFR 1024.36).",
      "A homeowner has the right to 15 days notice before a servicer transfer (12 CFR 1024.33).",
      "A homeowner has the right to 60 days payment-grace after transfer.",
      "A homeowner has the right to submit a Notice of Error or Request for Information (12 CFR 1024.35-36).",
      "A homeowner has the right to evaluate loss mitigation without dual-tracking (12 CFR 1024.41).",
      "A homeowner has the right to 90-day pre-foreclosure notice under RPAPL 1304 (NY).",
      "A homeowner has the right to a mandatory foreclosure settlement conference (CPLR 3408)."
    ]
  },

  legalOptions: {
    en: [
      "Consumer Financial Protection Bureau at (855) 411-2372 — federal servicer complaints.",
      "NY Department of Financial Services at (800) 342-3736 — state servicer complaints.",
      "Empire Justice Center at (585) 295-5800 — foreclosure defense and servicer disputes.",
      "Legal Aid Society of Rochester at (585) 232-4090 — low-income foreclosure and servicer cases.",
      "NY HomeOwnership Center at (585) 325-2500 — HUD-approved counseling.",
      "NY Attorney General Homeowner Protection at (855) 466-3456.",
      "Monroe County Bar Association Lawyer Referral at (585) 546-2130 — real estate attorneys.",
      "HUD Counseling Hotline at (800) 569-4287."
    ]
  },

  example: {
    en: "A Greece homeowner received a notice that her mortgage servicing was transferring to a new company. The new servicer's welcome letter arrived 12 days after the transfer date, and the welcome letter listed a different due date than her prior servicer. She mailed two payments to the old address before realizing the change; the old servicer returned them. The new servicer charged $90 in late fees. She sent a Notice of Error under 12 CFR 1024.35 explaining the 60-day grace period and attaching her payment records. The servicer acknowledged within 5 days and reversed the late fees within 22 days. She also filed a CFPB complaint to document the pattern. Her next monthly statement showed a zero late-fee balance and proper posting of her payments."
  },

  counsel: [
    {
      type: "nonprofit",
      name: "Empire Justice Center",
      focus: "Foreclosure defense, servicer disputes, loss mitigation, systemic litigation",
      qualifier: "Low-income homeowners in NY",
      access: "Phone at (585) 295-5800",
      outcome: "Representation, negotiation, litigation",
      phone: "(585) 295-5800",
      url: "https://empirejustice.org",
      verified: true,
      bilingual: true,
      languages: ["es"]
    },
    {
      type: "free",
      name: "NY HomeOwnership Center",
      focus: "HUD-approved housing counseling, loss mitigation, foreclosure prevention",
      qualifier: "Any NY homeowner",
      access: "Phone at (585) 325-2500",
      outcome: "Counseling, servicer negotiation, workout agreements",
      phone: "(585) 325-2500",
      url: "https://homeownershipctr.org",
      verified: true,
      bilingual: true,
      languages: ["es"]
    }
  ],

  relatedIds: [
    "foreclosure-defense-ny",
    "foreclosure-settlement-conference-ny",
    "credit-report-dispute-ny",
    "reverse-mortgage-seniors-ny"
  ],

  relatedHelpResources: [],

  tags: [
    "mortgage servicer",
    "RESPA",
    "Regulation X",
    "12 CFR 1024",
    "loss mitigation",
    "Notice of Error",
    "escrow analysis",
    "dual tracking",
    "force placed insurance",
    "Banking Law Article 12-D"
  ],

  sources: [
    "https://www.law.cornell.edu/cfr/text/12/part-1024",
    "https://www.law.cornell.edu/cfr/text/12/1026.41",
    "https://www.law.cornell.edu/uscode/text/12/2605"
  ],

  lastVerified: "2026-04-18",
  volatility: "low",
  emergencyFlag: false,
  disclaimer: true,
  categoryDisclaimer: null
};
