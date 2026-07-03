// mobile nav
(function () {
  document.documentElement.classList.add('js');
  var toggle = document.querySelector('.nav-toggle');
  var links = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', function () {
      links.classList.toggle('open');
      var open = links.classList.contains('open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    links.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') links.classList.remove('open');
    });
  }

  // scroll reveal
  var reveals = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && reveals.length) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); }
      });
    }, { threshold: 0.12 });
    reveals.forEach(function (el) { io.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add('in'); });
  }

  // contact form -> mailto
  var form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var f = form.elements;
      var to = 'info@vettore.example';
      var subj = encodeURIComponent('Richiesta informazioni — ' + (f.nome.value || 'sito web'));
      var body = encodeURIComponent(
        'Nome: ' + f.nome.value + '\n' +
        'Azienda: ' + f.azienda.value + '\n' +
        'Email: ' + f.email.value + '\n' +
        'Interesse: ' + f.interesse.value + '\n\n' +
        'Messaggio:\n' + f.messaggio.value
      );
      window.location.href = 'mailto:' + to + '?subject=' + subj + '&body=' + body;
    });
  }
})();
