#!/usr/bin/env node
/**
 * scripts/migrate-helpfinder-questions-01.cjs
 *
 * Wires the new HelpFinderQuestions.js registry into HelpFinder.jsx.
 */

const fs = require('fs');
const path = require('path');

const FILE = path.join(__dirname, '..', 'src', 'components', 'HelpFinder.jsx');

let src = fs.readFileSync(FILE, 'utf8');
const orig = src;

const hadCRLF = src.includes('\r\n');
src = src.replace(/\r\n/g, '\n');

let patchesApplied = 0;
let patchesSkipped = 0;

function abort(msg) {
  console.error('FATAL:', msg);
  console.error('No changes written.');
  process.exit(1);
}

function patch(name, alreadyAppliedCheck, oldStr, newStr) {
  if (alreadyAppliedCheck(src)) {
    console.log(`  ${name}: already applied, skipping`);
    patchesSkipped++;
    return;
  }
  if (!src.includes(oldStr)) {
    abort(`${name}: anchor not found in HelpFinder.jsx`);
  }
  src = src.replace(oldStr, newStr);
  console.log(`  ${name}: applied`);
  patchesApplied++;
}

console.log('Reading HelpFinder.jsx...');
console.log('');

console.log('━━ 1. Add import for HelpFinderQuestions ━━');
{
  const importLine = 'import { QUESTIONS, getFirstQuestion, isDirectToResults, isHiddenCategory, getInitialPrograms, applyAnswerFilters, getUrgencyLevel } from "./HelpFinderQuestions";';

  if (src.includes('./HelpFinderQuestions')) {
    console.log('  already imported, skipping');
    patchesSkipped++;
  } else {
    const lines = src.split('\n');
    let lastImportIdx = -1;
    for (let i = 0; i < Math.min(lines.length, 100); i++) {
      if (/^import\s/.test(lines[i])) lastImportIdx = i;
    }
    if (lastImportIdx === -1) {
      abort('PATCH 1: could not find any existing import statement in first 100 lines');
    }
    lines.splice(lastImportIdx + 1, 0, importLine);
    src = lines.join('\n');
    console.log('  added import after existing imports');
    patchesApplied++;
  }
}

console.log('');
console.log('━━ 2. STEPS enum: add QUESTION step ━━');
patch(
  'STEPS enum',
  (s) => /STEPS\s*=\s*\{[^}]*QUESTION:/.test(s),
  'const STEPS = { HOME: 0, WHAT_TAB: 1, WHAT_CAT: 2, WHO: 3, HOW: 4, RESULTS: 5 };',
  'const STEPS = { HOME: 0, WHAT_TAB: 1, WHAT_CAT: 2, WHO: 3, HOW: 4, RESULTS: 5, QUESTION: 6 };'
);

console.log('');
console.log('━━ 3. Add answers + currentQuestionKey state ━━');
patch(
  'state declarations',
  (s) => s.includes('setCurrentQuestionKey'),
  '  const [showDVExit, setShowDVExit] = useState(false);\n  const containerRef = useRef(null);',
  '  const [showDVExit, setShowDVExit] = useState(false);\n  const [answers, setAnswers] = useState({});\n  const [currentQuestionKey, setCurrentQuestionKey] = useState(null);\n  const containerRef = useRef(null);'
);

console.log('');
console.log('━━ 4. selectCategory: route by category type ━━');
patch(
  'selectCategory',
  (s) => s.includes('isDirectToResults(key)'),
  '  const selectCategory = (key) => {\n    setCategory(key);\n    if (DV_CATS.has(key)) setShowDVExit(true);\n    goTo(STEPS.WHO);\n  };',
  '  const selectCategory = (key) => {\n    setCategory(key);\n    if (DV_CATS.has(key)) setShowDVExit(true);\n    setAnswers({});\n    setCurrentQuestionKey(null);\n    if (isDirectToResults(key)) {\n      goTo(STEPS.RESULTS);\n    } else {\n      const firstQ = getFirstQuestion(key);\n      if (firstQ) {\n        setCurrentQuestionKey(firstQ);\n        goTo(STEPS.QUESTION);\n      } else {\n        goTo(STEPS.WHO);\n      }\n    }\n  };'
);

