// src/components/HelpFinderQuestions.js
//
// Question registry and category-question routing for HelpFinder.
//
// Purpose: replace the hardcoded WHO/HOW questions for selected categories
// (legal, crisis) with a per-category question flow that can branch on
// the user's answer. Different categories ask different questions in
// different orders. Other categories continue using the existing default
// WHO → HOW → RESULTS flow with no changes.
//
// CONVENTIONS:
//
// QUESTIONS[key] = {
//   prompt:  string             // shown at top of question screen (English only for now)
//   options: [
//     {
//       key:    string           // machine-readable answer
//       label:  string           // shown on the button
//       icon:   string?          // optional emoji
//       next:   string|null      // see "Special next values" below
//       urgent: 'critical'|'high'?  // optional urgency tag for the answer
//     },
//     ...
//   ]
//   filter: (programs, value) => programs   // narrows program list based on answer
// }
//
// Special `next` values:
//   'how'     → go to existing STEPS.HOW (income question)
//   'who'     → go to existing STEPS.WHO (household question)
//   'results' → go to STEPS.RESULTS
//   null      → same as 'results'
//   anything else → look up that key in QUESTIONS and ask it next
//
// CATEGORY_FIRST_QUESTION[categoryKey] = questionKey
//   Categories listed here use the registry flow starting from the named
//   question. Categories NOT listed here use the existing default WHO/HOW
//   linear flow (no changes).
//
// CATEGORY_DIRECT_TO_RESULTS = Set
//   Categories that bypass questions entirely and go straight to results.
//
// CATEGORY_PROGRAM_FILTER[categoryKey] = (program) => boolean
//   For meta-categories (like `legal` covering 9 sub-categories), this
//   defines which programs are in scope BEFORE answer filtering. Categories
//   without an entry use the default `p.c === categoryKey` filter.
//
// English-only for now. Translations added later via the same i18n pattern
// used by t() in HelpFinder.jsx — adding label_es, label_ar etc on each
// option, or moving to a t() lookup.

