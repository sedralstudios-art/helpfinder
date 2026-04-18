export const RECORDING_CONSENT_NY = {
  id: "recording-consent-ny",
  category: "criminal",
  tier: "state",
  jurisdiction: "us-ny",
  authorityType: "state-statute",
  primaryStatute: "NY PEN 250.00",
  status: "active",

  title: { en: "Recording Phone Calls and Conversations — One-Party Consent in New York" },

  summary: {
    en: "New York is a one-party consent state for recording conversations. This means a person can record a phone call or in-person conversation as long as they are a participant — they do not need the other person's permission. But recording a conversation the person is not part of — eavesdropping — is a crime. Understanding this rule matters for protecting evidence in disputes, documenting harassment, and avoiding criminal liability."
  },

  whoQualifies: {
    en: [
      "Any person who wants to record a phone call they are part of.",
      "Any person who wants to record an in-person conversation they are participating in.",
      "Any person who has been recorded without their knowledge and wants to know if it was legal.",
      "Any person considering recording a conversation with a landlord, employer, or other party for evidence."
    ]
  },

  whatItMeans: {
    en: "Under Penal Law § 250.00 and § 250.05, New York uses a one-party consent standard. This means: if the person doing the recording is part of the conversation, no additional consent is needed. The other person does not have to know they are being recorded. But if the person is recording a conversation they are not part of — for example, placing a hidden recorder in a room to capture other people's conversations — that is eavesdropping, which is a class E felony (up to 4 years). Important nuances: recording in public places is generally legal because there is no reasonable expectation of privacy. Video recording without audio in public is legal. Interstate calls: if the person on the other end is in a two-party consent state (like California, Florida, or Illinois), the stricter state's law may apply. The safest approach for interstate calls is to inform the other person. Workplace: employers can record calls if they notify employees (many do through a policy). Employees can record their own workplace conversations under the one-party rule. Court use: recordings made with one-party consent are generally admissible as evidence in New York courts."
  },

  yourRights: {
    en: [
      "A person can record any conversation they are part of — no additional consent needed.",
      "Recording a conversation the person is not part of (eavesdropping) is a felony.",
      "Recordings made with one-party consent are admissible in court.",
      "In public places, there is no expectation of privacy — recording is generally legal.",
      "For interstate calls, the other state's consent law may apply if stricter.",
      "Employers can record calls with employee notice — employees can record their own conversations."
    ]
  },

  legalOptions: {
    en: [
      "If planning to record a conversation for evidence (harassment, threats, landlord disputes, employment issues), the person only needs to be a participant — they do not need to announce the recording.",
      "If recorded without consent by someone who was not part of the conversation, that may be eavesdropping — a criminal offense. Contact the police.",
      "Recordings can be used as evidence in court, at EEOC hearings, at DHR hearings, and in landlord-tenant disputes.",
      "For interstate calls, the safest approach is to say 'I may be recording this call' at the beginning — this satisfies both one-party and two-party consent states.",
      "Free legal advice on recording and evidence issues is available through Legal Aid Society of Rochester at (585) 232-4090."
    ]
  },

  example: {
    en: "A tenant in Rochester records a phone call with her landlord in which the landlord admits he is not going to fix the heat because 'it costs too much.' She does not tell the landlord she is recording. Under New York's one-party consent law, this recording is legal — she is a participant in the conversation. She can use the recording as evidence in an HP proceeding or code enforcement complaint."
  },

  counsel: [
    {
      type: "free",
      name: "Legal Aid Society of Rochester",
      focus: "Evidence issues, recording laws, tenant and employment disputes",
      qualifier: "Low-income residents of Monroe County",
      access: "Phone intake",
      outcome: "Legal advice",
      phone: "(585) 232-4090",
      url: "https://www.lasroc.org",
      verified: true,
      bilingual: true,
      languages: ["es"]
    }
  ],

  relatedIds: [
    "recording-police-ny",
    "tenant-security-camera-ny",
    "harassment-cyberstalking-ny",
    "right-to-remain-silent-ny"
  ],

  relatedHelpResources: [],

  tags: [
    "recording consent",
    "one party consent",
    "record phone call",
    "eavesdropping",
    "Penal Law 250",
    "wiretapping",
    "record conversation",
    "evidence recording",
    "two party consent",
    "interstate recording",
    "record landlord",
    "record employer"
  ],

  sources: [
    "https://www.nysenate.gov/legislation/laws/PEN/250.00",
    "https://www.nysenate.gov/legislation/laws/PEN/250.05"
  ],

  lastVerified: "2026-04-16",
  volatility: "low",
  emergencyFlag: false,
  disclaimer: true,
  categoryDisclaimer: null
};
