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
Gameboard.table = Array.from(Array(9).keys());
// console.log(Gameboard.table)


const Player = (name, marker) => {

    // 123, 456, 789, 147, 258, 369 159, 357
    //nine divs, onclick check if its empty, put the player marker and then check for a win,
    // if all nine divs arent empty, then a draw

    return { name, marker }

}

function checkWin(){
    let xs = [];
    for(let i = 0; i < Gameboard.table.length; i++){
        if(Gameboard.table[i] == "X"){
            xs.push(i)
          }
    }
    xs = xs.join("");
    console.log(xs)

    Gameboard.winComs.forEach(word => {

        if(xs.includes(word[0]) && xs.includes(word[1]) && xs.includes(word[2])){
            return true;
        }
    })

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
const roodz = Player("roodz", "X")

playerMove(0, roodz.marker);
playerMove(4, roodz.marker);
playerMove(8, roodz.marker);
playerMove(2, roodz.marker);

checkWin();
render();
// // console.log(mike.mark)

// console.log(Gameboard.table)