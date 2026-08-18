# Gabarre Élagage — site Astro

Site vitrine d'un élagueur de Montauban (Tarn-et-Garonne). Objectif unique : faire
composer le numéro. Pas de formulaire, pas de compte, pas de panier.

| Route | Layout             | Feuille de style        | État    |
| ----- | ------------------ | ----------------------- | ------- |
| `/`   | `BaseLayout.astro` | `src/styles/global.css` | Accueil |

## La version premium est archivée à côté

Une seconde direction artistique existait dans ce dépôt sur `/demo` : animations
métier, curseur personnalisé, estimateur en 5 étapes. Le client l'a jugée trop
complexe. Elle a été sortie d'ici et vit désormais dans un projet autonome :

```
../gabarre elagage demo premium/
```

Ce dossier est complet et se lance seul (`npm install && npm run dev`). Ne pas
réimporter ses composants ici sans décision explicite : le garde-fou anti-formulaires
échouerait sur l'estimateur.

## Démarrer

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # build + vérification anti-formulaires
npm run preview
```

## Stack

- Astro 5 en `output: 'static'`, TypeScript strict
- Tailwind CSS v4 via `@tailwindcss/vite`, tokens déclarés en `@theme` (pas de
  `tailwind.config.js`)
- Aucun framework front, aucune librairie d'animation, aucun backend
- Images `.webp` servies par `astro:assets`
- `@astrojs/sitemap` + `public/robots.txt`

## Règle structurante : zéro formulaire

Le site n'a ni formulaire, ni champ e-mail. Chaque CTA pointe sur
`tel:+33666637335`. Le garde-fou `scripts/verify-no-forms.mjs` tourne à chaque build
et échoue s'il trouve un `form`, `input`, `textarea` ou `select` dans `src`, `public`
ou `dist`.

Il n'a plus aucune exclusion depuis le départ de la démo. Si un scan échoue, c'est
qu'un champ a réellement été introduit.

## Deux prestations, pas un catalogue

Gabarre vend l'élagage et l'abattage. Le démontage par tronçons, le broyage et le
rognage de souche sont des gestes compris dans l'une ou l'autre, jamais vendus seuls.

`SERVICES` dans `src/data/site.ts` fait foi : il alimente la navigation, les cards
d'accueil, le pied de page et le JSON-LD. Y ajouter une entrée crée la prestation
partout à la fois, mais la page `/services/<slug>` correspondante reste à écrire.

## Organisation

```
src/
├── data/
│   ├── site.ts        # source unique — contient encore des placeholders {{...}}
│   ├── faq-home.ts
│   └── realisations.ts
├── layouts/BaseLayout.astro
├── lib/schema.ts      # JSON-LD LocalBusiness + FAQPage
├── components/        # 12 composants
├── styles/global.css
└── pages/index.astro
```

## À faire avant toute mise en ligne

Voir `A-COMPLETER.md`. En résumé : `src/data/site.ts` contient 11 placeholders
`{{...}}` qui cassent les mentions légales et le JSON-LD, et 7 pages du brief
initial restent à produire.
