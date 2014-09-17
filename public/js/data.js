var DummyBoardInputValsGenerator = function(cellMatrix) {
    function setVal(i, j, value) {
        cellMatrix[i][j].val(value).attr('disabled', true);
    };
    setVal(0, 0, 5);
    setVal(0, 1, 3);
    setVal(0, 4, 7);
    setVal(1, 0, 6);
    setVal(1, 3, 1);
    setVal(1, 4, 9);
    setVal(1, 5, 5);
    setVal(2, 1, 9);
    setVal(2, 2, 8);
    setVal(2, 7, 6);
    setVal(3, 0, 8);
    setVal(3, 4, 6);
    setVal(3, 8, 3);
    setVal(4, 0, 4);
    setVal(4, 3, 8);
    setVal(4, 5, 3);
    setVal(4, 8, 1);
    setVal(5, 0, 7);
    setVal(5, 4, 2);
    setVal(5, 8, 6);
    setVal(6, 1, 6);
    setVal(6, 6, 2);
    setVal(6, 7, 8);
    setVal(7, 3, 4);
    setVal(7, 4, 1);
    setVal(7, 5, 9);
    setVal(7, 8, 5);
    setVal(8, 4, 8);
    setVal(8, 7, 7);
    setVal(8, 8, 9);
};

var getSolutionData = function(cellMatrix) {
    function setSolutionVal(i, j, value) {
        //Set solution val
        //Make solutijon input disabled true and dirty true so that user cannot 
        //modify them and when user click restart we set will then back to disabled
        //false, dirty false and val('')
        cellMatrix[i][j].val(value).attr('disabled', true).attr('dirty', true);
    };
    setSolutionVal(0, 2, 4);
    setSolutionVal(0, 3, 6);
    setSolutionVal(0, 5, 8);
    setSolutionVal(0, 6, 9);
    setSolutionVal(0, 7, 1);
    setSolutionVal(0, 8, 2);
    setSolutionVal(1, 1, 7);
    setSolutionVal(1, 2, 2);
    setSolutionVal(1, 6, 3);
    setSolutionVal(1, 7, 4);
    setSolutionVal(1, 8, 8);
    setSolutionVal(2, 0, 1);
    setSolutionVal(2, 3, 3);
    setSolutionVal(2, 4, 4);
    setSolutionVal(2, 5, 2);
    setSolutionVal(2, 6, 5);
    setSolutionVal(2, 8, 7);
    setSolutionVal(3, 1, 5);
    setSolutionVal(3, 2, 9);
    setSolutionVal(3, 3, 7);
    setSolutionVal(3, 5, 1);
    setSolutionVal(3, 6, 4);
    setSolutionVal(3, 7, 2);
    setSolutionVal(4, 1, 2),
    setSolutionVal(4, 2, 6);
    setSolutionVal(4, 4, 5);
    setSolutionVal(4, 6, 7);
    setSolutionVal(4, 7, 9);
    setSolutionVal(5, 1, 1);
    setSolutionVal(5, 2, 3);
    setSolutionVal(5, 3, 9);
    setSolutionVal(5, 5, 4);
    setSolutionVal(5, 6, 8);
    setSolutionVal(5, 7, 5);
    setSolutionVal(6, 0, 9);
    setSolutionVal(6, 2, 1);
    setSolutionVal(6, 3, 5);
    setSolutionVal(6, 4, 3);
    setSolutionVal(6, 5, 7);
    setSolutionVal(6, 8, 4);
    setSolutionVal(7, 0, 2);
    setSolutionVal(7, 1, 8);
    setSolutionVal(7, 2, 7);
    setSolutionVal(7, 6, 6);
    setSolutionVal(7, 7, 3);
    setSolutionVal(8, 0, 3);
    setSolutionVal(8, 1, 4);
    setSolutionVal(8, 2, 5);
    setSolutionVal(8, 3, 2);
    setSolutionVal(8, 5, 6);
    setSolutionVal(8, 6, 1);
};
