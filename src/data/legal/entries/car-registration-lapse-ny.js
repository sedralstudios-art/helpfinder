export const CAR_REGISTRATION_LAPSE_NY = {
  id: "car-registration-lapse-ny",
  category: "consumer",
  tier: "state",
  jurisdiction: "us-ny",
  authorityType: "state-statute",
  primaryStatute: "NY VAT 401",
  status: "active",

  title: { en: "Expired Car Registration — What Happens and How to Fix It" },

  summary: {
    en: "Driving with an expired registration in New York is a traffic infraction with a fine. But the bigger problem is that a registration lapse triggers an insurance verification inquiry from the DMV. If the DMV thinks the car was uninsured during the lapse, it can suspend the registration and impose a civil penalty — even if the car was parked and not driven."
  },

  whoQualifies: {
    en: [
      "Any vehicle owner whose registration expired and they did not renew in time.",
      "Any vehicle owner who received a suspension notice from the DMV for a registration or insurance lapse.",
      "Any vehicle owner who was ticketed for driving with an expired registration.",
      "Any vehicle owner who let their insurance lapse and then let the registration expire."
    ]
  },

  whatItMeans: {
    en: "Under Vehicle and Traffic Law Section 401, every vehicle driven on New York roads must be registered. Driving with an expired registration is a traffic infraction with a fine of $40 to $300. But the bigger issue is the insurance connection. New York uses an electronic insurance verification system. When a registration lapses, the DMV checks whether the vehicle had continuous insurance during the registration period. If the insurer reports a gap in coverage, the DMV sends a suspension notice and imposes a civil penalty on a tiered schedule: $8 per day for days 1 to 30, $10 per day for days 31 to 60, and $12 per day for days 61 to 90, with a $900 cap at 90 days. Lapses longer than 90 days require plate surrender and can trigger a license suspension. The registration is suspended until the penalty is paid and proof of current insurance is provided. To avoid this, a vehicle owner who is not using the car can surrender the plates to the DMV before the registration expires. This tells the system the car is off the road and no insurance is needed. If the plates are not surrendered and the insurance lapses, the DMV assumes the car was driven uninsured. Renewing an expired registration is straightforward — it can be done online at dmv.ny.gov, in person, or by mail. There is no late fee for the registration itself, just the insurance penalty if applicable. Title and registration are different documents in NY. The title proves ownership and is issued once when the vehicle is purchased; the registration is the recurring two-year (or one-year for some classes) authorization to operate on public roads. A lapsed registration does not affect the title, so the vehicle is still owned even when not legally drivable. Mailing renewal notices is one of the most common DMV failures — notices go to the address on file, which may be outdated if the owner moved. The owner is responsible for renewal regardless of whether a notice arrives, and address changes should be filed with the DMV within 10 days of moving (VTL Section 505). Online renewal is the fastest path; in-person at a DMV office is the slowest. Mail renewal sits in the middle but requires sending the original or a copy of the inspection certificate if the inspection is also due."
  },

  yourRights: {
    en: [
      "A vehicle owner has the right to renew an expired registration at any time without a late fee (the registration fee is the same regardless of when it is renewed).",
      "A vehicle owner has the right to surrender plates to the DMV to avoid insurance lapse penalties when the car is not being used.",
      "A vehicle owner who receives a suspension notice has the right to contest it if they can prove the car was insured continuously.",
      "A vehicle owner has the right to request a hearing if the DMV imposes a civil penalty.",
      "A vehicle owner has the right to pay the civil penalty and reinstate the registration without going to court.",
      "A driver ticketed for an expired registration has the right to show proof of current registration at court, which may reduce the fine."
    ]
  },

  legalOptions: {
    en: [
      "Under VTL Section 401, driving with an expired registration is a traffic infraction with a fine of $40 to $300 if the registration was expired less than 60 days, and $70 to $300 if expired more than 60 days, plus a state surcharge.",
      "Registration can be renewed online at dmv.ny.gov, at a DMV office, or by mail.",
      "If the DMV sends a suspension notice for an insurance lapse, the penalty is tiered: $8 per day for days 1 to 30, $10 per day for days 31 to 60, and $12 per day for days 61 to 90, capped at $900. Pay at dmv.ny.gov or at the DMV office.",
      "To avoid insurance lapse penalties on a car that is not being driven, surrender the plates to the DMV before the registration or insurance expires.",
      "If the vehicle was insured the entire time and the insurer reported a gap by mistake, the owner can provide proof of continuous coverage and request the penalty be waived.",
      "The DMV Call Center can answer registration questions at (518) 486-9786."
    ]
  },

  example: {
    en: "When Carlos lost his job, he could not afford car insurance. He let the policy lapse but forgot to surrender his plates. Three months later, he received a notice from the DMV saying his registration was suspended and he owed the maximum $900 civil penalty for a 90-day lapse ($8 per day for days 1 to 30, $10 per day for days 31 to 60, $12 per day for days 61 to 90). Carlos could not drive legally until he paid the penalty, got new insurance, and renewed his registration. If he had surrendered his plates at the start, he would have owed nothing. His friend in the same situation surrendered plates online in five minutes and avoided the penalty entirely."
  },

  counsel: [
    {
      type: "government",
      name: "NYS DMV — Registration and Insurance",
      focus: "Registration renewal, insurance verification, lapse penalties",
      qualifier: "Any NYS vehicle owner",
      access: "Online at dmv.ny.gov or (518) 486-9786",
      outcome: "Registration renewal, penalty payment, plate surrender",
      phone: "(518) 486-9786",
      url: "https://dmv.ny.gov",
      verified: true,
      bilingual: false,
      languages: []
    }
  ],

  relatedIds: [
    "vehicle-registration-inspection-ny",
    "driving-without-insurance-ny",
    "license-suspension-ny",
    "suspended-license-hardship-ny"
  ],

  relatedHelpResources: [],

  tags: [
    "expired registration",
    "registration lapse",
    "DMV registration penalty",
    "insurance lapse DMV",
    "surrender plates",
    "registration suspended",
    "DMV lapse penalty schedule",
    "renew expired registration",
    "registration fine",
    "DMV insurance verification"
  ],

  sources: [
    "https://www.nysenate.gov/legislation/laws/VAT/401",
    "https://dmv.ny.gov/registration/renew-registration"
  ],

  lastVerified: "2026-04-27",
  factCheckedBy: { tool: "websearch+webfetch", date: "2026-04-27" },
  volatility: "low",
  emergencyFlag: false,
  disclaimer: true,
  categoryDisclaimer: null
};
