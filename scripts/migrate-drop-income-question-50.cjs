#!/usr/bin/env node
/**
 * migrate-drop-income-question-50.cjs
 * ===================================
 * Removes the HOW (income) question from the HelpFinder questionnaire flow.
 *
 * Audit findings that justify the change:
 *   - Of ~470 programs, only 23 have an `inc` cap.
 *   - Most restrictive answer ("ok" = ~200% FPL) hides 10 programs;
 *     "tight" hides 3; "crisis" / "none" hide 0.
 *   - Income answers are NEVER recorded in telemetry. api/click.js stores
 *     program ID + count only.
 *   - The 23 capped programs already display their income limit on the
 *     result card (HelpFinder.jsx:1948-1952), so users can self-select.
 *
 * Scope: full cleanup. Removes flow, state, render block, useMemo dep,
 * and 40 translation strings (5 keys × 8 languages). Leaves STEPS.HOW
 * key in the STEPS object as a harmless unused enum value.
 */

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const HF = path.join(ROOT, 'src/components/HelpFinder.jsx');
let hf = fs.readFileSync(HF, 'utf8');
let failures = 0;
let successes = 0;

function doReplace(oldStr, newStr, label) {
  if (!hf.includes(oldStr)) {
    console.error('ABORT: ' + label);
    console.error('  Expected: ' + JSON.stringify(oldStr).slice(0, 160));
    failures++;
    return;
  }
  hf = hf.replace(oldStr, newStr);
  console.log('OK: ' + label);
  successes++;
}

// ═══════════════════════════════════════════════
// 1. FLOW: redirect away from STEPS.HOW
// ═══════════════════════════════════════════════

doReplace(
  '  const selectWho = (val) => { setWho(val); goTo(STEPS.HOW); };\n  const selectHow = (val) => { setHow(val); goTo(STEPS.RESULTS); };\n',
  '  const selectWho = (val) => { setWho(val); goTo(STEPS.RESULTS); };\n',
  'Flow: selectWho skips HOW, selectHow removed'
);

doReplace(
  '    if (next === "how") goTo(STEPS.HOW);\n',
  '    if (next === "how") goTo(STEPS.RESULTS);\n',
  'Flow: legacy next==="how" routes go straight to RESULTS'
);

// ═══════════════════════════════════════════════
// 2. STATE: remove `how` useState, reset, useMemo dep
// ═══════════════════════════════════════════════

doReplace(
  '  const [how, setHow] = useState(null);\n',
  '',
  'State: remove `how` useState'
);

doReplace(
  '    setWho(null); setHow(null); setExpandedCard(null);\n',
  '    setWho(null); setExpandedCard(null);\n',
  'State: remove setHow(null) from reset()'
);

doReplace(
  '  }, [category, who, how, nearMe, userCoords, answers, userTown]);\n',
  '  }, [category, who, nearMe, userCoords, answers, userTown]);\n',
  'State: remove `how` from filteredPrograms useMemo deps'
);

// ═══════════════════════════════════════════════
// 3. FILTER: delete dead income-filter block
// ═══════════════════════════════════════════════

doReplace(
  '    // HOW filter (income)\n' +
  '    // p.inc = max FPL% to qualify (e.g. SNAP=130 means must be ≤130% FPL)\n' +
  '    // We estimate the user\'s likely FPL range and hide programs they\n' +
  '    // almost certainly exceed the cutoff for. We err on SHOWING too much —\n' +
  '    // better to show something they might not qualify for than hide help they need.\n' +
  '    const estimatedMinFPL = { ok: 200, tight: 100, crisis: 0, none: 0 };\n' +
  '    if (how && estimatedMinFPL[how] > 0) {\n' +
  '      const userMin = estimatedMinFPL[how];\n' +
  '      progs = progs.filter((p) => !p.inc || p.inc >= userMin);\n' +
  '    }\n' +
  '    // "none" and "crisis" = show everything (they qualify for all income-limited programs)\n',
  '',
  'Filter: delete dead HOW (income) filter block'
);

