export const HEALTH_INSURANCE_DENIAL_NY = {
  id: "health-insurance-denial-ny",
  category: "benefits",
  tier: "state",
  jurisdiction: "us-ny",
  authorityType: "state-statute",
  primaryStatute: "NY ISC 4914",
  status: "active",

  title: { en: "Health Insurance Denied a Claim or Service — How to Appeal in New York" },

  summary: {
    en: "When a health insurer denies a claim, refuses to cover a treatment, or says a service is not medically necessary, the insured has the right to appeal. New York law requires insurance companies to have an internal appeal process, and if that fails, an independent external review. Many denials are overturned on appeal — especially when the treating doctor supports the request."
  },

  whoQualifies: {
    en: [
      "Anyone with health insurance (private, employer, marketplace, Medicaid managed care, or Child Health Plus) who has had a claim or service denied.",
      "Anyone whose insurance says a prescribed treatment, test, or medication is not medically necessary.",
      "Anyone whose prior authorization request was denied."
    ]
  },

  whatItMeans: {
    en: "When a health insurance company denies a claim, it must send a written denial notice explaining the reason and the right to appeal. The appeal process has two levels. First: an internal appeal to the insurance company itself. The insurer must review the denial using a different reviewer than the one who made the original decision. For urgent cases (where delay could seriously harm health), the insurer must fast-track the review. Second: if the internal appeal is denied, the member can request an external review by an independent review organization (not affiliated with the insurer). The external reviewer's decision is binding on the insurer. Under New York Insurance Law § 4914, the external review process is free and available for denials based on medical necessity, experimental/investigational treatment, out-of-network referrals, and certain other grounds. For Medicaid managed care, the appeal goes through the plan's internal process and then to a Medicaid fair hearing. The treating doctor's support is often the strongest factor in winning an appeal. Common appeal-friendly denials include service deemed not medically necessary, prior authorization missing or expired, out-of-network referral required, and step therapy requiring trial of cheaper alternatives first. Each requires a different appeal strategy, but the doctor's letter explaining clinical reasoning is the common thread. ERISA-governed employer plans (most large-employer health plans) follow federal appeal rules rather than NY state rules; the appeal process and external review may be different and limited. Self-funded employer plans regulated by ERISA are exempt from state mandates but still must offer claim review under federal law. Medicare and Medicaid have separate appeal tracks: Medicare appeals follow a five-level process administered by CMS, and Medicaid appeals go to fair hearings administered by OTDA. Surprise billing protections under the federal No Surprises Act and NY law cap patient costs for out-of-network emergency care and certain non-emergency care at in-network amounts. Patients who receive surprise bills can dispute them through the No Surprises billing dispute process, which often resolves the issue without going through formal appeal."
  },

  yourRights: {
    en: [
      "The right to a written explanation of why the claim or service was denied.",
      "The right to an internal appeal reviewed by someone other than the original decision-maker.",
      "The right to an expedited (fast) review for urgent medical situations.",
      "The right to an external review by an independent organization if the internal appeal fails.",
      "The external review decision is binding on the insurer.",
      "The right to continue receiving a service during the appeal if it was previously authorized and is being reduced or terminated."
    ]
  },

  legalOptions: {
    en: [
      "The denial notice includes instructions for filing an internal appeal. The deadline is typically 180 days from the denial, but acting quickly is recommended.",
      "For urgent cases, an expedited internal appeal can be requested — the insurer must respond within 72 hours.",
      "If the internal appeal is denied, an external review can be requested through the NY Department of Financial Services (DFS). Information and forms are available at dfs.ny.gov or by calling (800) 400-8882.",
      "For Medicaid managed care denials, a fair hearing can be requested through OTDA at otda.ny.gov/hearings/request/ or by calling (800) 342-3334. Aid continuing may be available if the service was previously authorized.",
      "Free help navigating insurance denials and appeals is available through the Community Health Advocates (CHA) program, a statewide consumer assistance program. In the Rochester area, CHA can be reached through Legal Aid Society at (585) 232-4090."
    ]
  },

  example: {
    en: "A patient's insurance denies coverage for a prescribed MRI, saying it is not medically necessary. The patient's doctor writes a letter of medical necessity explaining why the MRI is needed. The patient files an internal appeal with the doctor's letter attached. The insurer reverses the denial. If the insurer had upheld the denial, the patient could have requested a free external review through the Department of Financial Services."
  },

  counsel: [
    {
      type: "free",
      name: "NY Dept of Financial Services — External Appeal",
      focus: "Health insurance external reviews, consumer assistance",
      qualifier: "Any insured person in New York",
      access: "Phone or online",
      outcome: "Independent binding review of insurance denials",
      phone: "(800) 400-8882",
      url: "https://www.dfs.ny.gov/consumers/health_insurance/external_appeal",
      verified: true,
      bilingual: false,
      languages: []
    },
    {
      type: "free",
      name: "Community Health Advocates (CHA) / Legal Aid",
      focus: "Insurance denials, appeals, Medicaid managed care issues",
      qualifier: "Any consumer in the Rochester area",
      access: "Phone",
      outcome: "Free assistance navigating the appeal process",
      phone: "(585) 232-4090",
      url: "https://www.lasroc.org",
      verified: true,
      bilingual: true,
      languages: ["es"]
    }
  ],

  relatedIds: [
    "medicaid-ny",
    "benefits-denial-appeal-ny",
    "fair-hearing-ny"
  ],

  relatedHelpResources: [],

  tags: [
    "insurance denial",
    "claim denied",
    "not medically necessary",
    "prior authorization denied",
    "appeal insurance",
    "external review",
    "Medicaid denial",
    "insurance appeal",
    "DFS external appeal",
    "health insurance rights"
  ],

  sources: [
    "https://www.nysenate.gov/legislation/laws/ISC/4914",
    "https://www.dfs.ny.gov/consumers/health_insurance/external_appeal"
  ],

  lastVerified: "2026-04-16",
  volatility: "low",
  emergencyFlag: false,
  disclaimer: true,
  categoryDisclaimer: null
};
