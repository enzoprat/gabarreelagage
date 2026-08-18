import {
  BUSINESS,
  COMMUNES,
  PHONE_E164,
  SITE_URL,
  SERVICES,
} from '../data/site';

const ORG_ID = `${SITE_URL}/#business`;

export function localBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'HomeAndConstructionBusiness'],
    '@id': ORG_ID,
    name: 'Gabarre Élagage',
    alternateName: 'Gabarre',
    description:
      "Élagueur à Montauban. Élagage et abattage en Tarn-et-Garonne, démontage par tronçons en milieu contraint, avec broyage et évacuation des déchets verts.",
    url: SITE_URL,
    telephone: PHONE_E164,
    email: BUSINESS.email,
    image: `${SITE_URL}/og-default.png`,
    logo: `${SITE_URL}/og-default.png`,
    priceRange: BUSINESS.priceRange,
    foundingDate: BUSINESS.yearFounded,
    address: {
      '@type': 'PostalAddress',
      streetAddress: BUSINESS.streetAddress,
      postalCode: BUSINESS.postalCode,
      addressLocality: BUSINESS.city,
      addressRegion: BUSINESS.department,
      addressCountry: 'FR',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: BUSINESS.geo.lat,
      longitude: BUSINESS.geo.lng,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
        ],
        opens: '08:00',
        closes: '19:00',
      },
    ],
    areaServed: COMMUNES.map((commune) => ({
      '@type': 'City',
      name: commune,
      containedInPlace: {
        '@type': 'AdministrativeArea',
        name: 'Tarn-et-Garonne',
      },
    })),
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: "Travaux d'arbres",
      itemListElement: SERVICES.map((service) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: service.cardTitle,
          url: `${SITE_URL}${service.href}`,
        },
      })),
    },
    sameAs: BUSINESS.sameAs,
  };
}

export function serviceSchema(options: {
  name: string;
  description: string;
  path: string;
  serviceType: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${SITE_URL}${options.path}#service`,
    name: options.name,
    serviceType: options.serviceType,
    description: options.description,
    url: `${SITE_URL}${options.path}`,
    provider: { '@id': ORG_ID },
    areaServed: COMMUNES.map((commune) => ({ '@type': 'City', name: commune })),
    availableChannel: {
      '@type': 'ServiceChannel',
      servicePhone: {
        '@type': 'ContactPoint',
        telephone: PHONE_E164,
        contactType: 'customer service',
        areaServed: 'FR',
        availableLanguage: 'French',
      },
    },
  };
}

export function faqSchema(items: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };
}

export function breadcrumbSchema(items: { label: string; href?: string }[]) {
  const trail = [{ label: 'Accueil', href: '/' }, ...items];
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: trail.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.label,
      ...(item.href ? { item: `${SITE_URL}${item.href}` } : {}),
    })),
  };
}
