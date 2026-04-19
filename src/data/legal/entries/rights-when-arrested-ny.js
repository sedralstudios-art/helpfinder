export const RIGHTS_WHEN_ARRESTED_NY = {
  id: "rights-when-arrested-ny",
  category: "criminal",
  tier: "state",
  jurisdiction: "us-ny",
  authorityType: "state-statute",
  primaryStatute: "NY CPL 170.10",
  status: "active",

  title: { en: "Rights When Arrested — What the Police Must Say and What a Person Can Do" },

  summary: {
    en: "If you are arrested in New York, you have rights that the police must respect. You have the right to remain silent, the right to an attorney, and the right to be brought before a judge without unnecessary delay. You do not have to answer questions about what happened, and anything you say can be used against you."
  },

  whoQualifies: {
    en: [
      "Every person arrested in New York State has these rights, regardless of citizenship, immigration status, or what they are accused of.",
      "These rights apply whether you are arrested for a violation, a misdemeanor, or a felony.",
      "You have rights even before a formal arrest — if police are questioning you and you are not free to leave, you are in custody and these protections apply.",
      "Minors (under 18) have additional protections, including the right to have a parent or guardian notified."
    ]
  },

  whatItMeans: {
    en: "When you are placed under arrest, the police must tell you why you are being arrested. If they intend to question you, they must inform you of your Miranda rights — your right to remain silent and your right to an attorney. If you cannot afford a lawyer, one will be appointed for you at no cost. You must be brought before a judge for arraignment without unnecessary delay, generally within 24 hours. At arraignment, the judge informs you of the charges, you enter a plea, and the court decides whether you are released, given conditions, or held."
  },

  yourRights: {
    en: [
      "You have the right to remain silent. You do not have to answer any questions about what happened. You are only required to provide basic identification information such as your name and address.",
      "You have the right to an attorney. If you cannot afford one, the court must appoint a public defender or assigned counsel to represent you at no cost. Once you ask for a lawyer, all questioning must stop until your attorney is present.",
      "You have the right to be told why you are being arrested.",
      "You have the right to be brought before a judge for arraignment without unnecessary delay. At arraignment, you are informed of the charges and asked to enter a plea (CPL § 170.10).",
      "You have the right to refuse consent to searches of your person, home, vehicle, or belongings. Police generally need a warrant to search, with limited exceptions.",
      "You have the right to make phone calls after being arrested. New York law provides for the right to communicate with an attorney and to have someone notified of your arrest."
    ]
  },

  legalOptions: {
    en: [
      "Under New York's bail reform laws, most misdemeanors and many nonviolent felonies are non-bail-eligible. For these charges, the court must release the person on their own recognizance or with supervised release conditions. Bail may only be set for qualifying offenses as defined by CPL § 510.10.",
      "Under CPL § 710.20, statements geted in violation of Miranda rights may be suppressed — meaning the prosecution cannot use them as evidence at trial. A defense attorney can file a motion to suppress unlawfully geted evidence.",
      "Free legal representation is available at arraignment and throughout criminal proceedings for anyone who cannot afford an attorney. In Monroe County, the Monroe County Public Defender's Office provides representation at (585) 753-4210.",
      "The Legal Aid Society of Rochester provides civil legal services and can assist with issues arising from an arrest, such as housing, employment, and benefits, at (585) 232-4090.",
      "The New York Civil Liberties Union (NYCLU) provides information about rights during police encounters and accepts complaints about police misconduct at nyclu.org.",
      "If Miranda warnings were not provided before a custodial interrogation, this does not automatically make the arrest invalid — but any statements made during that interrogation may be excluded from evidence at trial."
    ]
  },

  example: {
    en: "Marcus was stopped by police in Tompkins County and arrested on suspicion of a misdemeanor. At the police station, officers began asking him questions about the incident. Marcus said clearly that he wanted a lawyer and did not want to answer questions. The officers stopped the questioning. At his arraignment the next morning, the judge informed Marcus of the charges and appointed a public defender to represent him. Because the charge was a nonviolent misdemeanor, Marcus was released on his own recognizance with a date to return to court."
  },

  counsel: [
    {
      type: "free",
      name: "Monroe County Public Defender's Office",
      focus: "Criminal defense for all charges — misdemeanors, felonies, violations",
      qualifier: "Anyone charged with a crime in Monroe County who cannot afford an attorney",
      access: "Appointed at arraignment or by request",
      outcome: "Full criminal defense representation from arraignment through trial or disposition",
      phone: "(585) 753-4210",
      url: "https://www.monroecounty.gov/defender",
      verified: true,
      bilingual: false,
      languages: []
    },
    {
      type: "free",
      name: "Legal Aid Society of Rochester",
      focus: "Civil legal issues related to arrest — housing, employment, benefits",
      qualifier: "Low income residents of Monroe County and surrounding counties",
      access: "Phone intake at (585) 232-4090",
      outcome: "Direct representation on civil consequences of criminal cases",
      phone: "(585) 232-4090",
      url: "https://www.lasroc.org",
      verified: true,
      bilingual: true,
      languages: ["es"]
    },
    {
      type: "free",
      name: "Legal Assistance of Western New York (LawNY)",
      focus: "Civil legal services, collateral consequences of arrest, reentry",
      qualifier: "Low income residents in 14 Western NY counties including Monroe",
      access: "Phone intake at (585) 325-2520",
      outcome: "Direct representation in civil matters",
      phone: "(585) 325-2520",
      url: "https://www.lawny.org",
      verified: true,
      bilingual: false,
      languages: []
    }
  ],

  relatedIds: [
    "clean-slate-ny"
  ],

  relatedHelpResources: [],

  tags: [
    "arrested",
    "police arrested me",
    "my rights",
    "Miranda rights",
    "right to a lawyer",
    "right to remain silent",
    "what to do when arrested",
    "police questioning",
    "can I refuse a search",
    "arraignment",
    "bail",
    "public defender",
    "in jail",
    "locked up",
    "criminal charges"
  ],

  sources: [
    "https://www.nysenate.gov/legislation/laws/CPL/170.10",
    "https://www.nysenate.gov/legislation/laws/CPL/510.10",
    "https://www.nysenate.gov/legislation/laws/CPL/710.20",
    "https://legalaidnyc.org/get-help/arrests-policing/what-you-need-to-know-about-your-miranda-rights/"
  ],

  lastVerified: "2026-04-13",
  volatility: "low",
  emergencyFlag: true,
  disclaimer: true,
  categoryDisclaimer: null
};
