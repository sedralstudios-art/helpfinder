export const PATERNITY_NY = {
  id: "paternity-ny",
  category: "family",
  tier: "state",
  jurisdiction: "us-ny",
  authorityType: "state-statute",
  primaryStatute: "NY FCT A5",
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
    en: "Paternity is the legal recognition that a specific man is the father of a specific child. In New York, paternity determines everything from custody and visitation rights to child support obligations to the child's eligibility for the father's Social Security survivor benefits and health insurance coverage. Biology matters, but biology alone is not enough. The law requires a formal step to make paternity official.\n\nThe marital presumption. When the parents are married at the time of the child's birth, Domestic Relations Law 24 presumes the husband is the father. The presumption appears automatically on the birth certificate. It can be rebutted with clear and convincing evidence (usually a DNA test), but absent that challenge, the husband is the legal father.\n\nWhen the parents are not married. If the parents are not married, there is no legal father at birth. The birth certificate lists only the mother. This gap matters in both directions. The biological father has no right to custody, visitation, or contact with the child. He also has no obligation to pay child support. The child has no right to inherit from the father, no access to the father's Social Security benefits, no claim on the father's health insurance, and no legal relationship at all until paternity is established.\n\nVoluntary Acknowledgment of Paternity (AOP). Public Health Law 4135-b creates the AOP process. Both parents sign a standard form — usually at the hospital in the days after birth — and the form has the legal effect of a court order of filiation. No DNA test is required. Both parents must sign in the presence of a witness, and the form explains that by signing, the father is accepting all parental rights and obligations.\n\nRescinding the AOP. Either parent can rescind the AOP within 60 days of signing by filing a rescission notice with the Department of Health. After 60 days, the AOP can only be challenged in court on specific grounds (fraud, duress, or mistake of fact) and typically requires DNA evidence. Challenges become increasingly difficult as time passes.\n\nAfter the hospital. Parents who did not sign an AOP at the hospital can still sign one later. The AOP can be signed at the local registrar's office, at the county Department of Social Services, or at the Support Collection Unit.\n\nCourt paternity petition. When parents disagree about paternity, either parent (or the Support Collection Unit on behalf of a parent seeking child support) can file a paternity petition in Family Court under Family Court Act Article 5. Monroe County Family Court is at the Hall of Justice, 99 Exchange Blvd, Rochester.\n\nDNA testing. The court can order DNA testing, which is 99.9 percent accurate. Testing is typically done by cheek swab of mother, child, and alleged father. Results usually come back within 2 to 4 weeks. There is no cost to the petitioning parent for court-ordered testing — the county or the SCU covers the lab fee.\n\nOrder of filiation. If the DNA test confirms paternity (or the alleged father admits paternity without testing), the court enters an order of filiation. This is a court order declaring the man is the legal father. The birth certificate can be amended to add his name.\n\nWhat the order unlocks. After paternity is established, either parent can file for custody, visitation, and child support in Family Court. The child becomes eligible for the father's Social Security benefits, health insurance, veterans benefits (if applicable), and inheritance rights under EPTL 4-1.2.\n\nTimeline concerns. A paternity action can be filed at any time until the child turns 21 (FCA 517). Waiting years to establish paternity does not bar the claim, but child support typically only runs from the date the petition is filed forward — so delays cost the custodial parent real money."
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

  lastVerified: "2026-04-23",
  volatility: "low",
  emergencyFlag: false,
  disclaimer: true,
  categoryDisclaimer: null
};
