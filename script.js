const links=[...document.querySelectorAll('.nav a')];
const sections=[...document.querySelectorAll('main section[id]')];
window.addEventListener('scroll',()=>{
  let current='home';
  sections.forEach(s=>{if(scrollY >= s.offsetTop-180) current=s.id});
  links.forEach(a=>a.classList.toggle('active',a.getAttribute('href')==='#'+current));
});
