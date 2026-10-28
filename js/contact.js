/* ==========================================================
   contact.js : formulaire de contact
   - si SITE.formEndpoint est renseigné (ex. Formspree) : envoi direct
   - sinon : ouverture de l'application mail avec le message prérempli
   ========================================================== */
(function () {
  var f = document.getElementById('contact-form'); if (!f) return;
  var S = window.SITE, msg = document.getElementById('form-msg');
  function say(t) { msg.textContent = t; msg.classList.add('show'); }
  f.addEventListener('submit', function (e) {
    e.preventDefault();
    var el = f.elements;
    var d = { name: el.fullname.value.trim(), email: el.email.value.trim(), subject: el.subject.value.trim() || 'Contact depuis le portfolio', message: el.message.value.trim() };
    if (!d.name || !d.email || !d.message) { say('Renseigne ton nom, ton email et ton message avant d\'envoyer.'); return; }
    if (S.formEndpoint) {
      fetch(S.formEndpoint, { method: 'POST', headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' }, body: JSON.stringify(d) })
        .then(function (r) { if (!r.ok) throw 0; say('Message envoyé. Merci, je te réponds rapidement.'); f.reset(); })
        .catch(function () { say('L\'envoi a échoué. Écris-moi directement à ' + S.email + '.'); });
    } else {
      var body = d.message + '\n\n— ' + d.name + ' (' + d.email + ')';
      window.location.href = 'mailto:' + S.email + '?subject=' + encodeURIComponent(d.subject) + '&body=' + encodeURIComponent(body);
      say('Ton application mail s\'ouvre avec le message prérempli. Si rien ne se passe, écris à ' + S.email + '.');
    }
  });
})();
