const Gameboard = {
    table: []

}

Gameboard.table = Array.from(Array(9).keys());
console.log(Gameboard.table)

const Player = (name, marker) => {

    // 123, 456, 789, 147, 258, 369 159, 357
    //nine divs, onclick check if its empty, put the player marker and then check for a win,
    // if all nine divs arent empty, then a draw

    return {name, marker}

}

const mike = Player("mike", "O");
const roodz = Player("roodz", "x")

console.log(roodz);