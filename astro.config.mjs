// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// Domaine definitif, a renseigner le jour ou il est arbitre.
// Voir A-COMPLETER.md -> {{domaine}}
const SITE_URL = 'https://DOMAINE-A-DEFINIR.fr';

// Preview GitHub Pages, servie sous un prefixe d'URL.
const isPagesPreview = process.env.GITHUB_PAGES === 'true';

// Vercel expose le domaine de production du projet, et a defaut l'URL
// unique du deploiement. Sans ca, les canoniques et le sitemap pointeraient
// un domaine qui n'existe pas encore.
const vercelHost =
  process.env.VERCEL_PROJECT_PRODUCTION_URL || process.env.VERCEL_URL;

function resolveSite() {
  if (isPagesPreview) return 'https://enzoprat.github.io';
  if (vercelHost) return `https://${vercelHost}`;
  return SITE_URL;
}

export default defineConfig({
  site: resolveSite(),
  base: isPagesPreview ? '/gabarreelagage' : undefined,
  output: 'static',
  trailingSlash: 'ignore',
  build: {
    format: 'directory',
    inlineStylesheets: 'auto',
  },
  integrations: [
    sitemap({
      filter: (page) =>
        !page.includes('/mentions-legales') &&
        !page.includes('/politique-confidentialite'),
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
