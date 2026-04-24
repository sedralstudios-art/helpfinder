import React, { useState, useMemo } from "react";
// Inline glossary tooltip system for HelpFinder program cards.
// Scans text for glossary terms/aliases and renders them as tappable
// highlights that expand the plain-English definition inline — no
// page navigation, no popover jank, no modal. The definition appears
// right below the highlighted word in a compact card.
//
// Usage: <GlossaryText text="Free groceries on an EBT card." />
//   → "Free groceries on an " + [EBT card](tap to expand) + "."

import {
  GLOSSARY_TERMS_BY_ID,
  GLOSSARY_ALIAS_MAP,
} from "../data/legal/glossary-index";

// Build a regex that matches any glossary term or alias. Longer terms
// first so "order of protection" matches before "order". Case-insensitive.
const TERM_KEYS = Object.keys(GLOSSARY_ALIAS_MAP).sort((a, b) => b.length - a.length);
const TERM_REGEX = TERM_KEYS.length > 0
  ? new RegExp("\\b(" + TERM_KEYS.map((k) => k.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join("|") + ")\\b", "gi")
  : null;

// Phone-number pattern. Conservative — requires fixed-length digit groups
// separated by standard punctuation. Won't match statute citations like
// "235-B" or "NY LAB 191". Duplicated in scripts/prerender-legal.cjs for SSR.
const PHONE_REGEX = /(?:\+?1[\s.\-])?\(?\d{3}\)?[\s.\-]\d{3}[\s.\-]\d{4}/g;

function linkifyPhones(text, keyPrefix) {
  if (typeof text !== "string" || !text) return text;
  const parts = [];
  let lastIdx = 0;
  let m;
  PHONE_REGEX.lastIndex = 0;
  while ((m = PHONE_REGEX.exec(text)) !== null) {
    if (m.index > lastIdx) parts.push(text.slice(lastIdx, m.index));
    const digits = m[0].replace(/[^\d+]/g, "");
    parts.push(
      React.createElement(
        "a",
        {
          key: keyPrefix + "-p" + m.index,
          href: "tel:" + digits,
          style: {
            color: "inherit",
            textDecoration: "underline",
            textDecorationStyle: "dotted",
            textDecorationColor: "#2e7d32",
            textUnderlineOffset: 2,
          },
        },
        m[0],
      ),
    );
    lastIdx = m.index + m[0].length;
  }
  if (lastIdx === 0) return text;
  if (lastIdx < text.length) parts.push(text.slice(lastIdx));
  return parts;
}

function pickText(field) {
  if (!field) return "";
  if (typeof field === "string") return field;
  return field.en || "";
}

function InlineDefinition({ term, onClose }) {
  return (
    <span
      style={{
        display: "block",
        margin: "6px 0 8px",
        padding: "10px 14px",
        background: "#ede7f6",
        border: "1px solid #5e35b1",
        borderRadius: 8,
        fontSize: 13,
        lineHeight: 1.5,
        color: "#1a1a1a",
      }}
    >
      <span style={{ fontWeight: 700, fontSize: 14, color: "#4527a0", display: "block", marginBottom: 4 }}>
        {pickText(term.term)}
        {term.aka && term.aka.length > 0 && (
          <span style={{ fontWeight: 400, color: "#767676", marginLeft: 6, fontSize: 12 }}>
            ({term.aka.join(", ")})
          </span>
        )}
      </span>
      <span>{pickText(term.plainEnglish)}</span>
      <button
        onClick={(e) => { e.stopPropagation(); onClose(); }}
        style={{
          display: "inline-block", marginLeft: 10, background: "none",
          border: "none", color: "#5e35b1", cursor: "pointer",
          fontSize: 12, fontFamily: "inherit", padding: 0,
        }}
      >
        close
      </button>
    </span>
  );
}

export default function GlossaryText({ text, maxHighlights }) {
  const [expandedTermId, setExpandedTermId] = useState(null);
  const limit = maxHighlights || 3;

  const segments = useMemo(() => {
    if (!text || !TERM_REGEX) return [{ type: "text", value: text || "" }];

    const parts = [];
    let lastIndex = 0;
    let matchCount = 0;
    const seen = new Set();

    TERM_REGEX.lastIndex = 0;
    let match;
    while ((match = TERM_REGEX.exec(text)) !== null) {
      const matchedText = match[0];
      const termId = GLOSSARY_ALIAS_MAP[matchedText.toLowerCase()];
      if (!termId || seen.has(termId)) continue;
      if (matchCount >= limit) continue;

      seen.add(termId);
      matchCount++;

      if (match.index > lastIndex) {
        parts.push({ type: "text", value: text.slice(lastIndex, match.index) });
      }
      parts.push({ type: "term", value: matchedText, termId });
      lastIndex = match.index + matchedText.length;
    }
    if (lastIndex < text.length) {
      parts.push({ type: "text", value: text.slice(lastIndex) });
    }
    return parts;
  }, [text, limit]);

  return (
    <span>
      {segments.map((seg, i) => {
        if (seg.type === "text") return <span key={i}>{linkifyPhones(seg.value, "s" + i)}</span>;

        const isExpanded = expandedTermId === seg.termId;
        const term = GLOSSARY_TERMS_BY_ID[seg.termId];
        if (!term) return <span key={i}>{seg.value}</span>;

        return (
          <span key={i}>
            <button
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setExpandedTermId(isExpanded ? null : seg.termId);
              }}
              style={{
                background: "none",
                border: "none",
                borderBottom: "1.5px dotted #5e35b1",
                color: "#4527a0",
                cursor: "pointer",
                padding: "2px 1px",
                fontFamily: "inherit",
                fontSize: "inherit",
                lineHeight: "inherit",
              }}
              title={"Tap for definition: " + pickText(term.term)}
            >
              {seg.value}
            </button>
            {isExpanded && (
              <InlineDefinition term={term} onClose={() => setExpandedTermId(null)} />
            )}
          </span>
        );
      })}
    </span>
  );
}
