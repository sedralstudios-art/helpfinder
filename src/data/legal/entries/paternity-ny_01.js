export const PATERNITY_NY = {
  id: "paternity-ny",
  category: "family",
  tier: "state",
  jurisdiction: "us-ny",
  authorityType: "state-statute",
  status: "active",

  title: { en: "Establishing Paternity in New York — Acknowledgment, DNA Testing, and Family Court" },

  summary: {
    en: "Paternity is the legal determination of who a child's father is. In New York, if the parents are not married, the father has no legal rights or obligations to the child until paternity is established. This can be done voluntarily by signing an Acknowledgment of Paternity at the hospital, or through a Family Court petition and DNA testing."
  },

  whoQualifies: {
    en: [
      "Any mother who wants to legally establish the father of her child.",
      "Any man who believes he is the father and wants legal rights (custody, visitation).",
      "Any man named as the father who wants to confirm or deny paternity.",
      "The child support enforcement agency (SCU) can also file a paternity petition."
    ]
  },

  whatItMeans: {
    en: "When parents are married, the husband is automatically presumed to be the father under New York law. When parents are NOT married, there is no legal father until paternity is established. Without legal paternity, the father has no right to custody or visitation, no obligation to pay child support, and the child has no right to the father's benefits (Social Security, inheritance, health insurance). There are two ways to establish paternity. Voluntary: both parents sign an Acknowledgment of Paternity (AOP) form, usually at the hospital right after birth. This has the same legal effect as a court order. It can be rescinded within 60 days. After 60 days, it can only be challenged in court with DNA evidence. Court petition: either parent (or the SCU) files a paternity petition in Family Court. The court can order DNA testing, which is 99.9% accurate. If the test confirms paternity, the court enters an order of filiation establishing the man as the legal father. Once paternity is established, either parent can file for custody, visitation, and child support."
  },

  yourRights: {
    en: [
      "The mother has the right to name the father and request paternity testing through Family Court.",
      "The alleged father has the right to DNA testing before being declared the legal father.",
      "Both parents have the right to sign a voluntary Acknowledgment of Paternity at the hospital — this is free.",
      "The AOP can be rescinded within 60 days by either parent.",
      "After paternity is established, both parents have the right to seek custody, visitation, and child support.",
      "The child has the right to benefits from both parents once paternity is established."
    ]
  },

  legalOptions: {
    en: [
      "At the hospital: sign the Acknowledgment of Paternity form. Both parents must sign in the presence of a witness. The hospital provides the form.",
      "After leaving the hospital: you can sign the AOP at the local registrar's office, DSS, or through the SCU.",
      "To establish paternity through court: file a paternity petition at Monroe County Family Court, Hall of Justice, 99 Exchange Blvd, Rochester NY 14614.",
      "DNA testing: the court orders it and the results are usually back within a few weeks. There is no cost to the petitioner for court-ordered testing.",
      "The Monroe County Support Collection Unit (SCU) at (585) 753-6011 can file a paternity petition on behalf of a parent seeking child support.",
      "Free legal help: Legal Aid Society of Rochester at (585) 232-4090."
    ]
  },

  example: {
    en: "Aisha and David are not married. Their daughter is born at Strong Memorial. Both parents sign the Acknowledgment of Paternity at the hospital. Three years later, they separate. Because paternity is already established, David has the legal right to file for custody or visitation in Family Court, and Aisha has the right to file for child support. Neither has to go through DNA testing — the AOP they signed already proved paternity."
  },

  counsel: [
    {
      type: "free",
      name: "Monroe County Support Collection Unit (SCU)",
      focus: "Paternity establishment, child support enforcement",
      qualifier: "Any parent seeking to establish paternity in Monroe County",
      access: "Phone",
      outcome: "Filing paternity petitions, arranging DNA testing",
      phone: "(585) 753-6011",
      url: "https://www.monroecounty.gov",
      verified: true,
      bilingual: false,
      languages: []
    },
    {
      type: "free",
      name: "Legal Aid Society of Rochester",
      focus: "Paternity, custody, family law",
      qualifier: "Low-income residents of Monroe and surrounding counties",
      access: "Phone intake",
      outcome: "Direct representation or advice",
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
    "custody-basics-ny",
    "divorce-separation-ny"
  ],

  relatedHelpResources: [],

  tags: [
    "paternity",
    "father rights",
    "DNA test",
    "acknowledgment of paternity",
    "AOP",
    "order of filiation",
    "unmarried parents",
    "establish paternity",
    "who is the father",
    "birth certificate father"
  ],

  sources: [
    "https://www.nysenate.gov/legislation/laws/FCT/A5",
    "https://www.health.ny.gov/vital_records/paternity.htm"
  ],

  lastVerified: "2026-04-16",
  volatility: "low",
  emergencyFlag: false,
  disclaimer: true,
  categoryDisclaimer: null
};
