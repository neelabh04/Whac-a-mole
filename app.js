const squares = document.querySelectorAll('.square');
const mole = document.querySelector('.mole');
const timeLeft = document.querySelector('#time-left');
const score = document.querySelector('#score');

let result = 0;
let hitPosition;
let currentTime = 60;

function randomSquare() {
    squares.forEach(squares => {
        squares.classList.remove('mole');
    })

    let randomSquare = squares[Math.floor(Math.random() * 9)];
    randomSquare.classList.add('mole');

    hitPosition = randomSquare.id
}

squares.forEach(square => {
    square.addEventListener('mousedown', () => {
        if(square.id == hitPosition) {
            result++;
            score.textContent = result;
            hitPosition = null;
        }
    })
});

function moveMole() {
    let timerId = null;
    timerId = setInterval(randomSquare, 1000);
}

moveMole();

function countDown() {
    currentTime--;
    timeLeft.textContent = currentTime;

    if(currentTime == 0) {
        clearInterval(countDownTimerId);
        alert('Game Over! Your final score is ' + result);
    }
}

let countDownTimerId = setInterval(countDown, 1000);