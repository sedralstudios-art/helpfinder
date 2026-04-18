export const MEDICAL_BILL_NEGOTIATION_NY = {
  id: "medical-bill-negotiation-ny",
  category: "consumer",
  tier: "state",
  jurisdiction: "us-ny",
  authorityType: "state-statute",
  status: "active",

  title: { en: "Medical Bills You Cannot Pay — Negotiation, Financial Assistance, and Your Rights" },

  summary: {
    en: "Medical bills are the leading cause of financial distress in the US. Many people do not know that hospitals and medical providers are often willing to reduce bills, set up interest-free payment plans, or forgive the balance entirely through financial assistance (charity care) programs. New York nonprofit hospitals are required by law to have financial assistance policies."
  },

  whoQualifies: {
    en: [
      "Anyone with a medical bill they cannot afford — whether insured, underinsured, or uninsured.",
      "Anyone who has received a bill after insurance paid its share and the remaining balance is too high.",
      "Anyone who has been sent to collections for a medical bill.",
      "NY nonprofit hospitals (which includes most hospitals in Monroe County) must offer financial assistance programs."
    ]
  },

  whatItMeans: {
    en: "Medical bills are not fixed prices. They are the starting point for negotiation. Hospitals routinely charge different amounts for the same service depending on the payer — insurance companies pay negotiated rates, Medicaid pays set rates, and uninsured patients are often billed the highest 'chargemaster' rate. Asking for a reduction is normal. Financial assistance (charity care): every nonprofit hospital in New York must have a financial assistance policy under Public Health Law § 2807-k and federal 501(r) requirements. Patients whose income is below certain thresholds can qualify for a full write-off or a significant reduction. Sliding scale: some hospitals and health systems reduce the bill based on income, even above the charity care threshold. Payment plans: most providers will set up an interest-free monthly payment plan. There is no legal requirement for a minimum payment — the amount should be what the patient can reasonably afford. Retroactive Medicaid: if the patient was uninsured at the time of service but qualifies for Medicaid, Medicaid can be applied retroactively up to 3 months before the application date. Medical debt collections: under new federal rules (2023) and NY regulations, medical debt under a certain amount does not appear on credit reports. Larger medical debts cannot be reported for at least 1 year."
  },

  yourRights: {
    en: [
      "The right to request an itemized bill showing every charge — billing errors are common.",
      "The right to apply for the hospital's financial assistance program (nonprofit hospitals are required to have one).",
      "The right to negotiate the bill amount and the payment terms.",
      "The right to a payment plan — providers cannot demand full payment immediately.",
      "The right to apply for Medicaid retroactively (up to 3 months before the application date) to cover past bills.",
      "Medical debt has special protections on credit reports — small amounts may not appear at all, and larger amounts have a reporting delay."
    ]
  },

  legalOptions: {
    en: [
      "Requesting an itemized bill is the first step. Compare each line item against what was actually received. Billing errors — duplicate charges, charges for services not rendered — are common.",
      "Asking the billing department about financial assistance or charity care programs is recommended. The hospital's financial counselor can walk through the application process.",
      "If the bill has been sent to collections, the debt collector must still validate the debt. A dispute can be filed under the FDCPA.",
      "For Medicaid-eligible patients who were uninsured at the time of service, Medicaid applications can be filed with retroactive coverage. Monroe County DSS handles applications at (585) 753-6960.",
      "Free help with medical bill disputes and financial assistance applications is available through Legal Aid Society of Rochester at (585) 232-4090 and through the Community Health Advocates program."
    ]
  },

  example: {
    en: "A man in Rochester goes to the ER after a fall. He has no insurance. The bill is $8,000. He requests an itemized bill and finds a $600 charge for a test he did not receive. After the correction, the bill is $7,400. He applies for the hospital's financial assistance program and, based on his income, qualifies for a 70% write-off. The remaining $2,220 is set up on an interest-free payment plan of $50/month. He also applies for Medicaid through DSS, which covers him retroactively for 3 months — eliminating the remaining balance."
  },

  counsel: [
    {
      type: "free",
      name: "Community Health Advocates (CHA) / Legal Aid",
      focus: "Medical bill disputes, financial assistance, insurance issues",
      qualifier: "Any consumer in the Rochester area",
      access: "Phone",
      outcome: "Free assistance navigating bills and financial assistance",
      phone: "(585) 232-4090",
      url: "https://www.lasroc.org",
      verified: true,
      bilingual: true,
      languages: ["es"]
    }
  ],

  relatedIds: [
    "medicaid-ny",
    "health-insurance-denial-ny",
    "debt-collection-rights-ny",
    "medical-debt-ny"
  ],

  relatedHelpResources: [],

  tags: [
    "medical bill",
    "hospital bill",
    "cannot pay medical",
    "charity care",
    "financial assistance hospital",
    "medical debt",
    "negotiate medical bill",
    "itemized bill",
    "payment plan medical",
    "retroactive Medicaid",
    "medical collections"
  ],

  sources: [
    "https://www.nysenate.gov/legislation/laws/PBH/2807-K",
    "https://www.irs.gov/charities-non-profits/financial-assistance-policy-and-emergency-medical-care-policy-section-501r4"
  ],

  lastVerified: "2026-04-16",
  volatility: "medium",
  emergencyFlag: false,
  disclaimer: true,
  categoryDisclaimer: null
};
