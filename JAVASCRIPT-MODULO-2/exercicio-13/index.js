document.getElementById('play').addEventListener('click', function(ev) {
    const p1 = document.getElementById('p1').value || 'Jogador 1';
    const p2 = document.getElementById('p2').value || 'Jogador 2';
    
    document.querySelector('.game-container').style.display = 'flex';
    document.getElementById('currentPlayer').textContent = p1;
});