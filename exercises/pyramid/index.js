// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

// Solution 1
function pyramid(n){
    const midPoint = Math.floor(( n*2 - 1)/2);
    for ( let row = 0; row < n ; row ++){
        let level = '';
        for ( let col = 0; col < n *2 - 1; col ++){
            if (midPoint - row <= col && midPoint + row >= col){
                level += '#';
            } else {
                level += '0';
            }
        }
    console.log(level)
    }
}

pyramid(5);
module.exports = pyramid;


// Solution 2: recursion
function pyramidSolution2(n, row = 0, level = ''){
    if ( n === row){
        return;
    }

    if ( level.length  === n * 2 - 1){
        console.log(level);
        return pyramidSolution2(n, row + 1);
    }

    const midPoint = Math.floor(( n*2 - 1)/2);
    let add; // use a temporary variable
    if ( midPoint - row <= level.length && midPoint + row >= level.length){
        add = '#'
    } else {
        add = '0'
    }
    pyramidSolution2(n, row, level + add)
}

console.log(pyramidSolution2(3))