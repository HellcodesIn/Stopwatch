//constants
const time = document.getElementById("time");
const start = document.getElementById("start");
const pause = document.getElementById("pause");
const reset = document.getElementById("reset");


//variables that will change throughout the program
let StartTime = 0;
let Elapsed = 0;
let Current = 0;
let paused = true;
let interval = null;
let milsecs = 0;
let min = 0;
let secs = 0;

//event listeners
start.addEventListener("click", function(){
  if(paused){
    paused = false;
    StartTime = Date.now() - Elapsed;
    interval = setInterval(timUpd, 1);
    
  }
  
})
reset.addEventListener("click", function(){
  paused = true;
  clearInterval(interval);
  StartTime = 0;
  Elapsed = 0;
  Current = 0;
  time.textContent = "00:00:00";
});
pause.addEventListener("click", function(){
  if(!paused){
    paused = true;
    Elapsed = Date.now() - StartTime;
    clearInterval(interval);
  }
  
});





//the function to update time (it's binded with an interval to update time).
function timUpd(){
  Elapsed = Date.now() - StartTime
  milsecs = Math.floor((Elapsed / 10) % 100)
  secs = Math.floor((Elapsed / 1000) % 60);
  min = Math.floor((Elapsed / (1000*60) % 60));
  
  
  milsecs = digit(milsecs)
  min = digit(min)
  secs = digit(secs)
  time.textContent = min + ":" + secs + ":" + milsecs;
  
  function digit(unit){
    return(("0" + unit).length > 2 ? unit : "0" + unit)
  }
  
}
