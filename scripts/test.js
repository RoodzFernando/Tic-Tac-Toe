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
    // const changeCurrentPlayer = (arr) => (currentPlayer === arr[0].name ? currentPlayer = arr[1].name : currentPlayer = arr[0].name);



    return {
        name,
        marker,
        // playerMove,
        // changeCurrentPlayer,
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
        // return { player1, player2 }
    },

    checkWin: function() {
        let result = false;
        let xs = '';
        for (let i = 0; i < Gameboard.table.length; i++) {
            if (Gameboard.table[i] == "X") {
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
        }
    },

    gameFinish: () => {
        gameboard.removeEventListener('click', gameClick);
        restartBtn.style.display = 'block';
    },
    playerMove: function(id) {
        Gameboard.table.splice(id, 1, currentPlayer === players[0].marker ? currentPlayer = players[1].marker : currentPlayer = players[0].marker);
        gameboard.innerHTML = '';
    },
}

function gameClick(e) {
    console.log(currentPlayer);
    if (e.target.textContent == ' ') {
        game.playerMove(e.target.id);
        render();
    }

    if (game.checkWin()) {
        notification.textContent = `${currentPlayer} wins`;
        game.gameFinish();
    } else if (game.draw()) {
        game.draw();
        // restartBtn.style.display = 'block';
    }
    // restartBtn.style.display = 'block';

    // changeCurrentPlayer(players);
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

const player1 = Player('Mike', 'X');
const player2 = Player('Roodz', 'O');
const players = [];
players.push(player1, player2);
currentPlayer = players[0];

console.log(player1.changeCurrentPlayer);