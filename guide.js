'use strict';
const chapters=[...document.querySelectorAll('.chapter')];
function openHash(){const id=decodeURIComponent(location.hash.slice(1));const target=document.getElementById(id);if(target?.matches('.chapter'))target.open=true;}
openHash();window.addEventListener('hashchange',openHash);
document.querySelectorAll('nav a').forEach(a=>a.addEventListener('click',()=>{const target=document.querySelector(a.getAttribute('href'));if(target?.matches('.chapter'))target.open=true;}));
document.getElementById('expand').addEventListener('click',()=>chapters.forEach(x=>x.open=true));
document.getElementById('collapse').addEventListener('click',()=>chapters.forEach(x=>x.open=false));
let printState;
window.addEventListener('beforeprint',()=>{printState=chapters.map(x=>x.open);chapters.forEach(x=>x.open=true);});
window.addEventListener('afterprint',()=>{if(printState)chapters.forEach((x,i)=>x.open=printState[i]);});
document.getElementById('print').addEventListener('click',()=>window.print());
const viewer=document.getElementById('viewer'),large=document.getElementById('large-image');
if(typeof viewer.showModal==='function'){
 document.querySelectorAll('.zoom').forEach(link=>link.addEventListener('click',e=>{e.preventDefault();large.src=link.getAttribute('href');large.alt=link.dataset.caption;document.getElementById('viewer-caption').textContent=link.dataset.caption;viewer.showModal();document.body.classList.add('modal-open');}));
 document.getElementById('close-viewer').addEventListener('click',()=>viewer.close());
 viewer.addEventListener('click',e=>{if(e.target===viewer)viewer.close();});
 viewer.addEventListener('close',()=>document.body.classList.remove('modal-open'));
}
