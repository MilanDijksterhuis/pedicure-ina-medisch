(function () {
  'use strict';

  // Mobiele navigatie
  const toggle = document.getElementById('nav-toggle');
  const links  = document.getElementById('nav-links');

  if (toggle && links) {
    toggle.addEventListener('click', () => {
      const open = links.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(open));
    });
    links.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        links.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // Accordion behandelingen
  document.querySelectorAll('.accordion-knop').forEach(knop => {
    knop.addEventListener('click', () => {
      const item   = knop.closest('.accordion-item');
      const isOpen = item.classList.contains('is-open');

      // Sluit andere open items
      document.querySelectorAll('.accordion-item.is-open').forEach(open => {
        open.classList.remove('is-open');
        open.querySelector('.accordion-knop').setAttribute('aria-expanded', 'false');
      });

      if (!isOpen) {
        item.classList.add('is-open');
        knop.setAttribute('aria-expanded', 'true');
      }
    });
  });

  // Scroll-reveal
  const minderBeweging = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (!minderBeweging) {
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('zichtbaar');
          obs.unobserve(e.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -32px 0px' });

    document.querySelectorAll('.reveal').forEach(el => obs.observe(el));
  } else {
    document.querySelectorAll('.reveal').forEach(el => el.classList.add('zichtbaar'));
  }
})();
