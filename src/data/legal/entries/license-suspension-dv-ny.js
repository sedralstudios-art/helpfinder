export const LICENSE_SUSPENSION_DV_NY = {
  id: "license-suspension-unpaid-ny",
  category: "vehicle",
  tier: "state",
  jurisdiction: "us-ny",
  authorityType: "state-statute",
  status: "active",

  title: { en: "License Suspended for Unpaid Fines, Child Support, or Failure to Appear" },

  summary: {
    en: "In New York, your driver's license can be suspended for reasons that have nothing to do with driving — unpaid child support, failure to answer a traffic ticket, unpaid Driver Responsibility Assessment, or even unpaid taxes. Losing a license can mean losing a job. There are options to get the license back or get a restricted license to drive to work."
  },

  whoQualifies: {
    en: [
      "Anyone whose New York driver's license has been suspended for a non-driving reason.",
      "Anyone who received a suspension notice from the DMV for unpaid fines, unpaid DRA, failure to appear in court, or unpaid child support.",
      "Anyone who needs to drive to work or for medical appointments while the suspension is in effect."
    ]
  },

  whatItMeans: {
    en: "New York suspends driver's licenses for many non-driving reasons. Unpaid child support: Family Court or the Support Collection Unit can direct the DMV to suspend a license if child support arrears exceed a certain amount. Failure to answer a traffic ticket: if you do not respond to a ticket within the deadline, the court notifies the DMV and the license is suspended until you clear the ticket. Unpaid Driver Responsibility Assessment (DRA): the DMV suspends the license if the annual DRA payment is missed. Unpaid surcharges or fines: a court can direct suspension for unpaid mandatory surcharges. Driving while suspended is itself a crime — Aggravated Unlicensed Operation under VTL § 511 — and can result in additional charges, fines, and jail. A conditional license or restricted-use license may be available in some cases, allowing driving to work, school, medical appointments, and child care during the suspension. To get a conditional license, you typically need to enroll in the DMV's PIRP (Point & Insurance Reduction Program) or meet other requirements depending on the reason for suspension."
  },

  yourRights: {
    en: [
      "You have the right to notice before the DMV suspends your license.",
      "You have the right to clear the reason for suspension and have your license restored.",
      "You may have the right to a conditional or restricted license to drive to work and medical appointments.",
      "For child support suspensions, you have the right to a hearing to contest the arrears amount.",
      "For failure-to-appear suspensions, you have the right to go to the court, answer the ticket, and request the suspension be lifted."
    ]
  },

  legalOptions: {
    en: [
      "Check your suspension status at the DMV website (dmv.ny.gov) or call (518) 486-9786.",
      "For failure-to-appear: go to the court listed on the ticket, answer the charge, and ask the court to notify the DMV to lift the suspension.",
      "For unpaid DRA: call the DMV DRA unit at (518) 486-9786 to set up a payment plan.",
      "For child support: contact the Monroe County Support Collection Unit at (585) 753-6011 to discuss payment or modification.",
      "For a conditional license: check eligibility at dmv.ny.gov or visit a DMV office. A PIRP course (about $50, available online) may qualify you.",
      "Free legal help: Legal Aid Society of Rochester at (585) 232-4090 for traffic and license issues."
    ]
  },

  example: {
    en: "Dwayne got a speeding ticket two years ago and forgot to respond. The court notified the DMV and his license was suspended. He did not know until he was pulled over and charged with Aggravated Unlicensed Operation. His lawyer at Legal Aid helps him go to the original court, pay the ticket, and get a letter to the DMV lifting the suspension. The AUO charge is reduced because Dwayne cleared the underlying issue promptly."
  },

  counsel: [
    {
      type: "free",
      name: "Legal Aid Society of Rochester",
      focus: "License suspension, traffic law, AUO defense",
      qualifier: "Low-income residents of Monroe and surrounding counties",
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
    "license-suspension-ny",
    "dwi-first-offense-ny",
    "speeding-ticket-ny",
    "child-support-modification-ny"
  ],

  relatedHelpResources: [],

  tags: [
    "license suspended",
    "suspended license",
    "failure to appear",
    "unpaid ticket",
    "DRA unpaid",
    "child support license",
    "conditional license",
    "restricted license",
    "AUO",
    "aggravated unlicensed operation",
    "driving while suspended"
  ],

  sources: [
    "https://dmv.ny.gov/points-and-penalties/suspensions-and-revocations",
    "https://www.nysenate.gov/legislation/laws/VAT/511"
  ],

  lastVerified: "2026-04-16",
  volatility: "low",
  emergencyFlag: false,
  disclaimer: true,
  categoryDisclaimer: null
};
