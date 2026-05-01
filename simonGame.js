let gameSeq=[];
let userSeq=[];
let level=0;
let started=false;
let h2=document.querySelector("h2");
let btns=["red","yellow","green","blue"];
let btn=document.querySelector(".button");
let highestScore=0;

document.addEventListener("keypress", function(){
    if(started==false){
        started=true;
        levelUp();
        

    }
})
function levelUp(){
    level++;
    userSeq=[];
    h2.innerText=`level ${level}`;

    let rndmIdx=Math.floor(Math.random()*3);
    let rndmClr=btns[rndmIdx];
    let rndmBtn=document.querySelector(`.${rndmClr}`);
    gameSeq.push(rndmClr);
    btnFlash(rndmBtn);
}
function btnFlash(btn){

    btn.classList.add("flash");
    setTimeout( function(){
        btn.classList.remove("flash");
    },250)
}
function btnPress(){
    let btn=this;
    btnFlash(btn);
    let btnClr=btn.getAttribute("id");
    userSeq.push(btnClr);
    checkSeq(userSeq.length-1);
}
function checkSeq(idx){
     if(userSeq[idx]===gameSeq[idx]){
        if(userSeq.length==gameSeq.length){
        setTimeout(levelUp,900);
        }
    }
    else{
        if(highestScore<level){
            highestScore=level;
        }
        h2.innerHTML=`Game over.! Your score was ${level} <br>
        Highest score=${highestScore}<br> press any key to restart the game`;
        reset();
    }
}
let allbtn=document.querySelectorAll(".btn");
for(btn of allbtn){
    btn.addEventListener("click",btnPress);
}
function reset(){
      gameSeq=[];
      userSeq=[];
      started=false;
      level=0;
}