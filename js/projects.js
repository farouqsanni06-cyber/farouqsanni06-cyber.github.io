/* ==========================================================
   projects.js : cartes de projets, filtres par catégorie et recherche
   Utilisé sur « Projets » (#project-grid) et « Accueil » (#featured-grid)
   ========================================================== */
(function () {
  var P = window.PROJECTS || [], esc = window.escapeHtml, root = window.rootPath;
  function norm(s) { return String(s).toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, ''); }

  function card(p) {
    var img = p.logo || p.cover, alt = p.logo ? (p.logoAlt || 'Logo : ' + p.title) : 'Aperçu du projet : ' + p.title;
    var cover = '<div class="cover' + (p.logo ? ' logo' : '') + '"><img src="' + root(img) + '" alt="' + esc(alt) + '" loading="lazy" data-missing data-label="' + esc(p.coverLabel || p.title) + '"></div>';
    return '<article class="card">' + cover + '<div class="card-body">' +
      '<span class="meta">' + esc(p.period) + '</span>' +
      '<h3><a href="' + root(p.url) + '">' + esc(p.title) + '</a></h3>' +
      '<ul class="tags" aria-label="Thématiques">' + p.categories.map(function (c) { return '<li>' + esc(c) + '</li>'; }).join('') + '</ul>' +
      '<p>' + esc(p.desc) + '</p>' +
      '<ul class="tags tech" aria-label="Technologies">' + p.tech.map(function (t) { return '<li>' + esc(t) + '</li>'; }).join('') + '</ul>' +
      '<a class="btn small" href="' + root(p.url) + '" tabindex="-1" aria-hidden="true">Découvrir le projet</a>' +
      '</div></article>';
  }

  /* Accueil : projets mis en avant */
  var feat = document.getElementById('featured-grid');
  if (feat) {
    feat.innerHTML = P.filter(function (p) { return p.featured; }).slice(0, 3).map(card).join('');
    window.checkMissingImages(feat);
  }

  /* Page Projets : grille + filtres + recherche */
  var grid = document.getElementById('project-grid');
  if (!grid) return;
  var filters = document.getElementById('project-filters'), input = document.getElementById('project-search'), count = document.getElementById('project-count');
  var used = (window.CATEGORIES || []).filter(function (c) { return P.some(function (p) { return p.categories.indexOf(c) > -1; }); });
  var active = 'Tous';

  filters.innerHTML = ['Tous'].concat(used).map(function (c) {
    return '<button type="button" class="chip" aria-pressed="' + (c === 'Tous') + '" data-cat="' + esc(c) + '">' + esc(c) + '</button>';
  }).join('');

  function render() {
    var q = norm(input.value.trim());
    var res = P.filter(function (p) {
      var okCat = active === 'Tous' || p.categories.indexOf(active) > -1;
      var hay = norm(p.title + ' ' + p.desc + ' ' + p.tech.join(' ') + ' ' + p.categories.join(' '));
      return okCat && (!q || hay.indexOf(q) > -1);
    });
    grid.innerHTML = res.length ? res.map(card).join('') : '<div class="empty"><p><strong>Aucun projet ne correspond.</strong></p><p>Essaie un autre mot-clé ou choisis « Tous ».</p></div>';
    count.textContent = res.length + (res.length > 1 ? ' projets affichés' : ' projet affiché');
    window.checkMissingImages(grid);
  }
  filters.addEventListener('click', function (e) {
    var b = e.target.closest('.chip'); if (!b) return;
    active = b.getAttribute('data-cat');
    filters.querySelectorAll('.chip').forEach(function (x) { x.setAttribute('aria-pressed', x === b); });
    render();
  });
  input.addEventListener('input', render);
  render();
})();
