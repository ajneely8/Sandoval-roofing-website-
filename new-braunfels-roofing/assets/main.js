// New Braunfels Roofing — shared behavior (mobile nav + contact form)

(function () {
  var header = document.querySelector('.site-header');
  var toggle = document.querySelector('.nav-toggle');

  if (toggle && header) {
    toggle.addEventListener('click', function () {
      var isOpen = header.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    header.querySelectorAll('.nav__list a').forEach(function (link) {
      link.addEventListener('click', function () {
        header.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }
})();

// Anatomy-of-a-roof section: the photo stays pinned while its stage list
// scrolls past; this just highlights whichever stage is currently in view
// so it's clear which part of the roof the text is describing.
(function () {
  var anatomy = document.querySelector('.anatomy');
  if (!anatomy) return;

  if (!('IntersectionObserver' in window)) return;

  var stages = Array.prototype.slice.call(anatomy.querySelectorAll('.anatomy__stage'));

  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        var idx = stages.indexOf(entry.target);
        if (idx === -1) return;
        stages.forEach(function (stage, i) {
          stage.classList.toggle('is-active', i === idx);
        });
      });
    },
    { rootMargin: '-35% 0px -35% 0px', threshold: 0 }
  );

  stages.forEach(function (stage) { observer.observe(stage); });
})();

// Contact form: replace with a real Formspree endpoint before launch.
// Until then it falls back to opening the visitor's email client.
(function () {
  var CONTACT_EMAIL = 'info@NewBraunfelsRoofingTX.com';
  var FORMSPREE_ENDPOINT = ''; // e.g. 'https://formspree.io/f/xxxxxxx'

  var form = document.querySelector('.contact-form');
  if (!form) return;

  var status = form.querySelector('.form-status');

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var data = new FormData(form);

    if (FORMSPREE_ENDPOINT) {
      status.textContent = 'Sending...';
      status.removeAttribute('data-state');
      fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      })
        .then(function (res) {
          if (res.ok) {
            status.textContent = "Thanks — we'll be in touch shortly.";
            status.setAttribute('data-state', 'success');
            form.reset();
          } else {
            throw new Error('bad status');
          }
        })
        .catch(function () {
          status.textContent = 'Something went wrong. Please call us instead.';
          status.setAttribute('data-state', 'error');
        });
      return;
    }

    var name = data.get('name') || '';
    var phone = data.get('phone') || '';
    var address = data.get('address') || '';
    var message = data.get('message') || '';
    var body =
      'Name: ' + name + '%0D%0A' +
      'Phone: ' + phone + '%0D%0A' +
      'Address: ' + address + '%0D%0A%0D%0A' +
      message;
    window.location.href =
      'mailto:' + CONTACT_EMAIL + '?subject=Free%20Roof%20Inspection%20Request&body=' + body;
  });
})();
