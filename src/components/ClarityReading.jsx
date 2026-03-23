import { useState, useEffect, useRef, useCallback } from "react";
import { AREAS, STATES, FREE_QUESTIONS, REFLECTIONS, PAID_TIERS, TIER_INSTRUCTIONS, POST_READING_RESOURCES } from "../data/clarity_tree.js";
import { checkCrisisMultilingual } from "../data/crisis_keywords.js";
import { getRandomClosing } from "../data/clarity_closings.js";

// CLARITY READING — Production · Sedral Studios
// Free path: tree + closings + crisis detection (fully wired)
// Paid path: Claude API + hidden tiers (wired, needs /api/clarity endpoint)

// checkCrisis is now called with the lang prop — see inside the component
const getTier = (a) => PAID_TIERS.find((t) => a >= t.min && a <= t.max) || PAID_TIERS[0];

// MASTER ACCESS CODE — change this to whatever you want
const MASTER_CODE = "SEDISTIX";

const SYS_BASE = "You are a clarity reader built on the 0 cypher framework. You read what was never said but shaped everything that was.\n\nCRITICAL: This is not therapy. Do not diagnose. Do not prescribe. Do not tell them what to do. Show them what you see. The rest is theirs.\nTone: warm, direct, honest. Not clinical. Not mystical. Like a friend who sees too much and loves you anyway.";

async function callClaude(messages, tierInst, wordRange) {
  const API_URL = "/api/clarity";
  try {
    const res = await fetch(API_URL, { method: "POST", headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ model: "claude-sonnet-4-20250514", max_tokens: 1500,
        system: SYS_BASE + "\n\nREADING DEPTH:\n" + tierInst + "\n\nTarget: " + wordRange + " words.", messages }) });
    const data = await res.json();
    return (data.content || []).map((c) => c.text || "").join("\n").trim() || "Something went wrong. Your answers were not saved. Please try again.";
  } catch (e) { console.error(e); return "Something went wrong generating your reading. Please try again."; }
}

// Components
const Fade = ({ children, k }) => { const [v, setV] = useState(false); useEffect(() => { setV(false); const t = setTimeout(() => setV(true), 50); return () => clearTimeout(t); }, [k]); return <div style={{ opacity: v ? 1 : 0, transform: v ? "translateY(0)" : "translateY(12px)", transition: "opacity 0.6s ease, transform 0.6s ease" }}>{children}</div>; };

const MCBtn = ({ label, icon, onClick }) => (<button onClick={onClick} style={{ background: "transparent", border: "1px solid #333", borderRadius: 20, padding: "14px 20px", width: "100%", textAlign: "left", cursor: "pointer", fontFamily: "inherit", fontSize: 15, color: "#ccc", display: "flex", alignItems: "center", gap: 12, transition: "border-color 0.15s" }} onMouseEnter={(e) => e.currentTarget.style.borderColor = "#d4a056"} onMouseLeave={(e) => e.currentTarget.style.borderColor = "#333"}>{icon && <span style={{ fontSize: 20, flexShrink: 0 }}>{icon}</span>}<span>{label}</span></button>);

const TxtIn = ({ onSubmit }) => { const [v, setV] = useState(""); const r = useRef(null); useEffect(() => { const t = setTimeout(() => r.current?.focus(), 600); return () => clearTimeout(t); }, []); const go = () => { if (v.trim()) { onSubmit(v.trim()); setV(""); } }; return (<div style={{ marginTop: 24 }}><textarea ref={r} value={v} onChange={(e) => setV(e.target.value)} onKeyDown={(e) => { if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); go(); } }} placeholder="Type here..." rows={4} style={{ width: "100%", background: "transparent", border: "1px solid #333", borderRadius: 16, padding: "14px 18px", color: "#ccc", fontSize: 15, fontFamily: "inherit", resize: "none", outline: "none", lineHeight: 1.5, boxSizing: "border-box" }} onFocus={(e) => e.target.style.borderColor = "#555"} onBlur={(e) => e.target.style.borderColor = "#333"} /><div style={{ display: "flex", justifyContent: "flex-end", marginTop: 10 }}><button onClick={go} disabled={!v.trim()} style={{ background: v.trim() ? "#d4a056" : "#333", color: v.trim() ? "#000" : "#555", border: "none", borderRadius: 20, padding: "10px 28px", fontSize: 14, fontWeight: 600, cursor: v.trim() ? "pointer" : "default", fontFamily: "inherit" }}>→</button></div></div>); };

