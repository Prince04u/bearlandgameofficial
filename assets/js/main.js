
// particles
(function(){
  const root=document.getElementById('particles');
  if(!root)return;
  const N=22;
  for(let i=0;i<N;i++){
    const p=document.createElement('span');
    p.className='particle';
    p.style.left=Math.random()*100+'%';
    p.style.animationDuration=(8+Math.random()*14)+'s';
    p.style.animationDelay=(-Math.random()*16)+'s';
    p.style.opacity=(.08+Math.random()*.18).toFixed(2);
    const s=3+Math.random()*5;
    p.style.width=s+'px';p.style.height=s+'px';
    root.appendChild(p);
  }
})();
// nav toggle
(function(){
  const btn=document.getElementById('navToggle');
  const nav=document.getElementById('primaryNav');
  if(btn&&nav){btn.addEventListener('click',()=>nav.classList.toggle('open'))}
})();
// copy IP
function copyIP(btn){
  const ip='play.bear-land.net';
  navigator.clipboard&&navigator.clipboard.writeText(ip);
  const t=btn.textContent;btn.textContent='Copied!';
  setTimeout(()=>btn.textContent=t,1500);
}
window.copyIP=copyIP;
// animated counters
(function(){
  const els=document.querySelectorAll('[data-count]');
  if(!els.length)return;
  const obs=new IntersectionObserver((entries)=>{
    entries.forEach(e=>{
      if(!e.isIntersecting)return;
      const el=e.target;const end=parseInt(el.dataset.count,10);const dur=1400;const t0=performance.now();
      function step(t){const p=Math.min(1,(t-t0)/dur);el.textContent=Math.floor(end*(1-Math.pow(1-p,3))).toLocaleString();if(p<1)requestAnimationFrame(step)}
      requestAnimationFrame(step);obs.unobserve(el);
    })
  },{threshold:.3});
  els.forEach(el=>obs.observe(el));
})();
// smooth anchors
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click',e=>{
    const id=a.getAttribute('href');if(id.length<2)return;
    const t=document.querySelector(id);if(t){e.preventDefault();t.scrollIntoView({behavior:'smooth',block:'start'})}
  })
});
// fake live player count
(function(){
  const el=document.getElementById('livePlayers');if(!el)return;
  let v=Math.floor(820+Math.random()*60);el.textContent=v;
  setInterval(()=>{v+=Math.floor(Math.random()*7)-3;if(v<700)v=700;if(v>950)v=950;el.textContent=v},3200);
})();
