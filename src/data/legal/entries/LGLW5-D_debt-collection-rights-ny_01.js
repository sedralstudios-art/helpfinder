// LGLW5-D_debt-collection-rights-ny_01.js
// Category: consumer (Consumer & Debt)
// Jurisdiction: ny (New York State)
// Schema: V3 — English only (translation re-sync pending)
// LGLW5-D | Drafted April 2026

export const DEBT_COLLECTION_RIGHTS_NY = {
  id: "debt-collection-rights-ny",
  category: "consumer",
  tier: "state",
  jurisdiction: "us-ny",
  status: "active",

  title: { en: "Debt Collectors — What They Can and Cannot Do" },

  summary: {
    en: "If a debt collector is calling you, there are rules they have to follow. They cannot lie. They cannot threaten you. They cannot call at all hours. In New York, most old consumer debts are too old to sue over after 3 years. And since 2023, medical debt cannot show up on your credit report in New York."
  },

  whoQualifies: {
    en: [
      "Anyone in New York who is being contacted about a debt. It does not matter if the debt is real, wrong, or already paid.",
      "Federal rules apply to debt collectors and debt buyers (the Fair Debt Collection Practices Act, 15 U.S.C. § 1692).",
      "New York rules also apply to the original business that you owed money to (General Business Law § 601 and DFS rules at 23 NYCRR Part 1).",
      "These rights apply no matter your immigration status."
    ]
  },

  whatItMeans: {
    en: "A debt collector is someone who tries to get you to pay money you owe — usually by phone, letter, or lawsuit. Federal and New York law say what they are allowed to do. They have to send you a letter within 5 days of their first call. The letter has to say who you owe, how much, and that you can dispute it. If you write back within 30 days to dispute the debt, they have to stop trying to collect until they prove you owe it. In 2022, New York changed the rules on old debts. Before, a debt collector had 6 years to sue you. Now they only have 3 years for most consumer debts like credit cards (CPLR § 214-i). After 3 years, the debt is too old to sue over. In 2023, New York also banned medical debt from showing up on credit reports (GBL § 380-j)."
  },

  yourRights: {
    en: [
      "You have the right to get a letter within 5 days of the first call. The letter must say who you owe, how much, and that you can dispute it (15 U.S.C. § 1692g).",
      "You have the right to dispute the debt in writing within 30 days. If you do, the collector must stop contacting you until they prove you owe it (15 U.S.C. § 1692g(b)).",
      "You have the right to be left alone at certain times. Collectors cannot call before 8 a.m. or after 9 p.m. in your time zone (15 U.S.C. § 1692c).",
      "You have the right to tell them to stop calling you at work. If you say your job does not allow these calls, they have to stop (15 U.S.C. § 1692c(a)(3)).",
      "You have the right to send a \"stop contacting me\" letter. After they get it, they can only contact you to say they got it or to tell you they are suing (15 U.S.C. § 1692c(c)).",
      "You have the right to be free from threats, shouting, or name-calling. Collectors cannot threaten to hurt you, arrest you, or take your kids (15 U.S.C. § 1692d).",
      "You have the right to be free from lies. Collectors cannot pretend to be lawyers or the government. They cannot lie about how much you owe or threaten to sue if they are not actually going to sue (15 U.S.C. § 1692e).",
      "You have the right to have a lawyer talk to them instead of you. If you tell them in writing that a lawyer is helping you, they have to contact the lawyer from then on (15 U.S.C. § 1692c(a)(2)).",
      "You have the right to use the \"too old\" rule. Most consumer debts in New York are too old to sue over after 3 years (CPLR § 214-i). If a collector sues you on an old debt, you can ask the court to throw the case out.",
      "You have the right to keep medical debt off your credit report in New York (GBL § 380-j). This covers hospital bills, doctor bills, and medical collections.",
      "You have the right to one more notice before a default judgment. If a collector sues you on consumer debt, they must mail you an extra notice before a judge can decide the case without you (CPLR § 306-d)."
    ]
  },

  legalOptions: {
    en: [
      "You can file a complaint with the New York Department of Financial Services at dfs.ny.gov.",
      "You can file a complaint with the New York Attorney General's Consumer Frauds Bureau at ag.ny.gov/consumer-frauds.",
      "You can file a complaint with the federal Consumer Financial Protection Bureau at consumerfinance.gov.",
      "If you win an FDCPA case, the law lets the court award up to $1,000 in damages plus your lawyer's fees (15 U.S.C. § 1692k). Courts decide what fits each case.",
      "If a collector sues you on a debt that is more than 3 years old, you can raise the \"too old\" defense. The law makes the collector prove the case was filed in time (CPLR § 214-i).",
      "Free legal help for debt problems in Monroe County: Legal Aid Society of Rochester (585-232-4090), LawNY (585-325-2520), Empire Justice Center (585-454-4060), and JustCause (585-232-3051)."
    ]
  },

  example: {
    en: "Jordan gets calls from a debt collector about an old credit card. The calls come at 6 a.m. They also call him at work, even though his boss said not to. The last time Jordan paid on the card was over 3 years ago. Jordan writes a letter to the collector. He says he disputes the debt and he wants the calls to stop. After the letter, the collector can only contact him to say they got it or to tell him they are suing. Because the last payment was more than 3 years ago, if they ever do sue, Jordan can ask the court to throw the case out under CPLR § 214-i. Jordan also files a complaint with the New York Attorney General."
  },

  counsel: [
    {
      type: "free",
      name: "Legal Aid Society of Rochester",
      focus: "Debt collection defense, FDCPA, lawsuit defense",
      qualifier: "Low-income residents of Monroe County and nearby counties",
      access: "Call 585-232-4090",
      outcome: "Free lawyer or advice on debt cases",
      phone: "(585) 232-4090",
      url: "https://www.lasroc.org",
      verified: true,
      bilingual: true,
      languages: ["es"]
    },
    {
      type: "free",
      name: "Legal Assistance of Western New York (LawNY)",
      focus: "Consumer debt, collection lawsuits, bankruptcy referral",
      qualifier: "Low-income residents in 14 Western NY counties including Monroe",
      access: "Call 585-325-2520",
      outcome: "Free lawyer in consumer cases",
      phone: "(585) 325-2520",
      url: "https://www.lawny.org",
      verified: true,
      bilingual: false,
      languages: []
    },
    {
      type: "free",
      name: "Empire Justice Center",
      focus: "Consumer rights, FDCPA, debt buyer lawsuits",
      qualifier: "Low- and moderate-income New Yorkers",
      access: "Call 585-454-4060",
      outcome: "Free lawyer or impact litigation",
      phone: "(585) 454-4060",
      url: "https://www.empirejustice.org",
      verified: true,
      bilingual: false,
      languages: []
    },
    {
      type: "free",
      name: "JustCause (Telesca Center for Justice)",
      focus: "Debt clinics, small claims help, pro bono referrals",
      qualifier: "Low-income Monroe County residents",
      access: "Call 585-232-3051",
      outcome: "Volunteer lawyer or clinic",
      phone: "585-232-3051",
      url: "https://www.justcauseny.org",
      verified: true,
      bilingual: false,
      languages: []
    }
  ],

  relatedIds: [
    "medical-debt-ny",
    "bankruptcy-chapter7-ny",
    "bankruptcy-chapter13-ny",
    "bankruptcy-automatic-stay-ny"
  ],

  relatedHelpResources: [],

  tags: [
    "debt collector calling",
    "debt harassment",
    "being sued for debt",
    "old debt",
    "collection lawsuit",
    "credit card debt",
    "debt validation",
    "stop calls",
    "too old to sue",
    "zombie debt",
    "debt buyer",
    "FDCPA",
    "can they garnish my wages",
    "wrong amount owed"
  ],

  sources: [
    "https://www.law.cornell.edu/uscode/text/15/chapter-41/subchapter-V",
    "https://www.nysenate.gov/legislation/laws/GBS/601",
    "https://www.nysenate.gov/legislation/laws/CVP/214-I",
    "https://www.nysenate.gov/legislation/laws/CVP/306-D",
    "https://www.nysenate.gov/legislation/laws/GBS/380-J",
    "https://www.dfs.ny.gov/consumers/complaint",
    "https://ag.ny.gov/consumer-frauds",
    "https://www.consumerfinance.gov/"
  ],

  lastVerified: "2026-04-13",
  volatility: "moderate",
  emergencyFlag: false,
  disclaimer: true,
  categoryDisclaimer: null
};
