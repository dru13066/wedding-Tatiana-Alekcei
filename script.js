const intro=document.getElementById("intro");
const page=document.getElementById("page");
let opened=false;

function openInvitation(){
  if(opened)return;
  opened=true;
  intro.classList.add("is-opening");
  setTimeout(()=>page.classList.add("is-ready"),760);
  setTimeout(()=>document.body.classList.remove("is-locked"),1050);
  setTimeout(()=>intro.classList.add("is-gone"),1650);
}
intro.addEventListener("click",openInvitation);
intro.addEventListener("keydown",e=>{
  if(e.key==="Enter"||e.key===" "){e.preventDefault();openInvitation()}
});

/* Text on content screens appears once as the visitor scrolls to it. */
const revealItems=document.querySelectorAll(".reveal-on-scroll");
if("IntersectionObserver" in window){
  const revealObserver=new IntersectionObserver(entries=>{
    entries.forEach(entry=>{
      if(!entry.isIntersecting)return;
      entry.target.classList.add("is-visible");
      revealObserver.unobserve(entry.target);
    });
  },{threshold:.28,rootMargin:"0px 0px -8%"});
  revealItems.forEach(item=>revealObserver.observe(item));
}else{
  revealItems.forEach(item=>item.classList.add("is-visible"));
}

/* Calendar #2 is driven continuously by scroll and rises by exactly 80%
   of its own height. 1 and 3 never move. */
const section=document.getElementById("calendarSection");
const card=section.querySelector(".calendar-card");

function updateCalendar(){
  const rect=section.getBoundingClientRect();
  const vh=window.innerHeight;

  const start=vh*0.88;
  const finish=vh*0.16;
  const p=Math.max(0,Math.min(1,(start-rect.top)/(start-finish)));

  card.style.transform=`translateY(${-80*p}%)`;
}
addEventListener("scroll",updateCalendar,{passive:true});
addEventListener("resize",updateCalendar);
updateCalendar();

/* Fixed-layout countdown: every numeric cell has fixed width,
   so digits never push the timer sideways. */
const target=new Date("2026-10-24T15:00:00+03:00");
const days=document.getElementById("countDays");
const hours=document.getElementById("countHours");
const minutes=document.getElementById("countMinutes");
const seconds=document.getElementById("countSeconds");

const pad=n=>String(n).padStart(2,"0");
function tick(){
  let d=Math.max(0,target-Date.now());
  const dd=Math.floor(d/86400000); d-=dd*86400000;
  const hh=Math.floor(d/3600000); d-=hh*3600000;
  const mm=Math.floor(d/60000); d-=mm*60000;
  const ss=Math.floor(d/1000);

  days.textContent=String(dd).padStart(2,"0");
  hours.textContent=pad(hh);
  minutes.textContent=pad(mm);
  seconds.textContent=pad(ss);
}
tick();
setInterval(tick,1000);
