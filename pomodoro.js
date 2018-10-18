const pauseButton = document.getElementById('pause');
const startButton = document.getElementById('start');
const resetButton = document.getElementById('reset');
let currentTime = parseInt(document.getElementById('clock').innerHTML);
window.open(startButton.addEventListener('click', countdown(currentTime)));
console.log(currentTime)

function countdown(mins) {
  let seconds = 60;
  let minutes = mins;
  function tick() {
    let clock = document.getElementById('clock');
    let currentMins = minutes - 1
    seconds--;
    clock.innerHTML = currentMins.toString() + ":" + (seconds < 10 ? "0" : "") + String(seconds);
    if (seconds > 0) {
      setTimeout(tick, 1000);
    }
    else {
      if (mins > 1) {
        countdown(mins - 1);
      }
    }
  }
  tick();
};

function startTimer() {
  startButton.addEventListener('click', countdown(currentTime));
}