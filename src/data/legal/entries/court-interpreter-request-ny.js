export const COURT_INTERPRETER_REQUEST_NY = {
  id: "court-interpreter-request-ny",
  category: "criminal",
  tier: "state",
  jurisdiction: "us-ny",
  authorityType: "state-regulation",
  primaryStatute: "42 USC 2000D",
  status: "active",

  title: { en: "Court Interpreter Rights in New York — How to Request Free Language or Sign Language Services" },

  summary: {
    en: "A party, witness, or victim in a New York court case has the right to a free court-appointed interpreter for limited English proficiency or deafness. The court schedules the interpreter when notified in advance. Relying on a family member or friend is not permitted for formal proceedings. The rules come from the Unified Court System and federal civil rights law."
  },

  whoQualifies: {
    en: [
      "Any party, witness, or victim in a NY court case whose primary language is not English or who is deaf or hard of hearing.",
      "Parents and legal guardians attending Family Court or school-related proceedings.",
      "People appearing in housing court, traffic court, small claims, family court, criminal court, Supreme Court, and most other NY courts.",
      "Individuals with cognitive disabilities who need an intermediary for court communication (separate accommodation process)."
    ]
  },

  whatItMeans: {
    en: "The New York Unified Court System provides free certified court interpreters under court administration rules (22 NYCRR Part 217) and federal civil rights requirements (Title VI of the Civil Rights Act of 1964, 42 USC Section 2000d). Courts routinely schedule interpreters for Spanish, Mandarin, Cantonese, Russian, Haitian Creole, Arabic, and many other languages. American Sign Language interpreters and Certified Deaf Interpreters are scheduled for deaf and hard-of-hearing parties, witnesses, and spectators at official proceedings. How to request: the party or their attorney notifies the court clerk at least two weeks before the proceeding when possible. For surprise hearings or urgent matters, the court can use interpreter phone services. For complex or specialized cases (medical terminology, technical vocabulary), requesting a specialized interpreter and providing relevant documents in advance improves the quality of interpretation. The interpreter is sworn and interprets everything said in the courtroom — the party's speech to English, and English testimony to the party's language. The interpreter is not allowed to provide legal advice, summarize, or edit. Using a family member or friend is not acceptable for formal court proceedings because of conflicts of interest and accuracy concerns. For informal interactions with court staff (filing documents, asking questions at the clerk's window), some courts have bilingual staff or use phone-based interpretation. Federal immigration courts are separate — interpreters are provided there under EOIR rules. For Family Court child welfare cases (Article 10), the Law Guardian (attorney for the child) and the parent's attorney also have duties to ensure the parent understands the proceedings. A court's failure to provide a competent interpreter when requested can be grounds for a new trial or other relief. The NY Court Language Access page lists available services, request forms, and contact for each court. Telephonic interpretation through services like Language Line is the fallback when an in-person interpreter cannot be scheduled in time, and is acceptable for most short proceedings."
  },

  yourRights: {
    en: [
      "Any party with limited English proficiency has the right to a free court-appointed interpreter.",
      "Deaf and hard-of-hearing parties have the right to ASL or other appropriate interpretation services.",
      "A family member or friend generally cannot serve as the interpreter in formal proceedings.",
      "A party who believes the interpretation was inaccurate has the right to object and request a replacement.",
      "Court documents in some languages may be translated on request — availability varies by court.",
      "A court that failed to provide competent interpretation can be held to have violated due process."
    ]
  },

  legalOptions: {
    en: [
      "Notify the court clerk of the need for an interpreter at least two weeks before the proceeding when possible — give the specific language or indicate ASL.",
      "Monroe County Courts Language Access: call the clerk of the court handling the case. Monroe County Family Court at (585) 371-3544, Monroe County Supreme and County Court at (585) 371-3758.",
      "The NY Unified Court System's Office of Language Access: (646) 386-5670.",
      "For federal court in the Western District of New York: the federal court clerk handles interpreter scheduling at (585) 613-4000.",
      "For immigration court (EOIR) interpreters, the immigration court schedules them — the party does not request separately.",
      "If a court did not provide a competent interpreter and the party was prejudiced, consult an appellate or civil rights attorney. Monroe County Bar Association referral at (585) 546-2130.",
      "For hospital, school, or government-agency interpretation (not court), file a Title VI complaint with the federal agency funding the program or with the NY Attorney General."
    ]
  },

  example: {
    en: "A Spanish-speaking tenant received an eviction notice and was scheduled for a housing court hearing. Two weeks before the hearing, her attorney notified the court that a Spanish interpreter was needed. The court scheduled a certified Spanish interpreter for the entire proceeding at no cost. The interpreter translated the judge's questions to the tenant and her answers to the court. The tenant understood every step and was able to testify about the landlord's failure to repair heat. The case resolved in her favor. Without the interpreter, she would not have been able to present her case effectively — and her due process rights would have been at issue on appeal."
  },

  counsel: [
    {
      type: "government",
      name: "NY Unified Court System — Office of Language Access",
      focus: "Court interpreter scheduling, language access complaints, Title VI",
      qualifier: "Any party in NY court proceedings",
      access: "Phone at (646) 386-5670",
      outcome: "Interpreter scheduling, policy guidance, complaint processing",
      phone: "(646) 386-5670",
      url: "https://www.nycourts.gov/courts/languageaccess",
      verified: true,
      bilingual: true,
      languages: ["es"]
    }
  ],

  relatedIds: [
    "family-court-what-to-expect-ny",
    "traffic-court-what-to-expect-ny-program",
    "small-claims-procedure-ny",
    "court-system-explained-ny-program",
    "ada-title-iii-public-accommodations-ny"
  ],

  relatedHelpResources: [],

  tags: [
    "court interpreter",
    "language access court",
    "22 NYCRR 217",
    "Title VI language",
    "Spanish court interpreter",
    "ASL court",
    "free court interpreter",
    "limited English proficiency court",
    "deaf court interpreter",
    "interpreter request form"
  ],

  sources: [
    "https://www.law.cornell.edu/uscode/text/42/2000d",
    "https://www.law.cornell.edu/cfr/text/28/42.104",
    "https://www.nycourts.gov/courts/languageaccess"
  ],

  lastVerified: "2026-04-27",
  factCheckedBy: { tool: "websearch+webfetch", date: "2026-04-27" },
  volatility: "low",
  emergencyFlag: false,
  disclaimer: true,
  categoryDisclaimer: null
};
