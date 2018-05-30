const get = el => document.querySelector(el); //prevent overuse of document.querySelector

let i = Math.floor(Math.random() * 2) + 1; //randomises between 1 and 2
let score1 = 0,
    score2 = 0,
    dice1 = 0,
    dice2 = 0;
let currentPlayer = 'PLAYER1';
let score1store = 0;
let score2store = 0;

const diceNumber = () => { //generates random number between 1 and 6.
    return Math.floor(Math.random() * 6) + 1;
}

const gameWinner = () => { //determines winner of game based on score up to 100.
    if (score1 >= 100 && score2 <= 100) {
        get('#score1').textContent = 'Win!'; //player1 wins if their score is >= 100 and player2's isn't.
        score1 = 0;
        score1 = 0;
    } else if (score1 <= 100 && score2 >= 100) {
        get('#score2').textContent = 'Win!'; //player2 wins if player1 does not.
        score1 = 0;
        score2 = 0;
    }
}

const updateScore = (dice1, dice2) => {
    if (dice1 === dice2) {
        if (currentPlayer === 'PLAYER1') {
            get('#score1').textContent = 0;
            score1 = score1store;
            swapPlayer();
        } else {
            get('#score2').textContent = 0;
            score2 = score2store;
            swapPlayer();
        }
    } else if (('#score1').textContent === 'Win!' || ('#score2').textContent === 'Win!') {
        get('#score1').textContent = 0;
        get('#score2').textContent = 0;
    } else {
        if (currentPlayer === 'PLAYER1') {
            score1 += dice1 + dice2;
        } else {
            score2 += dice1 + dice2;
        }
    }
}

const rollBtn = () => {
    let dicenumber1 = diceNumber();
    let dicenumber2 = diceNumber();
    get('#dice1').src = 'img/dice' + dicenumber1 + '.png';
    get('#dice2').src = 'img/dice' + dicenumber2 + '.png';
    gameWinner();
    updateScore(dicenumber1, dicenumber2);
    get('#score1').textContent = score1;
    get('#score2').textContent = score2;
}

const swapPlayer = () => {
    if (currentPlayer === 'PLAYER1') {
        score1store = score1;
        get('#activeplayer').textContent = 'PLAYER2';
        currentPlayer = 'PLAYER2';
    } else {
        score2store = score2;
        get('#activeplayer').textContent = 'PLAYER1';
        currentPlayer = 'PLAYER1';
    }
}

get('#swap').addEventListener('click', swapPlayer); //call swapPlayer when swap button is clicked.
get('#roll').addEventListener('click', rollBtn); //call rollBtn when roll button is clicked.