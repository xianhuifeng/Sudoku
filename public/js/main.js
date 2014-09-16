var Sudoku = ( function ($) {
	var _instance, _game, defaultConfig = {};

	var init = function (config) {
		conf = $.extend( {}, defaultConfig, config);
		_game = new Game( conf );
		return {
			gameBoard: function () {
				return _game.buildBoard();
			},
			reset: function () {
				_game.clearBoard();
			},
			solution: function (){
				_game.getSolution();
			}
		}
	};

	//Game initialization and logic.
	var Game = function () {
		this.$cellMatrix = {};
		this.N = 9;
	};
	Game.prototype.buildBoard = function () {
		var $tr, $td, sectIDi, sectIDj;

		//Make a new table and add class style.
		var $table = $('<table>').addClass('parent-matrix');

			//Make nine rows for this table
			for (var i = 0; i < this.N ; i++) {
				$tr = $('<tr>');
				this.$cellMatrix[i] = {};

				//For each row, we make nine table data and we append input to it.
				for (var j = 0; j < this.N ; j++) {
					var self = this;
					self.$cellMatrix[i][j] = $('<input>')
													.addClass('input-style')
													.attr('maxlength', 1)
													.attr('dirty', false) //This attr is used for clearBoard().
													.data('row', i)
													.data('col', j)
													.keyup(function (e) {
														//This function takes there parameters. The first argument gets injected 
														//is the event; the second is the current content which related to the event keyup;
														//and the third argumet is the object Game itself.
														self.onKeyUp(e, this, self);
													});

					$td = $('<td>').append(this.$cellMatrix[i][j]);
					//Check the section of the input so we can set different class for each section
					//and also we will use this section for validation.
					sectIDi = Math.floor( i / 3 );
					sectIDj = Math.floor( j / 3 );

					if ( ( sectIDi + sectIDj ) % 2 === 0 ) {
						$td.addClass( 'section-even' );
					} else {
						$td.addClass( 'section-odd' );
					}
					$tr.append($td);
				};
				$table.append($tr);
			};

		/*
		*This can be changed after generator function is implemented, 
		*however now we will only have one board.
		*In future, we will add random fucntion for BoardInputValsGenerator
		*/
		DummyBoardInputValsGenerator(this.$cellMatrix);
		return $table;
	};
	Game.prototype.clearBoard = function () {
		for (var i = 0; i < this.N; i++) {
			for (var j = 0; j < this.N; j++) {

				/*Check if the input attr is dirty or not, if is, clear val and set to false
				*In this case, both user input and solution data can make attr dirty true	
				*/
				if(this.$cellMatrix[i][j].attr('dirty') === "true"){ // Here need to consider true as a string
					this.$cellMatrix[i][j].val('');
					this.$cellMatrix[i][j].css('background-color', 'transparent');
					/*This takes care of solution data value and user input value both
					*If it was user input value, only dirty set back to false
					*If it was solution data value, set dirty back to false and set disabled back to false
					*/
					this.$cellMatrix[i][j].attr('dirty', false).attr('disabled', false);
				}
			};
		};	
	};
	Game.prototype.getSolution = function () {
		//Call method clearBoard() to set back attr dirty, disabled, and val()
		this.clearBoard();
		getSolutionData(this.$cellMatrix);
	};

	//This validation is not implemented yet,
	//it still needs to check odd and even parts. Finish it
	//later.
	Game.prototype.inputValidate = function (cellMatrix, value, data) {
		console.log(value, data);
		if(value === ""){
			return true;
		}
		var validData = true;
		var row = data.row;
		var col = data.col;

		//Check data validation by row.
		for (var i = 0; i < this.N ; i++) {
			if(i !== col && cellMatrix[row][i].val() === value){
				// cellMatrix[row][i].css('background-color', 'green');
				validData = false;
				return validData;
			}
		}
		//Check data validation by col.
		for (var j = 0; j < this.N ; j++) {
			if(j !== row && cellMatrix[j][col].val() === value){
				// cellMatrix[j][col].css('background-color', 'green');
				validData = false;
				return validData;
			}
		};
		return validData;
	};

	Game.prototype.onKeyUp = function (e,content,self) {
		console.log('what is self', self);
		console.log('what is content', content);
		//if KeyCode is not 8, it means users are inserting value to input
		//We should set dirty to true
		//We also should check if it is validate or not
		//if validtae, remove input-style and add input-validate-false style
		//if not, alert for now
		if(e.keyCode != 8){
			$(content).attr('dirty', true); //content attr is used for clearBoard() also.	

			//Check input validatipn
			var isValidate = self.inputValidate(self.$cellMatrix, $(content).val(), $(content).data());
			if(!isValidate){
				$(content).removeClass('input-style');
				$(content).addClass('input-validate-false');
			} else {
				alert('hey good guess');
			}
		} 


		//if keyCode is 8, it means the user pressed Delete button
		//We need to set the current input dirty to false again
		//And we need to swap classes back
		
		if (e.keyCode === 8) {
			$(content).attr('dirty', false);
			$(content).removeClass('input-validate-false');
			$(content).addClass('input-style');
		}
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