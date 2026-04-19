export const BENEFIT_OVERPAYMENT_NY = {
  id: "benefit-overpayment-ny",
  category: "benefits",
  tier: "state",
  jurisdiction: "us-ny",
  authorityType: "state-statute",
  primaryStatute: "7 CFR 273.18",
  status: "active",

  title: { en: "Benefits Overpayment — What to Do When an Agency Says Money Is Owed" },

  summary: {
    en: "If the Department of Social Services says a recipient received more benefits than entitled, the agency may try to collect the difference. This can happen even if the overpayment was the agency's mistake. You have the right to appeal, to request a hardship reduction, and to negotiate a repayment plan."
  },

  whoQualifies: {
    en: [
      "Anyone who receives a notice saying they were overpaid SNAP, Temporary Assistance, Medicaid, or other public benefits.",
      "Anyone whose benefits are being reduced to repay an overpayment (called recoupment).",
      "Anyone who receives a notice demanding repayment of benefits after their case was closed.",
      "Anyone who received aid continuing during a fair hearing and then received an unfavorable decision."
    ]
  },

  whatItMeans: {
    en: "An overpayment happens when the agency determines you received more benefits than you should have. This can happen because of an agency error or a change in your circumstances that was not reported in time. It can also happen because benefits continued during a fair hearing that you lost. The agency must send you a written notice explaining the overpayment amount and the reason. If you have an active case, the agency may reduce your current benefits to collect the overpayment. This is called recoupment. For Temporary Assistance, recoupment is limited to 10% of your monthly grant. You can request a reduction to 5% if repaying at 10% causes undue hardship. For SNAP, recoupment is taken from your monthly SNAP benefit. If your case is closed, the agency may ask you to set up a repayment plan. For SNAP overpayments that are not repaid, the federal government may collect the amount from your federal tax refund. This is done through the Treasury Offset Program. You have the right to appeal any overpayment determination through a fair hearing."
  },

  yourRights: {
    en: [
      "You have the right to receive a written notice explaining the overpayment amount, the reason, and your right to appeal.",
      "You have the right to request a fair hearing within 60 days if you disagree with the overpayment determination.",
      "You have the right to request that recoupment be reduced from 10% to 5% of your monthly grant if it causes undue hardship.",
      "You have the right to negotiate a repayment plan you can afford if your case is closed.",
      "You have the right to request that your financial circumstances be reconsidered if they change during a repayment plan.",
      "You have the right to challenge each separate overpayment individually at a fair hearing.",
      "You have the right to continue receiving your current benefits during a fair hearing if you request the hearing before the effective date of the recoupment."
    ]
  },

  legalOptions: {
    en: [
      "Under 18 NYCRR 387.19 and federal SNAP regulations, the local DSS must send a written notice before beginning any recoupment.",
      "Fair hearings may be requested by calling 1-800-342-3334, online at otda.ny.gov/hearings/request/, or by mail to NYS OTDA, P.O. Box 1930, Albany, NY 12201.",
      "For Temporary Assistance overpayments, the maximum recoupment rate is 10% of the monthly grant. A written request for hardship reduction to 5% may be submitted to the local DSS with documentation showing that expenses exceed income.",
      "For SNAP overpayments on closed cases, unpaid balances may be referred to the federal Treasury Offset Program, which can intercept federal tax refunds. If a balance exists when a new SNAP case is opened, recoupment will resume from the new benefits.",
      "If a repayment agreement becomes unaffordable due to changed financial circumstances, the local DSS may renegotiate the terms upon request.",
      "The local DSS may also pursue repayment through civil court proceedings, particularly for overpayments resulting from intentional misrepresentation.",
      "Free legal help with overpayment disputes and fair hearings is available through Legal Aid Society of Rochester at (585) 232-4090, LawNY at (585) 325-2520, and Empire Justice Center at (585) 454-4060."
    ]
  },

  example: {
    en: "Renee receives Temporary Assistance in Monroe County. She got a notice saying she had been overpaid $600 because she started a part-time job and did not report the income within 10 days. Her monthly grant was reduced by 10% to repay the amount. Renee called Legal Aid and learned she could request a hardship reduction. She submitted a written request to DSS with proof that her expenses exceeded her income. DSS agreed to reduce the recoupment to 5% of her grant. The lower amount was easier for her to manage while she continued working."
  },

  counsel: [
    {
      type: "free",
      name: "Legal Aid Society of Rochester",
      focus: "Overpayment disputes, recoupment, public benefits, fair hearings",
      qualifier: "Low income residents of Monroe and surrounding counties",
      access: "Phone intake, walk-in, or referral",
      outcome: "Direct representation and advice on benefits cases",
      phone: "(585) 232-4090",
      url: "https://www.lasroc.org",
      verified: true,
      bilingual: true,
      languages: ["es"]
    },
    {
      type: "free",
      name: "Legal Assistance of Western New York (LawNY)",
      focus: "Public benefits, overpayment appeals, fair hearings",
      qualifier: "Low income residents in 14 Western NY counties including Monroe",
      access: "Phone intake at (585) 325-2520",
      outcome: "Direct representation",
      phone: "(585) 325-2520",
      url: "https://www.lawny.org",
      verified: true,
      bilingual: false,
      languages: []
    },
    {
      type: "free",
      name: "Empire Justice Center",
      focus: "Benefits advocacy, systemic issues, impact litigation",
      qualifier: "Low and moderate income residents statewide (all NYS counties except NYC)",
      access: "Phone intake at (585) 454-4060",
      outcome: "Direct representation, impact litigation, and policy advocacy",
      phone: "(585) 454-4060",
      url: "https://www.empirejustice.org",
      verified: true,
      bilingual: false,
      languages: []
    }
  ],

  relatedIds: [
    "benefits-denial-appeal-ny",
    "fair-hearing-ny",
    "snap-rights-ny",
    "tanf-public-assistance-ny"
  ],

  relatedHelpResources: [],

  tags: [
    "overpayment",
    "owe money back benefits",
    "recoupment",
    "benefits taken back",
    "SNAP overpayment",
    "welfare overpayment",
    "pay back benefits",
    "benefits reduced to repay",
    "tax refund taken SNAP",
    "agency says I owe",
    "benefits error",
    "too much benefits"
  ],

  sources: [
    "https://otda.ny.gov/hearings/",
    "https://www.law.cornell.edu/regulations/new-york/18-NYCRR-387.19",
    "https://www.law.cornell.edu/cfr/text/7/273.18"
  ],

  lastVerified: "2026-04-13",
  volatility: "low",
  emergencyFlag: false,
  disclaimer: true,
  categoryDisclaimer: null
};
