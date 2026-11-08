// Missions affichées sur la page « Expériences », de la plus récente à la plus ancienne.
// Dupliquez un bloc pour ajouter une mission ; supprimez ceux dont vous n'avez pas besoin.
// Les champs `client` et `sector` peuvent rester génériques si la mission est confidentielle.

export interface Experience {
  period: string; // ex. « 2024 – 2026 »
  role: string; // ex. « Lead tech full stack »
  client: string; // ex. « Grand compte, secteur bancaire »
  sector?: string;
  summary: string;
  highlights: string[];
  stack: string[];
}

export const experiences: Experience[] = [
  {
    period: '[ANNÉE] – [ANNÉE]',
    role: 'Lead tech full stack',
    client: '[CLIENT / SECTEUR]',
    summary: '[Contexte de la mission en une ou deux phrases : produit, enjeux, taille de l’équipe.]',
    highlights: [
      '[Réalisation clé n° 1]',
      '[Réalisation clé n° 2]',
      '[Réalisation clé n° 3]',
    ],
    stack: ['Java', 'Quarkus 3', 'Angular'],
  },
  {
    period: '[ANNÉE] – [ANNÉE]',
    role: 'Référent technique',
    client: '[CLIENT / SECTEUR]',
    summary: '[Contexte de la mission en une ou deux phrases.]',
    highlights: ['[Réalisation clé n° 1]', '[Réalisation clé n° 2]'],
    stack: ['Java', 'Architecture hexagonale', 'DDD'],
  },
  {
    period: '[ANNÉE] – [ANNÉE]',
    role: 'Développeur full stack · Scrum Master',
    client: '[CLIENT / SECTEUR]',
    summary: '[Contexte de la mission en une ou deux phrases.]',
    highlights: ['[Réalisation clé n° 1]', '[Réalisation clé n° 2]'],
    stack: ['Java', 'Angular', 'Scrum'],
  },
];
