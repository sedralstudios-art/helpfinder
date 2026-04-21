export const RESPOND_TO_LAWSUIT_NY = {
  id: "respond-to-lawsuit-ny",
  category: "consumer",
  tier: "state",
  jurisdiction: "us-ny",
  authorityType: "state-statute",
  primaryStatute: "NY CVP A3",
  status: "active",

  title: { en: "NY After Being Sued — Responding to a Civil Lawsuit Within the 20- or 30-Day Answer Window" },

  summary: {
    en: "A NY civil lawsuit begins when a plaintiff files a summons and complaint and has it served on the defendant. Under CPLR § 3012, the defendant has 20 days to answer after personal service inside the state, or 30 days after service by mail or other non-personal method. Filing an answer raises defenses and stops a default judgment under CPLR § 3215. Common defenses include statute of limitations (three years for consumer credit debt under CPLR § 214-i), payment, wrong defendant, lack of jurisdiction, and improper service. Free legal help is available through Legal Aid and LawNY."
  },

  whoQualifies: {
    en: [
      "A NY resident served with a summons and complaint in a civil case — debt collection, contract dispute, landlord-tenant, personal injury, family, or any other civil matter.",
      "A NY resident served in person by a process server — a 20-day answer deadline applies under CPLR § 3012(a).",
      "A NY resident served by mail, substituted service, posting, or other non-personal method — a 30-day answer deadline applies under CPLR § 3012(c).",
      "A NY resident who suspects a lawsuit has been filed but has not received papers — may have been victim of sewer service, where the server falsely claims service happened.",
      "A NY defendant considering a motion to dismiss instead of an answer — CPLR § 3211 allows dismissal motions on several grounds."
    ]
  },

  whatItMeans: {
    en: "A civil lawsuit in NY starts when the plaintiff (the person suing) files a summons and complaint with the court and has it served on the defendant. The summons tells the defendant what court, what case number, and how long to respond. The complaint states what the plaintiff is claiming — the facts, the legal theory, and the amount of money or other relief requested. Answer deadlines are set by CPLR § 3012. Personal delivery inside NY State gives a 20-day answer window. Service by mail, substituted service (leaving papers at a place of residence or business with a competent person and then mailing), service by publication, or service on an out-of-state defendant gives a 30-day window. The clock runs from completion of service, which for mail-plus-delivery service means from the date the defendant is deemed served under the rule — generally the date papers are actually mailed for service-by-mail. The answer is the defendant's written response. It must respond to each numbered paragraph of the complaint — admitting, denying, or stating lack of knowledge. It must also raise any affirmative defenses, which are separate legal arguments for why the plaintiff should lose even if the facts are true. Common affirmative defenses include: statute of limitations (under CPLR § 214-i, three years for consumer credit debt; six years for most other contract claims); payment or release; lack of personal jurisdiction (often based on improper service); lack of subject-matter jurisdiction; forum non conveniens; and failure to state a claim. For consumer credit cases, the Consumer Credit Fairness Act adds protections — the plaintiff must file additional affidavits proving the debt chain (assignment from original creditor), an itemized account statement, and confirmation the case was filed within the three-year statute of limitations under CPLR § 214-i. The alternative to an answer is a motion to dismiss under CPLR § 3211. A motion to dismiss raises specific legal defects — lack of jurisdiction, improper service, failure to state a claim, statute of limitations, res judicata — without answering the factual allegations. Filing a timely motion to dismiss extends the answer deadline. What happens if the defendant does nothing: the plaintiff can ask the court for a default judgment under CPLR § 3215. A default judgment means the plaintiff wins automatically without proof at trial. Enforcement tools including wage garnishment, bank account restraint, and property liens follow quickly. Vacating a default judgment is possible but harder than answering in the first place — CPLR § 5015 (excusable default within one year; lack of jurisdiction anytime) and CPLR § 317 (no personal service, up to five years) each provide pathways covered in the separate default-judgment entry. Practical response to being served: identify the court and deadline on the summons, count carefully from the service date, and file the answer with the court clerk before the deadline. Legal Aid Society of Rochester, LawNY, JustCause, and Empire Justice Center represent low-income Monroe County defendants. Many civil-legal-services intake lines prioritize cases with imminent answer deadlines."
  },

  yourRights: {
    en: [
      "A NY defendant has the right under CPLR § 3012 to 20 days (after personal service in-state) or 30 days (after service by mail or other non-personal method) to file an answer.",
      "A NY defendant has the right to file an answer denying the allegations and raising affirmative defenses — statute of limitations, payment, wrong defendant, lack of jurisdiction, improper service.",
      "A NY defendant has the right under CPLR § 3211 to file a motion to dismiss instead of (or before) an answer — extending the answer deadline.",
      "A NY consumer-credit defendant has the right to require the plaintiff to file Consumer Credit Fairness Act affidavits proving the debt chain, itemized account, and CPLR § 214-i three-year timeliness.",
      "A NY defendant has the right to a court-issued stamped copy of the filed answer for the defendant's records.",
      "A NY defendant has the right to retain a lawyer at any point; Legal Aid, LawNY, and JustCause provide free representation to low-income defendants.",
      "A NY defendant has the right under CPLR § 5015 or § 317 to move to vacate a default judgment if one was entered — though answering in time is much simpler."
    ]
  },

  legalOptions: {
    en: [
      "Read the summons carefully. Note the court name, the case index number, the plaintiff's name, and the answer deadline. Count days from the date of service.",
      "Legal Aid Society of Rochester at (585) 232-4090 — low-income Monroe County defendants; time-sensitive cases prioritized for same-week answer drafting.",
      "LawNY at (585) 325-2520 — civil-lawsuit defense across 14-county Western NY service area.",
      "JustCause at (585) 232-3051 — volunteer-attorney program for Monroe County defendants.",
      "NY Court Help at nycourts.gov/courthelp/whensuedformoney — plain-language answer forms and step-by-step instructions.",
      "A pro se answer can be filed by the defendant without a lawyer — simple form denying the allegations and listing affirmative defenses, filed with the court clerk before the deadline.",
      "Common defenses to research: CPLR § 214-i three-year SOL for consumer credit; CPLR § 213 six-year SOL for most contracts; improper service under CPLR § 308; lack of personal jurisdiction under CPLR § 302.",
      "If the deadline has already passed and a default judgment has been entered, see the default-judgment-ny entry for CPLR § 5015 and § 317 vacatur pathways."
    ]
  },

  example: {
    en: "A process server handed Jamie a summons and complaint at her Rochester apartment — a debt collector sued for $2,800 on an old credit-card account. Jamie called Legal Aid Society of Rochester the next morning. A paralegal drafted a pro se answer denying the specific allegations and raising three affirmative defenses: statute of limitations under CPLR § 214-i (the last payment was four years ago, past the three-year window), improper itemization under the Consumer Credit Fairness Act, and improper assignment of the debt. Jamie filed the answer at the court clerk's office on day 18 of the 20-day window. Faced with the limitations defense, the debt collector agreed to dismiss the case with prejudice rather than litigate."
  },

  counsel: [
    {
      type: "nonprofit",
      name: "Legal Aid Society of Rochester",
      focus: "Civil-lawsuit defense, answer drafting, debt defense",
      qualifier: "Low-income Monroe County resident",
      access: "Phone intake — time-sensitive cases prioritized",
      outcome: "Free representation or pro se answer preparation",
      phone: "(585) 232-4090",
      url: "https://www.lasroc.org",
      verified: true,
      bilingual: true,
      languages: ["es"]
    },
    {
      type: "nonprofit",
      name: "LawNY — Legal Assistance of Western New York",
      focus: "Civil-lawsuit defense, debt and landlord-tenant answers",
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
      name: "JustCause",
      focus: "Volunteer-attorney civil-defense matching",
      qualifier: "Low-income Monroe County resident",
      access: "Phone intake",
      outcome: "Volunteer-attorney representation",
      phone: "(585) 232-3051",
      url: "https://www.justcauseny.org",
      verified: true,
      bilingual: false,
      languages: []
    }
  ],

  relatedIds: [
    "debt-collection-rights-ny",
    "default-judgment-ny",
    "small-claims-procedure-ny",
    "bankruptcy-chapter7-ny"
  ],

  relatedHelpResources: [],

  tags: [
    "NY civil lawsuit defense",
    "CPLR 3012 answer deadlines",
    "20-day answer personal service",
    "30-day answer mail service",
    "CPLR 3211 motion to dismiss",
    "CPLR 214-i three-year SOL",
    "Consumer Credit Fairness Act affidavits",
    "pro se answer NY",
    "affirmative defenses",
    "default judgment prevention"
  ],

  sources: [
    "https://www.nysenate.gov/legislation/laws/CVP/A3",
    "https://www.nycourts.gov/CourtHelp/WhenSuedForMoney/"
  ],

  lastVerified: "2026-04-21",
  volatility: "low",
  emergencyFlag: false,
  disclaimer: true,
  categoryDisclaimer: null
};
