import type { ImageMetadata } from 'astro';

import cheneAvant from '../assets/realisation-chene-avant.webp';
import cheneApres from '../assets/realisation-chene-apres.webp';
import peuplierAvant from '../assets/realisation-peuplier-avant.webp';
import peuplierApres from '../assets/realisation-peuplier-apres.webp';

export interface Realisation {
  slug: string;
  essence: string;
  prestation: string;
  commune: string;
  contrainte: string;
  resume: string;
  before: ImageMetadata;
  after: ImageMetadata;
  beforeAlt: string;
  afterAlt: string;
}

/**
 * Les textes decrivent des cas de figure types tant que les fiches
 * de chantier reelles ne sont pas fournies. Voir A-COMPLETER.md.
 */
export const REALISATIONS: Realisation[] = [
  {
    slug: 'chene-reduction-couronne',
    essence: 'Chêne pédonculé, environ 12 mètres',
    prestation: 'Réduction de couronne et éclaircie',
    commune: 'Montauban',
    contrainte: 'Ligne électrique basse tension à moins de trois mètres',
    resume:
      "Couronne allégée sur un tiers du volume, coupes prises sur tire-sève, branches descendues à la corde côté rue. Broyage sur place et bûches laissées au propriétaire.",
    before: cheneAvant,
    after: cheneApres,
    beforeAlt:
      "Chêne de 12 mètres au houppier dense avant réduction de couronne à Montauban",
    afterAlt:
      "Le même chêne après réduction de couronne, silhouette allégée et branches dégagées de la ligne électrique",
  },
  {
    slug: 'peuplier-demontage',
    essence: 'Peuplier, environ 18 mètres, tronc creux',
    prestation: 'Démontage par tronçons avec rétention',
    commune: 'Nègrepelisse',
    contrainte: 'Toiture et abri de jardin en zone de chute',
    resume:
      "Démontage en grimpé par sections courtes, chaque tronçon retenu à la corde puis posé au sol. Souche rognée à 25 centimètres sous le niveau du terrain.",
    before: peuplierAvant,
    after: peuplierApres,
    beforeAlt:
      "Peuplier de 18 mètres au tronc creux surplombant une toiture avant démontage",
    afterAlt:
      'Terrain dégagé après démontage du peuplier et rognage de la souche, pelouse rendue praticable',
  },
];
