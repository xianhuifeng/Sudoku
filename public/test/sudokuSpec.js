var expect = chai.expect;

describe('Sudoku', function() {
	var testGame,testGameBoard;

	beforeEach(function(done){
		testGame = Sudoku.getInstance();
		testGameBoard = testGame.gameBoard();
		done();
	});

	describe('buildBoard', function() {
		it('should create a gameBoard that has 9 rows', function() {
			expect(testGameBoard.find('tr').length).to.equal(9);
		});
		it('should create a gameBoard that has 9 columns', function() {
			expect(testGameBoard.find('tr')[0].children.length).to.equal(9);
		});
	});

	describe('clearBoard', function() {
		it('should be a function', function() {
			expect(typeof testGame.reset).to.equal('function');
		});
	});

	describe('getSolution', function() {
		it('should be a function', function() {
			expect(typeof testGame.solution).to.equal('function');
		});
	});

	describe('inputValidate', function() {
		it('should be a function', function () {
			expect(typeof testGame.inputValidate).to.equal('function');
		});
	})
});