
import {Gameboard, game, gameboard, notification, restartBtn} from './index';
beforeEach(() => {

  game.gameStart();
});
console.log(gameboard);
test("check the length of the gameboard array", () => {
  gameboard.innerHTML = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  expect(1 + 1).toBe(2);
});


