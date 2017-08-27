function matrix_spiral(matrix) {

    var dim = matrix.length;

    var i = Math.floor (dim / 2);
    var j = i;
    var l = i; //left spiral boundary
    var r = i; // right spiral boundary


    for (var n = 0; n < dim * dim; ++n)
    {
        console.log(matrix[i][j]);

        if ((i == l) && (j == l)) {r++; l--; j--; continue} // go to external spiral
        if ((i == l) && (j > l)) {j--; continue} //go left
        if ((i < r) && (j == l)) {i++; continue} //down
        if ((i == r) && (j < r)) {j++; continue} //right
        if ((i > l) && (j == r)) {i--; continue} //up
    }
}

var matrix1 = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
];

matrix2 = [[100]];

matrix3 = [
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
    [11,12,13,14,15],
    [16,17,18,19,20],
    [21,22,23,24,25]
];

matrix_spiral(matrix1);
