const boardSize = 20;
let snake = [{x: 200, y: 200}];
let food =  {x: Math.floor(Math.random() * 20) *20, y: Math.floor(Math.random() * 20) *20};
let direction = 'right';
let score = 0;
let gameInterval;
let paused = false;

const gameBoard = document.getElementById('gameboard');
const scoreboard = document.getElementById('scoreboard');
const message = document.getElementById('message')
const startButton = document.getElementById('startButton');
const pauseButton = document.getElementById('pauseButton');
const resetButton = document.getElementById('resetButton');

document.addEventListener('keydown', directionChange);
startButton.addEventListener('click', startGame);
pauseButton.addEventListener('click', pauseGame);
resetButton.addEventListener('click', resetGame);

function startGame() {
    snake = [{x: 10, y: 10}];
    food = generateFood();
    score = 0;
    direction = 'right';
    scoreboard.textContent = "Score:", score;
    clearInterval(gameInterval);
    gameInterval = setInterval(snakeMove, 150);
    startButton.disabled = true;
    pauseButton.textContent = 'Pause Game';
    console.log("Game Start");
}

function updateMessage() {
    if (gameOver) {
        message.textContent = "Game Over!"
    }
}
function snakeMove() {
    const head = {...snake[0]};
    switch(direction) {
        case 'up': head.y--; break;
        case 'down': head.y++; break;
        case 'left': head.x--; break;
        case 'right': head.x++; break;
    }
    if (snakeCollision(head) || head.x < 0 || head.x > 19 || head.y < 0 || head.y > 19) {
        gameOver();
        console.log("Snake Collision");
        return; 
    }
    snake.unshift(head);
    if (head.x === food.x && head.y === food.y) {
        score++;
        scoreboard.textContent = score;
        food = generateFood();
    } else {
        snake.pop();
    }
    updateGameBoard();
    console.log("Snake Moving");
}

function directionChange(event) {
    const keyPressed = event.key;
    const oppositeDirections = {
        'ArrowUp': 'down', 'ArrowDown': 'up', 'ArrowLeft': 'right', 'ArrowRight': 'left'
    };
    if (oppositeDirections[keyPressed] !== direction) {
        switch(keyPressed) {
            case 'ArrowUp': direction = 'up'; break;
            case 'ArrowDown': direction = 'down'; break;
            case 'ArrowLeft': direction = 'left'; break;
            case 'ArrowRight': direction = 'right'; break;
        }
    }
    console.log("Direction change");
}

function generateFood() {
    let newFood;
    do {
        newFood = {
            x: Math.floor(Math.random() * 20),
            y: Math.floor(Math.random() * 20),
        };
     } while (snakeCollision(newFood));
     return newFood; 
}

function snakeCollision(head) {
    return snake.some(segment => segment.x === head.x && segment.y === head.y);
}

function updateGameBoard() {
    gameBoard.innerHTML = '';
    snake.forEach(segment => {
    const snakeEls = document.createElement('div');
    snakeEls.style.gridRowStart = segment.y + 1;
    snakeEls.style.gridColumnStart = segment.x + 1;
    snakeEls.classList.add('snakebody');
    gameBoard.appendChild(snakeEls);
    console.log("Create snake element");
    });
    const foodEls = document.createElement('div');
    foodEls.style.gridRowStart = food.y + 1;
    foodEls.style.gridColumnStart = food.x + 1;
    foodEls.classList.add('food');
    gameBoard.appendChild(foodEls);
    console.log("Create food element");
}
