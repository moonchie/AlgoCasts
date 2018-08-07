// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'


// first solution
// function reverse(str) {
//     var arr = str.split("");
//     return arr.reverse().join("");
//     // console.log(arr);
// }


// second solution with for.of loop
// function reverse(str) {
//     // start a new strin
//     let reversed = '';
//     // use ES6
//     for (let value of str){
//         reversed = value+ reversed;
//     }
//     return reversed
// }

// 3rd solution with reduce
function reverse(str) {
 return str.split('').reduce((reversed, character)=> character + reversed, '');
}

console.log(reverse("abc"))

module.exports = reverse;
