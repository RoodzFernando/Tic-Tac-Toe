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
    const changeCurrentPlayer = (arr) => (currentPlayer === arr[0].name ? currentPlayer = arr[1].name : currentPlayer = arr[0].name);

    const playerMove = function(id) {
        Gameboard.table.splice(id, 1, this.marker);
        document.querySelector('#gameboard').innerHTML = '';
    };

    return {
        name,
        marker,
        playerMove,
        changeCurrentPlayer,
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

    checkWin: function() {
        let result = false;
        let xs = '';
        for (let i = 0; i < Gameboard.table.length; i++) {
            if (Gameboard.table[i] == this.marker) {
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
        if (Gameboard.table.every((elem) => typeof elem === 'string')) {
            notification.textContent = 'It\'s a draw!';
        }
    },

    gameFinish: () => {
        gameboard.removeEventListener('click', gameClick);
        restartBtn.style.display = 'block';
    }
}

function gameClick(e) {
    console.log(currentPlayer);
    if (e.target.textContent == ' ') {
        currentPlayer.playerMove(e.target.id);
        render();
    }

    if (currentPlayer.game.checkWin()) {
        notification.textContent = `${currentPlayer.name} wins`;
        gameFinish();
    }

    if (currentPlayer.draw) {
        currentPlayer.draw();
        restartBtn.style.display = 'block';
    }

    currentPlayer.changeCurrentPlayer();
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




const player1 = Player('Mike', 'X');
const player2 = Player('Roodz', 'O');

// const player1 = Player(prompt('Player One\'s name: '), 'X');
// const player2 = Player(prompt('Player Two\'s name: '), 'O');
const players = [];

players.push(player1, player2);
let currentPlayer = players[0].name;
console.log(players);
// console.log(currentPlayer);
changeCurrentPlayer(players);


game.gameStart();
gameboard.addEventListener('click', gameClick);
// render();