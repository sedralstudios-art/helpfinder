export const MLTC_MANAGED_LONG_TERM_CARE_NY_PROGRAM = {
  id: "mltc-managed-long-term-care-ny-program",
  category: "health",
  tier: "state",
  jurisdiction: "us-ny",
  authorityType: "agency-program",
  primaryStatute: "42 CFR PART 438",
  status: "active",

  title: { en: "Medicaid Managed Long-Term Care (MLTC) — Enrollment, Plan Selection, and Enrollee Rights" },

  summary: {
    en: "A Medicaid recipient age 21 or older who needs community-based long-term care for more than 120 days is usually required to enroll in a Managed Long-Term Care plan. MLTC plans coordinate home care, adult day health, nursing home care, personal care, and related services. The enrollment broker is NY Medicaid Choice. Plan selection matters — not every plan covers the same home care agencies or services."
  },

  whoQualifies: {
    en: [
      "Any New York Medicaid recipient age 21 or older who needs community-based long-term care for more than 120 days.",
      "Any Medicaid recipient being assessed for home care, personal care, or nursing home placement.",
      "Any dual-eligible (Medicare plus Medicaid) individual seeking community-based long-term care.",
      "A family caregiver helping a parent or spouse navigate long-term care options."
    ]
  },

  whatItMeans: {
    en: "MLTC is a Medicaid program through which most New York adults needing ongoing long-term care receive services through a private health plan contracted with the state, rather than through traditional fee-for-service Medicaid. The required enrollment population includes adults 21+ who need more than 120 days of community-based long-term care services (home care, adult day care, medical supplies and equipment, transportation to medical appointments) and dual eligibles meeting similar criteria. The MLTC plan receives a monthly capitation payment from Medicaid and is responsible for arranging the enrollee's covered services. Three plan types: (1) Partial Capitation MLTC covers only long-term care services — the enrollee keeps fee-for-service Medicare and Medicaid for medical care; (2) Medicaid Advantage Plus (MAP) combines Medicare Advantage and Medicaid long-term care in one plan; (3) Program of All-Inclusive Care for the Elderly (PACE) integrates all care for enrollees 55+ who qualify for nursing home placement. Enrollment process: the local Department of Social Services refers the person to NY Medicaid Choice (the state enrollment broker) at 1-888-401-6582. An independent assessor (currently the Conflict-Free Evaluation and Enrollment Center, CFEEC) conducts an initial assessment of daily living needs. If the person qualifies, they select a plan from those operating in Monroe County. Each plan publishes a provider network — which home care agencies it contracts with, which nursing homes accept its members. The enrollee has the right to change plans during open enrollment (annually) and has a 90-day plan-switch right at the start of enrollment. Continuity of care: when switching plans, the new plan must continue the existing hours and aides for a transition period (typically 90 days for personal care). Fair hearings: an enrollee can request a Medicaid fair hearing for any denial, reduction, or termination of services. The fair hearing is free and decisions can reinstate services with retroactive coverage. Aid continuing: if the fair hearing is requested within 10 days of a reduction notice, services must continue at the pre-reduction level while the hearing is pending."
  },

  yourRights: {
    en: [
      "A Medicaid recipient has the right to a fair and timely assessment of long-term care needs.",
      "An enrollee has the right to select any plan operating in the county from among those accepting new members.",
      "An enrollee has the right to continuity of care when switching plans (90-day transition).",
      "An enrollee has the right to a fair hearing for any denial, reduction, or termination.",
      "An enrollee who requests a hearing within 10 days of a reduction notice has the right to aid continuing at prior service levels.",
      "An enrollee has the right to change plans annually during open enrollment.",
      "An enrollee has the right to a complete copy of the Member Handbook and service-authorization records."
    ]
  },

  legalOptions: {
    en: [
      "NY Medicaid Choice enrollment broker at (888) 401-6582 — plan selection, enrollment, changes.",
      "Independent Consumer Advocacy Network (ICAN) at (844) 614-8800 — free MLTC ombudsprogram, advocates on fair hearings, denials, plan disputes.",
      "Lifespan of Greater Rochester at (585) 244-8400 — elder advocacy, MLTC navigation.",
      "Empire Justice Center Health Law Unit at (585) 454-4060 — legal help for low-income Medicaid recipients.",
      "Monroe County DSS at (585) 753-6960 — local Medicaid office.",
      "Fair hearing request: online at otda.ny.gov/hearings or phone (800) 342-3334.",
      "Medicaid Managed Care Complaint Line at (800) 206-8125."
    ]
  },

  example: {
    en: "A Rochester Medicaid recipient turning 70 began needing help with bathing and medication management at home. Her daughter contacted Monroe County DSS, which referred her to NY Medicaid Choice. The CFEEC assessor determined she needed 28 hours per week of personal care. The daughter compared three MLTC plans operating in Monroe County — one had the home care agency her mother already knew, another had lower out-of-network costs. She chose the first. During the first week, the plan authorized only 20 hours. The family contacted ICAN, which filed a fair hearing request within 10 days, triggering aid continuing at 28 hours. The hearing reinstated the full authorization and recouped the shortfall."
  },

  counsel: [
    {
      type: "government",
      name: "NY Medicaid Choice Enrollment Broker",
      focus: "MLTC plan selection, enrollment, changes, assessments",
      qualifier: "Medicaid recipients needing long-term care",
      access: "Phone at (888) 401-6582",
      outcome: "Plan enrollment, switch processing, general information",
      phone: "(888) 401-6582",
      url: "https://nymedicaidchoice.com",
      verified: true,
      bilingual: true,
      languages: ["es"]
    },
    {
      type: "nonprofit",
      name: "ICAN — Independent Consumer Advocacy Network",
      focus: "MLTC ombudsprogram, fair hearings, denials, plan disputes",
      qualifier: "Any MLTC enrollee or applicant statewide",
      access: "Phone at (844) 614-8800",
      outcome: "Free ombuds advocacy, fair hearing assistance",
      phone: "(844) 614-8800",
      url: "https://icannys.org",
      verified: true,
      bilingual: true,
      languages: ["es"]
    }
  ],

  relatedIds: [
    "cdpap-consumer-directed-care-ny",
    "nursing-home-medicaid-asset-protection-ny",
    "nursing-home-bed-hold-readmission-ny",
    "medicaid-transportation-ny",
    "adult-protective-services-ny"
  ],

  relatedHelpResources: [],

  tags: [
    "MLTC",
    "Medicaid Managed Long-Term Care",
    "NY Medicaid Choice",
    "CFEEC assessment",
    "ICAN ombuds",
    "fair hearing MLTC",
    "aid continuing",
    "MAP plan",
    "long-term care Medicaid",
    "home care plan"
  ],

  sources: [
    "https://www.health.ny.gov/health_care/medicaid/redesign/mrt90/mltc_policy.htm",
    "https://www.ecfr.gov/current/title-42/chapter-IV/subchapter-C/part-438",
    "https://otda.ny.gov/hearings"
  ],

  lastVerified: "2026-04-18",
  volatility: "medium",
  emergencyFlag: false,
  disclaimer: true,
  categoryDisclaimer: null
};
