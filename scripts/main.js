const Gameboard = {
    table: [],
    winComs: [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8]
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]

}
Gameboard.table = Array.from(Array(9).keys());
// console.log(Gameboard.table)


const Player = (name, marker) => {

    // 123, 456, 789, 147, 258, 369 159, 357
    //nine divs, onclick check if its empty, put the player marker and then check for a win,
    // if all nine divs arent empty, then a draw

    return { name, marker }

}

function playerMove(index, playerMark) {
    Gameboard.table.splice(index, 1, playerMark);
}

// create the render function

function render() {
    let gameBoard = document.getElementById("gameboard");
    // loop through the gameboard array
    for (let i = 0; i < Gameboard.table.length; i++) {
        let newDiv = document.createElement("div");
        gameBoard.appendChild(newDiv);
        newDiv.textContent = Gameboard.table[i];
    }
}

// console.log(Gameboard.table.length);
const mike = Player("mike", "O");
const roodz = Player("roodz", "x")

playerMove(0, mike.marker);
playerMove(8, roodz.marker);
render();
// // console.log(mike.mark)

// console.log(Gameboard.table)