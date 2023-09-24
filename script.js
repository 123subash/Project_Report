// script.js
let currentPlayer = 'X';
let isGameActive = true;

const cells = document.querySelectorAll('.cell');
const statusDisplay = document.querySelector('.status');

function checkWinner() {
    const winningCombinations = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ];

    for (let combo of winningCombinations) {
        const [a, b, c] = combo;
        if (cells[a].textContent && cells[a].textContent === cells[b].textContent && cells[a].textContent === cells[c].textContent) {
            isGameActive = false;
            return cells[a].textContent + ' wins!';
        }
    }

    if (![...cells].some(cell => !cell.textContent)) {
        isGameActive = false;
        return 'It\'s a tie!';
    }

    return null;
}

function makeMove(cell) {
    if (!isGameActive || cell.textContent !== '') return;

    cell.textContent = currentPlayer;
    const winner = checkWinner();

    if (winner) {
        statusDisplay.textContent = winner;
    } else {
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        statusDisplay.textContent = `Current Player: ${currentPlayer}`;
    }
}

function resetBoard() {
    cells.forEach(cell => cell.textContent = '');
    currentPlayer = 'X';
    isGameActive = true;
    statusDisplay.textContent = 'Current Player: X';
}

resetBoard();
