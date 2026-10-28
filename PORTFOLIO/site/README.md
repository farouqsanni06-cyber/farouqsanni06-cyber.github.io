# Portfolio de Faruquadeen Sanni

Site statique en HTML, CSS et JavaScript. Pas de serveur ni de base de données : il se publie gratuitement sur GitHub Pages.

## 1. Ouvrir le site sur ton ordinateur

- **Simple :** double-clique sur `index.html`.
- **Mieux (recommandé) :** dans VS Code, installe l'extension *Live Server*, fais un clic droit sur `index.html`, puis « Open with Live Server ». La page se recharge à chaque enregistrement.

Il faut une connexion internet : la carte interactive (Leaflet, fond CARTO/OpenStreetMap) et les polices sont chargées en ligne.

## 2. Structure des fichiers

```
index.html, projects.html, cartotheque.html, about.html, experiences.html, contact.html
projects/        une fiche par projet
css/             style.css (design), responsive.css (mobile), animations.css
js/              config.js (tes infos), data.js (projets, cartes, lieux), main.js, projects.js,
                 cartotheque.js, map.js, contact.js
assets/maps/     cartes en grand (affichées dans l'agrandissement)
assets/thumbs/   cartes en petit (affichées dans les grilles)
assets/images/   photo et capture de la carte uMap
assets/logos/    logos des institutions, affichés sur les cartes projets
assets/gendarmerie/   planches de l'atlas Gendarmerie
assets/documents/     cv.pdf et résumé du projet eau
```

## 3. Ce qu'il te reste à faire

1. **Encadrés « À compléter ».** Il n'en reste aucun. Si tu veux en ajouter, copie la classe `todo` utilisée dans `projects/`.
2. **GitHub.** Ton lien est déjà dans `js/config.js` (`github`).
3. **Logos.** Les cartes projets affichent un logo (`logo` dans `js/data.js`). Pour en changer, dépose un PNG dans `assets/logos/` et modifie ce chemin. Les logos appartiennent à leurs institutions.
4. **Planches Gendarmerie.** Elles sont dans `assets/gendarmerie/` (`planche-20.jpg`, `24`, `27`, `30`, `36`). Pour les remplacer, garde les mêmes noms.

## 4. Modifier le contenu

- **Coordonnées, titre, disponibilité :** `js/config.js`.
- **Textes d'une page :** ouvre le fichier `.html` correspondant et change le texte entre les balises.
- **Couleurs :** `css/style.css`, bloc `:root` tout en haut.
- **Ajouter une expérience :** dans `experiences.html`, copie un bloc `<li class="reveal">…</li>`.
- **Ajouter un lieu sur la carte :** `js/data.js`, liste `PLACES` (type `etude` ou `exp`, coordonnées `[latitude, longitude]`).

## 5. Ajouter un projet

1. Dans `js/data.js`, copie un bloc de la liste `PROJECTS`, puis change `id`, `title`, `desc`, `categories`, `tech`, `cover` et `url`. Les filtres se mettent à jour tout seuls : une catégorie apparaît dès qu'un projet l'utilise.
2. Copie une fiche de `projects/` (par exemple `corif.html`), renomme-la comme dans `url`, puis remplace son contenu.

## 6. Ajouter une carte à la cartothèque

1. Prépare deux images JPG : une grande (environ 2 000 px de large) dans `assets/maps/` et une petite (environ 800 px) dans `assets/thumbs/`, avec **le même nom**.
2. Dans `js/data.js`, ajoute un bloc dans `MAPS` : `file` (nom sans `.jpg`), `title`, `desc`, `source` et `themes`.

## 7. Remplacer le CV

Remplace `assets/documents/cv.pdf` en gardant le même nom.

## 8. Formulaire de contact

Sans service externe, le bouton ouvre ton application mail avec le message prérempli. Pour recevoir les messages directement : crée un formulaire gratuit sur formspree.io et colle son adresse dans `formEndpoint` (`js/config.js`).

## 9. Publier sur GitHub Pages

1. Crée un compte sur github.com.
2. Crée un dépôt public nommé `tonpseudo.github.io` (remplace `tonpseudo` par ton pseudo).
3. Dépose tout le contenu de ce dossier à la racine du dépôt (Add file, Upload files, puis Commit changes).
4. Dans Settings, Pages : branche `main`, dossier `/ (root)`, puis Save.
5. Le site est en ligne après une à deux minutes sur `https://tonpseudo.github.io`.

## Notes techniques

- Aucun framework : tu peux tout lire et tout modifier toi-même.
- Les animations sont discrètes et désactivées si le système demande de réduire les animations.
- Le menu, le pied de page et les liens sont générés par `js/main.js` à partir de `js/config.js`. Pour ajouter une page au menu, modifie la liste `NAV` dans `main.js`.
- Pour agrandir une carte dans une page, ajoute l'attribut `data-zoom` à un bouton (voir les fiches pour des exemples).
