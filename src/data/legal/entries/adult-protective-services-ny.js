export const ADULT_PROTECTIVE_SERVICES_NY = {
  id: "adult-protective-services-ny",
  category: "benefits",
  tier: "state",
  jurisdiction: "us-ny",
  authorityType: "state-statute",
  status: "active",
  draft: true,

  title: { en: "Adult Protective Services — Reporting and Responding to Abuse or Neglect of an Adult" },

  summary: {
    en: "New York Adult Protective Services (APS) serves adults age 18 and older who cannot protect themselves from abuse, neglect, or exploitation because of physical or mental limitations and who have no one else able to help. APS is not for everyone — it has specific eligibility rules. Anyone can make a report, but APS only opens a case when the statutory criteria are met. Financial exploitation of elders is a leading reason for APS involvement."
  },

  whoQualifies: {
    en: [
      "Any adult 18+ who is mentally or physically impaired and unable to protect themselves from abuse, neglect, exploitation, or self-neglect.",
      "Caregivers, family members, neighbors, or professionals concerned about a vulnerable adult.",
      "Any adult who is experiencing financial exploitation, caregiver neglect, or self-neglect and has no family or friends who can help.",
      "Mandated reporters — social workers, healthcare workers, police, and others required by law to report suspected abuse."
    ]
  },

  whatItMeans: {
    en: "Adult Protective Services in New York operates under Social Services Law Section 473 and 18 NYCRR Part 457. APS is a county-administered program. Monroe County APS is part of the Department of Human Services. APS serves adults who meet three criteria: age 18 or older, mental or physical impairment that prevents self-protection, and no other willing or able informal support system. The impairments may include dementia, developmental disability, mental illness, or a severe physical condition. The types of situations APS addresses include physical abuse, sexual abuse, emotional abuse, neglect by a caregiver, financial exploitation (caregiver or stranger stealing money or property, scams targeting the impaired adult), and self-neglect (the adult is unable to meet their own basic needs and refuses or cannot accept help from family or community). APS responds to reports by assessing whether the person meets eligibility criteria. If yes, APS develops a service plan — which can include arranging home care, medical services, benefits applications, money management services (representative payee, protective payee), or emergency placement in a safe setting. APS does not force services on a person who has capacity to refuse; however, for a person who lacks capacity, APS can petition for guardianship (Article 81 of Mental Hygiene Law) to make decisions for the person. For imminent danger, APS can request emergency orders. Adult Protective Services is different from Child Protective Services, Domestic Violence Services, and elder-specific agencies. Elder-specific programs (Office for the Aging, Eldersource) serve all seniors regardless of impairment. APS is for impaired adults of any age who cannot protect themselves."
  },

  yourRights: {
    en: [
      "Any person can make a report to APS about a vulnerable adult.",
      "The reporting person's identity is kept confidential from the subject of the report in most cases.",
      "An adult with capacity has the right to refuse APS services — self-determination is protected.",
      "An adult under APS care has the right to the least restrictive intervention needed.",
      "An adult denied APS services (because they do not meet criteria) can request a fair hearing.",
      "Mandated reporters are legally protected from civil or criminal liability for good-faith reports."
    ]
  },

  legalOptions: {
    en: [
      "Monroe County APS at (585) 753-6401 — 24-hour hotline for reports about adults in Monroe County.",
      "The statewide APS line at (844) 697-3505 accepts reports for any NY county.",
      "For an immediate emergency with physical danger, call 911 first.",
      "Mandated reporters who are unsure whether a report is required can call APS for guidance.",
      "For a senior who does not meet APS criteria but still needs help, Monroe County Office for the Aging at (585) 753-6280 and Lifespan at (585) 244-8400 can connect to services.",
      "For financial exploitation, also report to the NYS Attorney General Elder Fraud Unit at (800) 771-7755 and the FBI IC3 cybercrime division if online.",
      "Free legal help with guardianship alternatives and elder law issues is available through Legal Aid Society of Rochester at (585) 232-4090."
    ]
  },

  example: {
    en: "A home health aide visiting a 78-year-old Monroe County resident noticed unexplained bruises on the client and suspected the client's live-in grandson was the cause. The aide called Monroe County APS. An APS caseworker visited the home within 24 hours, interviewed the client privately, documented the bruises, and connected the client to a geriatric assessment. The caseworker determined the client had diminished capacity from dementia and was unable to protect herself. APS arranged for alternate care arrangements, coordinated with law enforcement about the grandson, and petitioned for a guardianship to authorize ongoing protective services. The grandson was removed from the home. The client stayed in the community with new supports."
  },

  counsel: [
    {
      type: "government",
      name: "Monroe County Adult Protective Services",
      focus: "Reports of abuse, neglect, exploitation of vulnerable adults in Monroe County",
      qualifier: "Any person concerned about an adult in Monroe County",
      access: "24-hour hotline at (585) 753-6401",
      outcome: "Investigation, service plan, emergency intervention",
      phone: "(585) 753-6401",
      url: "https://www.monroecounty.gov/hs-aps",
      verified: true,
      bilingual: false,
      languages: []
    },
    {
      type: "government",
      name: "NYS Adult Protective Services Hotline",
      focus: "Statewide APS reports, cross-county coordination",
      qualifier: "Any NY resident",
      access: "Phone at (844) 697-3505",
      outcome: "Report routing, information, mandated-reporter guidance",
      phone: "(844) 697-3505",
      url: "https://otda.ny.gov/programs/adult-protective/",
      verified: true,
      bilingual: true,
      languages: ["es"]
    }
  ],

  relatedIds: [
    "elder-abuse-ny",
    "guardianship-article81-ny",
    "senior-fraud-prevention-ny",
    "power-of-attorney-abuse-ny",
    "caregiver-rights-family-ny"
  ],

  relatedHelpResources: [],

  tags: [
    "Adult Protective Services",
    "APS",
    "elder abuse reporting",
    "vulnerable adult",
    "mandated reporter",
    "SOS 473",
    "18 NYCRR 457",
    "self-neglect",
    "financial exploitation elder",
    "Monroe County APS"
  ],

  sources: [
    "https://www.nysenate.gov/legislation/laws/SOS/473",
    "https://www.law.cornell.edu/regulations/new-york/title-18/chapter-II/subchapter-C/part-457",
    "https://otda.ny.gov/programs/adult-protective/"
  ],

  lastVerified: "2026-04-18",
  volatility: "low",
  emergencyFlag: false,
  disclaimer: true,
  categoryDisclaimer: null
};
