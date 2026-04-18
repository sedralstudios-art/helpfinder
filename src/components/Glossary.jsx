import React, { useMemo, useState } from "react";
// Legal Glossary — plain-English definitions of legal and court terms.
// Content is written at ~6th grade reading level per project style rule.
//
// Exported components:
//   GlossaryCategories — landing view with search + category tiles + A-Z list
//   GlossaryBrowse     — terms filtered to one category
//   GlossaryTerm       — detail view for a single term

import {
  GLOSSARY_TERMS,
  GLOSSARY_TERMS_BY_ID,
  GLOSSARY_TERMS_BY_CATEGORY,
  GLOSSARY_ALIAS_MAP,
} from "../data/legal/glossary-index";
import { LEGAL_ENTRIES_BY_ID } from "../data/legal";
import { LEGAL_LANGS, RTL_LEGAL_LANGS } from "../data/legal/langs";

const C = {
  forest: "#2e7d32", leaf: "#43a047", sage: "#e8f5e9",
  warmBg: "#fafaf7", cream: "#f5f0e8", bark: "#1a1a1a",
  stone: "#555", dust: "#767676", amber: "#d4a056",
  amberLight: "#fdf6ec", white: "#fff", border: "#e8e4dc",
  violet: "#5e35b1", violetLight: "#ede7f6", violetDark: "#4527a0",
};

const SERIF = "'DM Serif Display', Georgia, serif";

// Category metadata — reused from the legal library taxonomy so tags
// and "Common phrases in X" links work without a second vocabulary.
const GLOSSARY_CATEGORY_META = {
  criminal: {
    icon: "⚖️",
    label: "Court & Arrests",
    desc: "Words you hear at arraignment, hearings, and in criminal cases.",
  },
  housing: {
    icon: "🏠",
    label: "Housing & Rent",
    desc: "Words landlords, tenants, and housing court use.",
  },
  family: {
    icon: "👨‍👩‍👧",
    label: "Family Court",
    desc: "Words from custody, support, and family court cases.",
  },
  benefits: {
    icon: "💰",
    label: "Benefits & Hearings",
    desc: "Words used in SNAP, Medicaid, and fair hearing notices.",
  },
  consumer: {
    icon: "🛒",
    label: "Debt & Collections",
    desc: "Words debt collectors and small claims court use.",
  },
  employment: {
    icon: "💼",
    label: "Work & Pay",
    desc: "Words from workplace complaints and wage cases.",
  },
  vehicle: {
    icon: "🚗",
    label: "Driving & Tickets",
    desc: "Words from traffic court and the DMV.",
  },
  immigration: {
    icon: "🌎",
    label: "Immigration",
    desc: "Words used at immigration court and on government forms.",
  },
  general: {
    icon: "📖",
    label: "General Court Words",
    desc: "Everyday court words that come up everywhere.",
  },
};

function pickText(field, lang) {
  if (!field) return "";
  if (typeof field === "string") return field;
  return field[lang] || field.en || "";
}
function pickArr(field, lang) {
  if (!field) return [];
  if (Array.isArray(field)) return field;
  return field[lang] || field.en || [];
}

function LanguagePicker({ legalLang, setLegalLang }) {
  return (
    <div style={{
      marginBottom: 20, padding: "10px 14px",
      background: C.cream, borderRadius: 10,
      border: "1px solid " + C.border,
      display: "inline-flex", alignItems: "center", gap: 8, flexWrap: "wrap",
    }}>
      <label style={{ fontSize: 12, color: C.stone, fontWeight: 500 }}>🌐 Read in:</label>
      <select
        value={legalLang}
        onChange={(e) => setLegalLang(e.target.value)}
        style={{
          padding: "4px 10px", fontSize: 13, borderRadius: 6,
          border: "1px solid " + C.border,
          background: C.white, fontFamily: "inherit", color: C.bark, cursor: "pointer",
        }}
      >
        {LEGAL_LANGS.map((l) => (
          <option key={l.code} value={l.code}>{l.label}</option>
        ))}
      </select>
      <span style={{ fontSize: 11, color: C.dust }}>English only for now</span>
    </div>
  );
}