export const QUESTIONS = {

  // ─────────────────────────────────────────────────────────────
  // LEGAL FLOW
  // ─────────────────────────────────────────────────────────────

  legalArea: {
    prompt: "What's happening?",
    options: [
      { key: 'eviction',    label: "I'm being kicked out of my home",                          icon: "🏚️", next: 'evictionUrgency' },
      { key: 'immigration', label: "I'm dealing with immigration",                              icon: "🌍", next: 'immigrationKind' },
      { key: 'benefits',    label: "I lost my SNAP, SSI, or other benefits",                    icon: "📋", next: 'benefitsKind' },
      { key: 'work',        label: "I'm not getting paid, or I have a problem at work",         icon: "💼", next: 'workKind' },
      { key: 'discrim',     label: "Someone is treating me unfairly because of who I am",      icon: "🚫", next: 'language' },
      { key: 'debt',        label: "I owe money / debt collectors are calling",                icon: "💳", next: 'language' },
      { key: 'criminal',    label: "I have a criminal record I want to clear",                 icon: "📄", next: 'language' },
      { key: 'smallclaims', label: "I have a small claims issue (under $10,000)",              icon: "⚖️", next: 'language' },
      { key: 'unsure',      label: "Something else / I'm not sure",                            icon: "❓", next: 'language' },
    ],
    filter: (programs, value) => {
      const map = {
        eviction:    'legalEviction',
        immigration: 'legalImmigration',
        benefits:    'legalBenefits',
        work:        'legalWorkers',
        discrim:     'legalDiscrim',
        debt:        'legalDebt',
        criminal:    'legalCrimRecord',
        smallclaims: 'legalSmallClaims',
        // unsure → no narrowing, show all legal programs across all sub-cats
      };
      const targetCat = map[value];
      if (!targetCat) {
        return programs; // unsure → keep all
      }
      // Include both the specific sub-cat AND the general 'legal' cat,
      // since multi-area orgs (like LawNY) may live in 'legal'.
      return programs.filter(p => p.c === targetCat || p.c === 'legal');
    },
  },

  evictionUrgency: {
    prompt: "How soon is your court date?",
    options: [
      { key: 'thisWeek', label: "The marshal is coming this week — I'm losing my home in days", icon: "🚨", next: 'language', urgent: 'critical' },
      { key: 'twoWeeks', label: "I have a court date in the next 2 weeks",                       icon: "⏰", next: 'language', urgent: 'high'    },
      { key: 'later',    label: "I have a court date more than 2 weeks away",                    icon: "📅", next: 'language' },
      { key: 'noDate',   label: "I got papers but no court date yet",                            icon: "📄", next: 'language' },
      { key: 'worried',  label: "I'm worried I might be evicted but nothing official yet",       icon: "💭", next: 'language' },
    ],
    filter: (programs, value) => programs, // urgency is informational; results render handles the banner
  },

  immigrationKind: {
    prompt: "What's going on?",
    options: [
      { key: 'iceContact', label: "ICE has contacted me, or I have a hearing soon",   icon: "🚨", next: 'language', urgent: 'critical' },
      { key: 'renewal',    label: "I'm renewing or applying for status",              icon: "📋", next: 'language' },
      { key: 'rights',     label: "I just want to know my rights",                    icon: "📖", next: 'language' },
    ],
    filter: (programs, value) => programs,
  },

  benefitsKind: {
    prompt: "Which benefit?",
    options: [
      { key: 'snap',     label: "SNAP / food stamps",          icon: "🍎", next: 'language' },
      { key: 'ssi',      label: "SSI or Social Security",       icon: "💰", next: 'language' },
      { key: 'cash',     label: "DSS / cash assistance",        icon: "💵", next: 'language' },
      { key: 'medicaid', label: "Medicaid / health insurance",  icon: "🏥", next: 'language' },
      { key: 'multiple', label: "More than one of these",       icon: "📋", next: 'language' },
    ],
    filter: (programs, value) => programs,
  },

  workKind: {
    prompt: "What kind of problem?",
    options: [
      { key: 'wageTheft',  label: "I haven't been paid / wage theft",          icon: "💸", next: 'language' },
      { key: 'wrongFire',  label: "I was fired and I think it was wrong",      icon: "🚪", next: 'language' },
      { key: 'harassment', label: "I'm being harassed at work",                icon: "⚠️", next: 'language' },
      { key: 'workComp',   label: "I'm hurt at work and need workers' comp",   icon: "🩹", next: 'language' },
      { key: 'other',      label: "Something else",                             icon: "❓", next: 'language' },
    ],
    filter: (programs, value) => programs,
  },

  language: {
    prompt: "What language do you need help in at the appointment?",
    options: [
      { key: 'en',    label: "English",              icon: "🇺🇸", next: 'how' },
      { key: 'es',    label: "Spanish / Español",    icon: "🌎", next: 'how' },
      { key: 'ne',    label: "Nepali / नेपाली",       icon: "🇳🇵", next: 'how' },
      { key: 'ar',    label: "Arabic / العربية",      icon: "🌍", next: 'how' },
      { key: 'sw',    label: "Swahili / Kiswahili",  icon: "🌍", next: 'how' },
      { key: 'my',    label: "Burmese / မြန်မာ",     icon: "🇲🇲", next: 'how' },
      { key: 'so',    label: "Somali / Soomaali",    icon: "🇸🇴", next: 'how' },
      { key: 'zh',    label: "Chinese / 中文",        icon: "🇨🇳", next: 'how' },
      { key: 'other', label: "Other / I'm not sure", icon: "❓", next: 'how' },
    ],
    filter: (programs, value) => programs, // informational; results render shows interpreter notice
  },

  // ─────────────────────────────────────────────────────────────
  // CRISIS FLOW
  // ─────────────────────────────────────────────────────────────

  crisisType: {
    prompt: "What kind of help do you need right now?",
    options: [
      { key: 'selfHarm',  label: "I'm thinking about hurting myself",                  icon: "💔", next: 'results' },
      { key: 'medical',   label: "Someone is having a medical emergency",              icon: "🚑", next: 'results' },
      { key: 'unsafe',    label: "I'm not safe at home / someone is hurting me",       icon: "🚪", next: 'results', urgent: 'critical' },
      { key: 'childRisk', label: "My child is in immediate danger",                    icon: "🆘", next: 'results', urgent: 'critical' },
      { key: 'mhCrisis',  label: "I'm in a mental health crisis but not suicidal",     icon: "💭", next: 'results' },
      { key: 'other',     label: "Something else urgent",                              icon: "❓", next: 'results' },
    ],
    filter: (programs, value) => {
      // Map each crisis type to the categories that should be surfaced.
      const map = {
        selfHarm:  ['mental', 'crisis'],
        medical:   ['crisis', 'health'],
        unsafe:    ['domesticSvc', 'crisis'],
        childRisk: ['crisisChild', 'domesticSvc'],
        mhCrisis:  ['mental', 'crisis'],
        other:     ['crisis'],
      };
      const cats = map[value] || ['crisis'];
      return programs.filter(p => cats.includes(p.c));
    },
  },
};

// ─────────────────────────────────────────────────────────────
// CATEGORY → FIRST QUESTION MAPPING
// ─────────────────────────────────────────────────────────────

