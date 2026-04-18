export const RESPOND_TO_LAWSUIT_NY = {
  id: "respond-to-lawsuit-ny",
  category: "consumer",
  tier: "state",
  jurisdiction: "us-ny",
  authorityType: "state-statute",
  status: "active",

  title: { en: "You Got Sued — How to Respond to a Civil Lawsuit in New York" },

  summary: {
    en: "If you receive a summons and complaint, you have been sued. You have a limited time to respond — usually 20 to 30 days. If you do not respond, the other side wins automatically (default judgment). Responding preserves your rights even if you think you owe the money. Free legal help is available."
  },

  whoQualifies: {
    en: [
      "Anyone who has received a summons and complaint in a civil case (debt collection, contract dispute, personal injury, landlord-tenant).",
      "Anyone who has been served with court papers by a process server, by mail, or by posting on the door.",
      "Anyone who suspects they may have been sued but did not receive papers."
    ]
  },

  whatItMeans: {
    en: "A civil lawsuit starts when the plaintiff (the person suing) files a summons and complaint with the court and serves it on the defendant (you). The complaint explains what they are claiming and how much money they want. The summons tells you how long you have to respond. In New York, if you were served in person, you generally have 20 days to respond. If served by other methods (mail, posting), you may have 30 days. Your response is called an 'answer.' In the answer, you admit or deny each claim and raise any defenses (like the statute of limitations, wrong amount, wrong person, or payment already made). If you do not file an answer in time, the plaintiff can ask for a default judgment — the court rules in their favor without hearing your side. Filing an answer is the single most important thing you can do. Even if you owe the money, answering gives you the chance to negotiate, verify the amount, and raise defenses."
  },

  yourRights: {
    en: [
      "You have the right to receive the lawsuit papers before anything can happen in court.",
      "You have the right to file an answer and raise defenses.",
      "You have the right to a lawyer. Free legal aid is available for low-income defendants.",
      "You have the right to demand proof of the debt and its history.",
      "Under the Consumer Credit Fairness Act, plaintiffs seeking a default judgment must prove the debt chain with sworn affidavits."
    ]
  },

  legalOptions: {
    en: [
      "Reading the summons carefully is critical. Note the deadline. Count the days from the date you were served.",
      "Free legal help is available through Legal Aid Society of Rochester at (585) 232-4090. They can help draft an answer.",
      "If you cannot get a lawyer in time, you can file a simple answer yourself: deny the claims, state any defenses you have, and file it with the court clerk before the deadline. The clerk can tell you where to file.",
      "Common defenses: statute of limitations expired (3 years for consumer credit debt under CPLR § 214-i), wrong person, wrong amount, debt already paid, improper service.",
      "After filing an answer, the case moves to discovery and possible settlement. Most civil cases settle before trial."
    ]
  },

  example: {
    en: "A process server hands Jamie papers at her apartment in Rochester — a debt collector is suing for $2,800 on an old credit card. Jamie calls Legal Aid the next morning. A paralegal helps her draft an answer denying the debt amount and raising the statute of limitations as a defense — the last payment was 4 years ago, past the 3-year limit. Jamie files the answer at the court clerk's office on day 18 of 20. The debt collector, faced with a limitations defense, agrees to dismiss the case."
  },

  counsel: [
    {
      type: "free",
      name: "Legal Aid Society of Rochester",
      focus: "Debt defense, civil litigation, consumer rights",
      qualifier: "Low-income residents of Monroe and surrounding counties",
      access: "Phone intake — time-sensitive cases prioritized",
      outcome: "Help drafting answers, direct representation",
      phone: "(585) 232-4090",
      url: "https://www.lasroc.org",
      verified: true,
      bilingual: true,
      languages: ["es"]
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
    "sued",
    "got sued",
    "summons and complaint",
    "how to respond",
    "answer a lawsuit",
    "civil lawsuit",
    "debt lawsuit",
    "20 days",
    "30 days",
    "default judgment prevention",
    "file an answer"
  ],

  sources: [
    "https://www.nysenate.gov/legislation/laws/CVP/A3",
    "https://www.nycourts.gov/CourtHelp/WhenSuedForMoney/"
  ],

  lastVerified: "2026-04-16",
  volatility: "low",
  emergencyFlag: false,
  disclaimer: true,
  categoryDisclaimer: null
};
