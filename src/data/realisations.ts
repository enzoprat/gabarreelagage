import type { ImageMetadata } from 'astro';

import entaille from '../assets/abattage-entaille-direction.webp';
import arbreAuSol from '../assets/abattage-arbre-au-sol.webp';

export interface Realisation {
  slug: string;
  essence: string;
  prestation: string;
  commune: string;
  contrainte: string;
  resume: string;
  photo: ImageMetadata;
  photoAlt: string;
}

/**
 * Les textes decrivent des cas de figure types tant que les fiches
 * de chantier reelles ne sont pas fournies. Voir A-COMPLETER.md.
 *
 * Une seule photo par chantier : les paires avant / apres exigent deux
 * cliches du meme arbre, qui n'ont pas ete fournis. Mieux vaut un visuel
 * juste qu'un rapprochement de deux arbres differents.
 */
export const REALISATIONS: Realisation[] = [
  {
    slug: 'abattage-directionnel',
    essence: 'Feuillu de plein champ, environ 14 mètres',
    prestation: 'Abattage directionnel au pied',
    commune: 'Montauban',
    contrainte: 'Clôture et ligne aérienne dans l\u2019axe de chute',
    resume:
      "Entaille de direction ouverte du côté choisi, charnière conservée pour tenir l'arbre jusqu'au bout de sa course. Tronc débité sur place, houppier broyé et terrain dégagé.",
    photo: entaille,
    photoAlt:
      "Entaille de direction ouverte à la tronçonneuse au pied d'un tronc avant abattage",
  },
  {
    slug: 'abattage-terrain-degage',
    essence: 'Feuillu, environ 12 mètres, houppier déséquilibré',
    prestation: 'Abattage et évacuation des rémanents',
    commune: 'Nègrepelisse',
    contrainte: 'Chute à distancer d\u2019une clôture mitoyenne',
    resume:
      "Arbre couché dans l'axe prévu, branches séparées du tronc puis broyées. Bûches laissées au propriétaire, souche rognée en option.",
    photo: arbreAuSol,
    photoAlt:
      'Arbre abattu couché au sol, houppier séparé du tronc avant broyage des rémanents',
  },
];
