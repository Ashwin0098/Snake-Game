let grid = 20;
let snake = [{x: 10, y: 10}];
let food =  {x: 5, y: 5};
let direction = 'right';
let score = 0;
let gameInterval;

const gameBoard = document.getElementById('gameBoard');
const scoreboard = document.getElementById('scoreboard');
const startButton = document.getElementById('start');

document.addEventListener('keydown', directionChange);
startButton.addEventListener('click', startGame);

function startGame() {
    snake = [{x: 10, y: 10}];
    food = generateFood();
    score = 0;
    scoreboard.textContent = score;
    clearInterval(gameInterval);
    gameInterval = setInterval(snakeMove, 150);
    startButton.disabled = true;
    console.log("Game Start");
}

function snakeMove() {
    const head = {...snake[0]};

    switch(direction) {
        case 'up': head.y--; break;
        case 'down': head.y++; break;
        case 'left': head.x--; break;
        case 'right': head.x++; break;

    }
    if (isCollision(head) || head.x < 0 || head.y > 19 || head.y < 0 || head.y > 19) {
        gameOver();
        return;
    }
    snake.unshift(head);
    if (head.x === food.x && head.y === food.y) {
        score++;
        scoreboard.textContent = score;
        food = generateFood;
    } else {
        snake.pop();
    }
    updateGameBoard;
    console.log("Snake Moves");
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
}

function generateFood() {
    let newFood;
    do {
        newFood = {
            x: Math.floor(Math.random() * 20),
            y: Math.floor(Math.random() * 20),
        };
     } while  (isCollision(newFood));
     return newFood;
}
