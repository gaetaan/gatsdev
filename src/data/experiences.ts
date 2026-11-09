// Missions affichées sur la page « Expériences », de la plus récente à la plus ancienne.
// Source : dossier de compétences (novembre 2026).

export interface Experience {
  id: string;
  start: string; // AAAA-MM, pour <time datetime>
  end?: string; // absent = en cours
  period: string; // libellé affiché
  project: string; // nom de code interne
  title: string; // ce que fait l'application, en clair
  role: string;
  company: string;
  client: string;
  summary: string;
  highlights: string[];
  stack: string[];
}

export const experiences: Experience[] = [
  {
    id: 'tcu',
    start: '2026-06',
    period: 'Depuis juin 2026',
    project: 'TCU',
    title: 'Historique des contacts usagers',
    role: 'Leader technique full stack',
    company: 'Sopra Steria',
    client: 'France Travail',
    summary:
      'Refonte d’une solution ancienne et instable qui centralise toutes les traces de contact entre un demandeur d’emploi et son conseiller, alimentée par les événements de l’ensemble du système d’information.',
    highlights: [
      'Pilotage technique de la refonte, du cadrage à la mise en production, vers une architecture microservices DDD / hexagonale.',
      'Pipeline d’ingestion et d’uniformisation des événements du SI avec Kafka et Debezium (change data capture).',
      'Encadrement d’une équipe de 4 personnes ; l’un des trois référents techniques d’un plateau de 20 à 30 développeurs.',
      'Fiabilisation de l’existant : dette technique, sécurisation des traitements, réduction des incidents.',
    ],
    stack: ['Java 25', 'Quarkus 3', 'Angular 22', 'Web Components', 'Kafka', 'Debezium', 'Oracle', 'Kubernetes'],
  },
  {
    id: 'cvm',
    start: '2024-06',
    end: '2026-06',
    period: 'Juin 2024 – juin 2026',
    project: 'CVM',
    title: 'Messagerie conseillers et usagers',
    role: 'Leader technique full stack',
    company: 'Sopra Steria',
    client: 'France Travail',
    summary:
      'Application nationale parmi les plus utilisées du SI, qui gère les échanges entre conseillers et usagers : plusieurs millions de lignes en base et environ un million de courriels traités par an.',
    highlights: [
      'Pilotage de la refonte d’un monolithe vers des microservices DDD / hexagonaux.',
      'Chat instantané entre conseillers et demandeurs d’emploi, du POC au déploiement national.',
      'Découpage d’un front Angular trop volumineux en micro-frontends (module federation).',
      'Équipe de 8 personnes, Scrum Master sur une période, montées de version majeures Angular et Quarkus.',
    ],
    stack: ['Java 11 → 25', 'Quarkus 1 → 3', 'Angular 12 → 22', 'Module federation', 'Matrix / Synapse', 'Oracle', 'Kubernetes'],
  },
  {
    id: 'gur-migration',
    start: '2024-04',
    end: '2024-06',
    period: 'Avril – juin 2024',
    project: 'GUR',
    title: 'Migration WebLogic vers Quarkus',
    role: 'Leader technique full stack',
    company: 'Sopra Steria',
    client: 'France Travail',
    summary:
      'Migration de trois projets critiques du serveur d’applications WebLogic 12 vers Quarkus, sur un périmètre utilisé chaque jour par les conseillers.',
    highlights: [
      'Cadrage et pilotage technique de la migration, accompagnement de l’équipe sur les standards Quarkus.',
      'Packaging allégé, déploiements plus rapides, préparation de l’éligibilité au cloud.',
      'Couverture de tests renforcée pour sécuriser la non-régression.',
    ],
    stack: ['Java 8 / 11', 'Quarkus 1', 'WebLogic 12', 'Maven', 'GitLab CI'],
  },
  {
    id: 'omere',
    start: '2022-11',
    end: '2024-03',
    period: 'Nov. 2022 – mars 2024',
    project: 'OMERE',
    title: 'Gestion des médiations',
    role: 'Leader technique full stack & Scrum Master',
    company: 'Sopra Steria',
    client: 'France Travail',
    summary:
      'Gestion des médiations, c’est-à-dire des réclamations de niveau 2, intégrée à la chaîne de traitement existante. Supervision technique et méthodologique du projet.',
    highlights: [
      'Définition de l’architecture applicative et des standards de développement.',
      'Sécurisation des API (gateway, contrôle d’accès par propriétaire) et mise en conformité RGAA.',
      'Équipe de 3 personnes accompagnée vers l’autonomie ; animation de toutes les cérémonies Scrum.',
    ],
    stack: ['Java 11', 'Quarkus 1', 'Angular 12', 'Oracle', 'JUnit', 'WireMock'],
  },
  {
    id: 'gur',
    start: '2020-09',
    end: '2022-12',
    period: 'Sept. 2020 – déc. 2022',
    project: 'GUR',
    title: 'Gestion des réclamations',
    role: 'Développeur puis leader technique full stack',
    company: 'Sopra Steria',
    client: 'France Travail',
    summary:
      'Outil national de dépôt et de suivi des réclamations, pour les demandeurs d’emploi puis pour les entreprises, utilisé au quotidien par les conseillers.',
    highlights: [
      'Développeur unique sur toute la chaîne applicative, du front Angular au back Java.',
      'Prise de la responsabilité technique quand l’équipe passe de 1 à 3 personnes.',
      'Normes de revue des merge requests, montée en compétences des développeurs, Scrum Master.',
    ],
    stack: ['Java 8', 'WebLogic 12', 'Angular 8 → 12', 'Jasmine', 'Karma'],
  },
  {
    id: 'loop',
    start: '2020-06',
    end: '2020-11',
    period: 'Juin – nov. 2020',
    project: 'Loop',
    title: 'Suivi d’indicateurs',
    role: 'Développeur front-end puis full stack',
    company: 'Sopra Steria',
    client: 'France Travail',
    summary:
      'Outils de suivi d’indicateurs pour les utilisateurs internes, démarrés en stage de Master 2 et menés en cycle en V.',
    highlights: ['Développement Angular, puis évolution vers un rôle full stack Angular et Java.'],
    stack: ['Angular 8', 'Java 8', 'WebLogic 12'],
  },
];
