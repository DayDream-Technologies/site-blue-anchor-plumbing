(function(){
  var toggle=document.querySelector('.menu-toggle');
  var navLinks=document.querySelector('.nav-links');
  if(toggle&&navLinks){
    toggle.addEventListener('click',function(){
      var open=navLinks.classList.toggle('open');
      toggle.setAttribute('aria-expanded',open?'true':'false');
    });
    navLinks.querySelectorAll('a').forEach(function(link){
      link.addEventListener('click',function(){
        navLinks.classList.remove('open');
        toggle.setAttribute('aria-expanded','false');
      });
    });
  }
  document.querySelectorAll('a[href^="#"]').forEach(function(anchor){
    anchor.addEventListener('click',function(e){
      var id=this.getAttribute('href').slice(1);
      var target=document.getElementById(id);
      if(target){
        e.preventDefault();
        target.scrollIntoView({behavior:'smooth',block:'start'});
        target.setAttribute('tabindex','-1');
        target.focus({preventScroll:true});
      }
    });
  });
})();