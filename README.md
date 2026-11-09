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
| Missions (page Missions) | `src/data/experiences.ts` |
| Compétences et formations (accueil) | `src/data/skills.ts` |
| Textes des pages | `src/pages/*.astro` |
| Briques communes (en-tête de page, rubrique, fin de page) | `src/components/PageHeader.astro`, `Section.astro`, `PageEnd.astro` |
| Barre d'onglets mobile, en-tête | `src/components/Header.astro` |
| Balayage et transitions entre pages | `src/components/PageTransitions.astro` (+ fin de `global.css`) |
| Couleurs, typographie | `src/styles/global.css` (variables en haut du fichier) |
| Image de partage (Open Graph) | `scripts/og-image.mjs` puis `npm run og` |

### À compléter avant la mise en ligne

- [ ] **PDF** : déposer `public/dossier-de-competences-gaetan-barbaria.pdf` et `public/cv-gaetan-barbaria.pdf`
      (version avec contact@gatsdev.fr, sans numéro personnel), puis passer `site.showDocuments` à `true`.
- [x] **LinkedIn** dans `site.linkedin`.
- [ ] **SIREN** et **adresse** dans `legal` (vides = « En cours d’immatriculation » / ville seule).
- [x] **Missions** dans `src/data/experiences.ts`, compétences dans `src/data/skills.ts`.
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

## Configuration DNS de gatsdev.fr (OVH → GitHub Pages)

Le domaine est enregistré chez **OVH** (serveurs DNS `dns103.ovh.net` / `ns103.ovh.net`).
Tout se passe dans l’espace client : **Web Cloud → Noms de domaine → gatsdev.fr**.

### État initial de la zone (relevé le 9 novembre 2026)

| Type | Sous-domaine | Valeur | Action |
| --- | --- | --- | --- |
| A | *(vide)* | `213.186.33.5` (parking OVH) | **Supprimer** |
| A | `www` | `213.186.33.5` (parking OVH) | **Supprimer** |
| TXT | *(vide)* | `"1\|www.gatsdev.fr"` (marqueur parking OVH) | **Supprimer** |
| MX | *(vide)* | `mx1/mx2/mx3.mail.ovh.net` | Garder (email) |
| TXT | *(vide)* | `"v=spf1 include:mx.ovh.com -all"` | Garder (email) |

### 1. Vérifier le domaine sur GitHub (recommandé, avant tout le reste)

Empêche quiconque d’autre de publier un site GitHub Pages sur `gatsdev.fr`.

1. GitHub → photo de profil → **Settings → Pages** (paramètres du **compte**, pas du dépôt)
   → **Add a domain** → `gatsdev.fr` → **Add domain**.
2. GitHub affiche un enregistrement TXT à créer, du type :
   - nom : `_github-pages-challenge-gaetaan`
   - valeur : une chaîne aléatoire (à copier)
3. Ajouter ce TXT dans OVH (voir étape 3), attendre quelques minutes, puis cliquer **Verify**.

### 2. Supprimer le parking OVH

- Onglet **Redirection** : s’il y a une redirection, la supprimer (cela retire aussi le TXT `1|www.gatsdev.fr`).
- Onglet **Zone DNS** : supprimer (icône `…` → **Supprimer l’entrée**) :
  - l’entrée **A** sans sous-domaine (`213.186.33.5`) ;
  - l’entrée **A** `www` (`213.186.33.5`) — obligatoire, un CNAME ne peut pas coexister avec un A ;
  - l’entrée **TXT** `"1|www.gatsdev.fr"` si elle est toujours là ;
  - toute entrée **AAAA** ou **CNAME** existante sur la racine ou `www`.
- **Ne pas toucher** aux entrées **MX**, **SPF** (`v=spf1…`), ni aux entrées **NS**.

### 3. Ajouter les nouvelles entrées

Onglet **Zone DNS → Ajouter une entrée**, une entrée à la fois. TTL : laisser la valeur par défaut.

| Type OVH | Sous-domaine | Cible |
| --- | --- | --- |
| A | *(laisser vide)* | `185.199.108.153` |
| A | *(laisser vide)* | `185.199.109.153` |
| A | *(laisser vide)* | `185.199.110.153` |
| A | *(laisser vide)* | `185.199.111.153` |
| AAAA | *(laisser vide)* | `2606:50c0:8000::153` |
| AAAA | *(laisser vide)* | `2606:50c0:8001::153` |
| AAAA | *(laisser vide)* | `2606:50c0:8002::153` |
| AAAA | *(laisser vide)* | `2606:50c0:8003::153` |
| CNAME | `www` | `gaetaan.github.io.` |
| TXT | `_github-pages-challenge-gaetaan` | *(valeur fournie par GitHub à l’étape 1)* |

Pièges OVH :
- Pour le **CNAME**, mettre le **point final** : `gaetaan.github.io.` — sans lui, OVH ajoute
  `.gatsdev.fr` à la fin et la cible devient fausse.
- Pour le **TXT**, saisir uniquement `_github-pages-challenge-gaetaan` dans « Sous-domaine »
  (OVH complète avec `.gatsdev.fr`).
- Si OVH affiche l’option « Mode d’édition textuelle », on peut aussi coller les lignes directement,
  mais l’ajout entrée par entrée est plus sûr.

### 4. Déclarer le domaine dans le dépôt

GitHub → dépôt `gatsdev` → **Settings → Pages** :
1. **Source** : GitHub Actions (et relancer le workflow s’il a échoué).
2. **Custom domain** : `gatsdev.fr` → **Save**. GitHub lance un « DNS check ».
3. Quand le check est vert et que le certificat est émis (de quelques minutes à ~1 h,
   parfois jusqu’à 24 h), cocher **Enforce HTTPS**.

`www.gatsdev.fr` redirigera automatiquement vers `https://gatsdev.fr`.

### 5. Vérifier

```bash
dig +short gatsdev.fr A          # → les 4 IP 185.199.10x.153
dig +short gatsdev.fr AAAA       # → les 4 IPv6 2606:50c0:800x::153
dig +short www.gatsdev.fr CNAME  # → gaetaan.github.io.
dig +short gatsdev.fr MX         # → toujours mx1/mx2/mx3.mail.ovh.net
curl -sI https://gatsdev.fr | head -1
```

La modification d’une zone OVH s’applique en quelques minutes, mais les anciennes valeurs
peuvent rester en cache jusqu’à expiration de leur TTL (souvent 1 h chez OVH).

### Email contact@gatsdev.fr

Les MX pointent déjà vers OVH. Il reste à créer l’adresse dans l’espace client :
**Web Cloud → Emails** (ou **Noms de domaine → gatsdev.fr → Emails**) → créer une
**redirection** `contact@gatsdev.fr` → votre boîte personnelle, ou une vraie boîte mail.

Recommandé pour la délivrabilité, dans la zone DNS :
- **DKIM** : à activer depuis la gestion de l’offre email OVH (les entrées sont ajoutées automatiquement).
- **DMARC** : entrée TXT, sous-domaine `_dmarc`, valeur
  `v=DMARC1; p=none; rua=mailto:contact@gatsdev.fr` (à durcir en `p=quarantine` une fois validé).

Si vous répondez depuis Gmail « en tant que » contact@gatsdev.fr via un autre serveur SMTP,
il faudra ajouter ce serveur au SPF (`include:…`).
