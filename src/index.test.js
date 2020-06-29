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
  const gameboard = document.getElementById("gameboard");
  const elem = document.querySelectorAll("#gameboard > div");
  expect(elem).toHaveLength(9);
});

test("check when there is a draw", () => {
    document.body.innerHTML = `
  <p class="notification"></p>
  <div id="gameboard">
    <div id="0">O</div>
    <div id="1">X</div>
    <div id="2">O</div>
    <div id="3">X</div>
    <div id="4">O</div>
    <div id="5">X</div>
    <div id="6">X</div>
    <div id="7">O</div>
    <div id="8">X</div>
  </div>
  <div class="restart-div"><button class="restart-btn">Restart</button></div>
  `;
  require('./index');
   const gameboard = document.getElementById("gameboard");
   const elem = document.querySelectorAll("#gameboard > div").innerHTML;
   expect(game.draw()).toBe("It's a draw!");
});

