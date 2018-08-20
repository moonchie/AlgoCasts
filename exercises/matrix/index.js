// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {
    const results = [];
    for (let i = 0; i < n; i++) {
        results.push([]);
    };

    let counter = 1;
    let startColumn = 0;
    let endColumn = n - 1;
    let startrow = 0;
    let endrow = n - 1;

    while( startColumn <= endColumn && startrow <= endrow ){
        // 1st for loop: top row
        for ( let i = startColumn; i <= endColumn; i++){
            results[startrow][i] = counter;
            counter++;
        }

    }

}


console.log(matrix(2));
console.log(matrix(4));
module.exports = matrix;
