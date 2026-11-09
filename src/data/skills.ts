// Compétences et formations affichées sur l'accueil.
// Source : dossier de compétences (novembre 2026).

export interface SkillGroup {
  label: string;
  items: string[];
}

export const technical: SkillGroup[] = [
  { label: 'Back-end', items: ['Java 8 → 25', 'Quarkus 1 et 3', 'Hibernate / JPA', 'API REST', 'Maven'] },
  { label: 'Front-end', items: ['Angular 8 → 22', 'TypeScript', 'RxJS', 'Web Components', 'Micro-frontends'] },
  {
    label: 'Architecture et données',
    items: ['DDD', 'Architecture hexagonale', 'Microservices', 'Kafka', 'Debezium', 'Oracle'],
  },
  {
    label: 'Qualité et production',
    items: ['JUnit', 'WireMock', 'Vitest', 'Cypress', 'Kubernetes', 'GitLab CI', 'Dynatrace', 'Kibana'],
  },
  { label: 'IA', items: ['GitHub Copilot', 'Claude, intégrés au développement et aux rituels agiles'] },
];

export const training: { year: string; label: string }[] = [
  { year: '2025', label: 'Software craftsmanship, MOP, DDD' },
  { year: '2024', label: 'Kubernetes' },
  { year: '2022', label: 'Angular avancé, Scrum Master' },
  { year: '2020', label: 'Master ILD, Aix-Marseille Université' },
  { year: 'Langues', label: 'Français (langue maternelle), anglais professionnel' },
];
