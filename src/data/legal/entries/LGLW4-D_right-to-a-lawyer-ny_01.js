export const RIGHT_TO_A_LAWYER_NY = {
  id: "right-to-a-lawyer-ny",
  category: "criminal",
  tier: "state",
  jurisdiction: "us-ny",
  status: "active",

  title: { en: "Your Right to a Free Lawyer in a Criminal Case in New York" },

  summary: {
    en: "If you are charged with a crime and cannot afford a lawyer, the court must provide one for free. This right comes from the Sixth Amendment to the U.S. Constitution and is implemented in New York through County Law Article 18-B. In Monroe County, the main providers are the Monroe County Public Defender and the Assigned Counsel Program (18-B panel). The right applies at every critical stage of the case."
  },

  whoQualifies: {
    en: [
      "Anyone facing a criminal charge where jail is a possible sentence — misdemeanor or felony.",
      "Anyone who cannot afford to hire a private attorney.",
      "The right attaches at the first court appearance (arraignment) and continues through trial, sentencing, and the first appeal.",
      "In Family Court, parents facing certain proceedings (like Article 10 neglect cases) also have the right to assigned counsel."
    ]
  },

  whatItMeans: {
    en: "At arraignment, the judge asks whether you have a lawyer or need one assigned. If you say you need one, the court assigns a lawyer — either from the Public Defender's office or from a panel of private attorneys who take assigned cases (called 18-B lawyers, after County Law Article 18-B). The lawyer is free. You do not owe them money. You may need to fill out a short financial form. The assigned lawyer has the same duties to you as a private lawyer: confidentiality, competent representation, loyalty, and communication. If the Public Defender has a conflict of interest (for example, they already represent a co-defendant), the case goes to an 18-B panel attorney or the Conflict Defender. The right extends to the first appeal after conviction — if you are convicted and want to appeal, the appellate court will assign an attorney for the appeal at no cost."
  },

  yourRights: {
    en: [
      "You have the right to a lawyer at every critical stage: arraignment, hearings, motions, trial, sentencing, and the first appeal.",
      "If you cannot afford one, the court must assign one for free.",
      "You have the right to confidential communication with your lawyer — what you tell them is protected.",
      "You have the right to consult with your lawyer before answering police questions.",
      "If your assigned lawyer has a conflict of interest, the court must assign a different one.",
      "You have the right to request a new lawyer if you believe yours is not providing competent representation — the judge will evaluate the request."
    ]
  },

  legalOptions: {
    en: [
      "At arraignment, say you need a lawyer if you do not have one. Do not try to handle the case yourself to save the court time.",
      "Monroe County Public Defender: (585) 753-4210. Located at the Hall of Justice, 99 Exchange Blvd, Rochester NY 14614.",
      "Monroe County Assigned Counsel Program (18-B): handles cases when the Public Defender has a conflict. Contact through the court.",
      "If you are unhappy with your assigned lawyer, you can write a letter to the judge explaining why and requesting a substitution. The judge will review it.",
      "For appeals after conviction, the Appellate Division Fourth Department assigns counsel from its own panel. Contact the court clerk after sentencing."
    ]
  },

  example: {
    en: "Kevin is arrested and brought to Rochester City Court for arraignment. The judge asks if he has a lawyer. He says no and cannot afford one. The judge assigns the Monroe County Public Defender. A public defender appears with Kevin at arraignment, argues for his release on recognizance, and is assigned to the case going forward. Kevin meets with the lawyer the following week at the PD office to review the charges and start building a defense."
  },

  counsel: [
    {
      type: "free",
      name: "Monroe County Public Defender",
      focus: "Criminal defense at all stages",
      qualifier: "Defendants who cannot afford a private attorney in Monroe County",
      access: "Assigned at arraignment or by application",
      outcome: "Full representation from arraignment through sentencing",
      phone: "(585) 753-4210",
      url: "https://www.monroecounty.gov/defender",
      verified: true,
      bilingual: false,
      languages: []
    }
  ],

  relatedIds: [
    "criminal-case-process-ny",
    "rights-when-arrested-ny"
  ],

  relatedHelpResources: [],

  tags: [
    "right to a lawyer",
    "public defender",
    "assigned counsel",
    "18-B",
    "free lawyer",
    "court appointed lawyer",
    "sixth amendment",
    "legal representation",
    "cannot afford lawyer"
  ],

  sources: [
    "https://www.nysenate.gov/legislation/laws/CNT/722",
    "https://www.ils.ny.gov/"
  ],

  lastVerified: "2026-04-16",
  volatility: "low",
  emergencyFlag: false,
  disclaimer: true,
  categoryDisclaimer: null
};
