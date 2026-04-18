export const SUSPENDED_LICENSE_HARDSHIP_NY = {
  id: "suspended-license-hardship-ny",
  category: "consumer",
  tier: "state",
  jurisdiction: "us-ny",
  authorityType: "state-statute",
  status: "active",

  title: { en: "Driving With a Suspended License — Hardship and Restricted Licenses" },

  summary: {
    en: "If a driver's license is suspended in New York, driving on it is a crime. But in some cases a person can apply for a restricted-use license that allows driving to work, school, or medical appointments. The rules depend on why the license was suspended."
  },

  whoQualifies: {
    en: [
      "Anyone whose New York driver's license has been suspended and who needs to drive for work, school, or medical care.",
      "Anyone whose license was suspended for unpaid tickets or fines.",
      "Anyone whose license was suspended for too many points.",
      "Anyone whose license was suspended for an insurance lapse.",
      "Anyone whose license was revoked for a DWI and who is seeking conditional driving privileges."
    ]
  },

  whatItMeans: {
    en: "When a license is suspended, it means the driving privilege has been taken away temporarily. Driving on a suspended license is a crime under Vehicle and Traffic Law Section 511. A first offense is a misdemeanor with a fine of $200 to $500 and possible jail time of up to 30 days. A third offense within 18 months is a felony. However, the DMV offers a conditional license (sometimes called a restricted license) for some suspensions. A conditional license allows driving to and from work, school, medical appointments, court-ordered programs, and child care. It does not allow general personal driving. To get a conditional license, the driver usually must enroll in the DMV's Driver Responsibility Assessment program or complete a Point and Insurance Reduction Program (PIRP) course. A conditional license is not available for all suspensions. It is generally not available for suspensions related to DWI refusal, three or more alcohol-related offenses, or certain mandatory revocations. For DWI-related revocations, the court may grant a conditional discharge that includes limited driving privileges through the DMV's Drinking Driver Program."
  },

  yourRights: {
    en: [
      "A person whose license is suspended has the right to request a conditional license from the DMV if the suspension qualifies.",
      "A person has the right to a hearing before the DMV takes final action on certain suspensions.",
      "A person who cannot afford to pay outstanding fines can ask the court for a payment plan, which may allow the suspension to be lifted.",
      "A person whose license was suspended for failure to answer a ticket has the right to clear the suspension by appearing in court or paying the fine.",
      "A person has the right to check their license status online at dmv.ny.gov before driving.",
      "A person charged with driving on a suspended license has the right to an attorney and to defend themselves in court."
    ]
  },

  legalOptions: {
    en: [
      "Under VTL Section 511, driving with a suspended license is a misdemeanor for a first offense and can be a felony for repeat offenses within 18 months.",
      "The DMV's Conditional License program allows limited driving for work, school, and medical needs. Information is available at dmv.ny.gov or by calling (518) 486-9786.",
      "The Point and Insurance Reduction Program (PIRP) is a DMV-approved course that reduces up to four points from a driving record and may qualify a driver for a conditional license. Courses are available online and in person.",
      "If the suspension is for unpaid Driver Responsibility Assessment fees, the driver can set up a payment plan with the DMV.",
      "If the suspension is for an unpaid ticket, appearing in the court that issued the ticket and resolving it can lift the suspension.",
      "Free legal help with license suspension issues is available through Legal Aid Society of Rochester at (585) 232-4090."
    ]
  },

  example: {
    en: "Kenji's license was suspended after he got 12 points on his record from multiple speeding tickets. He needed to drive to work at a factory in Gates because there was no bus route. Kenji enrolled in a PIRP course online, which took four points off his record. He applied for a conditional license through the DMV, which allowed him to drive to and from work and to his daughter's daycare. He could not use it for personal errands. After the suspension period ended and he paid his fines, his full license was restored."
  },

  counsel: [
    {
      type: "government",
      name: "NYS DMV — License Suspension and Conditional License",
      focus: "License suspensions, conditional licenses, point reduction",
      qualifier: "Any NYS driver",
      access: "Phone at (518) 486-9786 or online at dmv.ny.gov",
      outcome: "Conditional license processing, suspension clearance",
      phone: "(518) 486-9786",
      url: "https://dmv.ny.gov",
      verified: true,
      bilingual: false,
      languages: []
    },
    {
      type: "free",
      name: "Legal Aid Society of Rochester",
      focus: "Traffic law, license suspension, criminal defense",
      qualifier: "Low income residents of Monroe and surrounding counties",
      access: "Phone intake at (585) 232-4090",
      outcome: "Legal advice and representation",
      phone: "(585) 232-4090",
      url: "https://www.lasroc.org",
      verified: true,
      bilingual: true,
      languages: ["es"]
    }
  ],

  relatedIds: [
    "license-suspension-ny",
    "traffic-ticket-options-ny",
    "speeding-ticket-ny",
    "moving-violation-points-ny",
    "dwi-first-offense-ny",
    "driving-without-insurance-ny"
  ],

  relatedHelpResources: [],

  tags: [
    "suspended license",
    "conditional license",
    "restricted license",
    "hardship license",
    "driving suspended",
    "license points",
    "PIRP course",
    "license revoked",
    "DMV suspension",
    "drive to work suspended"
  ],

  sources: [
    "https://www.nysenate.gov/legislation/laws/VAT/511",
    "https://dmv.ny.gov/tickets/about-nys-driver-point-system"
  ],

  lastVerified: "2026-04-17",
  volatility: "low",
  emergencyFlag: false,
  disclaimer: true,
  categoryDisclaimer: null
};
