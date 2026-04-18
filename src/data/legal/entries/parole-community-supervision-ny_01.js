export const PAROLE_COMMUNITY_SUPERVISION_NY = {
  id: "parole-community-supervision-ny",
  category: "criminal",
  tier: "state",
  jurisdiction: "us-ny",
  authorityType: "state-statute",
  status: "active",

  title: { en: "Parole and Community Supervision in New York" },

  summary: {
    en: "Parole is supervised release from state prison. A person on parole lives in the community under conditions set by the Board of Parole and is supervised by a parole officer employed by the Department of Corrections and Community Supervision (DOCCS). Breaking the conditions can result in being sent back to prison. New York also uses post-release supervision (PRS) for people who have completed their prison sentence but still have a supervision period."
  },

  whoQualifies: {
    en: [
      "Anyone serving a state prison sentence in New York who becomes eligible for release before the maximum term expires.",
      "Anyone required to serve a period of post-release supervision (PRS) after completing a determinate prison sentence.",
      "Family members seeking to understand what parole or PRS means for a loved one."
    ]
  },

  whatItMeans: {
    en: "Parole releases a person from prison before the full sentence is served, under supervision. The Board of Parole decides whether to grant parole based on factors including the crime, behavior in prison, risk assessment, and release plan. Conditions typically include living at an approved address, meeting with a parole officer regularly, maintaining employment, avoiding certain people and places, submitting to drug tests, and not getting arrested. Post-release supervision (PRS) is similar but applies to determinate sentences — the supervision period is set by the judge at sentencing (usually 1.5 to 5 years depending on the offense class) and begins automatically when the prison term ends. Lawful cannabis use cannot be the basis for a parole violation in New York since the 2021 MRTA. If a person violates parole or PRS conditions, DOCCS can issue a warrant, and the person faces a hearing where the violation must be proved. The parole officer has significant discretion — minor violations are often addressed with graduated sanctions rather than revocation."
  },

  yourRights: {
    en: [
      "You have the right to a parole hearing at least once before your maximum term expires (for indeterminate sentences).",
      "You have the right to a written explanation if parole is denied.",
      "You have the right to conditions that are reasonable and clearly communicated.",
      "If accused of a violation, you have the right to a hearing and a lawyer.",
      "Lawful cannabis use cannot be the basis for a parole violation.",
      "You have the right to earn time off supervision through good behavior and program completion.",
      "After at least three years of unrevoked supervision, DOCCS can grant absolute discharge."
    ]
  },

  legalOptions: {
    en: [
      "For parole hearing preparation and representation, contact the Legal Aid Society of Rochester at (585) 232-4090 or LawNY at (585) 295-5700.",
      "If facing a parole violation, you have the right to assigned counsel at the hearing. Contact your parole officer or the hearing facility for assignment.",
      "DOCCS publishes a Community Supervision Handbook that explains all conditions and procedures — ask your parole officer for a copy or visit doccs.ny.gov.",
      "For reentry services (housing, employment, benefits, ID) after release, contact Rochester/Monroe Anti-Poverty Initiative (RMAPI) or the Reentry Resource Center at (585) 371-8200.",
      "Under Executive Law § 259-i, the Board of Parole must consider specified factors when making release and violation decisions."
    ]
  },

  example: {
    en: "After serving four years of a seven-year indeterminate sentence, Daniel appears before the Board of Parole. He completed a vocational program in prison and has a job offer and housing plan in Rochester. The Board grants parole with standard conditions. Daniel checks in with his parole officer weekly, lives at his approved address, and works at the job. After three years without any violations, DOCCS grants Daniel absolute discharge from supervision."
  },

  counsel: [
    {
      type: "free",
      name: "Legal Aid Society of Rochester",
      focus: "Parole hearings, violation defense, reentry",
      qualifier: "Low-income residents of Monroe and surrounding counties",
      access: "Phone intake",
      outcome: "Direct representation or advice",
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
    "clean-slate-ny"
  ],

  relatedHelpResources: [],

  tags: [
    "parole",
    "community supervision",
    "post-release supervision",
    "PRS",
    "DOCCS",
    "parole officer",
    "parole hearing",
    "parole violation",
    "reentry",
    "conditions of release",
    "parole board"
  ],

  sources: [
    "https://www.nysenate.gov/legislation/laws/EXC/259-I",
    "https://doccs.ny.gov"
  ],

  lastVerified: "2026-04-16",
  volatility: "low",
  emergencyFlag: false,
  disclaimer: true,
  categoryDisclaimer: null
};
