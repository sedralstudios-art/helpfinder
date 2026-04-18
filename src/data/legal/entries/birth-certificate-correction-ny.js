export const BIRTH_CERTIFICATE_CORRECTION_NY = {
  id: "birth-certificate-correction-ny",
  category: "family",
  tier: "state",
  jurisdiction: "us-ny",
  authorityType: "state-statute",
  status: "active",

  title: { en: "Correcting or Amending a Birth Certificate in New York" },

  summary: {
    en: "Birth certificates sometimes contain errors — a misspelled name, incorrect date, wrong parent listed, or missing information. New York allows corrections and amendments through the Department of Health (for births outside NYC) or the NYC Department of Health (for NYC births). Some changes are administrative (simple corrections) and some require a court order. Understanding which process applies determines how long it takes and what it costs."
  },

  whoQualifies: {
    en: [
      "Any person whose birth certificate contains an error — name spelling, date of birth, parent information, place of birth.",
      "Any person who needs to add a parent (paternity acknowledgment) or remove a parent from the birth certificate.",
      "Any person seeking to change the gender designation on their birth certificate (see the gender marker change entry for details).",
      "Parents, legal guardians, or the person themselves (if 18 or older) can request corrections."
    ]
  },

  whatItMeans: {
    en: "For births registered in New York State (outside NYC): the NY Department of Health Vital Records Section handles corrections. Minor clerical errors (misspellings, transposed numbers) can be corrected administratively by submitting an Application for Correction along with supporting documents (hospital records, other IDs showing the correct information). More substantial changes — adding or changing a parent's name, changing the child's surname, correcting the date of birth when records conflict — may require a court order from the Supreme Court or Family Court. For births registered in New York City: the NYC Department of Health has its own process and forms, which are similar but separate. Adding a father to a birth certificate can be done by filing an Acknowledgment of Paternity — both parents sign the form, and the birth certificate is amended to include the father. This can be done at the hospital at birth or at any time afterward through Vital Records. If there is a dispute about paternity, a Family Court order is required. The fee for amending a birth certificate varies — check with the issuing agency for current fees. Fee waivers may be available in some circumstances."
  },

  yourRights: {
    en: [
      "The right to a birth certificate that accurately reflects the correct information.",
      "Minor errors can be corrected administratively without going to court.",
      "A father can be added to the birth certificate through a voluntary Acknowledgment of Paternity.",
      "Gender designation can be changed to M, F, or X by self-attestation (no court order required).",
      "The person named on the certificate (if 18+), a parent, or a legal guardian can request the correction.",
      "If a court order is required, the court cannot deny the correction if the evidence supports it."
    ]
  },

  legalOptions: {
    en: [
      "For NYS births (outside NYC): applications are submitted to the NY Department of Health Vital Records Section. Phone: (855) 322-1022. Website: health.ny.gov.",
      "For NYC births: applications go to the NYC Department of Health Bureau of Vital Records. Phone: (212) 788-4520. Website: nyc.gov/vitalrecords.",
      "For corrections requiring a court order, the petition is filed in the Supreme Court or Family Court of the county where the person was born or currently lives.",
      "For adding a father (Acknowledgment of Paternity), the form can be completed at the hospital at birth or later through the Vital Records office or the Registrar of Vital Statistics.",
      "Free legal help with birth certificate issues is available through Legal Aid Society of Rochester at (585) 232-4090."
    ]
  },

  example: {
    en: "A man born in Rochester discovers that his birth certificate has his first name misspelled — 'Joesph' instead of 'Joseph.' He contacts the NY Department of Health Vital Records, submits the correction application with a copy of his hospital birth record showing the correct spelling, and receives a corrected birth certificate. The correction is administrative — no court order is needed."
  },

  counsel: [
    {
      type: "free",
      name: "NY Department of Health — Vital Records",
      focus: "Birth certificate corrections, amendments, copies",
      qualifier: "Any person born in New York State (outside NYC)",
      access: "Phone or mail",
      outcome: "Corrected or amended birth certificate",
      phone: "(855) 322-1022",
      url: "https://www.health.ny.gov/vital_records/",
      verified: true,
      bilingual: false,
      languages: []
    }
  ],

  relatedIds: [
    "name-change-ny",
    "gender-marker-change-ny",
    "getting-id-documents-ny",
    "paternity-rights-ny"
  ],

  relatedHelpResources: [],

  tags: [
    "birth certificate",
    "birth certificate correction",
    "amend birth certificate",
    "name spelling birth certificate",
    "add father birth certificate",
    "paternity acknowledgment",
    "vital records",
    "birth certificate error",
    "birth certificate copy",
    "gender marker birth certificate"
  ],

  sources: [
    "https://www.health.ny.gov/vital_records/",
    "https://www.nysenate.gov/legislation/laws/PBH/4138"
  ],

  lastVerified: "2026-04-16",
  volatility: "low",
  emergencyFlag: false,
  disclaimer: true,
  categoryDisclaimer: null
};
