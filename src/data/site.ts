/**
 * Source unique de verite du site.
 * Les valeurs entre {{ }} sont des placeholders a remplacer.
 * Voir A-COMPLETER.md
 */

export const SITE_URL = 'https://DOMAINE-A-DEFINIR.fr';

export const PHONE_DISPLAY = '06 66 63 73 35';
export const PHONE_HREF = 'tel:+33666637335';
export const PHONE_E164 = '+33666637335';

/** Libelle unique d'action sur tout le site. */
export const CALL_LABEL = `Appeler ${PHONE_DISPLAY}`;
export const CALL_ARIA = `Appeler Gabarre Élagage au ${PHONE_DISPLAY}`;
export const CALL_REASSURANCE =
  'Devis gratuit, réponse directe, intervention sur Montauban et alentours.';

export const BUSINESS = {
  name: 'Gabarre',
  legalName: 'Gabarre Élagage',
  tagline: "Élagage et travaux d'arbres",
  city: 'Montauban',
  department: 'Tarn-et-Garonne',
  departmentCode: '82',
  /** Placeholders : a renseigner avant mise en ligne */
  email: '{{email}}',
  streetAddress: '{{adresse}}',
  postalCode: '{{code postal}}',
  siret: '{{siret}}',
  yearFounded: '{{année}}',
  hoursText: 'Du lundi au samedi, 8h - 19h',
  insurance: '{{ASSURANCE_RC_PRO}}',
  certification: '{{CERTIFICATION}}',
  priceRange: '€€',
  /** Coordonnees approximatives du centre de Montauban, a affiner sur l'adresse reelle. */
  geo: { lat: '{{latitude}}', lng: '{{longitude}}' },
  /** Profils externes (Google Business, Pages Jaunes, Facebook...) */
  sameAs: [] as string[],
} as const;

/** Passe a true seulement si l'agrement Service a la personne est confirme. */
export const SERVICE_A_LA_PERSONNE = false;

export type ServiceKey = 'elagage' | 'abattage';

export interface ServiceEntry {
  key: ServiceKey;
  href: string;
  /** Titre court, navigation et cartes */
  nav: string;
  /** Titre de carte accueil */
  cardTitle: string;
  /** 2 lignes concretes sur la carte accueil */
  cardText: string;
  /** Ancre naturelle pour le maillage interne */
  anchor: string;
}

export const SERVICES: ServiceEntry[] = [
  {
    key: 'elagage',
    href: '/services/elagage',
    nav: 'Élagage',
    cardTitle: 'Élagage et taille raisonnée',
    cardText:
      "Réduction de couronne, éclaircie, taille de formation. On allège l'arbre sans le mutiler et on respecte sa structure.",
    anchor: 'élagage et taille raisonnée à Montauban',
  },
  {
    key: 'abattage',
    href: '/services/abattage',
    nav: 'Abattage',
    cardTitle: "Abattage et démontage d'arbre",
    cardText:
      "Abattage direct quand la place le permet, démontage par tronçons avec rétention en milieu contraint.",
    anchor: "abattage d'arbre à Montauban",
  },
];

export function serviceByKey(key: ServiceKey): ServiceEntry {
  const found = SERVICES.find((s) => s.key === key);
  if (!found) throw new Error(`Service inconnu : ${key}`);
  return found;
}

/** Retourne les autres prestations pour le maillage interne. Avec deux
 *  prestations au catalogue, cela renvoie toujours l'autre, soit une seule. */
export function otherServices(key: ServiceKey, count = 3): ServiceEntry[] {
  const index = SERVICES.findIndex((s) => s.key === key);
  const rest = [...SERVICES.slice(index + 1), ...SERVICES.slice(0, index)];
  return rest.slice(0, count);
}

export const NAV_LINKS = [
  { href: '/services/elagage', label: 'Prestations' },
  { href: '/zone-intervention', label: "Zone d'intervention" },
  { href: '/realisations', label: 'Réalisations' },
  { href: '/entreprise', label: 'Entreprise' },
  { href: '/#faq', label: 'Questions fréquentes' },
];

/** Communes de la zone d'intervention. */
export const COMMUNES: string[] = [
  'Montauban',
  'Bressols',
  'Montbeton',
  'Albefeuille-Lagarde',
  'Lamothe-Capdeville',
  'Villemade',
  'Lacourt-Saint-Pierre',
  'Corbarieu',
  'Campsas',
  'Labastide-Saint-Pierre',
  'Nègrepelisse',
  'Bioule',
  'Villebrumier',
  'Monclar-de-Quercy',
  'Verlhac-Tescou',
  'Molières',
  'Réalville',
  'Albias',
  'Piquecos',
  'Saint-Étienne-de-Tulmont',
  'Meauzac',
  'Caussade',
  'Septfonds',
  'Castelsarrasin',
  'Moissac',
  'Grisolles',
  'Dieupentale',
  'Villemur-sur-Tarn',
];
