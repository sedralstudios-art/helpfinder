export const GET_RAP_SHEET_NY = {
  id: "get-rap-sheet-ny",
  category: "criminal",
  tier: "state",
  jurisdiction: "us-ny",
  status: "active",

  title: { en: "How to Get Your Criminal Record (RAP Sheet) in New York" },

  summary: {
    en: "A RAP sheet (Record of Arrest and Prosecution) is the official record of a person's criminal history in New York. Getting a copy helps with sealing applications, employment disputes, and understanding what background checks will show. The process is done by mail through the Division of Criminal Justice Services (DCJS) and requires fingerprinting."
  },

  whoQualifies: {
    en: [
      "Any person can request their own RAP sheet.",
      "Anyone preparing a CPL § 160.59 sealing application needs to know what is on their record.",
      "Anyone who has been denied a job or housing based on a background check and wants to verify what the official record shows.",
      "Anyone who believes their record contains errors."
    ]
  },

  whatItMeans: {
    en: "The RAP sheet is maintained by the NY Division of Criminal Justice Services (DCJS). It shows every arrest, charge, and disposition (outcome) in New York. It may also include out-of-state convictions if they were reported to New York. Sealed and dismissed cases should NOT appear on the RAP sheet. If a sealed case does appear, that is an error that can be corrected. To request a copy, the person must be fingerprinted — the fingerprints are used to match the request to the correct record. The fingerprinting can be done at a local police station or at a facility that provides the service. The completed fingerprint card and a request form are mailed to DCJS. The RAP sheet is returned by mail directly to the person. Private background check companies (used by employers and landlords) pull from different databases and may show different information than the DCJS RAP sheet. If there is a discrepancy, the DCJS record is the official state record."
  },

  yourRights: {
    en: [
      "Every person has the right to see their own criminal history record.",
      "Sealed and dismissed cases should not appear — if they do, a correction can be requested.",
      "The RAP sheet is sent only to the person who requested it — not to anyone else.",
      "Errors on the RAP sheet can be challenged through DCJS.",
      "Private background check companies that report sealed or incorrect information are in violation of state law and the FCRA."
    ]
  },

  legalOptions: {
    en: [
      "The RAP sheet request process starts with fingerprinting. In Monroe County, fingerprinting is available at the Rochester Police Department and at some UPS Store locations (call ahead to confirm).",
      "The fingerprint card and request form are mailed to: DCJS, Record Review Unit, Alfred E. Smith Building, 80 S Swan St, Albany, NY 12210.",
      "The current fee was modest as of April 2026 (subject to change — verify at criminaljustice.ny.gov/ojis/recordreview.htm).",
      "If the RAP sheet contains errors — wrong name, sealed cases showing, incorrect dispositions — a correction request can be submitted to DCJS.",
      "Free legal help with RAP sheet review and correction is available through Legal Aid Society of Rochester at (585) 232-4090."
    ]
  },

  example: {
    en: "A woman in Rochester applies for a job and is told her background check shows an arrest from 15 years ago that was dismissed. She requests her RAP sheet from DCJS to see the official record. The RAP sheet confirms the case was dismissed and should be sealed. She contacts Legal Aid, which sends a correction request to DCJS and a dispute to the background check company. The dismissed case is removed from both records."
  },

  counsel: [
    {
      type: "free",
      name: "DCJS Record Review Unit",
      focus: "RAP sheet requests, record corrections",
      qualifier: "Any person requesting their own record",
      access: "By mail",
      outcome: "Official criminal history record",
      phone: "(518) 457-9847",
      url: "https://criminaljustice.ny.gov/ojis/recordreview.htm",
      verified: true,
      bilingual: false,
      languages: []
    }
  ],

  relatedIds: [
    "seal-your-record-ny",
    "clean-slate-ny",
    "background-check-rights-ny",
    "credit-report-dispute-ny"
  ],

  relatedHelpResources: [],

  tags: [
    "RAP sheet",
    "criminal record",
    "criminal history",
    "DCJS",
    "background check",
    "record review",
    "fingerprinting",
    "what's on my record",
    "sealed case showing",
    "record error",
    "record correction"
  ],

  sources: [
    "https://www.nysenate.gov/legislation/laws/CPL/160.59",
    "https://www.nysenate.gov/legislation/laws/CPL/160.55",
    "https://criminaljustice.ny.gov/ojis/recordreview.htm"
  ],

  lastVerified: "2026-04-16",
  volatility: "low",
  emergencyFlag: false,
  disclaimer: true,
  categoryDisclaimer: null
};
