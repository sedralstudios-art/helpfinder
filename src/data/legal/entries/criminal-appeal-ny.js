export const CRIMINAL_APPEAL_NY = {
  id: "criminal-appeal-ny",
  category: "criminal",
  tier: "state",
  jurisdiction: "us-ny",
  authorityType: "state-statute",
  primaryStatute: "NY CPL A450",
  status: "active",

  title: { en: "NY Criminal Appeal — Notice of Appeal, 30-Day Deadline, and Path Through the Appellate Division" },

  summary: {
    en: "In New York, a defendant convicted of a crime may appeal under CPL Article 450. A notice of appeal under CPL § 460.10(1)(a) must be filed with the clerk of the trial court within 30 days after imposition of sentence. Most appeals go first to the intermediate appellate court — the Appellate Division of the NY Supreme Court (Fourth Department for Monroe County) — and then by permission to the NY Court of Appeals under CPL § 450.90. An appeal reviews the record for legal error, not a retrial. Assigned counsel is available for indigent appellants."
  },

  whoQualifies: {
    en: [
      "A NY defendant convicted of a crime after trial or plea, with a right to appeal from the judgment under CPL § 450.10.",
      "A defendant challenging a sentence under CPL § 450.30.",
      "A defendant seeking permission to appeal from a ruling that is not appealable as of right under CPL § 450.15.",
      "The People (prosecution), appealing in limited circumstances under CPL § 450.20, § 450.40, § 450.50, and § 450.55.",
      "Any party to an intermediate-appellate-court order seeking permission to appeal to the NY Court of Appeals under CPL § 450.90."
    ]
  },

  whatItMeans: {
    en: "A NY criminal appeal is a review of the written record from the trial court by a higher court — not a new trial. CPL Article 450 lists what may be appealed and to which court. A convicted defendant has a right of appeal under CPL § 450.10 from a judgment of conviction, a sentence, or certain orders entered after the judgment. Sentence challenges proceed under CPL § 450.30. Some rulings are not appealable as of right and require permission (leave) from the appellate court under CPL § 450.15. The People may appeal in narrower circumstances — for example, from a trial order of dismissal under CPL § 450.40 or an order suppressing evidence under CPL § 450.50. The procedure for taking an appeal is governed by CPL § 460.10. A notice of appeal must be filed in duplicate with the clerk of the criminal court in which the sentence was imposed, within 30 days after the imposition of sentence or within 30 days after service of a copy of the order being appealed. The notice must state the court to which the appeal is being taken. The defendant-appellant must also serve a copy of the notice on the District Attorney of the county within the same 30 days. Filing and service complete the taking of the appeal. Missing the 30-day deadline generally forfeits the right of appeal — extensions under CPL § 460.30 require a motion and proof of specific grounds (ineffective assistance of trial counsel on the question of filing, improper conduct by a public servant, or similar). For felony convictions in Monroe County, the intermediate appellate court is the Appellate Division, Fourth Department, which sits in Rochester. For misdemeanor convictions from Rochester City Court or a town or village justice court, the intermediate appellate court is typically the Monroe County Court acting in an appellate capacity. An appeal from the intermediate appellate court to the NY Court of Appeals proceeds under CPL § 450.90 and requires a certificate granting leave from a judge of the Court of Appeals or from the intermediate court. The review itself focuses on legal error preserved on the record. Common grounds include improperly admitted evidence, incorrect jury instructions, an illegal or unlawfully harsh sentence, insufficient trial evidence, and ineffective assistance of trial counsel. The appellate court may affirm the judgment, reverse it, modify it, or order a new trial. An appeal is distinct from a CPL Article 440 post-judgment motion — a 440.10 motion challenges the judgment based on evidence outside the record (such as newly discovered evidence or ineffective-assistance facts not apparent from the transcript). A 440.20 motion challenges the sentence on specific grounds. These are filed in the sentencing court and can run parallel to or after a direct appeal. Indigent defendants have the right to assigned appellate counsel and to a state-paid trial transcript. In Rochester, assigned appellate counsel comes from the Appellate Division Fourth Department's 18-B panel. Because the 30-day notice-of-appeal window is absolute, trial counsel typically files the notice even when appellate counsel has not yet been assigned — preserving the right while the case is transferred. The process from notice-of-appeal filing to appellate decision typically takes a year or more."
  },

  yourRights: {
    en: [
      "A NY defendant has the right under CPL § 450.10 to appeal a judgment of conviction to the intermediate appellate court.",
      "A NY defendant has the right under CPL § 460.10(1)(a) to file a notice of appeal within 30 days after imposition of sentence.",
      "An indigent defendant has the right to assigned appellate counsel at no cost under NY County Law Article 18-B and the constitutional right to counsel on a first appeal of right.",
      "An indigent defendant has the right to a state-paid copy of the trial transcript needed to prepare the appeal.",
      "A party to an intermediate appellate court decision has the right to seek leave to appeal to the NY Court of Appeals under CPL § 450.90.",
      "A defendant has the right in limited circumstances to seek an extension of the 30-day window under CPL § 460.30 based on specific statutory grounds."
    ]
  },

  legalOptions: {
    en: [
      "Monroe County Public Defender Appellate Bureau at (585) 753-4210 — assists with notice of appeal filing and connects to assigned appellate counsel.",
      "Assigned Counsel Program Fourth Department 18-B panel — assigns qualified appellate attorneys to indigent criminal appellants; applications go through the Monroe County Public Defender.",
      "Appellate Division, Fourth Department at 50 East Avenue, Rochester, phone (585) 530-3100 — handles Monroe County felony appeals.",
      "Rochester City Court Clerk at (585) 428-6990 — accepts notice of appeal for Rochester City Court convictions.",
      "Monroe County Court Clerk at 99 Exchange Boulevard, Rochester, (585) 428-5477 — handles felony trial record and notice of appeal filings.",
      "Legal Aid Society of Rochester at (585) 232-4090 — limited role on criminal appeals but may assist on collateral issues.",
      "Empire State Justice Center at (585) 454-4060 — policy and systemic advocacy on appellate rights."
    ]
  },

  example: {
    en: "Jaylen was convicted of a Class D felony after trial in Monroe County Court and sentenced to prison. His trial attorney filed a notice of appeal with the Monroe County Court clerk in duplicate within 10 days of sentencing and served a copy on the Monroe County District Attorney the same day — well within the 30-day deadline under CPL § 460.10(1)(a). Because Jaylen could not afford private counsel, the Appellate Division Fourth Department assigned him an 18-B appellate attorney, who ordered the trial transcripts. The attorney identified an error in the jury charge on the mental-state element and filed a brief. The Appellate Division reversed the conviction under CPL § 450.10 and ordered a new trial."
  },

  counsel: [
    {
      type: "government",
      name: "Monroe County Public Defender — Appellate Bureau",
      focus: "Notice of appeal filing, indigent assigned counsel referral, 18-B coordination",
      qualifier: "Monroe County defendant unable to afford private counsel",
      access: "Phone, in person at 10 North Fitzhugh Street, Rochester",
      outcome: "Free notice-of-appeal preparation and appellate counsel assignment",
      phone: "(585) 753-4210",
      url: "https://www.monroecounty.gov/publicdefender",
      verified: true,
      bilingual: true,
      languages: ["es"]
    },
    {
      type: "government",
      name: "Appellate Division Fourth Department",
      focus: "Intermediate appellate court for Monroe County felony appeals",
      qualifier: "Any party appealing a Monroe County felony conviction",
      access: "Clerk at 50 East Avenue, Rochester",
      outcome: "Appellate decision affirming, reversing, modifying, or remanding",
      phone: "(585) 530-3100",
      url: "https://ad4.nycourts.gov",
      verified: true,
      bilingual: false,
      languages: []
    },
    {
      type: "nonprofit",
      name: "Legal Aid Society of Rochester",
      focus: "Collateral criminal-justice issues during a pending appeal; limited direct appellate role",
      qualifier: "Low-income Monroe County resident",
      access: "Phone intake",
      outcome: "Free legal assistance on related issues",
      phone: "(585) 232-4090",
      url: "https://www.lasroc.org",
      verified: true,
      bilingual: true,
      languages: ["es"]
    }
  ],

  relatedIds: [
    "criminal-case-process-ny",
    "sentencing-options-ny",
    "right-to-a-lawyer-ny"
  ],

  relatedHelpResources: [],

  tags: [
    "NY criminal appeal",
    "CPL 460.10 30 days",
    "CPL Article 450",
    "notice of appeal NY",
    "Appellate Division Fourth Department",
    "NY Court of Appeals leave",
    "assigned appellate counsel 18-B",
    "CPL 440 motion distinction",
    "reversible error NY",
    "Monroe County appellate bureau"
  ],

  sources: [
    "https://www.nysenate.gov/legislation/laws/CPL/A450",
    "https://www.nysenate.gov/legislation/laws/CPL/460.10"
  ],

  lastVerified: "2026-04-21",
  volatility: "low",
  emergencyFlag: false,
  disclaimer: true,
  categoryDisclaimer: null
};
