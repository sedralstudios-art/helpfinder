export const BENEFIT_OVERPAYMENT_NY = {
  id: "benefit-overpayment-ny",
  category: "benefits",
  tier: "state",
  jurisdiction: "us-ny",
  authorityType: "state-statute",
  primaryStatute: "7 CFR 273.18",
  status: "active",

  title: { en: "NY Benefits Overpayment — How Recoupment Works When an Agency Says Benefits Were Overpaid" },

  summary: {
    en: "A benefits overpayment is when the local Department of Social Services determines a household received more SNAP, Temporary Assistance, or other aid than the household was entitled to. NY regulations at 18 NYCRR 387.19 (SNAP) and 18 NYCRR 352.31 (Temporary Assistance) set the recoupment rules. Collection happens by reducing current benefits, offsetting federal tax refunds, or direct repayment. The recipient has the right to a fair hearing, to a hardship reduction, and to challenge whether the claim is correct in the first place."
  },

  whoQualifies: {
    en: [
      "A NY household that received a notice claiming SNAP, Temporary Assistance, Safety Net Assistance, or other benefits were overpaid.",
      "A household whose current benefits are being reduced to recover a past overpayment (called recoupment).",
      "A household receiving a demand letter for repayment on a case that has since closed.",
      "A household whose federal tax refund was intercepted through the Treasury Offset Program to pay a SNAP balance.",
      "An adult who was a household member when the overpayment occurred — NY holds all adult members jointly and severally liable."
    ]
  },

  whatItMeans: {
    en: "An overpayment happens when the local social services district concludes a household received more benefits than the rules allowed. Common causes include an agency processing error, income or household changes not reported in time, and benefits that continued during a fair hearing when the final decision went against the recipient. Before any recoupment starts, the agency must send a written notice of the claim. Three categories of claim drive how the rules apply. Inadvertent household error means the household failed to report a change on time without intent. Administrative error means the agency made the mistake. Intentional program violation (IPV) means the household deliberately misrepresented facts to receive benefits not owed. The three categories carry different lookback periods, collection rates, and suspension thresholds. SNAP overpayment rules come from 18 NYCRR 387.19 and federal 7 CFR 273.18. For inadvertent and administrative error claims, the claim is calculated based on the overissuance during the 12 months preceding the date the mistake was discovered. For IPV claims, the claim is calculated retroactive to the month the violation occurred, but not more than 6 years back. Recoupment through benefit reduction is 10 percent of the household's monthly SNAP allotment or $10 per month, whichever is greater, for inadvertent or administrative error. For IPV, the rate rises to 20 percent of what the household would have received if not disqualified, or $10 per month, whichever is greater. The social services district may suspend collection on inadvertent or administrative error claims under $35 that cannot be recovered through benefit reduction. Adult household members at the time of the overissuance are jointly and severally liable for the full claim. Temporary Assistance overpayment rules come from 18 NYCRR 352.31(d). The district must take reasonable steps to recover overpayments, including those paid during a fair hearing that the recipient lost. Recoupment is set at 10 percent of the household's needs for Family Assistance and Safety Net Assistance. If undue hardship is claimed and substantiated, recoupment must not be less than 5 percent of the household's needs. When the grant itself is smaller than those thresholds, the full grant may be recouped. Collection methods beyond benefit reduction include direct repayment, withholding from unemployment compensation, recovering from federal pay, and intercepting federal tax refunds through the Treasury Offset Program. The agency may also pursue civil court action, particularly on IPV claims. Fair hearing rights apply to every overpayment notice. A request filed within 10 days of the notice usually preserves benefits at the current level (aid continuing) while the hearing is pending; requests filed within 60 days of the notice preserve the right to a hearing but not always to aid continuing. OTDA hearings handle the appeals. The Rochester-area hearing office is part of the Western Region. At the hearing, the household can challenge the calculation, the classification (IPV versus inadvertent), and the collection rate. Legal Aid Society of Rochester, LawNY, and Empire Justice Center represent low-income households in overpayment hearings. Documents that help a defense include the original notice, all benefit calculation worksheets from the agency, reporting history for the household, pay stubs and income records for the relevant period, and any correspondence about timely reported changes. Important nuance: an overpayment determination is not the same as a finding of fraud. Most overpayments are agency or inadvertent errors, and defending against the claim or negotiating a hardship reduction is routine legal aid work."
  },

  yourRights: {
    en: [
      "A NY benefits recipient has the right to receive a written notice before any overpayment recoupment begins, stating the claim amount, the reason, and appeal rights.",
      "A recipient has the right to a fair hearing on any overpayment determination — filed within 10 days to preserve aid continuing, or within 60 days to preserve the hearing right.",
      "A Temporary Assistance recipient has the right under 18 NYCRR 352.31(d)(2) to request a hardship reduction from 10 percent to 5 percent of the household's needs.",
      "A SNAP household has the right to challenge the claim classification — inadvertent versus intentional program violation — which affects both the collection rate and the lookback period.",
      "A household has the right to a 12-month lookback limit under 18 NYCRR 387.19(b)(1) for inadvertent or administrative error SNAP claims.",
      "A recipient has the right to negotiate a repayment plan when a case has closed, with renegotiation when financial circumstances change.",
      "A household member who was not part of the assistance unit at the time of overpayment has the right not to be held liable under 18 NYCRR 352.31(d)(1)."
    ]
  },

  legalOptions: {
    en: [
      "Fair hearing requests to the NY Office of Temporary and Disability Assistance by phone at (800) 342-3334, online at otda.ny.gov/hearings/request, or by mail to NYS OTDA, P.O. Box 1930, Albany, NY 12201.",
      "Monroe County Department of Human Services at (585) 753-6960 handles overpayment notices, hardship reduction requests, and repayment plans.",
      "Legal Aid Society of Rochester at (585) 232-4090 represents low-income households in overpayment fair hearings and negotiations.",
      "LawNY at (585) 325-2520 covers public benefits appeals across the 14-county Western NY service area including Monroe.",
      "Empire Justice Center at (585) 454-4060 handles complex benefits cases and impact-level overpayment issues across NY.",
      "Treasury Offset Program intercepts must be disputed through the agency that referred the debt — typically the local DSS for state-processed SNAP claims."
    ]
  },

  example: {
    en: "Renee received a NY Temporary Assistance grant through Monroe County DHS. The agency sent a notice saying she had been overpaid $600 because she began a part-time job and did not report the income within the 10-day reporting window. The monthly grant was reduced by 10 percent to recover the balance under 18 NYCRR 352.31(d)(2). Renee contacted Legal Aid Society of Rochester. A caseworker filed a written undue-hardship request with DHS showing that monthly rent, utilities, and food expenses exceeded household income even before the recoupment. DHS agreed to reduce the recoupment to 5 percent of her household's needs. The smaller deduction let Renee keep working while the balance paid down over a longer period."
  },

  counsel: [
    {
      type: "nonprofit",
      name: "Legal Aid Society of Rochester",
      focus: "Overpayment disputes, recoupment, fair hearings, hardship reduction",
      qualifier: "Low-income Monroe County resident",
      access: "Phone intake",
      outcome: "Free representation at fair hearings and in repayment negotiations",
      phone: "(585) 232-4090",
      url: "https://www.lasroc.org",
      verified: true,
      bilingual: true,
      languages: ["es"]
    },
    {
      type: "nonprofit",
      name: "LawNY — Legal Assistance of Western New York",
      focus: "Public benefits overpayment appeals, fair hearings",
      qualifier: "Low-income resident in 14 Western NY counties including Monroe",
      access: "Phone intake",
      outcome: "Free representation",
      phone: "(585) 325-2520",
      url: "https://www.lawny.org",
      verified: true,
      bilingual: false,
      languages: []
    },
    {
      type: "nonprofit",
      name: "Empire Justice Center",
      focus: "Complex benefits cases, IPV defense, impact litigation on overpayment issues",
      qualifier: "Low and moderate income residents across NYS",
      access: "Phone intake",
      outcome: "Free representation, policy advocacy",
      phone: "(585) 454-4060",
      url: "https://empirejustice.org",
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
    "NY benefits overpayment",
    "SNAP recoupment",
    "TA recoupment",
    "18 NYCRR 387.19",
    "18 NYCRR 352.31",
    "intentional program violation",
    "inadvertent household error",
    "hardship reduction 5 percent",
    "Treasury Offset Program SNAP",
    "fair hearing overpayment"
  ],

  sources: [
    "https://www.law.cornell.edu/regulations/new-york/18-NYCRR-387.19",
    "https://www.law.cornell.edu/regulations/new-york/18-NYCRR-352.31",
    "https://www.law.cornell.edu/cfr/text/7/273.18",
    "https://otda.ny.gov/hearings/"
  ],

  lastVerified: "2026-04-21",
  volatility: "low",
  emergencyFlag: false,
  disclaimer: true,
  categoryDisclaimer: null
};
