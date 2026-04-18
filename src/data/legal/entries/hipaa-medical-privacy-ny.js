export const HIPAA_MEDICAL_PRIVACY_NY = {
  id: "hipaa-medical-privacy-ny",
  category: "benefits",
  tier: "federal",
  jurisdiction: "us-ny",
  authorityType: "federal-statute",
  primaryStatute: "45 CFR PART 164",
  status: "active",

  title: { en: "HIPAA and Medical Privacy — What Your Doctor Can and Cannot Share" },

  summary: {
    en: "HIPAA (the Health Insurance Portability and Accountability Act) is the federal law that protects the privacy of medical records. It limits who can see health information, requires authorization before most disclosures, and gives patients the right to access and correct their own records. Many people hear the word HIPAA but do not understand what it actually covers — and what it does not. HIPAA applies to health care providers, insurers, and their business associates. It does not apply to employers, schools, or random people."
  },

  whoQualifies: {
    en: [
      "Any patient whose health information is held by a covered entity — doctors, hospitals, clinics, pharmacies, health insurers, and their business associates.",
      "HIPAA does not apply to employers (even if they ask about health), schools (they follow FERPA instead), life insurers, or most apps and wearable devices.",
      "Parents can access minor children's records in most situations, but adolescents have some privacy protections in New York for sensitive services (STI treatment, contraception, substance abuse)."
    ]
  },

  whatItMeans: {
    en: "Under HIPAA (45 CFR Parts 160 and 164), covered entities — health care providers, health plans, and clearinghouses — must protect the privacy of individually identifiable health information (called Protected Health Information or PHI). The main rules: providers cannot share PHI with anyone without the patient's written authorization, except for treatment, payment, and health care operations (TPO). Providers can share with other providers for treatment purposes without separate authorization. Providers must give patients a Notice of Privacy Practices at the first visit. Patients have the right to access their own medical records — the provider must respond to a written request within 30 days. Patients have the right to request corrections to their records. Patients can request an accounting of disclosures — a list of everyone the provider shared their information with (outside of TPO). Patients can request restrictions on disclosures, though the provider does not have to agree. There are exceptions to the authorization requirement: mandatory reporting (child abuse, communicable diseases, gunshot wounds), court orders and subpoenas, law enforcement in specific circumstances, and imminent threat to the patient or others. HIPAA violations can be reported to the HHS Office for Civil Rights. The penalties for violations can be substantial — but HIPAA does not create a private right to sue."
  },

  yourRights: {
    en: [
      "The right to a copy of medical records — the provider must respond within 30 days.",
      "The right to request corrections to inaccurate information in the record.",
      "The right to know who the provider has shared information with (accounting of disclosures).",
      "The right to a Notice of Privacy Practices at the first visit.",
      "Providers cannot share health information with employers, family members, or others without written authorization (with limited exceptions).",
      "The right to file a complaint with HHS Office for Civil Rights if privacy is violated."
    ]
  },

  legalOptions: {
    en: [
      "If a provider shares health information without authorization, a complaint can be filed with the HHS Office for Civil Rights at (800) 368-1019 or at hhs.gov/ocr/complaints.",
      "The complaint must be filed within 180 days of the violation (or when the patient learned of it).",
      "For medical records requests that are ignored or delayed, a complaint can also be filed with HHS OCR.",
      "HIPAA does not allow private lawsuits — the enforcement mechanism is the HHS complaint process and state attorney general actions.",
      "Free legal help with medical privacy issues is available through Legal Aid Society of Rochester at (585) 232-4090.",
      "If the violation involves a New York provider, a complaint can also be filed with the NY Attorney General's Health Care Bureau at (800) 771-7755."
    ]
  },

  example: {
    en: "A woman in Rochester visits her doctor for treatment related to a mental health condition. She later discovers that the doctor's office sent her records to her employer without her authorization. She files a complaint with the HHS Office for Civil Rights. OCR investigates and finds that the disclosure violated HIPAA. The doctor's office is required to implement corrective actions and may face a financial penalty."
  },

  counsel: [
    {
      type: "free",
      name: "HHS Office for Civil Rights — HIPAA Complaints",
      focus: "Medical privacy violations, unauthorized disclosures, records access",
      qualifier: "Any patient in the US",
      access: "Phone or online",
      outcome: "Federal investigation, corrective actions, penalties",
      phone: "(800) 368-1019",
      url: "https://www.hhs.gov/ocr/complaints/",
      verified: true,
      bilingual: true,
      languages: ["es"]
    }
  ],

  relatedIds: [
    "patient-rights-hospital-ny",
    "mental-health-patient-rights-ny",
    "health-insurance-denial-ny",
    "medical-billing-disputes-ny"
  ],

  relatedHelpResources: [],

  tags: [
    "HIPAA",
    "medical privacy",
    "health records",
    "medical records",
    "patient privacy",
    "protected health information",
    "PHI",
    "doctor sharing records",
    "medical record request",
    "privacy violation",
    "Notice of Privacy Practices",
    "HHS complaint"
  ],

  sources: [
    "https://www.law.cornell.edu/cfr/text/45/part-164",
    "https://www.hhs.gov/hipaa/for-individuals/index.html"
  ],

  lastVerified: "2026-04-16",
  volatility: "low",
  emergencyFlag: false,
  disclaimer: true,
  categoryDisclaimer: null
};
