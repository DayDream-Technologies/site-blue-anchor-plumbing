document.addEventListener('DOMContentLoaded',function(){
  // Year
  var yr=document.getElementById('yr');
  if(yr)yr.textContent=new Date().getFullYear();

  // Mobile nav toggle
  var toggle=document.querySelector('.nav-toggle');
  var nav=document.getElementById('main-nav');
  if(toggle&&nav){
    toggle.addEventListener('click',function(){
      var open=nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded',open);
    });
  }

  // Active nav on scroll
  var sections=document.querySelectorAll('main section[id]');
  var navLinks=document.querySelectorAll('.main-nav a');
  function setActive(){
    var scrollY=window.scrollY+120;
    var current='';
    sections.forEach(function(s){
      if(scrollY>=s.offsetTop)current=s.id;
    });
    navLinks.forEach(function(a){
      a.classList.toggle('active',a.getAttribute('href')==='#'+current);
    });
  }
  window.addEventListener('scroll',setActive,{passive:true});
  setActive();

  // Close nav on link click (mobile)
  navLinks.forEach(function(a){
    a.addEventListener('click',function(){
      if(nav.classList.contains('open')){
        nav.classList.remove('open');
        if(toggle)toggle.setAttribute('aria-expanded','false');
      }
    });
  });

  // Form submit notice
  var form=document.querySelector('.contact-form');
  if(form){
    form.addEventListener('submit',function(e){
      e.preventDefault();
      var btn=form.querySelector('button[type="submit"]');
      if(btn){btn.textContent='Message drafted';btn.disabled=true;}
    });
  }
});