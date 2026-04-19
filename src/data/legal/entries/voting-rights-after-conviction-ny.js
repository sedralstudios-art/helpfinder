export const VOTING_RIGHTS_AFTER_CONVICTION_NY = {
  id: "voting-rights-after-conviction-ny",
  category: "criminal",
  tier: "state",
  jurisdiction: "us-ny",
  authorityType: "state-statute",
  primaryStatute: "NY ELN 5-106",
  status: "active",

  title: { en: "Voting Rights After a Criminal Conviction in New York" },

  summary: {
    en: "In New York, a person convicted of a felony loses the right to vote only while incarcerated. As soon as the person is released from prison — whether on parole, probation, or unconditionally — the right to vote is restored. This has been the law since 2021, when the governor signed an executive order restoring voting rights to people on parole. Many people with felony convictions do not know they can vote."
  },

  whoQualifies: {
    en: [
      "Any person with a felony conviction who is not currently incarcerated in a state or federal prison.",
      "People on parole can vote.",
      "People on probation can vote.",
      "People with misdemeanor convictions never lose the right to vote — even while in jail.",
      "People in local jails awaiting trial (pretrial detention) can vote."
    ]
  },

  whatItMeans: {
    en: "Under Election Law § 5-106 and Executive Order 204 (2021, made permanent by legislation in 2023), a person convicted of a felony in New York loses the right to vote only while serving a sentence of incarceration in a state or federal prison. The moment the person is released — whether to parole, a halfway house, or the community — the right to vote is automatically restored. There is no waiting period, no application, and no fee. The person must re-register to vote (the conviction cancels the previous registration), but there is no special process — the standard voter registration form is used. People with misdemeanor convictions never lose the right to vote, even while serving time in a local jail. People in jail who have not been convicted (pretrial detainees) retain the full right to vote and can request an absentee ballot. This is a significant change from the prior law, which barred voting until parole was completed. Many people who are now eligible do not know it because the old rule was in place for decades."
  },

  yourRights: {
    en: [
      "The right to vote is restored immediately upon release from incarceration — no waiting period.",
      "People on parole and probation can vote.",
      "People with misdemeanor convictions can vote even while incarcerated.",
      "Pretrial detainees (not yet convicted) can vote by absentee ballot.",
      "No application or fee is required to restore voting rights — just re-register using the standard form.",
      "No one can turn a person away from the polls because of a criminal record if the person is not currently incarcerated."
    ]
  },

  legalOptions: {
    en: [
      "To re-register to vote after release, the standard voter registration form is available at the Monroe County Board of Elections at (585) 753-1550 or at elections.ny.gov.",
      "Registration can also be done at the DMV, the public library, or online at voterreg.dmv.ny.gov.",
      "For people currently in jail (pretrial or misdemeanor), absentee ballot applications can be requested through the county Board of Elections.",
      "If a person is turned away at the polls because of a criminal record, they can call the Election Protection Hotline at (866) 687-8683.",
      "The League of Women Voters of Rochester Metro at (585) 262-3730 provides voter registration assistance and information."
    ]
  },

  example: {
    en: "A man in Rochester is released from state prison on parole after serving 4 years for a felony. He wants to vote in the next election. Under the current law, his right to vote is restored immediately — he does not have to wait until parole ends. He fills out a voter registration form at the public library and is registered in time for the next election."
  },

  counsel: [
    {
      type: "free",
      name: "Monroe County Board of Elections",
      focus: "Voter registration, absentee ballots, election information",
      qualifier: "Any Monroe County resident",
      access: "Phone or in person",
      outcome: "Voter registration, ballot access",
      phone: "(585) 753-1550",
      url: "https://www.monroecounty.gov/elections",
      verified: true,
      bilingual: false,
      languages: []
    },
    {
      type: "free",
      name: "Election Protection Hotline",
      focus: "Voter intimidation, turned away at polls, voting rights questions",
      qualifier: "Any voter in the US",
      access: "Phone",
      outcome: "Immediate assistance with voting access issues",
      phone: "(866) 687-8683",
      url: "https://866ourvote.org",
      verified: true,
      bilingual: true,
      languages: ["es"]
    }
  ],

  relatedIds: [
    "voter-rights-ny",
    "seal-your-record-ny",
    "reentry-rights-ny",
    "parole-basics-ny",
    "probation-basics-ny"
  ],

  relatedHelpResources: [],

  tags: [
    "voting felony",
    "vote after prison",
    "felon voting rights",
    "voter registration felony",
    "parole voting",
    "probation voting",
    "jail voting",
    "re-register vote",
    "Election Law 5-106",
    "executive order 204",
    "pretrial voting"
  ],

  sources: [
    "https://www.nysenate.gov/legislation/laws/ELN/5-106",
    "https://www.elections.ny.gov/"
  ],

  lastVerified: "2026-04-16",
  volatility: "low",
  emergencyFlag: false,
  disclaimer: true,
  categoryDisclaimer: null
};
