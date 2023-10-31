let currentPlayer = 'X';
let gameBoard = ['', '', '', '', '', '', '', '', ''];
let gameActive = true;

function makeMove(cell) {
    const index = Array.from(cell.parentNode.children).indexOf(cell);

    if (gameBoard[index] === '' && gameActive) {
        cell.textContent = currentPlayer;
        gameBoard[index] = currentPlayer;
        if (checkWin() || checkDraw()) {
            gameActive = false;
            document.querySelector('.message').textContent = checkWin() ? `${currentPlayer} wins!` : "It's a draw!";
        }
        currentPlayer = (currentPlayer === 'X') ? 'O' : 'X';
    }
}

function checkWin() {
    const winningCombinations = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ];

    for (let combination of winningCombinations) {
        const [a, b, c] = combination;
        if (gameBoard[a] && gameBoard[a] === gameBoard[b] && gameBoard[b] === gameBoard[c]) {
            return true;
        }
    }
    return false;
}

function checkDraw() {
    return gameBoard.every(cell => cell !== '');
}

function resetGame() {
    gameBoard = ['', '', '', '', '', '', '', '', ''];
    gameActive = true;
    document.querySelector('.message').textContent = '';
    currentPlayer = 'X';

    const cells = document.querySelectorAll('.cell');
    cells.forEach(cell => cell.textContent = '');
}
