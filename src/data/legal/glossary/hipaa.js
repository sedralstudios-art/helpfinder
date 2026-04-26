export const HIPAA = {
  id: "hipaa",
  term: { en: "HIPAA" },
  aka: ["Health Insurance Portability and Accountability Act"],
  category: "healthcare",
  subtags: ["health", "privacy", "federal"],

  context: {
    en: "HIPAA is the federal health privacy law. It limits when doctors, hospitals, insurers, and pharmacies can share a patient's health information without permission. It also gives patients the right to see and correct their records."
  },

  plainEnglish: {
    en: "A federal law that protects the privacy of medical records and other personal health information. Doctors, hospitals, pharmacies, health insurers, and most providers (called covered entities) cannot share a patient's health information without permission, with limited exceptions. The exceptions include treatment, payment, health care operations, public health reporting, and court orders. Patients have the right to see their medical records, request a copy, ask for corrections, and request a list of who the records were shared with. Providers must respond within 30 days. A patient can also send a written request restricting disclosures, though providers do not always have to agree. Violations can be reported to the U.S. Department of Health and Human Services Office for Civil Rights. HIPAA covers most health information held by covered entities. It does not cover information shared with employers (outside the health plan), schools, or apps that are not part of a covered entity's network."
  },

  whatToAsk: {
    en: [
      "Who counts as a covered entity for HIPAA in my situation?",
      "How do I request a copy of my medical records?",
      "How can I ask for a correction to inaccurate information?",
      "How do I file a HIPAA complaint with HHS?",
      "What information is not covered by HIPAA?"
    ]
  },

  related: ["medicaid", "managed-care", "discrimination"],
  legalEntryIds: [],

  citation: "45 CFR Parts 160 and 164 (HIPAA Privacy Rule)",
  sourceUrl: "https://www.hhs.gov/hipaa/index.html",
  lastVerified: "2026-04-26",
  status: "active"
};
