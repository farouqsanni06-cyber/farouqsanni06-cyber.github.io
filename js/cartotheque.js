/* ==========================================================
   cartotheque.js : galerie de cartes avec filtres par thème
   - page Cartothèque (#gallery) ; bandeau de l'accueil (#map-strip)
   ========================================================== */
(function () {
  var M = window.MAPS || [], esc = window.escapeHtml, root = window.rootPath;

  var strip = document.getElementById('map-strip');
  if (strip) {
    strip.innerHTML = M.filter(function (m) { return m.home; }).slice(0, 6).map(function (m) {
      return '<a href="' + root('cartotheque.html') + '" title="' + esc(m.title) + '"><img src="' + root('assets/thumbs/' + m.file + '.jpg') + '" alt="' + esc(m.title) + '" loading="lazy"></a>';
    }).join('');
  }

  var gal = document.getElementById('gallery');
  if (!gal) return;
  var fil = document.getElementById('map-filters'), cnt = document.getElementById('map-count'), active = 'Toutes';
  var themes = (window.MAP_THEMES || []).filter(function (t) { return M.some(function (m) { return m.themes.indexOf(t) > -1; }); });
  fil.innerHTML = ['Toutes'].concat(themes).map(function (t) { return '<button type="button" class="chip" aria-pressed="' + (t === 'Toutes') + '" data-t="' + esc(t) + '">' + esc(t) + '</button>'; }).join('');

  function render() {
    var res = M.filter(function (m) { return active === 'Toutes' || m.themes.indexOf(active) > -1; });
    gal.innerHTML = res.map(function (m) {
      var src = root('assets/maps/' + m.file + '.jpg');
      return '<figure><button type="button" class="zoom" data-zoom data-full="' + src + '" data-alt="' + esc(m.title) + '" data-caption="' + esc(m.title + (m.source !== '—' ? ' — Source : ' + m.source : '')) + '" aria-label="Agrandir la carte : ' + esc(m.title) + '">' +
        '<img src="' + root('assets/thumbs/' + m.file + '.jpg') + '" alt="' + esc(m.title) + '" loading="lazy"></button>' +
        '<figcaption><strong>' + esc(m.title) + '</strong><span>' + esc(m.desc) + '</span>' + (m.source !== '—' ? '<span>Source : ' + esc(m.source) + '</span>' : '') + '</figcaption></figure>';
    }).join('');
    cnt.textContent = res.length + (res.length > 1 ? ' cartes' : ' carte');
  }
  fil.addEventListener('click', function (e) {
    var b = e.target.closest('.chip'); if (!b) return;
    active = b.getAttribute('data-t');
    fil.querySelectorAll('.chip').forEach(function (x) { x.setAttribute('aria-pressed', x === b); });
    render();
  });
  render();
})();