console.log('');
console.log('━━ 5. Add answerQuestion function ━━');
patch(
  'answerQuestion',
  (s) => s.includes('const answerQuestion ='),
  '  const selectHow = (val) => { setHow(val); goTo(STEPS.RESULTS); };',
  '  const selectHow = (val) => { setHow(val); goTo(STEPS.RESULTS); };\n\n  const answerQuestion = (questionKey, value) => {\n    const newAnswers = { ...answers, [questionKey]: value };\n    setAnswers(newAnswers);\n    const question = QUESTIONS[questionKey];\n    const option = question && question.options && question.options.find(o => o.key === value);\n    const next = option && option.next;\n    if (next === "how") goTo(STEPS.HOW);\n    else if (next === "who") goTo(STEPS.WHO);\n    else if (next === "results" || next === null || next === undefined) goTo(STEPS.RESULTS);\n    else {\n      setCurrentQuestionKey(next);\n      goTo(STEPS.QUESTION);\n    }\n  };'
);

console.log('');
console.log('━━ 6. reset: clear new state ━━');
patch(
  'reset',
  (s) => /reset\s*=\s*\(\)\s*=>\s*\{[\s\S]{0,400}?setAnswers\(\{\}\)/.test(s),
  '    setWho(null); setHow(null); setExpandedCard(null);\n    // NOTE: showDVExit intentionally NOT cleared — once activated, stays visible for safety',
  '    setWho(null); setHow(null); setExpandedCard(null);\n    setAnswers({}); setCurrentQuestionKey(null);\n    // NOTE: showDVExit intentionally NOT cleared — once activated, stays visible for safety'
);

console.log('');
console.log('━━ 7. filteredPrograms: use registry helpers ━━');
patch(
  'filteredPrograms initial',
  (s) => s.includes('getInitialPrograms(PROGRAMS, category)'),
  '    if (!category) return [];\n    let progs = PROGRAMS.filter((p) => p.c === category);',
  '    if (!category) return [];\n    let progs = getInitialPrograms(PROGRAMS, category);\n    progs = applyAnswerFilters(progs, answers);'
);

console.log('');
console.log('━━ 7b. filteredPrograms: add answers to dep array ━━');
patch(
  'filteredPrograms deps',
  (s) => /\}, \[category, who, how, nearMe, userCoords, answers\]\);/.test(s),
  '}, [category, who, how, nearMe, userCoords]);',
  '}, [category, who, how, nearMe, userCoords, answers]);'
);

console.log('');
console.log('━━ 8. Add STEPS.QUESTION render block ━━');
{
  const questionBlock = `        {/* ── QUESTION (registry-driven) ── */}
        {step === STEPS.QUESTION && currentQuestionKey && QUESTIONS[currentQuestionKey] && (
          <div>
            <h2 style={{ fontSize: 18, fontWeight: 700, marginBottom: 12 }}>
              {QUESTIONS[currentQuestionKey].prompt}
            </h2>
            {SENSITIVE.has(category) && <PrivacyBadge lang={lang} sensitive />}
            <DVSafetyNotice lang={lang} category={category} />
            <CrisisIntercept lang={lang} category={category} />
            <div style={{ display: "flex", flexDirection: "column", gap: 8, marginTop: 12 }}>
              {QUESTIONS[currentQuestionKey].options.map(opt => (
                <button
                  key={opt.key}
                  onClick={() => answerQuestion(currentQuestionKey, opt.key)}
                  className="roc-btn"
                  style={btnStyle()}
                >
                  {opt.icon && <span style={{ fontSize: 22, marginRight: 4 }}>{opt.icon}</span>}
                  <span>{opt.label}</span>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* ── WHO ── */}`;

  patch(
    'QUESTION render block',
    (s) => s.includes('QUESTION (registry-driven)'),
    '        {/* ── WHO ── */}',
    questionBlock
  );
}

