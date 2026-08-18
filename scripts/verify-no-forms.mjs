/**
 * Garde-fou : le SITE SOBRE ne doit contenir aucun formulaire.
 * Echoue le build si une balise form, input ou textarea apparait
 * dans les sources ou dans le HTML genere.
 *
 * Plus aucune exclusion : la demo premium, seule partie du projet qui
 * utilisait des champs, a ete sortie du projet client et archivee dans
 * ../gabarre elagage demo premium.
 */
import { readFileSync, readdirSync, statSync, existsSync } from 'node:fs';
import { extname, join, relative } from 'node:path';

const root = process.cwd();
const roots = ['src', 'public', 'dist'].filter((dir) =>
  existsSync(join(root, dir))
);
const extensions = new Set([
  '.astro',
  '.html',
  '.ts',
  '.tsx',
  '.js',
  '.mjs',
  '.md',
  '.mdx',
]);

const patterns = [
  { label: '<form>', regex: /<form[\s>]/i },
  { label: '<input>', regex: /<input[\s/>]/i },
  { label: '<textarea>', regex: /<textarea[\s>]/i },
  { label: '<select>', regex: /<select[\s>]/i },
];

const offenders = [];

function walk(dir) {
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) {
      walk(full);
      continue;
    }
    if (!extensions.has(extname(full))) continue;
    const content = readFileSync(full, 'utf8');
    for (const pattern of patterns) {
      if (pattern.regex.test(content)) {
        offenders.push(`${relative(root, full)} contient ${pattern.label}`);
      }
    }
  }
}

for (const dir of roots) walk(join(root, dir));

if (offenders.length > 0) {
  console.error('Verification formulaires : echec');
  for (const offender of offenders) console.error(`  - ${offender}`);
  process.exit(1);
}

console.log(
  `Verification formulaires : aucun form, input, textarea ou select trouve (${roots.join(', ')}).`
);
