/** *** */ (function (modules) { // webpackBootstrap
/** *** */ 	// The module cache
/** *** */ 	const installedModules = {};
  /** *** */
  /** *** */ 	// The require function
  /** *** */ 	function __webpack_require__(moduleId) {
    /** *** */
    /** *** */ 		// Check if module is in cache
    /** *** */ 		if (installedModules[moduleId]) {
      /** *** */ 			return installedModules[moduleId].exports;
      /** *** */ 		}
    /** *** */ 		// Create a new module (and put it into the cache)
    /** *** */ 		const module = installedModules[moduleId] = {
      /** *** */ 			i: moduleId,
      /** *** */ 			l: false,
      /** *** */ 			exports: {},
      /** *** */ 		};
    /** *** */
    /** *** */ 		// Execute the module function
    /** *** */ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
    /** *** */
    /** *** */ 		// Flag the module as loaded
    /** *** */ 		module.l = true;
    /** *** */
    /** *** */ 		// Return the exports of the module
    /** *** */ 		return module.exports;
    /** *** */ 	}
  /** *** */
  /** *** */
  /** *** */ 	// expose the modules object (__webpack_modules__)
  /** *** */ 	__webpack_require__.m = modules;
  /** *** */
  /** *** */ 	// expose the module cache
  /** *** */ 	__webpack_require__.c = installedModules;
  /** *** */
  /** *** */ 	// define getter function for harmony exports
  /** *** */ 	__webpack_require__.d = function (exports, name, getter) {
    /** *** */ 		if (!__webpack_require__.o(exports, name)) {
      /** *** */ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
      /** *** */ 		}
    /** *** */ 	};
  /** *** */
  /** *** */ 	// define __esModule on exports
  /** *** */ 	__webpack_require__.r = function (exports) {
    /** *** */ 		if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
      /** *** */ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
      /** *** */ 		}
    /** *** */ 		Object.defineProperty(exports, '__esModule', { value: true });
    /** *** */ 	};
  /** *** */
  /** *** */ 	// create a fake namespace object
  /** *** */ 	// mode & 1: value is a module id, require it
  /** *** */ 	// mode & 2: merge all properties of value into the ns
  /** *** */ 	// mode & 4: return value when already ns object
  /** *** */ 	// mode & 8|1: behave like require
  /** *** */ 	__webpack_require__.t = function (value, mode) {
    /** *** */ 		if (mode & 1) value = __webpack_require__(value);
    /** *** */ 		if (mode & 8) return value;
    /** *** */ 		if ((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
    /** *** */ 		const ns = Object.create(null);
    /** *** */ 		__webpack_require__.r(ns);
    /** *** */ 		Object.defineProperty(ns, 'default', { enumerable: true, value });
    /** *** */ 		if (mode & 2 && typeof value !== 'string') for (const key in value) __webpack_require__.d(ns, key, ((key) => value[key]).bind(null, key));
    /** *** */ 		return ns;
    /** *** */ 	};
  /** *** */
  /** *** */ 	// getDefaultExport function for compatibility with non-harmony modules
  /** *** */ 	__webpack_require__.n = function (module) {
    /** *** */ 		const getter = module && module.__esModule
    /** *** */ 			? function getDefault() { return module.default; }
    /** *** */ 			: function getModuleExports() { return module; };
    /** *** */ 		__webpack_require__.d(getter, 'a', getter);
    /** *** */ 		return getter;
    /** *** */ 	};
  /** *** */
  /** *** */ 	// Object.prototype.hasOwnProperty.call
  /** *** */ 	__webpack_require__.o = function (object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
  /** *** */
  /** *** */ 	// __webpack_public_path__
  /** *** */ 	__webpack_require__.p = '';
  /** *** */
  /** *** */
  /** *** */ 	// Load entry module and return exports
  /** *** */ 	return __webpack_require__(__webpack_require__.s = './src/index.js');
/** *** */ }({

  /***/ './src/index.js':
  /*! **********************!*\
  !*** ./src/index.js ***!
  \********************* */
  /*! no static exports found */
  /***/ (function (module, exports) {
    eval("// import styles from './styles.css';\r\n\r\nconst gameboard = document.querySelector('#gameboard');\r\nconst notification = document.querySelector('.notification');\r\nconst restartBtn = document.querySelector('.restart-btn');\r\n\r\nconst Gameboard = {\r\n  table: Array.from(Array(9).keys()),\r\n  winComs: ['012', '345', '678', '036', '147', '258', '048', '246'],\r\n};\r\n\r\nconst Player = (name, marker) => ({\r\n  name,\r\n  marker,\r\n});\r\n\r\nfunction gameClick(e) {\r\n  game.changeCurrentPlayer();\r\n\r\n  if (e.target.textContent === ' ') {\r\n    game.playerMove(e.target.id);\r\n    render();\r\n  }\r\n\r\n  if (game.checkWin()) {\r\n    notification.textContent = `${currentPlayer.name} wins`;\r\n    game.gameFinish();\r\n  } else if (game.draw()) {\r\n    game.draw();\r\n  }\r\n}\r\n\r\nfunction render() {\r\n  for (let i = 0; i < Gameboard.table.length; i += 1) {\r\n    const newDiv = document.createElement('div');\r\n    newDiv.setAttribute('id', i);\r\n    gameboard.appendChild(newDiv);\r\n    if (typeof Gameboard.table[i] === 'number') {\r\n      newDiv.textContent = ' ';\r\n    } else {\r\n      newDiv.textContent = Gameboard.table[i];\r\n    }\r\n  }\r\n}\r\n\r\nconst game = {\r\n  gameStart: () => {\r\n    Gameboard.table = Array.from(Array(9).keys());\r\n    const elemDiv = document.querySelectorAll('#gameboard > div');\r\n    for (const elem of elemDiv) {\r\n      elem.remove();\r\n    }\r\n    notification.innerHTML = '';\r\n    restartBtn.style.display = 'none';\r\n    render();\r\n    gameboard.addEventListener('click', gameClick);\r\n  },\r\n  changeCurrentPlayer: () => {\r\n    const [player1, player2] = players;\r\n    if (currentPlayer.name === player1.name) {\r\n      currentPlayer = player2;\r\n      notification.textContent = `${player1.name}'s turn(${player1.marker})`;\r\n    } else {\r\n      currentPlayer = player1;\r\n      notification.textContent = `${player2.name}'s turn(${player2.marker})`;\r\n    }\r\n    return currentPlayer;\r\n  },\r\n\r\n  checkWin() {\r\n    let result = false;\r\n    let xs = '';\r\n    for (let i = 0; i < Gameboard.table.length; i += 1) {\r\n      if (Gameboard.table[i] === currentPlayer.marker) {\r\n        xs += i.toString();\r\n      }\r\n    }\r\n\r\n    Gameboard.winComs.forEach((word) => {\r\n      if (\r\n        xs.includes(word[0])\r\n        && xs.includes(word[1])\r\n        && xs.includes(word[2])\r\n      ) {\r\n        result = true;\r\n      }\r\n    });\r\n    return result;\r\n  },\r\n\r\n  draw() {\r\n    if (!this.checkWin()\r\n      && Gameboard.table.every((elem) => typeof elem === 'string')\r\n    ) {\r\n      notification.textContent = \"It's a draw!\";\r\n      restartBtn.style.display = 'block';\r\n      return true;\r\n    }\r\n    return false;\r\n  },\r\n\r\n  gameFinish: () => {\r\n    gameboard.removeEventListener('click', gameClick);\r\n    restartBtn.style.display = 'block';\r\n  },\r\n  playerMove(id) {\r\n    Gameboard.table.splice(id, 1, currentPlayer.marker);\r\n    gameboard.innerHTML = '';\r\n  },\r\n};\r\n\r\ngame.gameStart();\r\ngameboard.addEventListener('click', gameClick);\r\nrestartBtn.addEventListener('click', game.gameStart);\r\n\r\nconst player1 = Player(prompt('Player 1 name:'), 'X');\r\nconst player2 = Player(prompt('Player 2 name:'), 'O');\r\nconst players = [player1, player2];\r\nlet currentPlayer = players[0];\r\n\r\nmodule.exports = {\r\n  game, Gameboard, Player, gameClick, render,\r\n};\r\n\n\n//# sourceURL=webpack:///./src/index.js?");
    /***/ }),

/** *** */ }));