console.log('');
console.log('━━ 9. WHAT_CAT: filter out hidden categories ━━');
patch(
  'WHAT_CAT filter',
  (s) => s.includes('isHiddenCategory(catKey)'),
  '              {TABS[tab].needs.map((catKey) => {',
  '              {TABS[tab].needs.filter(catKey => !isHiddenCategory(catKey)).map((catKey) => {'
);

console.log('');
console.log('━━ 10. RESULTS: add urgency banner ━━');
{
  const urgencyBanner = `            {getUrgencyLevel(answers) === 'critical' && (
              <div style={{
                background: "#ffebee", border: "2px solid #c62828",
                borderRadius: 12, padding: 14, marginBottom: 16,
              }}>
                <div style={{ fontSize: 14, fontWeight: 700, color: "#c62828", marginBottom: 4 }}>
                  🚨 This is urgent — call today
                </div>
                <div style={{ fontSize: 13, color: "#5d1a1a" }}>
                  Don't wait. The first program below is the fastest path to help.
                </div>
              </div>
            )}
            {getUrgencyLevel(answers) === 'high' && (
              <div style={{
                background: "#fff3e0", border: "2px solid #ef6c00",
                borderRadius: 12, padding: 14, marginBottom: 16,
              }}>
                <div style={{ fontSize: 14, fontWeight: 700, color: "#ef6c00", marginBottom: 4 }}>
                  ⏰ Time-sensitive — call this week
                </div>
                <div style={{ fontSize: 13, color: "#5d2a00" }}>
                  Don't wait until your court date. Free legal help is available now.
                </div>
              </div>
            )}
            <h2 style={{ fontSize: 18, fontWeight: 700, marginBottom: 4 }}>
              {t(lang, "stepResults")}
            </h2>`;

  patch(
    'urgency banner',
    (s) => s.includes("getUrgencyLevel(answers) === 'critical'"),
    '            <h2 style={{ fontSize: 18, fontWeight: 700, marginBottom: 4 }}>\n              {t(lang, "stepResults")}\n            </h2>',
    urgencyBanner
  );
}

console.log('');
console.log('━━ 11. Hash routing: registry-aware deep links ━━');
{
  const oldHashHandler = `      if (c && CATEGORIES[c]) {
        setCategory(c);
        if (DV_CATS.has(c)) setShowDVExit(true);
        setStep(STEPS.WHO);
      }`;

  const newHashHandler = `      if (c && CATEGORIES[c]) {
        setCategory(c);
        if (DV_CATS.has(c)) setShowDVExit(true);
        if (isDirectToResults(c)) {
          setStep(STEPS.RESULTS);
        } else {
          const firstQ = getFirstQuestion(c);
          if (firstQ) {
            setCurrentQuestionKey(firstQ);
            setStep(STEPS.QUESTION);
          } else {
            setStep(STEPS.WHO);
          }
        }
      }`;

  patch(
    'hash routing',
    (s) => s.includes('const firstQ = getFirstQuestion(c);'),
    oldHashHandler,
    newHashHandler
  );
}

console.log('');
console.log('━━ 12. Step indicator: QUESTION renders at position 1 ━━');
patch(
  'step indicator',
  (s) => s.includes('step === STEPS.WHO || step === STEPS.QUESTION'),
  ': step === STEPS.WHO ? 1',
  ': step === STEPS.WHO || step === STEPS.QUESTION ? 1'
);

if (hadCRLF) src = src.replace(/\n/g, '\r\n');

if (src === orig) {
  console.log('');
  console.log('No changes (all patches already applied).');
} else {
  fs.writeFileSync(FILE, src);
  console.log('');
  console.log(`Done. ${orig.length} → ${src.length} bytes`);
  console.log(`Patches applied: ${patchesApplied}, skipped: ${patchesSkipped}`);
}
