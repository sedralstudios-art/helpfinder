export const IDENTITY_THEFT_NY = {
  id: "identity-theft-ny",
  category: "consumer",
  tier: "state",
  jurisdiction: "us-ny",
  authorityType: "state-statute",
  primaryStatute: "NY PEN 190.78",
  status: "active",

  title: { en: "Identity Theft — What to Do If Someone Uses Your Information" },

  summary: {
    en: "If someone opens accounts, takes out loans, files taxes, or commits crimes using your personal information, that is identity theft. New York has strong identity theft protections. You have the right to a police report, a credit freeze, and free legal help to clean up the damage."
  },

  whoQualifies: {
    en: [
      "Anyone whose personal information (Social Security number, name, date of birth, address, bank or credit card numbers) has been used without permission.",
      "Anyone who discovers unauthorized accounts, charges, or applications in their name.",
      "Anyone who receives bills, collection notices, or court papers for debts they did not create."
    ]
  },

  whatItMeans: {
    en: "Identity theft happens when someone uses your personal information to open accounts, borrow money, file taxes, get medical care, or commit crimes in your name. In New York, identity theft is a crime under Penal Law Article 190 (§ 190.77-190.84). Victims have the right to file a police report, place a security freeze on their credit (free under federal and state law), dispute fraudulent accounts, and get a copy of any application or transaction the thief made using their identity. Under the Fair Credit Reporting Act, credit bureaus must investigate disputes within 30 days and remove fraudulent information. The NY Attorney General's office also handles identity theft complaints and can intervene with companies that refuse to cooperate."
  },

  yourRights: {
    en: [
      "You have the right to file a police report for identity theft.",
      "You have the right to place a free security freeze on your credit at all three bureaus (Equifax, Experian, TransUnion).",
      "You have the right to dispute fraudulent accounts and have them removed from your credit report within 30 days.",
      "You have the right to obtain copies of any applications or transactions made using your identity.",
      "You have the right to file an Identity Theft Report with the FTC at identitytheft.gov.",
      "You are not responsible for debts created by the thief."
    ]
  },

  legalOptions: {
    en: [
      "The first step is to file a report at identitytheft.gov — the FTC generates a personalized recovery plan and an Identity Theft Report that can be used with creditors and credit bureaus.",
      "The second step is to file a police report with the local police department. In Rochester, the non-emergency line is (585) 428-6666. The FTC Identity Theft Report may be needed.",
      "The third step is to place a security freeze at all three credit bureaus: Equifax (800-685-1111), Experian (888-397-3742), TransUnion (888-909-8872). This is free.",
      "The fourth step is to contact each company where fraudulent accounts were opened and dispute them in writing, sending copies of the police report and FTC report.",
      "Free legal help: Legal Aid Society of Rochester at (585) 232-4090. The NY Attorney General's Identity Theft Unit can be reached at (800) 771-7755."
    ]
  },

  example: {
    en: "Tamika checks her credit report and finds two credit cards and a car loan she never applied for. She goes to identitytheft.gov and creates an Identity Theft Report. She files a police report with Rochester PD. She places a security freeze on her credit at all three bureaus. She contacts each creditor with the police report and disputes the accounts. Within 60 days, the fraudulent accounts are removed from her credit report and the collections stop."
  },

  counsel: [
    {
      type: "free",
      name: "FTC Identity Theft Recovery",
      focus: "Identity theft reporting, recovery plan, dispute letters",
      qualifier: "Anyone in the United States",
      access: "Online",
      outcome: "Personalized recovery plan and official Identity Theft Report",
      phone: "(877) 438-4338",
      url: "https://identitytheft.gov",
      verified: true,
      bilingual: true,
      languages: ["es"]
    },
    {
      type: "free",
      name: "NY Attorney General Identity Theft Unit",
      focus: "Identity theft complaints, company intervention",
      qualifier: "Any New York resident",
      access: "Phone",
      outcome: "Investigation and mediation with companies",
      phone: "(800) 771-7755",
      url: "https://ag.ny.gov/internet/identity-theft",
      verified: true,
      bilingual: false,
      languages: []
    },
    {
      type: "free",
      name: "Legal Aid Society of Rochester",
      focus: "Identity theft, consumer rights, credit disputes",
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
    "debt-collection-rights-ny",
    "default-judgment-ny"
  ],

  relatedHelpResources: [],

  tags: [
    "identity theft",
    "stolen identity",
    "credit freeze",
    "security freeze",
    "fraudulent account",
    "someone used my SSN",
    "unauthorized credit card",
    "credit report dispute",
    "FTC report",
    "police report identity theft"
  ],

  sources: [
    "https://identitytheft.gov",
    "https://ag.ny.gov/internet/identity-theft",
    "https://www.nysenate.gov/legislation/laws/PEN/190.78"
  ],

  lastVerified: "2026-04-16",
  volatility: "low",
  emergencyFlag: false,
  disclaimer: true,
  categoryDisclaimer: null
};
