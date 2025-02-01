let gameActive = true;
let currentPlayer = 'X';
const winCombinations = [
    [0,1,2],[3,4,5],[6,7,8],
    [0,3,6],[1,4,7],[2,5,8],
    [0,4,8],[2,4,6]
];

document.getElementById('play').addEventListener('click', function(ev) {
    const p1 = document.getElementById('p1').value || 'Jogador 1';
    const p2 = document.getElementById('p2').value || 'Jogador 2';
    document.querySelector('.game-container').style.display = 'flex';
    document.getElementById('currentPlayer').textContent = p1;
});

document.querySelector('.game-board').addEventListener('click', function (ev) {
    if (!gameActive) return;

    const cell = ev.target.closest('[data-cell]');
    if (!cell || cell.dataset.marked === 'true') return;

    cell.dataset.marked = 'true';
    cell.textContent = currentPlayer;
    cell.classList.add(currentPlayer.toLowerCase());

    const result = checkWin();

    if (result) {
        gameActive = false;
        if (result === 'draw') {
            document.getElementById('message').textContent = 'Empate!';
        } else {
            highlightWin(result.winningCells);
            const winnerName = result.winner === 'X' 
                ? document.getElementById('p1').value || 'Jogador 1' 
                : document.getElementById('p2').value || 'Jogador 2';
            document.getElementById('message').textContent = `${winnerName} venceu!!!`;
        }
    }

    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    const currentPlayerName = currentPlayer === 'X' 
        ? document.getElementById('p1').value || 'Jogador 1' 
        : document.getElementById('p2').value || 'Jogador 2';
    document.getElementById('currentPlayer').textContent = currentPlayerName;
});

// Funções fora do event listener
function checkWin() {
    const cells = document.querySelectorAll('[data-cell]');
    const marks = Array.from(cells).map(cell => cell.textContent);

    for (const combination of winCombinations) {
        const [a, b, c] = combination;
        if (marks[a] && marks[a] === marks[b] && marks[a] === marks[c]) {
            return {
                winner: marks[a],
                winningCells: combination
            };
        }
    }

    if (marks.every(mark => mark !== '')) {
        return 'draw';
    }
    return null;
}

function highlightWin(cellsIndexes) {
    const allCells = document.querySelectorAll('[data-cell]');
    cellsIndexes.forEach(index => {
        allCells[index].classList.add('winning-cell');
    });
}

// Função para reiniciar
document.querySelector('.restart-btn').addEventListener('click', function() {
    gameActive = true;
    currentPlayer = 'X';
    document.querySelectorAll('[data-cell]').forEach(cell => {
        cell.dataset.marked = 'false';
        cell.textContent = '';
        cell.classList.remove('x', 'o', 'winning-cell');
    });
    document.getElementById('message').textContent = '';
});