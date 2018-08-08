// --- Directions
// Write a program that console logs the numbers
// from 1 to n. But for multiples of three print
// “fizz” instead of the number and for the multiples
// of five print “buzz”. For numbers which are multiples
// of both three and five print “fizzbuzz”.
// --- Example
//   fizzBuzz(5);
//   1
//   2
//   fizz
//   4
//   buzz

function fizzBuzz(n) {
    for ( let i = 1; i <= n; i++){
        // check if the number is both 3 and 5
        if (i % 3 === 0 && i % 5 === 0) {
            // console.log and do nothing else
            console.log("fizzbuzz")
        } if (i % 5 === 0){
            console.log("buzz")
        } if (i % 3 === 0){
            console.log("fizz")
        } else {
            console.log(i)
        }
    }
}


console.log(fizzBuzz(15));
module.exports = fizzBuzz;


//kata: 8, Pre-FizzBuzz Workout #1
function preFizz(n) {
    let arr = [];
    for (let i = 1; i <= n; i++){ arr.push(i) }
    return arr
}

console.log(preFizz(5))

// kata: 8, Pre-FizzBuzz Workout #2
// function preFizz(n) {
//     if (n % 5 === 0 && n % 3 === 0) {
//         return "FizzBuzz"
//     }
//     if (n % 5 === 0) {
//         return "Buzz"
//     }
//     if (n % 3 === 0){
//         return "Fizz"
//     } else {
//         return n
//     }
// }

// shorhand
preFizz = n => n % 15 ? n % 5 ? n % 3 ? n : 'Fizz' : 'Buzz' : 'FizzBuzz';

console.log(preFizz(11));
console.log(preFizz(15));
console.log(preFizz(120))