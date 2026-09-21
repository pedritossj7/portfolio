document.addEventListener('DOMContentLoaded', function () {

  const nav = document.getElementById('mainNav');
  const backToTop = document.getElementById('backToTop');
  function onScroll(){
    nav.classList.toggle('is-scrolled', window.scrollY > 40);
    backToTop.classList.toggle('show', window.scrollY > 500);
  }
  document.addEventListener('scroll', onScroll);
  onScroll();

  backToTop.addEventListener('click', function(){
    window.scrollTo({top:0, behavior:'smooth'});
  });

  const navCollapseEl = document.getElementById('navMenu');
  const bsCollapse = (navCollapseEl && typeof bootstrap !== 'undefined')
    ? new bootstrap.Collapse(navCollapseEl, {toggle:false})
    : null;
  document.querySelectorAll('#navLinks .nav-link').forEach(function(link){
    link.addEventListener('click', function(){
      if (bsCollapse && navCollapseEl.classList.contains('show')) bsCollapse.hide();
    });
  });

  const sections = document.querySelectorAll('section[id], header[id], footer[id]');
  const navLinks = document.querySelectorAll('#navLinks .nav-link');
  const spyObserver = new IntersectionObserver(function(entries){
    entries.forEach(function(entry){
      if (entry.isIntersecting){
        const id = entry.target.getAttribute('id');
        navLinks.forEach(function(l){
          l.classList.toggle('active', l.getAttribute('href') === '#' + id);
        });
      }
    });
  }, {rootMargin:'-45% 0px -50% 0px', threshold:0});
  sections.forEach(function(s){ spyObserver.observe(s); });

  const roles = ['Desarrollador Web', 'Entusiasta de la IA', "El 'intento de' desarrollador"];
  const roleEl = document.getElementById('roleText');
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (reduceMotion) {
    roleEl.textContent = roles[0];
  } else {
    let roleIndex = 0, charIndex = 0, deleting = false;
    function typeLoop(){
      const current = roles[roleIndex];
      if (!deleting){
        charIndex++;
        roleEl.textContent = current.slice(0, charIndex);
        if (charIndex === current.length){
          deleting = true;
          setTimeout(typeLoop, 1400);
          return;
        }
      } else {
        charIndex--;
        roleEl.textContent = current.slice(0, charIndex);
        if (charIndex === 0){
          deleting = false;
          roleIndex = (roleIndex + 1) % roles.length;
        }
      }
      setTimeout(typeLoop, deleting ? 35 : 65);
    }
    typeLoop();
  }

  const fills = document.querySelectorAll('.skill-fill');
  const skillObserver = new IntersectionObserver(function(entries, obs){
    entries.forEach(function(entry){
      if (entry.isIntersecting){
        const el = entry.target;
        el.style.width = el.getAttribute('data-level') + '%';
        obs.unobserve(el);
      }
    });
  }, {threshold:0.4});
  fills.forEach(function(f){ skillObserver.observe(f); });

  const filterButtons = document.querySelectorAll('.filter-btn');
  const projectItems = document.querySelectorAll('.project-item');
  filterButtons.forEach(function(btn){
    btn.addEventListener('click', function(){
      filterButtons.forEach(function(b){ b.classList.remove('active'); });
      btn.classList.add('active');
      const filter = btn.getAttribute('data-filter');
      projectItems.forEach(function(item){
        const match = filter === 'all' || item.getAttribute('data-category') === filter;
        item.style.display = match ? '' : 'none';
      });
    });
  });

  document.querySelectorAll('.read-more-btn').forEach(function(btn){
    btn.addEventListener('click', function(){
      const desc = btn.previousElementSibling;
      const wasClamped = desc.classList.contains('is-clamped');
      desc.classList.toggle('is-clamped');
      btn.textContent = wasClamped ? 'Ver menos' : 'Leer más';
      btn.setAttribute('aria-expanded', wasClamped ? 'true' : 'false');
    });
  });

  document.getElementById('year').textContent = new Date().getFullYear();

});
