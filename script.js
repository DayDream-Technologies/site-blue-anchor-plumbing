document.addEventListener('DOMContentLoaded',()=>{
  // Year
  const yr=document.getElementById('yr');
  if(yr) yr.textContent=new Date().getFullYear();

  // Hamburger
  const btn=document.querySelector('.hamburger');
  const menu=document.getElementById('nav-menu');
  if(btn&&menu){
    btn.addEventListener('click',()=>{
      const open=menu.classList.toggle('open');
      btn.classList.toggle('open',open);
      btn.setAttribute('aria-expanded',String(open));
    });
    // Close on link click
    menu.querySelectorAll('a').forEach(a=>{
      a.addEventListener('click',()=>{
        menu.classList.remove('open');
        btn.classList.remove('open');
        btn.setAttribute('aria-expanded','false');
      });
    });
  }

  // Form submit
  const form=document.querySelector('.contact-form');
  if(form){
    form.addEventListener('submit',e=>{
      e.preventDefault();
      const fields=[...form.querySelectorAll('input,textarea')];
      let valid=true;
      fields.forEach(f=>{
        f.style.borderColor='';
        if(f.required&&!f.value.trim()){f.style.borderColor='#c0392b';valid=false;}
      });
      if(!valid) return;
      const btn=form.querySelector('button[type="submit"]');
      const orig=btn.textContent;
      btn.textContent='Message ready to send';
      btn.disabled=true;
      setTimeout(()=>{btn.textContent=orig;btn.disabled=false;form.reset();},3000);
    });
  }

  // Smooth active nav highlight
  const sections=document.querySelectorAll('section[id],div[id]');
  const navLinks=document.querySelectorAll('.nav-links a');
  const obs=new IntersectionObserver(entries=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting){
        navLinks.forEach(a=>{
          a.style.color=a.getAttribute('href')==='#'+entry.target.id?'#F4A261':'';
        });
      }
    });
  },{threshold:0.4});
  sections.forEach(s=>obs.observe(s));
});