let timer = 60;
let score = 0;
let hitRnNum = 0;

function SetHit(){
  hitRnNum = Math.floor(Math.random()*10);
  document.querySelector("#hitVal").textContent = hitRnNum;
}
function makeBubble() {
  let clutter = "";
  for (let i = 1; i <= 700; i++) {
    let n = Math.floor(Math.random() * 10);
    clutter += `<div class="bubble">${n}</div>`;
  }

  document.querySelector(".pbtm").innerHTML = clutter;
}

function runtimer() {
  let timeInterval = setInterval(() => {
    timer--;
    document.querySelector("#timerVal").textContent = timer;
    if (timer === 1) {
      clearInterval(timeInterval);
      document.querySelector(".pbtm").innerHTML = `<h1>GAME OVAR</h1>`;
    }
  }, 1000);
}

function increseScore(){
    score += 10;
    document.querySelector("#getScore").textContent = score;
}

document.querySelector('.pbtm').addEventListener('click',(dets)=>{
  var clickednum = Number(dets.target.textContent);
  if(clickednum === hitRnNum){
    increseScore();
    makeBubble();
    SetHit();
  }
})

makeBubble();
runtimer();
SetHit();
