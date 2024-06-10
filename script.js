const cells = document.querySelectorAll('.cell');
const button = document.querySelector('.btn');
let counter = 0;
let title = document.querySelector('.title');

function startGame() {
    
    cells.forEach((cell) => {
        cell.innerHTML = '';
        cell.addEventListener('click', hasPlayer)
    })
    
}

startGame();

function hasPlayer(e) {
    if(counter % 2 == 0) {
        title.innerText = `Ход: Нолики`
        e.target.innerHTML = 'X';
    } else {
        title.innerText = `Ход: Крестики`;
        e.target.innerHTML = 'O';
    }

    if(isVictory()) {
        for(let cell of cells) {
            cell.removeEventListener('click', hasPlayer);
        }
        if(counter % 2 == 0) {
            alert('Победитель: Крестики');
        }  else {
            alert('Победитель: Нолики');
        }
      }
      else if(counter === 8){
        alert('Ничья');
    }
      counter++;
      e.target.removeEventListener('click', hasPlayer);
    }

function isVictory() {
    const combos = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    for(let combo of combos) {
        if(cells[combo[0]].innerHTML == cells[combo[1]].innerHTML && cells[combo[1]].innerHTML == cells[combo[2]].innerHTML && cells[combo[0]].innerHTML != '') {
            return true;
        }
    }
    return false;
}