const CrisisBox = () => (<div style={{ background: "rgba(211,47,47,0.1)", border: "1px solid rgba(211,47,47,0.3)", borderRadius: 16, padding: "16px 20px", marginTop: 16, marginBottom: 8 }}><div style={{ fontSize: 14, color: "#ef5350", fontWeight: 600, marginBottom: 6 }}>Help is available right now.</div><div style={{ fontSize: 13, color: "#999", lineHeight: 1.5, marginBottom: 10 }}>If you are in danger or thinking about hurting yourself, please reach out.</div><div style={{ display: "flex", flexDirection: "column", gap: 8 }}><a href="tel:988" style={{ display: "block", textAlign: "center", padding: "10px 16px", background: "rgba(211,47,47,0.15)", color: "#ef5350", borderRadius: 12, fontSize: 14, fontWeight: 600, textDecoration: "none" }}>988 — Suicide & Crisis Lifeline</a><a href="tel:211" style={{ display: "block", textAlign: "center", padding: "10px 16px", background: "rgba(255,255,255,0.05)", color: "#999", borderRadius: 12, fontSize: 14, textDecoration: "none" }}>211 — Local help, 24/7</a><a href="tel:18006624357" style={{ display: "block", textAlign: "center", padding: "10px 16px", background: "rgba(255,255,255,0.05)", color: "#999", borderRadius: 12, fontSize: 14, textDecoration: "none" }}>1-800-662-4357 — SAMHSA</a></div><div style={{ fontSize: 11, color: "#666", marginTop: 10, textAlign: "center" }}>You can continue your reading below.</div></div>);

const ResBox = ({ r }) => (<div style={{ background: "rgba(255,255,255,0.03)", border: "1px solid #222", borderRadius: 16, padding: "14px 18px", marginTop: 20 }}><div style={{ fontSize: 12, color: "#888", lineHeight: 1.5, marginBottom: 8 }}>{r.text}</div><a href={"tel:" + r.number} style={{ color: "#d4a056", fontSize: 14, fontWeight: 600, textDecoration: "none" }}>{r.label}</a></div>);