function BackLink({ onBack, label }) {
  return (
    <button
      onClick={onBack}
      style={{
        background: "none", border: "none", color: C.violet,
        fontSize: 14, cursor: "pointer", padding: "4px 0",
        fontFamily: "inherit", marginBottom: 12,
      }}
    >
      ← {label || "Back"}
    </button>
  );
}

// ═══════════════════════════════════════════════════════════════════════════
// LANDING — search + category tiles + A-Z list
// ═══════════════════════════════════════════════════════════════════════════
export function GlossaryCategories({ legalLang, setLegalLang, onOpenCategory, onOpenTerm, onBack }) {
  const [query, setQuery] = useState("");
  const isRTL = RTL_LEGAL_LANGS && RTL_LEGAL_LANGS.has(legalLang);

  const categoriesWithTerms = useMemo(
    () => Object.keys(GLOSSARY_TERMS_BY_CATEGORY).sort(),
    []
  );

  const searchResults = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [];
    return GLOSSARY_TERMS.filter((t) => {
      const name = (t.term && t.term.en) || "";
      if (name.toLowerCase().includes(q)) return true;
      for (const a of (t.aka || [])) if (String(a).toLowerCase().includes(q)) return true;
      const pe = pickText(t.plainEnglish, "en");
      if (pe.toLowerCase().includes(q)) return true;
      return false;
    }).slice(0, 30);
  }, [query]);

  return (
    <div
      dir={isRTL ? "rtl" : "ltr"}
      style={{
        maxWidth: 720, margin: "0 auto", padding: "20px 18px 40px",
        minHeight: "100vh", fontFamily: "'Segoe UI', 'Helvetica Neue', system-ui, -apple-system, sans-serif",
        color: C.bark, background: C.warmBg,
      }}
    >
      <BackLink onBack={onBack} label="Home" />

      <h1 style={{ fontFamily: SERIF, fontSize: 32, fontWeight: 400, margin: "8px 0 8px", color: C.bark }}>
        Legal Glossary
      </h1>
      <p style={{ fontSize: 15, color: C.stone, lineHeight: 1.5, marginBottom: 20 }}>
        Plain-English words for what you hear in court, on notices, and from lawyers. Written for regular people. Every word is checked against the law.
      </p>

      <LanguagePicker legalLang={legalLang} setLegalLang={setLegalLang} />

      {/* ── SEARCH ── */}
      <div style={{ marginTop: 8, marginBottom: 24 }}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search — ACD, bench warrant, eviction..."
          style={{
            width: "100%", padding: "12px 14px", fontSize: 15,
            borderRadius: 10, border: "1px solid " + C.border,
            background: C.white, color: C.bark, fontFamily: "inherit",
            boxSizing: "border-box",
          }}
        />
        {query && (
          <div style={{
            marginTop: 10, background: C.white,
            border: "1px solid " + C.border, borderRadius: 10,
            padding: 8,
          }}>
            {searchResults.length === 0 && (
              <div style={{ padding: 12, fontSize: 13, color: C.dust }}>
                No words match "{query}" yet. The glossary is new — more being added.
              </div>
            )}
            {searchResults.map((t) => (
              <button
                key={t.id}
                onClick={() => onOpenTerm(t.id)}
                style={{
                  display: "block", width: "100%", textAlign: "left",
                  padding: "10px 12px", background: "none", border: "none",
                  borderBottom: "1px solid " + C.border, cursor: "pointer",
                  fontFamily: "inherit", color: C.bark,
                }}
              >
                <div style={{ fontWeight: 600, fontSize: 14 }}>
                  {(t.term && t.term.en) || t.id}
                  {t.aka && t.aka.length > 0 && (
                    <span style={{ color: C.dust, fontWeight: 400, marginLeft: 6 }}>
                      ({t.aka.join(", ")})
                    </span>
                  )}
                </div>
                <div style={{ fontSize: 12, color: C.stone, marginTop: 2, lineHeight: 1.4 }}>
                  {pickText(t.plainEnglish, legalLang).slice(0, 140)}
                  {pickText(t.plainEnglish, legalLang).length > 140 ? "…" : ""}
                </div>
              </button>
            ))}
          </div>
        )}
      </div>

      {/* ── CATEGORY TILES ── */}
      <h2 style={{ fontSize: 18, fontWeight: 700, margin: "12px 0 12px", color: C.bark }}>
        Browse by topic
      </h2>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: 10 }}>
        {categoriesWithTerms.map((cat) => {
          const meta = GLOSSARY_CATEGORY_META[cat] || { icon: "📖", label: cat, desc: "" };
          const count = (GLOSSARY_TERMS_BY_CATEGORY[cat] || []).length;
          return (
            <button
              key={cat}
              onClick={() => onOpenCategory(cat)}
              style={{
                textAlign: "left", padding: "14px 16px",
                background: C.violetLight, border: "1px solid " + C.violet,
                borderRadius: 14, cursor: "pointer", fontFamily: "inherit",
                display: "flex", alignItems: "center", gap: 12,
              }}
            >
              <div style={{ fontSize: 26, flexShrink: 0 }}>{meta.icon}</div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontSize: 14, fontWeight: 700, color: C.bark, marginBottom: 2 }}>
                  {meta.label}
                </div>
                <div style={{ fontSize: 11, color: C.stone, lineHeight: 1.4 }}>
                  {count} {count === 1 ? "word" : "words"}
                </div>
              </div>
            </button>
          );
        })}
      </div>

      {/* ── A–Z LIST ── */}
      {GLOSSARY_TERMS.length > 0 && (
        <div style={{ marginTop: 32 }}>
          <h2 style={{ fontSize: 18, fontWeight: 700, margin: "0 0 12px", color: C.bark }}>
            All words (A–Z)
          </h2>
          <div style={{ background: C.white, border: "1px solid " + C.border, borderRadius: 10 }}>
            {[...GLOSSARY_TERMS]
              .sort((a, b) => ((a.term && a.term.en) || "").localeCompare((b.term && b.term.en) || ""))
              .map((t, i, arr) => (
                <button
                  key={t.id}
                  onClick={() => onOpenTerm(t.id)}
                  style={{
                    display: "block", width: "100%", textAlign: "left",
                    padding: "12px 14px", background: "none", border: "none",
                    borderBottom: i === arr.length - 1 ? "none" : "1px solid " + C.border,
                    cursor: "pointer", fontFamily: "inherit", color: C.bark,
                  }}
                >
                  <div style={{ fontSize: 14, fontWeight: 600 }}>
                    {(t.term && t.term.en) || t.id}
                    {t.aka && t.aka.length > 0 && (
                      <span style={{ color: C.dust, fontWeight: 400, marginLeft: 6 }}>
                        ({t.aka.join(", ")})
                      </span>
                    )}
                  </div>
                </button>
              ))}
          </div>
        </div>
      )}

      <div style={{ marginTop: 32, padding: "14px 16px", background: C.cream, border: "1px solid " + C.border, borderRadius: 10 }}>
        <div style={{ fontSize: 12, color: C.stone, lineHeight: 1.5 }}>
          This glossary is for understanding only. It is not legal advice. If you are in a case, talk to a lawyer. Free legal help is on the Know Your Rights page.
        </div>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════════════
