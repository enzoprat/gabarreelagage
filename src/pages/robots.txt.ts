import type { APIRoute } from 'astro';

/**
 * Genere a chaque build plutot que servi en statique : tant que le site
 * tourne sur un domaine provisoire (preview Vercel, GitHub Pages) ou sur le
 * placeholder de domaine, il ne doit pas etre indexe. La page porte encore
 * des {{...}} a la place du SIRET et de l'assurance, et sept liens de
 * navigation repondent 404.
 *
 * L'indexation s'ouvre d'elle-meme le jour ou le build tourne sur le domaine
 * definitif, renseigne dans astro.config.mjs.
 */
const HOTES_PROVISOIRES = ['DOMAINE-A-DEFINIR', '.vercel.app', 'github.io'];

export const GET: APIRoute = ({ site }) => {
  const base = (site?.href ?? 'https://DOMAINE-A-DEFINIR.fr').replace(/\/$/, '');
  // `site.href` normalise l'hote en minuscules, on compare donc sans casse.
  const repere = base.toLowerCase();
  const provisoire = HOTES_PROVISOIRES.some((hote) =>
    repere.includes(hote.toLowerCase())
  );

  const corps = provisoire
    ? `User-agent: *\nDisallow: /\n`
    : `User-agent: *\nAllow: /\n\nSitemap: ${base}/sitemap-index.xml\n`;

  return new Response(corps, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
