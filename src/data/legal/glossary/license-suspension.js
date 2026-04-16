// Glossary term: License Suspension (and Revocation)
// Citation verified: NY VTL § 510 (grounds, authority to suspend/revoke).
// Suspension = time-limited, license reinstates after period ends (usually
// with a termination fee). Revocation = permanent end of license; driver
// must re-apply. 11+ points in 18 months triggers administrative hearing.
// Unpaid child support, overdue taxes, failure to answer a summons, and
// failure to pay DRA all trigger suspension.

export const LICENSE_SUSPENSION = {
  id: "license-suspension",
  term: { en: "License Suspension" },
  aka: ["Suspension", "Revocation"],
  category: "vehicle",
  subtags: ["penalty", "dmv"],

  context: {
    en: "You hear this when the DMV is taking away someone's driving privilege. Suspension is for a set period — it ends on a specific date. Revocation is permanent until the driver applies for a new license."
  },

  plainEnglish: {
    en: "When the DMV takes away a person's ability to drive. A suspension is time-limited — at the end, the driver pays a termination fee and the license comes back. A revocation is permanent — after the minimum revocation period, the driver has to apply for a new license and may face additional requirements. Reasons include: a DWI or DWAI conviction, 11 or more points in 18 months, unpaid child support, unpaid taxes, failure to answer a traffic summons, failure to pay a Driver Responsibility Assessment, medical conditions affecting driving, or a court order. Driving while suspended or revoked is itself a crime that can make things worse. A conditional license or hardship license may be available for some cases."
  },

  whatToAsk: {
    en: [
      "Why is my license being suspended — is there a notice that explains it?",
      "Is it a suspension or a revocation, and how long?",
      "Can I get a conditional or hardship license?",
      "What do I have to do and pay to get my license back?",
      "If I drive while suspended, what are the consequences?"
    ]
  },

  related: ["dwi-dwai", "traffic-infraction", "driver-responsibility-assessment", "tvb-traffic-court"],
  legalEntryIds: ["license-suspension-ny"],

  citation: "NY VTL § 510; § 510-a (commercial)",
  sourceUrl: "https://www.nysenate.gov/legislation/laws/VAT/510",
  lastVerified: "2026-04-15",
  status: "active"
};
