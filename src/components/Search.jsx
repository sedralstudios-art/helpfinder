import React, { useState, useMemo } from "react";
// Unified search across programs, legal entries, and glossary terms.
// Fuzzy matching via simple substring + alias search. No external library.
// Results grouped by product: Programs → Legal Library → Glossary.
//
// Data imported at build time from existing stores — zero duplication.

import { LEGAL_ENTRIES } from "../data/legal";
import { GLOSSARY_TERMS, GLOSSARY_ALIAS_MAP } from "../data/legal/glossary-index";
import { PROGRAMS } from "../data/programs.js";

const C = {
  forest: "#2e7d32", leaf: "#43a047", sage: "#e8f5e9",
  warmBg: "#fafaf7", cream: "#f5f0e8", bark: "#1a1a1a",
  stone: "#555", dust: "#767676", amber: "#d4a056",
  amberLight: "#fdf6ec", white: "#fff", border: "#e8e4dc",
  violet: "#5e35b1", violetLight: "#ede7f6",
};

// Per-category chip palette — design system tokens (see design/preview/inputs.html)
const CHIP_PAL = {
  crisis: { bg: "#fde8e8", fg: "#9c2a2a" },
  food:   { bg: "#e8f5e9", fg: "#2e7d32" },
  house:  { bg: "#eaf1fb", fg: "#1f4d77" },
  money:  { bg: "#fdf6ec", fg: "#a07626" },
  health: { bg: "#fde8e8", fg: "#9c2a2a" },
  mental: { bg: "#f3eaf6", fg: "#6b3a82" },
  family: { bg: "#fff4e6", fg: "#a85a1a" },
  work:   { bg: "#eaf1fb", fg: "#1f4d77" },
  rights: { bg: "#fdf6ec", fg: "#a07626" },
  trans:  { bg: "#e6f0ee", fg: "#2a6a5e" },
  net:    { bg: "#eef0f5", fg: "#3a4a6b" },
  cloth:  { bg: "#f5ecdf", fg: "#7a5a2e" },
  lgbtq:  { bg: "linear-gradient(90deg,#fde8e8,#fdf6ec,#e8f5e9,#eaf1fb,#f3eaf6)", fg: "#3a3a3a" },
  vet:    { bg: "#e8eee0", fg: "#4a5a2a" },
  newcomer: { bg: "#e6efe8", fg: "#2e6a3a" },
  disab:  { bg: "#ecf0f5", fg: "#2e4a6a" },
  pet:    { bg: "#f4ede2", fg: "#6b4a26" },
};

// 7 fast-jump chips — the "tab bar" beneath the search input
const FAST_CHIPS = [
  { icon: "🆘", label: "Right now", pal: "crisis" },
  { icon: "🍎", label: "Food, stay, bills", pal: "food" },
  { icon: "❤️", label: "Doctor & meds", pal: "health" },
  { icon: "💚", label: "Stress & recovery", pal: "mental" },
  { icon: "👨‍👩‍👧", label: "Family", pal: "family" },
  { icon: "💼", label: "Job", pal: "work" },
  { icon: "⚖️", label: "Rights", pal: "rights" },
];

// 31-chip direct-link category grid — shown when no query is active
const ALL_CHIPS = [
  { icon: "🆘", label: "Right now", pal: "crisis" },
  { icon: "🍎", label: "Food", pal: "food" },
  { icon: "🏠", label: "Housing", pal: "house" },
  { icon: "💵", label: "Money & bills", pal: "money" },
  { icon: "🔥", label: "Heat & electric", pal: "money" },
  { icon: "❤️", label: "Health", pal: "health" },
  { icon: "🦷", label: "Dental", pal: "health" },
  { icon: "💊", label: "Medicine", pal: "health" },
  { icon: "💚", label: "Mental health", pal: "mental" },
  { icon: "🔄", label: "Addiction", pal: "mental" },
  { icon: "👶", label: "Childcare", pal: "family" },
  { icon: "🌟", label: "Youth", pal: "family" },
  { icon: "🧓", label: "Senior", pal: "family" },
  { icon: "💼", label: "Job", pal: "work" },
  { icon: "📚", label: "School & GED", pal: "work" },
  { icon: "⚖️", label: "Legal help", pal: "rights" },
  { icon: "🏚️", label: "Eviction defense", pal: "rights" },
  { icon: "🌍", label: "Immigration", pal: "rights" },
  { icon: "💳", label: "Debt & lawsuits", pal: "rights" },
  { icon: "🚌", label: "Transport", pal: "trans" },
  { icon: "📱", label: "Internet & phone", pal: "net" },
  { icon: "👕", label: "Clothing", pal: "cloth" },
  { icon: "🏳️‍🌈", label: "LGBTQ+", pal: "lgbtq" },
  { icon: "🎖️", label: "Veteran", pal: "vet" },
  { icon: "🌍", label: "New to U.S.", pal: "newcomer" },
  { icon: "♿", label: "Disability", pal: "disab" },
  { icon: "🛡️", label: "Someone is hurting me", pal: "crisis" },
  { icon: "⚖️", label: "Custody protection", pal: "crisis" },
  { icon: "🔑", label: "Reentry", pal: "rights" },
  { icon: "📄", label: "ID & papers", pal: "rights" },
  { icon: "🐾", label: "Pet help", pal: "pet" },
];

