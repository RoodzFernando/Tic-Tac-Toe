window.prompt = jest.fn();

describe("testing availability in the DOM", () => {
  test("check the length of the Gameboard table", () => {
    document.body.innerHTML = `
    <p class="notification"></p>
    <div id="gameboard">
      <div id="0"></div>
      <div id="1"></div>
      <div id="2"></div>
      <div id="3"></div>
      <div id="4"></div>
      <div id="5"></div>
      <div id="6"></div>
      <div id="7"></div>
      <div id="8"></div>
    </div>
    <div class="restart-div"><button class="restart-btn">Restart</button></div>
    `;
    require('./index');
    window.prompt.mockClear();
    const gameboard = document.getElementById("gameboard");
    const elem = document.querySelectorAll("#gameboard > div");
    expect(elem).toHaveLength(9);
  });

  test("check for the presence of the restart button", () => {
     document.body.innerHTML = `
    <p class="notification"></p>
    <div class="restart-div"><button class="restart-btn">Restart</button></div>
    `;
    const restartBtn = document.getElementsByTagName("button");
    expect(restartBtn).toBeTruthy();
  });



  test("check when there is a draw", () => {
    document.body.innerHTML = `
    <p class="notification"></p>
    <div class="restart-div"><button class="restart-btn" style="display:none;">Restart</button></div>
    `;
    
    const playerFunc = require('./index');
    const { Gameboard, game, Player} = playerFunc;
    let currentPlayer = Player("Mike", "X");
    Gameboard.table = "XOXXOOOXO".split(""); // draw on the table
    
    const notification = document.querySelector(".notification");
    const restartBtn = document.querySelector(".restart-btn");
    expect(game.draw()).toBe(true); //test game draw
  });


   test("check when there is a win", () => {
    const playerFunc = require('./index');
    const { Gameboard, game, Player} = playerFunc;
    let currentPlayer = Player("Roodz", "X");
    Gameboard.table = ["X","X","X","O","O","X",6,7,8]; // a win on the table
    
    
    expect(game.checkWin()).toBe(true); //test game win
  });

});


