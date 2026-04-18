export const CRIMINAL_APPEAL_NY = {
  id: "criminal-appeal-ny",
  category: "criminal",
  tier: "state",
  jurisdiction: "us-ny",
  authorityType: "state-statute",
  status: "active",

  title: { en: "Appealing a Criminal Conviction in New York" },

  summary: {
    en: "If you are convicted of a crime, you generally have the right to appeal. An appeal asks a higher court to review the trial court's decision for legal errors. In New York, the deadline to file a Notice of Appeal is 30 days after sentencing. Free appellate counsel is available for people who cannot afford a private lawyer."
  },

  whoQualifies: {
    en: [
      "Anyone convicted after a trial or, in some cases, after a guilty plea.",
      "The appeal must be filed within 30 days of sentencing — this is a hard deadline.",
      "If you waived your right to appeal as part of a plea agreement, the scope of the appeal may be limited but certain issues (like an illegal sentence) can still be raised."
    ]
  },

  whatItMeans: {
    en: "An appeal is not a new trial. A higher court (the Appellate Division) reviews the written record from the trial court — transcripts, motions, evidence — and decides whether the trial judge made a legal error serious enough to change the outcome. Common grounds for appeal include: the judge admitted evidence that should have been excluded, the jury instructions were wrong, the sentence was illegal or excessively harsh, or the defense lawyer was so ineffective that the defendant did not get a fair trial. The appellate court can affirm the conviction (uphold it), reverse it (throw it out), modify the sentence, or order a new trial. The process takes months to years. Filing the Notice of Appeal within 30 days is critical — missing the deadline usually means the right is lost. After the notice is filed, the appellate court assigns a lawyer if you cannot afford one. The lawyer reviews the record, identifies issues, and writes a brief arguing why the conviction or sentence should be overturned."
  },

  yourRights: {
    en: [
      "You have the right to appeal a conviction after trial.",
      "You have the right to file a Notice of Appeal within 30 days of sentencing.",
      "You have the right to a free appellate lawyer if you cannot afford one.",
      "You have the right to a copy of the trial transcripts (paid by the state if you cannot afford them).",
      "If you lose at the Appellate Division, you can seek leave to appeal to the Court of Appeals (New York's highest court)."
    ]
  },

  legalOptions: {
    en: [
      "The Notice of Appeal must be filed with the clerk of the trial court within 30 days of sentencing. The clerk can provide the form. A copy must be served on the District Attorney.",
      "If you cannot afford a lawyer, the Appellate Division Fourth Department (which covers Monroe County) will assign one from its appellate panel.",
      "The Monroe County Public Defender at (585) 753-4210 can help with the initial Notice of Appeal filing even if appellate counsel will be assigned separately.",
      "Under CPL § 460.10, the notice must state the court being appealed to and be filed within the 30-day window. Late filings are almost never accepted.",
      "While the appeal is pending, you may be able to request release on bail (CPL § 460.50), though this is granted less often than at the trial level."
    ]
  },

  example: {
    en: "After a trial, Jaylen is convicted of a felony and sentenced to prison. His trial lawyer tells him he has 30 days to file a Notice of Appeal. Jaylen files the notice at the county clerk's office the following week. The Appellate Division assigns him an appellate attorney, who reviews the trial record and finds that the judge gave an incorrect instruction to the jury on a key element of the charge. The appellate attorney writes a brief arguing this was reversible error. The Appellate Division agrees and orders a new trial."
  },

  counsel: [
    {
      type: "free",
      name: "Monroe County Public Defender (initial filing)",
      focus: "Filing Notice of Appeal, connecting to appellate counsel",
      qualifier: "Defendants who cannot afford a private attorney",
      access: "Phone or in person",
      outcome: "Initial filing assistance and referral to appellate panel",
      phone: "(585) 753-4210",
      url: "https://www.monroecounty.gov/defender",
      verified: true,
      bilingual: false,
      languages: []
    }
  ],

  relatedIds: [
    "criminal-case-process-ny",
    "sentencing-options-ny",
    "right-to-a-lawyer-ny"
  ],

  relatedHelpResources: [],

  tags: [
    "criminal appeal",
    "appeal conviction",
    "notice of appeal",
    "30 day deadline",
    "appellate division",
    "court of appeals",
    "reversible error",
    "new trial",
    "appellate lawyer",
    "free appeal attorney"
  ],

  sources: [
    "https://www.nysenate.gov/legislation/laws/CPL/A450",
    "https://www.nysenate.gov/legislation/laws/CPL/460.10"
  ],

  lastVerified: "2026-04-16",
  volatility: "low",
  emergencyFlag: false,
  disclaimer: true,
  categoryDisclaimer: null
};
