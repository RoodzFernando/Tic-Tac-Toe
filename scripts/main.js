const gameboard = document.querySelector('#gameboard');
const notification = document.querySelector('.notification');
const restartBtn = document.querySelector('.restart-btn');



const Gameboard = {
    table: Array.from(Array(9).keys()),
    winComs: [
        '012',
        '345',
        '678',
        '036',
        '147',
        '258',
        '048',
        '246',
    ],

};

const Player = (name, marker) => {
    return {
        name,
        marker,
    };
};

const game = {
    gameStart: () => {

        Gameboard.table = Array.from(Array(9).keys());
        gameboard.innerHTML = '';
        notification.innerHTML = '';
        restartBtn.style.display = 'none';
        render();
        gameboard.addEventListener('click', gameClick);
    },
    changeCurrentPlayer: () => {
        if (currentPlayer === players[0]) {
            currentPlayer = players[1];
        } else {
            currentPlayer = players[0];
        };
    },


    checkWin: function() {
        let result = false;
        let xs = '';
        for (let i = 0; i < Gameboard.table.length; i++) {
            if (Gameboard.table[i] == currentPlayer.marker) {
                xs += i.toString();
            }
        }

        Gameboard.winComs.forEach((word) => {
            if (xs.includes(word[0]) && xs.includes(word[1]) && xs.includes(word[2])) {
                result = true;
            }
        });
        return result;
    },


    draw: function() {
        if (!this.checkWin() && Gameboard.table.every((elem) => typeof elem === 'string')) {
            notification.textContent = 'It\'s a draw!';
            restartBtn.style.display = 'block';
        }
    },

    gameFinish: () => {
        gameboard.removeEventListener('click', gameClick);
        restartBtn.style.display = 'block';
    },
    playerMove: function(id) {
        Gameboard.table.splice(id, 1, currentPlayer.marker);
        gameboard.innerHTML = '';
    },
}

function gameClick(e) {

    game.changeCurrentPlayer();

    if (e.target.textContent == ' ') {
        game.playerMove(e.target.id);
        render();
    }

    if (game.checkWin()) {
        notification.textContent = `${currentPlayer.name} wins`;
        game.gameFinish();
    } else if (game.draw()) {
        game.draw();
    }
}

function render() {

    for (let i = 0; i < Gameboard.table.length; i++) {
        const newDiv = document.createElement('div');
        newDiv.setAttribute('id', i);
        gameboard.appendChild(newDiv);
        if (typeof Gameboard.table[i] === 'number') {
            newDiv.textContent = ' ';
        } else {
            newDiv.textContent = Gameboard.table[i];
        }
    }
}



game.gameStart();
gameboard.addEventListener('click', gameClick);
restartBtn.addEventListener('click', game.gameStart);

const player1 = Player(prompt("Player 1 name:"), 'X');
const player2 = Player(prompt("Player 2 name:"), 'O');
const players = [player1, player2];
let currentPlayer = players[0];