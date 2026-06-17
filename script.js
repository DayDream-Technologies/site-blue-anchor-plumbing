document.addEventListener('DOMContentLoaded',function(){
  // Year
  var yr=document.getElementById('yr');
  if(yr)yr.textContent=new Date().getFullYear();

  // Nav toggle
  var toggle=document.querySelector('.nav-toggle');
  var menu=document.getElementById('nav-menu');
  if(toggle&&menu){
    toggle.addEventListener('click',function(){
      var open=menu.classList.toggle('open');
      toggle.setAttribute('aria-expanded',open);
    });
    // Close on link click
    menu.querySelectorAll('a').forEach(function(link){
      link.addEventListener('click',function(){
        menu.classList.remove('open');
        toggle.setAttribute('aria-expanded','false');
      });
    });
  }

  // Active nav highlight on scroll
  var sections=document.querySelectorAll('main section[id]');
  var navLinks=document.querySelectorAll('.nav-list a');
  function onScroll(){
    var scrollY=window.scrollY+120;
    var current='';
    sections.forEach(function(s){
      if(scrollY>=s.offsetTop)current=s.id;
    });
    navLinks.forEach(function(a){
      a.classList.toggle('active',a.getAttribute('href')==='#'+current);
    });
  }
  window.addEventListener('scroll',onScroll,{passive:true});
  onScroll();

  // Form handler
  window.handleForm=function(e){
    e.preventDefault();
    var form=e.target;
    var status=document.getElementById('form-status');
    var name=form.querySelector('#cf-name').value.trim();
    var email=form.querySelector('#cf-email').value.trim();
    var msg=form.querySelector('#cf-message').value.trim();
    var subject=encodeURIComponent('Plumbing Service Request from '+name);
    var body=encodeURIComponent('Name: '+name+'\nEmail: '+email+'\n\n'+msg);
    window.location.href='mailto:hello@blueanchorplumbing.com?subject='+subject+'&body='+body;
    if(status)status.textContent='Opening your email client...';
  };
});