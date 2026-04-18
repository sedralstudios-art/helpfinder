export const CRIMINAL_CASE_PROCESS_NY = {
  id: "criminal-case-process-ny",
  category: "criminal",
  tier: "state",
  jurisdiction: "us-ny",
  authorityType: "state-statute",
  primaryStatute: "NY CPL",
  status: "active",

  title: { en: "How a Criminal Case Works in New York — From Arrest to Verdict" },

  summary: {
    en: "A criminal case in New York follows a set path: arrest, arraignment, discovery, motions, and then either a plea or a trial. For felonies, a grand jury decides whether to indict before the case moves to superior court. Understanding each step helps you know what to expect and what questions to ask your lawyer at every stage."
  },

  whoQualifies: {
    en: [
      "Anyone facing criminal charges in New York — misdemeanor or felony.",
      "Anyone who has been arrested, received a desk appearance ticket, or been summoned to appear in a criminal court.",
      "Family members trying to understand what a loved one is going through in the criminal justice system."
    ]
  },

  whatItMeans: {
    en: "A criminal case in New York moves through distinct stages. Arrest: the police take a person into custody based on probable cause, or issue a desk appearance ticket for smaller charges. Arraignment: the first court appearance, where the judge reads the charges, the defendant enters a plea (usually not guilty), and the judge decides whether to release the person, set bail, or hold them. Discovery: the prosecutor turns over evidence to the defense on a strict timeline (CPL Article 245, since 2020). Motions: the defense can file to dismiss, suppress evidence, or challenge other aspects of the case. For felonies: a grand jury of 16-23 people reviews the evidence and votes on whether to indict. If they do, the case moves to superior court (county court) and the defendant is arraigned again on the indictment. Preliminary hearing: an alternative to the grand jury where the judge checks for probable cause — rarely used because prosecutors prefer the grand jury. Trial: a jury (12 for felony, 6 for misdemeanor) or a judge alone hears the case and returns a verdict. The prosecutor must prove guilt beyond a reasonable doubt. If found not guilty, the case ends and the record is sealed. If found guilty, the case moves to sentencing."
  },

  yourRights: {
    en: [
      "You have the right to remain silent at every stage — anything you say can be used against you.",
      "You have the right to a lawyer at every stage. If you cannot afford one, the court assigns one for free.",
      "You have the right to see the evidence against you (discovery) before trial.",
      "You have the right to a speedy trial — the prosecutor has a limited time to be ready.",
      "You have the right to a jury trial (or to waive the jury and have a judge decide).",
      "You have the right to confront and cross-examine witnesses.",
      "If found not guilty, you cannot be tried again for the same charge (double jeopardy)."
    ]
  },

  legalOptions: {
    en: [
      "At arraignment, the most important decision is release conditions: ask your lawyer about ROR (release on recognizance), supervised release, or bail. See the glossary entry for each term.",
      "After discovery, your lawyer reviews the evidence and advises whether the case is strong or weak. This is usually when plea negotiations begin.",
      "A motion to dismiss (CPL 170.30 for misdemeanor, 210.20 for felony) can end the case before trial if there are legal defects, speedy trial violations, or other grounds.",
      "An ACD (adjournment in contemplation of dismissal) can end a misdemeanor case without a guilty plea — the case is adjourned for 6 months and dismissed if you stay out of trouble.",
      "Free legal representation is available through the Monroe County Public Defender at (585) 753-4210 or the Monroe County Assigned Counsel Program (18-B panel)."
    ]
  },

  example: {
    en: "Marcus is arrested for petit larceny (a Class A misdemeanor) in Rochester. He is brought to Rochester City Court for arraignment the next morning. The judge assigns a public defender, reads the charge, and releases Marcus on his own recognizance. Over the next few weeks, the prosecutor turns over discovery — store security video and a witness statement. Marcus's lawyer reviews it and negotiates an ACD. Marcus stays out of trouble for six months, the case is dismissed, and his record is sealed."
  },

  counsel: [
    {
      type: "free",
      name: "Monroe County Public Defender",
      focus: "Criminal defense for all charges in Monroe County courts",
      qualifier: "Defendants who cannot afford a private attorney",
      access: "Assigned at arraignment or by application",
      outcome: "Full representation from arraignment through trial or plea",
      phone: "(585) 753-4210",
      url: "https://www.monroecounty.gov/defender",
      verified: true,
      bilingual: false,
      languages: []
    },
    {
      type: "free",
      name: "Legal Aid Society of Rochester",
      focus: "Criminal defense, record sealing, reentry",
      qualifier: "Low-income residents of Monroe and surrounding counties",
      access: "Phone intake or walk-in",
      outcome: "Direct representation or advice",
      phone: "(585) 232-4090",
      url: "https://www.lasroc.org",
      verified: true,
      bilingual: true,
      languages: ["es"]
    }
  ],

  relatedIds: [
    "rights-when-arrested-ny",
    "clean-slate-ny",
    "dismissed-case-sealing-ny",
    "drug-possession-basics-ny",
    "good-samaritan-law-ny"
  ],

  relatedHelpResources: [],

  tags: [
    "criminal case",
    "how criminal case works",
    "arraignment",
    "grand jury",
    "indictment",
    "trial",
    "preliminary hearing",
    "discovery",
    "motion to dismiss",
    "plea",
    "verdict",
    "summons",
    "desk appearance ticket",
    "criminal process"
  ],

  sources: [
    "https://www.nysenate.gov/legislation/laws/CPL",
    "https://www.nycourts.gov"
  ],

  lastVerified: "2026-04-16",
  volatility: "low",
  emergencyFlag: false,
  disclaimer: true,
  categoryDisclaimer: null
};
