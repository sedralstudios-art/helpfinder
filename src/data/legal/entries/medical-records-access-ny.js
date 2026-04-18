export const MEDICAL_RECORDS_ACCESS_NY = {
  id: "medical-records-access-ny",
  category: "health",
  tier: "state",
  jurisdiction: "us-ny",
  authorityType: "state-statute",
  primaryStatute: "NY PBH 18",
  status: "active",

  title: { en: "Getting Your Medical Records in New York" },

  summary: {
    en: "Every patient has the right to get a copy of their own medical records. Doctors, hospitals, and other providers must give them to you within a reasonable time. New York law limits what they can charge for copies. If a provider refuses, there are ways to enforce the right."
  },

  whoQualifies: {
    en: [
      "Any patient who wants a copy of their own medical records.",
      "A parent or legal guardian requesting records for a child under 18.",
      "A health care proxy or person with power of attorney requesting records for the person they represent.",
      "The personal representative of a deceased person requesting that person's medical records.",
      "Anyone who has been denied access to their own medical records."
    ]
  },

  whatItMeans: {
    en: "Under New York Public Health Law Section 18, every patient has the right to get a copy of their medical records from any health care provider who treated them. This includes doctors, hospitals, clinics, labs, and mental health providers. The provider must make the records available within a reasonable time — the law does not set an exact number of days, but 10 business days is the standard that most providers follow. The provider can charge a fee for copying, but the fee is limited to 75 cents per page under state law. For records sent electronically, the fee must be reasonable and cost-based. Under the federal HIPAA Privacy Rule, patients also have the right to access their records and can request them in electronic format. A provider can deny access in very limited situations — for example, if a mental health professional believes that releasing the records would cause serious harm to the patient. Even then, the provider must give the records to another provider chosen by the patient."
  },

  yourRights: {
    en: [
      "A patient has the right to get a copy of their complete medical record, including notes, test results, imaging, and billing records.",
      "A patient has the right to receive records within a reasonable time, generally 10 business days.",
      "A patient has the right to limit the copying fee — the state cap is 75 cents per page for paper copies.",
      "A patient has the right to request records in electronic format under HIPAA.",
      "A patient has the right to ask that records be sent directly to another doctor or provider.",
      "If a provider refuses to release records, the patient has the right to file a complaint with the NYS Department of Health.",
      "A health care proxy has the right to access the patient's records when the patient cannot make their own decisions."
    ]
  },

  legalOptions: {
    en: [
      "Under Public Health Law Section 18, a provider who refuses to release records can face enforcement action by the NYS Department of Health.",
      "A complaint about a provider refusing to release records can be filed with the NYS Department of Health at (800) 628-5972.",
      "A complaint about HIPAA violations can be filed with the U.S. Department of Health and Human Services Office for Civil Rights at (800) 368-1019 or online at hhs.gov/ocr.",
      "If records are needed urgently for ongoing care, the new provider can send a records request directly to the old provider. Provider-to-provider requests are often processed faster.",
      "Free legal help with medical records access disputes is available through Legal Aid Society of Rochester at (585) 232-4090.",
      "Most hospitals now offer patient portals (like MyChart) where records can be downloaded directly without a formal request."
    ]
  },

  example: {
    en: "Latoya switched doctors and needed her records transferred. She called her old doctor's office and was told it would cost $150 for copying. Latoya knew the state limit was 75 cents per page and that her records were about 40 pages. She asked the office to recalculate. The corrected charge was $30. The records were sent to her new doctor within a week. She also logged into the hospital's MyChart portal and downloaded her lab results and visit summaries for free."
  },

  counsel: [
    {
      type: "government",
      name: "NYS Department of Health — Patient Rights",
      focus: "Complaints about denied medical records, overcharging for copies",
      qualifier: "Any NYS resident",
      access: "Phone at (800) 628-5972",
      outcome: "Investigation and enforcement",
      phone: "(800) 628-5972",
      url: "https://www.health.ny.gov",
      verified: true,
      bilingual: false,
      languages: []
    }
  ],

  relatedIds: [
    "hipaa-medical-privacy-ny",
    "patient-rights-hospital-ny",
    "health-care-proxy-ny",
    "poa-healthcare-proxy-ny"
  ],

  relatedHelpResources: [],

  tags: [
    "medical records",
    "get medical records",
    "doctor records",
    "hospital records",
    "medical records request",
    "medical records fee",
    "HIPAA records",
    "patient portal",
    "MyChart",
    "transfer medical records",
    "medical records denied"
  ],

  sources: [
    "https://www.nysenate.gov/legislation/laws/PBH/18",
    "https://www.hhs.gov/hipaa/for-individuals/right-to-access/index.html"
  ],

  lastVerified: "2026-04-17",
  volatility: "low",
  emergencyFlag: false,
  disclaimer: true,
  categoryDisclaimer: null
};
