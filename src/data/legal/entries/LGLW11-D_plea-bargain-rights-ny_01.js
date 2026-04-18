export const PLEA_BARGAIN_RIGHTS_NY = {
  id: "plea-bargain-rights-ny",
  category: "criminal",
  tier: "state",
  jurisdiction: "us-ny",
  status: "active",

  title: { en: "Plea Bargains — What a Defendant Needs to Know Before Accepting a Deal" },

  summary: {
    en: "Most criminal cases in New York end with a plea bargain, not a trial. A plea bargain is an agreement between the prosecutor and the defendant where the defendant pleads guilty to a lesser charge or gets a lighter sentence. A defendant has the right to understand the deal fully before accepting it and the right to reject it and go to trial."
  },

  whoQualifies: {
    en: [
      "Any person facing criminal charges who has been offered a plea deal.",
      "Any person who accepted a plea deal and wants to understand what happens next.",
      "Any person who feels they were pressured into a plea deal or did not understand the terms.",
      "Any family member of someone considering a plea bargain."
    ]
  },

  whatItMeans: {
    en: "A plea bargain is a negotiation between the prosecutor and the defense attorney. The defendant gives up the right to a trial in exchange for a reduced charge, a lighter sentence, or both. In New York, about 95% of criminal cases are resolved through plea bargains. The judge must approve the deal, but the judge usually accepts plea agreements unless the terms are clearly unreasonable. Under CPL Section 220.50, before accepting a guilty plea, the judge must make sure the defendant understands the charges, the rights being given up (right to trial, right to confront witnesses, right against self-incrimination), and the possible sentence. This is called the plea allocution. A defendant has the absolute right to reject a plea offer and go to trial. No one — not the judge, prosecutor, or defense attorney — can force a defendant to take a deal. However, if the defendant rejects a plea and is convicted at trial, the sentence may be harsher than the plea offer. This is sometimes called the trial penalty. A plea bargain may have immigration consequences. A guilty plea to certain offenses can trigger deportation for non-citizens. The defense attorney must advise the defendant about immigration consequences before a plea (Padilla v. Kentucky, 2010)."
  },

  yourRights: {
    en: [
      "A defendant has the right to be represented by a lawyer during all plea negotiations. If the defendant cannot afford an attorney, one will be assigned (Public Defender or assigned counsel).",
      "A defendant has the right to understand every term of the plea agreement before accepting it — the charge, the sentence, and any conditions (probation, restitution, treatment programs).",
      "A defendant has the right to reject a plea offer and go to trial. No one can force a guilty plea.",
      "A defendant has the right to know the immigration consequences of a guilty plea before accepting it.",
      "A defendant who pleads guilty can withdraw the plea before sentencing if the court agrees, but after sentencing it is much harder to undo.",
      "A defendant has the right to speak at sentencing even after a plea bargain — this is called the right of allocution.",
      "A plea bargain is not final until the judge accepts it. If the judge rejects the deal, the defendant can withdraw the guilty plea."
    ]
  },

  legalOptions: {
    en: [
      "The Monroe County Public Defender's Office at (585) 753-4210 represents defendants who cannot afford a lawyer in criminal cases.",
      "The Assigned Counsel Program at (585) 753-4264 provides attorneys for defendants when the Public Defender has a conflict.",
      "Legal Aid Society of Rochester at (585) 232-4090 provides some criminal defense services.",
      "A defendant who feels they were pressured into a plea or did not understand the consequences can file a CPL 440.10 motion to vacate the conviction.",
      "For immigration consequences of a plea, the NYS Immigrant Defense Project has a hotline at (212) 725-6422.",
      "A defendant considering a plea should ask their attorney: What is the charge? What is the sentence? Will this appear on a background check? Can the record be sealed later? Are there immigration consequences?"
    ]
  },

  example: {
    en: "Andre was charged with petit larceny (a misdemeanor) in Rochester City Court. The prosecutor offered a plea deal: plead guilty to disorderly conduct (a violation, not a crime) and pay a $250 fine — no jail, no criminal record. Andre's public defender explained that a violation does not count as a criminal conviction and would not show up on most background checks. Andre accepted the deal. The judge asked him in court if he understood the terms, confirmed he was not being forced, and approved the plea. Andre paid the fine and moved on with no criminal record."
  },

  counsel: [
    {
      type: "government",
      name: "Monroe County Public Defender's Office",
      focus: "Criminal defense, plea negotiations, trial representation",
      qualifier: "Defendants who cannot afford a private attorney",
      access: "Phone at (585) 753-4210, assigned at arraignment",
      outcome: "Full representation in criminal proceedings",
      phone: "(585) 753-4210",
      url: "https://www.monroecounty.gov/defender",
      verified: true,
      bilingual: false,
      languages: []
    },
    {
      type: "government",
      name: "Monroe County Assigned Counsel Program",
      focus: "Criminal defense when Public Defender has a conflict",
      qualifier: "Defendants who qualify for assigned counsel",
      access: "Phone at (585) 753-4264",
      outcome: "Attorney assignment for criminal cases",
      phone: "(585) 753-4264",
      url: "https://www.monroecounty.gov",
      verified: true,
      bilingual: false,
      languages: []
    }
  ],

  relatedIds: [
    "right-to-a-lawyer-ny",
    "criminal-case-process-ny",
    "what-happens-at-arraignment-ny",
    "sentencing-options-ny",
    "seal-your-record-ny",
    "common-misdemeanor-charges-ny"
  ],

  relatedHelpResources: [],

  tags: [
    "plea bargain",
    "plea deal",
    "guilty plea",
    "plea agreement",
    "plea offer",
    "accept plea deal",
    "reject plea deal",
    "plea negotiation",
    "criminal plea",
    "plea allocution",
    "trial penalty",
    "plea immigration"
  ],

  sources: [
    "https://www.nysenate.gov/legislation/laws/CPL/220.50",
    "https://www.nycourts.gov/courthelp/criminal/pleaBargain.shtml"
  ],

  lastVerified: "2026-04-17",
  volatility: "low",
  emergencyFlag: false,
  disclaimer: true,
  categoryDisclaimer: null
};
