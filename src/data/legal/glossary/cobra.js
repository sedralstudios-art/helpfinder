export const COBRA = {
  id: "cobra",
  term: { en: "COBRA" },
  aka: ["COBRA Continuation Coverage", "Consolidated Omnibus Budget Reconciliation Act"],
  category: "benefits",
  subtags: ["health", "employment", "federal"],

  context: {
    en: "COBRA is the federal law that lets a worker (and their family) keep employer-based health insurance for a limited time after losing the job, having hours cut, or going through certain other qualifying events. The worker pays the full premium, including the part the employer used to cover."
  },

  plainEnglish: {
    en: "A federal law that lets eligible workers and their dependents keep employer-sponsored health insurance for a limited period after a qualifying event. Common qualifying events are job loss (other than for gross misconduct), reduction in hours below the eligibility threshold, divorce or legal separation from the covered employee, death of the covered employee, and a child aging out of dependent coverage. Coverage usually lasts up to 18 months, with extensions to 36 months in some cases. The worker pays the full premium plus up to a 2 percent administrative fee. That cost is often much higher than what the employer used to deduct from the paycheck because the employer no longer pays the employer share. New York's mini-COBRA law applies to employers with fewer than 20 employees. The federal Affordable Care Act marketplace at NY State of Health is often a cheaper alternative — losing job-based coverage triggers a special enrollment period."
  },

  whatToAsk: {
    en: [
      "What qualifying event triggered COBRA eligibility?",
      "How long does COBRA continuation last in my situation?",
      "What is the full monthly premium with COBRA?",
      "Would a marketplace plan at NY State of Health cost less?",
      "What is the deadline to elect COBRA after the notice arrives?"
    ]
  },

  related: ["medicare", "medicaid", "managed-care"],
  legalEntryIds: ["ny-state-of-health-marketplace-ny"],

  citation: "29 USC § 1161+ (federal COBRA); NY Insurance Law § 3221(m), § 4304(k) (mini-COBRA)",
  sourceUrl: "https://www.dol.gov/general/topic/health-plans/cobra",
  lastVerified: "2026-04-26",
  status: "active"
};
