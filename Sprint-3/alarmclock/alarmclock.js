const body = document.querySelector("body");
let interval = null;
let timerRunning = false;

function setAlarm() {
  const timeRemaining = document.getElementById("timeRemaining");
  const alarmSet = document.getElementById("alarmSet");
 
  let totalSeconds = Number(alarmSet.value);
  
  function display() {
    if (totalSeconds === 0) {
      playAlarm();
      clearInterval(interval);
      body.classList.toggle('flash');
    }
    if (totalSeconds < 60) {
      const seconds = String(totalSeconds).padStart(2, "0");
      timeRemaining.textContent = `Time Remaining: 00:${seconds}`;
    } else {
      const minutes = String(Math.floor(totalSeconds / 60)).padStart(2, "0");
      const seconds = String(totalSeconds % 60).padStart(2, "0");
      timeRemaining.textContent = `Time Remaining: ${minutes}:${seconds}`;
    }
  }
  
  alarmSet.value = "";

  function decreaseSeconds() {
    totalSeconds -= 1;
    display();
  }

  display();
  
  interval = setInterval(decreaseSeconds, 1000);
  timerRunning = true;

  const pauseButton = document.getElementById("pause");
  pauseButton.addEventListener("click", () => {
    if (timerRunning) {
      clearInterval(interval);
      timerRunning = false;
      pauseButton.textContent = "Continue Alarm";
    } else {
      interval = setInterval(decreaseSeconds, 1000);
      timerRunning = true;
      pauseButton.textContent = "Pause Alarm";
    }

})

}



// DO NOT EDIT BELOW HERE

var audio = new Audio("alarmsound.mp3");

function setup() {
  document.getElementById("set").addEventListener("click", () => {
    setAlarm();
  });

  document.getElementById("stop").addEventListener("click", () => {
    pauseAlarm();
    body.classList.toggle('flash');
  });
}

function playAlarm() {
  audio.play();
}

function pauseAlarm() {
  audio.pause();
}

window.onload = setup;
