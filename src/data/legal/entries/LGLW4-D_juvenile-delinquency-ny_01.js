export const JUVENILE_DELINQUENCY_NY = {
  id: "juvenile-delinquency-ny",
  category: "family",
  tier: "state",
  jurisdiction: "us-ny",
  status: "active",

  title: { en: "Juvenile Delinquency — When a Child Is Charged With a Crime in New York" },

  summary: {
    en: "In New York, children under 18 who are accused of committing acts that would be crimes if committed by adults are processed through the Family Court juvenile delinquency system (FCA Article 3), not the adult criminal justice system. The focus is on rehabilitation, not punishment. The child has the right to a lawyer, a hearing, and protections that do not exist in adult court."
  },

  whoQualifies: {
    en: [
      "Children ages 7-17 who are accused of acts that would be crimes if committed by an adult.",
      "Children under 7 cannot be charged with delinquency.",
      "Under New York's Raise the Age law (2017-2019), 16- and 17-year-olds charged with most misdemeanors are processed in Family Court rather than adult criminal court.",
      "Certain serious offenses (murder, armed felonies) involving older teens may still be handled in adult court under specific circumstances."
    ]
  },

  whatItMeans: {
    en: "A juvenile delinquency case begins when the county's presentment agency (usually the probation department or the county attorney) files a petition in Family Court. Before a petition can be filed, the case usually goes through a probation intake process where diversion (resolving the case without court) is considered first. If the case goes to court, the child is entitled to a lawyer — assigned by the court if the family cannot afford one. The fact-finding hearing (equivalent of a trial) is before a judge, not a jury. The standard of proof is beyond a reasonable doubt, the same as in adult court. If the court finds the child committed the act, it moves to a dispositional hearing to decide the consequence. Dispositions range from a conditional discharge (go home with conditions) to placement in a juvenile facility for up to 18 months (or longer for serious offenses). The record is sealed from public view — juvenile delinquency adjudications are not criminal convictions and do not appear on a criminal record. The system's purpose is rehabilitation: services, counseling, education, and support, not incarceration for its own sake."
  },

  yourRights: {
    en: [
      "The child has the right to a lawyer at every stage — assigned for free if the family cannot afford one.",
      "The child has the right to remain silent and not incriminate themselves.",
      "The child has the right to a hearing with the same standard of proof as adult court (beyond a reasonable doubt).",
      "The child has the right to confront and cross-examine witnesses.",
      "Juvenile records are sealed from public view — they are not criminal convictions.",
      "The child has the right to the least restrictive disposition appropriate to their situation.",
      "Parents have the right to be present at all proceedings."
    ]
  },

  legalOptions: {
    en: [
      "If a child is arrested, the parent or guardian should be contacted immediately. The child has the right to a lawyer before answering any questions.",
      "The Monroe County Public Defender's office represents children in juvenile delinquency cases at (585) 753-4210.",
      "Probation intake may offer diversion — resolving the case through community service, counseling, or restitution without a court hearing.",
      "At the dispositional hearing, the child's attorney can advocate for the least restrictive option: conditional discharge, probation, or community-based services instead of placement.",
      "Free legal help is also available through Legal Aid Society of Rochester at (585) 232-4090.",
      "Under the Raise the Age law, cases involving 16-17-year-olds that start in adult court can be removed to Family Court under certain conditions."
    ]
  },

  example: {
    en: "A 14-year-old in Rochester is accused of stealing from a store. The case goes to probation intake, where the probation officer considers diversion. Because this is the child's first offense and the amount was small, the officer recommends an adjustment — the child does 20 hours of community service and writes an apology letter. The case is resolved without a court hearing and no petition is filed. There is no record."
  },

  counsel: [
    {
      type: "free",
      name: "Monroe County Public Defender — Juvenile Division",
      focus: "Juvenile delinquency defense in Family Court",
      qualifier: "Children facing delinquency charges in Monroe County",
      access: "Assigned at first court appearance",
      outcome: "Full representation through disposition",
      phone: "(585) 753-4210",
      url: "https://www.monroecounty.gov/defender",
      verified: true,
      bilingual: false,
      languages: []
    },
    {
      type: "free",
      name: "Legal Aid Society of Rochester",
      focus: "Juvenile defense, family court representation",
      qualifier: "Low-income families in Monroe and surrounding counties",
      access: "Phone intake",
      outcome: "Direct representation or advice",
      phone: "(585) 232-4090",
      url: "https://www.lasroc.org",
      verified: true,
      bilingual: true,
      languages: ["es"]
    }
  ],

  relatedIds: [
    "criminal-case-process-ny",
    "right-to-a-lawyer-ny",
    "school-discipline-rights-ny"
  ],

  relatedHelpResources: [],

  tags: [
    "juvenile delinquency",
    "juvenile court",
    "child arrested",
    "raise the age",
    "FCA Article 3",
    "family court juvenile",
    "sealed juvenile record",
    "probation diversion",
    "youth crime",
    "teen arrested",
    "juvenile placement"
  ],

  sources: [
    "https://www.nysenate.gov/legislation/laws/FCT/A3",
    "https://www.nycourts.gov/courts/7jd/courts/family/"
  ],

  lastVerified: "2026-04-16",
  volatility: "low",
  emergencyFlag: false,
  disclaimer: true,
  categoryDisclaimer: null
};
