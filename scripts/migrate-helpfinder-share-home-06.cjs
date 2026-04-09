#!/usr/bin/env node
/**
 * scripts/migrate-helpfinder-share-home-06.cjs
 *
 * Adds a third ShareButton placement on the homepage hero, between the
 * "or call 211" link and the Know Your Rights tile. Same component, same
 * props as the existing /support and /help placements — visual consistency
 * across the three placements is more important than per-placement tuning.
 *
 * The import statement was already added by migrate-helpfinder-share-04.cjs.
 * This script only adds the JSX render block.
 *
 * One patch. Idempotent. Aborts cleanly if anchor not found.
 *
 * Placement rationale: the homepage is the highest-traffic surface and the
 * one most likely to trigger a "my cousin needs this" share reflex. Sitting
 * the share button below the call-211 line and above the Know Your Rights
 * tile keeps it visible without scrolling on most screens, and visually
 * subordinate to the primary "Find help now" CTA above it (which is what
 * we want — sharing is a secondary action, helping yourself is primary).
 */

const fs = require('fs');
const path = require('path');

const FILE = path.join(__dirname, '..', 'src', 'components', 'LandingPage.jsx');

let src = fs.readFileSync(FILE, 'utf8');
const orig = src;
const hadCRLF = src.includes('\r\n');
src = src.replace(/\r\n/g, '\n');

if (src.includes('Share HelpFinder with a friend who needs it')) {
  console.log('Homepage share button: already applied, skipping');
  process.exit(0);
}

const oldStr = `          {/* 211 under doors */}
          <div style={{ textAlign: "center", marginTop: 16 }}>
            <a href="tel:211" style={{ fontSize: 12, color: C.dust, textDecoration: "none" }}>
              📞 {t(lang,"door1Sub")}
            </a>
          </div>

          {/* ── KNOW YOUR RIGHTS TILE ── */}`;

const newStr = `          {/* 211 under doors */}
          <div style={{ textAlign: "center", marginTop: 16 }}>
            <a href="tel:211" style={{ fontSize: 12, color: C.dust, textDecoration: "none" }}>
              📞 {t(lang,"door1Sub")}
            </a>
          </div>

          {/* Share — homepage placement, added April 9, 2026. TODO: i18n */}
          <div style={{ textAlign: "center", marginTop: 20, marginBottom: 4 }}>
            <ShareButton
              title="HelpFinder"
              text="Free help and legal info for Monroe County. No accounts, no ads, no tracking."
              url="https://helpfinder.help"
              label="Share HelpFinder"
              ariaLabel="Share HelpFinder with a friend who needs it"
            />
          </div>

          {/* ── KNOW YOUR RIGHTS TILE ── */}`;

if (!src.includes(oldStr)) {
  console.error('FATAL: anchor not found in LandingPage.jsx');
  console.error('Expected to find the "211 under doors" block followed by the KNOW YOUR RIGHTS TILE comment.');
  console.error('No changes written.');
  process.exit(1);
}

src = src.replace(oldStr, newStr);
if (hadCRLF) src = src.replace(/\n/g, '\r\n');
fs.writeFileSync(FILE, src);

console.log('Homepage share button: applied');
console.log(`LandingPage.jsx: ${orig.length} → ${src.length} bytes`);
