export const UNEMPLOYMENT_APPEAL_NY = {
  id: "unemployment-appeal-ny",
  category: "benefits",
  tier: "state",
  jurisdiction: "us-ny",
  authorityType: "state-statute",
  primaryStatute: "NY LAB A18",
  status: "active",

  title: { en: "Appealing an Unemployment Insurance Denial in New York" },

  summary: {
    en: "A claimant whose unemployment insurance claim is denied has the right to appeal. In New York, you must file the appeal within 30 days of the determination. The appeal goes to an Administrative Law Judge who holds a hearing — usually by phone. You can represent yourself or bring a lawyer. Many initial denials are overturned on appeal."
  },

  whoQualifies: {
    en: [
      "Anyone whose unemployment insurance claim was denied or whose benefits were reduced.",
      "Anyone whose employer contested the claim and a determination was issued against them.",
      "The appeal must be filed within 30 days of the mailing date on the determination notice."
    ]
  },

  whatItMeans: {
    en: "When the Department of Labor denies unemployment benefits, it sends a determination letter explaining the reason. Common reasons include: the employer says you quit voluntarily, the employer says you were fired for misconduct, or the DOL says you did not earn enough in the base period. You have 30 days from the mailing date to appeal. The appeal is heard by an Administrative Law Judge (ALJ) at a telephone hearing. Both the worker and the employer can present evidence, call witnesses, and question the other side. The ALJ makes a new decision based on the hearing record — the original determination does not carry special weight. If you lose at the ALJ level, you can appeal again to the Unemployment Insurance Appeal Board, and from there to state court. Many initial denials are overturned because the employer does not show up to the hearing, or because the worker presents facts the initial claims examiner did not have."
  },

  yourRights: {
    en: [
      "You have the right to appeal within 30 days of the determination.",
      "You have the right to a hearing before an Administrative Law Judge.",
      "You have the right to present evidence, bring witnesses, and question the employer's witnesses.",
      "You have the right to a lawyer or representative at the hearing.",
      "You have the right to request an adjournment if you need more time to prepare.",
      "You have the right to continue receiving benefits during the appeal process in some situations.",
      "If you lose, you have the right to appeal to the UI Appeal Board and then to state court."
    ]
  },

  legalOptions: {
    en: [
      "The appeal can be filed online at dol.ny.gov, by fax, or by mail. The determination letter includes instructions and the deadline. Missing the 30-day window is strongly discouraged — late appeals are almost never accepted.",
      "To prepare for the hearing, it is recommended to gather pay stubs, termination letters, emails, texts, doctor's notes, or any other evidence that supports your side, and write a brief timeline of events.",
      "At the hearing, the ALJ will explain the process. You will be sworn in. Both sides present their case. Be specific and factual — the ALJ wants to know what happened, not opinions.",
      "Free legal help for unemployment appeals is available through Legal Aid Society of Rochester at (585) 232-4090 and LawNY at (585) 295-5700. Some legal aid organizations have dedicated unemployment appeal programs.",
      "If you won at the initial level but the employer appeals, you also have the right to participate in the hearing and defend your award."
    ]
  },

  example: {
    en: "Lisa was let go from her job and filed for unemployment. The employer told the DOL she was fired for misconduct. The DOL denied her claim. Lisa files an appeal within 30 days. At the phone hearing, Lisa explains that she was let go because the company was downsizing, not for misconduct. She emails the ALJ a copy of the company's layoff announcement. The employer does not call in to the hearing. The ALJ reverses the denial and Lisa receives her benefits retroactive to the date she first applied."
  },

  counsel: [
    {
      type: "free",
      name: "Legal Aid Society of Rochester",
      focus: "Unemployment appeals, employment law",
      qualifier: "Low-income residents of Monroe and surrounding counties",
      access: "Phone intake or walk-in",
      outcome: "Direct representation or advice",
      phone: "(585) 232-4090",
      url: "https://www.lasroc.org",
      verified: true,
      bilingual: true,
      languages: ["es"]
    },
    {
      type: "free",
      name: "NY DOL Unemployment Insurance",
      focus: "Filing claims and appeals",
      qualifier: "Any New York worker",
      access: "Online or by phone",
      outcome: "Claims processing and appeals",
      phone: "(888) 209-8124",
      url: "https://dol.ny.gov/unemployment/unemployment-insurance-assistance",
      verified: true,
      bilingual: false,
      languages: []
    }
  ],

  relatedIds: [
    "wage-theft-ny",
    "wrongful-termination-ny"
  ],

  relatedHelpResources: [],

  tags: [
    "unemployment appeal",
    "UI denial",
    "unemployment denied",
    "appeal hearing",
    "ALJ hearing",
    "fired misconduct",
    "quit voluntary",
    "unemployment benefits denied",
    "30 day deadline",
    "phone hearing"
  ],

  sources: [
    "https://dol.ny.gov/unemployment/unemployment-insurance-assistance",
    "https://www.nysenate.gov/legislation/laws/LAB/A18"
  ],

  lastVerified: "2026-04-16",
  volatility: "low",
  emergencyFlag: false,
  disclaimer: true,
  categoryDisclaimer: null
};
