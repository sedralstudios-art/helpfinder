export const COURT_SYSTEM_EXPLAINED_NY = {
  id: "court-system-explained-ny",
  category: "criminal",
  tier: "state",
  jurisdiction: "us-ny",
  status: "active",

  title: { en: "Which Court Is My Case In? Understanding New York's Court System" },

  summary: {
    en: "New York has one of the most complicated court systems in the country. There are town courts, village courts, city courts, county courts, Supreme Court (which is NOT the highest court), Family Court, Surrogate's Court, and appellate courts — each with different jurisdiction. Cases can be transferred between courts, sometimes without anyone explaining why. This guide explains which court handles what, so nobody walks into the wrong building."
  },

  whoQualifies: {
    en: [
      "Anyone with a case in a New York court who is not sure which court it is in or why.",
      "Anyone whose case was moved from one court to another.",
      "Anyone trying to figure out where to file a new case — small claims, family, criminal, housing, or civil."
    ]
  },

  whatItMeans: {
    en: "New York's court system has multiple levels and types, each handling different cases. Town and Village Justice Courts: handle traffic tickets, small claims (up to $3,000 in village, $5,000 in town), minor criminal cases, and landlord-tenant disputes in the areas they serve. These are part-time courts — the judges are often not lawyers (called justices of the peace). Rochester City Court: handles traffic, criminal (misdemeanors and arraignment on felonies), small claims (up to $5,000), housing court disputes, and civil cases up to $15,000 for the city of Rochester. Monroe County Court: handles felony criminal cases after indictment. County Court judges also sit as acting Supreme Court judges. Supreme Court: despite the name, this is NOT the highest court in New York. Supreme Court handles: civil cases over $25,000, divorce and matrimonial cases, mortgage foreclosure, Article 81 guardianship, and felony criminal cases. It is the court of 'general jurisdiction.' Family Court: handles custody, visitation, child support, family offense petitions (orders of protection between family members), juvenile delinquency, PINS, and child protective (Article 10) proceedings. Family Court does NOT handle divorce. Surrogate's Court: handles wills, probate, estate administration, and adoption. Appellate Division (Fourth Department, covering Monroe County): hears appeals from lower courts. The highest court is the Court of Appeals in Albany. Cases can move between courts for specific reasons — a felony arraignment in city court moves to county court after indictment, a Family Court custody issue connected to a Supreme Court divorce may be referred between the two, and some cases are transferred when courts have overlapping jurisdiction."
  },

  yourRights: {
    en: [
      "The right to know which court the case is in and why.",
      "The right to be notified if a case is transferred to a different court.",
      "The right to appear in the correct court — if unclear, the clerk's office can confirm the location and schedule.",
      "The right to a lawyer in any court proceeding where jail is a possibility (criminal cases, contempt, some Family Court matters).",
      "Every court has a clerk's office that can answer basic procedural questions — which courtroom, what time, what to bring."
    ]
  },

  legalOptions: {
    en: [
      "If unsure which court a case is in, the Monroe County Clerk at (585) 753-1600 can search by name for Supreme Court and County Court cases.",
      "Rochester City Court's clerk can be reached at (585) 428-2444 for city court cases.",
      "Monroe County Family Court's clerk can be reached at (585) 753-5600.",
      "Monroe County Surrogate's Court's clerk can be reached at (585) 753-1860.",
      "For town and village court cases, the court listed on the ticket or summons has the information. Court schedules vary — many hold sessions only one or two evenings per month.",
      "The NY Courts website at nycourts.gov has a court locator and general information about each court type."
    ]
  },

  example: {
    en: "A man in Rochester is arraigned on a felony charge in Rochester City Court. He is confused when told his next appearance will be at Monroe County Court instead. His public defender explains: city court handles the initial arraignment, but after the grand jury votes to indict, the felony case moves to county court for all further proceedings. The court buildings are different but both are at the Hall of Justice, 99 Exchange Blvd — just different floors."
  },

  counsel: [
    {
      type: "free",
      name: "Monroe County Clerk — Case Search",
      focus: "Case lookup for Supreme Court and County Court",
      qualifier: "Anyone with a case in Monroe County",
      access: "Phone or in person",
      outcome: "Case number, court location, scheduled dates",
      phone: "(585) 753-1600",
      url: "https://iapps.courts.state.ny.us/webcivil/ecourtsMain",
      verified: true,
      bilingual: false,
      languages: []
    },
    {
      type: "free",
      name: "Rochester City Court Clerk",
      focus: "City court case information — criminal, traffic, housing, civil, small claims",
      qualifier: "Anyone with a case in Rochester City Court",
      access: "Phone",
      outcome: "Case status, court dates, courtroom location",
      phone: "(585) 428-2444",
      url: "https://ww2.nycourts.gov/courts/7jd/courts/city/",
      verified: true,
      bilingual: false,
      languages: []
    }
  ],

  relatedIds: [
    "criminal-case-process-ny",
    "right-to-a-lawyer-ny",
    "small-claims-procedure-ny",
    "divorce-separation-ny",
    "traffic-ticket-options-ny"
  ],

  relatedHelpResources: [],

  tags: [
    "court system",
    "which court",
    "town court",
    "city court",
    "county court",
    "Supreme Court NY",
    "Family Court",
    "Surrogate Court",
    "court transfer",
    "wrong court",
    "court explained",
    "Hall of Justice",
    "court locator"
  ],

  sources: [
    "https://www.nycourts.gov/courts/",
    "https://ww2.nycourts.gov/courts/7jd/"
  ],

  lastVerified: "2026-04-16",
  volatility: "low",
  emergencyFlag: false,
  disclaimer: true,
  categoryDisclaimer: null
};
