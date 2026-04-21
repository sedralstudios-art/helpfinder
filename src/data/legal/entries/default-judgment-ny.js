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
    en: "When a plaintiff files a NY civil lawsuit, the defendant has 20 or 30 days to answer depending on how the summons was served (20 days for in-person service in the state; 30 days for service by mail or other non-personal methods under CPLR § 3012). If the defendant does not answer in time, the plaintiff may apply for a default judgment under CPLR § 3215. The court does not adjudicate the merits, the statute of limitations, or the amount — it enters judgment based on the default alone. Post-judgment enforcement tools under CPLR Article 52 include wage garnishment (CPLR § 5231), bank account restraint (CPLR § 5222), and real-property judgment liens (CPLR § 5203). CPLR Rule 5015(a) provides the main vacatur pathway. The rendering court may relieve a party from a judgment on motion for any of five grounds: (1) excusable default, if the motion is made within one year after service of the judgment with written notice of entry — the moving party must show both a reasonable excuse for the default and a meritorious defense; (2) newly discovered evidence that would probably have produced a different result; (3) fraud, misrepresentation, or other misconduct of an adverse party; (4) lack of jurisdiction to render the judgment; or (5) reversal, modification, or vacatur of a prior judgment on which the default rests. CPLR Rule 5015(b) allows vacatur on stipulation of the parties. CPLR Rule 5015(c) authorizes an administrative judge to vacate default judgments where patterns of fraud, illegality, unconscionability, or lack of due service are shown. CPLR § 317 creates a second, independent pathway for defendants not personally served. A person served other than by personal delivery who did not appear may defend within one year of obtaining knowledge of the judgment's entry, and in no event more than five years after entry, on a showing that notice of the summons was not received in time to defend and the existence of a meritorious defense. CPLR § 317 does not apply to divorce, annulment, or partition actions. The 2021 Consumer Credit Fairness Act imposed additional requirements on consumer-credit default-judgment applications — an attorney affidavit verifying the debt chain, an itemized account statement, and a sworn confirmation that the action was commenced within the CPLR § 214-i three-year statute of limitations. An application missing these items cannot support a default. Sewer service — a term for the unlawful practice of falsely claiming service was made when it was not — is a common basis for jurisdiction-based vacatur under CPLR § 5015(a)(4). A defendant who moves to vacate for sewer service typically includes an affidavit describing where the defendant was actually living, the absence of any papers left at that address, and a meritorious defense such as statute of limitations under CPLR § 214-i. The court may order a traverse hearing to resolve disputed service facts. A successful vacatur reopens the case and typically dissolves any restraints on bank accounts or wages, though a restored case may produce a new judgment if the merits are against the defendant. Legal Aid Society of Rochester, LawNY, and Empire Justice Center handle CPLR § 5015 and § 317 motions for low-income NY defendants. Monroe County Civil Court assigns default-judgment cases to a specific calendar with scheduling accommodations for vacatur motions."
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
