export const SCAM_PROTECTION_NY = {
  id: "scam-protection-ny",
  category: "consumer",
  tier: "state",
  jurisdiction: "us-ny",
  authorityType: "state-statute",
  status: "active",

  title: { en: "Scams and Fraud — How to Recognize, Report, and Recover in New York" },

  summary: {
    en: "Scams targeting low-income residents, seniors, and immigrants are common in Monroe County. New York has consumer protection laws that make deceptive practices illegal. If you have been scammed, you can report it to the NY Attorney General, the FTC, and local law enforcement. In some cases, money can be recovered."
  },

  whoQualifies: {
    en: [
      "Anyone who has been the target of a scam — phone, text, email, door-to-door, or online.",
      "Anyone who has lost money to a fraudulent business, fake charity, romance scam, tech support scam, or government impersonator.",
      "Seniors, immigrants, and non-English speakers are disproportionately targeted and may have additional protections."
    ]
  },

  whatItMeans: {
    en: "A scam is any deceptive practice designed to take your money or personal information. Common scams in Monroe County include: calls claiming to be from the IRS or Social Security demanding immediate payment, fake utility shutoff threats, immigration-related fraud (notarios charging for services they cannot legally provide), romance scams targeting seniors online, fake lottery or prize notifications, and phishing emails impersonating banks or government agencies. Under New York General Business Law § 349, deceptive business practices are illegal and consumers can sue for damages. The NY Attorney General's office investigates consumer fraud complaints statewide. The FTC collects fraud reports nationally and uses them to build enforcement cases. Reporting helps even if recovery is not immediate — it helps agencies track patterns and shut down repeat offenders."
  },

  yourRights: {
    en: [
      "Under GBL § 349, consumers are protected from deceptive acts and practices.",
      "Victims of deceptive practices can sue for actual damages and, in some cases, treble (triple) damages.",
      "The NY Attorney General can investigate and take enforcement action against scammers.",
      "Seniors who are victims of financial exploitation can receive assistance from Adult Protective Services.",
      "Notario fraud (unlicensed immigration services) is a crime under GBL § 460-c."
    ]
  },

  legalOptions: {
    en: [
      "Scams can be reported to the NY Attorney General's Consumer Helpline at (800) 771-7755 or online at ag.ny.gov/consumer-frauds-bureau/file-complaint.",
      "The FTC accepts reports at reportfraud.ftc.gov. Each report helps build enforcement cases.",
      "For identity theft resulting from a scam, the recovery process begins at identitytheft.gov.",
      "For elder financial exploitation, Adult Protective Services in Monroe County can be reached at (585) 753-6532.",
      "Free legal advice on consumer fraud is available through Legal Aid Society of Rochester at (585) 232-4090.",
      "If money was sent by wire transfer, gift card, or cryptocurrency, recovery is difficult but reporting is still important to help stop the scammer."
    ]
  },

  example: {
    en: "An elderly Rochester resident receives a phone call from someone claiming to be from Social Security, saying her benefits will be cut off unless she pays a fine with gift cards. She buys the gift cards and reads the numbers to the caller. Her granddaughter realizes it was a scam and helps her file a report with the FTC at reportfraud.ftc.gov and with the NY AG at (800) 771-7755. Adult Protective Services follows up to make sure there is no ongoing exploitation."
  },

  counsel: [
    {
      type: "free",
      name: "NY Attorney General Consumer Helpline",
      focus: "Consumer fraud, scams, deceptive practices",
      qualifier: "Any New York resident",
      access: "Phone or online",
      outcome: "Investigation and enforcement",
      phone: "(800) 771-7755",
      url: "https://ag.ny.gov/consumer-frauds-bureau/file-complaint",
      verified: true,
      bilingual: true,
      languages: ["es"]
    },
    {
      type: "free",
      name: "Monroe County Adult Protective Services",
      focus: "Elder financial exploitation, vulnerable adult protection",
      qualifier: "Adults 18+ who are at risk of exploitation",
      access: "Phone",
      outcome: "Investigation, intervention, and case management",
      phone: "(585) 753-6532",
      url: "https://www.monroecounty.gov",
      verified: true,
      bilingual: false,
      languages: []
    }
  ],

  relatedIds: [
    "identity-theft-ny",
    "debt-collection-rights-ny",
    "immigration-basics-ny"
  ],

  relatedHelpResources: [],

  tags: [
    "scam",
    "fraud",
    "phone scam",
    "robocall scam",
    "IRS scam",
    "Social Security scam",
    "romance scam",
    "elder fraud",
    "notario fraud",
    "gift card scam",
    "deceptive practices",
    "consumer fraud",
    "report a scam"
  ],

  sources: [
    "https://ag.ny.gov/consumer-frauds-bureau",
    "https://www.nysenate.gov/legislation/laws/GBS/349",
    "https://reportfraud.ftc.gov"
  ],

  lastVerified: "2026-04-16",
  volatility: "low",
  emergencyFlag: false,
  disclaimer: true,
  categoryDisclaimer: null
};
