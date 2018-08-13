// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'


// solution: imagine a 2d Matrix, loop over the row, and then the column
// function steps(n) {
//     for (let row = 0; row < n; row++){
//         var stair = '';
//         for ( let column = 0; column < n; column ++ ){
//             if (column <= row){
//                 stair += '#'
//             } else {
//                 stair += ' '
//             }
//         }
//         console.log(stair)
//     }
// }


// console.log(steps(2));
// console.log(steps(4));
module.exports = steps;

// Use Recursion
// This is a recursion:
function printNumber(nnum, dec = 1){
    if (nnum === 0) {
        return;
    }
    console.log(nnum);
    // when we want it to do something be careful not to get infinite loop, so change the argument to what we want it to do
    printNumber(nnum - dec );
}

printNumber(10);

function steps(n, row = 0, stair = '') {
    // base case is row = 0
    if (n === row){
        return;
    }


    if (n === stair.length){
        console.log(stair);
        steps(n , row + 1);
    }

    if (stair.length <= row) {
        stair += '#';
    } else {
        stair += ' ';
    }
    steps(n , row, stair);
}

steps(4);
