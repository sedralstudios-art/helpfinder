export const EMERGENCY_SHELTER_WARMING_CENTER_NY = {
  id: "emergency-shelter-warming-center-ny",
  category: "benefits",
  tier: "county",
  jurisdiction: "us-ny-mon",
  authorityType: "local-ordinance",
  primaryStatute: "NY SOS 131",
  status: "active",

  title: { en: "Emergency Shelter and Warming Centers — Where to Go When There Is No Place to Stay" },

  summary: {
    en: "Monroe County has emergency shelters for people with nowhere to sleep. Rochester has a right-to-shelter policy — the county must provide shelter to anyone who asks and has no safe alternative. Warming centers open during extreme cold. No one needs ID, money, or proof of address to access emergency shelter."
  },

  whoQualifies: {
    en: [
      "Any person in Monroe County who has no safe place to sleep tonight.",
      "Any person who was just evicted, lost their home in a fire, or is fleeing domestic violence.",
      "Any person who is sleeping outside and needs shelter during extreme cold.",
      "Any family with children who is homeless or about to become homeless."
    ]
  },

  whatItMeans: {
    en: "New York Social Services Law Section 131 requires every county to provide temporary shelter to anyone in an emergency who has no other resources. In Monroe County, the emergency shelter system is coordinated through the Department of Human Services. The main access point is the Monroe County Department of Social Services Emergency Services Unit. During business hours, a person can walk in to 111 Westfall Road. After hours, emergency shelter is accessed by calling 211 or the after-hours emergency number. No one is turned away. Identification is not required — though it helps speed the process. The person does not need to be a Monroe County resident. Single adults, families, and youth all have different shelter options. For families with children, the county must provide shelter within 24 hours. The county contracts with shelters and hotels for emergency placements. Warming centers open during Code Blue — activated when the temperature drops below 32 degrees or below 35 degrees with precipitation. During Code Blue, anyone can walk into a warming center and stay the night without any application or paperwork. Rochester has several warming centers run by nonprofit organizations. The 211 hotline has the current list of open warming centers."
  },

  yourRights: {
    en: [
      "Any person in Monroe County who has no safe place to sleep has the right to emergency shelter.",
      "The county cannot require ID, proof of residency, or money to provide emergency shelter.",
      "A family with children must be placed in shelter within 24 hours of requesting help.",
      "A person in shelter has the right to safe and clean conditions, access to food, and a place to store belongings.",
      "A person in shelter cannot be forced to leave without another safe option — the shelter must help with a transition plan.",
      "During Code Blue weather events, warming centers are open to anyone without application or paperwork.",
      "A person fleeing domestic violence can request a DV-specific shelter — these locations are confidential."
    ]
  },

  legalOptions: {
    en: [
      "For emergency shelter during business hours, go to Monroe County DSS at 111 Westfall Road, Rochester, or call (585) 753-6006.",
      "After hours and weekends, call 211 (or 1-877-356-8371) for emergency shelter placement.",
      "For domestic violence shelter, call Willow Domestic Violence Center 24-hour hotline at (585) 222-7233.",
      "For runaway or homeless youth (under 21), call the Center for Youth Services at (585) 473-2464.",
      "The Open Door Mission in Rochester at (585) 442-7130 provides emergency shelter for men.",
      "The Salvation Army at (585) 987-9500 provides emergency services and shelter referrals.",
      "Rochester/Monroe County Homeless Continuum of Care coordinates long-term housing placement.",
      "Legal Aid Society of Rochester at (585) 232-4090 can help if shelter is denied or conditions are unsafe."
    ]
  },

  example: {
    en: "After losing his job and being evicted, Robert had nowhere to go. He walked into Monroe County DSS at 111 Westfall Road and told the intake worker he had no place to stay. He had no ID — his wallet was stolen. The worker placed him in an emergency shelter that night. Over the next two weeks, a case manager helped Robert apply for public assistance, get a replacement ID, and find transitional housing. Robert did not pay for any of this."
  },

  counsel: [
    {
      type: "government",
      name: "Monroe County DSS — Emergency Services",
      focus: "Emergency shelter, temporary housing, homeless services",
      qualifier: "Anyone in Monroe County with no safe place to stay",
      access: "Walk-in at 111 Westfall Road or call (585) 753-6006",
      outcome: "Same-day emergency shelter placement",
      phone: "(585) 753-6006",
      url: "https://www.monroecounty.gov/hs",
      verified: true,
      bilingual: false,
      languages: []
    },
    {
      type: "nonprofit",
      name: "211/LIFE LINE — Emergency Referral",
      focus: "Emergency shelter, warming centers, crisis referral",
      qualifier: "Anyone in the Rochester area",
      access: "Call 211 or 1-877-356-8371, available 24/7",
      outcome: "Immediate referral to shelter, warming centers, emergency services",
      phone: "211",
      url: "https://211lifeline.org",
      verified: true,
      bilingual: true,
      languages: ["es"]
    }
  ],

  relatedIds: [
    "after-a-fire-ny",
    "domestic-violence-legal-options-ny",
    "heap-utility-assistance-ny",
    "tanf-public-assistance-ny",
    "getting-id-documents-ny-program",
    "homeless-student-rights-ny"
  ],

  relatedHelpResources: [],

  tags: [
    "emergency shelter",
    "homeless shelter",
    "warming center",
    "no place to stay",
    "homeless",
    "Code Blue",
    "shelter Rochester",
    "emergency housing",
    "sleeping outside",
    "homeless family",
    "shelter no ID",
    "evicted no home",
    "warming center Rochester",
    "monroe-county"
  ],

  sources: [
    "https://www.nysenate.gov/legislation/laws/SOS/131",
    "https://www.monroecounty.gov/hs",
    "https://211lifeline.org"
  ],

  lastVerified: "2026-04-17",
  volatility: "moderate",
  emergencyFlag: true,
  disclaimer: true,
  categoryDisclaimer: null
};
