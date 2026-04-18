export const PRIOR_AUTHORIZATION_STEP_THERAPY_NY = {
  id: "prior-authorization-step-therapy-ny",
  category: "health",
  tier: "state",
  jurisdiction: "us-ny",
  authorityType: "state-statute",
  primaryStatute: "NY ISC 4903",
  status: "active",

  title: { en: "Prior Authorization and Step Therapy — When an Insurer Makes a Patient Try Another Drug First" },

  summary: {
    en: "New York Insurance Law Section 4903 and related rules set strict deadlines for prior authorization decisions — 72 hours for standard requests, 24 hours for urgent requests involving life or health. Step therapy laws require insurers to honor exceptions when a step therapy protocol would harm a patient or has already failed. Appeals are free and usually fast. Many denials are reversed when a doctor provides a detailed letter."
  },

  whoQualifies: {
    en: [
      "Any patient whose insurer denies a prescription drug or procedure as requiring prior authorization.",
      "Any patient placed on a step therapy protocol requiring failure of cheaper drugs first.",
      "A doctor whose treatment plan has been denied or delayed by an insurer's review.",
      "A parent or caregiver seeking timely care for a dependent."
    ]
  },

  whatItMeans: {
    en: "Prior authorization (PA) is a process by which an insurer reviews and approves a treatment before the insurer will cover it. Step therapy (also called fail-first) requires a patient to try one or more preferred drugs before the insurer covers a non-preferred drug. New York Insurance Law Section 4903 and Public Health Law Section 4903 set binding deadlines: standard (non-urgent) utilization review decisions must be made within 72 hours of receiving the request and all necessary information; expedited (urgent) decisions involving a serious threat to life or health must be made within 24 hours; concurrent reviews of ongoing treatment must be made within 24 hours; retrospective reviews (after care was provided) must be made within 30 days. Missing the deadline is treated as approval. Step therapy exception: NY Insurance Law Section 4903(b-2) and PHL Section 4903(3)(b-2) require insurers to grant an exception to step therapy when the prescribing doctor documents any of: the required drug is contraindicated for the patient; the required drug has been tried and failed or caused adverse effects; the required drug is expected to be ineffective based on the patient's clinical history; the required drug is not in the patient's best interest; the patient is stable on a current drug covered under a prior plan. The insurer must decide step therapy exception requests within the same 72-hour and 24-hour deadlines. Appeals: a patient or provider can appeal a prior authorization or step therapy denial through an internal plan appeal (standard 30 days, expedited 72 hours). If denied again, an external appeal through the NYS Department of Financial Services is available (free for the patient) — standard external appeals are decided within 30 days, expedited within 72 hours. External appeals are conducted by an Independent Review Organization and the insurer must cover the treatment if the IRO sides with the patient. Federal parity: mental health and substance use disorder treatment is protected under federal parity law (MHPAEA) — an insurer cannot impose stricter PA requirements on behavioral health than on medical care. Recent reforms: NY amendments effective 2023 and 2024 shortened timelines and added the requirement that denials include the specific clinical rationale and the contact information for the physician reviewer."
  },

  yourRights: {
    en: [
      "A patient has the right to a decision on standard prior authorization within 72 hours.",
      "A patient has the right to a decision on urgent prior authorization within 24 hours.",
      "A patient has the right to continue ongoing treatment while concurrent review is pending.",
      "A patient has the right to a step therapy exception when the prescribing doctor documents medical necessity.",
      "A patient has the right to a free internal appeal of any denial.",
      "A patient has the right to a free external appeal to an Independent Review Organization through NYS DFS.",
      "A patient has the right to detailed written explanation of any denial, including the reviewer's clinical rationale."
    ]
  },

  legalOptions: {
    en: [
      "NYS Department of Financial Services Consumer Assistance at (800) 342-3736.",
      "External appeal: file at dfs.ny.gov or phone (800) 400-8882.",
      "Community Health Advocates at (888) 614-5400 — free statewide consumer health-coverage help.",
      "Patient Advocate Foundation at (800) 532-5274 — free case management for chronically ill patients.",
      "Doctor appeal letters: ask the prescribing doctor to document medical necessity specifically (contraindications, failed therapies, adverse effects) — most successful appeals rely on the doctor's written rationale.",
      "Preserve all denial letters, explanation of benefits (EOBs), and prior authorization request forms — all are needed for the appeal.",
      "For mental health or substance use parity violations: NY AG Health Care Helpline at (800) 428-9071."
    ]
  },

  example: {
    en: "A Rochester patient was prescribed a non-preferred biologic medication for rheumatoid arthritis. The insurer required step therapy — first trying two preferred drugs that had failed her in the past. Her rheumatologist submitted a step therapy exception request documenting the prior failures and adverse effects. The insurer denied within 72 hours. The doctor appealed internally; the insurer upheld the denial. The patient filed a free external appeal with NYS DFS within 4 months. The Independent Review Organization reviewed her records and reversed the denial — the insurer was required to cover the biologic. Total time: about six weeks. She paid nothing for the appeals process."
  },

  counsel: [
    {
      type: "nonprofit",
      name: "Community Health Advocates",
      focus: "Free health coverage counseling, prior authorization appeals, claim denials",
      qualifier: "Any NY resident with health insurance issues",
      access: "Phone at (888) 614-5400",
      outcome: "Appeal guidance, insurer complaint assistance",
      phone: "(888) 614-5400",
      url: "https://communityhealthadvocates.org",
      verified: true,
      bilingual: true,
      languages: ["es"]
    },
    {
      type: "government",
      name: "NYS DFS External Appeals",
      focus: "Independent external appeal of denied medical services",
      qualifier: "Any insured patient after internal appeal denial",
      access: "Phone at (800) 400-8882 or dfs.ny.gov",
      outcome: "Binding IRO decision on coverage",
      phone: "(800) 400-8882",
      url: "https://www.dfs.ny.gov",
      verified: true,
      bilingual: true,
      languages: ["es"]
    }
  ],

  relatedIds: [
    "mental-health-parity-insurance-ny",
    "surprise-medical-billing-ny",
    "medical-bill-negotiation-ny",
    "hospice-palliative-care-rights-ny",
    "prescription-assistance-ny"
  ],

  relatedHelpResources: [],

  tags: [
    "prior authorization",
    "step therapy",
    "fail first",
    "Insurance Law 4903",
    "PHL 4903",
    "utilization review",
    "external appeal",
    "independent review organization",
    "MHPAEA parity",
    "step therapy exception"
  ],

  sources: [
    "https://www.nysenate.gov/legislation/laws/ISC/4903",
    "https://www.nysenate.gov/legislation/laws/PBH/4903",
    "https://www.dfs.ny.gov/consumers/health_insurance"
  ],

  lastVerified: "2026-04-18",
  volatility: "medium",
  emergencyFlag: false,
  disclaimer: true,
  categoryDisclaimer: null
};
