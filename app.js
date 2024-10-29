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

console.log("SNAKE GAME!");

document.addEventListener("DOMContentLoaded", () => {
    const gameBoard = document.getElementById('gameBoard');
    for(let i = 0; i < totalCells; i++) {
        const cell = document.createElement('div');
        gameBoard.appendChild(cell);
    }
})
cells = Array.from(document.querySelectorAll('.grid div'));

function startGame() {
    timeInterval = setInterval(() => {
    }, 1000);
    console.log("Countdown Starts");
}

function setupGame() {
    placeFood();
    timerDisplay.innerText = `Time: ${timer}`;
    scoreDisplay.innerText = `Score: ${score}`;
    cells[snake[0]].classList.add('snake');
    document.addEventListener('keydown', changeDirection);
    gameLoop = setInterval(moveSnake, speed);
    countdown();
    drawSnake();
    drawFood();
    console.log("Setup Game");
}

function drawSnake() {
    snake.forEach(index => cells[index].classList.add('snake'));
    console.log("Draw Snake");
}

function drawFood() {
    let randomIndex;
    do {
        randomIndex = Math.floor(Math.random() * totalCells);
    } while (cells[randomIndex].classList.contains('snake'));
    cells[randomIndex].classList.add('food');
    console.log("Draw Food");
}