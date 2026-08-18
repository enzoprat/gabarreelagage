// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// SITE_URL est un placeholder tant que le domaine n'est pas arbitre.
// Voir A-COMPLETER.md -> {{domaine}}
const SITE_URL = 'https://DOMAINE-A-DEFINIR.fr';

// Preview GitHub Pages. Le build de production ne passe pas cette variable,
// il garde donc le domaine reel et aucun prefixe d'URL.
const isPagesPreview = process.env.GITHUB_PAGES === 'true';

export default defineConfig({
  site: isPagesPreview ? 'https://enzoprat.github.io' : SITE_URL,
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
