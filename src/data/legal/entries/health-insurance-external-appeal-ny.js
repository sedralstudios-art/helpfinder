export const HEALTH_INSURANCE_EXTERNAL_APPEAL_NY = {
  id: "health-insurance-external-appeal-ny",
  category: "healthcare",
  tier: "state",
  jurisdiction: "us-ny",
  authorityType: "state-statute",
  primaryStatute: "NY INS 4914",
  status: "active",

  title: { en: "NY Health Insurance External Appeal — Independent Review After the Plan Denies" },

  summary: {
    en: "When a NY health insurance plan denies coverage for a treatment based on medical necessity, experimental status, or out-of-network status, the patient can file an external appeal with a state-assigned Independent Review Organization under NY Insurance Law 4914. The IRO decision is binding on the insurer. Success rates run 40 to 50 percent for patients. The filing fee is 25 dollars, waived for hardship."
  },

  whoQualifies: {
    en: [
      "Any NY resident with a NY-regulated health insurance plan.",
      "A patient whose plan denied a specific treatment, service, or medication.",
      "A patient who already completed or exhausted the plan's internal appeal.",
      "A patient whose claim involves medical necessity, experimental/investigational, out-of-network referral, or similar clinical determinations.",
      "A patient with urgent medical need qualifying for expedited review."
    ]
  },

  whatItMeans: {
    en: "New York Insurance Law Article 49, specifically Section 4914, establishes the NY External Appeal Program. When a NY-regulated health insurance plan denies coverage, the member has the right to an independent external review by a state-assigned Independent Review Organization (IRO) not connected to the plan. The IRO's decision is binding on the insurer. External appeal is available for specific types of denials. MEDICAL NECESSITY denials — the plan says the treatment is not medically necessary. EXPERIMENTAL OR INVESTIGATIONAL denials — the plan says the treatment is experimental and not covered. OUT-OF-NETWORK REFERRAL denials — the plan denied a referral to a specialist outside the network when the patient argues no in-network provider is available for the medical need. OUT-OF-NETWORK RATE denials — the plan paid less than billed charges for out-of-network care and the patient disputes the calculation. OUT-OF-NETWORK AUTHORIZATION — similar disputes about out-of-network services. HEALTHCARE-RELATED EMERGENCY TRANSPORT — ambulance coverage disputes. Not covered by external appeal: denials for eligibility (not a member, premium unpaid, not a covered condition category), cost-sharing disputes (copay or deductible questions), administrative errors (billed wrong amount, coding errors that are not clinical), and denials by ERISA self-funded plans (those have separate federal appeal mechanisms). PROCESS: (1) Complete the plan's internal appeal first. The plan must tell the member the final adverse determination in writing. (2) File external appeal with the NY Department of Financial Services within 4 months of the final adverse determination. Form DFS EAPP-1 is available online at dfs.ny.gov or by mail. (3) Pay the 25 dollar filing fee. Waived for financial hardship. (4) The member or the member's doctor provides supporting medical records, relevant clinical evidence, and a statement of why the denied treatment is appropriate. (5) DFS assigns the case to a certified IRO. The IRO is staffed by clinicians with expertise in the relevant medical specialty. (6) The IRO reviews the records and either agrees with the insurer or overturns the denial. Decision is typically issued within 30 days for standard appeals, 72 hours for expedited (urgent medical need), or 72 hours for experimental/investigational treatment for terminal conditions. (7) The decision is binding on the insurer. If the IRO overturns the denial, the insurer must cover the treatment. If the IRO agrees with the insurer, the member can still sue in court but only if ERISA preemption or another legal basis allows. PATIENT SUCCESS RATES: NY DFS publishes annual statistics. Historically about 40 to 50 percent of external appeals result in full or partial overturn of the denial. Specialty-specific rates vary — cancer treatment denials and behavioral health denials are often overturned above 60 percent. PREPARATION TIPS: The strongest appeals include (1) letters from treating physicians explaining medical necessity, (2) peer-reviewed journal articles supporting the treatment, (3) specialty society guidelines endorsing the treatment, (4) evidence of failed alternative treatments, (5) second opinions confirming the treatment decision. The NY Attorney General Health Care Bureau and the Community Service Society of NY Health Helpline at 1-888-614-5400 provide free help preparing external appeals. Legal Aid Society of Rochester also handles cases for low-income appellants. EXPEDITED APPEALS: For urgent or emergency medical needs, expedited external appeal is available with 72-hour decision. The appeal form is marked expedited, the patient's physician certifies urgent need, and the IRO is assigned same-day. SELF-FUNDED ERISA PLANS: Employees of self-insured employer plans (large companies that act as their own insurance company) do not have NY external appeal rights under state law. However, the federal Affordable Care Act at 29 USC 1185e requires self-funded plans to offer external appeal through a federally-approved IRO, which is similar in effect. The ACA external appeal is filed with the plan's designated IRO. SPECIAL RULES: Medicaid appeals go through the NY Fair Hearing process rather than external appeal. Medicare appeals have their own federal process. Essential Plan and Child Health Plus appeals go through NY State of Health."
  },

  yourRights: {
    en: [
      "A NY-regulated health insurance member has the right to external appeal after internal appeal is exhausted.",
      "A member has 4 months from final internal denial to file.",
      "A member has the right to a waived filing fee for financial hardship.",
      "A member with urgent medical need has the right to expedited 72-hour external appeal.",
      "A member whose IRO appeal is overturned has the right to binding coverage of the treatment.",
      "A self-funded ERISA plan member has the right to federal ACA external appeal instead.",
      "A member has the right to free help preparing appeals through NY AG Health Care Bureau and CSS Health Helpline."
    ]
  },

  legalOptions: {
    en: [
      "NY State Department of Financial Services External Appeal Unit at (800) 400-8882 or dfs.ny.gov/external-appeal.",
      "Community Service Society of NY Health Helpline at 1-888-614-5400 for free appeal preparation.",
      "NYS Attorney General Health Care Bureau at (212) 416-8400 for complex appeals and enforcement.",
      "Legal Aid Society of Rochester at (585) 232-4090 for low-income appellants.",
      "Empire Justice Center at (585) 295-5702 for major insurance denial cases.",
      "For self-funded ERISA plans, U.S. Department of Labor EBSA at (866) 444-3272."
    ]
  },

  example: {
    en: "Omar's health insurer denied an advanced MRI scan his oncologist had ordered for suspected cancer spread. The plan said standard imaging was sufficient. Omar's oncologist wrote a detailed letter explaining the specific clinical reasons advanced imaging was medically necessary, with supporting journal references. Omar completed the plan's internal appeal; the plan denied again. Within 4 months Omar filed NY external appeal with Form DFS EAPP-1, paid the 25 dollar fee, and requested expedited review citing cancer urgency. An oncology-specialty IRO reviewed the file and overturned the denial within 6 days. The insurer paid for the advanced MRI."
  },

  counsel: [
    {
      type: "government",
      name: "NY State Department of Financial Services External Appeal Unit",
      focus: "External appeal processing, IRO assignment, decision enforcement",
      qualifier: "Any NY-regulated health plan member",
      access: "Phone, online filing, mail Form DFS EAPP-1",
      outcome: "External appeal decision binding on the insurer",
      phone: "(800) 400-8882",
      url: "https://www.dfs.ny.gov/consumers/health_insurance/external_appeals",
      verified: true,
      bilingual: true,
      languages: ["es"]
    },
    {
      type: "nonprofit",
      name: "Community Service Society of NY Health Helpline",
      focus: "Free help preparing external appeals and navigating insurance disputes",
      qualifier: "Any NY resident",
      access: "Phone intake",
      outcome: "Free appeal preparation, medical evidence coordination",
      phone: "1-888-614-5400",
      url: "https://www.cssny.org/health-helpline",
      verified: true,
      bilingual: true,
      languages: ["es"]
    }
  ],

  relatedIds: [
    "prior-authorization-step-therapy-ny",
    "surprise-medical-bills-ny",
    "aca-preventive-care-ny",
    "essential-plan-ny",
    "hospital-financial-assistance-charity-care-ny"
  ],

  relatedHelpResources: [],

  tags: [
    "NY external appeal insurance",
    "INS 4914",
    "Independent Review Organization",
    "IRO NY health",
    "medical necessity denial",
    "experimental investigational",
    "expedited 72 hour appeal",
    "Form DFS EAPP-1",
    "ACA external appeal",
    "ERISA federal appeal"
  ],

  sources: [
    "https://www.nysenate.gov/legislation/laws/ISC/4914",
    "https://www.dfs.ny.gov/consumers/health_insurance/external_appeals"
  ],

  lastVerified: "2026-04-20",
  volatility: "low",
  emergencyFlag: false,
  disclaimer: true,
  categoryDisclaimer: null
};