function Chip({ icon, label, pal, size = "md", onClick }) {
  const p = CHIP_PAL[pal] || CHIP_PAL.rights;
  const isSm = size === "sm";
  return (
    <button
      onClick={onClick}
      style={{
        background: p.bg, color: p.fg,
        padding: isSm ? "3px 8px" : "4px 10px",
        borderRadius: 999,
        fontSize: isSm ? 11 : 12,
        fontWeight: 600,
        border: "1px solid transparent",
        cursor: "pointer",
        display: "inline-flex", alignItems: "center", gap: isSm ? 4 : 5,
        lineHeight: isSm ? 1.3 : 1.4,
        fontFamily: "inherit",
      }}
      onMouseEnter={(e) => { e.currentTarget.style.outline = `1.5px solid ${p.fg}`; e.currentTarget.style.outlineOffset = "1px"; }}
      onMouseLeave={(e) => { e.currentTarget.style.outline = "none"; }}
    >
      <span aria-hidden="true">{icon}</span>{label}
    </button>
  );
}

function pick(field) {
  if (!field) return "";
  if (typeof field === "string") return field;
  return field.en || "";
}

export default function UnifiedSearch({ onOpenEntry, onOpenGlossaryTerm, onBack, onJumpToHelp }) {
  const [query, setQuery] = useState("");

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (q.length < 2) return { programs: [], legal: [], glossary: [] };

    const progResults = PROGRAMS.filter((p) => {
      if ((p.n || "").toLowerCase().includes(q)) return true;
      if ((p.d || "").toLowerCase().includes(q)) return true;
      if ((p.c || "").toLowerCase().includes(q)) return true;
      return false;
    }).slice(0, 15);

    const legalResults = LEGAL_ENTRIES.filter((e) => {
      const title = pick(e.title).toLowerCase();
      const summary = pick(e.summary).toLowerCase();
      const tags = (e.tags || []).join(" ").toLowerCase();
      if (title.includes(q)) return true;
      if (summary.includes(q)) return true;
      if (tags.includes(q)) return true;
      return false;
    }).slice(0, 10);

    const glossaryResults = GLOSSARY_TERMS.filter((t) => {
      const name = pick(t.term).toLowerCase();
      if (name.includes(q)) return true;
      for (const a of (t.aka || [])) if (String(a).toLowerCase().includes(q)) return true;
      if (pick(t.plainEnglish).toLowerCase().includes(q)) return true;
      return false;
    }).slice(0, 10);

    return { programs: progResults, legal: legalResults, glossary: glossaryResults };
  }, [query]);

  const total = results.programs.length + results.legal.length + results.glossary.length;

  return (
    <div style={{
      maxWidth: 720, margin: "0 auto", padding: "20px 18px 40px",
      minHeight: "100vh", fontFamily: "'Segoe UI', system-ui, -apple-system, sans-serif",
      color: C.bark, background: C.warmBg,
    }}>
      {onBack && (
        <button onClick={onBack} style={{
          background: "none", border: "none", color: C.forest,
          fontSize: 14, cursor: "pointer", padding: "4px 0",
          fontFamily: "inherit", marginBottom: 12,
        }}>
          ← Back
        </button>
      )}

      <h1 style={{ fontSize: 28, fontWeight: 700, margin: "8px 0 8px" }}>Search everything</h1>
      <p style={{ fontSize: 14, color: C.stone, marginBottom: 16 }}>
        Programs, legal guides, and glossary — all in one place.
      </p>

      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Type anything — food, eviction, ACD, SNAP..."
        autoFocus
        style={{
          width: "100%", padding: "14px 16px", fontSize: 16,
          borderRadius: 12, border: "1px solid " + C.border,
          background: C.white, color: C.bark, fontFamily: "inherit",
          boxSizing: "border-box",
        }}
      />

      {/* ── FAST-JUMP TAB BAR (always visible) ── */}
      <div style={{ marginTop: 8, display: "flex", gap: 5, flexWrap: "wrap" }}>
        {FAST_CHIPS.map((c, i) => (
          <Chip key={i} icon={c.icon} label={c.label} pal={c.pal} size="sm"
            onClick={() => onJumpToHelp && onJumpToHelp()} />
        ))}
      </div>
      <div style={{ marginTop: 8, fontSize: 11, color: C.dust, lineHeight: 1.5 }}>
        searches across <b style={{ color: C.stone }}>{PROGRAMS.length} programs</b> · <b style={{ color: C.stone }}>{LEGAL_ENTRIES.length} rights guides</b> · <b style={{ color: C.stone }}>{GLOSSARY_TERMS.length} glossary terms</b> — try a need, agency name, or legal term
      </div>

      {/* ── 31-CHIP DIRECT-LINK GRID (shown when no query) ── */}
      {query.length < 2 && (
        <div style={{ marginTop: 20, display: "flex", gap: 6, flexWrap: "wrap" }}>
          {ALL_CHIPS.map((c, i) => (
            <Chip key={i} icon={c.icon} label={c.label} pal={c.pal}
              onClick={() => onJumpToHelp && onJumpToHelp()} />
          ))}
        </div>
      )}

      {query.length >= 2 && total === 0 && (
        <div style={{ marginTop: 20, padding: 16, textAlign: "center", color: C.dust, fontSize: 14 }}>
          Nothing matches "{query}" yet.
        </div>
      )}

      {/* Programs */}
      {results.programs.length > 0 && (
        <section style={{ marginTop: 24 }}>
          <h2 style={{ fontSize: 16, fontWeight: 700, color: C.forest, marginBottom: 10 }}>
            Programs ({results.programs.length})
          </h2>
          {results.programs.map((p) => (
            <div key={p.id} style={{
              padding: "12px 14px", background: C.white, border: "1px solid " + C.border,
              borderRadius: 10, marginBottom: 8,
            }}>
              <div style={{ fontWeight: 600, fontSize: 14 }}>{p.n}</div>
              <div style={{ fontSize: 12, color: C.stone, marginTop: 3, lineHeight: 1.45 }}>
                {(p.d || "").slice(0, 140)}{(p.d || "").length > 140 ? "…" : ""}
              </div>
              {p.ph && <div style={{ fontSize: 12, color: C.forest, marginTop: 4 }}>📞 {p.ph}</div>}
            </div>
          ))}
        </section>
      )}

      {/* Legal Library */}
      {results.legal.length > 0 && (
        <section style={{ marginTop: 24 }}>
          <h2 style={{ fontSize: 16, fontWeight: 700, color: C.amber, marginBottom: 10 }}>
            Know Your Rights ({results.legal.length})
          </h2>
          {results.legal.map((e) => (
            <button key={e.id} onClick={() => onOpenEntry && onOpenEntry(e.id)} style={{
              display: "block", width: "100%", textAlign: "left",
              padding: "12px 14px", background: C.amberLight, border: "1px solid " + C.amber,
              borderRadius: 10, marginBottom: 8, cursor: "pointer", fontFamily: "inherit",
            }}>
              <div style={{ fontWeight: 600, fontSize: 14, color: C.bark }}>⚖️ {pick(e.title)}</div>
              <div style={{ fontSize: 12, color: C.stone, marginTop: 3, lineHeight: 1.45 }}>
                {pick(e.summary).slice(0, 140)}{pick(e.summary).length > 140 ? "…" : ""}
              </div>
            </button>
          ))}
        </section>
      )}

      {/* Glossary */}
      {results.glossary.length > 0 && (
        <section style={{ marginTop: 24 }}>
          <h2 style={{ fontSize: 16, fontWeight: 700, color: C.violet, marginBottom: 10 }}>
            Glossary ({results.glossary.length})
          </h2>
          {results.glossary.map((t) => (
            <button key={t.id} onClick={() => onOpenGlossaryTerm && onOpenGlossaryTerm(t.id)} style={{
              display: "block", width: "100%", textAlign: "left",
              padding: "12px 14px", background: C.violetLight, border: "1px solid " + C.violet,
              borderRadius: 10, marginBottom: 8, cursor: "pointer", fontFamily: "inherit",
            }}>
              <div style={{ fontWeight: 600, fontSize: 14, color: C.bark }}>
                📖 {pick(t.term)}
                {t.aka && t.aka.length > 0 && (
                  <span style={{ fontWeight: 400, color: C.dust, marginLeft: 6, fontSize: 12 }}>
                    ({t.aka.join(", ")})
                  </span>
                )}
              </div>
              <div style={{ fontSize: 12, color: C.stone, marginTop: 3, lineHeight: 1.45 }}>
                {pick(t.plainEnglish).slice(0, 140)}{pick(t.plainEnglish).length > 140 ? "…" : ""}
              </div>
            </button>
          ))}
        </section>
      )}

      <div style={{ marginTop: 32, padding: "12px 16px", background: C.cream, border: "1px solid " + C.border, borderRadius: 10 }}>
        <div style={{ fontSize: 12, color: C.stone }}>
          HelpFinder is an informational tool only. Not legal, medical, or financial advice.
        </div>
      </div>
    </div>
  );
}
