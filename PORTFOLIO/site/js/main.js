/* ==========================================================
   main.js : éléments communs à toutes les pages
   - en-tête et pied de page (générés depuis config.js)
   - menu mobile, lien actif, bouton retour en haut
   - apparition des sections, agrandissement des cartes (lightbox)
   - courbes de niveau décoratives, images manquantes
   ========================================================== */
(function () {
  var S = window.SITE || {};
  var ROOT = document.body.getAttribute('data-root') || '';
  var PAGE = document.body.getAttribute('data-page') || '';
  document.documentElement.classList.add('js');

  var NAV = [
    ['home', 'index.html', 'Accueil'],
    ['projects', 'projects.html', 'Projets'],
    ['cartotheque', 'cartotheque.html', 'Cartothèque'],
    ['about', 'about.html', 'À propos'],
    ['experiences', 'experiences.html', 'Expériences'],
    ['contact', 'contact.html', 'Contact']
  ];

  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c]; }); }
  window.rootPath = function (p) { return ROOT + p; };
  window.escapeHtml = esc;

  /* ----- En-tête ----- */
  var header = document.getElementById('site-header');
  if (header) {
    var links = NAV.map(function (n) {
      var cur = (n[0] === PAGE || (n[0] === 'projects' && PAGE === 'project')) ? ' aria-current="page"' : '';
      return '<li><a href="' + ROOT + n[1] + '"' + cur + '>' + n[2] + '</a></li>';
    }).join('');
    header.className = 'site-header';
    header.innerHTML =
      '<div class="wrap">' +
      '<a class="brand" href="' + ROOT + 'index.html" aria-label="' + esc(S.name) + ' – accueil">' +
      '<svg viewBox="0 0 32 32" aria-hidden="true"><circle cx="16" cy="16" r="14" fill="none" stroke="#183B32" stroke-width="2"/><path d="M16 4 L21 17 L16 14 L11 17 Z" fill="#183B32"/><path d="M16 28 L11 17 L16 14 L21 17 Z" fill="#E3A02B"/></svg>' +
      esc(S.name) + '</a>' +
      '<button class="burger" aria-expanded="false" aria-controls="nav" aria-label="Ouvrir le menu"><span></span></button>' +
      '<nav aria-label="Navigation principale"><ul class="nav" id="nav">' + links + '</ul></nav>' +
      '</div>';
    var burger = header.querySelector('.burger'), nav = header.querySelector('.nav');
    burger.addEventListener('click', function () {
      var open = nav.classList.toggle('open');
      burger.setAttribute('aria-expanded', open);
      burger.setAttribute('aria-label', open ? 'Fermer le menu' : 'Ouvrir le menu');
    });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && nav.classList.contains('open')) { nav.classList.remove('open'); burger.setAttribute('aria-expanded', 'false'); burger.focus(); } });
  }

  /* ----- Pied de page ----- */
  var footer = document.getElementById('site-footer');
  if (footer) {
    var li = '<li><a href="mailto:' + esc(S.email) + '">' + esc(S.email) + '</a></li>';
    if (S.linkedin) li += '<li><a href="' + esc(S.linkedin) + '" target="_blank" rel="noopener">LinkedIn</a></li>';
    if (S.github) li += '<li><a href="' + esc(S.github) + '" target="_blank" rel="noopener">GitHub</a></li>';
    li += '<li><a href="' + ROOT + esc(S.cv) + '" download>Télécharger mon CV</a></li>';
    footer.className = 'site-footer';
    footer.innerHTML = '<div class="wrap"><div class="cols"><div><h2>' + esc(S.fullName) + '</h2><p>' + esc(S.title) + ' · ' + esc(S.city) + '<br>' + esc(S.availability) + '</p></div><ul aria-label="Liens professionnels">' + li + '</ul></div><p class="copy">© ' + new Date().getFullYear() + ' ' + esc(S.fullName) + '. Les cartes sont des travaux personnels et universitaires ; merci de citer l\'auteur en cas de réutilisation.</p></div>';
  }

  /* ----- Liens et textes issus de config.js : [data-site-link], [data-site-text] ----- */
  document.querySelectorAll('[data-site-link]').forEach(function (a) {
    var k = a.getAttribute('data-site-link'), v = S[k];
    if (!v) { (a.closest('li') || a).hidden = true; return; }
    a.href = k === 'email' ? 'mailto:' + v : (k === 'cv' ? ROOT + v : v);
  });
  document.querySelectorAll('[data-site-text]').forEach(function (n) { n.textContent = S[n.getAttribute('data-site-text')] || ''; });

  /* ----- Retour en haut ----- */
  var top = document.createElement('button');
  top.className = 'to-top'; top.setAttribute('aria-label', 'Retour en haut de page'); top.innerHTML = '&uarr;';
  top.addEventListener('click', function () { window.scrollTo({ top: 0 }); });
  document.body.appendChild(top);
  window.addEventListener('scroll', function () { top.classList.toggle('show', window.scrollY > 600); }, { passive: true });

  /* ----- Courbes de niveau décoratives (svg.topo) ----- */
  document.querySelectorAll('svg.topo').forEach(function (svg, idx) {
    var ns = 'http://www.w3.org/2000/svg', seed = parseFloat(svg.getAttribute('data-seed') || idx + 1);
    svg.setAttribute('viewBox', '0 0 1200 600'); svg.setAttribute('preserveAspectRatio', 'xMidYMid slice'); svg.setAttribute('aria-hidden', 'true');
    var cx = 760 + seed * 40, cy = 280;
    for (var k = 1; k <= 15; k++) {
      var pts = [], n = 56;
      for (var i = 0; i < n; i++) {
        var a = i / n * Math.PI * 2;
        var r = k * 28 + Math.sin(a * 3 + k * .35 + seed) * (8 + k * 1.6) + Math.cos(a * 5 - k * .2 + seed * 2) * (5 + k);
        pts.push((cx + Math.cos(a) * r * 1.5).toFixed(1) + ',' + (cy + Math.sin(a) * r).toFixed(1));
      }
      var p = document.createElementNS(ns, 'path');
      p.setAttribute('d', 'M' + pts.join('L') + 'Z');
      p.setAttribute('fill', 'none');
      p.setAttribute('stroke', k % 5 === 0 ? '#E3A02B' : '#527A68');
      p.setAttribute('stroke-width', k % 5 === 0 ? '1.6' : '1');
      svg.appendChild(p);
    }
  });

  /* ----- Apparition progressive ----- */
  var items = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (es) { es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } }); }, { threshold: .12 });
    items.forEach(function (el) { io.observe(el); });
  } else { items.forEach(function (el) { el.classList.add('in'); }); }

  /* ----- Images manquantes : on affiche un cadre propre à la place ----- */
  function handleMissing(img) {
    if (img.dataset.handled) return; img.dataset.handled = '1';
    var cover = img.closest('.cover'), fig = img.closest('figure');
    if (cover) {
      cover.classList.add('missing');
      cover.innerHTML = '<svg class="topo" data-seed="' + (Math.random() * 3 + 1).toFixed(2) + '"></svg><span>' + esc(img.getAttribute('data-label') || img.alt || '') + '</span>';
      var svg = cover.querySelector('svg'); svg.setAttribute('viewBox', '0 0 1200 600');
      buildTopo(svg);
    } else if (fig) {
      var cap = fig.querySelector('figcaption'), name = (img.getAttribute('src') || '').replace(/^(\.\.\/)+/, '');
      fig.classList.add('missing');
      fig.innerHTML = '<button type="button" tabindex="-1" aria-disabled="true">Image à ajouter :<br><code>' + esc(name) + '</code></button>';
      if (cap) fig.appendChild(cap);
    }
  }
  function buildTopo(svg) { // version réduite pour les couvertures
    var ns = 'http://www.w3.org/2000/svg'; svg.setAttribute('preserveAspectRatio', 'xMidYMid slice');
    var seed = parseFloat(svg.getAttribute('data-seed')) || 1;
    for (var k = 1; k <= 12; k++) {
      var pts = [];
      for (var i = 0; i < 48; i++) { var a = i / 48 * Math.PI * 2, r = k * 30 + Math.sin(a * 3 + k * .4 + seed) * (8 + k * 1.5) + Math.cos(a * 4 + seed) * (4 + k); pts.push((600 + Math.cos(a) * r * 1.6).toFixed(1) + ',' + (300 + Math.sin(a) * r).toFixed(1)); }
      var p = document.createElementNS(ns, 'path'); p.setAttribute('d', 'M' + pts.join('L') + 'Z'); p.setAttribute('fill', 'none'); p.setAttribute('stroke', k % 4 === 0 ? '#E3A02B' : '#527A68'); p.setAttribute('stroke-width', '1'); svg.appendChild(p);
    }
  }
  window.checkMissingImages = function (scope) {
    (scope || document).querySelectorAll('img[data-missing]').forEach(function (img) {
      if (img.complete && img.naturalWidth === 0) handleMissing(img);
      else img.addEventListener('error', function () { handleMissing(img); }, { once: true });
    });
  };
  window.checkMissingImages();

  /* ----- Lightbox : clic sur tout élément [data-zoom] ----- */
  var lb = document.createElement('div');
  lb.className = 'lightbox'; lb.setAttribute('role', 'dialog'); lb.setAttribute('aria-modal', 'true'); lb.setAttribute('aria-label', 'Carte agrandie');
  lb.innerHTML = '<button class="lb-close" aria-label="Fermer">&times;</button><button class="lb-prev" aria-label="Carte précédente">&#8249;</button><button class="lb-next" aria-label="Carte suivante">&#8250;</button><img alt=""><div class="cap"></div><a class="lb-dl" download>Télécharger l\'image</a>';
  document.body.appendChild(lb);
  var list = [], cur = 0, lastFocus = null;
  function show(i) {
    cur = (i + list.length) % list.length;
    var el = list[cur], img = lb.querySelector('img');
    img.src = el.getAttribute('data-full'); img.alt = el.getAttribute('data-alt') || '';
    lb.querySelector('.cap').textContent = el.getAttribute('data-caption') || '';
    lb.querySelector('.lb-dl').href = el.getAttribute('data-full');
    var multi = list.length > 1;
    lb.querySelector('.lb-prev').style.display = lb.querySelector('.lb-next').style.display = multi ? '' : 'none';
  }
  function open(el) {
    list = Array.prototype.filter.call(document.querySelectorAll('[data-zoom]'), function (e) { return e.offsetParent !== null && !e.closest('[hidden]'); });
    var i = list.indexOf(el); if (i < 0) return;
    lastFocus = el; show(i); lb.classList.add('open'); document.body.style.overflow = 'hidden'; lb.querySelector('.lb-close').focus();
  }
  function close() { lb.classList.remove('open'); document.body.style.overflow = ''; if (lastFocus) lastFocus.focus(); }
  document.addEventListener('click', function (e) { var z = e.target.closest('[data-zoom]'); if (z) { e.preventDefault(); open(z); } });
  lb.addEventListener('click', function (e) { if (e.target === lb) close(); });
  lb.querySelector('.lb-close').addEventListener('click', close);
  lb.querySelector('.lb-prev').addEventListener('click', function () { show(cur - 1); });
  lb.querySelector('.lb-next').addEventListener('click', function () { show(cur + 1); });
  document.addEventListener('keydown', function (e) {
    if (!lb.classList.contains('open')) return;
    if (e.key === 'Escape') close();
    if (e.key === 'ArrowLeft') show(cur - 1);
    if (e.key === 'ArrowRight') show(cur + 1);
  });
})();
