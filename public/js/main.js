var Sudoku = (function($) {
    var _instance, _game = {};

    var init = function() {
        _game = new Game();
        return {
            gameBoard: function() {
                return _game.buildBoard();
            },
            reset: function() {
                _game.clearBoard();
            },
            solution: function() {
                _game.getSolution();
            }
        }
    };

    /* Game initialization and logic. */

    var Game = function() {
        this.$cellMatrix = {};
        this.$sectMatrix = {};
        this.N = 9;
    };
    
    Game.prototype.buildBoard = function() {
        var $tr, $td, sectIDi, sectIDj;

        // Make a new table and add class style.

        var $table = $('<table>').addClass('parent-matrix');

        // Make nine rows for this table

        for (var i = 0; i < this.N; i++) {
            $tr = $('<tr>');
            this.$cellMatrix[i] = {};

            // For each row, we make nine table data and we append input to it.

            for (var j = 0; j < this.N; j++) {
                var self = this;

                self.$cellMatrix[i][j] = $('<input>')
                    .addClass('input-style')
                    .attr('maxlength', 1)
                    .attr('dirty', false) // This attr is used for clearBoard().
                	  .data('row', i)
                    .data('col', j)
                    .keyup(function(e) {

                        // This function takes there parameters. The first argument gets injected 
                        // is the event; the second is the current content which related to the event keyup;
                        // and the third argument is the object Game itself.

                        self.onKeyUp(e, this, self);
                    });

                $td = $('<td>').append(this.$cellMatrix[i][j]);

                // Check the section of the input so we can set different class for each section
                // and also we will use this section for validation.

                sectIDi = getSection(i);
                sectIDj = getSection(j);

                if ((sectIDi + sectIDj) % 2 === 0) {
                    $td.addClass('section-even');
                } else {
                    $td.addClass('section-odd');
                }

                // Store key values into $sectMatrix obj

                var sectIDKey = sectIDi.toString() + sectIDj.toString();
                if(!this.$sectMatrix[sectIDKey]){
                    this.$sectMatrix[sectIDKey] = [];
                }
                this.$sectMatrix[sectIDKey].push(this.$cellMatrix[i][j]);

                $tr.append($td);
            };
            $table.append($tr);
        };

        // This can be changed later,
        // for now we will only have one board.
        // In future, we will add BoardInputValsGenerator function.*/

        DummyBoardInputValsGenerator(this.$cellMatrix);

        return $table;
    };

    Game.prototype.clearBoard = function() {
        for (var i = 0; i < this.N; i++) {
            for (var j = 0; j < this.N; j++) {

                // Check if the input attr is dirty or not, if is, clear val and set to false
                // In this case, both user input and solution data can make attr dirty true

                if (this.$cellMatrix[i][j].attr('dirty') === "true") { // Here need to consider true as a string
                    this.$cellMatrix[i][j].val('');
                    this.$cellMatrix[i][j].removeClass('input-validate-true');
                    this.$cellMatrix[i][j].removeClass('input-validate-false');

                    // This takes care of solution data value and user input value both
                    // If it was user input value, only dirty set back to false
                    // If it was solution data value, set dirty back to false and set disabled back to false

                    this.$cellMatrix[i][j].attr('dirty', false).attr('disabled', false);
                }
            };
        };
    };

    Game.prototype.getSolution = function() {
        this.clearBoard();
        getSolutionData(this.$cellMatrix);
    };

    Game.prototype.inputValidate = function(cellMatrix, value, data) {

        var validData = true;
        var row = data.row;
        var col = data.col;
        var sectIDRow = getSection(row);
        var sectIDCol = getSection(col);
        var sectIDRowCol = sectIDRow.toString() + sectIDCol.toString();
        var counter = 0;

        // Check if value is empty,return true

        if (value === "") {
            return true;
        }

        // Check if value is illegal number, return false if illegal

        if (isNaN(value)) {
            alert('This input needs a number from 1-9');
            return false;
        }

        // Check data validation by row.

        for (var i = 0; i < this.N; i++) {
            if (i !== col && cellMatrix[row][i].val() === value) {
                return validData = false;

            }
        }

        // Check data validation by col.

        for (var j = 0; j < this.N; j++) {
            if (j !== row && cellMatrix[j][col].val() === value) {
                return validData = false;
            }
        }

        // Check data validation by section.  

        for (var k = 0; k < this.$sectMatrix[sectIDRowCol].length; k++) {
            if(this.$sectMatrix[sectIDRowCol][k].val() === value){
                counter += 1;
                if(counter > 1){
                    return validData = false;
                }
            }
        };

        return validData;
    };

    Game.prototype.onKeyUp = function(e, content, self) {
        if (e.keyCode === 8) { // Keycode 8 is Delete button
            toDefault($(content));
        }else {
            $(content).attr('dirty', true); // Set content attr 'dirty' true is used for clearBoard().
            var isValidate = self.inputValidate(self.$cellMatrix, $(content).val(), $(content).data());
            if (!isValidate) {
                $(content).addClass('input-validate-false');
            } else {
                $(content).addClass('input-validate-true');
            }
        }
    };

    /* Helper functions */

    var toDefault = function (content) {
        content.attr('dirty', false);
        content.removeClass('input-validate-false').removeClass('input-validate-true').addClass('input-style');   
    };

    var getSection = function (num) {
        return Math.floor(num/3);
    };

    /* Singleton public methods */

    return {
        getInstance: function() {
            if (!_instance) {
                _instance = init();
            }
            return _instance;
        }
    };
})(jQuery);
