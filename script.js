(function(){
var s=document.querySelectorAll('.slide'),d=document.querySelectorAll('.dots i'),i=0;

function go(n){s[i].classList.remove('on');d[i].classList.remove('on');i=n%s.length;s[i].classList.add('on');d[i].classList.add('on')}
d.forEach(function(x,k){x.onclick=function(){go(k)}});setInterval(function(){go(i+1)},4500);
var tr=document.getElementById('tr');tr.innerHTML+=tr.innerHTML;
var cur='all',q=document.getElementById('q'),cs=document.querySelectorAll('#batches .card');
function f(){var t=q.value.toLowerCase(),n=0;cs.forEach(function(c){var ok=(cur=='all'||c.dataset.c==cur)&&c.textContent.toLowerCase().indexOf(t)>-1;c.style.display=ok?'':'none';if(ok)n++});document.getElementById('none').style.display=n?'none':'block'}
function setC(v){cur=v;document.querySelectorAll('.chip').forEach(function(x){x.classList.toggle('on',x.dataset.c==v)});f()}
q.oninput=function(){if(q.value)location.hash='#courses';f()};
document.querySelectorAll('.chip').forEach(function(b){b.onclick=function(){setC(b.dataset.c)}});
document.querySelectorAll('aside a[data-f]').forEach(function(a){a.onclick=function(){setC(a.dataset.f)}});
var now=new Date(),y=now.getFullYear(),m=now.getMonth(),cal=document.getElementById('cal'),pick=null,slot=null;
document.getElementById('mon').textContent=now.toLocaleString('en-IN',{month:'long',year:'numeric'})+' · Sundays closed';
['S','M','T','W','T','F','S'].forEach(function(x){cal.innerHTML+='<span>'+x+'</span>'});
var first=new Date(y,m,1).getDay(),days=new Date(y,m+1,0).getDate();
for(var k=0;k<first;k++)cal.innerHTML+='<span></span>';
for(var n=1;n<=days;n++){var dt=new Date(y,m,n),b=document.createElement('button');b.textContent=n;b.disabled=dt<new Date(y,m,now.getDate())||dt.getDay()==0;
(function(b,n){b.onclick=function(){cal.querySelectorAll('button').forEach(function(x){x.classList.remove('on')});b.classList.add('on');pick=n}})(b,n);cal.appendChild(b)}
var sl=document.getElementById('sl');['10:00 AM','11:30 AM','01:00 PM','03:00 PM','04:30 PM','06:00 PM'].forEach(function(t){var b=document.createElement('button');b.textContent=t;b.onclick=function(){sl.querySelectorAll('button').forEach(function(x){x.classList.remove('on')});b.classList.add('on');slot=t};sl.appendChild(b)});
document.getElementById('cb').onclick=function(){var o=document.getElementById('ok');o.style.display='block';o.textContent=pick&&slot?'Callback requested for '+pick+' '+now.toLocaleString('en-IN',{month:'short'})+', '+slot+' IST ✓':'Please pick a date and a time slot.'};
var io=new IntersectionObserver(function(e){e.forEach(function(x){if(x.isIntersecting){x.target.classList.add('in');x.target.querySelectorAll('[data-n]').forEach(function(b){var t=+b.dataset.n,v=0,st=setInterval(function(){v+=Math.max(1,t/40);if(v>=t){v=t;clearInterval(st)}b.textContent=Math.round(v)+b.dataset.s},30)});io.unobserve(x.target)}})},{threshold:.15});
document.querySelectorAll('.rv').forEach(function(x){io.observe(x)});
})();