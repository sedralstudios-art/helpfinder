export const VITAL_RECORDS_REQUEST_NY = {
  id: "vital-records-request-ny",
  category: "government",
  tier: "state",
  jurisdiction: "us-ny",
  authorityType: "state-statute",
  primaryStatute: "NY PBH 4174",
  status: "active",

  title: { en: "NY Vital Records — How to Request Birth, Death, Marriage, and Divorce Certificates" },

  summary: {
    en: "Birth, death, marriage, and divorce certificates in New York are issued by the NY State Department of Health Vital Records for events outside New York City, and by the NYC Department of Health for events in NYC. Basic request costs 30 to 45 dollars per certified copy. Records are typically released to the person named on the record, immediate family, or authorized legal representatives. Same-day expedited service is available for an extra fee."
  },

  whoQualifies: {
    en: [
      "The person named on the certificate (for births, the person named as the child on the birth certificate).",
      "The parent, sibling, spouse, or adult child of the person named.",
      "A legal representative with written authorization (guardian, executor, attorney).",
      "A government agency with a legitimate need (court, Social Security, immigration).",
      "After 75 years for births or 50 years for deaths, records become public and anyone can request."
    ]
  },

  whatItMeans: {
    en: "New York Public Health Law Section 4174 and 10 NYCRR Part 35 govern the issuance of vital records certificates. Vital records include birth certificates, death certificates, marriage certificates, divorce certificates, and fetal death certificates. For events that occurred outside New York City, the NY State Department of Health Vital Records Section in Albany issues certificates. For events in the 5 boroughs of New York City, the NYC Department of Health and Mental Hygiene issues certificates separately. Monroe County residents who were born, married, or divorced in NY outside NYC (including in Rochester or any Monroe County municipality) request through the state office. A certified copy (the official paper document with the state seal suitable for passport applications, Social Security, immigration, etc.) costs 30 dollars through the standard process or up to 45 dollars for expedited. A short-form or informational copy may be available but is not acceptable for most official purposes. Basic request options: (1) Online at health.ny.gov through VitalChek, a third-party service — adds a convenience fee but is fastest (delivered in 1 to 2 weeks), (2) By mail with check and Form DOH-297 — typical processing 3 to 6 weeks, (3) In person at the state vital records office in Menands near Albany or at a local county clerk in some cases for records pertaining to their county. Eligibility is important. The person named on the certificate can always request. Immediate family (parent, spouse, sibling, adult child, grandparent) can request with proof of relationship. An attorney or legal representative needs written authorization. A genealogist researching family history can request records after the privacy period expires — 75 years for births or 50 years for deaths. A person who was adopted has access to the original pre-adoption birth certificate under NY Adoption Records Law (Public Health Law 4138-e) without restriction since 2020. Adoptees can request the original birth certificate from Vital Records to identify biological parents and trace genealogy. Death certificates are generally available to the next of kin, executor, or administrator of the estate, and law enforcement. Marriage certificates are available to either spouse, and to any immediate family after the marriage has been filed. Divorce certificates (different from divorce decrees, which are court documents) are available to either spouse after the divorce is final and filed with Vital Records. Rush / expedited service delivers within 3 business days for an extra 15 dollar fee. Same-day in-person pickup is available only if traveling to the state office in Menands NY — not feasible for most Monroe County residents. For a lost or damaged certificate, a replacement is simply another request. Certified copies can be ordered in bulk (for example, for an estate requiring multiple death certificates for banks, insurers, retirement accounts). Each copy costs the full fee. A Monroe County resident needing a birth certificate for a passport, job, or school should allow 4 to 6 weeks for standard mail ordering or 2 weeks with online VitalChek. Common issues: mismatched names between the request and the record (a married name vs birth name), missing or incomplete information on the request form, or uncertainty about when and where the event occurred. The Vital Records Search function at health.ny.gov/vital_records helps locate a record when the date or location is uncertain. For records of events in NYC, the NYC process is separate at (212) 788-4520 or nyc.gov/health/vital-records. For international citizens needing NY certificates legalized for use overseas, an apostille from the NY Department of State is often required after the certified copy."
  },

  yourRights: {
    en: [
      "The person named on a vital record has the right to request a certified copy.",
      "Immediate family members have the right to request with proof of relationship.",
      "An adoptee has the right to obtain the original pre-adoption birth certificate under PHL 4138-e since 2020.",
      "An estate representative has the right to request multiple death certificates for settlement.",
      "Any person has the right to records of births older than 75 years or deaths older than 50 years for genealogy.",
      "Any requester has the right to expedited service for an additional fee."
    ]
  },

  legalOptions: {
    en: [
      "NY State Department of Health Vital Records at (855) 322-1022 for events outside NYC.",
      "NYC Department of Health and Mental Hygiene at (212) 788-4520 for events in NYC.",
      "VitalChek online at vitalchek.com handles expedited online requests.",
      "Monroe County Clerk at (585) 753-1600 handles county-filed records such as some local marriage records.",
      "NY Department of State at (518) 474-4752 handles apostille for international use.",
      "For assistance with adoptee birth certificate requests, NYSED Adoption Services at (518) 474-2731."
    ]
  },

  example: {
    en: "Rosalind needed a certified copy of her son's Rochester birth certificate for a passport application and a copy of her own birth certificate to prove identity for the passport. She ordered both online through VitalChek for a total of 85 dollars (30 dollars per certificate plus VitalChek processing fees). Both arrived in the mail within 9 days. She used them for her son's passport application and her own Real ID renewal at DMV."
  },

  counsel: [
    {
      type: "government",
      name: "NY State Department of Health Vital Records",
      focus: "Birth, death, marriage, divorce certificates for events outside NYC",
      qualifier: "Eligible person named on record or authorized requester",
      access: "Phone, mail Form DOH-297, online via VitalChek",
      outcome: "Certified copy issuance, expedited processing when requested",
      phone: "(855) 322-1022",
      url: "https://www.health.ny.gov/vital_records",
      verified: true,
      bilingual: true,
      languages: ["es"]
    },
    {
      type: "government",
      name: "Monroe County Clerk",
      focus: "Local certified copies of some marriage records and related filings",
      qualifier: "Monroe County residents for local records",
      access: "Phone, walk-in 39 W Main St",
      outcome: "Local certificate issuance, referral to state vital records",
      phone: "(585) 753-1600",
      url: "https://www.monroecounty.gov/clerk",
      verified: true,
      bilingual: false,
      languages: []
    }
  ],

  relatedIds: [
    "birth-certificate-correction-ny",
    "marriage-license-ny",
    "transfer-deceased-vehicle-title-ny",
    "small-estate-affidavit-ny",
    "name-change-ny"
  ],

  relatedHelpResources: [],

  tags: [
    "vital records NY",
    "birth certificate NY",
    "death certificate NY",
    "marriage certificate NY",
    "PBH 4174",
    "VitalChek",
    "certified copy passport",
    "PHL 4138-e adoptee",
    "DOH-297 form",
    "apostille vital record"
  ],

  sources: [
    "https://www.nysenate.gov/legislation/laws/PBH/4174",
    "https://www.health.ny.gov/vital_records"
  ],

  lastVerified: "2026-04-20",
  volatility: "low",
  emergencyFlag: false,
  disclaimer: true,
  categoryDisclaimer: null
};
