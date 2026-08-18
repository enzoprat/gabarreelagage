/**
 * Genere des visuels de remplacement pour que le build fonctionne
 * avant la livraison des photos de chantier reelles.
 * A supprimer une fois les vraies photos en place.
 * Usage : node scripts/generate-placeholders.mjs
 */
import { mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import sharp from 'sharp';

const root = process.cwd();

const files = [
  { out: 'src/assets/hero-elagueur-montauban.webp', w: 1600, h: 1200, label: 'Photo hero : grimpeur en action', tone: '#18201C' },
  { out: 'src/assets/realisation-chene-avant.webp', w: 1200, h: 900, label: 'Chêne, avant', tone: '#3B4A42' },
  { out: 'src/assets/realisation-chene-apres.webp', w: 1200, h: 900, label: 'Chêne, après', tone: '#235C34' },
  { out: 'src/assets/realisation-haie-avant.webp', w: 1200, h: 900, label: 'Haie de lauriers, avant', tone: '#3B4A42' },
  { out: 'src/assets/realisation-haie-apres.webp', w: 1200, h: 900, label: 'Haie de lauriers, après', tone: '#235C34' },
  { out: 'src/assets/realisation-peuplier-avant.webp', w: 1200, h: 900, label: 'Peuplier, avant', tone: '#3B4A42' },
  { out: 'src/assets/realisation-peuplier-apres.webp', w: 1200, h: 900, label: 'Peuplier, après', tone: '#235C34' },
  { out: 'src/assets/entreprise-materiel.webp', w: 1400, h: 1050, label: 'Matériel et véhicule', tone: '#18201C' },
];

function svg(w, h, label, tone) {
  const fontSize = Math.round(w / 26);
  return Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}">
  <rect width="${w}" height="${h}" fill="${tone}"/>
  <g fill="#FAFAF8" font-family="Helvetica, Arial, sans-serif" text-anchor="middle">
    <text x="${w / 2}" y="${h / 2 - fontSize * 0.4}" font-size="${fontSize}" font-weight="700">${label}</text>
    <text x="${w / 2}" y="${h / 2 + fontSize}" font-size="${Math.round(fontSize * 0.62)}" opacity="0.6">Visuel de remplacement, ${w}x${h}</text>
  </g>
</svg>`);
}

for (const file of files) {
  const dest = join(root, file.out);
  mkdirSync(dirname(dest), { recursive: true });
  await sharp(svg(file.w, file.h, file.label, file.tone))
    .webp({ quality: 78 })
    .toFile(dest);
  console.log('ok', file.out);
}

const ogDest = join(root, 'public/og-default.png');
mkdirSync(dirname(ogDest), { recursive: true });
await sharp(
  Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630">
  <rect width="1200" height="630" fill="#0D1210"/>
  <rect x="0" y="0" width="1200" height="8" fill="#2F7A45"/>
  <g font-family="Helvetica, Arial, sans-serif" fill="#FFFFFF">
    <text x="80" y="250" font-size="82" font-weight="800" letter-spacing="-2">Gabarre Élagage</text>
    <text x="80" y="330" font-size="40" font-weight="500" fill="#9FB3A8">Élagueur à Montauban, Tarn-et-Garonne</text>
    <text x="80" y="470" font-size="58" font-weight="700" fill="#2F7A45">06 66 63 73 35</text>
  </g>
</svg>`)
)
  .png()
  .toFile(ogDest);
console.log('ok public/og-default.png');
