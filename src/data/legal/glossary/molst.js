export const MOLST = {
  id: "molst",
  term: { en: "MOLST" },
  aka: ["Medical Orders for Life-Sustaining Treatment"],
  category: "benefits",
  subtags: ["health", "advance-directive", "elder-law"],

  context: {
    en: "MOLST stands for Medical Orders for Life-Sustaining Treatment. It is a New York medical order signed by a physician, nurse practitioner, or physician assistant that documents specific end-of-life treatment decisions for seriously ill patients. Unlike a living will, MOLST is a doctor's order that travels with the patient."
  },

  plainEnglish: {
    en: "A bright pink form under New York Public Health Law § 2977 that documents a seriously ill patient's specific end-of-life treatment decisions as actual medical orders signed by a physician, nurse practitioner, or physician assistant. MOLST stands for Medical Orders for Life-Sustaining Treatment. Topics on the form can include CPR (Do Not Resuscitate orders), intubation and mechanical ventilation, artificial nutrition and hydration, antibiotics, future hospital transfers, and other interventions. MOLST is intended for patients with serious illness or advanced age. It travels with the patient between settings — home, nursing facility, hospital, ambulance — and is honored by emergency responders. MOLST is different from a living will. A living will expresses the patient's wishes; MOLST converts those wishes into a doctor's order that EMS and hospital staff are required to follow. MOLST can be used together with a health care proxy. The patient (or the patient's health care agent if the patient lacks capacity) signs the form along with the clinician."
  },

  whatToAsk: {
    en: [
      "Is the patient seriously ill enough that MOLST is appropriate?",
      "Which interventions does the form address — CPR, intubation, artificial nutrition, antibiotics?",
      "Who will sign the form: the patient, the agent, or both?",
      "Where will the form be kept so EMS and hospital staff can find it?",
      "How is a MOLST updated when wishes or condition change?"
    ]
  },

  related: ["health-care-proxy", "living-will", "power-of-attorney", "guardianship"],
  legalEntryIds: [],

  citation: "NY Public Health Law § 2977; § 2994 (Family Health Care Decisions Act)",
  sourceUrl: "https://www.health.ny.gov/professionals/patients/patient_rights/molst/",
  lastVerified: "2026-04-26",
  status: "active"
};
