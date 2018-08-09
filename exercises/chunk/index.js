// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

// pre step to solve: how to get the last element of an Array
const arr = [1, 2, 3, 4, 5, 6, 7, 8];
let last = arr[arr.length - 1];
let newArr = [];
console.log(last);
console.log(last.length);
newArr.push([2]);
console.log(newArr)


// Solution 1: use a last element helper
// function chunk(array, size) {
//     // create an empty array
//     const newArr = [];
//     for (let element of array) {
//         // get last element of the array
//         let last = newArr[newArr.length - 1];

//         // check if last not exist or equal to chuck size
//         if (!last || last.length === size){
//             newArr.push([element])
//         } else {
//             last.push(element)
//         }
//     }
//     return newArr
// }


// solution 2: use slice based on the index and the slice
function chunk(array, size) {
    const chunked = [];
    let index = 0;

    while ( index < array.length ){
        chunked.push(array.slice(index, index + size));
        // increment the index by the size
        index += size;
    }
    return chunked
}


console.log(chunk([1, 2, 3, 4, 5], 4));
console.log(chunk([1, 2, 3, 4, 5, 6, 7, 8], 3))
module.exports = chunk;


// kata: 7, Chuck Norris IV - Bearded Fist
function fistBeard(arr) {
    let newArr = [];
    var merged = [].concat.apply([], arr);
    for ( x of merged ){
        newArr.push(String.fromCharCode(x))
    }

    // console.log(merged)
    return newArr.join("")
}


// Best pracese:
// const fistBeard = arr => String.fromCharCode(...[].concat(...arr));

console.log(fistBeard([[78], [117, 110, 99], [104, 117], [107, 115]]))
