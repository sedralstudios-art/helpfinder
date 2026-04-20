export const VOTER_REGISTRATION_DEADLINE_NY = {
  id: "voter-registration-deadline-ny",
  category: "government",
  tier: "state",
  jurisdiction: "us-ny",
  authorityType: "state-statute",
  primaryStatute: "NY ELN 5-210",
  status: "active",

  title: { en: "NY Voter Registration Deadline — 10 Days Before Election Day" },

  summary: {
    en: "New York Election Law Section 5-210 sets the voter registration deadline at ten days before a general, primary, or special election. Registration can be done by mail, online at voterreg.dmv.ny.gov, or in person at any Monroe County Board of Elections office. A voter who misses the deadline can still vote by provisional (affidavit) ballot on Election Day under certain conditions."
  },

  whoQualifies: {
    en: [
      "Any U.S. citizen age 18 or older on the date of the election living in New York.",
      "Any 16 or 17 year old can pre-register so voting begins automatically at 18.",
      "Any Monroe County resident moving from another New York county needs to re-register with the new address.",
      "Any NY voter who changed names needs to update registration before the deadline."
    ]
  },

  whatItMeans: {
    en: "New York Election Law Section 5-210 sets the main voter registration deadline at ten days before a general, primary, special, or village election. A form received or postmarked by the tenth day before Election Day is on time. The same ten-day rule applies to changes of party affiliation, name changes, and address changes. For the 2026 general election on November 3, for example, the registration deadline is October 24. Registration can be done three ways. The most convenient is online at voterreg.dmv.ny.gov — a NY driver license or non-driver ID is required because the DMV image of the signature is pulled automatically. By mail, Form 2VR is available at most libraries, post offices, and the Board of Elections, and can also be downloaded from elections.ny.gov. In person, the Monroe County Board of Elections on West Main Street in Rochester accepts walk-in registration during business hours. Motor Voter registration under the federal National Voter Registration Act of 1993 happens automatically whenever a NY resident transacts with the DMV — applying for a license, renewing a registration, or getting a non-driver ID all trigger an offer to register to vote. Public assistance and disability services offices also offer Motor Voter registration at every application. A 16 or 17 year old NY resident can pre-register through the same system, with automatic activation on the 18th birthday. New Yorkers convicted of a felony regain voting rights the day of release from prison under a 2021 amendment — parole and probation do not block voting. A voter who missed the ten-day deadline can still cast a provisional or affidavit ballot at the assigned polling place on Election Day under Election Law 8-302(3). The Board of Elections investigates the eligibility of each affidavit ballot after the election and counts valid ones. A voter whose affidavit ballot is rejected has a right to a written explanation. New York has same-day registration for narrow situations — a voter who moved within the same county can update the address on Election Day at the Board of Elections and vote the same day, but this does not replace the general ten-day deadline for first-time registrants. The 2019 passage of early voting means a voter can cast a regular ballot during the ten-day early voting period at any Monroe County early voting site with no line at most locations. Absentee ballot rules changed in 2023 — New York now allows no-excuse absentee voting, so any voter can request a ballot by mail without explaining a reason."
  },

  yourRights: {
    en: [
      "Any eligible NY resident has the right to register to vote online, by mail, or in person.",
      "A voter who missed the ten-day deadline has the right to cast a provisional or affidavit ballot at the polling place on Election Day.",
      "A voter has the right to automatic Motor Voter registration when transacting with the DMV, public assistance, or disability services.",
      "A returning citizen (person released from prison for a felony) has the right to register and vote the day of release.",
      "A voter has the right to register under the pre-registration program starting at age 16 with automatic activation at 18."
    ]
  },

  legalOptions: {
    en: [
      "Monroe County Board of Elections at (585) 753-1550 handles all registration, ballot, and poll-site questions for Monroe County.",
      "Online registration at voterreg.dmv.ny.gov for anyone with a NY driver or non-driver ID.",
      "NYS Board of Elections at (518) 474-6220 handles statewide voter rights questions.",
      "Vote411.org provides free nonpartisan poll-site and ballot information.",
      "For disability accommodations at the polls, Monroe County Board of Elections accessible voting coordinator at (585) 753-1550."
    ]
  },

  example: {
    en: "Isabella turned 18 in September and wanted to vote in the November general election. She registered online at voterreg.dmv.ny.gov 15 days before Election Day using her NY learner permit. The Board of Elections confirmed her registration within a week and mailed her an early-voting notice with poll-site locations. Isabella voted early at the Monroe County Public Library downtown on a Saturday with no wait. Her registration counted for all future NY elections with automatic annual verification."
  },

  counsel: [
    {
      type: "government",
      name: "Monroe County Board of Elections",
      focus: "Voter registration, polling locations, ballot questions, poll-site accessibility",
      qualifier: "Any Monroe County resident",
      access: "Phone, walk-in at 39 W Main St, online portal",
      outcome: "Registration processing, ballot delivery, poll-site assignment",
      phone: "(585) 753-1550",
      url: "https://www.monroecounty.gov/elections",
      verified: true,
      bilingual: true,
      languages: ["es"]
    },
    {
      type: "government",
      name: "NYS Board of Elections",
      focus: "Statewide voter rights, poll worker training, election rules",
      qualifier: "Any NY voter",
      access: "Phone, website",
      outcome: "Voter rights guidance, complaint intake",
      phone: "(518) 474-6220",
      url: "https://www.elections.ny.gov",
      verified: true,
      bilingual: true,
      languages: ["es"]
    }
  ],

  relatedIds: [
    "voter-rights-ny",
    "early-voting-absentee-ballot-ny",
    "election-law-ballot-challenge-ny",
    "real-id-enhanced-license-ny",
    "voting-rights-after-conviction-ny"
  ],

  relatedHelpResources: [],

  tags: [
    "voter registration deadline",
    "ELN 5-210",
    "ten day deadline NY",
    "voterreg.dmv.ny.gov",
    "Monroe County Board of Elections",
    "Motor Voter NY",
    "pre-register 16",
    "affidavit ballot NY",
    "provisional ballot NY",
    "returning citizen voting"
  ],

  sources: [
    "https://www.nysenate.gov/legislation/laws/ELN/5-210",
    "https://www.elections.ny.gov/voting/registration"
  ],

  lastVerified: "2026-04-20",
  volatility: "low",
  emergencyFlag: false,
  disclaimer: true,
  categoryDisclaimer: null
};
