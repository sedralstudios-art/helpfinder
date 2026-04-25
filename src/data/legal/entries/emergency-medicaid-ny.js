export const EMERGENCY_MEDICAID_NY = {
  id: "emergency-medicaid-ny",
  category: "benefits",
  tier: "state",
  jurisdiction: "us-ny",
  authorityType: "state-statute",
  primaryStatute: "42 USC 1396B",
  status: "active",

  title: { en: "Emergency Medicaid — Coverage for Uninsured People in a Medical Crisis" },

  summary: {
    en: "If someone has a medical emergency and no insurance, Emergency Medicaid can cover the cost — including for undocumented immigrants who would not otherwise qualify for full Medicaid. Emergency Medicaid covers emergency room visits, emergency surgery, labor and delivery, and other emergency treatment. It can also be applied retroactively up to 3 months before the application date."
  },

  whoQualifies: {
    en: [
      "Anyone who has a medical emergency and meets Medicaid income requirements but is not otherwise eligible for full Medicaid — most commonly undocumented immigrants.",
      "Documented immigrants in the 5-year waiting period for full Medicaid may also qualify for Emergency Medicaid.",
      "Anyone who was uninsured at the time of an emergency and applies for Medicaid within 3 months can have coverage applied retroactively."
    ]
  },

  whatItMeans: {
    en: "Emergency Medicaid is a federally mandated program (42 USC § 1396b(v)) that requires states to cover emergency medical treatment for people who meet Medicaid financial criteria but are ineligible for full Medicaid due to immigration status. In New York, Emergency Medicaid covers: emergency room care, emergency surgery, labor and delivery (the birth itself), dialysis in some emergency situations, and other conditions that pose an immediate threat to life or health. It does NOT cover non-emergency follow-up care, prescriptions, or preventive services. The application is the same as a regular Medicaid application — filed at the county DSS or online at mybenefits.ny.gov. The emergency is documented by the treating hospital. Retroactive coverage: any person who qualifies for Medicaid (including full Medicaid for citizens and eligible immigrants) can have coverage applied retroactively to cover bills from the 3 months before the application date. This means if someone goes to the ER uninsured and applies for Medicaid within 90 days, the ER bill can be covered retroactively. Hospitals have a strong financial incentive to help with the application because Emergency Medicaid pays the bill that would otherwise become uncollectible bad debt. A hospital financial counselor or social worker can usually start the application from the bedside or after discharge. Charity care policies under NY's Hospital Financial Assistance Law (Public Health Law 2807-k) provide an additional layer of help: hospitals receiving state funds must offer free or sliding-scale care to patients up to certain income thresholds, separately from Medicaid. Asking for the hospital's financial assistance application — sometimes called a charity care application — should happen even when Emergency Medicaid is approved, because it can cover services Emergency Medicaid does not. EMTALA protects access to the ER itself, so anyone arriving at an ER must be screened and stabilized regardless of ability to pay or immigration status; the bill comes later, and Emergency Medicaid plus charity care can address it."
  },

  yourRights: {
    en: [
      "Emergency rooms must treat everyone regardless of ability to pay or immigration status (EMTALA).",
      "People who meet Medicaid income rules but are ineligible for full Medicaid due to immigration status have the right to Emergency Medicaid for emergency treatment.",
      "Medicaid can be applied retroactively up to 3 months before the application date to cover past emergency bills.",
      "The hospital cannot refuse to help with the Emergency Medicaid application.",
      "Labor and delivery is covered under Emergency Medicaid for undocumented immigrants."
    ]
  },

  legalOptions: {
    en: [
      "Applications for Emergency Medicaid are filed at Monroe County DSS at (585) 753-6960 or online at mybenefits.ny.gov. The hospital's financial counselor can often help with the application.",
      "The hospital must document the emergency condition on the application. Hospitals that treat Medicaid-eligible patients have an incentive to help with the paperwork because Medicaid pays the bill.",
      "For retroactive coverage of past emergency bills, the application should note the dates of service. Coverage can go back up to 3 months.",
      "Free legal help with Emergency Medicaid applications and denials is available through Legal Aid Society of Rochester at (585) 232-4090.",
      "The NY Health Law Workgroup at Empire Justice Center at (585) 454-4060 provides advocacy on Medicaid issues including Emergency Medicaid."
    ]
  },

  example: {
    en: "An undocumented woman in Rochester goes into labor and delivers her baby at Strong Memorial Hospital. She has no insurance. The hospital's financial counselor helps her apply for Emergency Medicaid, which covers the delivery. The baby, born in the US, is a citizen and qualifies for full Medicaid on their own. The mother's Emergency Medicaid covers only the delivery and immediate post-delivery care — not ongoing medical visits."
  },

  counsel: [
    {
      type: "free",
      name: "Monroe County DSS — Medicaid",
      focus: "Medicaid applications including Emergency Medicaid",
      qualifier: "Monroe County residents",
      access: "Phone, in person, or online",
      outcome: "Application processing",
      phone: "(585) 753-6960",
      url: "https://mybenefits.ny.gov",
      verified: true,
      bilingual: false,
      languages: []
    }
  ],

  relatedIds: [
    "medicaid-ny",
    "medical-bill-negotiation-ny",
    "immigration-basics-ny",
    "health-insurance-denial-ny"
  ],

  relatedHelpResources: [],

  tags: [
    "emergency Medicaid",
    "uninsured ER",
    "no insurance hospital",
    "undocumented Medicaid",
    "retroactive Medicaid",
    "labor delivery Medicaid",
    "EMTALA",
    "emergency room no insurance",
    "immigrant health care",
    "3 month retroactive"
  ],

  sources: [
    "https://www.law.cornell.edu/uscode/text/42/1396b",
    "https://www.health.ny.gov/health_care/medicaid/"
  ],

  lastVerified: "2026-04-16",
  volatility: "low",
  emergencyFlag: true,
  disclaimer: true,
  categoryDisclaimer: null
};
