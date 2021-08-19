const video= document.querySelector("#video");
const play= document.querySelector("#play");
const pause= document.querySelector("#pause");
const backward=document.querySelector("#backward");
const forkward=document.querySelector("#forward");

play.addEventListener("click",handlePlayer);
pause.addEventListener("click",handlePause);

function handlePlayer(){
    video.play();
    play.hidden=true;
    pause.hidden=false;
}

function handlePause(){
    video.pause();  
    pause.hidden=true; 
    play.hidden=false;
}

backward.addEventListener("click",handleBackward);
function handleBackward(){
    video.currentTime-=10;
}


forkward.addEventListener("click",handleForward);

function handleForward(){
    video.currentTime+=10;
}
