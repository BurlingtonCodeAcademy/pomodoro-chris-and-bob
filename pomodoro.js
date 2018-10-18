const pauseButton = document.getElementById('pause');
const startButton = document.getElementById('start');
const resetButton = document.getElementById('reset');
let currentTime = parseInt(document.getElementById('clock').innerHTML);
let paused = false;
console.log(currentTime)
window.open(startButton.onclick = startTimer);
window.open(pauseButton.disabled = true);
window.open(resetButton.disabled = true);
window.open(pauseButton.onclick = pauseTimer);
window.open(resetButton.onclick = resetTimer);

function countdown(mins) {
  if (paused === false) {
    let seconds = 59;
    let minutes = mins;
    function tick() {
      let clock = document.getElementById('clock');
      let currentMins = minutes - 1

      clock.innerHTML = currentMins.toString() + ":" + (seconds < 10 ? "0" : "") + String(seconds);
      if (seconds >= 0) {
        seconds--;
        timer = setTimeout(tick, 1000);
      }
      else {
        if (mins > 1) {
          countdown(mins - 1);
        }
      }
    }
    tick();
  }
};

function pause() {
  paused = true;
  clearTimeout(timer);
  let timeNow = parseInt(document.getElementById('clock').innerHTML);
  let secondsNow = document.getElementById('seconds');
  currentTime = (timeNow + 1) + secondsNow;
  console.log(currentTime)
};

function reset() {
  pause();
  document.getElementById('clock').innerHTML = '25:00';
  currentTime = 25;
};

function startTimer() {
  paused = false;
  startButton.disabled = true;
  countdown(currentTime);
  pauseButton.disabled = false;
  resetButton.disabled = false;
};

function pauseTimer() {
  pauseButton.disabled = true;
  startButton.disabled = false;
  pause();
};

function resetTimer() {
  pauseButton.disabled = true;
  startButton.disabled = false;
  resetButton.disabled = true;
  reset();
};

