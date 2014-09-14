var Sudoku = ( function ( $ ) {
	var _instance, _game, defaultConfig = {};
	var createNineCellsMatrix;

	var init = function ( config ) {
		conf = $.extend( {}, defaultConfig, config);
		_game = new Game( conf );
		return {
			//Return a visual representation of the board
			gameBoard: function () {
				console.log("here");
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
		var gameBoard, $parentMatrix, $tr, $td;
		//Create parentMatrix and childMatrix
		$parentMatrix = $( '<table>' ).addClass('parentMatrix');
		$childMatrix = $( '<table>' ).addClass('childMatrix');

		//Generate Cells of Matrix
		createNineCellsMatrix($childMatrix, $tr, $td);
		createNineCellsMatrix($parentMatrix, $tr, $td, $childMatrix);

		$childMatrixCell = $( '<input>' );

		gameBoard = $parentMatrix;
		return gameBoard;
	};
	Game.prototype.reset = function () {
		//TODO
	};
	Game.prototype.solution = function () {
		//TODO
		return solution;
	};

	//Helper functions
	createNineCellsMatrix = function (parentMatrix, $tr, $td, childMatrix) {
			for (var i = 0; i < 3; i++) {
				// if (i = 1) {debugger};
				$tr = $( '<tr>' );
				parentMatrix.append($tr);
				for (var j = 0; j < 3; j++) {
					if (childMatrix) {
						$td = $( '<td>' ).append( childMatrix );
					};
					$tr.append($td);
				};
			};
		};
	//Singleton public methods
	return {
		//get the Singleton instance
		getInstance: function ( config ) {
			if (!_instance) {
			console.log('get instance');
				_instance = init( config );
			}
			return _instance;
		}
	};
})( jQuery );