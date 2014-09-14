var Sudoku = ( function ( $ ) {
	var _instance, _game, defaultConfig = {};

	var init = function ( config ) {
		conf = $.extend( {}, defaultConfig, config);
		_game = new Game( conf );
		return {
			//Return a visual representation of the board
			gameBoard: function () {
				return _game.buildBoard();
			},
			reset: function () {
				_game.clearBoard();
			},
			solution: function (){
				return _game.getSolution();
			}
		}
	};

	//Game initialization and logic
	var Game = function () {

	};
	Game.prototype.buildBoard = function () {
		//TODO
		return board;
	};
	Game.prototype.reset = function () {
		//TODO
	};
	Game.prototype.solution = function () {
		//TODO
		return solution;
	};

	//Singleton public methods
	return {
		//get the Singleton instance
		getInstance: function ( config ) {
			if (!_instance) {
				_instance = init( config );
			}
			return _instance;
		}
	};
})( jQuery );