// Categories that use the registry flow. The value is the first question
// to ask. Categories NOT listed here use the existing default WHO/HOW flow.
export const CATEGORY_FIRST_QUESTION = {
  legal:  'legalArea',
  crisis: 'crisisType',
};

// Categories that bypass questions entirely and go directly to results.
// (Reserved for safety reasons — DV/crisisChild should never make a user
// answer questions before seeing help.)
export const CATEGORY_DIRECT_TO_RESULTS = new Set([
  'domesticSvc',
  'crisisChild',
  'pets',
]);

// Meta-category program filters. For categories where the program list
// spans multiple `c` values (e.g. `legal` covers 9 sub-categories),
// this defines which programs are in scope BEFORE answer filtering.
// Categories without an entry use the default `p.c === categoryKey` filter.
export const CATEGORY_PROGRAM_FILTER = {
  legal: (p) => p.c === 'legal'
            || p.c === 'legalEviction'
            || p.c === 'legalWorkers'
            || p.c === 'legalBenefits'
            || p.c === 'legalImmigration'
            || p.c === 'legalDiscrim'
            || p.c === 'legalDebt'
            || p.c === 'legalSmallClaims'
            || p.c === 'legalCrimRecord',
  crisis: (p) => p.c === 'crisis'
             || p.c === 'mental'
             || p.c === 'domesticSvc'
             || p.c === 'crisisChild'
             || p.c === 'health',
};

// Categories hidden from the WHAT_CAT navigation list. They still exist
// as data buckets and can be reached via deep links or via the `legal`
// flow's branching, but they don't appear as standalone navigation entries.
export const HIDDEN_CATEGORIES = new Set([
  'legalEviction',
  'legalWorkers',
  'legalBenefits',
  'legalImmigration',
  'legalDiscrim',
  'legalDebt',
  'legalSmallClaims',
  'legalCrimRecord',
]);

// ─────────────────────────────────────────────────────────────
// HELPERS
// ─────────────────────────────────────────────────────────────

// Returns the first question key for a category, or null if it uses the
// default WHO/HOW flow.
export function getFirstQuestion(categoryKey) {
  return CATEGORY_FIRST_QUESTION[categoryKey] || null;
}

// Returns true if the category should bypass questions entirely.
export function isDirectToResults(categoryKey) {
  return CATEGORY_DIRECT_TO_RESULTS.has(categoryKey);
}

// Returns true if the category should be hidden from the WHAT_CAT list.
export function isHiddenCategory(categoryKey) {
  return HIDDEN_CATEGORIES.has(categoryKey);
}

// Get the initial program list for a category, applying meta-category
// filters if applicable.
export function getInitialPrograms(programs, categoryKey) {
  const customFilter = CATEGORY_PROGRAM_FILTER[categoryKey];
  if (customFilter) {
    return programs.filter(customFilter);
  }
  return programs.filter(p => p.c === categoryKey);
}

// Apply all answered question filters to the program list. Each question's
// filter function is applied independently.
export function applyAnswerFilters(programs, answers) {
  let result = programs;
  for (const [questionKey, value] of Object.entries(answers || {})) {
    const question = QUESTIONS[questionKey];
    if (question && typeof question.filter === 'function') {
      result = question.filter(result, value);
    }
  }
  return result;
}

// Returns programs filtered by user's town. A program matches if either:
//   - its `town` field equals userTown (single-town program), OR
//   - its `serves` array includes userTown (multi-town program)
// When userTown is null/undefined, returns programs unchanged (no-op).
//
// Multi-town schema fix added April 9, 2026: programs that serve multiple
// specific towns (e.g. a Foodlink mobile pantry stopping in 6 villages, or
// a workforce program serving Spencerport, Hilton, and Hamlin from a Greece
// office) can declare `serves: ["brockport","spencerport","hilton"]` and
// will appear in each town's results without needing duplicate program entries.
export function applyTownFilter(programs, userTown) {
  if (!userTown) return programs;
  return programs.filter(p => !p.town || p.town === userTown || (p.serves && p.serves.includes(userTown)));
}


// Returns the highest urgency level across all answered questions, or null.
// 'critical' > 'high' > null
export function getUrgencyLevel(answers) {
  let highest = null;
  for (const [questionKey, value] of Object.entries(answers || {})) {
    const question = QUESTIONS[questionKey];
    if (!question || !question.options) continue;
    const option = question.options.find(o => o.key === value);
    if (option && option.urgent) {
      if (option.urgent === 'critical') return 'critical';
      if (option.urgent === 'high') highest = 'high';
    }
  }
  return highest;
}

