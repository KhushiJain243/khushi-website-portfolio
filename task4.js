let time = 3600; 
let timer;

function updateDisplay(){

let minutes = Math.floor(time / 60);
let seconds = time % 60;

if(seconds < 10){
seconds = "0" + seconds;
}

document.getElementById("timer").innerText = minutes + ":" + seconds;

}

function startTimer(){

timer = setInterval(function(){

if(time > 0){
time--;
updateDisplay();
}
else{
clearInterval(timer);
alert("Time is up!");
}

},1000);

}

function pauseTimer(){
clearInterval(timer);
}

function resetTimer(){

clearInterval(timer);
time = 3600;
updateDisplay();

}

updateDisplay();
