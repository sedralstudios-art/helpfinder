// Glossary term: Restitution
// Citation verified: NY Penal Law § 60.27. Statutory caps: $15,000 felony,
// $10,000 non-felony, $1,000 juvenile — unless defendant consents or it's
// a condition of probation/CD. CPL Article 420 covers collection.

export const RESTITUTION = {
  id: "restitution",
  term: { en: "Restitution" },
  aka: [],
  category: "criminal",
  subtags: ["sentence", "disposition", "money"],

  context: {
    en: "You hear this at sentencing if the case involved something taken, broken, or stolen. The judge orders you to pay the victim back for what they lost."
  },

  plainEnglish: {
    en: "Money you pay to the victim of the crime — not to the court — to cover what they lost. It can include the value of stolen property, repair costs, medical bills, or lost wages. The judge decides the exact amount at sentencing. For most cases, restitution is capped by law at $15,000 for a felony or $10,000 for a misdemeanor or violation, unless you agree to more. If you do not pay, the court can extend your probation, take it from your paycheck, or send the case to collections. Paying restitution does not mean you can't also be sued in civil court, but any amount you pay in restitution usually counts against what you'd owe there."
  },

  whatToAsk: {
    en: [
      "How much restitution is being asked for? How did they figure out the number?",
      "Can I see proof of the loss?",
      "Can I set up a payment plan I can afford?",
      "What happens if I can't pay?",
      "Does this go on my credit?"
    ]
  },

  related: ["plea", "conditional-discharge", "probation", "mandatory-surcharge", "sentence"],
  legalEntryIds: ["sentencing-options-ny"],

  citation: "NY Penal Law § 60.27; CPL Article 420 (collection)",
  sourceUrl: "https://www.nysenate.gov/legislation/laws/PEN/60.27",
  lastVerified: "2026-04-15",
  status: "active"
};
