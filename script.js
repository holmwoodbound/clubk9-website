/* =================================================================
   CLUB K9 — interactivity
   - mobile menu        - scroll reveal animations
   - sticky header       - animated stat counters
   - gallery + lightbox  - contact form (opens email app)
   - back-to-top button
   ================================================================= */
(function () {
  'use strict';

  /* ---- THE CREW gallery -----------------------------------------
     EDIT: to add/remove a dog, add/remove a line in this list. */
  const DOG_PHOTOS = [
    "images/dog-01.jpg","images/dog-02.jpg","images/dog-03.jpg","images/dog-04.jpg","images/dog-05.jpg",
    "images/dog-06.jpg","images/dog-07.jpg","images/dog-08.jpg","images/dog-09.jpg","images/dog-10.jpg",
    "images/dog-11.jpg","images/dog-12.jpg","images/dog-13.jpg","images/dog-14.jpg","images/dog-15.jpg",
    "images/dog-16.jpg","images/dog-17.jpg","images/dog-18.jpg","images/dog-19.jpg","images/dog-20.jpg",
    "images/dog-21.jpg","images/dog-22.jpg","images/dog-23.jpg","images/dog-24.jpg","images/dog-25.jpg"
  ];
  const gallery = document.getElementById('gallery');
  if (gallery) {
    gallery.innerHTML = DOG_PHOTOS.map(src =>
      `<button class="g-item reveal" data-src="${src}">
         <img src="${src}" alt="A happy Club K9 dog" loading="lazy">
       </button>`).join('');
  }

  /* ---- Mobile menu ---------------------------------------------- */
  const toggle = document.getElementById('navToggle');
  const nav = document.getElementById('mainNav');
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      const open = nav.classList.toggle('open');
      toggle.classList.toggle('open', open);
      toggle.setAttribute('aria-expanded', open);
    });
    nav.querySelectorAll('a').forEach(a =>
      a.addEventListener('click', () => {
        nav.classList.remove('open');
        toggle.classList.remove('open');
        toggle.setAttribute('aria-expanded', false);
      })
    );
  }

  /* ---- Sticky header shadow + back-to-top ----------------------- */
  const header = document.querySelector('.site-header');
  const toTop = document.getElementById('toTop');
  /* The header shrinks by ~51px, so a single trigger point makes it
     oscillate: shrinking moves the page up, which pushes the scroll back
     under the threshold, which expands it again. Two thresholds with a
     gap wider than the height change break that loop. */
  const SHRINK_AT  = 110;   // shrink once we are well past the top
  const RESTORE_AT = 40;    // only grow back near the very top
  let shrunk = false;

  const onScroll = () => {
    const y = window.scrollY;
    if (header) {
      if (!shrunk && y > SHRINK_AT)       { shrunk = true;  header.classList.add('scrolled'); }
      else if (shrunk && y < RESTORE_AT)  { shrunk = false; header.classList.remove('scrolled'); }
    }
    if (toTop) toTop.classList.toggle('show', y > 600);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ---- Scroll-reveal animations (re-checks new gallery items) ---- */
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('in'); revealObserver.unobserve(e.target); }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
  document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

  /* ---- Animated stat counters ----------------------------------- */
  const counters = document.querySelectorAll('.num[data-count]');
  const countObserver = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      const el = e.target;
      const target = +el.dataset.count;
      const suffix = el.dataset.suffix || '';
      const dur = 1400, start = performance.now();
      const tick = (now) => {
        const p = Math.min((now - start) / dur, 1);
        const eased = 1 - Math.pow(1 - p, 3);
        el.textContent = Math.round(eased * target) + suffix;
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
      countObserver.unobserve(el);
    });
  }, { threshold: 0.5 });
  counters.forEach(c => countObserver.observe(c));

  /* ---- Lightbox ------------------------------------------------- */
  const lb = document.getElementById('lightbox');
  const lbImg = document.getElementById('lbImg');
  let imgs = [], idx = 0;
  const refreshImgs = () => { imgs = Array.from(document.querySelectorAll('.g-item')); };
  const show = (i) => {
    refreshImgs();
    idx = (i + imgs.length) % imgs.length;
    lbImg.src = imgs[idx].dataset.src;
    lb.classList.add('open');
    lb.setAttribute('aria-hidden', 'false');
  };
  const close = () => { lb.classList.remove('open'); lb.setAttribute('aria-hidden', 'true'); };

  if (gallery && lb) {
    gallery.addEventListener('click', (e) => {
      const item = e.target.closest('.g-item');
      if (!item) return;
      refreshImgs();
      show(imgs.indexOf(item));
    });
    lb.querySelector('.lb-close').addEventListener('click', close);
    lb.querySelector('.lb-next').addEventListener('click', () => show(idx + 1));
    lb.querySelector('.lb-prev').addEventListener('click', () => show(idx - 1));
    lb.addEventListener('click', (e) => { if (e.target === lb) close(); });
    document.addEventListener('keydown', (e) => {
      if (!lb.classList.contains('open')) return;
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowRight') show(idx + 1);
      if (e.key === 'ArrowLeft') show(idx - 1);
    });
  }

  /* ---- Contact form -------------------------------------------
     Netlify captures this one server-side, so there's no JavaScript
     to do here — the form posts on its own. */

  /* ---- Footer year --------------------------------------------- */
  const yr = document.getElementById('year');
  if (yr) yr.textContent = new Date().getFullYear();
})();
