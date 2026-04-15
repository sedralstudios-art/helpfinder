export const DISMISSED_CASE_SEALING_NY = {
  id: "dismissed-case-sealing-ny",
  category: "criminal",
  tier: "state",
  jurisdiction: "us-ny",
  status: "active",

  title: { en: "My Case Was Dismissed — Why Is It Still On My Record?" },

  summary: {
    en: "In New York, if your criminal case was dismissed or ended in your favor, the record is supposed to be sealed automatically. No application needed. But sealing doesn't always happen on time, and background-check companies sometimes still show the old arrest. You have a right to get it fixed."
  },

  whoQualifies: {
    en: [
      "Anyone whose New York criminal case ended in your favor. That means the charges were dropped, the case was dismissed, the judge dismissed it, the jury found you not guilty, or the DA decided not to file charges.",
      "Anyone whose case ended as just a violation or traffic ticket (not a misdemeanor or felony). Examples: disorderly conduct, harassment in the 2nd degree.",
      "Anyone who finished an ACD (Adjournment in Contemplation of Dismissal) and the case was then dismissed. An ACD is a deal where the judge puts your case on hold for 6 or 12 months. If you stay out of trouble, the case gets dismissed at the end.",
      "Immigration status does not change your right to sealing. Sealed means sealed for everyone who does regular background checks."
    ]
  },

  whatItMeans: {
    en: "New York has a law that seals your record when your case ends in your favor (Criminal Procedure Law § 160.50). Sealing is supposed to happen on its own. You should not have to file anything.\n\n'Ended in your favor' means one of these: the charges were dropped, the judge dismissed the case, a jury found you not guilty, the DA decided not to file charges, or you finished an ACD without getting into new trouble. The court clerk is supposed to mail you a notice, seal the court file, and tell the DMV, the police, and the DA's office to seal their copies too.\n\nIf your case ended as just a violation or traffic ticket (not a misdemeanor or felony), a different law applies (CPL § 160.55). The arrest record is sealed. But the final court record stays public. That is a smaller seal than the one for dismissed cases.\n\nWhen sealing works, your record is hidden from most jobs, landlords, and schools. Under New York law, most employers, landlords, and schools are not allowed to ask about a sealed case, and a sealed case is treated as if it did not happen on most applications.\n\nSealing often does not happen the way it should. There are four common reasons. One: the court clerk missed the step. Two: the state criminal history file did not update. Three: a background-check company copied the old record before sealing and never fixed it. Four: the case was in a slow court system, like NYC Criminal Court or some small town courts.\n\nSomeone in this situation has the right to get the sealing fixed. The usual path looks like this: a person orders their own RAP sheet (their New York criminal history), checks what is and is not sealed, and if the seal did not happen, sends a short written request to the court where the case ended. If a background-check company still shows the sealed case, they are breaking a federal law called the Fair Credit Reporting Act, or FCRA, and they can be sued in federal court."
  },

  yourRights: {
    en: [
      "You have the right to automatic sealing when your case ends in your favor (CPL § 160.50). No fee, no paperwork.",
      "You have the right to get a copy of your own RAP sheet — that's your New York criminal history file. It's run by the NY Division of Criminal Justice Services (DCJS). It shows exactly what was sealed and what wasn't.",
      "Under New York law, a sealed case is treated as if it did not happen for most job applications. In most jobs, employers are not allowed to ask about it at all (Executive Law § 296(16)). A lawyer can help you figure out what applies to your specific situation.",
      "You have the right to ask a judge to seal the case if the court missed the step. A written request to a judge is called a motion. For a 160.50 case, there is no filing fee.",
      "You have the right to sue a background-check company in federal court if it keeps showing a sealed case after you tell them to remove it. The law is the Fair Credit Reporting Act (15 USC § 1681). If you win, the company usually has to pay your lawyer.",
      "You have the right to sue an employer if they saw a sealed record and used it against you (New York Executive Law § 296).",
      "You have the right to a free lawyer for this kind of problem if you are low-income. Legal aid groups handle these cases at no cost when you qualify."
    ]
  },

  legalOptions: {
    en: [
      "One option is to order your own RAP sheet from the NY Division of Criminal Justice Services. It requires fingerprints and a fee — around $65 as of April 2026 (current cost is posted at criminaljustice.ny.gov/ojis/recordreview.htm).",
      "Once someone has a RAP sheet in hand, they can compare it to what they remember. Anything that should be sealed but shows as open is worth flagging.",
      "If a dismissed case did not seal, one path is to contact the clerk at the court where the case ended. Many clerks will fix it once the miss is pointed out.",
      "If the clerk won't fix it, you could file a short written request asking the judge to seal the case. This is called a motion. A person can write it themselves using the template at nycourts.gov, or a legal aid lawyer can write it for them. There is no filing fee for a 160.50 motion.",
      "If a private background-check company is still showing the sealed case, you could send them a written FCRA dispute letter. They have 30 days to investigate and correct.",
      "If a background check hurt a job, housing, or school application, one option is to keep everything — the report, the rejection letter, any emails. That paperwork is what an FCRA or Executive Law § 296 claim would be built on.",
      "Free legal help in Monroe County: Legal Aid Society of Rochester (lasroc.org) and Legal Assistance of Western New York (lawny.org). See the counsel list below for intake details.",
      "Free statewide help with sealing paperwork is available from the Legal Action Center (lac.org), which specializes in criminal record issues."
    ]
  },

  example: {
    en: "Maria was arrested in 2022 and charged with petit larceny. The DA decided not to file charges, and the case was dismissed four months later. In 2026 she applies for a nursing assistant job. The background check comes back with the 2022 arrest still showing. She orders her own RAP sheet from DCJS. The RAP sheet shows the arrest marked 'sealed under 160.50.' That means the sealing did happen — but the private background-check company had copied the old record before it got sealed and never updated its files. Maria sends the company a dispute letter with a copy of her RAP sheet. Three weeks later they remove the arrest and send her a corrected report. She re-submits it to the employer and gets the job."
  },

  counsel: [
    {
      type: "free",
      name: "Legal Action Center",
      focus: "Criminal record sealing, RAP sheet review, employer/housing discrimination tied to old records",
      qualifier: "Any New Yorker with a criminal record issue — no income cap on hotline advice",
      access: "Phone helpline at 212-243-1313 or online intake",
      outcome: "Free advice and sometimes direct representation on sealing motions",
      phone: "212-243-1313",
      url: "https://www.lac.org/",
      verified: true,
      bilingual: true,
      languages: ["en", "es"]
    },
    {
      type: "free",
      name: "Legal Aid Society of Rochester",
      focus: "Sealing motions, FCRA claims, Executive Law § 296 complaints",
      qualifier: "Low-income residents of Monroe County and nearby counties",
      access: "Phone intake at (585) 232-4090",
      outcome: "Direct representation for sealing and record-related discrimination",
      phone: "(585) 232-4090",
      url: "https://www.lasroc.org",
      verified: true,
      bilingual: true,
      languages: ["es"]
    },
    {
      type: "free",
      name: "Legal Assistance of Western New York (LawNY)",
      focus: "Civil record-based discrimination in housing and benefits",
      qualifier: "Low-income residents in 14 Western NY counties including Monroe",
      access: "Phone intake at (585) 325-2520",
      outcome: "Representation in civil matters involving old arrests or convictions",
      phone: "(585) 325-2520",
      url: "https://www.lawny.org",
      verified: true,
      bilingual: false,
      languages: []
    }
  ],

  relatedIds: [
    "clean-slate-ny",
    "rights-when-arrested-ny",
    "foil-ny"
  ],

  relatedHelpResources: [],

  tags: [
    "case dismissed",
    "record sealed",
    "sealing",
    "CPL 160.50",
    "CPL 160.55",
    "arrest on background check",
    "dismissed charges",
    "ACD",
    "adjournment in contemplation of dismissal",
    "RAP sheet",
    "DCJS",
    "background check error",
    "FCRA",
    "sealed arrest",
    "Executive Law 296",
    "record still showing after dismissal"
  ],

  sources: [
    "https://www.nysenate.gov/legislation/laws/CPL/160.50",
    "https://www.nysenate.gov/legislation/laws/CPL/160.55",
    "https://www.nysenate.gov/legislation/laws/EXC/296",
    "https://www.criminaljustice.ny.gov/ojis/recordreview.htm",
    "https://www.lac.org/"
  ],

  lastVerified: "2026-04-14",
  volatility: "low",
  emergencyFlag: false,
  disclaimer: true,
  categoryDisclaimer: null
};
