var Sudoku = ( function ($) {
	var _instance, _game, defaultConfig = {};

	var init = function (config) {
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
		this.$cellMatrix = {};
	};
	Game.prototype.buildBoard = function () {
		//make table
		var N = 9;
		var $tr, $td, sectIDi, sectIDj;
		var $table = $('<table>').addClass('parent-matrix');
			//make 9 rows
			for (var i = 0; i < N ; i++) {
				$tr = $('<tr>');
				this.$cellMatrix[i] = {};
				//for each row make 9 input 
				for (var j = 0; j < N ; j++) {
					this.$cellMatrix[i][j] = $('<input>')
													.attr('maxlength', 1)
													.data('row', i)
													.data('col', j)
													.on('keyup', $.proxy(this.onKeyUp, this));
					$td = $('<td>').append(this.$cellMatrix[i][j]);
					//$td = $('<td>').append('<p>funny</p>');
					//check the section of the input
					sectIDi = Math.floor( i / 3 );
					sectIDj = Math.floor( j / 3 );
					// Set the design for different sections
					if ( ( sectIDi + sectIDj ) % 2 === 0 ) {
						$td.addClass( 'section-even' );
					} else {
						$td.addClass( 'section-odd' );
					}
					$tr.append($td);
				};
				$table.append($tr);
			};
		return $table;
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
			console.log('get instance');
				_instance = init( config );
			}
			return _instance;
		}
	};
})( jQuery );