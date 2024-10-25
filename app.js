let score = 0;
let speed = 200;
let timer = 30;
let gameLoop;
let snake = [2, 1, 0];
let direction = 1;

const boardSize = 20;
const totalCells = boardSize * boardSize;
const gameBoard = document.getElementById('gameBoard');
let scoreDisplay = document.getElementById('scoreboard');
const messageDisplay = document.getElementById('message'); 
const timerDisplay = document.getElementById('timer');
const resetButton = document.getElementById('Reset');
const grid = document.querySelector('.grid');  

for (let i =0; i<totalCells; i++) {
    const cell = document.createElement('div');
    gameBoard.appendChild(cell);
}
