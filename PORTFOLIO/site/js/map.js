/* ==========================================================
   map.js : carte interactive du parcours (Leaflet)
   Les lieux sont définis dans data.js (PLACES).
   ========================================================== */
(function () {
  var el = document.getElementById('map');
  if (!el || !window.L) return;
  var map = L.map(el, { scrollWheelZoom: false }).setView([30, -12], 2);
  L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}', { maxZoom: 18, attribution: 'Fond de carte : Esri, HERE, Garmin, © contributeurs OpenStreetMap' }).addTo(map);
  var layer = L.featureGroup().addTo(map);
  var COL = { etude: '#E3A02B', exp: '#183B32' };

  function draw(type) {
    layer.clearLayers();
    window.PLACES.forEach(function (p) {
      if (type !== 'all' && p.type !== type) return;
      var m = L.circleMarker(p.coords, { radius: 9, weight: 3, color: '#183B32', fillColor: COL[p.type], fillOpacity: 1 });
      var b = document.createElement('div'); var t = document.createElement('strong'); t.textContent = p.name; b.appendChild(t); b.appendChild(document.createElement('br')); b.appendChild(document.createTextNode(p.text));
      m.bindPopup(b).addTo(layer);
    });
    if (layer.getLayers().length) map.fitBounds(layer.getBounds().pad(.3), { maxZoom: 7 });
  }
  document.querySelectorAll('#place-filters .chip').forEach(function (b) {
    b.addEventListener('click', function () {
      document.querySelectorAll('#place-filters .chip').forEach(function (x) { x.setAttribute('aria-pressed', x === b); });
      draw(b.getAttribute('data-type'));
    });
  });
  draw('all');
})();
