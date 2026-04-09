import React, { useState } from "react";

/**
 * ShareButton — universal native-share-sheet handoff with clipboard fallback.
 *
 * Props:
 *   title     string  Title shown in the share sheet (e.g. "HelpFinder")
 *   text      string  Body text shown in the share sheet
 *   url       string  URL to share
 *   label     string  Button label (defaults to "Share")
 *   ariaLabel string  Accessibility label (defaults to label)
 *
 * Behavior:
 *   - If navigator.share is available (mobile Safari, mobile Chrome, Edge,
 *     most modern mobile browsers): opens the OS native share sheet so the
 *     user can send the link via WhatsApp, Messages, AirDrop, email, Signal,
 *     or anything else they have installed.
 *   - If navigator.share is NOT available (most desktop browsers): copies
 *     the URL to clipboard and shows a brief "Copied!" confirmation.
 *   - If clipboard API also fails: shows the URL in a prompt() the user
 *     can manually copy.
 *
 * The website is a launchpad to the resource, never the resource itself.
 * We hand off to the user's existing tools. No external share libraries,
 * no third-party tracking pixels, no Twitter/Facebook/WhatsApp brand widgets
 * that phone home. The OS already has the share sheet — we just open it.
 */
export default function ShareButton({ title, text, url, label = "Share", ariaLabel }) {
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    // Embed the URL inside the text string so it survives on share
    // targets that ignore the separate url field — notably Windows Outlook,
    // which reads only `text`. Modern share targets (iOS Safari, Android
    // Chrome, WhatsApp, Messages, Twitter) all auto-detect URLs in plain
    // text and render them as clickable links. The url field is still
    // passed for clients that handle it properly. Defensive in depth.
    const textWithUrl = url ? text + "\n\n" + url : text;
    const shareData = { title, text: textWithUrl, url };

    // Try Web Share API first (mobile native share sheet)
    if (typeof navigator !== "undefined" && typeof navigator.share === "function") {
      try {
        await navigator.share(shareData);
        return; // Success — share sheet opened
      } catch (err) {
        // User cancelled — abort silently, don't fall through to clipboard
        if (err && err.name === "AbortError") return;
        // Other error (permission denied, no targets, etc.) — fall through
      }
    }

    // Fallback 1: copy to clipboard
    if (typeof navigator !== "undefined" && navigator.clipboard && typeof navigator.clipboard.writeText === "function") {
      try {
        await navigator.clipboard.writeText(url);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
        return;
      } catch (err) {
        // Clipboard blocked or failed — fall through to prompt
      }
    }

    // Last resort: prompt with the URL so user can manually copy
    if (typeof window !== "undefined") {
      window.prompt("Copy this link:", url);
    }
  };

  return (
    <button
      onClick={handleShare}
      aria-label={ariaLabel || label}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 6,
        padding: "10px 16px",
        background: "#fff",
        color: "#2e7d32",
        border: "2px solid #2e7d32",
        borderRadius: 28,
        fontSize: 14,
        fontWeight: 600,
        cursor: "pointer",
        textDecoration: "none",
        fontFamily: "inherit",
      }}
    >
      <span style={{ fontSize: 16, lineHeight: 1 }} aria-hidden="true">↗</span>
      <span>{copied ? "Copied!" : label}</span>
    </button>
  );
}
