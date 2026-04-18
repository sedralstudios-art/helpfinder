export const PUBLIC_RECORDS_REQUEST_NY = {
  id: "public-records-request-ny",
  category: "consumer",
  tier: "state",
  jurisdiction: "us-ny",
  authorityType: "state-statute",
  status: "active",

  title: { en: "Public Records Requests — How to Get Government Documents Through FOIL" },

  summary: {
    en: "New York's Freedom of Information Law (FOIL) gives every person the right to request records from state and local government agencies — police reports, inspection records, emails, contracts, meeting minutes, and more. The agency must respond within 5 business days and provide the records within a reasonable time. If the request is denied, the person can appeal. Many people do not know they can request these records or how easy it is."
  },

  whoQualifies: {
    en: [
      "Any person — FOIL does not require the requester to be a citizen, a resident, or to give a reason for the request.",
      "The request can be for any record held by a New York state or local government agency.",
      "Common requests: police reports, building inspection records, government emails, contracts, meeting minutes, personnel records (with some redactions), and financial records.",
      "FOIL does not apply to federal agencies (use the federal Freedom of Information Act instead) or to private companies."
    ]
  },

  whatItMeans: {
    en: "Under Public Officers Law § 84-90, every person has the right to inspect and copy records maintained by a government agency. The agency must have a Records Access Officer who handles FOIL requests. The request can be made by letter, email, or in some cases through an online portal. The agency must acknowledge the request within 5 business days and either provide the records, give a date by which they will be available, or deny the request with an explanation. Some records are exempt from disclosure: ongoing criminal investigations, personnel records to the extent disclosure would be an unwarranted invasion of privacy, trade secrets, and records that would endanger life or safety. If the request is partially denied, the agency must redact only the exempt portions and release the rest. Fees: the agency can charge $0.25 per page for copies. The first 2 hours of search time are free; after that, the agency can charge the actual cost. If the request is denied, the requester can appeal to the head of the agency within 30 days. If the appeal is denied, the requester can file an Article 78 proceeding in court or complain to the Committee on Open Government."
  },

  yourRights: {
    en: [
      "Any person can request government records — no reason required.",
      "The agency must respond within 5 business days.",
      "Copy fees are capped at $0.25 per page.",
      "If denied, the requester can appeal within 30 days.",
      "The agency must release non-exempt portions even if some parts are redacted.",
      "The Committee on Open Government provides free advisory opinions on FOIL disputes."
    ]
  },

  legalOptions: {
    en: [
      "FOIL requests should be in writing (email is fine) and directed to the agency's Records Access Officer.",
      "The request should be specific enough that the agency can identify the records — 'all emails about X between [dates]' is better than 'everything about X.'",
      "If the agency does not respond within 5 business days, that is a constructive denial — the requester can appeal.",
      "The Committee on Open Government provides free guidance and advisory opinions: (518) 474-2518 or opengovernment.ny.gov.",
      "If the appeal is denied, an Article 78 proceeding can be filed in Supreme Court to compel disclosure.",
      "Free legal help with FOIL requests is available through the NYCLU and through Legal Aid Society of Rochester at (585) 232-4090."
    ]
  },

  example: {
    en: "A homeowner in Rochester wants to see the building inspection records for a property she is considering buying. She sends an email to the City of Rochester's Records Access Officer requesting all inspection reports for the address. The city acknowledges the request within 3 days and provides the records within 2 weeks. The records show multiple code violations that were never resolved — information that affects her decision to buy."
  },

  counsel: [
    {
      type: "free",
      name: "NY Committee on Open Government",
      focus: "FOIL guidance, advisory opinions, open government questions",
      qualifier: "Any person making a FOIL request",
      access: "Phone or online",
      outcome: "Free advisory opinions and guidance",
      phone: "(518) 474-2518",
      url: "https://opengovernment.ny.gov",
      verified: true,
      bilingual: false,
      languages: []
    }
  ],

  relatedIds: [
    "foil-ny",
    "housing-code-violations-ny",
    "get-rap-sheet-ny",
    "patient-rights-hospital-ny"
  ],

  relatedHelpResources: [],

  tags: [
    "FOIL",
    "public records",
    "freedom of information",
    "government records",
    "police report request",
    "inspection records",
    "FOIL request",
    "Public Officers Law 84",
    "records access officer",
    "open government",
    "5 business days",
    "FOIL appeal"
  ],

  sources: [
    "https://www.nysenate.gov/legislation/laws/PBO/84",
    "https://opengovernment.ny.gov"
  ],

  lastVerified: "2026-04-16",
  volatility: "low",
  emergencyFlag: false,
  disclaimer: true,
  categoryDisclaimer: null
};
