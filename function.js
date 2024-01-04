let count = 0;
let score = 0;
let ranHit = 0;
let time = prompt("Tell me the seconds you want the timer to have:");
let timer = time;

function increaseScore(){
    score+=10;
    document.querySelector("#scoreVal").textContent = score;
}

function makeBubble() {
    let clutter = "";

    for (let i = 1; i <= 187; i++) {
        clutter += `<div class="bubble">${Math.floor(Math.random() * 10)}</div>`;
    }
    document.querySelector('#panel_bottom').innerHTML = clutter;
}

function runTimer() {
    let notNegative = setInterval(function () {
        if (timer > 0) {
            timer--;
            document.querySelector("#timerVal").innerText = timer;
        } else {
            clearInterval(notNegative);
            document.querySelector("#panel_bottom").innerHTML = `<h1>Game Over</h1>`;
        }
    }, 1000);
}

function getNewHit() {
    ranHit = Math.floor(Math.random() * 10);
    document.querySelector("#hitVal").innerText = ranHit;
}

// document.querySelector("#panel_bottom").addEventListener("click",()=>{
//     let a = document.querySelector("#hitVal").innerText;
//     let b = document.querySelector(".bubble").innerText;
//     console.log(a);
//     console.log(b);

//     if(a == b){
//         count++;
//     }
//     console.log(count);
// })

document.querySelector("#panel_bottom").addEventListener("click",(detail)=>{
    let clickedNumber = parseInt(detail.target.textContent);
    if(ranHit === clickedNumber){
        increaseScore();
        makeBubble();
        getNewHit();
    }else{
        makeBubble();
});

runTimer();
makeBubble();
getNewHit();
