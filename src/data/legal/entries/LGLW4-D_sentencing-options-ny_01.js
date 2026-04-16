export const SENTENCING_OPTIONS_NY = {
  id: "sentencing-options-ny",
  category: "criminal",
  tier: "state",
  jurisdiction: "us-ny",
  status: "active",

  title: { en: "Sentencing in New York — What a Judge Can Order After a Conviction" },

  summary: {
    en: "After a guilty plea or a guilty verdict, the judge decides the sentence. New York law gives judges a range of options from unconditional discharge (no punishment) to state prison. The sentence also determines fines, mandatory surcharges, restitution to victims, and conditions like probation. Understanding the options helps you prepare for sentencing and have an informed conversation with your lawyer."
  },

  whoQualifies: {
    en: [
      "Anyone who has been convicted of a crime, violation, or traffic offense in New York.",
      "Anyone facing sentencing after a guilty plea or verdict.",
      "Family members trying to understand what sentence a loved one may receive."
    ]
  },

  whatItMeans: {
    en: "Sentencing is the stage after a conviction where the judge decides the consequences. In New York, the main sentencing options are: Unconditional discharge — no jail, no supervision, no conditions. Conditional discharge — no jail but the person must follow rules set by the judge for a set period (1 year for misdemeanor, 3 years for felony). Probation — no jail but regular check-ins with a probation officer and stricter conditions (2-3 years for misdemeanor, 3-5 years for felony). Jail — up to 1 year in the local county jail (for misdemeanors). Prison — more than 1 year in state prison (for felonies). In addition to the main sentence, the judge almost always orders: a mandatory surcharge ($325 for felony, $200 for misdemeanor), restitution to the victim if there was a financial loss, and possibly a fine. The sentence depends on the offense class, the person's criminal history, the circumstances of the case, and the plea agreement if there was one."
  },

  yourRights: {
    en: [
      "You have the right to a lawyer at sentencing.",
      "You have the right to speak before the judge imposes sentence (called the right of allocution).",
      "The victim also has the right to speak or submit a statement.",
      "You have the right to know the maximum sentence before entering a guilty plea.",
      "If the sentence was part of a plea agreement, the judge generally must honor it or let you withdraw the plea.",
      "You have the right to appeal the sentence in most cases."
    ]
  },

  legalOptions: {
    en: [
      "Authorized sentencing ranges are set by Penal Law Articles 60-85. Your lawyer can explain the specific range for your charge and criminal history.",
      "The mandatory surcharge (Penal Law § 60.35) is $300 + $25 crime victim fee for felonies, $175 + $25 for misdemeanors. Judges have almost no discretion to waive it.",
      "Restitution (Penal Law § 60.27) is capped at $15,000 for felonies and $10,000 for non-felonies unless the defendant consents to a higher amount.",
      "If you cannot pay a fine or surcharge, you can request a payment plan or ask to perform community service instead.",
      "Free legal help at sentencing is available through the Monroe County Public Defender at (585) 753-4210 or through your assigned 18-B counsel."
    ]
  },

  example: {
    en: "After pleading guilty to a Class A misdemeanor, the judge sentences Ana to a conditional discharge for one year. The conditions are: no new arrests and 40 hours of community service. Ana must also pay the $200 mandatory surcharge and $150 in restitution to the store where the offense occurred. The judge explains that if Ana violates the conditions, she could be resentenced to up to one year in jail."
  },

  counsel: [
    {
      type: "free",
      name: "Monroe County Public Defender",
      focus: "Criminal defense including sentencing advocacy",
      qualifier: "Defendants who cannot afford a private attorney",
      access: "Assigned at arraignment",
      outcome: "Full representation through sentencing",
      phone: "(585) 753-4210",
      url: "https://www.monroecounty.gov/defender",
      verified: true,
      bilingual: false,
      languages: []
    }
  ],

  relatedIds: [
    "criminal-case-process-ny",
    "rights-when-arrested-ny",
    "clean-slate-ny"
  ],

  relatedHelpResources: [],

  tags: [
    "sentencing",
    "sentence",
    "fine",
    "mandatory surcharge",
    "restitution",
    "probation sentence",
    "conditional discharge sentence",
    "jail time",
    "prison",
    "what happens after guilty plea",
    "allocution"
  ],

  sources: [
    "https://www.nysenate.gov/legislation/laws/PEN/P2TEA60",
    "https://www.nysenate.gov/legislation/laws/PEN/60.35",
    "https://www.nysenate.gov/legislation/laws/PEN/60.27"
  ],

  lastVerified: "2026-04-16",
  volatility: "low",
  emergencyFlag: false,
  disclaimer: true,
  categoryDisclaimer: null
};
