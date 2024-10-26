let cells = Array.from(document.querySelectorAll('.grid div'));
let score = 0;
let speed = 200;
let timer = 60;
let timeInterval;
let gameLoop, foodIndex;
let snake = [2, 1, 0];
let direction = 1;
let gameActive = true;

const boardSize = 20;
const totalCells = boardSize * boardSize;
const grid = document.querySelector('.grid');  
const gameBoard = document.getElementById('gameBoard');
const scoreDisplay = document.getElementById('scoreboard');
const messageDisplay = document.getElementById('message'); 
const timerDisplay = document.getElementById('timer');
const resetButton = document.getElementById('Reset');

for (let i =0; i<totalCells; i++) {
    const cell = document.createElement('div');
    gameBoard.appendChild(cell);
}
cells = Array.from(document.querySelectorAll('.grid div'));

function startGame() {
    timeInterval = setInterval(() => {
    }, 1000);
}
function setupGame() {
    placeFood();
    timerDisplay.innerText = `Time: ${timer}`;
    scoreDisplay.innerText = `Score: ${score}`;
    cells[snake[0]].classList.add('snake');
    document.addEventListener('keydown', changeDirection);
    gameLoop = setInterval(moveSnake, speed);
    countdown();
}
