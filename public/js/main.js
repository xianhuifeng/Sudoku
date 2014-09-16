var Sudoku = ( function ($) {
	var _instance, _game, defaultConfig = {};

	var init = function (config) {
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
		this.$cellMatrix = {};
		this.N = 9;
	};
	Game.prototype.buildBoard = function () {
		//make table
		var $tr, $td, sectIDi, sectIDj;
		var $table = $('<table>').addClass('parent-matrix');
			//make 9 rows
			for (var i = 0; i < this.N ; i++) {
				$tr = $('<tr>');
				this.$cellMatrix[i] = {};

				//for each row make 9 input 
				for (var j = 0; j < this.N ; j++) {
					this.$cellMatrix[i][j] = $('<input>')
													.attr('maxlength', 1)
													.attr('dirty',false)
													.data('row', i)
													.data('col', j)
													.keyup(function() {
														$(this).attr('dirty',true);
													});
					$td = $('<td>').append(this.$cellMatrix[i][j]);
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
		//This can be changed after generator function is implemented, but now we will only have one board
		DummyBoardInputValsGenerator(this.$cellMatrix);
		return $table;
	};
	Game.prototype.clearBoard = function () {
		for (var i = 0; i < this.N; i++) {
			for (var j = 0; j < this.N; j++) {
					if(this.$cellMatrix[i][j].attr('dirty') === "true"){
						this.$cellMatrix[i][j].val('');
						this.$cellMatrix[i][j].attr('dirty', false);
					}
			};
		};	
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