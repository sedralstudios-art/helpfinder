export const CITIZENS_ARREST_NY = {
  id: "citizens-arrest-ny",
  category: "criminal",
  tier: "state",
  jurisdiction: "us-ny",
  authorityType: "state-statute",
  primaryStatute: "NY CPL 140.30",
  status: "active",
  draft: true,

  title: { en: "Citizen's Arrest — What Private Citizens Can and Cannot Do in New York" },

  summary: {
    en: "New York law allows a private citizen to make an arrest — but only in very narrow circumstances. A citizen can arrest someone who has actually committed a crime in their presence. If the citizen is wrong — the person did not actually commit the crime — the citizen can be sued for false imprisonment and may face criminal charges themselves. Citizen's arrest is legally risky and rarely advisable. Calling 911 is almost always the better option."
  },

  whoQualifies: {
    en: [
      "Any person who witnessed someone commit a crime and physically detained them until police arrived.",
      "Any person who was detained by a private citizen or a store security guard and wants to know their rights.",
      "Store employees who detain suspected shoplifters — the 'shopkeeper's privilege' provides limited protection.",
      "Anyone considering whether to physically intervene in a crime in progress."
    ]
  },

  whatItMeans: {
    en: "Under Criminal Procedure Law § 140.30, a private citizen can arrest another person when: the person has in fact committed an offense (not just appeared to), and the offense was committed in the citizen's presence. The citizen must use only reasonable force — no more than necessary to detain the person until police arrive. If the citizen is wrong — the person did not commit the crime — the citizen can be liable for: false imprisonment (a civil lawsuit for damages), assault (if excessive force was used), and unlawful imprisonment (a criminal charge). The shopkeeper's privilege (General Obligations Law § 218) provides limited protection for store employees who detain suspected shoplifters in a reasonable manner for a reasonable time while waiting for police. Even under this privilege, the detention must be reasonable — locking someone in a room for hours, using excessive force, or detaining an innocent person creates liability. The safest course in almost every situation is to call 911, be a good witness (description, direction of travel, license plate), and let police handle the arrest."
  },

  yourRights: {
    en: [
      "A private citizen can only arrest someone who has actually committed a crime in their presence.",
      "Only reasonable force can be used — the minimum necessary to detain.",
      "If the citizen is wrong, they can be sued for false imprisonment and may face criminal charges.",
      "A detained person has the right to remain silent and to request that police be called immediately.",
      "Store security can detain suspected shoplifters for a reasonable time — but must call police promptly.",
      "Calling 911 is almost always safer and more effective than attempting a citizen's arrest."
    ]
  },

  legalOptions: {
    en: [
      "If detained by a private citizen or store security: stay calm, state that police should be called, and do not resist physically — resistance can escalate the situation.",
      "If falsely detained by a private citizen or store security, a false imprisonment claim can be filed. Consult an attorney.",
      "If excessive force was used during a citizen's arrest, both criminal charges (assault) and civil claims are available.",
      "Free legal help is available through Legal Aid Society of Rochester at (585) 232-4090.",
      "If considering intervening in a crime: calling 911 and being a good witness protects both the person and the community better than physical intervention in most cases."
    ]
  },

  example: {
    en: "A store security guard in Rochester sees a man put merchandise in his pocket and walk past the register without paying. The guard stops the man at the door and asks him to wait while the manager calls police. This is a lawful shopkeeper's detention — the guard witnessed the act. If the guard had tackled a different customer who looked suspicious but had actually paid for everything, that would be false imprisonment — the guard would be wrong about the crime, and the customer could sue."
  },

  counsel: [
    {
      type: "free",
      name: "Legal Aid Society of Rochester",
      focus: "False imprisonment claims, civil rights, criminal defense",
      qualifier: "Low-income residents of Monroe County",
      access: "Phone intake",
      outcome: "Legal advice and representation",
      phone: "(585) 232-4090",
      url: "https://www.lasroc.org",
      verified: true,
      bilingual: true,
      languages: ["es"]
    }
  ],

  relatedIds: [
    "shoplifting-petit-larceny-ny",
    "self-defense-laws-ny",
    "rights-when-arrested-ny",
    "trespassing-laws-ny"
  ],

  relatedHelpResources: [],

  tags: [
    "citizens arrest",
    "private arrest",
    "CPL 140.30",
    "shopkeeper privilege",
    "false imprisonment",
    "store security",
    "detain shoplifter",
    "reasonable force",
    "GOL 218",
    "wrongful detention",
    "loss prevention",
    "call 911"
  ],

  sources: [
    "https://www.nysenate.gov/legislation/laws/CPL/140.30",
    "https://www.nysenate.gov/legislation/laws/GOB/218"
  ],

  lastVerified: "2026-04-16",
  volatility: "low",
  emergencyFlag: false,
  disclaimer: true,
  categoryDisclaimer: null
};
