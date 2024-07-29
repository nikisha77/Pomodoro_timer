let startTime = 25 * 60;  
let time = startTime;     
let timerInterval;        

const countDown = document.getElementById('timer');
const startButton = document.getElementById('start');
const stopButton = document.getElementById('stop');
const resetButton = document.getElementById('reset');

function updateCountDown() {
    const min = Math.floor(time / 60);
    let sec = time % 60;


    sec = sec < 10 ? '0' + sec : sec;

    countDown.innerHTML = `${min}:${sec}`;
    time--;

   
    if (time < 0) {
        clearInterval(timerInterval);
        countDown.innerHTML = '0:00';
        countDown.innerHTML='Great job ! ';
    }
}

function startTimer() {
    if (!timerInterval) {
        timerInterval = setInterval(updateCountDown, 1000);
    }
}

function stopTimer() {
    clearInterval(timerInterval);
    timerInterval = null;
}

function resetTimer() {
    stopTimer()
    time = startTime;
    countDown.innerHTML = '25:00';  
}

startButton.addEventListener('click', startTimer);
stopButton.addEventListener('click', stopTimer);
resetButton.addEventListener('click', resetTimer);


countDown.innerHTML = '25:00';