// ═══════════════════════════════════════════════
// 4. STEP INDICATOR: 4 dots → 3 dots
// ═══════════════════════════════════════════════

doReplace(
  '  const stepLabels = [\n' +
  '    t(lang, "stepWhat"),\n' +
  '    t(lang, "stepWho"),\n' +
  '    t(lang, "stepHow"),\n' +
  '    t(lang, "stepResults"),\n' +
  '  ];\n' +
  '  const currentStepIndex =\n' +
  '    step === STEPS.WHAT_TAB || step === STEPS.WHAT_CAT ? 0\n' +
  '    : step === STEPS.WHO || step === STEPS.QUESTION ? 1\n' +
  '    : step === STEPS.HOW ? 2\n' +
  '    : step === STEPS.RESULTS ? 3\n' +
  '    : -1;\n',
  '  const stepLabels = [\n' +
  '    t(lang, "stepWhat"),\n' +
  '    t(lang, "stepWho"),\n' +
  '    t(lang, "stepResults"),\n' +
  '  ];\n' +
  '  const currentStepIndex =\n' +
  '    step === STEPS.WHAT_TAB || step === STEPS.WHAT_CAT ? 0\n' +
  '    : step === STEPS.WHO || step === STEPS.QUESTION ? 1\n' +
  '    : step === STEPS.RESULTS ? 2\n' +
  '    : -1;\n',
  'Step indicator: 4 labels → 3, RESULTS shifts to index 2'
);

// ═══════════════════════════════════════════════
// 5. RENDER: delete HOW screen
// ═══════════════════════════════════════════════

doReplace(
  '        {step === STEPS.HOW && (\n' +
  '          <div>\n' +
  '            <h2 style={{ fontSize: 18, fontWeight: 700, marginBottom: 6 }}>\n' +
  '              {t(lang, "stepHow")}\n' +
  '            </h2>\n' +
  '            {SENSITIVE.has(category) && <PrivacyBadge lang={lang} sensitive />}\n' +
  '\n' +
  '            <div style={{ display: "flex", flexDirection: "column", gap: 8, marginTop: 12 }}>\n' +
  '              {[\n' +
  '                { key: "ok", label: t(lang, "howOk"), icon: "👍" },\n' +
  '                { key: "tight", label: t(lang, "howTight"), icon: "🤞" },\n' +
  '                { key: "crisis", label: t(lang, "howCrisis"), icon: "🫶" },\n' +
  '                { key: "none", label: t(lang, "howNone"), icon: "🌱" },\n' +
  '              ].map((opt) => (\n' +
  '                <button key={opt.key} onClick={() => selectHow(opt.key)} className="roc-btn" style={btnStyle()}\n' +
  '                >\n' +
  '                  <span style={{ fontSize: 20 }}>{opt.icon}</span>\n' +
  '                  <span>{opt.label}</span>\n' +
  '                </button>\n' +
  '              ))}\n' +
  '            </div>\n' +
  '          </div>\n' +
  '        )}\n\n',
  '',
  'Render: delete HOW question screen'
);

// ═══════════════════════════════════════════════
// 6. STRINGS: remove stepHow + howOk/Tight/Crisis/None across 8 languages
// ═══════════════════════════════════════════════
//
// One stepHow line + one 4-line how-options block per language.
// Each language's exact text was captured by reading the file.
// AR + ZH literals embedded — script aborts cleanly on encoding mismatch.

// English (en)
doReplace('    stepHow: "How is your money situation?",\n', '', 'EN: stepHow');
doReplace(
  '    howOk: "We\'re getting by",\n' +
  '    howTight: "Money is tight",\n' +
  '    howCrisis: "We can\'t pay for basics",\n' +
  '    howNone: "No income right now",\n',
  '',
  'EN: howOk/Tight/Crisis/None'
);

