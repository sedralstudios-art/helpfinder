export const UNEMPLOYMENT_INSURANCE_NY = {
  id: "unemployment-insurance-ny",
  category: "benefits",
  tier: "state",
  jurisdiction: "us-ny",
  authorityType: "state-statute",
  primaryStatute: "NY LAB A18",
  status: "active",

  title: { en: "Unemployment Insurance — Weekly Benefits After Job Loss" },

  summary: {
    en: "A worker who lost a job through no fault of their own may qualify for weekly unemployment insurance payments while seeking new work. New York recently increased the maximum weekly benefit. Benefits last up to 26 weeks."
  },

  whoQualifies: {
    en: [
      "Workers who lost their job through no fault of their own, including layoffs, reductions in force, and business closures.",
      "Workers whose hours were reduced to 30 or fewer per week through no fault of their own may qualify for partial unemployment benefits.",
      "Applicants must have earned enough wages during a base period before becoming unemployed. Minimum earnings requirements are set by the NYS Department of Labor.",
      "Applicants must be able to work, available for work, and actively searching for a new job.",
      "Applicants must be legally authorized to work in the United States."
    ]
  },

  whatItMeans: {
    en: "Unemployment insurance provides temporary weekly payments to help replace lost income while you search for new work. The program is run by the New York State Department of Labor and funded by employer taxes. Your weekly benefit amount depends on how much you earned before becoming unemployed. In October 2025, New York increased the maximum weekly benefit from $504 to $869. Not everyone receives the maximum — your actual amount is based on your earnings history. Benefits are available for up to 26 weeks in a one-year period. There is one unpaid waiting week at the start of a new claim before payments begin. You must certify for benefits every week by confirming that you are still unemployed and actively looking for work. You must complete at least three work search activities per week. The Department of Labor has an online calculator at dol.ny.gov that can estimate your weekly benefit amount."
  },

  yourRights: {
    en: [
      "You have the right to file a claim during your first week of total or partial unemployment.",
      "You have the right to file online, by phone, or in person.",
      "You have the right to receive a determination on your claim. If eligible, your first payment is generally made within two to three weeks after your claim is processed.",
      "You have the right to receive benefits for up to 26 weeks within a benefit year.",
      "You have the right to receive partial unemployment benefits if your hours were reduced but you were not fully laid off.",
      "You have the right to appeal if your claim is denied. A request for a hearing must be filed within 30 days of the determination.",
      "You have the right to an interpreter at your hearing if you do not speak English.",
      "You have the right to continue receiving benefits while your appeal is pending if you request a hearing on time."
    ]
  },

  legalOptions: {
    en: [
      "Under New York Labor Law Article 18, unemployment insurance claims may be filed online at dol.ny.gov, by phone at 1-888-209-8124, or in person at a local Career Center.",
      "The NYS Department of Labor provides an online benefit calculator at dol.ny.gov to estimate weekly benefit amounts based on prior earnings.",
      "Weekly certification is required every week you are unemployed. Certification is completed online at labor.ny.gov/signin.",
      "At least three work search activities per week are required, including at least one priority activity such as applying for a job or attending an interview.",
      "If a claim is denied, a hearing may be requested within 30 days through the Unemployment Insurance Appeal Board.",
      "The Unemployment Insurance Appeal Board handles all appeals. Information is available at uiab.ny.gov.",
      "Free legal help with unemployment insurance denials and appeals is available through Empire Justice Center at (585) 454-4060.",
      "Legal Aid Society of Rochester provides assistance with benefits issues at (585) 232-4090.",
      "Workers who believe they were misclassified as independent contractors may still file a claim. The Department of Labor will investigate the employment relationship."
    ]
  },

  example: {
    en: "Kevin worked at a manufacturing plant in Genesee County for eight years. The plant closed and he was laid off. He filed an unemployment insurance claim online at dol.ny.gov during his first week without work. After the one-week unpaid waiting period, he began receiving weekly payments based on his prior earnings. He certified for benefits each week and completed his required work search activities. He found a new job after 14 weeks and stopped certifying."
  },

  counsel: [
    {
      type: "free",
      name: "Empire Justice Center",
      focus: "Employment issues, unemployment appeals, benefits advocacy",
      qualifier: "Low and moderate income residents statewide (all NYS counties except NYC)",
      access: "Phone intake at (585) 454-4060",
      outcome: "Direct representation, impact litigation, and policy advocacy",
      phone: "(585) 454-4060",
      url: "https://www.empirejustice.org",
      verified: true,
      bilingual: false,
      languages: []
    },
    {
      type: "free",
      name: "Legal Aid Society of Rochester",
      focus: "Public benefits, employment issues, fair hearings",
      qualifier: "Low income residents of Monroe and surrounding counties",
      access: "Phone intake, walk-in, or referral",
      outcome: "Direct representation and advice on benefits cases",
      phone: "(585) 232-4090",
      url: "https://www.lasroc.org",
      verified: true,
      bilingual: true,
      languages: ["es"]
    },
    {
      type: "free",
      name: "Legal Assistance of Western New York (LawNY)",
      focus: "Employment, consumer issues, public benefits",
      qualifier: "Low income residents in 14 Western NY counties including Monroe",
      access: "Phone intake at (585) 325-2520",
      outcome: "Direct representation",
      phone: "(585) 325-2520",
      url: "https://www.lawny.org",
      verified: true,
      bilingual: false,
      languages: []
    }
  ],

  relatedIds: [
    "snap-rights-ny",
    "medicaid-ny",
    "benefits-denial-appeal-ny",
    "fair-hearing-ny",
    "wrongful-termination-ny"
  ],

  relatedHelpResources: [],

  tags: [
    "unemployment",
    "lost my job",
    "laid off",
    "fired",
    "unemployment benefits",
    "unemployment check",
    "no job",
    "weekly benefits",
    "unemployment denied",
    "unemployment appeal",
    "hours cut",
    "plant closed",
    "downsized"
  ],

  sources: [
    "https://dol.ny.gov/unemployment-insurance",
    "https://dol.ny.gov/unemployment/certify-weekly-unemployment-insurance-benefits",
    "https://dol.ny.gov/mbr",
    "https://www.nysenate.gov/legislation/laws/LAB/A18"
  ],

  lastVerified: "2026-04-04",
  volatility: "moderate",
  emergencyFlag: false,
  disclaimer: true,
  categoryDisclaimer: null
};
