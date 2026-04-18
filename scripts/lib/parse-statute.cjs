/*
 * scripts/lib/parse-statute.cjs
 * ----------------------------
 * Canonical statute extractor for entry `sources[]` URLs.
 * Used by the primaryStatute migration and the uniqueness validator.
 *
 * Returns a normalized statute string like:
 *   "NY PBH 2541"          (state statute — nysenate.gov)
 *   "NY PBH A7"            (state statute article)
 *   "NY SOS A6-TITLE-6"    (state statute article/title scope)
 *   "42 USC 1396u-4"
 *   "42 USC CHAPTER 7"
 *   "42 CFR 438"           (CFR part)
 *   "42 CFR 460.12"        (CFR section)
 *   "12 NYCRR 41"          (NYCRR part)
 *   "UCC 4-403"
 *   null                   (URL is not a statute — agency, court, etc.)
 *
 * Strings are uppercased and whitespace-collapsed for stable comparison.
 */

function parseStatuteURL(url) {
  if (typeof url !== 'string' || !url) return null;
  let m;

  // NY statute: nysenate.gov/legislation/laws/XXX[/YYY]
  m = url.match(/nysenate\.gov\/legislation\/laws\/([A-Z]+)(?:\/([A-Z0-9.\-]+))?/i);
  if (m) {
    const code = m[1].toUpperCase();
    const section = m[2] ? m[2].toUpperCase() : null;
    if (!section) return `NY ${code}`;
    return `NY ${code} ${section}`;
  }

  // NY statute bill form — skip (not a statute citation)
  if (/nysenate\.gov\/legislation\/bills\//i.test(url)) return null;

  // US Code: law.cornell.edu/uscode/text/N/M
  m = url.match(/law\.cornell\.edu\/uscode\/text\/(\d+)\/chapter-(\d+)/i);
  if (m) return `${m[1]} USC CHAPTER ${m[2]}`;
  m = url.match(/law\.cornell\.edu\/uscode\/text\/(\d+)\/([A-Za-z0-9\-]+)/);
  if (m) return `${m[1]} USC ${m[2].toUpperCase()}`;
  m = url.match(/law\.cornell\.edu\/uscode\/text\/(\d+)\b/);
  if (m) return `${m[1]} USC`;

  // CFR: law.cornell.edu/cfr/text/N/part-M or N/N.NN
  m = url.match(/law\.cornell\.edu\/cfr\/text\/(\d+)\/part-([A-Za-z0-9\-]+)(?:\/subpart-([A-Za-z]+))?/i);
  if (m) {
    const base = `${m[1]} CFR PART ${m[2].toUpperCase()}`;
    return m[3] ? `${base} SUBPART ${m[3].toUpperCase()}` : base;
  }
  m = url.match(/law\.cornell\.edu\/cfr\/text\/(\d+)\/([0-9.]+)/);
  if (m) return `${m[1]} CFR ${m[2]}`;

  // eCFR: ecfr.gov/current/title-N/...part-M
  m = url.match(/ecfr\.gov\/current\/title-(\d+)\/[^?#]*?part-([0-9A-Za-z\-]+)/i);
  if (m) return `${m[1]} CFR PART ${m[2].toUpperCase()}`;
  m = url.match(/ecfr\.gov\/current\/title-(\d+)\/section-([0-9A-Za-z.\-]+)/i);
  if (m) return `${m[1]} CFR ${m[2].toUpperCase()}`;

  // NYCRR (Cornell mirror): law.cornell.edu/regulations/new-york/title-N/...part-M
  m = url.match(/law\.cornell\.edu\/regulations\/new-york\/title-(\d+)[^?#]*?part-([0-9\-]+)(?:\/subpart-([0-9\-]+))?/i);
  if (m) {
    const base = `${m[1]} NYCRR PART ${m[2]}`;
    return m[3] ? `${base} SUBPART ${m[3]}` : base;
  }
  m = url.match(/law\.cornell\.edu\/regulations\/new-york\/title-(\d+)[^?#]*?appendix-([0-9\-A-Za-z]+)/i);
  if (m) return `${m[1]} NYCRR APPENDIX ${m[2].toUpperCase()}`;

  // UCC: law.cornell.edu/ucc/N/N-NNN
  m = url.match(/law\.cornell\.edu\/ucc\/(\d+)\/(\d+-\d+)/);
  if (m) return `UCC ${m[2]}`;

  // U.S. Constitution: law.cornell.edu/constitution/XXX
  m = url.match(/law\.cornell\.edu\/constitution\/([a-z_]+)/i);
  if (m) return `US CONST ${m[1].toUpperCase()}`;

  // govt.westlaw.com NYCRR — opaque URLs, do not parse
  // Agency sites, court sites, etc — not statutes
  return null;
}

function parseStatuteFromSources(sources) {
  if (!Array.isArray(sources)) return null;
  for (const url of sources) {
    const parsed = parseStatuteURL(url);
    if (parsed) return parsed;
  }
  return null;
}

function normalizeStatute(s) {
  if (!s) return null;
  return String(s).toUpperCase().replace(/\s+/g, ' ').trim();
}

module.exports = { parseStatuteURL, parseStatuteFromSources, normalizeStatute };
