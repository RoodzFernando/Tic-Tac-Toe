
window.prompt = jest.fn();

describe('testing availability in the DOM', () => {
  test('check the length of the Gameboard table', () => {
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
    const gameboard = document.getElementById('gameboard');
    const elem = document.querySelectorAll('#gameboard > div');
    expect(elem).toHaveLength(9);
  });

  test('check for the presence of the restart button', () => {
    document.body.innerHTML = `
    <p class="notification"></p>
    <div class="restart-div"><button class="restart-btn">Restart</button></div>
    `;
    const restartBtn = document.getElementsByTagName('button');
    expect(restartBtn).toBeTruthy();
  });

  test('check when there is a draw', () => {
    document.body.innerHTML = `
    <p class="notification"></p>
    <div class="restart-div"><button class="restart-btn" style="display:none;">Restart</button></div>
    `;

    const playerFunc = require('./index');
    const { Gameboard, game, Player } = playerFunc;
    const currentPlayer = Player('Mike', 'X');
    Gameboard.table = 'XOXXOOOXO'.split('');

    const notification = document.querySelector('.notification');
    const restartBtn = document.querySelector('.restart-btn');
    expect(game.draw()).toBe(true);
  });

  test('check when there is a win', () => {
    const playerFunc = require('./index');
    const { Gameboard, game, Player } = playerFunc;
    const currentPlayer = Player('Roodz', 'X');
    Gameboard.table = ['X', 'X', 'X', 'O', 'O', 'X', 6, 7, 8];
    expect(game.checkWin()).toBe(true);
  });

  test('check when the player1 has won', () => {
     document.body.innerHTML = `
    <p class="notification"></p>
    <div class="restart-div"><button class="restart-btn" style="display:none;">Restart</button></div>
    `;
    const playerFunc = require('./index');
    const { Gameboard, game, Player } = playerFunc;
    const notif = document.getElementsByClassName("notification");
    let player1 = Player("Roodz", "X");
    let player2 = Player("Marvellous", "O");
    const currentPlayer = player1;
    for(let i = 0; i < Gameboard.table.length; i++) {
      if (i % 2 == 0) {
        Gameboard.table[i] = player1.marker;
      } else {
        Gameboard.table[i] = player2.marker;
      }
    }
    notif.textContent = `${currentPlayer.name} wins`;
    expect(Gameboard.table).toEqual([
      'X', 'O', 'X',
      'O', 'X', 'O',
      'X', 'O', 'X'
    ]);
  });

  test("Check each players' turn", () => {
      document.body.innerHTML = `
    <p class="notification"></p>
    <div id="gameboard" class="gameboard"></div>
    <div class="restart-div"><button class="restart-btn" style="display:none;">Restart</button></div>
    `;
    const playerFunc = require('./index');
    const { game, Player, gameClick } = playerFunc;
    const notif = document.getElementsByClassName("notification");
    let player1 = Player("Roodz", "X");
    let player2 = Player("Marvellous", "O");
    const players = [player1, player2];
    let currentPlayer = player1;
    let gameboard = document.getElementById("gameboard");
    game.gameStart();
    game.changeCurrentPlayer();
    expect(currentPlayer).toEqual(player2);
  });

  test("check the initial state of the Gameboard on gameStart", () => {
    const playerFunc = require('./index');
    const {Gameboard, game} = playerFunc;
    game.gameStart()
    expect(Gameboard.table).toEqual([0,1,2,3,4,5,6,7,8]);
  });
});
