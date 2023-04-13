// A couple of global variables
var start, stop, reset, stopwatchBox;

// Grab the necessary elements from the DOM
start = document.getElementById("start");
stop = document.getElementById("stop");
reset = document.getElementById("reset");
stopwatchBox = document.getElementById("stopwatch-box");

// Add event listeners to both buttons
start.addEventListener("click", function() {
  stopwatch("start");
});

stop.addEventListener("click", function() {
  stopwatch("stop");
});
reset.addEventListener("click", function() {
  stopwatch("reset");
});

// Define a timer ID for the setInterval function
timerId = null;

// Create the stopwatch
 var hours = 0,
    minutes = 0,
    seconds = 0,
    display;
function stopwatch(command) {
 

  function makeTwoDigits(number) {
    // display double digits for numbers less than 10
    if (number < 10) {
      return "0" + number;
    }

    return number;
  }

  if (command === "start") {
    timerId = setInterval(function() {
      seconds++;
      if (seconds === 60) {
        seconds = 0;
        minutes++;
      }

      if (minutes === 60) {
        minutes = 0;
        hours++;
      }

      display =
        makeTwoDigits(hours) +
        ":" +
        makeTwoDigits(minutes) +
        ":" +
        makeTwoDigits(seconds);
      stopwatchBox.innerHTML = display;
       console.log(display);
    }, 1000);
  } else if (command === "stop") {
    clearInterval(timerId);
  }
  else if(command==="reset"){
    clearInterval(timerId);
    stopwatchBox.innerHTML="00:00:00";
    
  }
}