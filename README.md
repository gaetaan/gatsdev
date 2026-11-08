# gatsdev.fr — site vitrine Gats Dev

Site statique [Astro](https://astro.build), sans framework JS côté client, CSS simple.
Seule une vingtaine de lignes de JavaScript inline sert au bouton clair/sombre (le site
fonctionne sans : il suit alors la préférence système).

## Démarrer

Prérequis : Node.js ≥ 22.23.4 (voir `.nvmrc`).

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # génère dist/
npm run preview   # sert dist/ en local
```

## Où modifier quoi

| Quoi | Fichier |
| --- | --- |
| Nom, email, LinkedIn, disponibilité, chemin du PDF | `src/data/site.ts` (`site`) |
| SIREN, adresse, hébergeur (mentions légales) | `src/data/site.ts` (`legal`) |
| Missions (page Expériences) | `src/data/experiences.ts` |
| Textes des pages | `src/pages/*.astro` |
| Couleurs, typographie | `src/styles/global.css` (variables en haut du fichier) |
| Image de partage (Open Graph) | `scripts/og-image.mjs` puis `npm run og` |

### À compléter avant la mise en ligne

- [ ] **PDF** : déposer `public/dossier-de-competences-gaetan-barbaria.pdf`
      (ou changer `site.resumePdf`). Sans lui, les liens de téléchargement renvoient une 404.
- [ ] **LinkedIn** : remplacer `VOTRE-PROFIL` dans `site.linkedin`.
- [ ] **SIREN** et **adresse** dans `legal`.
- [ ] **Missions** dans `src/data/experiences.ts`.
- [ ] Si vous passez sur Cloudflare Pages : mettre à jour `legal.host`.

## Déploiement sur GitHub Pages

1. Créer un dépôt GitHub (ex. `gatsdev`) et pousser le code sur `main`.
2. Dans le dépôt : **Settings → Pages → Build and deployment → Source : GitHub Actions**.
   Le workflow `.github/workflows/deploy.yml` construit et publie à chaque push sur `main`.
3. **Settings → Pages → Custom domain** : saisir `gatsdev.fr` (le fichier `public/CNAME` le contient déjà).
4. Configurer les DNS (ci-dessous), attendre la validation, puis cocher **Enforce HTTPS**.

> Recommandé : vérifier le domaine au niveau du compte (**Settings du profil → Pages → Add a domain**)
> pour empêcher qu’un tiers ne le revendique sur un autre dépôt.

### Alternative : Cloudflare Pages

Connecter le dépôt dans Cloudflare → Workers & Pages → Create → Pages, avec
`npm run build` comme commande et `dist` comme dossier de sortie, variable
`NODE_VERSION=24`. Ajouter ensuite `gatsdev.fr` dans **Custom domains** :
si le domaine est déjà géré par Cloudflare DNS, les enregistrements sont créés
automatiquement. Le workflow GitHub Actions et `public/CNAME` deviennent alors inutiles.

## Configuration DNS de gatsdev.fr (GitHub Pages)

Chez votre registrar (OVH, Gandi, IONOS…), zone DNS de `gatsdev.fr` :

| Type | Nom (hôte) | Valeur |
| --- | --- | --- |
| A | `@` | `185.199.108.153` |
| A | `@` | `185.199.109.153` |
| A | `@` | `185.199.110.153` |
| A | `@` | `185.199.111.153` |
| AAAA | `@` | `2606:50c0:8000::153` |
| AAAA | `@` | `2606:50c0:8001::153` |
| AAAA | `@` | `2606:50c0:8002::153` |
| AAAA | `@` | `2606:50c0:8003::153` |
| CNAME | `www` | `VOTRE-UTILISATEUR.github.io.` |

- Supprimer les éventuels A/AAAA/CNAME existants sur `@` et `www` (page de parking du registrar).
- **Ne pas toucher aux enregistrements MX / TXT (SPF, DKIM, DMARC)** : ils servent à l’email `contact@gatsdev.fr`.
- Si un enregistrement **CAA** existe, il doit autoriser `letsencrypt.org` (certificat HTTPS de GitHub).
- `www.gatsdev.fr` sera automatiquement redirigé vers `gatsdev.fr`.

Vérification (la propagation prend de quelques minutes à quelques heures) :

```bash
dig +short gatsdev.fr A
dig +short www.gatsdev.fr CNAME
```

### Email contact@gatsdev.fr

Le site ne gère pas l’email. Il faut une boîte ou une redirection chez le registrar
(souvent incluse) ou un service dédié, qui fournira ses propres enregistrements
MX, SPF, DKIM et DMARC à ajouter dans la même zone.
