export const CRIME_VICTIM_COMPENSATION_NY = {
  id: "crime-victim-compensation-ny",
  category: "criminal",
  tier: "state",
  jurisdiction: "us-ny",
  authorityType: "state-statute",
  status: "active",
  draft: true,

  title: { en: "Crime Victim Compensation — Financial Help After a Crime" },

  summary: {
    en: "If someone is the victim of a violent crime in New York, they may be able to get money from the state to cover medical bills, counseling, lost wages, and funeral costs. The program is run by the NYS Office of Victim Services and covers expenses that insurance does not."
  },

  whoQualifies: {
    en: [
      "Any person who was physically injured as a result of a crime in New York.",
      "Family members of a person who was killed as a result of a crime.",
      "Anyone who witnessed a crime and needs counseling as a result.",
      "A good Samaritan who was injured while trying to prevent a crime or help a victim.",
      "A child victim of abuse or a vulnerable adult victim."
    ]
  },

  whatItMeans: {
    en: "The NYS Office of Victim Services (OVS) runs a compensation program for victims of violent crimes. The program pays for expenses that are not covered by insurance, Medicaid, or other sources. Covered expenses include medical and dental bills, mental health counseling, lost wages and loss of support for dependents, funeral and burial costs, and the cost of crime scene cleanup. The crime must have been reported to police or another law enforcement agency. The claim must be filed within one year of the crime, though extensions are available for good cause — especially for child victims. The victim does not need to be a U.S. citizen. Undocumented victims can file claims. The victim does not need to cooperate with prosecution to be eligible, though cooperation may be considered. OVS is a payer of last resort — it covers what other sources do not. The maximum award varies by expense type but can cover significant costs."
  },

  yourRights: {
    en: [
      "A crime victim has the right to apply for compensation regardless of immigration status.",
      "A victim has the right to file a claim within one year of the crime, with extensions available for good cause.",
      "A victim has the right to have medical, counseling, and lost wage expenses covered when insurance or other sources do not pay.",
      "Family members of a homicide victim have the right to apply for funeral costs and loss of support.",
      "A victim has the right to appeal if a claim is denied.",
      "A victim has the right to a victim advocate who can help with the application process."
    ]
  },

  legalOptions: {
    en: [
      "Claims are filed with the NYS Office of Victim Services at (800) 247-8035 or online at ovs.ny.gov.",
      "The crime must be reported to police or another law enforcement agency. If it was not reported at the time, a report can still be filed.",
      "Claims must be filed within one year of the crime, but OVS can extend this deadline for good cause.",
      "A victim advocate at the Monroe County District Attorney's Office can help with the application at (585) 753-4780.",
      "Restore Sexual Assault Services can help sexual assault victims with OVS claims at (585) 546-2777.",
      "Free legal help with victim compensation claims is available through Legal Aid Society of Rochester at (585) 232-4090."
    ]
  },

  example: {
    en: "Marcus was stabbed during a robbery and spent three days in the hospital. His medical bills totaled $22,000. His health insurance covered most of it, but he had a $3,500 out-of-pocket cost and missed two weeks of work. Marcus filed a claim with OVS through a victim advocate at the DA's office. OVS covered his $3,500 medical costs and $1,800 in lost wages. The process took about three months."
  },

  counsel: [
    {
      type: "government",
      name: "NYS Office of Victim Services",
      focus: "Financial compensation for crime victims — medical, counseling, lost wages, funeral",
      qualifier: "Any crime victim in NYS regardless of immigration status",
      access: "Phone at (800) 247-8035 or online at ovs.ny.gov",
      outcome: "Financial compensation for crime-related expenses",
      phone: "(800) 247-8035",
      url: "https://ovs.ny.gov",
      verified: true,
      bilingual: true,
      languages: ["es"]
    },
    {
      type: "government",
      name: "Monroe County District Attorney — Victim Assistance",
      focus: "Victim advocacy, OVS claims assistance, court accompaniment",
      qualifier: "Crime victims in Monroe County",
      access: "Phone at (585) 753-4780",
      outcome: "Advocacy, claims help, notification of court proceedings",
      phone: "(585) 753-4780",
      url: "https://www.monroecounty.gov/da",
      verified: true,
      bilingual: false,
      languages: []
    }
  ],

  relatedIds: [
    "rights-when-arrested-ny",
    "order-of-protection-ny",
    "sexual-assault-survivors-rights-ny",
    "personal-injury-basics-ny",
    "good-samaritan-law-ny"
  ],

  relatedHelpResources: [],

  tags: [
    "crime victim",
    "victim compensation",
    "OVS",
    "crime victim money",
    "victim assistance",
    "violent crime help",
    "medical bills crime",
    "victim advocate",
    "crime victim fund",
    "homicide victim family"
  ],

  sources: [
    "https://ovs.ny.gov/victim-compensation",
    "https://www.nysenate.gov/legislation/laws/EXC/621"
  ],

  lastVerified: "2026-04-17",
  volatility: "low",
  emergencyFlag: false,
  disclaimer: true,
  categoryDisclaimer: null
};
