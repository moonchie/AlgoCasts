// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

// My solution:
// function capitalize(str) {
//     const arr = [];
//     for ( let x of str.split(" ")) {
//         arr.push(x[0].toUpperCase() + x.slice(1));
//     }
//     return arr.join(" ")
// }

// Solution 2: check the left space is empty
function capitalize(str) {
    let result = str[0].toUpperCase();
    for ( let i = 1; i < str.length; i++){
        str[i - 1] === ' ' ? result += str[i].toUpperCase() : result += str[i];
    }
    return result;
}



console.log(capitalize('a short sentence'));
console.log(capitalize('thee'));
console.log(capitalize('look, it is working!'));
module.exports = capitalize;
