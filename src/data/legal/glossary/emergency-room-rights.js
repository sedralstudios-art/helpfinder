export const EMERGENCY_ROOM_RIGHTS = {
  id: "emergency-room-rights",
  term: { en: "Emergency Room Rights" },
  aka: ["ER Rights", "EMTALA"],
  category: "benefits",
  subtags: ["health", "program-jargon"],

  context: {
    en: "You hear about this when someone is afraid to go to the ER because they have no insurance or cannot pay. Federal law says the ER must treat you regardless of ability to pay, insurance status, or immigration status."
  },

  plainEnglish: {
    en: "Under a federal law called EMTALA (Emergency Medical Treatment and Labor Act), every hospital with an emergency department must screen and stabilize anyone who comes in with an emergency condition — regardless of whether they can pay, whether they have insurance, and regardless of immigration status. The hospital cannot ask about payment or insurance before providing the screening. A patient in labor must be delivered. After stabilization, billing is a separate issue — the patient may qualify for Medicaid, charity care, or a payment plan. The hospital cannot refuse to treat a patient because of a past unpaid bill."
  },

  whatToAsk: {
    en: [
      "Does the hospital have to see me even if I have no insurance?",
      "Can they ask about payment before treating me?",
      "After treatment, can I apply for Medicaid retroactively to cover the bill?",
      "Does the hospital have a charity care or financial assistance program?",
      "What if I am undocumented — does the hospital still have to treat me?"
    ]
  },

  related: ["medicaid", "copay", "sliding-scale", "managed-care"],
  legalEntryIds: [],

  citation: "42 USC § 1395dd (EMTALA)",
  sourceUrl: "https://www.cms.gov/Medicare/Provider-Enrollment-and-Certification/CertificationandComplianc/Downloads/EmergencyMedicalTreatment.pdf",
  lastVerified: "2026-04-16",
  status: "active"
};
