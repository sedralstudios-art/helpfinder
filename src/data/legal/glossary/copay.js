export const COPAY = {
  id: "copay",
  term: { en: "Co-Pay" },
  aka: ["Copay", "Copayment", "Co-Payment"],
  category: "benefits",
  subtags: ["health", "program-jargon"],

  context: {
    en: "You hear this at a doctor's office, pharmacy, or clinic. It is the small amount you pay out of pocket each time you use a service, even if insurance covers the rest."
  },

  plainEnglish: {
    en: "A fixed dollar amount the patient pays each time they see a doctor, fill a prescription, or use certain health services. Insurance pays the rest. For Medicaid in New York, most services have no co-pay at all. For other insurance, co-pay amounts depend on the type of visit and the plan; current co-pay schedules are at the insurer's member portal. Some clinics waive co-pays or use a sliding scale for patients who cannot pay. Emergency rooms cannot turn a patient away for inability to pay."
  },

  whatToAsk: {
    en: [
      "Does my insurance require a co-pay for this visit?",
      "How much is the co-pay for my prescription?",
      "Is there a way to get the co-pay waived or reduced?",
      "Does Medicaid cover this with no co-pay?"
    ]
  },

  related: ["medicaid", "sliding-scale", "fpl"],
  legalEntryIds: [],

  citation: "Common insurance term; Medicaid co-pay rules at 42 CFR § 447",
  sourceUrl: "https://www.law.cornell.edu/cfr/text/42/part-447",
  lastVerified: "2026-04-16",
  status: "active"
};
