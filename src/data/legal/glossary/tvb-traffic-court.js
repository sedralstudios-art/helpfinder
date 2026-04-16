// Glossary term: TVB vs Traffic Court
// Citation: NY DMV Traffic Violations Bureau is an administrative tribunal
// under VTL § 225. TVB only handles non-criminal moving violations in the
// five NYC boroughs. Outside NYC (including Monroe County and Rochester),
// traffic infractions go to local town/village/city court and plea
// bargaining IS allowed. Standard of proof in TVB is clear and convincing,
// vs beyond a reasonable doubt in regular criminal courts.

export const TVB_TRAFFIC_COURT = {
  id: "tvb-traffic-court",
  term: { en: "Traffic Court (vs. TVB)" },
  aka: ["Traffic Violations Bureau", "TVB", "Local Traffic Court"],
  category: "vehicle",
  subtags: ["court-system"],

  context: {
    en: "You hear this when someone has a ticket and is figuring out where to fight it. New York has two systems depending on where the ticket was written. If it was in New York City, it goes to the DMV's Traffic Violations Bureau. If it was anywhere else in New York (including Rochester and all of Monroe County), it goes to a regular local court."
  },

  plainEnglish: {
    en: "New York has two different systems for traffic tickets. In the five New York City boroughs, non-criminal moving violations go to the DMV's Traffic Violations Bureau — an administrative hearing office. There is no plea bargaining and the standard to convict is lower than in regular court. Everywhere else in New York — including Monroe County — traffic tickets go to the local town, village, or city court, where a judge hears the case and plea bargaining with the prosecutor is usually possible. That is a big reason outside-NYC tickets often get reduced to a lower offense. DWI and most misdemeanors always go to regular criminal court, never to the TVB."
  },

  whatToAsk: {
    en: [
      "Where was the ticket written — NYC or somewhere else?",
      "Does this case go to the TVB or a regular court?",
      "Is a plea bargain possible in my case?",
      "What is the standard to convict, and what evidence does the officer need?",
      "What are my options if I lose — appeal, trial, or something else?"
    ]
  },

  related: ["traffic-infraction", "dwi-dwai", "license-suspension", "misdemeanor"],
  legalEntryIds: ["speeding-ticket-ny"],

  citation: "NY VTL § 225 (Traffic Violations Bureau)",
  sourceUrl: "https://www.nysenate.gov/legislation/laws/VAT/225",
  lastVerified: "2026-04-15",
  status: "active"
};
