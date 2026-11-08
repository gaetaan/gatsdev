// Configuration centrale du site : modifiez ici les informations qui
// apparaissent sur plusieurs pages (en-tête, pied de page, contact, mentions légales).

export const site = {
  brand: 'Gats Dev',
  domain: 'gatsdev.fr',
  url: 'https://gatsdev.fr',
  owner: 'Gaëtan Barbaria',
  role: 'Lead tech full stack freelance',
  location: 'Aix-Marseille',
  availability: 'janvier 2027',
  availabilityIso: '2027-01',
  yearsOfExperience: 6,
  email: 'contact@gatsdev.fr',
  linkedin: 'https://www.linkedin.com/in/ga%C3%ABtan-barbaria-85a842151/',
  // Passer à true une fois les PDF déposés dans /public (affiche les liens de téléchargement).
  showDocuments: false,
  resumePdf: '/dossier-de-competences-gaetan-barbaria.pdf',
  cvPdf: '/cv-gaetan-barbaria.pdf',
  defaultDescription:
    'Gaëtan Barbaria, lead tech full stack Java / Quarkus et Angular, freelance à Aix-Marseille. Refontes vers des microservices DDD et hexagonaux, encadrement d’équipes. Disponible en janvier 2027.',
} as const;

// Informations légales (page Mentions légales).
export const legal = {
  status: 'Entrepreneur individuel (EI)',
  // TODO : renseigner votre numéro SIREN (9 chiffres).
  siren: '[SIREN À COMPLÉTER]',
  // TODO : adresse de contact / de domiciliation professionnelle.
  address: '[ADRESSE À COMPLÉTER], 13000 Marseille, France',
  publicationDirector: 'Gaëtan Barbaria',
  host: {
    name: 'GitHub, Inc.',
    service: 'GitHub Pages',
    address: '88 Colin P. Kelly Jr. Street, San Francisco, CA 94107, États-Unis',
    url: 'https://pages.github.com',
  },
  // Date de dernière mise à jour des mentions légales.
  updatedAt: '9 novembre 2026',
} as const;

export const nav = [
  { href: '/', label: 'Accueil' },
  { href: '/expertise/', label: 'Expertise' },
  { href: '/experiences/', label: 'Expériences' },
  { href: '/contact/', label: 'Contact' },
] as const;
