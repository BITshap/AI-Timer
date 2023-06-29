var timer = null;
var startTime;
var elapsedTime = 0;
var isTimerRunning = false; // Track if the timer is already running

function startTimer() {
  if (!isTimerRunning) {
    startTime = Date.now() - elapsedTime;
    timer = setInterval(function() {
      var currentTime = Date.now();
      elapsedTime = currentTime - startTime;
      updateTimer(elapsedTime);
    }, 10);
    isTimerRunning = true;
  }
}

function stopTimer() {
  if (isTimerRunning) {
    clearInterval(timer);
    isTimerRunning = false;
  }
}

// Stopwatch functionality
function resetTimer() {
  clearInterval(timer);
  elapsedTime = 0;
  updateTimer(elapsedTime);
}

function updateTimer(elapsedTime) {
  var milliseconds = Math.floor(elapsedTime % 1000 / 10);
  var seconds = Math.floor(elapsedTime / 1000) % 60;
  var minutes = Math.floor(elapsedTime / 60000) % 60;
  var hours = Math.floor(elapsedTime / 3600000);

  var timerDisplay = document.querySelector('.timer');
  timerDisplay.textContent = 
    (hours ? (hours > 9 ? hours : "0" + hours) : "00") + ":" +
    (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") + ":" +
    (seconds ? (seconds > 9 ? seconds : "0" + seconds) : "00") + "." +
    (milliseconds > 9 ? milliseconds : "0" + milliseconds);
}

// Event listeners for buttons
document.getElementById('startBtn').addEventListener('click', startTimer);
document.getElementById('stopBtn').addEventListener('click', stopTimer);
document.getElementById('resetBtn').addEventListener('click', resetTimer);
