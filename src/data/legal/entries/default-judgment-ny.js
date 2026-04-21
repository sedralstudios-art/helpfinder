export const DEFAULT_JUDGMENT_NY = {
  id: "default-judgment-ny",
  category: "consumer",
  tier: "state",
  jurisdiction: "us-ny",
  authorityType: "state-statute",
  primaryStatute: "NY CVP 5015",
  status: "active",

  title: { en: "NY Default Judgment — How CPLR 5015 and CPLR 317 Let a Defendant Vacate an Uncontested Judgment" },

  summary: {
    en: "A default judgment is the civil outcome when a defendant does not answer a lawsuit within the time allowed. Most NY debt-collection judgments are defaults. Two CPLR provisions create paths to vacate. CPLR Rule 5015(a) lists five grounds for vacatur including excusable default within one year of service of the judgment, fraud or misconduct, and lack of jurisdiction. CPLR § 317 lets a defendant who was served by a method other than personal delivery appear and defend within one year of learning of the judgment, up to a maximum of five years after entry, with a meritorious defense."
  },

  whoQualifies: {
    en: [
      "A NY defendant against whom a default judgment has been entered because the defendant did not answer the complaint in time.",
      "A NY defendant who was never personally served — the summons was left at an address, mailed, or delivered to another person — covered by CPLR § 317.",
      "A NY defendant who learned of a judgment only when wages were garnished, a bank account frozen, or a credit report flagged.",
      "A NY consumer defendant in a consumer-credit case subject to the Consumer Credit Fairness Act additional-affidavit requirements.",
      "A NY defendant with newly discovered evidence, a showing of fraud by the adverse party, or a reason to attack the court's jurisdiction."
    ]
  },

  whatItMeans: {
    en: "When a plaintiff files a civil lawsuit in NY, the defendant has 20 days to answer if served in person inside the state, or 30 days if served by mail or other non-personal methods. If the defendant does not answer in time, the plaintiff can ask the court to enter a default judgment. The court does not decide whether the debt is real, whether the amount is right, or whether the statute of limitations has run — it just enters judgment because no one contested the case. After a default judgment, the plaintiff can start collecting under CPLR Article 52. The main tools are wage garnishment, bank account restraints, and liens on real property. Two separate rules let a defendant ask the court to undo a default judgment. The main pathway is CPLR Rule 5015(a). It lists five grounds to vacate: (1) excusable default — the motion must be made within one year after service of the judgment with written notice of entry, and the defendant must show both a reasonable excuse for not answering and a meritorious defense to the case; (2) newly discovered evidence that probably would have changed the result; (3) fraud, misrepresentation, or other misconduct by the other side; (4) the court lacked jurisdiction to enter the judgment — there is no one-year window on this ground; or (5) a prior judgment the default is based on has been reversed. CPLR Rule 5015(b) allows the parties to agree to vacate by stipulation. CPLR Rule 5015(c) lets an administrative judge vacate default judgments when a pattern of fraud, unconscionability, or improper service is shown across many cases. The second pathway is CPLR § 317, for defendants who were never served personally. A defendant served by mail, by substituted service, or by publication — and who did not appear — can ask to defend within one year of learning of the judgment, but not more than five years after the judgment was entered. The defendant must show that the summons did not reach them in time to defend and must show a meritorious defense. CPLR § 317 does not apply to divorce, annulment, or partition cases. The 2021 Consumer Credit Fairness Act added extra requirements on consumer-credit default-judgment applications. The plaintiff must file an attorney affidavit proving the debt chain, an itemized account statement, and a sworn statement that the lawsuit was filed within the three-year statute of limitations for consumer credit under CPLR § 214-i. An application missing these items cannot support a default. Sewer service — the practice of falsely claiming service was made when it was not — is a common reason for jurisdiction-based vacatur. A defendant moving to vacate for sewer service typically files a sworn statement describing where they actually lived, the absence of any papers at that address, and a meritorious defense such as the three-year time bar. The court may schedule a traverse hearing to settle disputed facts about whether service really happened. A successful vacatur reopens the case and usually releases any bank restraints or wage garnishments. The plaintiff may still win the reopened case if the merits favor the plaintiff. Legal Aid Society of Rochester, LawNY, and Empire Justice Center handle vacatur motions for low-income defendants. Monroe County Supreme Court assigns default-judgment matters to a specific calendar with scheduling for these motions."
  },

  yourRights: {
    en: [
      "A NY defendant has the right under CPLR § 3012 to the statutory answer period — 20 days for personal delivery service, 30 days for other methods — before a default can be entered.",
      "A NY defendant has the right under CPLR Rule 5015(a)(1) to move for vacatur on excusable default within one year of service of the judgment, showing reasonable excuse plus meritorious defense.",
      "A NY defendant has the right under CPLR Rule 5015(a)(4) to move for vacatur at any time on the ground of lack of jurisdiction — the one-year window does not apply to jurisdiction-based motions.",
      "A NY defendant served by means other than personal delivery has the right under CPLR § 317 to appear and defend within one year of learning of the judgment, up to five years after entry.",
      "A NY defendant against whom a default judgment is sought in a consumer-credit action has the right to require the plaintiff to submit Consumer Credit Fairness Act affidavits before judgment enters.",
      "A NY defendant whose wages are garnished or accounts restrained has the right to challenge enforcement by filing the vacatur motion and seeking a stay during the motion's pendency."
    ]
  },

  legalOptions: {
    en: [
      "The primary remedy is a notice of motion to vacate the default judgment filed in the rendering court with an attorney affirmation, a defendant's affidavit, and a proposed answer showing the meritorious defense.",
      "Monroe County Supreme Court Civil Part at (585) 371-3300 and Rochester City Court Civil Part at (585) 428-6990 handle vacatur motions for judgments rendered in their respective courts.",
      "Legal Aid Society of Rochester at (585) 232-4090 — CPLR 5015 and 317 motion representation for low-income defendants.",
      "LawNY at (585) 325-2520 — default judgment defense across 14-county Western NY service area.",
      "Empire Justice Center at (585) 454-4060 — complex and pattern-based default-judgment vacatur cases.",
      "JustCause at (585) 232-3051 — pro bono referral and debt clinics assisting Monroe County residents with default-judgment questions.",
      "NY Attorney General Consumer Frauds Bureau at (800) 771-7755 accepts complaints about patterns of sewer service and other abuses."
    ]
  },

  example: {
    en: "Andre moved apartments and never received the summons and complaint that a debt buyer filed against him at his prior address. Two years later, his bank account is restrained under CPLR § 5222. He learns of a $3,200 default judgment. Legal Aid Society of Rochester reviews the process-server's affidavit and files a motion to vacate under CPLR § 317 with a supporting affidavit from Andre establishing his actual residence during the service period and a meritorious defense that the underlying credit-card debt was time-barred under CPLR § 214-i. The court grants vacatur, dissolves the bank restraint, and on the reopened case the judge dismisses the underlying claim as time-barred."
  },

  counsel: [
    {
      type: "nonprofit",
      name: "Legal Aid Society of Rochester",
      focus: "CPLR 5015/317 vacatur motions, sewer-service challenges, consumer-debt defense",
      qualifier: "Low-income Monroe County resident",
      access: "Phone intake",
      outcome: "Free representation on vacatur and reopened case",
      phone: "(585) 232-4090",
      url: "https://www.lasroc.org",
      verified: true,
      bilingual: true,
      languages: ["es"]
    },
    {
      type: "nonprofit",
      name: "LawNY — Legal Assistance of Western New York",
      focus: "Default-judgment defense, CPLR 214-i time-barred defenses",
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
      focus: "Pattern sewer-service cases, debt-buyer defense, CCFA enforcement",
      qualifier: "Low and moderate income NY residents",
      access: "Phone intake",
      outcome: "Free representation and impact litigation",
      phone: "(585) 454-4060",
      url: "https://empirejustice.org",
      verified: true,
      bilingual: false,
      languages: []
    }
  ],

  relatedIds: [
    "debt-collection-rights-ny",
    "medical-debt-ny",
    "bankruptcy-chapter7-ny",
    "respond-to-lawsuit-ny"
  ],

  relatedHelpResources: [],

  tags: [
    "NY default judgment",
    "CPLR 5015 vacatur",
    "CPLR 317 no personal service",
    "sewer service NY",
    "Consumer Credit Fairness Act",
    "meritorious defense",
    "excusable default one year",
    "five year maximum 317",
    "traverse hearing",
    "bank account restraint CPLR 5222"
  ],

  sources: [
    "https://www.nysenate.gov/legislation/laws/CVP/5015",
    "https://www.nysenate.gov/legislation/laws/CVP/317",
    "https://www.nysenate.gov/legislation/laws/CVP/214-I"
  ],

  lastVerified: "2026-04-21",
  volatility: "low",
  emergencyFlag: false,
  disclaimer: true,
  categoryDisclaimer: null
};