// BROWSE — terms filtered to one category
// ═══════════════════════════════════════════════════════════════════════════
export function GlossaryBrowse({ legalLang, setLegalLang, categoryFilter, onOpenTerm, onBack }) {
  const isRTL = RTL_LEGAL_LANGS && RTL_LEGAL_LANGS.has(legalLang);
  const meta = GLOSSARY_CATEGORY_META[categoryFilter] || { icon: "📖", label: categoryFilter, desc: "" };
  const terms = (GLOSSARY_TERMS_BY_CATEGORY[categoryFilter] || [])
    .slice()
    .sort((a, b) => ((a.term && a.term.en) || "").localeCompare((b.term && b.term.en) || ""));

  return (
    <div
      dir={isRTL ? "rtl" : "ltr"}
      style={{
        maxWidth: 720, margin: "0 auto", padding: "20px 18px 40px",
        minHeight: "100vh", fontFamily: "'Segoe UI', 'Helvetica Neue', system-ui, -apple-system, sans-serif",
        color: C.bark, background: C.warmBg,
      }}
    >
      <BackLink onBack={onBack} label="All topics" />

      <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 8 }}>
        <div style={{ fontSize: 36 }}>{meta.icon}</div>
        <h1 style={{ fontFamily: SERIF, fontSize: 28, fontWeight: 400, margin: 0, color: C.bark }}>
          {meta.label}
        </h1>
      </div>
      <p style={{ fontSize: 14, color: C.stone, lineHeight: 1.5, marginBottom: 20 }}>{meta.desc}</p>

      <LanguagePicker legalLang={legalLang} setLegalLang={setLegalLang} />

      {terms.length === 0 && (
        <div style={{ padding: 20, textAlign: "center", color: C.dust, fontSize: 14 }}>
          No words added here yet.
        </div>
      )}

      <div style={{ background: C.white, border: "1px solid " + C.border, borderRadius: 10 }}>
        {terms.map((t, i) => (
          <button
            key={t.id}
            onClick={() => onOpenTerm(t.id)}
            style={{
              display: "block", width: "100%", textAlign: "left",
              padding: "14px 16px", background: "none", border: "none",
              borderBottom: i === terms.length - 1 ? "none" : "1px solid " + C.border,
              cursor: "pointer", fontFamily: "inherit", color: C.bark,
            }}
          >
            <div style={{ fontSize: 15, fontWeight: 600, marginBottom: 3 }}>
              {(t.term && t.term.en) || t.id}
              {t.aka && t.aka.length > 0 && (
                <span style={{ color: C.dust, fontWeight: 400, marginLeft: 6 }}>
                  ({t.aka.join(", ")})
                </span>
              )}
            </div>
            <div style={{ fontSize: 13, color: C.stone, lineHeight: 1.45 }}>
              {pickText(t.plainEnglish, legalLang).slice(0, 160)}
              {pickText(t.plainEnglish, legalLang).length > 160 ? "…" : ""}
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════════════
// DETAIL — single term view
// ═══════════════════════════════════════════════════════════════════════════
export function GlossaryTerm({ termId, legalLang, setLegalLang, onBack, onOpenTerm, onOpenLegalEntry }) {
  const term = GLOSSARY_TERMS_BY_ID[termId];
  const isRTL = RTL_LEGAL_LANGS && RTL_LEGAL_LANGS.has(legalLang);

  if (!term) {
    return (
      <div style={{ maxWidth: 720, margin: "0 auto", padding: "40px 18px", color: C.bark }}>
        <BackLink onBack={onBack} label="All words" />
        <p>That word is not in the glossary yet.</p>
      </div>
    );
  }

  const meta = GLOSSARY_CATEGORY_META[term.category] || { icon: "📖", label: term.category };
  const related = (term.related || [])
    .map((id) => GLOSSARY_TERMS_BY_ID[id])
    .filter(Boolean);
  const legalEntries = (term.legalEntryIds || [])
    .map((id) => LEGAL_ENTRIES_BY_ID[id])
    .filter(Boolean);

  return (
    <div
      dir={isRTL ? "rtl" : "ltr"}
      style={{
        maxWidth: 720, margin: "0 auto", padding: "20px 18px 40px",
        minHeight: "100vh", fontFamily: "'Segoe UI', 'Helvetica Neue', system-ui, -apple-system, sans-serif",
        color: C.bark, background: C.warmBg,
      }}
    >
      <BackLink onBack={onBack} label="All words" />

      <div style={{ marginBottom: 8, fontSize: 12, color: C.stone }}>
        <span style={{ marginRight: 4 }}>{meta.icon}</span>
        {meta.label}
      </div>
      <h1 style={{ fontFamily: SERIF, fontSize: 30, fontWeight: 400, margin: "4px 0 6px", color: C.bark, lineHeight: 1.2 }}>
        {(term.term && term.term.en) || term.id}
      </h1>
      {term.aka && term.aka.length > 0 && (
        <div style={{ fontSize: 15, color: C.dust, marginBottom: 18 }}>
          Also called: {term.aka.join(", ")}
        </div>
      )}

      <LanguagePicker legalLang={legalLang} setLegalLang={setLegalLang} />

      {/* Plain English */}
      <section style={{ marginTop: 8 }}>
        <h2 style={{ fontSize: 16, fontWeight: 700, marginBottom: 8 }}>What it means</h2>
        <p style={{ fontSize: 16, lineHeight: 1.6, color: C.bark }}>
          {pickText(term.plainEnglish, legalLang)}
        </p>
      </section>

      {/* Context */}
      {pickText(term.context, legalLang) && (
        <section style={{ marginTop: 22 }}>
          <h2 style={{ fontSize: 16, fontWeight: 700, marginBottom: 8 }}>When you might hear this</h2>
          <p style={{ fontSize: 15, lineHeight: 1.6, color: C.stone }}>
            {pickText(term.context, legalLang)}
          </p>
        </section>
      )}

      {/* What to ask */}
      {pickArr(term.whatToAsk, legalLang).length > 0 && (
        <section style={{ marginTop: 22 }}>
          <h2 style={{ fontSize: 16, fontWeight: 700, marginBottom: 8 }}>What to ask</h2>
          <ul style={{ fontSize: 15, lineHeight: 1.6, color: C.bark, paddingLeft: 20, margin: 0 }}>
            {pickArr(term.whatToAsk, legalLang).map((q, i) => (
              <li key={i} style={{ marginBottom: 6 }}>{q}</li>
            ))}
          </ul>
        </section>
      )}

      {/* Related glossary terms */}
      {related.length > 0 && (
        <section style={{ marginTop: 26 }}>
          <h2 style={{ fontSize: 16, fontWeight: 700, marginBottom: 8 }}>Related words</h2>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
            {related.map((r) => (
              <button
                key={r.id}
                onClick={() => onOpenTerm(r.id)}
                style={{
                  background: C.violetLight, border: "1px solid " + C.violet,
                  borderRadius: 999, padding: "6px 12px", fontSize: 13,
                  color: C.violetDark, cursor: "pointer", fontFamily: "inherit",
                }}
              >
                {(r.term && r.term.en) || r.id}
              </button>
            ))}
          </div>
        </section>
      )}

      {/* Cross-links to legal library */}
      {legalEntries.length > 0 && (
        <section style={{ marginTop: 26 }}>
          <h2 style={{ fontSize: 16, fontWeight: 700, marginBottom: 8 }}>Read more</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {legalEntries.map((e) => (
              <button
                key={e.id}
                onClick={() => onOpenLegalEntry && onOpenLegalEntry(e.id)}
                style={{
                  textAlign: "left", background: C.amberLight,
                  border: "1px solid " + C.amber, borderRadius: 10,
                  padding: "10px 14px", fontSize: 14, color: C.bark,
                  cursor: "pointer", fontFamily: "inherit",
                }}
              >
                ⚖️ {(e.title && e.title.en) || e.id}
              </button>
            ))}
          </div>
        </section>
      )}

      {/* Citation */}
      {(term.citation || term.sourceUrl) && (
        <section style={{ marginTop: 30, padding: "12px 14px", background: C.cream, borderRadius: 10, border: "1px solid " + C.border }}>
          <div style={{ fontSize: 12, color: C.stone, marginBottom: 4, fontWeight: 600 }}>Source</div>
          <div style={{ fontSize: 13, color: C.bark, lineHeight: 1.5 }}>
            {term.citation}
            {term.sourceUrl && (
              <>
                {" — "}
                <a
                  href={term.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: C.violet }}
                >
                  Read the law
                </a>
              </>
            )}
          </div>
          {term.lastVerified && (
            <div style={{ fontSize: 11, color: C.dust, marginTop: 6 }}>
              Checked: {term.lastVerified}
            </div>
          )}
        </section>
      )}

      <div style={{ marginTop: 26, padding: "12px 14px", background: C.cream, border: "1px solid " + C.border, borderRadius: 10 }}>
        <div style={{ fontSize: 12, color: C.stone, lineHeight: 1.5 }}>
          This is for understanding only. It is not legal advice. If you are in a case, talk to a lawyer.
        </div>
      </div>
    </div>
  );
}
