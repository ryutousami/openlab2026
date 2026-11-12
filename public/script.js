(() => {
  const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
  const galleries = ['.hero .slide', '.venue-slide'].map(selector => ({
    slides: [...document.querySelectorAll(selector)], current: 0
  })).filter(gallery => gallery.slides.length > 1);
  let timer;
  function schedule() {
    clearInterval(timer);
    if (reducedMotion.matches || document.hidden) return;
    timer = setInterval(() => {
      galleries.forEach(gallery => {
        gallery.current = (gallery.current + 1) % gallery.slides.length;
        gallery.slides.forEach((slide, index) => slide.classList.toggle('is-active', index === gallery.current));
      });
    }, 4000);
  }
  reducedMotion.addEventListener('change', schedule);
  document.addEventListener('visibilitychange', schedule);
  schedule();
})();

(() => {
  const guide = document.querySelector('.program-guide');
  if (!guide || !('IntersectionObserver' in window)) return;
  guide.classList.add('is-animated');
  let observer;
  function observeProgram() {
    observer?.disconnect();
    const inset = Math.floor(innerHeight * 0.4);
    observer = new IntersectionObserver(entries => {
      for (const entry of entries) {
        guide.hidden = !entry.isIntersecting;
        guide.classList.toggle('is-visible', entry.isIntersecting);
      }
    }, { threshold: 0, rootMargin: `-${inset}px 0px -${inset}px 0px` });
    observer.observe(document.querySelector('#program'));
  }
  window.addEventListener('resize', observeProgram, { passive: true });
  observeProgram();
})();

(() => {
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  const header = document.querySelector('.header');
  const updateHeader = () => header?.classList.toggle('has-scrolled', window.scrollY > 24);
  window.addEventListener('scroll', updateHeader, { passive: true });
  updateHeader();
  if (!('IntersectionObserver' in window)) return;
  const selectors = '.greeting-heading h2, .greeting-photo, .greeting, .section-heading h2, .facts > div, .timeline > li, .venue-slideshow, .access-map, .registration-inner > div';
  const targets = [...document.querySelectorAll(selectors)];
  let observer;
  function setup() {
    observer?.disconnect();
    targets.forEach(el => el.classList.remove('motion-pending', 'motion-in'));
    document.body.classList.toggle('motion-enabled', !reduced.matches);
    if (reduced.matches) return;
    observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.remove('motion-pending');
        entry.target.classList.add('motion-in');
        observer.unobserve(entry.target);
      });
    }, { threshold: 0, rootMargin: '0px 0px -28px 0px' });
    targets.forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.top >= innerHeight - 28) el.classList.add('motion-pending');
      observer.observe(el);
    });
  }
  document.addEventListener('focusin', event => {
    const target = event.target.closest('.motion-pending');
    if (target) {
      target.classList.remove('motion-pending');
      observer?.unobserve(target);
    }
  });
  reduced.addEventListener('change', setup);
  setup();
})();
