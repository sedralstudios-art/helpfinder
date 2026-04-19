export const SURPRISE_MEDICAL_BILLING_NY = {
  id: "surprise-medical-billing-ny",
  category: "consumer",
  tier: "federal",
  jurisdiction: "us-ny",
  authorityType: "federal-statute",
  primaryStatute: "NY FIS 603",
  status: "active",

  title: { en: "Surprise Medical Bills — The No Surprises Act and Patient Rights" },

  summary: {
    en: "A surprise medical bill is a bill from an out-of-network provider that the patient did not choose — like an ER doctor, anesthesiologist, or lab that happened to be out of network at an in-network hospital. The federal No Surprises Act (2022) and New York's earlier surprise bill law protect patients from being charged more than their in-network cost-sharing in these situations."
  },

  whoQualifies: {
    en: [
      "Anyone who received a bill from an out-of-network provider at an in-network facility (hospital, surgery center, etc.).",
      "Anyone treated in an emergency department — all emergency services are protected regardless of network status.",
      "Anyone who received an unexpectedly high bill because a provider they did not choose turned out to be out of network.",
      "Air ambulance patients are also protected under the No Surprises Act."
    ]
  },

  whatItMeans: {
    en: "Before the No Surprises Act, a patient could go to an in-network hospital for surgery and receive a bill for thousands of dollars from the anesthesiologist or assistant surgeon who happened to be out of network — even though the patient had no choice in the matter. Under the No Surprises Act (effective January 2022) and New York's earlier surprise bill law (Financial Services Law § 603), the patient's responsibility is limited to their in-network cost-sharing amount (co-pay, deductible, coinsurance). The provider and the insurance company work out the payment between themselves. The patient is removed from the middle. This applies to: emergency services at any facility, non-emergency services at an in-network facility from an out-of-network provider the patient did not choose, and air ambulance services. If a patient receives a surprise bill, they can dispute it. The insurer must send an Explanation of Benefits (EOB) showing the in-network amount the patient owes. If the provider bills more than that, the patient can file a complaint."
  },

  yourRights: {
    en: [
      "In emergency situations, the patient can only be charged the in-network cost-sharing amount — regardless of whether the provider or facility is in network.",
      "At in-network facilities, out-of-network providers the patient did not choose cannot balance-bill the patient beyond the in-network amount.",
      "The patient has the right to an Explanation of Benefits showing what they actually owe.",
      "If a surprise bill is received, a complaint can be filed with the insurer, the NY Department of Financial Services, or the federal No Surprises Act helpline.",
      "Providers must give a Good Faith Estimate of costs before scheduled services for uninsured or self-pay patients."
    ]
  },

  legalOptions: {
    en: [
      "If a surprise bill is received, the first step is contacting the insurance company and asking them to reprocess it under the No Surprises Act or NY surprise bill law.",
      "A complaint about a surprise bill can be filed with the NY Department of Financial Services at (800) 342-3736 or online at dfs.ny.gov.",
      "The federal No Surprises Act helpline can be reached at (800) 985-3059.",
      "For uninsured patients who did not receive a required Good Faith Estimate, a dispute can be filed through the HHS patient-provider dispute resolution process.",
      "Free help with surprise billing issues is available through the Community Health Advocates program at Legal Aid Society of Rochester at (585) 232-4090."
    ]
  },

  example: {
    en: "A woman goes to an in-network hospital in Rochester for a scheduled knee surgery. The surgeon is in-network, but the anesthesiologist turns out to be out of network. She receives a $4,200 bill from the anesthesiologist's billing company. She calls her insurance company and asks them to reprocess under the No Surprises Act. The insurer determines her in-network responsibility is $350 (her co-pay). The remaining $3,850 is resolved between the insurer and the anesthesiologist. The patient pays only $350."
  },

  counsel: [
    {
      type: "free",
      name: "NY Dept of Financial Services — Surprise Bill Complaints",
      focus: "Surprise medical billing, balance billing, insurance disputes",
      qualifier: "Any insured person in New York",
      access: "Phone or online",
      outcome: "Investigation and enforcement",
      phone: "(800) 342-3736",
      url: "https://www.dfs.ny.gov",
      verified: true,
      bilingual: false,
      languages: []
    },
    {
      type: "free",
      name: "No Surprises Act Federal Helpline",
      focus: "Federal surprise billing complaints and disputes",
      qualifier: "Anyone in the US",
      access: "Phone",
      outcome: "Complaint filing and dispute resolution",
      phone: "(800) 985-3059",
      url: "https://www.cms.gov/nosurprises",
      verified: true,
      bilingual: true,
      languages: ["es"]
    }
  ],

  relatedIds: [
    "health-insurance-denial-ny",
    "medical-bill-negotiation-ny",
    "medicaid-ny"
  ],

  relatedHelpResources: [],

  tags: [
    "surprise bill",
    "balance billing",
    "No Surprises Act",
    "out of network",
    "emergency room bill",
    "anesthesiologist bill",
    "surprise medical bill",
    "in-network cost",
    "Good Faith Estimate",
    "DFS complaint"
  ],

  sources: [
    "https://www.cms.gov/nosurprises",
    "https://www.nysenate.gov/legislation/laws/FIS/603"
  ],

  lastVerified: "2026-04-16",
  volatility: "low",
  emergencyFlag: false,
  disclaimer: true,
  categoryDisclaimer: null
};
