(function(){
var b=document.querySelector('.burger'),n=document.getElementById('nav');
if(b&&n)b.addEventListener('click',function(){var o=n.classList.toggle('open');b.setAttribute('aria-expanded',o?'true':'false');b.setAttribute('aria-label',o?'Close menu':'Open menu');});
function $(i){return document.getElementById(i);}
var f=$('cform');
if(f)f.addEventListener('submit',function(e){e.preventDefault();var fm=$('fm');
 if($('website').value)return;
 if(!f.checkValidity()){fm.hidden=false;fm.textContent='Please add your name, a valid email address and a message, and tick the agreement box.';return;}
 var body='Name: '+$('name').value+'\nEmail: '+$('email').value+'\nTopic: '+$('topic').value+'\n\n'+$('message').value;
 location.href='mailto:'+f.getAttribute('data-to')+'?subject='+encodeURIComponent(f.getAttribute('data-brand')+': '+$('topic').value)+'&body='+encodeURIComponent(body);
 fm.hidden=false;fm.textContent='Your email app should open with the message ready to send. If nothing happens, write to us directly at '+f.getAttribute('data-to')+'.';});
var c=$('cookie'),k=null;try{k=localStorage.getItem('ck_'+location.hostname);}catch(e){}
if(c&&!k)c.classList.add('show');
if(c)c.querySelectorAll('button').forEach(function(bt){bt.addEventListener('click',function(){try{localStorage.setItem('ck_'+location.hostname,bt.getAttribute('data-cookie'));}catch(e){}c.classList.remove('show');});});
var y=$('year');if(y)y.textContent=new Date().getFullYear();
})();
(function(){function $(i){return document.getElementById(i);}
function on(a,f){a.forEach(function(x){x.addEventListener('input',f);x.addEventListener('change',f);});f();}
function meter(n){var s='<div class="an-meter">';for(var i=1;i<=5;i++)s+='<i'+(i<=n?' class="on"':'')+'></i>';return s+'</div>';}
var wm=$('wr-m');if(wm){on([wm],function(){var m=parseFloat(wm.value)||0,l,t,n;if(m<1500){l='Water-resistant';t='Fine for a short shower; not truly waterproof.';n=1;}else if(m<5000){l='Light rain';t='Short walks in light rain. Expect soaking in a downpour.';n=2;}else if(m<10000){l='Everyday rain';t='Good for commuting and town use in normal rain.';n=3;}else if(m<20000){l='Hiking-ready';t='Comfortable for most hikes in steady rain.';n=4;}else{l='Storm-proof';t='Built for heavy, prolonged rain and mountain weather.';n=5;}
 $('wr-o').innerHTML='<strong>'+l+'</strong>'+meter(n)+'<p>'+t+'</p><p>Taped seams and a good hood matter as much as the number.</p>';});}
var bg=$('br-g');if(bg){var ba=$('br-a');on([bg,ba],function(){var g=parseFloat(bg.value)||0,need={low:5000,mid:10000,high:20000}[ba.value],n=g<5000?1:g<10000?2:g<15000?3:g<20000?4:5,ok=g>=need;
 $('br-o').innerHTML='<strong>'+(ok?'Breathable enough':'May feel clammy')+'</strong>'+meter(n)+'<p>'+(ok?'At '+g.toLocaleString()+' g it should keep up with this activity.':'For this activity, aim for about '+need.toLocaleString()+' g or more, or use vents.')+'</p>';});}
var rr=$('rl-r');if(rr){var rt=$('rl-t'),rw=$('rl-w');on([rr,rt,rw],function(){var r=rr.value,t=parseFloat(rt.value),w=rw.value,L=['Wicking base layer'];if(isNaN(t))t=10;if(t<8)L.push(t<0?'Insulated mid layer (synthetic)':'Light fleece');
 L.push(r==='light'&&w==='calm'?'Light water-resistant or packable shell':r==='heavy'?'Fully waterproof shell, 15,000 mm+ with a peaked hood':'Waterproof shell, 10,000 mm+');
 $('rl-o').innerHTML='<strong>'+L.length+' layers</strong><ol><li>'+L.join('</li><li>')+'</li></ol><p>'+(w==='strong'?'Cinch the hood and hem; wind drives rain into gaps.':t>15?'Warm rain: open vents early and skip the mid layer.':'Close cuffs before the rain gets heavy.')+'</p>';});}
})();
