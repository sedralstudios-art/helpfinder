export const MANAGED_CARE = {
  id: "managed-care",
  term: { en: "Managed Care" },
  aka: ["Managed Care Plan", "MCO", "Health Plan"],
  category: "benefits",
  subtags: ["health", "program-jargon"],

  context: {
    en: "You hear this when you sign up for Medicaid in New York. Most Medicaid recipients are enrolled in a managed care plan — a private insurance company that manages your benefits. You pick a plan, and the plan assigns you a primary care doctor."
  },

  plainEnglish: {
    en: "A type of health insurance where a private company manages a member's care. In New York, most Medicaid recipients must choose a managed care plan (like Fidelis, Molina, UnitedHealthcare, Excellus). The plan coordinates care: each member gets a primary care doctor (called a PCP), and may need a referral from the PCP to see a specialist. The plan covers the same services as regular Medicaid — doctor visits, hospital, prescriptions, dental, vision, mental health — but the member uses the plan's network of providers. A recipient who does not choose a plan is auto-assigned to one. Plans can be switched during open enrollment or within 90 days of enrollment."
  },

  whatToAsk: {
    en: [
      "Which managed care plan am I in?",
      "Is my doctor in the plan's network?",
      "Do I need a referral to see a specialist?",
      "How do I switch plans if I am not happy?",
      "What services are covered without a referral?"
    ]
  },

  related: ["medicaid", "copay", "prior-authorization", "referral", "deductible"],
  legalEntryIds: ["medicaid-ny"],

  citation: "NY Public Health Law Article 44; 42 CFR Part 438",
  sourceUrl: "https://www.health.ny.gov/health_care/managed_care/",
  lastVerified: "2026-04-16",
  status: "active"
};
