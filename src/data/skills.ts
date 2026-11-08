// Compétences affichées sur la page « Expertise ».
// Source : dossier de compétences (novembre 2026).

export interface SkillGroup {
  label: string;
  items: string[];
}

export const technical: SkillGroup[] = [
  { label: 'Langages', items: ['Java (8 → 25)', 'TypeScript', 'JavaScript', 'SQL', 'HTML / CSS'] },
  {
    label: 'Back-end',
    items: ['Quarkus 1 et 3', 'Panache', 'Hibernate ORM / JPA', 'REST', 'Maven'],
  },
  {
    label: 'Front-end',
    items: ['Angular (8 → 22)', 'RxJS', 'Web Components', 'Micro-frontends (module federation)'],
  },
  { label: 'Architecture', items: ['Domain-Driven Design', 'Architecture hexagonale', 'Microservices', 'API REST', 'Software craftsmanship'] },
  { label: 'Événementiel', items: ['Kafka', 'Debezium (change data capture)', 'Matrix / Synapse'] },
  { label: 'Données', items: ['Oracle', 'Optimisation de requêtes et de plans d’exécution', 'Traitements batch'] },
  { label: 'Tests', items: ['JUnit', 'WireMock', 'Vitest', 'Jasmine / Karma', 'Spectator', 'Cypress'] },
  { label: 'Livraison', items: ['Kubernetes', 'GitLab CI', 'Concourse', 'Jenkins', 'Git'] },
  { label: 'Exploitation', items: ['Dynatrace', 'Kibana', 'AppDynamics'] },
  { label: 'IA', items: ['GitHub Copilot', 'Claude', 'Intégration de l’IA dans le flux de développement et les rituels agiles'] },
];

export const training: { year: string; label: string }[] = [
  { year: '2025', label: 'Software craftsmanship, MOP, DDD' },
  { year: '2024', label: 'Kubernetes' },
  { year: '2022', label: 'Angular avancé, Scrum Master' },
  { year: '2020', label: 'Master ILD, Aix-Marseille Université' },
  { year: '2018', label: 'Licence informatique, Aix-Marseille Université' },
];
