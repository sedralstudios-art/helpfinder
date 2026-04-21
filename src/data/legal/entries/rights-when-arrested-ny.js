export const RIGHTS_WHEN_ARRESTED_NY = {
  id: "rights-when-arrested-ny",
  category: "criminal",
  tier: "state",
  jurisdiction: "us-ny",
  authorityType: "state-statute",
  primaryStatute: "NY CPL 170.10",
  status: "active",

  title: { en: "NY Rights When Arrested — Silence, Counsel, and the Road to Arraignment" },

  summary: {
    en: "A person arrested in New York has four core rights: the right to know the charge, the right to remain silent, the right to counsel at police questioning and arraignment, and the right to be brought before a judge without unnecessary delay. The Miranda rights derive from the U.S. Constitution. NY Criminal Procedure Law § 170.10 sets the arraignment procedure. Bail rules are at CPL § 510.10. Statements obtained in violation of Miranda are suppressible under CPL § 710.20. These protections apply regardless of citizenship or immigration status."
  },

  whoQualifies: {
    en: [
      "Any person arrested in NY State — regardless of citizenship, immigration status, or the offense charged.",
      "Any person in custodial interrogation, which means not free to leave — rights attach even before a formal arrest.",
      "Any person charged with a violation, misdemeanor, or felony — the core rights apply across offense levels.",
      "A minor under 18 — with additional protections including parental or guardian notification and restrictions on police questioning.",
      "A person stopped by police under Terry-stop reasonable suspicion — some rights (silence, refusal to consent to searches) apply from the moment of seizure even before arrest."
    ]
  },

  whatItMeans: {
    en: "A person arrested in New York has four core rights that the police must respect. Right to know the charge. The police must tell the arrestee why the arrest is being made. A failure to state a lawful reason can give grounds for a later challenge, but does not by itself invalidate the arrest if probable cause actually existed. Right to remain silent. The Fifth Amendment right against self-incrimination applies at custodial interrogation. Miranda v. Arizona requires the police to warn a person in custody, before questioning, of the right to remain silent, that anything said can be used in court, the right to counsel, and the right to free appointed counsel if unable to afford private counsel. The arrestee can invoke silence by clearly saying so — simply being silent is not enough under Berghuis v. Thompkins. NY also extends the right under People v. Rogers: once the person has counsel on any pending matter, police cannot question the person on any other matter without counsel present. Right to counsel. The Sixth Amendment right to counsel attaches at the initiation of adversarial proceedings — generally at arraignment. Miranda's interrogation-stage right to counsel attaches earlier, during custodial police questioning. Once the person asks for a lawyer, police questioning must stop until a lawyer is present. The arrestee cannot be questioned further — the person cannot waive that right by simply continuing to talk. If a lawyer cannot be afforded, the court appoints a public defender or 18-B Assigned Counsel attorney at arraignment at no cost. Right to arraignment without unnecessary delay. Under NY CPL § 140.20, a person arrested without a warrant must be brought before a magistrate without unnecessary delay — generally interpreted as within 24 hours under NY case law (People ex rel. Maxian v. Brown). CPL § 170.10 governs the arraignment on a misdemeanor or violation; CPL § 180.10 covers felony arraignments. At arraignment the judge states the charges, advises of the right to counsel, accepts or assigns a lawyer, takes a plea (usually not guilty at first), and decides release conditions under CPL § 510.10. Bail reform. NY CPL § 510.10 underwent major reforms starting 2020. Most misdemeanors and many non-violent felonies are non-bail-eligible — the court must release on recognizance or with supervised release. Bail may only be set for offenses listed as bail-eligible in the statute (qualifying offenses). Search and seizure. An arrestee has the right to refuse consent to searches of the person, home, vehicle, or belongings. Police typically need a warrant supported by probable cause, with narrow exceptions (search incident to arrest, exigent circumstances, automobile exception, plain view, consent, inventory). Refusing consent does not create probable cause. Miranda suppression. Statements obtained in violation of Miranda are suppressible — the prosecution cannot use them in its case-in-chief. The suppression remedy is pursued through a defense motion under CPL § 710.20 and a Huntley hearing (People v. Huntley). A Miranda violation does not automatically invalidate the arrest — the arrest can still be lawful even if a statement is suppressed. Phone calls. A NY arrestee has the right to reasonable phone calls after booking — typically one to a lawyer and one to a family member or friend. Practical posture: identify, say nothing substantive, clearly invoke silence and counsel, do not consent to searches, and wait for a lawyer at arraignment. Monroe County Public Defender at (585) 753-4210 handles indigent criminal representation."
  },

  yourRights: {
    en: [
      "A NY arrestee has the Fifth Amendment right to remain silent under Miranda v. Arizona. The right must be invoked clearly to be effective under Berghuis v. Thompkins.",
      "A NY arrestee has the Sixth Amendment right to counsel at all critical stages and the Miranda-stage right to counsel during custodial interrogation.",
      "A NY arrestee who has counsel on any pending matter has the right under NY People v. Rogers not to be questioned on any other matter without counsel present.",
      "A NY arrestee has the right to be told the reason for the arrest.",
      "A NY arrestee has the right under CPL § 140.20 to arraignment without unnecessary delay — generally within 24 hours.",
      "A NY arrestee charged with most misdemeanors and many non-violent felonies has the right under CPL § 510.10 bail-reform amendments to pretrial release (recognizance or supervised release).",
      "A NY arrestee has the right to refuse consent to searches of the person, home, vehicle, or belongings.",
      "A NY arrestee has the right under CPL § 710.20 to a pre-trial motion to suppress statements obtained in violation of Miranda.",
      "A NY arrestee has the right to reasonable phone calls after booking — typically to a lawyer and to a family member."
    ]
  },

  legalOptions: {
    en: [
      "Monroe County Public Defender at (585) 753-4210 — indigent criminal defense from arraignment through disposition.",
      "Monroe County 18-B Assigned Counsel Program — covers conflict cases where the Public Defender cannot represent.",
      "NY Civil Liberties Union (NYCLU) at nyclu.org — information on rights during police encounters and complaint intake on police misconduct.",
      "Rochester City Court arraignment part at (585) 428-6990 — handles Rochester-city misdemeanor arraignments.",
      "Monroe County Court — felony arraignments on indictment.",
      "NY Court Help at nycourts.gov/courthelp — plain-language guides to criminal procedure.",
      "Legal Aid Society of Rochester at (585) 232-4090 — collateral civil-consequences representation (housing, employment, benefits) arising from an arrest or conviction.",
      "NY Indigent Legal Services at ils.ny.gov — oversight of the statewide indigent-defense system and standards."
    ]
  },

  example: {
    en: "Marcus was stopped by police in Monroe County and arrested on a misdemeanor charge. At the precinct, officers read him Miranda warnings and began questioning him. Marcus stated clearly that he wanted a lawyer and would not answer questions. The officers stopped questioning — any further questioning would violate Miranda and render the statements suppressible under CPL § 710.20. At arraignment the next morning (within the CPL § 140.20 without-unnecessary-delay window), the Rochester City Court judge read the charge, appointed a Monroe County Public Defender under County Law § 722, took Marcus's not-guilty plea, and set release conditions under CPL § 510.10. Because the charge was a non-violent misdemeanor, the court released Marcus on his own recognizance."
  },

  counsel: [
    {
      type: "government",
      name: "Monroe County Public Defender",
      focus: "Indigent criminal defense at all stages including arraignment",
      qualifier: "Monroe County arrestee unable to afford private counsel",
      access: "Assigned at arraignment or by application",
      outcome: "Free representation from arraignment through trial or plea",
      phone: "(585) 753-4210",
      url: "https://www.monroecounty.gov/publicdefender",
      verified: true,
      bilingual: true,
      languages: ["es"]
    },
    {
      type: "nonprofit",
      name: "Legal Aid Society of Rochester",
      focus: "Collateral-consequences representation — housing, employment, benefits after an arrest",
      qualifier: "Low-income Monroe County resident",
      access: "Phone intake",
      outcome: "Free civil representation",
      phone: "(585) 232-4090",
      url: "https://www.lasroc.org",
      verified: true,
      bilingual: true,
      languages: ["es"]
    },
    {
      type: "nonprofit",
      name: "NY Civil Liberties Union (NYCLU)",
      focus: "Police-encounter rights information and misconduct complaint intake",
      qualifier: "Any NY resident",
      access: "Online complaint intake",
      outcome: "Information, investigation referral, systemic advocacy",
      phone: "(212) 607-3300",
      url: "https://www.nyclu.org",
      verified: true,
      bilingual: false,
      languages: []
    }
  ],

  relatedIds: [
    "clean-slate-ny",
    "criminal-case-process-ny",
    "right-to-a-lawyer-ny",
    "criminal-appeal-ny"
  ],

  relatedHelpResources: [],

  tags: [
    "NY rights when arrested",
    "Miranda NY",
    "People v Rogers",
    "CPL 140.20 arraignment delay",
    "CPL 170.10 misdemeanor arraignment",
    "CPL 510.10 bail reform",
    "CPL 710.20 suppression",
    "right to remain silent",
    "right to counsel custodial",
    "refusing consent search"
  ],

  sources: [
    "https://www.nysenate.gov/legislation/laws/CPL/170.10",
    "https://www.nysenate.gov/legislation/laws/CPL/510.10",
    "https://www.nysenate.gov/legislation/laws/CPL/710.20",
    "https://legalaidnyc.org/get-help/arrests-policing/what-you-need-to-know-about-your-miranda-rights/"
  ],

  lastVerified: "2026-04-21",
  volatility: "low",
  emergencyFlag: true,
  disclaimer: true,
  categoryDisclaimer: null
};