const DonScr = ({ pre, onDonate, onSkip }) => {
  const [c, setC] = useState("");
  const [s, setS] = useState(null);
  const [code, setCode] = useState("");
  const [codeErr, setCodeErr] = useState(false);
  const a = c ? parseFloat(c) : s;

  const FAIL_KEY = "clarity_fails";
  const COOL_KEY = "clarity_cooldown";
  const COOLDOWN_MS = 10 * 60 * 1000;

  const getCooldownLeft = () => {
    const until = parseInt(localStorage.getItem(COOL_KEY) || "0");
    return Math.max(0, until - Date.now());
  };

  const [cooldown, setCooldown] = useState(getCooldownLeft());

  useEffect(() => {
    if (cooldown <= 0) return;
    const interval = setInterval(() => {
      const left = getCooldownLeft();
      setCooldown(left);
      if (left <= 0) {
        clearInterval(interval);
        localStorage.setItem(FAIL_KEY, "0");
        localStorage.removeItem(COOL_KEY);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [cooldown]);

  const fmtCooldown = (ms) => {
    const m = Math.floor(ms / 60000);
    const s = Math.floor((ms % 60000) / 1000);
    return m + ":" + String(s).padStart(2, "0");
  };

  const handleCode = () => {
    if (cooldown > 0) return;
    if (code.trim().toUpperCase() === MASTER_CODE) {
      localStorage.removeItem(FAIL_KEY);
      localStorage.removeItem(COOL_KEY);
      onDonate(999);
    } else {
      const fails = parseInt(localStorage.getItem(FAIL_KEY) || "0") + 1;
      localStorage.setItem(FAIL_KEY, fails);
      if (fails >= 2) {
        const until = Date.now() + COOLDOWN_MS;
        localStorage.setItem(COOL_KEY, until);
        setCooldown(COOLDOWN_MS);
        localStorage.setItem(FAIL_KEY, "0");
      } else {
        setCodeErr(true);
        setTimeout(() => setCodeErr(false), 1800);
      }
      setCode("");
    }
  };

  return (
    <div style={{ textAlign: "center" }}>
      <div style={{ fontSize: 20, fontWeight: 600, color: "#fff", marginBottom: 8, fontFamily: "Georgia, serif" }}>
        {pre ? "What is this worth to you?" : "A deeper reading looks underneath what you said."}
      </div>
      <div style={{ fontSize: 13, color: "#777", marginBottom: 28 }}>
        {pre ? "Pay what you feel." : "Donations of any amount unlock the full reading."}
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 10, justifyContent: "center", marginBottom: 20 }}>
        {[5,10,25,50,100].map((p) => (
          <button key={p} onClick={() => { setS(p); setC(""); }} style={{ width: 52, height: 52, borderRadius: "50%", background: s === p ? "#d4a056" : "transparent", color: s === p ? "#000" : "#999", border: s === p ? "none" : "1px solid #444", fontSize: 14, fontWeight: 600, cursor: "pointer", fontFamily: "inherit" }}>${p}</button>
        ))}
      </div>
      <input type="number" placeholder="Other amount" value={c} onChange={(e) => { setC(e.target.value); setS(null); }} style={{ background: "transparent", border: "1px solid #333", borderRadius: 20, padding: "12px 18px", color: "#ccc", fontSize: 15, fontFamily: "inherit", outline: "none", textAlign: "center", width: 160 }} />
      <div style={{ marginTop: 20 }}>
        <button onClick={() => a > 0 && onDonate(a)} disabled={!a} style={{ background: a ? "#d4a056" : "#333", color: a ? "#000" : "#555", border: "none", borderRadius: 28, padding: "14px 40px", fontSize: 16, fontWeight: 700, cursor: a ? "pointer" : "default", fontFamily: "inherit", width: "100%", maxWidth: 280 }}>Continue</button>
      </div>
      <div style={{ marginTop: 32, borderTop: "1px solid #1a1a1a", paddingTop: 20 }}>
        <div style={{ display: "flex", gap: 8, justifyContent: "center", maxWidth: 280, margin: "0 auto" }}>
          {cooldown > 0 ? (
            <div style={{ color: "#333", fontSize: 13, fontFamily: "inherit", letterSpacing: 2, padding: "10px 0" }}>
              {fmtCooldown(cooldown)}
            </div>
          ) : (
            <>
              <input
                type="password"
                placeholder="·····"
                value={code}
                onChange={(e) => setCode(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleCode()}
                style={{ background: "transparent", border: codeErr ? "1px solid #c0392b" : "1px solid #222", borderRadius: 16, padding: "10px 16px", color: codeErr ? "#c0392b" : "#444", fontSize: 14, fontFamily: "inherit", outline: "none", width: 120, textAlign: "center", letterSpacing: 4 }}
              />
              <button onClick={handleCode} style={{ background: "transparent", border: "1px solid #222", borderRadius: 16, padding: "10px 18px", color: "#444", fontSize: 13, cursor: "pointer", fontFamily: "inherit" }}>→</button>
            </>
          )}
        </div>
      </div>
      {onSkip && <button onClick={onSkip} style={{ background: "none", border: "none", color: "#555", fontSize: 13, cursor: "pointer", marginTop: 16, fontFamily: "inherit" }}>{pre ? "Go back" : "No thanks"}</button>}
    </div>
  );
};

// FLOW CONSTANTS
const F = { MC1:0, MC2:1, MC3:2, FQ1:10, FQ2:11, FQ3:12, FREFL:13, FUPG:14, PDON:20, PQ:30, PLOAD:40, PREAD:41, DONE:99 };


// Animated loading screen with rotating messages
const LOAD_MSGS = [
  "Reading your answers...",
  "Finding the pattern...",
  "Almost there...",
  "Finishing your reading...",
];
const LoadingScreen = () => {
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % LOAD_MSGS.length), 2200);
    return () => clearInterval(t);
  }, []);
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", minHeight: "40vh", gap: 24 }}>
      <div style={{ display: "flex", gap: 8 }}>
        {[0,1,2].map((i) => (
          <div key={i} style={{ width: 8, height: 8, borderRadius: "50%", background: "#d4a056", opacity: 0.3, animation: `dotPulse 1.4s ease ${i * 0.2}s infinite` }} />
        ))}
      </div>
      <div style={{ fontSize: 14, color: "#666", fontFamily: "Georgia, serif", letterSpacing: 1, transition: "opacity 0.4s" }}>{LOAD_MSGS[idx]}</div>
      <style>{`@keyframes dotPulse{0%,100%{opacity:.2;transform:scale(1)}50%{opacity:1;transform:scale(1.3)}}`}</style>
    </div>
  );
};

