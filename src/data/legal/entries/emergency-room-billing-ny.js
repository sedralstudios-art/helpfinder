export const EMERGENCY_ROOM_BILLING_NY = {
  id: "emergency-room-billing-ny",
  category: "health",
  tier: "state",
  jurisdiction: "us-ny",
  authorityType: "state-statute",
  primaryStatute: "NY FIS 603",
  status: "active",

  title: { en: "Emergency Room Bills — What Patients Can Do About Surprise Charges" },

  summary: {
    en: "A patient who received an emergency room bill that is unaffordable has options. New York law limits surprise billing, requires hospitals to offer financial assistance, and prohibits most balance billing for emergency services."
  },

  whoQualifies: {
    en: [
      "Anyone who received an emergency room bill they cannot afford.",
      "Anyone who received a surprise bill from an out-of-network provider at an in-network hospital.",
      "Anyone who is uninsured and received emergency care.",
      "Anyone being contacted by a collection agency about an ER bill."
    ]
  },

  whatItMeans: {
    en: "New York's Surprise Bill Law (Financial Services Law Section 603) protects patients from being billed for the difference between what their insurance pays and what an out-of-network provider charges during an emergency. This is called balance billing. Under the law, the patient only owes their in-network cost-sharing amount (copay, coinsurance, or deductible). The provider and insurer must resolve the rest between themselves through an independent dispute resolution process. Separately, all New York hospitals are required to have a Financial Assistance Policy. Under Public Health Law Section 2807-k, hospitals must screen patients for charity care and offer discounts or free care to qualifying patients. If your income is below 300% of the federal poverty level, you may qualify for reduced or free hospital care. Hospitals cannot send a bill to collections without first screening the patient for financial assistance eligibility. If you are uninsured, hospitals are required to bill you at the Medicaid rate or a negotiated reduced rate rather than the full charge."
  },

  yourRights: {
    en: [
      "Insured patients have the right to pay only in-network cost-sharing amounts for emergency services, even if the provider is out-of-network.",
      "Uninsured patients have the right to be screened for charity care and financial assistance before a hospital sends the bill to collections.",
      "Patients whose income is below 300% of the federal poverty level have the right to reduced or free hospital care under the hospital's financial assistance policy.",
      "Patients have the right to receive an itemized bill showing every charge.",
      "Patients have the right to dispute any charge they believe is incorrect.",
      "Patients have the right to set up a payment plan rather than pay the full amount at once.",
      "Patients have the right to file a complaint with the NYS Department of Financial Services if a provider attempts to balance bill for emergency services."
    ]
  },

  legalOptions: {
    en: [
      "Under Financial Services Law Section 603, patients can file a complaint with the NYS Department of Financial Services at (800) 342-3736 if they receive a surprise balance bill for emergency services.",
      "Every NY hospital is required to have a Financial Assistance Application. The billing department can provide one on request.",
      "Patients can ask for an itemized bill showing every charge. Billing errors are common — duplicate charges, wrong codes, and charges for services that were not provided.",
      "If the bill is already in collections, you still have the right to apply for financial assistance. The hospital must recall the debt from collections while reviewing your application.",
      "Free help negotiating hospital bills is available through the Legal Aid Society of Rochester at (585) 232-4090.",
      "The NYS Attorney General's Health Care Bureau can assist with billing disputes at (800) 771-7755.",
      "Under the federal No Surprises Act (effective January 2022), protections against balance billing also apply to patients with private insurance for emergency services at any facility."
    ]
  },

  example: {
    en: "Andre went to the ER at Strong Memorial Hospital after a car accident. He had insurance through his employer, but the ER doctor who treated him was out-of-network. Andre received a bill for $4,200 beyond what his insurance paid. He called the NYS Department of Financial Services and learned the bill violated the Surprise Bill Law. The department contacted the provider, and Andre's responsibility was reduced to his $250 in-network copay."
  },

  counsel: [
    {
      type: "free",
      name: "Legal Aid Society of Rochester",
      focus: "Medical debt, hospital billing disputes, financial assistance applications",
      qualifier: "Low income residents of Monroe and surrounding counties",
      access: "Phone intake at (585) 232-4090",
      outcome: "Help negotiating bills, applying for charity care, and disputing collections",
      phone: "(585) 232-4090",
      url: "https://www.lasroc.org",
      verified: true,
      bilingual: true,
      languages: ["es"]
    },
    {
      type: "government",
      name: "NYS Department of Financial Services — Consumer Hotline",
      focus: "Surprise billing complaints, insurance disputes",
      qualifier: "Any NYS resident",
      access: "Phone at (800) 342-3736",
      outcome: "Investigation of surprise billing violations, enforcement action",
      phone: "(800) 342-3736",
      url: "https://www.dfs.ny.gov",
      verified: true,
      bilingual: true,
      languages: ["es"]
    }
  ],

  relatedIds: [
    "surprise-medical-billing-ny",
    "medical-debt-ny",
    "medical-bill-negotiation-ny",
    "uninsured-health-care-ny",
    "emergency-medicaid-ny"
  ],

  relatedHelpResources: [],

  tags: [
    "emergency room bill",
    "ER bill",
    "hospital bill",
    "surprise bill",
    "balance billing",
    "out of network ER",
    "hospital financial assistance",
    "charity care",
    "medical bill too high",
    "ER charges",
    "hospital debt",
    "cannot afford hospital bill"
  ],

  sources: [
    "https://www.dfs.ny.gov/consumers/health_insurance/surprise_medical_bills",
    "https://www.nysenate.gov/legislation/laws/FIS/603",
    "https://www.nysenate.gov/legislation/laws/PBH/2807-K"
  ],

  lastVerified: "2026-04-17",
  volatility: "moderate",
  emergencyFlag: false,
  disclaimer: true,
  categoryDisclaimer: null
};
