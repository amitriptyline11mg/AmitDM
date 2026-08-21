/* =====================================================
   DIGITAL MARKETING PRACTICE SITE — MAIN JAVASCRIPT
   ===================================================== */

document.addEventListener('DOMContentLoaded', () => {

  /* ----------------------------------------
     Mobile Navigation
  ---------------------------------------- */
  const navToggle = document.querySelector('.nav__toggle');
  const navLinks  = document.querySelector('.nav__links');

  if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => {
      const isOpen = navToggle.getAttribute('aria-expanded') === 'true';
      navToggle.setAttribute('aria-expanded', String(!isOpen));
      navToggle.classList.toggle('is-active');
      navLinks.classList.toggle('is-open');
    });

    // Close when a link is clicked (mobile UX)
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navToggle.setAttribute('aria-expanded', 'false');
        navToggle.classList.remove('is-active');
        navLinks.classList.remove('is-open');
      });
    });

    // Close on outside click
    document.addEventListener('click', e => {
      if (!navToggle.contains(e.target) && !navLinks.contains(e.target)) {
        navToggle.setAttribute('aria-expanded', 'false');
        navToggle.classList.remove('is-active');
        navLinks.classList.remove('is-open');
      }
    });
  }

  /* ----------------------------------------
     Active Navigation Link Highlighting
  ---------------------------------------- */
  const path = window.location.pathname;
  document.querySelectorAll('.nav__link').forEach(link => {
    const href = link.getAttribute('href');
    if (!href) return;
    const hrefFile = href.split('/').pop();
    const pathFile = path.split('/').pop() || 'index.html';
    if (
      href === path ||
      hrefFile === pathFile ||
      (pathFile === '' && hrefFile === 'index.html') ||
      (path.includes('/blog/') && href.includes('blog.html'))
    ) {
      link.classList.add('is-active');
    }
  });

  /* ----------------------------------------
     Reading Progress Bar (blog posts only)
  ---------------------------------------- */
  const progressBar = document.querySelector('.reading-progress');
  if (progressBar) {
    const update = () => {
      const scrollTop  = window.scrollY;
      const docHeight  = document.documentElement.scrollHeight - window.innerHeight;
      const progress   = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      progressBar.style.width = Math.min(progress, 100) + '%';
    };
    window.addEventListener('scroll', update, { passive: true });
    update();
  }

  /* ----------------------------------------
     Estimated Reading Time
  ---------------------------------------- */
  const readingTimeEl = document.querySelector('[data-reading-time]');
  const postContent   = document.querySelector('.post-content');
  if (readingTimeEl && postContent) {
    const words = postContent.innerText.split(/\s+/).filter(Boolean).length;
    const mins  = Math.max(1, Math.round(words / 200));
    readingTimeEl.textContent = mins + ' min read';
  }

  /* ----------------------------------------
     Demo Form Handling
     (No backend — shows a friendly confirmation)
  ---------------------------------------- */
  document.querySelectorAll('form[data-demo="true"]').forEach(form => {
    form.addEventListener('submit', e => {
      e.preventDefault();
      const successEl = form.querySelector('.form-success');
      const submitBtn = form.querySelector('[type="submit"]');

      if (submitBtn) {
        const original = submitBtn.textContent;
        submitBtn.textContent = 'Sending…';
        submitBtn.disabled = true;
        setTimeout(() => {
          submitBtn.textContent = original;
          submitBtn.disabled = false;
          if (successEl) { successEl.classList.add('is-visible'); form.reset(); }
          setTimeout(() => successEl && successEl.classList.remove('is-visible'), 7000);
        }, 900);
      } else if (successEl) {
        successEl.classList.add('is-visible');
        form.reset();
      }
    });
  });

  /* ----------------------------------------
     Smooth Scroll for Anchor Links
  ---------------------------------------- */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const id = this.getAttribute('href');
      if (id === '#') return;
      const target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      const navH = document.querySelector('.nav')?.offsetHeight || 0;
      window.scrollTo({ top: target.getBoundingClientRect().top + window.scrollY - navH - 20, behavior: 'smooth' });
    });
  });

  /* ----------------------------------------
     Blog Category Filters
  ---------------------------------------- */
  const filterBtns = document.querySelectorAll('.blog-filter');
  if (filterBtns.length) {
    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('is-active'));
        btn.classList.add('is-active');
        const cat = btn.dataset.filter;
        document.querySelectorAll('[data-category]').forEach(card => {
          card.style.display = (cat === 'all' || card.dataset.category === cat) ? '' : 'none';
        });
      });
    });
  }

  /* ----------------------------------------
     Auto-open external links safely
  ---------------------------------------- */
  const host = window.location.hostname;
  document.querySelectorAll('.post-content a[href^="http"]').forEach(link => {
    if (!link.href.includes(host)) {
      link.setAttribute('target', '_blank');
      link.setAttribute('rel', 'noopener noreferrer');
    }
  });

});
