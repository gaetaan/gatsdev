// Configuration centrale du site : modifiez ici les informations qui
// apparaissent sur plusieurs pages (en-tête, pied de page, contact, mentions légales).

export const site = {
  brand: 'Gats Dev',
  domain: 'gatsdev.fr',
  url: 'https://gatsdev.fr',
  owner: 'Gaëtan Barbaria',
  role: 'Lead tech full stack freelance',
  location: 'Aix-Marseille',
  availability: '18 janvier 2027',
  availabilityIso: '2027-01-18',
  yearsOfExperience: 6,
  email: 'contact@gatsdev.fr',
  linkedin: 'https://www.linkedin.com/in/gaetan-barbaria/',
  // Passer à true une fois les PDF déposés dans /public (affiche les liens de téléchargement).
  showDocuments: false,
  resumePdf: '/dossier-de-competences-gaetan-barbaria.pdf',
  cvPdf: '/cv-gaetan-barbaria.pdf',
  defaultDescription:
    'Lead tech Java / Quarkus et Angular, freelance à Aix-Marseille : refontes DDD / hexagonales, encadrement d’équipes. Disponible le 18 janvier 2027.',
} as const;

// Informations légales (page Mentions légales).
export const legal = {
  status: 'Entrepreneur individuel (EI)',
  // À renseigner dès l'immatriculation (9 chiffres). Vide = « En cours d'immatriculation ».
  siren: '',
  // Adresse de domiciliation professionnelle. Vide = ville seule.
  address: '',
  city: 'Marseille (13), France',
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
  { href: '/experiences/', label: 'Missions' },
  { href: '/contact/', label: 'Contact' },
] as const;
