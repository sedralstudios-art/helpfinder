export const CLEAN_SLATE_NY = {
  id: "clean-slate-ny",
  category: "criminal",
  tier: "state",
  jurisdiction: "us-ny",
  authorityType: "state-statute",
  status: "active",

  title: { en: "Clean Slate Act — Automatic Sealing of Your Criminal Record" },

  summary: {
    en: "New York's Clean Slate Act seals most criminal convictions automatically after a waiting period. Misdemeanors seal after 3 years. Felonies seal after 8 years. Once sealed, the conviction is hidden from most job, housing, and school background checks. You don't have to apply. It happens by itself if you qualify."
  },

  whoQualifies: {
    en: [
      "Anyone with a New York misdemeanor conviction whose sentence or release from jail was at least 3 years ago, with no new convictions or open cases since then.",
      "Anyone with a New York felony conviction whose sentence or release from prison was at least 8 years ago, with no new convictions or open cases since then.",
      "You can't be on probation, parole, or post-release supervision right now.",
      "Drug convictions can be sealed — even Class A drug felonies. But these are NOT eligible: sex offenses, most non-drug Class A felonies (including murder), and anything that requires sex offender registration."
    ]
  },

  whatItMeans: {
    en: "Under the Clean Slate Act (CPL § 160.57), the New York court system has to seal qualifying convictions automatically by November 16, 2027.\n\nSealing means your conviction won't show up on most background checks — for jobs, housing, school, or lending. Employers cannot ask about a sealed conviction. They cannot fire you, refuse to hire you, or treat you worse because of it.\n\nSealing is not the same as expungement. (Expungement means the record is destroyed. Sealing means the record still exists but is hidden.) The record stays accessible to police, prosecutors, courts, and some licensing agencies.\n\nIf you get a new conviction during the waiting period, the clock starts over."
  },

  yourRights: {
    en: [
      "You have the right to have qualifying convictions sealed automatically. You don't have to file anything. The court system does it (CPL § 160.57).",
      "Once sealed, employers cannot ask about a sealed conviction. They cannot fire you, refuse to hire you, or treat you worse because of it.",
      "If someone shares your sealed conviction without permission and it hurts you, you have the right to sue them (Civil Rights Law § 50-g).",
      "If your conviction should have been sealed by November 16, 2027, but wasn't, you or a lawyer can ask the court to review your record.",
      "There is no limit on how many convictions can be sealed under Clean Slate — as long as each one meets the rules.",
      "There's also an older option (CPL § 160.59) that lets you petition the court to seal up to 2 convictions (no more than 1 felony) after a 10-year wait. This requires filing a motion — it's not automatic. Still available if you need it."
    ]
  },

  legalOptions: {
    en: [
      "Qualifying convictions get sealed automatically. The court system has until November 16, 2027 to finish all of them. No application is needed (CPL § 160.57).",
      "If you can't wait for automatic sealing, the older law (CPL § 160.59) lets you petition to seal up to 2 convictions after 10 years. You file a motion in the sentencing court.",
      "You can request your own criminal history record (rap sheet) from the NY Division of Criminal Justice Services (DCJS) to see if your convictions were sealed. Instructions at the DCJS website.",
      "Free legal help with record sealing: Legal Aid Society of Rochester (585-232-4090) and LawNY (585-325-2520).",
      "Clean Slate covers ONLY New York State convictions. Federal convictions and convictions from other states are not affected. IMPORTANT: for immigration matters, you still have to tell USCIS about sealed convictions.",
      "Clean Slate updates at nycourts.gov/FORMS/criminal-record-sealing.shtml."
    ]
  },

  example: {
    en: "DeShawn was convicted of a nonviolent felony in 2016 and served 2 years. He was released in 2018 and finished parole in 2021. He hasn't had any new arrests or convictions since. Under the Clean Slate Act, his felony can be sealed 8 years after his release — in 2026. Once sealed, the conviction won't show up on background checks when he applies for jobs or housing. He doesn't have to file anything. The court system handles it automatically."
  },

  counsel: [
    {
      type: "free",
      name: "Legal Aid Society of Rochester",
      focus: "Record sealing, reentry services, collateral consequences of convictions",
      qualifier: "Low income residents of Monroe County and surrounding counties",
      access: "Phone intake at (585) 232-4090",
      outcome: "Direct representation and advice on record sealing and reentry",
      phone: "(585) 232-4090",
      url: "https://www.lasroc.org",
      verified: true,
      bilingual: true,
      languages: ["es"]
    },
    {
      type: "free",
      name: "Legal Assistance of Western New York (LawNY)",
      focus: "Record sealing, reentry, employment rights, housing",
      qualifier: "Low income residents in 14 Western NY counties including Monroe",
      access: "Phone intake at (585) 325-2520",
      outcome: "Direct representation in record sealing matters",
      phone: "(585) 325-2520",
      url: "https://www.lawny.org",
      verified: true,
      bilingual: false,
      languages: []
    },
    {
      type: "free",
      name: "Empire Justice Center",
      focus: "Reentry, record sealing, systemic advocacy, employment rights",
      qualifier: "Low and moderate income residents statewide (all NYS counties except NYC)",
      access: "Phone intake at (585) 454-4060",
      outcome: "Direct representation, impact litigation, and policy advocacy",
      phone: "(585) 454-4060",
      url: "https://www.empirejustice.org",
      verified: true,
      bilingual: false,
      languages: []
    }
  ],

  relatedIds: [
    "rights-when-arrested-ny"
  ],

  relatedHelpResources: [],

  tags: [
    "clean slate",
    "seal my record",
    "criminal record",
    "background check",
    "expunge my record",
    "old conviction",
    "can't get a job because of record",
    "record sealing",
    "felony on record",
    "misdemeanor on record",
    "second chance",
    "criminal history",
    "employer background check",
    "housing denied criminal record",
    "reentry"
  ],

  sources: [
    "https://www.nycourts.gov/FORMS/criminal-record-sealing.shtml",
    "https://www.nysenate.gov/legislation/bills/2023/S7551",
    "https://www.lawny.org/node/571/new-york-state-clean-slate-act",
    "https://www.cleanslateny.org/faq",
    "https://www.nysenate.gov/legislation/laws/CPL/160.57"
  ],

  lastVerified: "2026-04-13",
  volatility: "moderate",
  emergencyFlag: false,
  disclaimer: true,
  categoryDisclaimer: null
};
