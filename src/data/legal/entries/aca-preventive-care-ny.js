export const ACA_PREVENTIVE_CARE_NY = {
  id: "aca-preventive-care-ny",
  category: "healthcare",
  tier: "federal",
  jurisdiction: "us-fed",
  authorityType: "federal-statute",
  primaryStatute: "42 USC 300gg-13",
  status: "active",

  title: { en: "Free Preventive Care — Vaccines, Screenings, and Checkups With No Copay" },

  summary: {
    en: "The federal Affordable Care Act requires most health insurance plans to cover preventive services (vaccines, cancer screenings, annual wellness visits, contraception, mental health screenings) with zero copay and zero deductible. New York Insurance Law adds stronger state-level parallels. This applies to most private insurance, Medicare, Medicaid, and Essential Plan. Out-of-network services may still have charges."
  },

  whoQualifies: {
    en: [
      "Any person enrolled in a NY health insurance plan issued after 2010 or reissued since then.",
      "A Medicare beneficiary seeking annual wellness visits and covered screenings.",
      "A Medicaid or Child Health Plus enrollee.",
      "An Essential Plan enrollee.",
      "A private insurance enrollee through employer, NY State of Health, or direct purchase."
    ]
  },

  whatItMeans: {
    en: "The federal Affordable Care Act (ACA), at 42 USC 300gg-13, requires most group and individual health insurance plans to cover preventive services with no out-of-pocket cost — no copay, no coinsurance, no deductible. This rule applies to non-grandfathered plans (virtually every plan in force today since grandfathering expired for most plans) and covers four categories of recommended preventive care: (1) services recommended by the U.S. Preventive Services Task Force with an A or B rating, (2) immunizations recommended by the CDC Advisory Committee on Immunization Practices, (3) women's preventive care recommended by the Health Resources and Services Administration (HRSA), and (4) Bright Futures recommendations for infants, children, and adolescents. Covered preventive services include: most adult vaccines (flu, shingles, pneumonia, COVID, Tdap) and childhood vaccines on the CDC schedule, annual physical exam or wellness visit, blood pressure screening, cholesterol and lipid panel, diabetes screening, colonoscopy or other colorectal cancer screening starting age 45, mammogram every 1 to 2 years starting age 40, Pap smear and HPV testing, skin cancer screening by a clinician, depression screening, lung cancer screening by CT scan for high-risk adults, prostate-specific antigen (PSA) discussion with a clinician, HIV testing, STI testing, hepatitis screening, obesity screening and counseling, tobacco use counseling, alcohol misuse screening, intimate-partner-violence screening, breastfeeding support, and contraceptive counseling (see contraception-coverage-ccca-ny for the NY-specific expansion). Preventive ultrasound for pregnant patients at high risk. Infant hearing screening. Pediatric developmental screening. All of these are covered at zero cost when the patient receives them from an in-network provider and the service is properly coded as preventive by the clinician. Important nuance: if a visit starts as preventive but expands into diagnosis or treatment, the visit can shift billing categories. For example, a patient goes in for an annual wellness visit (fully covered), the doctor finds high blood pressure and addresses it — the hypertension consultation portion may be billed as a diagnostic visit with normal copay. Patients can ask in advance about billing expectations. Colonoscopies specifically have a unique billing rule under the ACA: the screening colonoscopy is fully covered with zero copay, but if a polyp is found and removed during the same procedure, the bill can sometimes be coded as diagnostic — federal rules and many state rules now require this to remain coded as preventive (the polypectomy is a natural extension of the screening), but some insurers still bill differently. Patients finding this should appeal. NY Insurance Law sections 3216(i), 3221(l), and 4303 add parallel state-level preventive care mandates that mirror and sometimes exceed the federal requirement. NY has specifically expanded preventive coverage for reproductive health, mental health, and cancer screening. For patients on Medicare, the Medicare Preventive Services list at medicare.gov lists all covered preventive care. Medicare Part B covers an Annual Wellness Visit and many preventive screenings at zero cost after the Part B deductible. For Medicaid and Essential Plan, the state's comprehensive preventive benefits align with the ACA and often exceed it. Patients who are billed incorrectly for preventive care should: (1) call the insurance company and ask for the bill to be reprocessed as preventive, (2) ask the provider to review the billing codes and resubmit with correct preventive codes, (3) appeal the denial through the plan's internal appeal process, and (4) file a complaint with NY DFS if the plan refuses. Self-funded ERISA employer plans are covered by the federal ACA rule but not state mandates — patients on self-funded plans enforce through the Department of Labor. Grandfathered plans (very rare at this point) are exempt from the preventive mandate. Plan documents should state whether the plan is grandfathered."
  },

  yourRights: {
    en: [
      "A NY insured has the right to zero-cost preventive care from in-network providers.",
      "A patient has the right to zero-cost flu, COVID, and routine vaccines from in-network providers and retail pharmacies.",
      "A patient has the right to zero-cost cancer screenings including colonoscopy, mammogram, and Pap smear.",
      "A female patient has the right to zero-cost contraceptive counseling and methods under CCCA and ACA.",
      "A patient billed incorrectly for preventive care has the right to appeal and have the bill reprocessed.",
      "A patient has the right to file complaints with NY DFS (fully insured plans) or Department of Labor (self-funded plans)."
    ]
  },

  legalOptions: {
    en: [
      "NY State Department of Financial Services at (800) 342-3736 handles preventive care billing complaints.",
      "US Department of Labor at (866) 487-2365 handles self-funded ERISA plan complaints.",
      "Community Service Society of NY Health Helpline at 1-888-614-5400 provides billing dispute help.",
      "NY State of Health at 1-855-355-5777 for plan selection and preventive benefit questions.",
      "HealthCare.gov preventive services list at healthcare.gov/preventive-care-adults.",
      "Medicare preventive services at medicare.gov for Medicare enrollees."
    ]
  },

  example: {
    en: "Omar is 48 and has private insurance through his Rochester employer. He scheduled an annual physical at his primary care doctor (in-network). The doctor performed the full exam, ordered routine blood work, and administered a flu shot. Omar paid nothing at the visit. Six months later at age 50 he had a screening colonoscopy — also fully covered with zero copay. When a small polyp was found and removed, the surgery center initially billed the polypectomy as diagnostic with a 450 dollar coinsurance. Omar called his insurer citing the ACA colonoscopy rule. The insurer reprocessed the claim as preventive. His total out-of-pocket dropped to zero."
  },

  counsel: [
    {
      type: "government",
      name: "NY State Department of Financial Services",
      focus: "Preventive care billing complaints and coverage disputes",
      qualifier: "Any NY insurance consumer",
      access: "Phone, online complaint portal",
      outcome: "Complaint investigation, plan compliance enforcement",
      phone: "(800) 342-3736",
      url: "https://www.dfs.ny.gov/consumers/health_insurance",
      verified: true,
      bilingual: true,
      languages: ["es"]
    },
    {
      type: "nonprofit",
      name: "Community Service Society of NY Health Helpline",
      focus: "Free help navigating preventive care billing and appeals",
      qualifier: "Any NY resident",
      access: "Phone intake",
      outcome: "Billing dispute resolution, appeal support",
      phone: "1-888-614-5400",
      url: "https://www.cssny.org/health-helpline",
      verified: true,
      bilingual: true,
      languages: ["es"]
    }
  ],

  relatedIds: [
    "contraception-coverage-ccca-ny",
    "fertility-preservation-coverage-ny",
    "prior-authorization-step-therapy-ny",
    "hospital-financial-assistance-charity-care-ny",
    "essential-plan-ny"
  ],

  relatedHelpResources: [],

  tags: [
    "ACA preventive care",
    "42 USC 300gg-13",
    "free vaccines insurance",
    "free mammogram",
    "free colonoscopy",
    "zero copay preventive",
    "USPSTF A B rating",
    "CDC immunization covered",
    "HRSA women's preventive",
    "Bright Futures pediatric"
  ],

  sources: [
    "https://www.law.cornell.edu/uscode/text/42/300gg-13",
    "https://www.healthcare.gov/preventive-care-adults"
  ],

  lastVerified: "2026-04-20",
  volatility: "low",
  emergencyFlag: false,
  disclaimer: true,
  categoryDisclaimer: null
};
