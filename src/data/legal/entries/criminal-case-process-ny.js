export const CRIMINAL_CASE_PROCESS_NY = {
  id: "criminal-case-process-ny",
  category: "criminal",
  tier: "state",
  jurisdiction: "us-ny",
  authorityType: "state-statute",
  primaryStatute: "NY CPL",
  status: "active",

  title: { en: "NY Criminal Case Process — Arrest, Arraignment, Discovery, Grand Jury, Trial, Sentencing" },

  summary: {
    en: "A NY criminal case proceeds through the stages set out in the Criminal Procedure Law (CPL, enacted in 1970 as Chapter 11-A of the Consolidated Laws). Main stages include arrest or desk appearance ticket, arraignment in local criminal court, discovery under CPL Article 245, pretrial motions, felony hearing or grand jury under CPL Article 190, arraignment on indictment in superior court, trial under CPL Articles 260-310, and sentencing under CPL Articles 380-400. CPL Article 30 sets speedy-trial limits and CPL Article 440 governs post-judgment motions."
  },

  whoQualifies: {
    en: [
      "A NY resident arrested or charged with a misdemeanor or felony offense.",
      "A person who has received a desk appearance ticket under CPL Article 150 directing an appearance in local criminal court.",
      "A person summoned to appear in a NY criminal court under CPL Article 130.",
      "A crime victim or family member trying to understand the stages of a pending case.",
      "A witness in a criminal case needing to understand the process and any obligations under CPL Article 610 subpoenas."
    ]
  },

  whatItMeans: {
    en: "The NY Criminal Procedure Law, enacted May 20, 1970 as Chapter 11-A of the Consolidated Laws, governs criminal cases statewide. CPL Article 10 lists the criminal courts, CPL Article 20 sets geographical jurisdiction, and CPL Article 30 sets speedy-trial timing. Most cases begin with an arrest under CPL Article 140 or a desk appearance ticket under CPL Article 150. An arrest without a warrant requires probable cause. Following arrest the defendant is arraigned in the local criminal court of the jurisdiction — in Monroe County, Rochester City Court for arrests within city limits or the respective town or village justice court elsewhere. At arraignment under CPL Article 170, the court reads the accusatory instrument, advises the defendant of the right to counsel, assigns counsel if requested and the defendant is eligible, takes a plea (typically not guilty), and addresses release under the CPL Article 500 bail rules. If the initial charge is a felony, the case may proceed to a felony hearing under CPL Article 180 or be presented to a grand jury under CPL Article 190. A grand jury consists of between 16 and 23 people and votes an indictment when the prosecution presents sufficient evidence. The grand jury standard is reasonable cause to believe the defendant committed the charged offense. Once indicted under CPL Article 200, the case is transferred to superior court — Monroe County Court or NY State Supreme Court — for arraignment on the indictment. Discovery in NY has been governed since January 1, 2020 by CPL Article 245, which replaced the narrower former Article 240. CPL Article 245 requires the prosecution to turn over most evidence within 20 days of arraignment in many cases, with certain longer or shorter deadlines depending on custody status. Pretrial motions follow under CPL Article 255 — typically motions to dismiss under CPL § 170.30 (misdemeanor) or § 210.20 (felony), motions to suppress evidence, and motions challenging the accusatory instrument. Plea negotiations may proceed at any stage after discovery. An adjournment in contemplation of dismissal (ACD) under CPL § 170.55 (general) or § 170.56 (marijuana) is an option for many misdemeanors — the case is adjourned for six months to a year and dismissed if no new arrest occurs. If the case goes to trial, CPL Article 260-280 governs jury selection and presentation. A NY felony jury has 12 members; a misdemeanor jury has 6 members unless the charge authorizes a greater sentence. The prosecution must prove every element of the offense beyond a reasonable doubt under CPL Article 70. A not-guilty verdict results in automatic sealing of the record under CPL § 160.50. A guilty verdict or plea moves the case to sentencing under CPL Articles 380-400. Post-judgment motions under CPL Article 440 (vacating judgment or setting aside sentence) are filed in the sentencing court and may proceed in parallel with a direct appeal. Appeals from a judgment of conviction proceed under CPL Articles 450 and 460 — the direct-appeal entry covers that pathway in detail. Throughout the process, defendants have the constitutional right to counsel; Monroe County Public Defender and the 18-B Assigned Counsel Panel provide representation when a defendant cannot afford private counsel."
  },

  yourRights: {
    en: [
      "A NY defendant has the constitutional right to remain silent, grounded in the Fifth Amendment and applied throughout the CPL process.",
      "A NY defendant has the right to counsel at every critical stage; if indigent, counsel is assigned through the Monroe County Public Defender or the 18-B Assigned Counsel Panel.",
      "A NY defendant has the right to pretrial discovery under CPL Article 245 — most evidence must be disclosed within 20 days of arraignment in many cases.",
      "A NY defendant has the right to a speedy trial under CPL Article 30, with specific time limits tied to the offense classification.",
      "A NY defendant has the right to a jury trial — 12 jurors for felony cases under CPL Article 270, 6 jurors for misdemeanors under CPL Article 340.",
      "A NY defendant has the right under CPL Article 60 and the Sixth Amendment to confront and cross-examine prosecution witnesses.",
      "A NY defendant acquitted at trial has the right under CPL § 160.50 to sealing of the criminal record and cannot be retried on the same charge due to double-jeopardy protections under CPL Article 40."
    ]
  },

  legalOptions: {
    en: [
      "Monroe County Public Defender at (585) 753-4210 — represents indigent defendants from arraignment through trial, plea, or appeal.",
      "Monroe County Assigned Counsel Program (18-B panel) — handles conflict cases and some felony assignments; reached through the court or Public Defender.",
      "Rochester City Court Criminal Division at (585) 371-3413 — arraigns misdemeanor arrests within city limits and handles city-court trials.",
      "Monroe County Court at 99 Exchange Boulevard, Rochester — superior court for felony arraignment on indictment and felony trials.",
      "CPL § 170.55 adjournment in contemplation of dismissal (ACD) is available for many misdemeanors — the case is adjourned and dismissed if no new arrest occurs during the period.",
      "Legal Aid Society of Rochester at (585) 232-4090 — collateral-consequences advice, record sealing, reentry services after criminal case resolution.",
      "Empire Justice Center at (585) 454-4060 — systemic and impact-level criminal-justice representation."
    ]
  },

  example: {
    en: "Marcus is arrested in Rochester for a Class A misdemeanor petit larceny and released the same day with an appearance ticket. The next morning at Rochester City Court he is arraigned under CPL Article 170. The court assigns a public defender. The defender enters a not-guilty plea and asks for release on recognizance, which the court grants under CPL Article 500. Over the next 20 days, the District Attorney turns over discovery under CPL Article 245 — store security video and a witness statement. The public defender reviews the evidence and negotiates an ACD under CPL § 170.55. Marcus stays out of trouble for six months, the case is dismissed, and the record is sealed under CPL § 160.50."
  },

  counsel: [
    {
      type: "government",
      name: "Monroe County Public Defender",
      focus: "Indigent criminal defense from arraignment through trial and plea",
      qualifier: "Monroe County defendant unable to afford private counsel",
      access: "Assigned at arraignment or by application at 10 North Fitzhugh Street",
      outcome: "Full representation at every stage of the case",
      phone: "(585) 753-4210",
      url: "https://www.monroecounty.gov/publicdefender",
      verified: true,
      bilingual: true,
      languages: ["es"]
    },
    {
      type: "nonprofit",
      name: "Legal Aid Society of Rochester",
      focus: "Collateral-consequences counseling, record sealing, reentry",
      qualifier: "Low-income Monroe County resident",
      access: "Phone intake",
      outcome: "Advice and limited representation on post-case matters",
      phone: "(585) 232-4090",
      url: "https://www.lasroc.org",
      verified: true,
      bilingual: true,
      languages: ["es"]
    },
    {
      type: "government",
      name: "Rochester City Court",
      focus: "Arraignment and misdemeanor trials within Rochester city limits",
      qualifier: "Defendant arrested within Rochester",
      access: "Court appearance at 150 South Plymouth Avenue (criminal) or 99 Exchange Blvd (civil)",
      outcome: "Arraignment, plea, hearings, misdemeanor trials",
      phone: "(585) 371-3413",
      url: "https://www.nycourts.gov/courts/7jd/rochester",
      verified: true,
      bilingual: false,
      languages: []
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
    "NY criminal case process",
    "CPL Article 170 arraignment",
    "CPL Article 190 grand jury",
    "CPL Article 245 discovery",
    "CPL Article 30 speedy trial",
    "desk appearance ticket",
    "ACD CPL 170.55",
    "felony indictment NY",
    "Monroe County Public Defender",
    "Rochester City Court"
  ],

  sources: [
    "https://www.nysenate.gov/legislation/laws/CPL",
    "https://www.nycourts.gov"
  ],

  lastVerified: "2026-04-27",
  factCheckedBy: { tool: "websearch+webfetch", date: "2026-04-27" },
  volatility: "low",
  emergencyFlag: false,
  disclaimer: true,
  categoryDisclaimer: null
};
