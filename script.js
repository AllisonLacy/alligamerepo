let counter = 0;
let timeLeft = 30;
let timerInterval;

const square = document.getElementById('square');
const counterDisplay = document.getElementById('counter');
const timerDisplay = document.getElementById('timer');
const resetButton = document.getElementById('reset');

function moveSquare() {
    const x = Math.random() * (window.innerWidth - 50);
    const y = Math.random() * (window.innerHeight - 50);
    square.style.left = `${x}px`;
    square.style.top = `${y}px`;
}

function startTimer() {
    timerInterval = setInterval(() => {
        if (timeLeft > 0) {
            timeLeft--;
            timerDisplay.textContent = `Time left: ${timeLeft}s`;
        } else {
            clearInterval(timerInterval);
            alert('Time is up!Your score is ' + counter);
        }
    }, 1000);
}

square.addEventListener('click', () => {
    counter++;
    counterDisplay.textContent = `Clicks: ${counter}`;
    moveSquare();
});

resetButton.addEventListener('click', () => {
    counter = 0;
    timeLeft = 30;
    counterDisplay.textContent = `Clicks: ${counter}`;
    timerDisplay.textContent = `Time left: ${timeLeft}s`;
    clearInterval(timerInterval);
    startTimer();
});

moveSquare();
startTimer();