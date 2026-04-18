export const EMANCIPATION_MINOR_NY = {
  id: "emancipation-minor-ny",
  category: "family",
  tier: "state",
  jurisdiction: "us-ny",
  authorityType: "state-statute",
  primaryStatute: "NY DOM 240",
  status: "active",

  title: { en: "Emancipation — When a Minor Becomes Legally Independent" },

  summary: {
    en: "New York does not have a formal emancipation statute that lets minors petition a court for independence. However, a minor can become emancipated through marriage, military service, or by living independently with parental consent. Emancipation affects child support, medical consent, and other legal rights."
  },

  whoQualifies: {
    en: [
      "A minor (under 18) who is married.",
      "A minor who is on active duty in the U.S. military.",
      "A minor who is living independently and financially self-supporting with parental knowledge and without objection.",
      "A parent who wants to understand when their child support obligation ends.",
      "A minor aging out of foster care who needs to understand their legal status."
    ]
  },

  whatItMeans: {
    en: "Unlike some states, New York does not have a statute that allows a minor to go to court and ask to be declared emancipated. Instead, emancipation happens as a legal status based on circumstances. A minor is considered emancipated if they are married, in the military, or living separately from their parents and managing their own finances without parental support. Emancipation is most often raised in the context of child support. Under Domestic Relations Law Section 240, a parent's obligation to pay child support continues until the child turns 21 unless the child becomes emancipated. If the child marries, joins the military, or becomes economically self-sufficient and leaves the parental home, the paying parent can petition to end support. Courts look at whether the child has truly become independent — simply having a part-time job while living at home is not enough. Emancipation does not give a minor the right to vote, buy alcohol, or enter contracts. It primarily affects the parent-child financial and custody relationship."
  },

  yourRights: {
    en: [
      "A parent paying child support has the right to petition the court to end support if the child becomes emancipated.",
      "A minor who is married or in the military is legally emancipated regardless of age.",
      "A minor who leaves home without parental consent is not automatically emancipated — the parent can still seek the child's return through Family Court.",
      "An emancipated minor has the right to consent to their own medical treatment.",
      "An emancipated minor can enter into contracts, but a court may still scrutinize contracts involving minors.",
      "A foster youth aging out at 21 is not going through emancipation — they have separate protections under the Foster Care Independence Act."
    ]
  },

  legalOptions: {
    en: [
      "Under DRL Section 240, child support in New York continues until age 21 unless emancipation occurs. A parent seeking to end support must file a petition in Family Court showing the child is emancipated.",
      "There is no petition a minor can file in New York to become emancipated. The status arises from life circumstances (marriage, military, independent living).",
      "If a minor is living on their own and needs help, they may qualify for services through Monroe County DSS, including emergency housing and SNAP benefits.",
      "Foster youth approaching age 21 can access transitional services through the Foster Care Independence Act. Monroe County DSS can be reached at (585) 753-6010.",
      "Free legal advice about emancipation and child support is available through Legal Aid Society of Rochester at (585) 232-4090.",
      "For minors in crisis situations, the Runaway and Homeless Youth hotline is available at (800) 621-4000."
    ]
  },

  example: {
    en: "Carlos was 19 and had moved out of his mother's house after getting a full-time job. His father had been paying child support since the divorce. His father filed a petition in Family Court arguing that Carlos was emancipated because he was living independently and supporting himself. The court agreed — Carlos had his own apartment, paid his own bills, and was not enrolled in school. The judge terminated child support. If Carlos had still been in college and receiving financial help from his mother, the result might have been different."
  },

  counsel: [
    {
      type: "free",
      name: "Legal Aid Society of Rochester",
      focus: "Family law, child support, emancipation questions",
      qualifier: "Low income residents of Monroe and surrounding counties",
      access: "Phone intake at (585) 232-4090",
      outcome: "Legal advice and representation in Family Court",
      phone: "(585) 232-4090",
      url: "https://www.lasroc.org",
      verified: true,
      bilingual: true,
      languages: ["es"]
    }
  ],

  relatedIds: [
    "child-support-ny",
    "child-support-modification-ny",
    "foster-care-aging-out-ny",
    "custody-basics-ny",
    "juvenile-delinquency-ny"
  ],

  relatedHelpResources: [],

  tags: [
    "emancipation",
    "emancipated minor",
    "minor independence",
    "child support end",
    "child support age 21",
    "teen living alone",
    "minor married",
    "minor military",
    "runaway youth",
    "aging out foster care"
  ],

  sources: [
    "https://www.nysenate.gov/legislation/laws/DOM/240",
    "https://www.nycourts.gov/courthelp/Family/childSupport.shtml"
  ],

  lastVerified: "2026-04-17",
  volatility: "low",
  emergencyFlag: false,
  disclaimer: true,
  categoryDisclaimer: null
};
