# À compléter avant mise en ligne

Deux catégories, par ordre de gravité :

1. **Placeholders `{{...}}`**, qui cassent les mentions légales et le JSON-LD.
2. **Pages non construites** du brief initial.

Ce fichier ne couvre que le site sobre. Les réserves de la démo premium (avis
fictifs, compteur, visuels générés, branchement de l'estimateur) ont suivi la démo
dans `../gabarre elagage demo premium/`.

---

## 1. Placeholders `{{...}}` — bloquant

Ces valeurs alimentent les mentions légales et le JSON-LD `LocalBusiness`. Tant
qu'elles sont présentes, le balisage structuré est invalide. 11 occurrences dans
`src/data/site.ts` :

- `{{email}}`
- `{{adresse}}` · `{{code postal}}`
- `{{siret}}`
- `{{année}}` (année de création)
- `{{ASSURANCE_RC_PRO}}` · `{{CERTIFICATION}}`
- `{{latitude}}` · `{{longitude}}`

Deux d'entre elles sont visibles en clair dans le pied de page (SIRET et assurance)
et dans le bloc adresse. Ce ne sont pas que des métadonnées.

Également à trancher :

- `SITE_URL` vaut `https://DOMAINE-A-DEFINIR.fr`, repris par le sitemap et les URL
  canoniques.
- `SERVICE_A_LA_PERSONNE` est à `false`. Ne passer à `true` que si l'agrément est
  confirmé, l'affichage promet une réduction d'impôt.
- `BUSINESS.sameAs` est vide. Y mettre la fiche Google Business dès qu'elle existe.

Les horaires sont renseignés : lundi au samedi, 8h - 19h, repris dans `site.ts`
(`hoursText`) et dans `schema.ts` (`08:00` / `19:00`).

## 2. Pages non construites

Le brief prévoyait 11 pages. Seul l'accueil `/` existe. La navigation et le pied de
page pointent déjà vers ces routes : **tout lien ci-dessous est aujourd'hui un 404.**

- `/services/elagage` et `/services/abattage`, 900 à 1400 mots chacune
- `/zone-intervention`
- `/realisations`
- `/entreprise`
- `/mentions-legales`
- `/politique-confidentialite`

Les deux dernières dépendent des placeholders de la section 1.

Le catalogue est passé de 6 prestations à 2, l'élagage et l'abattage. Les 4 pages
service abandonnées (taille de haies, dessouchage, démontage, entretien) ne sont plus
attendues : le démontage, le broyage et le rognage sont traités dans les deux pages
restantes.

## 3. Visuels

`src/assets/` contient encore `realisation-haie-avant.webp` et
`realisation-haie-apres.webp`, plus référencées depuis le retrait de la prestation
haie. Les supprimer.

Les visuels restants sont à valider avec les photos réelles de chantier, et les `alt`
de `src/data/realisations.ts` à réécrire pour décrire la photo livrée.
