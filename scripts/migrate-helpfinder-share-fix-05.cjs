#!/usr/bin/env node
/**
 * scripts/migrate-helpfinder-share-fix-05.cjs
 *
 * Fixes a Windows-Outlook quirk in the ShareButton component.
 *
 * When Web Share API runs on Windows desktop, the OS routes the share to
 * the user's default app (often Outlook). Outlook reads only the `text`
 * field and ignores `url`, so the shared link gets dropped silently.
 *
 * Fix: embed the URL inside the text string so it survives ANY share
 * target. iOS Safari, Android Chrome, WhatsApp, Messages, Outlook, and
 * Twitter all detect URLs in plain text and render them as clickable
 * links. The separate `url` field is still passed for clients that
 * handle it properly — defensive in depth.
 *
 * One patch. Idempotent. Aborts cleanly if anchor not found.
 */

const fs = require('fs');
const path = require('path');

const FILE = path.join(__dirname, '..', 'src', 'components', 'ShareButton.jsx');

let src = fs.readFileSync(FILE, 'utf8');
const orig = src;
const hadCRLF = src.includes('\r\n');
src = src.replace(/\r\n/g, '\n');

if (src.includes('textWithUrl')) {
  console.log('ShareButton URL-in-text fix: already applied, skipping');
  process.exit(0);
}

const oldStr = '    const shareData = { title, text, url };';
const newStr = `    // Embed the URL inside the text string so it survives on share
    // targets that ignore the separate url field — notably Windows Outlook,
    // which reads only \`text\`. Modern share targets (iOS Safari, Android
    // Chrome, WhatsApp, Messages, Twitter) all auto-detect URLs in plain
    // text and render them as clickable links. The url field is still
    // passed for clients that handle it properly. Defensive in depth.
    const textWithUrl = url ? text + "\\n\\n" + url : text;
    const shareData = { title, text: textWithUrl, url };`;

if (!src.includes(oldStr)) {
  console.error('FATAL: anchor not found in ShareButton.jsx');
  console.error('No changes written.');
  process.exit(1);
}

src = src.replace(oldStr, newStr);
if (hadCRLF) src = src.replace(/\n/g, '\r\n');
fs.writeFileSync(FILE, src);

console.log(`ShareButton URL-in-text fix: applied`);
console.log(`ShareButton.jsx: ${orig.length} → ${src.length} bytes`);
