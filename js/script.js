const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const timerElement = document.getElementById('timer');
const recordElement = document.getElementById('record');

let seconds = 0;
let timerInterval;
let highestRecord = localStorage.getItem('highestRecord') || 0;

recordElement.textContent = `Recorde: ${highestRecord}`;

const jump = () => {
    mario.classList.add('jump');

    setTimeout(() => {
        mario.classList.remove('jump');
    }, 500);
}

const updateTimer = () => {
    seconds++;
    timerElement.textContent = `Tempo: ${seconds}`;

    if (seconds > highestRecord) {
        highestRecord = seconds;
        localStorage.setItem('highestRecord', highestRecord);
        recordElement.textContent = `Recorde: ${highestRecord}`;
    }
}

const stopGame = () => {
    clearInterval(timerInterval);
    mario.src = './images/game-over.png';
    mario.style.width = '75px';
    mario.style.marginLeft = '50px';
}

const loop = setInterval(() => {
    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');

    if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;

        stopGame();

        clearInterval(loop);
    }
}, 10);

document.addEventListener('keydown', jump);

timerInterval = setInterval(updateTimer, 1000);

const restartButton = document.getElementById('restart-button');
restartButton.addEventListener('click', () => {
    clearInterval(timerInterval);
    seconds = 0;
    timerInterval = setInterval(updateTimer, 1000);
});
