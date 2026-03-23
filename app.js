if(window.matchMedia('(pointer:fine)').matches){
  const cd=document.getElementById('cd'),cr=document.getElementById('cr');
  let mx=0,my=0,rx=0,ry=0;
  document.addEventListener('mousemove',e=>{mx=e.clientX;my=e.clientY;cd.style.left=mx+'px';cd.style.top=my+'px';});
  (function a(){rx+=(mx-rx)*.13;ry+=(my-ry)*.13;cr.style.left=rx+'px';cr.style.top=ry+'px';requestAnimationFrame(a);})();
  document.querySelectorAll('a,button,.proj-card,.c-item,.skill-pill,.hobby-tag,.about-card,.edu-card').forEach(el=>{
    el.addEventListener('mouseenter',()=>cr.classList.add('h'));
    el.addEventListener('mouseleave',()=>cr.classList.remove('h'));
  });
}

// ── mobile menu ──
const toggle=document.getElementById('navToggle');
const menu=document.getElementById('mobileMenu');
toggle.addEventListener('click',()=>{
  toggle.classList.toggle('open');
  menu.classList.toggle('open');
});
// close on link click
menu.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{
  toggle.classList.remove('open');
  menu.classList.remove('open');
}));

// ── reveal on scroll ──
const io=new IntersectionObserver(e=>e.forEach(x=>{
  if(x.isIntersecting)x.target.classList.add('on');
}),{threshold:.08});
document.querySelectorAll('.r').forEach(r=>io.observe(r));
