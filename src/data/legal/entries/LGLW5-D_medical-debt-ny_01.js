// LGLW5-D_medical-debt-ny_01.js
// Category: consumer (Consumer & Debt)
// Jurisdiction: ny (New York State)
// Schema: V3 — English only (translation re-sync pending)
// LGLW5-D | Drafted April 2026

export const MEDICAL_DEBT_NY = {
  id: "medical-debt-ny",
  category: "consumer",
  tier: "state",
  jurisdiction: "us-ny",
  status: "active",

  title: { en: "Medical Bills — Hospital Help Programs and New York Protections" },

  summary: {
    en: "Most New York hospitals have to offer a discount program for patients who cannot afford their bills. If your income is under a certain level, you can qualify for a lower bill — sometimes as low as $0. New York also bans medical debt from showing up on your credit report. And hospitals cannot put a lien on your home for unpaid medical bills."
  },

  whoQualifies: {
    en: [
      "Patients at most New York hospitals who were treated and got a bill they cannot afford.",
      "Hospital discount programs help patients whose income is at or below 300% of the Federal Poverty Level (Public Health Law § 2807-k). Some hospitals go higher than that.",
      "Immigration status does not matter. Hospitals cannot use it to deny you the discount.",
      "The New York ban on medical debt credit reporting and the ban on medical debt home liens apply to every New Yorker."
    ]
  },

  whatItMeans: {
    en: "If you are treated at a New York hospital and cannot afford the bill, there is a law that can help. Most hospitals have to offer a discount program called financial assistance (Public Health Law § 2807-k). Patients with very low income often get their bill written off to $0. Patients with higher income get a smaller discount. The cutoff is 300% of the Federal Poverty Level — for a single person in 2026, that is about $47,000 a year. You have at least 90 days after the first bill to apply. The hospital must tell you about the program on every bill. If you do not have insurance, the hospital also has to help check if you qualify for Medicaid before they start collecting. In 2023, New York passed a law (GBL § 380-j) that says credit bureaus cannot put medical debt on your credit report. In 2022, another law (CPLR § 5231-a) stopped hospitals from putting a lien on your home for a medical bill. Other 2022 changes lowered how much of your paycheck a medical debt collector can take (CPLR § 5231). Most medical debt also has a 3-year \"too old to sue\" rule in New York (CPLR § 214-i)."
  },

  yourRights: {
    en: [
      "You have the right to see the hospital's financial assistance policy on every bill (PHL § 2807-k).",
      "You have the right to at least 90 days after the first bill to apply for the discount.",
      "You have the right to a hospital discount if your income is at or below 300% of the Federal Poverty Level. Lower-income patients get a bigger discount.",
      "You have the right to apply no matter your immigration status. The hospital cannot use that to turn you down.",
      "You have the right as an uninsured patient to be screened for Medicaid before the hospital starts collecting (PHL § 2807-k).",
      "You have the right to keep medical debt off your credit report in New York (GBL § 380-j). This covers hospital bills, doctor bills, and medical collection accounts.",
      "You have the right to keep your home safe from hospital medical-debt liens (CPLR § 5231-a).",
      "You have the right to lower paycheck garnishment for medical debt than for other debts (CPLR § 5231).",
      "You have the right to dispute a bill if the charges are wrong. Surprise bills from out-of-network doctors at an in-network hospital are limited by federal law (the No Surprises Act, 42 U.S.C. § 300gg-111).",
      "You have the right to ask for an itemized bill and have errors fixed before anyone tries to collect."
    ]
  },

  legalOptions: {
    en: [
      "To apply for hospital financial assistance, call the billing office at your hospital. Every New York hospital must post its policy on its website. You can also ask for a paper copy.",
      "If the hospital denies you or bills you wrong, you can file a complaint with the New York Department of Health at health.ny.gov/facilities/hospital/financial_assistance.",
      "For surprise out-of-network bills, you can file a complaint with the New York Department of Financial Services at dfs.ny.gov, or use the federal dispute process at nosurprises.cms.gov.",
      "For medical debt that wrongly shows up on your credit report, you can complain to the Consumer Financial Protection Bureau at consumerfinance.gov and to the New York Attorney General at ag.ny.gov/consumer-frauds.",
      "The Community Service Society runs a free statewide helpline called Community Health Advocates. They help with hospital bills and insurance problems. Call 1-888-614-5400.",
      "Free legal help for medical debt in Monroe County: Legal Aid Society of Rochester (585-232-4090), LawNY (585-325-2520), and Empire Justice Center (585-454-4060).",
      "If a hospital or medical collector sues you on a bill that is more than 3 years old, you can ask the court to throw the case out under CPLR § 214-i."
    ]
  },

  example: {
    en: "Amira does not have insurance. She goes to the emergency room at a Rochester hospital and gets a bill for $6,000. Her bill has a notice about the hospital's financial assistance program, as required by PHL § 2807-k. Her household income is about 180% of the Federal Poverty Level. She calls the billing office and applies within 90 days. The hospital lowers her bill under its sliding scale and also helps her apply for Medicaid. Six months later, a collector contacts her about the smaller balance that is left. Because of New York's 2023 law (GBL § 380-j), the debt does not appear on her credit report."
  },

  counsel: [
    {
      type: "free",
      name: "Legal Aid Society of Rochester",
      focus: "Medical debt lawsuits, denied hospital financial assistance, consumer debt",
      qualifier: "Low-income residents of Monroe County and nearby counties",
      access: "Call 585-232-4090",
      outcome: "Free lawyer or advice on medical debt cases",
      phone: "(585) 232-4090",
      url: "https://www.lasroc.org",
      verified: true,
      bilingual: true,
      languages: ["es"]
    },
    {
      type: "free",
      name: "Legal Assistance of Western New York (LawNY)",
      focus: "Medical debt collection lawsuits, consumer rights, public benefits",
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
      focus: "Medical debt, health coverage, consumer rights",
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
      name: "Community Health Advocates (CHA)",
      focus: "Hospital billing problems, insurance denials, help applying for financial assistance",
      qualifier: "Any New Yorker — no income limit",
      access: "Call 1-888-614-5400",
      outcome: "Free help with your bill or insurance",
      phone: "1-888-614-5400",
      url: "https://www.communityhealthadvocates.org",
      verified: true,
      bilingual: true,
      languages: ["es"]
    }
  ],

  relatedIds: [
    "debt-collection-rights-ny",
    "medicaid-ny",
    "medicaid-spend-down-ny",
    "bankruptcy-chapter7-ny"
  ],

  relatedHelpResources: [],

  tags: [
    "medical debt",
    "hospital bill",
    "can't afford hospital bill",
    "ER bill",
    "hospital financial assistance",
    "charity care",
    "sliding scale hospital",
    "surprise medical bill",
    "out of network billing",
    "medical bill on credit report",
    "sued for medical debt",
    "medical debt collector",
    "Medicaid application hospital",
    "hospital lien home",
    "wage garnishment medical bill"
  ],

  sources: [
    "https://www.nysenate.gov/legislation/laws/PBH/2807-K",
    "https://www.health.ny.gov/facilities/hospital/financial_assistance/",
    "https://www.nysenate.gov/legislation/laws/GBS/380-J",
    "https://www.nysenate.gov/legislation/laws/CVP/5231",
    "https://www.nysenate.gov/legislation/laws/CVP/5231-A",
    "https://www.nysenate.gov/legislation/laws/CVP/214-I",
    "https://www.cms.gov/nosurprises",
    "https://ag.ny.gov/consumer-frauds/medical-debt",
    "https://www.communityhealthadvocates.org/"
  ],

  lastVerified: "2026-04-13",
  volatility: "moderate",
  emergencyFlag: false,
  disclaimer: true,
  categoryDisclaimer: null
};
