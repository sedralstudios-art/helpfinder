export const PRIOR_AUTHORIZATION = {
  id: "prior-authorization",
  term: { en: "Prior Authorization" },
  aka: ["Prior Auth", "Pre-Authorization", "PA"],
  category: "benefits",
  subtags: ["health", "program-jargon"],

  context: {
    en: "You hear this when a doctor wants to order a test, procedure, medication, or specialist visit and the insurance company says it needs to approve it first. It can delay care by days or weeks."
  },

  plainEnglish: {
    en: "A requirement by your insurance that a doctor get permission before providing certain services. The doctor submits paperwork explaining why the service is needed. The insurance company reviews it and says yes or no. If they say no, the doctor can appeal. If you get the service without prior authorization, insurance may refuse to pay. Medicaid and most managed care plans in New York use prior authorization for some prescriptions, imaging (like MRIs), surgeries, and specialist visits. Emergency care never requires prior authorization."
  },

  whatToAsk: {
    en: [
      "Does this service need prior authorization from my insurance?",
      "Has the prior authorization been submitted yet?",
      "How long will it take to get approved?",
      "What happens if it is denied — is there an appeal?",
      "Is there anything I can do to speed it up?"
    ]
  },

  related: ["copay", "medicaid", "sliding-scale"],
  legalEntryIds: [],

  citation: "Common insurance term; NY Insurance Law § 4903 (utilization review)",
  sourceUrl: "https://www.nysenate.gov/legislation/laws/ISC/4903",
  lastVerified: "2026-04-16",
  status: "active"
};
