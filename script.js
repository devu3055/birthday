const timeline = [
  ["Feb 2024","First Chat","The message that quietly started everything."],
  ["18 Jul 2024","First Call","From typing on a screen to hearing your voice."],
  ["08 Aug 2024","First Meeting","The day an online connection became real."],
  ["14 Jul 2025","First Ride","Our first little adventure together."],
  ["20 Oct 2025","First Online Kiss","A tiny milestone that meant a lot."],
  ["03 Nov 2025","First Online Hug","Even distance couldn't stop us from feeling close."],
  ["28 Nov 2025","First Kiss","A day that somehow gave us so many firsts."],
  ["28 Nov 2025","First Selfie","Proof that this wasn't just a story on a screen."],
  ["28 Nov 2025","First Hug","The kind of hug you remember."],
  ["28 Nov 2025","First Gift","A little object, a very big memory."],
  ["28 Nov 2025","Our Private Moment","A deeply personal chapter we keep close to our hearts."],
  ["11 Dec 2025","First Palitana Jatra","A beautiful memory added to our story."],
  ["23 Jan 2026","You Confessed","The day your feelings finally had words."],
  ["28 Jan 2026","I Said Yes","And suddenly, “us” became official. ♡"]
];

const list = document.getElementById("timelineList");
timeline.forEach((e,i)=>{
  const item=document.createElement("article");
  item.className="event";
  item.innerHTML=`<div class="date">${e[0]}</div><h3>${e[1]}</h3><p>${e[2]}</p>`;
  list.appendChild(item);
});

const intro=document.getElementById("intro");
const site=document.getElementById("site");
document.getElementById("enterBtn").addEventListener("click",()=>{
  intro.style.transition="opacity .8s ease, transform .8s ease";
  intro.style.opacity="0"; intro.style.transform="scale(1.04)";
  setTimeout(()=>{intro.classList.add("hidden");site.classList.remove("hidden");window.scrollTo(0,0);},800);
  burst(20);
});

function burst(count=14){
  const holder=document.getElementById("hearts");
  for(let i=0;i<count;i++){
    const h=document.createElement("span");
    h.className="pop-heart";h.textContent=Math.random()>.2?"♡":"✦";
    h.style.left=(10+Math.random()*80)+"%";h.style.top=(55+Math.random()*30)+"%";
    h.style.setProperty("--x",(Math.random()*180-90)+"px");
    h.style.animationDelay=(Math.random()*.7)+"s";
    holder.appendChild(h);setTimeout(()=>h.remove(),3200);
  }
}

document.getElementById("wishBtn").addEventListener("click",()=>{
  document.getElementById("wishMessage").textContent="My wish is simple: more birthdays, more memories, and a forever that looks like us. ♡";
  burst(35);
});

const modal=document.getElementById("modal");
document.getElementById("surpriseBtn").addEventListener("click",()=>{modal.classList.remove("hidden");burst(30)});
document.getElementById("closeModal").addEventListener("click",()=>modal.classList.add("hidden"));
modal.addEventListener("click",e=>{if(e.target===modal)modal.classList.add("hidden")});

const music=document.getElementById("bgMusic");
const musicBtn=document.getElementById("musicBtn");
musicBtn.addEventListener("click",async()=>{
  if(music.paused){
    try{await music.play();musicBtn.textContent="♫ Pause our moment"}catch(e){
      musicBtn.textContent="♫ Add our-song.mp3 to play";
    }
  }else{music.pause();musicBtn.textContent="♫ Play our moment"}
});

document.addEventListener("mousemove",e=>{
  const hearts=document.querySelectorAll(".floating-heart");
  const x=(e.clientX/window.innerWidth-.5)*10,y=(e.clientY/window.innerHeight-.5)*10;
  hearts.forEach((h,i)=>h.style.margin=`${y*(i+1)*.25}px ${x*(i+1)*.25}px`);
});
