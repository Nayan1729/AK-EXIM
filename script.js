/* AK EXIM — Script */
document.addEventListener('DOMContentLoaded', () => {
  const minerals = [
    { name:'Silica Sand', formula:'SiO₂', img:'images/minerals/silica-sand.jpg', desc:'Rich in silicon dioxide, prized for purity and adaptability. Essential in glassmaking and construction.', tags:['Glass','Construction','Foundry'] },
    { name:'Quartz', formula:'SiO₂', img:'images/minerals/quartz.jpg', desc:'One of the most abundant minerals, composed of silicon dioxide. Versatile across industries.', tags:['Electronics','Glass','Ceramics'] },
    { name:'Soda Feldspar', formula:'NaAlSi₃O₈', img:'images/minerals/feldspar.jpg', desc:'Key ingredient in glass and ceramics. Enhances strength, durability, and thermal resistance.', tags:['Glass','Ceramics','Enamel'] },
    { name:'Potassium Feldspar', formula:'KAlSi₃O₈', img:'images/minerals/potassium-feldspar.png', desc:'Essential for ceramic and glass industries. Provides fluxing properties that lower melting temperature.', tags:['Ceramics','Glass','Abrasives'] },
    { name:'Bauxite', formula:'Al₂O₃·2H₂O', img:'images/minerals/bauxite.jpg', desc:'Principal ore of aluminum, composed of aluminum hydroxides with iron oxides and silica.', tags:['Aluminum','Cement','Refractories'] },
    { name:'Bentonite', formula:'Al₂O₃·4SiO₂·H₂O', img:'images/minerals/bentonite.jpg', desc:'Absorbent clay mineral composed mainly of montmorillonite. Excellent binding and sealing.', tags:['Foundry','Drilling','Construction'] },
    { name:'Lime Stone', formula:'CaCO₃', img:'images/minerals/limestone.jpg', desc:'Sedimentary rock composed mostly of calcium carbonate. Essential in cement and steel production.', tags:['Cement','Steel','Agriculture'] },
    { name:'Fly Ash', formula:'SiO₂+Al₂O₃+Fe₂O₃', img:'images/minerals/fly-ash.png', desc:'Fine powder rich in silica and alumina. Improves concrete strength and durability.', tags:['Cement','Construction','Bricks'] },
    { name:'Ball Clay', formula:'Al₂O₃·2SiO₂·2H₂O', img:'images/minerals/ball-clay.png', desc:'Highly plastic clay with excellent binding. Essential in ceramics for workability.', tags:['Ceramics','Tiles','Sanitaryware'] },
    { name:'Kaolin Clay', formula:'Al₂Si₂O₅(OH)₄', img:'images/minerals/kaolin-clay.png', desc:'Soft white clay with fine particle size. Used in paper, ceramics, paints, and rubber.', tags:['Paper','Ceramics','Paint'] },
  ];
  const g = document.getElementById('prodGrid');
  if(g) g.innerHTML = minerals.map((m,i) => `
    <div class="prod-card rv${i%3===1?' rv-d1':i%3===2?' rv-d2':''}">
      <div class="img"><img src="${m.img}" alt="${m.name}" loading="lazy"></div>
      <div class="info">
        <h3>${m.name}</h3>
        <div class="formula">${m.formula}</div>
        <p>${m.desc}</p>
        <div class="tags">${m.tags.map(t=>`<span class="tag">${t}</span>`).join('')}</div>
        <a href="https://wa.me/918128521974?text=${encodeURIComponent('Hi, I\'m interested in '+m.name+'. Please share details.')}" class="prod-link" target="_blank">Inquire Now →</a>
      </div>
    </div>`).join('');

  // Nav scroll
  const hdr = document.querySelector('.header');
  window.addEventListener('scroll', () => hdr.classList.toggle('shadow', scrollY > 20), {passive:true});
  // Burger
  const bur = document.getElementById('burger'), nav = document.getElementById('mainNav');
  bur.addEventListener('click', () => { bur.classList.toggle('on'); nav.classList.toggle('open'); });
  nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => { bur.classList.remove('on'); nav.classList.remove('open'); }));
  // Smooth scroll
  document.querySelectorAll('a[href^="#"]').forEach(a => a.addEventListener('click', e => { e.preventDefault(); const t=document.querySelector(a.getAttribute('href')); if(t) t.scrollIntoView({behavior:'smooth'}); }));
  // Active nav
  const secs = document.querySelectorAll('section[id], .sec[id], .stats-strip[id]');
  const nls = document.querySelectorAll('.main-nav a:not(.nav-quote)');
  window.addEventListener('scroll', () => { const p=scrollY+120; secs.forEach(s => { if(p>=s.offsetTop && p<s.offsetTop+s.offsetHeight) nls.forEach(l => l.classList.toggle('on', l.getAttribute('href')==='#'+s.id)); }); }, {passive:true});
  // Reveal
  const ro = new IntersectionObserver(es => es.forEach(e => { if(e.isIntersecting){e.target.classList.add('show');ro.unobserve(e.target);} }), {threshold:0.08, rootMargin:'0px 0px -30px 0px'});
  document.querySelectorAll('.rv').forEach(el => ro.observe(el));
  // Counters
  function anim(el){ const t=+el.dataset.target, d=1800, s=performance.now(); (function u(n){ const p=Math.min((n-s)/d,1); el.textContent=Math.round((1-Math.pow(1-p,3))*t); if(p<1)requestAnimationFrame(u); })(s); }
  const co = new IntersectionObserver(es => es.forEach(e => { if(e.isIntersecting){anim(e.target);co.unobserve(e.target);} }), {threshold:0.5});
  document.querySelectorAll('[data-target]').forEach(el => co.observe(el));
  // WA float
  const wa = document.getElementById('waFloat');
  window.addEventListener('scroll', () => wa.classList.toggle('show', scrollY>400), {passive:true});
  // Form
  const fm = document.getElementById('cForm');
  if(fm) fm.addEventListener('submit', e => {
    const v=['cName','cEmail','cCountry','cMsg'].map(id=>document.getElementById(id)?.value.trim());
    if(v.some(x=>!x)){e.preventDefault();alert('Please fill required fields.');return;}
    if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v[1])){e.preventDefault();alert('Invalid email.');return;}
    fm.querySelector('.f-submit').textContent='Sending...';
  });
});
