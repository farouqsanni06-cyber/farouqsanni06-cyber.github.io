/* ==========================================================
   DONNÉES DU SITE
   - PROJECTS : les projets de la page « Projets » (une fiche HTML par projet)
   - MAPS     : les cartes de la « Cartothèque »
   - PLACES   : les lieux de la carte interactive (page Expériences)
   Pour ajouter un projet ou une carte, copie un bloc et modifie-le.
   ========================================================== */

// Catégories proposées dans les filtres (seules celles utilisées par au moins un projet s'affichent)
window.CATEGORIES = ["Cartographie","Analyse spatiale","Télédétection","SIG 3D","Géovisualisation","Mobilité","Programmation","Aménagement du territoire"];

window.PROJECTS = [
  {
    id: "gendarmerie-reseaux",
    title: "Atlas Gendarmerie : les réseaux",
    period: "Master 1 SIGAT · 2025-2026",
    desc: "Atlas 360° pour la Gendarmerie nationale, phase 2 : six thématiques de réseaux (routier, ferroviaire, maritime et fluvial, énergie, aérien, télécommunication), 19 planches sur 4 départements.",
    categories: ["Cartographie","Analyse spatiale","Mobilité","Aménagement du territoire"],
    tech: ["QGIS","SQL","Flourish","Inkscape"],
    logo: "assets/logos/gendarmerie-nationale.png",
    logoAlt: "Logo de la Gendarmerie nationale",
    url: "projects/gendarmerie-reseaux.html",
    featured: true
  },
  {
    id: "qualite-eau-maine-et-loire",
    title: "Qualité de l'eau dans le Maine-et-Loire",
    period: "Licence 3 · 2024-2025",
    desc: "Analyse de la qualité des eaux à partir de prélèvements terrain et du projet participatif Synchr'Eau, croisée avec l'occupation du sol et le potentiel de ruissellement.",
    categories: ["Télédétection","Analyse spatiale","Programmation"],
    tech: ["QGIS","R","Télédétection","Interpolation IDW"],
    logo: "assets/logos/universite-angers.png",
    logoAlt: "Logo de l'Université d'Angers",
    url: "projects/qualite-eau-maine-et-loire.html",
    featured: true
  },
  {
    id: "france-terre-asile",
    title: "Carte d'analyse des logements et du territoire (France Terre d'Asile)",
    period: "Stage · France Terre d'Asile · Déc. 2024 – janv. 2025",
    desc: "Carte interactive uMap des zones d'emploi, des logements, des services publics et des réseaux de transport, pour analyser les dynamiques du territoire et favoriser l'intégration des réfugiés.",
    categories: ["Cartographie","Géovisualisation","Analyse spatiale","Aménagement du territoire"],
    tech: ["uMap","Cartographie web"],
    logo: "assets/logos/france-terre-asile.png",
    logoAlt: "Logo de France Terre d'Asile",
    url: "projects/france-terre-asile.html",
    featured: false
  },
  {
    id: "corif",
    title: "CORIF : optimisation de l'impôt foncier",
    period: "Stage · Southern IT Consulting · 2023-2024",
    desc: "Participation à la phase de lancement du projet du Comité d'Optimisation du Rendement de l'Impôt Foncier en Côte d'Ivoire : cartes de localisation, conversion de plans, géoréférencement et enquêtes de terrain.",
    categories: ["Cartographie","Aménagement du territoire","Analyse spatiale"],
    tech: ["QGIS","ArcGIS Desktop 10.8","Géoréférencement"],
    logo: "assets/logos/dgi.png",
    logoAlt: "Logo de la Direction Générale des Impôts de Côte d'Ivoire",
    url: "projects/corif.html",
    featured: true
  },
  {
    id: "sonapie",
    title: "SONAPIE : patrimoine immobilier de l'État",
    period: "Stage · Southern IT Consulting · 2023-2024",
    desc: "Participation au début du projet de la Société Nationale de Gestion du Patrimoine Immobilier de l'État : cartographie, traitements de données et enquêtes de terrain.",
    categories: ["Cartographie","Aménagement du territoire","Analyse spatiale"],
    tech: ["QGIS","ArcGIS Desktop 10.8","Enquête terrain"],
    logo: "assets/logos/sonapie.png",
    logoAlt: "Logo de la SONAPIE",
    url: "projects/sonapie.html",
    featured: false
  }
];

// Thèmes de la cartothèque
window.MAP_THEMES = ["Cartographie thématique","Analyse spatiale","Mobilité","Géovisualisation","Aménagement du territoire","Télédétection","Premières cartes (2022)"];

