const Gameboard = {
    table: [],
    winComs: [
        "012",
        "345",
        "678",
        "036",
        "147",
        "258",
        "048",
        "246",
    ]

}
const Player = (name, marker) => {

    // 123, 456, 789, 147, 258, 369 159, 357
    //nine divs, onclick check if its empty, put the player marker and then check for a win,
    // if all nine divs arent empty, then a draw


    checkWin = function() {
            let xs = [];
            for (let i = 0; i < Gameboard.table.length; i++) {
                if (Gameboard.table[i] == this.marker) {
                    xs.push(i)
                }
            }
            xs = xs.join("");
            // console.log(xs)

            Gameboard.winComs.forEach(word => {

                if (xs.includes(word[0]) && xs.includes(word[1]) && xs.includes(word[2])) {
                    console.log(`${this.name} wins`);
                }
            })

        },

        playerMove = function(index, playerMark) {
            Gameboard.table.splice(index, 1, playerMark);
        },

        draw = function() {

        }
    return { name, marker, checkWin }
    // return {
    //     // name,
    //     // marker,
    //     checkWin()
    // }
}
Gameboard.table = Array.from(Array(9).keys());
// console.log(Gameboard.table)










// create the render function

function render() {
    let gameBoard = document.getElementById("gameboard");
    // loop through the gameboard array
    for (let i = 0; i < Gameboard.table.length; i++) {
        let newDiv = document.createElement("div");
        gameBoard.appendChild(newDiv);
        if (typeof Gameboard.table[i] == "number") {
            newDiv.textContent = " ";
        } else {
            newDiv.textContent = Gameboard.table[i];
        }
    }
}

// console.log(Gameboard.table.length);
const mike = Player("mike", "O");
const roodz = Player("roodz", "X")

playerMove(0, roodz.marker);
playerMove(0, mike.marker);
playerMove(5, mike.marker);
playerMove(4, mike.marker);
playerMove(6, mike.marker);
playerMove(8, roodz.marker);

playerMove(1, roodz.marker);
playerMove(2, roodz.marker);
playerMove(3, roodz.marker);
playerMove(7, roodz.marker);
// console.log(mike);
// mike.checkWin();
render();
// // console.log(mike.mark)

// console.log(Gameboard.table)