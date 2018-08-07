// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9


// My solution, it works!
// function reverseInt(n) {
//     if (n>0) {
//         return parseInt(n.toString().split("").reverse().join(""));
//     } else {
//         return parseInt("-" + Math.abs(n).toString().split("").reverse().join(""))
//     }
// }

// Instructor's solution, more clean
function reverseInt(n) {
 const reversed = n.toString().split('').reverse().join('');
 if (n < 0) {
     return parseInt(reversed) * -1;                //use math here
 } return parseInt(reversed);
}





console.log(reverseInt(15));
console.log(reverseInt(981));
console.log(reverseInt(-15));
console.log(reverseInt(-90));

module.exports = reverseInt;



// SAME example from Codewards but more advanced

function reverseIt(data){
    if (typeof data === "number"){
    return parseInt(data.toString().split("").reverse().join(""))
    }   else if (typeof data === "string") {
    return data.split("").reverse().join("");
    } else {
    return data}
   }
console.log(reverseIt(314159))