window.MAPS = [
  { file:"mobilite-gtfs-angers", title:"Angers au rythme du tram : jusqu'où s'étend l'influence des stations ?", desc:"Analyse GTFS du réseau de tramway : distance des bâtiments aux stations et fréquence de passage par heure.", source:"ALM – IRIGO GTFS, OSM", themes:["Mobilité","Analyse spatiale","Géovisualisation"], home:true },
  { file:"risque-prix-bivariee", title:"Vivre dans les zones à risque a-t-il un prix ?", desc:"Carte bivariée croisant le prix moyen au m² et la densité d'arrêtés de catastrophe naturelle par commune.", source:"IGN, Ministère de l'économie et des finances", themes:["Cartographie thématique","Analyse spatiale"] },
  { file:"ventilation-grenoble", title:"Cadres et ouvriers dans l'habitat grenoblois", desc:"Population ventilée par bâtiment à partir des IRIS de l'INSEE (7 448 bâtiments analysés).", source:"BD TOPO, IGN, INSEE", themes:["Analyse spatiale","Géovisualisation"], home:true },
  { file:"faune-routes-bretagne", title:"Zones de conflit faune-routes sur les axes routiers majeurs en Bretagne", desc:"Croisement de la proportion de réservoirs de biodiversité et du nombre de collisions d'animaux par commune (2014-2024).", source:"DIRO, IGN", themes:["Analyse spatiale","Cartographie thématique"], home:true },
  { file:"scoring-epicerie-rennes", title:"Cartographier la solidarité à Rennes", desc:"Scoring sur carreaux pour repérer les secteurs favorables à l'installation d'une épicerie solidaire.", source:"INSEE, Rennes Métropole", themes:["Analyse spatiale","Aménagement du territoire"], home:true },
  { file:"flux-ouvriers-normandie", title:"Normandie : où vivent et où travaillent les ouvriers ?", desc:"Carte de flux domicile-travail avec les aires d'attraction des villes.", source:"INSEE", themes:["Cartographie thématique","Mobilité"], home:true },
  { file:"hebergements-bretagne", title:"Hébergements touristiques en Bretagne : loger chez soi ou à l'hôtel ?", desc:"Cercles proportionnels (nombre d'hôtels) et aplats de couleur (taux de résidences secondaires) par commune.", source:"INSEE, IGN, OSM", themes:["Cartographie thématique"] },
  { file:"cartogramme-nigeria", title:"Hôpitaux fonctionnels et mortalité des moins de 5 ans au Nigeria", desc:"Cartogramme du nombre d'hôpitaux fonctionnels par État, en 2021.", source:"UN IGME, Datahumdata", themes:["Cartographie thématique"] },
  { file:"elections-loir-et-cher-tete", title:"Présidentielle 2022 dans le Loir-et-Cher : le candidat en tête", desc:"Résultats du premier tour par commune, avec le nombre de communes et de voix par candidat.", source:"IGN, Ministère de l'intérieur", themes:["Cartographie thématique"] },
  { file:"elections-loir-et-cher-abstention", title:"Participation électorale et vote RN dans le Loir-et-Cher", desc:"Taux d'abstention et nombre de voix RN par commune.", source:"IGN, INSEE", themes:["Cartographie thématique"] },
  { file:"elections-loir-et-cher-chomage", title:"Taux de chômage et vote RN dans le Loir-et-Cher", desc:"Rapport entre le chômage en 2021 et le vote RN au premier tour de 2022.", source:"IGN, INSEE", themes:["Cartographie thématique"] },
  { file:"eau-qualite", title:"Qualité des masses d'eau dans le Maine-et-Loire", desc:"Indicateurs de pollution aux nitrates, nitrites, plomb et pH, avec une interpolation IDW. Projet de licence 3.", source:"BD LISA, IGN BD TOPO, BD SYNCHREAU, travail terrain", themes:["Analyse spatiale"] },
  { file:"eau-ruissellement", title:"Potentiel de ruissellement dans le Maine-et-Loire", desc:"Modélisation du ruissellement à partir de l'occupation du sol, du terrain et des sols. Projet de licence 3.", source:"Corine Land Cover, IGN RGE Alti, BDLISA, Admin-Express", themes:["Analyse spatiale","Télédétection"] },
  { file:"eau-prelevements", title:"Prélèvements d'eau et réseau hydrographique du Maine-et-Loire", desc:"94 prélèvements classés par type, sur 37 914 cours d'eau classés par ordre. Projet de licence 3.", source:"IGN BD TOPO, BD SYNCHREAU, travail terrain", themes:["Cartographie thématique"] },
  { file:"yamoussoukro-patrimoine-etat", title:"Procédure de sécurisation du patrimoine immobilier de l'État à Yamoussoukro", desc:"Patrimoine SONAPIE 2012-2014 (47) et nouveau patrimoine à certifier en 2024 (125), sur un fond de 1 944 bâtiments. Carte réalisée au SITC, datée du 8 mars 2024.", source:"SITC, fond OpenStreetMap", themes:["Aménagement du territoire","Cartographie thématique"] },
  { file:"qatar-occupation-sol", title:"Occupation du sol du Qatar", desc:"Classification d'une image Sentinel-2 (2022).", source:"Sentinel-2", themes:["Télédétection","Premières cartes (2022)"] },
  { file:"tiassale-vegetation", title:"Indice de végétation de Tiassalé", desc:"Indice de végétation calculé sur la région d'Agnéby-Tiassa, en Côte d'Ivoire (2022).", source:"Earth Explorer", themes:["Télédétection","Premières cartes (2022)"] },
  { file:"danguira-morphologie", title:"Morphologie de la commune de Danguira", desc:"Modèle d'élévation de la commune, de -9 à 198 mètres (2022).", source:"Earth Explorer", themes:["Télédétection","Premières cartes (2022)"] },
  { file:"bingerville-pentes", title:"Carte des pentes de Bingerville", desc:"Pentes calculées à partir d'un modèle d'élévation (2022).", source:"NASA Elevation", themes:["Premières cartes (2022)"] },
  { file:"alepe-hydrographie", title:"Réseau hydrographique et altitude d'Alépé", desc:"Ordre d'écoulement des cours d'eau et altitude (2022).", source:"USGS, SRTM", themes:["Premières cartes (2022)"] },
  { file:"azagny-chimpanzes", title:"Probabilité de contacts de chimpanzés dans le parc national d'Azagny", desc:"Carte de probabilité de contacts, liée à l'objectif de développement durable 15 (2022).", source:"OIPR", themes:["Premières cartes (2022)"] },
  { file:"abidjan-population", title:"Densité et volume de la population d'Abidjan en 2021", desc:"Deux cartes complémentaires : densité en aplats et volume en cercles proportionnels, par commune.", source:"RGPH 2021", themes:["Premières cartes (2022)","Cartographie thématique"] },
  { file:"la-me-densite", title:"Densité de population des sous-préfectures de la région de la Mé", desc:"Densité en habitants par km² en 2021.", source:"RGPH 2021", themes:["Premières cartes (2022)"] },
  { file:"cote-ivoire-domaines", title:"Les grands domaines biogéographiques de la Côte d'Ivoire", desc:"Forêt, savane guinéenne et secteurs soudanais (2022).", source:"—", themes:["Premières cartes (2022)"] },
  { file:"qatar-aeroports", title:"Les aéroports du Qatar", desc:"Localisation des aéroports et bases aériennes du pays (2022).", source:"OSM", themes:["Premières cartes (2022)"] }
];

// Lieux de la carte interactive : type "etude" ou "exp"
window.PLACES = [
  { name:"Université de Rennes 2", type:"etude", text:"Master Géomatique, parcours SIGAT · 2025-2027", coords:[48.1195,-1.7020] },
  { name:"Université d'Angers", type:"etude", text:"Licence Géographie et aménagement · 2024-2025", coords:[47.4784,-0.5632] },
  { name:"Université Félix Houphouët-Boigny", type:"etude", text:"Licence Géographie, parcours physique et environnement · 2019-2022", coords:[5.3470,-3.9890] },
  { name:"ASP · Chantepie", type:"exp", text:"Photo-interprète et contrôleur de surface · juin-août 2026", coords:[48.0883,-1.6178] },
  { name:"DDSEN49 · Angers", type:"exp", text:"Stage de géomaticien cartographe · mai-juillet 2025", coords:[47.4710,-0.5520] },
  { name:"France Terre d'Asile · Angers", type:"exp", text:"Stage de cartographe · déc. 2024-janv. 2025", coords:[47.4850,-0.5500] },
  { name:"Southern IT Consulting · Abidjan", type:"exp", text:"Stage de géomaticien et cartographe · juil. 2023-juil. 2024", coords:[5.3600,-4.0083] }
];
