export const UNEMPLOYMENT_GIG_WORKERS_NY = {
  id: "unemployment-gig-workers-ny",
  category: "employment",
  tier: "state",
  jurisdiction: "us-ny",
  status: "active",

  title: { en: "Unemployment Benefits for Gig Workers and Freelancers" },

  summary: {
    en: "Gig workers, freelancers, and independent contractors generally do not qualify for regular unemployment benefits in New York because their employers do not pay into the unemployment system. However, workers who were wrongly classified as independent contractors may actually qualify. Some gig workers qualified for temporary pandemic-era benefits that have since ended."
  },

  whoQualifies: {
    en: [
      "A gig worker or freelancer who believes they were wrongly classified as an independent contractor instead of an employee.",
      "A worker who was told they were a contractor but had their schedule, tools, and work controlled by the company.",
      "A worker who lost gig income and wants to understand their options.",
      "A worker who applied for unemployment and was denied because the employer claimed they were an independent contractor."
    ]
  },

  whatItMeans: {
    en: "In New York, unemployment insurance is funded by employers who pay taxes on their employees' wages. Independent contractors are not employees, so no one pays into the system on their behalf. This means most gig workers and freelancers cannot collect unemployment if they lose work. However, many companies call their workers independent contractors when they are really employees under the law. New York uses several tests to decide whether someone is an employee or a contractor. The most important question is how much control the company has over how the work is done. If the company sets the schedule, provides tools, requires specific methods, and the worker cannot work for competitors, the worker may actually be an employee — even if they signed a contract saying otherwise. If the NYS Department of Labor decides a worker was misclassified, the worker can collect unemployment benefits and the company may owe back taxes and penalties. The pandemic-era PUA (Pandemic Unemployment Assistance) program that covered gig workers ended in September 2021 and is no longer available."
  },

  yourRights: {
    en: [
      "A worker has the right to file for unemployment even if the company says they are an independent contractor. The Department of Labor will investigate and decide.",
      "A worker who is denied unemployment has the right to appeal the decision and have a hearing before an administrative law judge.",
      "A worker who was misclassified as a contractor has the right to be treated as an employee for unemployment purposes.",
      "A worker has the right to file a misclassification complaint with the NYS Department of Labor without fear of retaliation.",
      "If the Department of Labor finds misclassification, the employer — not the worker — owes the back taxes.",
      "A worker has the right to be represented by an attorney or advocate at an unemployment hearing."
    ]
  },

  legalOptions: {
    en: [
      "Under NY Labor Law Section 862-b, employers who willfully misclassify workers face civil penalties of up to $25,000 per worker for repeat violations.",
      "A worker who believes they were misclassified can file a complaint with the NYS Department of Labor at (888) 469-7365.",
      "If an unemployment claim is denied, the worker can request a hearing within 30 days of the denial notice. Hearings are conducted by phone or in person.",
      "Free legal help with unemployment denials and misclassification disputes is available through Legal Aid Society of Rochester at (585) 232-4090.",
      "The Freelancers Union provides resources and advocacy for independent workers at freelancersunion.org.",
      "Under the NY Freelance Isn't Free Act (Labor Law Section 191-c), freelancers who are owed money for completed work can sue for double damages if the client does not pay within 30 days of the due date."
    ]
  },

  example: {
    en: "Darius drove for a ride-share company in Rochester for two years. The company called him an independent contractor. When his account was deactivated without explanation, Darius filed for unemployment. The company told the Department of Labor he was not an employee. Darius appealed and explained that the company set his rates, controlled which rides he could accept, and rated his performance. The hearing officer reviewed the facts and ruled that Darius was an employee under New York law. He was approved for unemployment benefits."
  },

  counsel: [
    {
      type: "free",
      name: "Legal Aid Society of Rochester",
      focus: "Employment law, unemployment appeals, misclassification",
      qualifier: "Low income residents of Monroe and surrounding counties",
      access: "Phone intake at (585) 232-4090",
      outcome: "Legal advice and representation at unemployment hearings",
      phone: "(585) 232-4090",
      url: "https://www.lasroc.org",
      verified: true,
      bilingual: true,
      languages: ["es"]
    },
    {
      type: "government",
      name: "NYS Department of Labor — Unemployment",
      focus: "Unemployment claims, misclassification complaints",
      qualifier: "Any NYS worker",
      access: "Phone at (888) 469-7365 or online at labor.ny.gov",
      outcome: "Claims processing, investigation of misclassification",
      phone: "(888) 469-7365",
      url: "https://www.labor.ny.gov",
      verified: true,
      bilingual: true,
      languages: ["es"]
    }
  ],

  relatedIds: [
    "unemployment-insurance-ny",
    "unemployment-appeal-ny",
    "independent-contractor-misclass-ny",
    "fired-for-cause-unemployment-ny",
    "wage-theft-ny"
  ],

  relatedHelpResources: [],

  tags: [
    "gig worker unemployment",
    "freelancer unemployment",
    "independent contractor unemployment",
    "misclassified worker",
    "uber unemployment",
    "lyft unemployment",
    "gig economy",
    "1099 worker",
    "contractor vs employee",
    "freelance not paid"
  ],

  sources: [
    "https://www.labor.ny.gov/ui/claimantinfo/beforeyouapply.shtm",
    "https://www.nysenate.gov/legislation/laws/LAB/862-B",
    "https://www.nysenate.gov/legislation/laws/LAB/191-C"
  ],

  lastVerified: "2026-04-17",
  volatility: "moderate",
  emergencyFlag: false,
  disclaimer: true,
  categoryDisclaimer: null
};
