const pauseButton = document.getElementById('pause');
const startButton = document.getElementById('start');
const resetButton = document.getElementById('reset');
const audio = new Audio('beethovens5th.mp3')
let currentTime = 1500;
let minutesNow = Math.floor(currentTime / 60);
let secondsNow = currentTime % 60;
let paused = false;
pauseButton.disabled = true;
resetButton.disabled = true;
startButton.onclick = startTimer;
pauseButton.onclick = pauseTimer;
resetButton.onclick = resetTimer;

//track time by seconds countdown takes sec, 25min = 1500sec, display in min:sec using remainder to get secs
//sec = time(sec)%60 min = time(sec)/60
function countdown(secs) {
  if (currentTime > 0) {
    let seconds = document.getElementById('seconds');
    let minutes = document.getElementById('minutes');
    if (paused === false) {
      currentTime--;
      if (parseInt(seconds.innerHTML) <= 10 && parseInt(seconds.innerHTML) != 0) {
        seconds.innerHTML = '0' + String(currentTime % 60);
      }
      else {
        seconds.innerHTML = String(currentTime % 60);
      };
      minutes.innerHTML = String(Math.floor(currentTime / 60));
    }
  }
  if (currentTime === 0) {
    audio.play();
  }
};

function pause() {
  paused = true;
  clearInterval(timer);
};

function reset() {
  clearInterval(timer);
  currentTime = 1500;
  document.getElementById('minutes').innerHTML = String(Math.floor(currentTime / 60));
  document.getElementById('seconds').innerHTML = String(currentTime % 60) + '0';
};

function startTimer() {
  timer = setInterval(countdown, 1000);
  paused = false;
  startButton.disabled = true;
  pauseButton.disabled = false;
  resetButton.disabled = false;
  countdown(currentTime);
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