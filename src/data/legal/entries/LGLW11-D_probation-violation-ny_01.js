export const PROBATION_VIOLATION_NY = {
  id: "probation-violation-ny",
  category: "criminal",
  tier: "state",
  jurisdiction: "us-ny",
  status: "active",

  title: { en: "Probation Violation — What Happens and What a Person Can Do" },

  summary: {
    en: "A person on probation who breaks a condition — missing a meeting with the probation officer, failing a drug test, getting arrested, or traveling without permission — can be brought back to court. A probation violation does not automatically mean jail. The judge decides what happens, and the person has the right to a hearing."
  },

  whoQualifies: {
    en: [
      "Any person who has been told they violated probation.",
      "Any person who received a violation notice or warrant for a probation violation.",
      "Any person on probation who missed an appointment or failed a drug test and is worried about the consequences.",
      "Any family member of someone facing a probation violation."
    ]
  },

  whatItMeans: {
    en: "Under CPL Section 410.70, when a probation officer believes the person violated a condition of probation, the officer files a violation petition with the court. The judge can issue a warrant for the person's arrest or a summons to appear. At the violation hearing, the standard of proof is lower than at a trial — the prosecution only needs to prove the violation by a preponderance of the evidence (more likely than not), not beyond a reasonable doubt. If the judge finds a violation, the options include continuing probation with the same conditions, modifying probation with stricter conditions (more reporting, drug treatment, community service), revoking probation and imposing the original sentence (including jail or prison time). The judge considers the nature of the violation, the person's history on probation, and whether the person is making progress. A technical violation (missed appointment, failed drug test) is treated differently from a new arrest. Many judges give a second chance on first-time technical violations, especially if the person is otherwise compliant. The person has the right to a lawyer at the violation hearing. If they cannot afford one, the court will assign a public defender or assigned counsel."
  },

  yourRights: {
    en: [
      "A person accused of violating probation has the right to a hearing before a judge. Probation cannot be revoked without a hearing (CPL Section 410.70).",
      "A person has the right to a lawyer at the violation hearing. If they cannot afford a lawyer, one will be appointed.",
      "A person has the right to present evidence and call witnesses at the violation hearing.",
      "A person has the right to know the specific conditions they are accused of violating.",
      "The prosecution must prove the violation by a preponderance of evidence — a lower standard than at trial, but still a standard.",
      "A judge can continue probation, modify conditions, or revoke probation — revocation is not automatic.",
      "A person who is arrested on a violation warrant has the right to a prompt hearing — they cannot be held indefinitely."
    ]
  },

  legalOptions: {
    en: [
      "Monroe County Public Defender's Office at (585) 753-4210 represents people facing probation violations who cannot afford a lawyer.",
      "Assigned Counsel Program at (585) 753-4264 provides attorneys when the Public Defender has a conflict.",
      "Monroe County Probation Department at (585) 753-4000 supervises probation and can answer questions about conditions.",
      "If a person missed a probation appointment, calling the probation officer immediately and explaining the reason is almost always better than waiting to be violated.",
      "Drug treatment and mental health treatment compliance can be a strong argument for continuing probation rather than revocation.",
      "If the violation is based on a new arrest, the person has the right to separate proceedings — the violation hearing and the new criminal case are handled independently."
    ]
  },

  example: {
    en: "Tamika was on probation for a misdemeanor in Rochester. She missed two meetings with her probation officer because she started a new job and the hours conflicted. Her probation officer filed a violation petition. At the hearing, Tamika's assigned attorney presented her new work schedule and pay stubs. The judge modified her probation to allow phone check-ins instead of in-person meetings during work hours. Probation continued — no jail time."
  },

  counsel: [
    {
      type: "government",
      name: "Monroe County Public Defender's Office",
      focus: "Criminal defense, probation violations, violation hearings",
      qualifier: "Defendants who cannot afford a private attorney",
      access: "Phone at (585) 753-4210",
      outcome: "Representation at violation hearings",
      phone: "(585) 753-4210",
      url: "https://www.monroecounty.gov/defender",
      verified: true,
      bilingual: false,
      languages: []
    },
    {
      type: "government",
      name: "Monroe County Probation Department",
      focus: "Probation supervision, reporting, violation proceedings",
      qualifier: "People on probation in Monroe County",
      access: "Phone at (585) 753-4000",
      outcome: "Supervision, condition modification, violation filing",
      phone: "(585) 753-4000",
      url: "https://www.monroecounty.gov/probation",
      verified: true,
      bilingual: false,
      languages: []
    }
  ],

  relatedIds: [
    "probation-basics-ny",
    "parole-basics-ny",
    "criminal-case-process-ny",
    "right-to-a-lawyer-ny",
    "drug-possession-basics-ny",
    "missed-court-warrant-ny"
  ],

  relatedHelpResources: [],

  tags: [
    "probation violation",
    "violated probation",
    "missed probation",
    "probation revocation",
    "failed drug test probation",
    "probation hearing",
    "probation warrant",
    "probation conditions",
    "technical violation",
    "probation jail",
    "probation officer"
  ],

  sources: [
    "https://www.nysenate.gov/legislation/laws/CPL/410.70",
    "https://www.nycourts.gov/courthelp/criminal/probation.shtml"
  ],

  lastVerified: "2026-04-17",
  volatility: "low",
  emergencyFlag: false,
  disclaimer: true,
  categoryDisclaimer: null
};
