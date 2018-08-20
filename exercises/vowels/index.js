// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0


// My solution 1: Use regular expression
// function vowels(str) {
//     let count = str.match(/[aeiou]/gi);
//     return count === null? 0 : count.length
// }

// My solution 2: Use for loop
// function vowels(str) {
//     let count = 0;
//     const arr = str.toLowerCase().split('');
//     for (let i = 0; i < arr.length; i++ ){
//         if (arr[i] === "i" || arr[i] === "a" || arr[i] === "e" || arr[i] === "o" || arr[i] === "u"){
//             count += 1;
//         }
//     }
//     return count;
// }

// Instructor's solution: use str.includes()
function vowels(str) {
    let count = 0;
    const checker = 'aeiou';

    for ( let i of str.toLowerCase()){
        if (checker.includes(i)){                       //includes also works on Array
            count += 1;
        }};
    return count;
}





console.log(vowels('Hi There!'));
console.log(vowels('Why do you ask?'));
console.log(vowels('Why?'));
module.exports = vowels;