// Spanish (es)
doReplace('    stepHow: "¿Cómo está su situación económica?",\n', '', 'ES: stepHow');
doReplace(
  '    howOk: "Nos mantenemos",\n' +
  '    howTight: "El dinero está apretado",\n' +
  '    howCrisis: "No podemos pagar lo básico",\n' +
  '    howNone: "Sin ingresos ahora",\n',
  '',
  'ES: howOk/Tight/Crisis/None'
);

// Nepali (ne)
doReplace('    stepHow: "तपाईंको आर्थिक अवस्था कस्तो छ?",\n', '', 'NE: stepHow');
doReplace(
  '    howOk: "हामी चलिरहेका छौं",\n' +
  '    howTight: "पैसा तन्किएको छ",\n' +
  '    howCrisis: "आधारभूत कुरा तिर्न सक्दैनौं",\n' +
  '    howNone: "अहिले आम्दानी छैन",\n',
  '',
  'NE: howOk/Tight/Crisis/None'
);

// Arabic (ar)
doReplace('    stepHow: "كيف وضعك المادي؟",\n', '', 'AR: stepHow');
doReplace(
  '    howOk: "نحن بخير",\n' +
  '    howTight: "المال ضيق",\n' +
  '    howCrisis: "لا نستطيع دفع الأساسيات",\n' +
  '    howNone: "لا دخل حالياً",\n',
  '',
  'AR: howOk/Tight/Crisis/None'
);

// Swahili (sw)
doReplace('    stepHow: "Hali yako ya fedha ikoje?",\n', '', 'SW: stepHow');
doReplace(
  '    howOk: "Tunaendelea",\n' +
  '    howTight: "Fedha ni ngumu",\n' +
  '    howCrisis: "Hatuwezi kulipa mahitaji ya msingi",\n' +
  '    howNone: "Hakuna mapato sasa",\n',
  '',
  'SW: howOk/Tight/Crisis/None'
);

// Burmese (my)
doReplace('    stepHow: "ငွေကြေးအခြေအနေဘယ်လိုရှိပါသလဲ?",\n', '', 'MY: stepHow');
doReplace(
  '    howOk: "ရပ်တည်နိုင်ပါတယ်",\n' +
  '    howTight: "ငွေကြေးကျပ်တည်းပါတယ်",\n' +
  '    howCrisis: "အခြေခံစရိတ်မပေးနိုင်ပါ",\n' +
  '    howNone: "အခုဝင်ငွေမရှိပါ",\n',
  '',
  'MY: howOk/Tight/Crisis/None'
);

// Somali (so)
doReplace('    stepHow: "Sidee bay tahay xaaladaada dhaqaale?",\n', '', 'SO: stepHow');
doReplace(
  '    howOk: "Waan iska maareynaa",\n' +
  '    howTight: "Lacagtu way cidhiidhi tahay",\n' +
  '    howCrisis: "Aasaasiga ma bixin karno",\n' +
  '    howNone: "Dakhli ma hayno hadda",\n',
  '',
  'SO: howOk/Tight/Crisis/None'
);

// Chinese (zh)
doReplace('    stepHow: "您的经济状况如何？",\n', '', 'ZH: stepHow');
doReplace(
  '    howOk: "还过得去",\n' +
  '    howTight: "钱很紧",\n' +
  '    howCrisis: "付不起基本开支",\n' +
  '    howNone: "目前没有收入",\n',
  '',
  'ZH: howOk/Tight/Crisis/None'
);

// ═══════════════════════════════════════════════
// WRITE
// ═══════════════════════════════════════════════

if (failures === 0) {
  fs.writeFileSync(HF, hf, 'utf8');
}
console.log('\n' + successes + ' changes, ' + failures + ' failures.');
if (failures > 0) {
  console.error('\nABORT: source file NOT written. Fix mismatches and retry.');
  process.exit(1);
}
console.log('\nWrote: ' + path.relative(ROOT, HF));
