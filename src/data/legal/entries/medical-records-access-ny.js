export const MEDICAL_RECORDS_ACCESS_NY = {
  id: "medical-records-access-ny",
  category: "health",
  tier: "state",
  jurisdiction: "us-ny",
  authorityType: "state-statute",
  primaryStatute: "NY PBH 18",
  status: "active",

  title: { en: "Getting Medical Records in New York" },

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
    en: "Two legal regimes govern medical-records access in New York. State law (Public Health Law 18) and federal law (the HIPAA Privacy Rule, 45 CFR Part 164) run in parallel. A patient typically gets the broader of the two protections, since state law caps the copying fee and federal law guarantees electronic access.\n\nWho is covered. Every patient has the right to obtain a copy of their own medical records from any health care provider who treated them. That includes doctors, hospitals, clinics, labs, imaging centers, mental health providers, substance use treatment programs, chiropractors, and dentists. The right applies whether the provider is in-network, out-of-network, or no longer practicing.\n\nWhat records are covered. The right extends to the complete record — progress notes, test results, imaging studies, hospital discharge summaries, prescription records, and billing records. Mental health notes are included, with a narrow exception discussed below. Records from more than 6 years ago may not be available if the provider followed retention-schedule destruction, but current and recent records always are.\n\nHow long the provider has to respond. Public Health Law 18 requires release within a reasonable time. Most providers follow a 10-business-day standard, which tracks the state guidance. HIPAA sets a separate 30-day standard. A provider who fails to respond within 30 days is in federal noncompliance regardless of state law.\n\nCopying fees. New York caps the copying fee at 75 cents per page for paper copies. For records sent electronically, the fee has to be reasonable and cost-based — in practice usually $0 to $25 flat. A provider that bills $1 per page or charges an excessive electronic-delivery fee is violating state law.\n\nFee waiver for legal proceedings. Public Health Law 18 also requires providers to release records at no charge when the records are needed for a claim for Social Security benefits, Supplemental Security Income (SSI), Workers' Compensation, or a public assistance application. A doctor's office that charges for records requested for an SSI claim is violating the statute.\n\nElectronic records access. Under HIPAA, patients can request records in electronic format when the provider maintains them electronically. Most providers now offer a patient portal (MyChart, Follow My Health, etc.) for free electronic access. Requesting through the portal is usually faster and free compared with a paper request.\n\nMental health records exception. A mental health professional can deny access under Public Health Law 18(3) if they believe in good faith that releasing the records would cause serious harm to the patient or others. Even in that case, the provider has to give the records to another mental health professional chosen by the patient. The substitute-provider pathway preserves the patient's access through a clinical intermediary.\n\nHealthcare proxy and power of attorney access. A healthcare proxy (under Public Health Law 2981) can access the patient's records when the patient lacks capacity to make decisions. A power of attorney agent can access records when the POA includes health care or medical records authority. For a minor child, a parent or legal guardian can access the child's records in most cases.\n\nDeceased patients. The executor or administrator of the estate, or the closest next of kin if no executor has been appointed, can access a deceased patient's records under Public Health Law 18(2)(c).\n\nWhat to do when refused. A patient whose records request is refused, delayed beyond reasonable time, or met with excessive fees can file a complaint with the NYS Department of Health at (800) 628-5972. HIPAA complaints go to the U.S. Department of Health and Human Services Office for Civil Rights at (800) 368-1019 or hhs.gov/ocr. Both agencies investigate and can assess penalties."
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

  lastVerified: "2026-04-23",
  volatility: "low",
  emergencyFlag: false,
  disclaimer: true,
  categoryDisclaimer: null
};
