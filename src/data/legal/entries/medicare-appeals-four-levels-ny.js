export const MEDICARE_APPEALS_FOUR_LEVELS_NY = {
  id: "medicare-appeals-four-levels-ny",
  category: "healthcare",
  tier: "federal",
  jurisdiction: "us-fed",
  authorityType: "federal-statute",
  primaryStatute: "42 USC 1395FF",
  status: "active",

  title: { en: "Medicare Appeals — Four Levels Under 42 USC 1395ff for Challenging Coverage Denials" },

  summary: {
    en: "Medicare beneficiaries who disagree with a coverage decision can appeal through a structured four-level process established by federal law at 42 USC 1395ff. Level 1 is redetermination by the Medicare Administrative Contractor (MAC). Level 2 is reconsideration by a Qualified Independent Contractor (QIC). Level 3 is a hearing before an Administrative Law Judge. Level 4 is Medicare Appeals Council review, and beyond that is federal district court. Each level has specific filing deadlines and minimum dollar thresholds. Fast-track appeals exist for hospital discharges, skilled nursing discharges, home health terminations, and Part D drug denials."
  },

  whoQualifies: {
    en: [
      "A Medicare beneficiary denied coverage for a service, device, or medication.",
      "A family member or authorized representative of a Medicare beneficiary.",
      "A provider submitting an appeal on behalf of a Medicare patient.",
      "A Medicare Advantage enrollee disputing an organization determination.",
      "A Medicare Part D enrollee contesting a drug coverage denial.",
      "A hospital patient disputing a discharge notice.",
      "A skilled nursing facility resident whose Medicare coverage ends."
    ]
  },

  whatItMeans: {
    en: "Medicare decisions about coverage, payment, and service availability are made millions of times each year by Medicare Administrative Contractors and health plans administering Medicare Advantage and Part D. Federal law at 42 USC 1395ff establishes a formal four-level appeal process for beneficiaries who disagree. Level 1 — Redetermination (120 days from denial): the beneficiary or representative files a redetermination request with the Medicare Administrative Contractor (MAC) that issued the initial denial. The MAC re-examines the case with different staff. Decision typically within 60 days. Level 2 — Reconsideration (180 days from Level 1 decision): appeal goes to a Qualified Independent Contractor (QIC) — a separate entity contracted by CMS for independent review. Decision within 60 days. Level 3 — ALJ Hearing (60 days from Level 2 decision): appeal to the Office of Medicare Hearings and Appeals for a hearing before an Administrative Law Judge. Minimum amount in controversy ($190 for 2024, adjusted annually) required. Hearings are video or phone; in-person rare. Level 4 — Medicare Appeals Council (60 days from ALJ decision): the Council at the Departmental Appeals Board reviews the record. No minimum amount. Final administrative decision. Beyond Level 4: federal district court. 60 days from Council decision. Minimum amount in controversy ($1,840 for 2024). Fast-track appeals: separate expedited tracks exist for (1) hospital discharge — a patient disagreeing with discharge can request review by the Beneficiary and Family Centered Care Quality Improvement Organization (BFCC-QIO); decision within 1 day. (2) Skilled nursing facility discharge — similar expedited BFCC-QIO review. (3) Home health termination — BFCC-QIO review. (4) Part D expedited appeals — within 24 hours for urgent medication needs. Representatives: a beneficiary can designate an authorized representative (family member, friend, attorney, advocate) to file the appeal on their behalf using Form CMS-1696. Attorneys may charge fees but the State Health Insurance Assistance Program (SHIP, called HIICAP in NY) provides free counseling. Good cause for late filing: missed deadlines can sometimes be extended upon showing good cause — serious illness, representative error, not receiving notice. Medicare Advantage (Part C) appeals: follow a similar structure but start with the plan's 'organization determination' and expedited requests for urgent care (72-hour decisions). Part D drug appeals: start with the plan's coverage determination and expedited appeals for urgent needs. Statistics: appeal success rates vary substantially by level — Level 3 ALJ hearings historically have the highest reversal rates. Diligent preparation with medical records, physician letters, and Medicare guidance citations improves outcomes."
  },

  yourRights: {
    en: [
      "A beneficiary has the right to a redetermination within 120 days of denial (42 USC 1395ff).",
      "A beneficiary has the right to reconsideration by an independent QIC within 180 days.",
      "A beneficiary has the right to an ALJ hearing when the amount in controversy meets the threshold.",
      "A beneficiary has the right to appeal to the Medicare Appeals Council.",
      "A beneficiary has the right to federal district court review after administrative exhaustion.",
      "A hospital patient has the right to expedited BFCC-QIO review of discharge notices.",
      "A Part D enrollee has the right to 24-hour expedited appeal for urgent medication needs.",
      "A beneficiary has the right to free counseling through NY HIICAP."
    ]
  },

  legalOptions: {
    en: [
      "NY Health Insurance Information, Counseling and Assistance Program (HIICAP) at (800) 701-0501 — free Medicare counseling.",
      "Medicare Customer Service at (800) 633-4227 — appeal information.",
      "Livanta BFCC-QIO at (866) 815-5440 — expedited hospital/SNF/home health appeals (NY region).",
      "Medicare Rights Center at (800) 333-4114 — national advocacy and counseling.",
      "Monroe County Office for the Aging at (585) 753-6280 — senior Medicare help.",
      "Legal Aid Society of Rochester at (585) 232-4090 — low-income Medicare appeals.",
      "Monroe County Bar Association Lawyer Referral at (585) 546-2130 — elder law attorneys."
    ]
  },

  example: {
    en: "A Rochester Medicare beneficiary was denied coverage for a specialty medication at the pharmacy counter. He filed a Level 1 redetermination with his Part D plan within the 120-day window. The plan upheld the denial citing formulary rules. At Level 2 reconsideration, the QIC reviewed the physician's letter documenting medical necessity and the lack of alternative medications. The QIC partially approved coverage. At Level 3, the ALJ conducted a phone hearing and reversed to full coverage based on the physician's detailed justification. The beneficiary received retroactive coverage for prior prescription purchases. Total appeal timeline: approximately 9 months. HIICAP counselor provided free support throughout."
  },

  counsel: [
    {
      type: "free",
      name: "NY HIICAP Monroe County",
      focus: "Free Medicare counseling including appeals support",
      qualifier: "Any Monroe County Medicare beneficiary",
      access: "Phone at (800) 701-0501 or local senior center",
      outcome: "One-on-one counseling, appeal form assistance",
      phone: "(800) 701-0501",
      url: "https://aging.ny.gov/hiicap",
      verified: true,
      bilingual: true,
      languages: ["es"]
    },
    {
      type: "free",
      name: "Livanta BFCC-QIO",
      focus: "Expedited Medicare discharge and termination appeals for NY",
      qualifier: "Medicare beneficiaries facing hospital/SNF/home health discharge",
      access: "Phone (866) 815-5440",
      outcome: "1-day expedited review",
      phone: "(866) 815-5440",
      url: "https://www.livantaqio.com",
      verified: true,
      bilingual: false,
      languages: []
    }
  ],

  relatedIds: [
    "medicare-savings-program-ny",
    "medicare-late-enrollment-penalty-ny",
    "medicare-vs-medicaid-ny",
    "health-insurance-denial-ny",
    "nursing-home-discharge-rights-ny",
    "hospital-discharge-rights-ny"
  ],

  relatedHelpResources: [],

  tags: [
    "Medicare appeals",
    "42 USC 1395ff",
    "four-level appeal",
    "redetermination MAC",
    "reconsideration QIC",
    "ALJ hearing",
    "Medicare Appeals Council",
    "BFCC-QIO expedited",
    "HIICAP counseling",
    "Part D urgent 24-hour"
  ],

  sources: [
    "https://www.law.cornell.edu/uscode/text/42/1395ff",
    "https://www.medicare.gov/claims-appeals",
    "https://www.hhs.gov/about/agencies/omha/index.html"
  ],

  lastVerified: "2026-04-19",
  volatility: "medium",
  emergencyFlag: false,
  disclaimer: true,
  categoryDisclaimer: null
};