export default function ClarityReading({ initialDoor, lang = "en", onExit }) {
  const [step, setStep] = useState(F.MC1);
  const [area, setArea] = useState(null);
  const [sit, setSit] = useState(null);
  const [emo, setEmo] = useState(null);
  const [path, setPath] = useState(initialDoor === "shadow" ? "paid" : "free");
  const [amt, setAmt] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [crisis, setCrisis] = useState(false);
  const [pqIdx, setPqIdx] = useState(0);
  const [pqText, setPqText] = useState("");
  const [pReading, setPReading] = useState("");
  const [reveal, setReveal] = useState(false);
  const [philo, setPhilo] = useState("");
  const cRef = useRef(null);

  const aObj = area ? AREAS.find((a) => a.id === area) : null;
  const sits = aObj?.situations || [];
  const fqs = sit ? (FREE_QUESTIONS[sit] || []) : [];
  const refl = sit ? REFLECTIONS[sit] : null;
  const res = refl?.resource ? POST_READING_RESOURCES[refl.resource] : null;
  const tier = getTier(amt);

  useEffect(() => { cRef.current?.scrollTo(0, 0); }, [step]);
  useEffect(() => { if (initialDoor === "shadow") setPath("paid"); else if (initialDoor === "mirror") setPath("free"); }, [initialDoor]);

  const addAnswer = (t) => { if (checkCrisisMultilingual(t, lang)) setCrisis(true); setAnswers((p) => [...p, t]); };

  const genQ = useCallback(async (idx, prev) => {
    const m = [{ role: "user", content: "Profile: Area=" + area + ", Situation=" + sit + ", State=" + emo + "\n\nGenerate question " + (idx+1) + " of 6." + (idx > 0 ? "\nPrevious answers:\n" + prev.map((a,i) => "Q" + (i+1) + ": \"" + a + "\"").join("\n") : " This is the first question.") + "\n\nOne question only. Short. Go deeper than the last." }];
    return await callClaude(m, TIER_INSTRUCTIONS[tier.id], tier.words);
  }, [area, sit, emo, tier]);

  const genR = useCallback(async (all) => {
    const m = [{ role: "user", content: "Profile: Area=" + area + ", Situation=" + sit + ", State=" + emo + "\n\nAll 6 answers:\n" + all.map((a,i) => "Q" + (i+1) + ": \"" + a + "\"").join("\n") + "\n\nDeliver the reading." }];
    return await callClaude(m, TIER_INSTRUCTIONS[tier.id], tier.words);
  }, [area, sit, emo, tier]);

  // Load first paid Q
  useEffect(() => { if (step === F.PQ && pqIdx === 0 && !pqText) { genQ(0, []).then(setPqText); } }, [step, pqIdx, pqText, genQ]);
  // Loading → reading
  useEffect(() => { if (step === F.PLOAD) { genR(answers).then((r) => { setPReading(r); setReveal(false); setStep(F.PREAD); }); } }, [step, answers, genR]);
  // Reveal
  useEffect(() => { if (step === F.FREFL || step === F.PREAD) { const t = setTimeout(() => setReveal(true), 800); return () => clearTimeout(t); } }, [step]);
  // Philo closing
  useEffect(() => { if (step === F.FREFL && area) setPhilo(getRandomClosing(area) || ""); }, [step, area]);

  const home = () => onExit?.();
  const Q = (s) => ({ fontSize: 18, color: "#fff", lineHeight: 1.5, fontFamily: "Georgia, serif" });
  const H = (s) => ({ fontSize: 22, fontWeight: 600, color: "#fff", marginBottom: 28, fontFamily: "Georgia, serif" });
  const back = (fn) => <button onClick={fn} style={{ background: "none", border: "none", color: "#555", fontSize: 13, cursor: "pointer", marginTop: 20, fontFamily: "inherit" }}>← Back</button>;

  return (
    <div ref={cRef} style={{ background: "#000", minHeight: "100vh", color: "#ccc", fontFamily: "'Segoe UI', system-ui, sans-serif", position: "fixed", top: 0, left: 0, right: 0, bottom: 0, zIndex: 200, overflowY: "auto" }}>
      <div style={{ maxWidth: 440, margin: "0 auto", padding: "48px 20px 40px" }}>

        {step === F.MC1 && <Fade k="mc1"><div style={H()}>What area of your life is this about?</div><div style={{ display: "flex", flexDirection: "column", gap: 10 }}>{AREAS.map((a) => <MCBtn key={a.id} label={a.label} icon={a.icon} onClick={() => { setArea(a.id); setStep(F.MC2); }} />)}</div>{back(home)}</Fade>}

        {step === F.MC2 && <Fade k="mc2"><div style={H()}>Which one is closest?</div><div style={{ display: "flex", flexDirection: "column", gap: 10 }}>{sits.map((x) => <MCBtn key={x.id} label={x.label} onClick={() => { setSit(x.id); setStep(F.MC3); }} />)}</div>{back(() => setStep(F.MC1))}</Fade>}

        {step === F.MC3 && <Fade k="mc3"><div style={H()}>How do you feel about it?</div><div style={{ display: "flex", flexDirection: "column", gap: 10 }}>{STATES.map((x) => <MCBtn key={x.id} label={x.label} icon={x.icon} onClick={() => { setEmo(x.id); path === "paid" ? setStep(F.PDON) : setStep(F.FQ1); }} />)}</div>{back(() => setStep(F.MC2))}</Fade>}

        {step === F.FQ1 && <Fade k="fq1"><div style={Q()}>{fqs[0]}</div>{crisis && <CrisisBox />}<TxtIn onSubmit={(t) => { addAnswer(t); setStep(F.FQ2); }} /></Fade>}
        {step === F.FQ2 && <Fade k="fq2"><div style={Q()}>{fqs[1]}</div>{crisis && <CrisisBox />}<TxtIn onSubmit={(t) => { addAnswer(t); setStep(F.FQ3); }} /></Fade>}
        {step === F.FQ3 && <Fade k="fq3"><div style={Q()}>{fqs[2]}</div>{crisis && <CrisisBox />}<TxtIn onSubmit={(t) => { addAnswer(t); setReveal(false); setStep(F.FREFL); }} /></Fade>}

        {step === F.FREFL && refl && <Fade k="fr"><div style={{ opacity: reveal ? 1 : 0, transition: "opacity 1.2s ease" }}>
          <div style={{ fontSize: 10, color: "#555", letterSpacing: 2, textTransform: "uppercase", marginBottom: 20 }}>Your reflection</div>
          <div style={{ fontSize: 16, color: "#ddd", lineHeight: 1.8, fontFamily: "Georgia, serif", marginBottom: 20 }}>{refl.body}</div>
          <div style={{ fontSize: 15, color: "#d4a056", lineHeight: 1.6, fontStyle: "italic", marginBottom: 20, paddingTop: 16, borderTop: "1px solid #222" }}>{refl.close[emo] || refl.close.confused}</div>
          {philo && <div style={{ fontSize: 14, color: "#888", lineHeight: 1.7, marginBottom: 24, paddingTop: 16, borderTop: "1px solid #1a1a1a" }}>{philo}</div>}
          {res && <ResBox r={res} />}
          {crisis && <CrisisBox />}
          <div style={{ marginTop: 32 }}>
            <button onClick={() => setStep(F.FUPG)} style={{ background: "#d4a056", color: "#000", border: "none", borderRadius: 28, padding: "14px 28px", fontSize: 15, fontWeight: 700, cursor: "pointer", fontFamily: "inherit", width: "100%" }}>Go deeper →</button>
            <button onClick={() => setStep(F.DONE)} style={{ background: "none", border: "1px solid #333", borderRadius: 28, padding: "12px 28px", fontSize: 14, color: "#777", cursor: "pointer", fontFamily: "inherit", width: "100%", marginTop: 10 }}>I'm done</button>
          </div>
        </div></Fade>}

        {step === F.FUPG && <Fade k="upg"><DonScr pre={false} onDonate={(a) => { setAmt(a); setPath("paid"); setAnswers([]); setPqIdx(0); setPqText(""); setStep(F.PQ); }} onSkip={() => setStep(F.DONE)} /></Fade>}

        {step === F.PDON && <Fade k="pd"><DonScr pre onDonate={(a) => { setAmt(a); setStep(F.PQ); }} onSkip={home} /></Fade>}

        {step === F.PQ && <Fade k={"pq"+pqIdx}>
          <div style={{ fontSize: 10, color: "#444", letterSpacing: 2, textTransform: "uppercase", marginBottom: 16 }}>{pqIdx + 1} of 6</div>
          <div style={Q()}>{pqText || "..."}</div>
          {crisis && <CrisisBox />}
          <TxtIn onSubmit={(t) => { addAnswer(t); if (pqIdx >= 5) { setReveal(false); setStep(F.PLOAD); } else { const n = pqIdx + 1; setPqIdx(n); setPqText(""); genQ(n, [...answers, t]).then(setPqText); }}} />
        </Fade>}

        {step === F.PLOAD && <LoadingScreen />}

        {step === F.PREAD && <Fade k="pr"><div style={{ opacity: reveal ? 1 : 0, transition: "opacity 1.5s ease" }}>
          <div style={{ fontSize: 10, color: "#555", letterSpacing: 2, textTransform: "uppercase", marginBottom: 20 }}>{tier.name}</div>
          <div style={{ fontSize: 16, color: "#ddd", lineHeight: 1.9, fontFamily: "Georgia, serif", whiteSpace: "pre-wrap" }}>{pReading}</div>
          {res && <ResBox r={res} />}
          {crisis && <CrisisBox />}
          <div style={{ marginTop: 36, textAlign: "center", fontSize: 13, fontStyle: "italic", color: "#555" }}>This reading was yours.</div>
          <button onClick={() => setStep(F.DONE)} style={{ background: "none", border: "1px solid #333", borderRadius: 28, padding: "12px 28px", fontSize: 14, color: "#777", cursor: "pointer", fontFamily: "inherit", width: "100%", marginTop: 20 }}>Done</button>
        </div></Fade>}

        {step === F.DONE && <Fade k="done"><div style={{ textAlign: "center", paddingTop: 40 }}>
          <div style={{ fontSize: 22, color: "#fff", marginBottom: 12, fontFamily: "Georgia, serif" }}>Thank you.</div>
          <div style={{ fontSize: 14, color: "#666", lineHeight: 1.6, marginBottom: 32 }}>Nothing was saved. Nothing was sent.<br/>This was between you and the page.</div>
          <button onClick={() => {
            if (navigator.share) {
              navigator.share({ title: "HelpFinder", text: "Free help in Rochester, NY — 225 programs, 8 languages.", url: "https://helpfinder.help" });
            } else {
              navigator.clipboard.writeText("https://helpfinder.help");
              alert("Link copied.");
            }
          }} style={{ background: "#d4a056", color: "#000", border: "none", borderRadius: 28, padding: "14px 32px", fontSize: 15, fontWeight: 700, cursor: "pointer", fontFamily: "inherit", width: "100%", maxWidth: 280, marginBottom: 12 }}>Share with someone who needs this</button>
          <div style={{ marginBottom: 20 }} />
          <button onClick={home} style={{ background: "none", border: "1px solid #333", borderRadius: 28, padding: "14px 28px", fontSize: 15, color: "#999", cursor: "pointer", fontFamily: "inherit" }}>Return home</button>
        </div></Fade>}

        {step !== F.DONE && <div style={{ marginTop: 60, fontSize: 9, color: "#333", lineHeight: 1.6, textAlign: "center", maxWidth: 320, margin: "60px auto 0" }}>This is not therapy, medical advice, or a substitute for professional help. If you are in crisis, call 988 or 211. SAMHSA: 1-800-662-4357. Results are AI-generated and may not be accurate. Donations are voluntary.</div>}
      </div>
    </div>
  );
}
