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

const progress=document.querySelector("#progress");
//const progress=document.getElementById("#progress");
video.addEventListener("loadedmetadata",handleLoaded);
video.addEventListener("timeupdate",handleTimeUpdate);

function handleLoaded(){
    progress.max=video.duration;
}

function handleTimeUpdate(){
    //console.log(video.currentTime);
    //console.log(video.duration);
    progress.value=video.currentTime;   
}

progress.addEventListener("input",handleInput);

function handleInput(){
    video.currentTime=progress.value;
}