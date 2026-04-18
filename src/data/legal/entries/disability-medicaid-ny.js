export const DISABILITY_MEDICAID_NY = {
  id: "disability-medicaid-ny",
  category: "benefits",
  tier: "state",
  jurisdiction: "us-ny",
  authorityType: "state-statute",
  primaryStatute: "NY SOS 366",
  status: "active",

  title: { en: "Disability Medicaid — Health Coverage for People with Disabilities" },

  summary: {
    en: "People with disabilities, people who are blind, and adults 65 and older can get Medicaid under a different set of rules than most other adults. These rules look at both your income and your savings. New York lets you keep a lot of things — your home, one car, and more. There's also a program that lets disabled people keep Medicaid while they work."
  },

  whoQualifies: {
    en: [
      "People of any age who Social Security says are disabled — or who the state says are disabled.",
      "People who are legally blind.",
      "Adults 65 and older.",
      "Your income must be at or below the Medicaid limit for this group (138% of the Federal Poverty Level in 2023).",
      "Your savings must be under the Medicaid limit. Your home, one car, and your personal things usually don't count.",
      "People on SSI automatically get Medicaid.",
      "If your income is over the limit, you can still qualify two other ways: the spend-down program, or a Pooled Trust."
    ]
  },

  whatItMeans: {
    en: "This version of Medicaid uses different rules than the regular Medicaid for younger adults. These rules are called \"Non-MAGI\" rules. (MAGI is a tax term that Medicaid uses for most adults under 65. Non-MAGI means the other set of rules.)\n\nThe Non-MAGI rules count both your income and your savings. But many things don't count. Your home, one car, household items, and certain retirement accounts you're getting payments from are all protected.\n\nWhen the county figures out if you qualify, they ignore more than half of what you earn from work. That helps working people with disabilities.\n\nIf your income is too high, you can still get Medicaid through the spend-down program. It works kind of like an insurance deductible — once your medical bills hit a certain amount, Medicaid starts paying for the rest of that month.\n\nIf you have a disability and you work, check out Medicaid Buy-In. It has a higher income limit so you can keep health coverage while you earn a paycheck.\n\nIf you don't have a Social Security disability ruling yet, you can still apply at your local DSS. The state's Disability Review Unit will look at your medical records using Social Security's rules.\n\nRegular applications take up to 45 days. If they need to decide if you are disabled, it can take up to 90 days."
  },

  yourRights: {
    en: [
      "You have the right to apply for Non-MAGI Medicaid at your local DSS any time.",
      "You have the right to have your disability reviewed by the state if you don't have a Social Security disability ruling.",
      "You have the right to have more than half your work earnings ignored when they decide if you qualify.",
      "You have the right to keep your home, one car, and personal things without them counting against you.",
      "You have the right to use the spend-down program or a Pooled Trust to qualify if your income is too high.",
      "You have the right to the Medicaid Buy-In for Working People with Disabilities if you're under 65, disabled, and working.",
      "You have the right to appeal (fair hearing) if you are denied, cut, or closed out.",
      "You have 60 days after a bad decision to ask for a fair hearing."
    ]
  },

  legalOptions: {
    en: [
      "Every county DSS in New York takes Non-MAGI Medicaid applications (NY Social Services Law § 366; 42 U.S.C. § 1396a).",
      "You can't apply online for Non-MAGI Medicaid. Apply in person at your local DSS using form DOH-4220 plus Supplement A (DOH-5178A).",
      "The Medicaid Helpline is 1-800-541-2831.",
      "Free help with applications from Facilitated Enrollers for the Aged, Blind, and Disabled. List by county at health.ny.gov.",
      "Medicaid Buy-In for Working People with Disabilities: info at health.ny.gov/health_care/medicaid/program/buy_in/.",
      "Pooled Trusts are run by nonprofits. They can hold your extra income so you qualify without a spend-down. There are fees and some rules about what happens after you pass away.",
      "To ask for a fair hearing: call 1-800-342-3334.",
      "Free legal help: Empire Justice Center (585-454-4060) and LawNY (585-325-2520)."
    ]
  },

  example: {
    en: "Andre is 52. He has a nerve condition that keeps him from working full-time. He works part-time earning about $900 a month. He also gets a small SSDI check. He applied for Non-MAGI Medicaid at his county DSS. Because more than half of his work pay didn't count, his countable income fell under the Medicaid limit. His savings were also under the limit. He was approved. Medicaid now pays for his doctor visits, medicine, physical therapy, and rides to medical appointments."
  },

  counsel: [
    {
      type: "free",
      name: "Empire Justice Center",
      focus: "Disability Medicaid, health law, SSI/SSD, spend-down, trusts, systemic advocacy",
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
      name: "Legal Assistance of Western New York (LawNY)",
      focus: "Health law, Medicaid, Medicare, elder law, disability",
      qualifier: "Low income residents in 14 Western NY counties including Monroe",
      access: "Phone intake at (585) 325-2520",
      outcome: "Direct representation",
      phone: "(585) 325-2520",
      url: "https://www.lawny.org",
      verified: true,
      bilingual: false,
      languages: []
    },
    {
      type: "free",
      name: "Legal Aid Society of Rochester",
      focus: "Public benefits, Medicaid, disability, fair hearings",
      qualifier: "Low income residents of Monroe and surrounding counties",
      access: "Phone intake, walk-in, or referral",
      outcome: "Direct representation and advice on benefits cases",
      phone: "(585) 232-4090",
      url: "https://www.lasroc.org",
      verified: true,
      bilingual: true,
      languages: ["es"]
    }
  ],

  relatedIds: [
    "medicaid-ny",
    "medicaid-spend-down-ny",
    "ssi-disability-ny",
    "ssdi-ny",
    "medicare-savings-program-ny",
    "benefits-denial-appeal-ny"
  ],

  relatedHelpResources: [],

  tags: [
    "disability Medicaid",
    "disabled health insurance",
    "Non-MAGI Medicaid",
    "blind Medicaid",
    "working with disability",
    "Medicaid Buy-In",
    "disability health coverage",
    "can't afford doctor disabled",
    "supplemental needs trust",
    "disability benefits health",
    "disabled and working"
  ],

  sources: [
    "https://www.health.ny.gov/health_care/medicaid/how_do_i_apply.htm",
    "https://www.health.ny.gov/health_care/medicaid/program/buy_in/",
    "https://www.nysenate.gov/legislation/laws/SOS/366",
    "https://www.law.cornell.edu/uscode/text/42/1396a"
  ],

  lastVerified: "2026-04-13",
  volatility: "moderate",
  emergencyFlag: false,
  disclaimer: true,
  categoryDisclaimer: null
};
