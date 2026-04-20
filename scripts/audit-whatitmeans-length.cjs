// One-shot audit: count whatItMeans word counts across the corpus to decide
// safe thresholds for new validator length cap.
const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, '..', 'src', 'data', 'legal', 'entries');
const files = fs.readdirSync(dir).filter(f => f.endsWith('.js'));

let max = 0;
let maxFile = '';
let counts = { over1500: 0, over2000: 0, over2500: 0, over3000: 0 };
const overListed = [];

for (const f of files) {
  const src = fs.readFileSync(path.join(dir, f), 'utf8');
  const re = /whatItMeans:\s*\{\s*en:\s*"((?:[^"\\]|\\.)*)"/;
  const m = src.match(re);
  if (!m) continue;
  const text = m[1];
  const words = text.split(/\s+/).filter(Boolean).length;
  if (words > 1500) counts.over1500++;
  if (words > 2000) counts.over2000++;
  if (words > 2500) counts.over2500++;
  if (words > 3000) counts.over3000++;
  if (words > max) { max = words; maxFile = f; }
  if (words > 1500) overListed.push({ f, words });
}

console.log('Total entries:', files.length);
console.log('Max whatItMeans words:', max, '(' + maxFile + ')');
console.log('Over 1500 words:', counts.over1500);
console.log('Over 2000 words:', counts.over2000);
console.log('Over 2500 words:', counts.over2500);
console.log('Over 3000 words:', counts.over3000);
console.log('');
console.log('Entries over 1500 words:');
for (const e of overListed.sort((a, b) => b.words - a.words).slice(0, 30)) {
  console.log('  ' + e.words + ' ' + e.f);
}
