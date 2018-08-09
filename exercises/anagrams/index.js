// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False


// my solution:
// function anagrams(stringA, stringB) {
//     let wordA = stringA.replace(/[^\w]/g, "").toLowerCase().split("");
//     let wordB = stringB.replace(/[^\w]/g, "").toLowerCase().split("");

//     const objectA = {};
//     const objectB = {};

//     for ( let x of wordA) {
//         if (!objectA[x]){
//             objectA[x] = 1
//         } else {
//             objectA[x] ++
//         }
//     }
//     // console.log(objectA);

//     for (let x of wordB) {
//         !objectB[x] ? objectB[x] = 1 : objectB[x] ++
//     }
//     // console.log(objectB);

//     // get key
//     var keyA = Object.getOwnPropertyNames(objectA);
//     var keyB = Object.getOwnPropertyNames(objectB);

//     // check objectA and B match or not?
//     // check key length
//     if (keyA.length != keyB.length) { return "False" }
//     // if lenght is the same, check if value mataches
//     for ( let x in keyA ) {
//         // use an indexValue helper
//         var indexValue = keyA[x];
//         if (objectA[indexValue] !== objectB[indexValue]) {
//             return "False"
//         } else {
//             return "True"
//         }
//     }
// }


// Teacher's solution
// to avoid writting 2 times for loops, we can write a helper function
function anagrams(stringA, stringB) {
    const aCharMap = buildCharMap(stringA);
    const bCharMap = buildCharMap(stringB);

    // pull out the keys and compare the lengths
    if (Object.keys(aCharMap).length !== Object.keys(bCharMap).length) { return false}

    // if same key length, check the key's value match
    for ( let char in aCharMap ){
        if (aCharMap[char] !== bCharMap[char]){
        return false}
    }

    return true
}

// helper function
function buildCharMap(str) {
    const charMap = {};
    for ( let char of str.replace(/[^\w]/g, '').toLowerCase()){
        charMap[char] = charMap[char] + 1 || 1;
    }
    return charMap;
}



// Another way to solve Anagram: clean and Sort()
function anagram(stringA, stringB) {
    return cleanString(stringA) === cleanString(stringB) ? true : false
}

function cleanString(str){
    return str
    .replace(/[^\w]/g, '')
    .toLowerCase()
    .split('')
    .sort()
    .join('')
}

console.log(anagrams('RAIL! SAFETY!', 'fairy tales'));
console.log(anagrams('Hi there', 'Bye there'));

console.log(anagram('RAIL! SAFETY!', 'fairy tales'));
console.log(anagram('Hi there', 'Bye there'));
module.exports = anagrams;


//Kata: 6, Multiples of 3 or 5
function solution(number){
    // get all the number and put into an array
    // get the numbers that are multiples of 3 or 5
    // multiple everything
    if (number < 0) { return 0};
    if (number != 0){
        const arr = [];
    for (let i = 1; i < number; i++){
        if ( i % 3 === 0 || i % 5 === 0){
            arr.push(i)
        }
    }
    return arr.reduce(function( x, y) { return x + y},0)
    } else {
        return number
    }
}

// Best practice
function solution(number){
    var sum = 0;

    for(var i = 1;i< number; i++){
      if(i % 3 == 0 || i % 5 == 0){
        sum += i
      }
    }
    return sum;
  }


console.log(solution(10));
console.log(solution(23));
console.log(solution(0));
console.log(solution(-5));


//kata: 7, Highest and Lowest
function highAndLow(numbers){
    const arr = [];
    for ( let x of numbers.split(' ') ){
        arr.push(parseInt(x))}
    return [Math.max(...arr), Math.min(...arr)].join(' ')
}

console.log(highAndLow("4 5 29 54 4 0 -214 542 -64 1 -3 6 -6"));
console.log(highAndLow("1 9 3 4 -5"));

//kata: 6, Duplicate Encoder
// my solution:
function duplicateEncode(word){
    const charMap = {};
    const result = [];
    for ( let char of word.toLowerCase()){
        charMap[char] = charMap[char] + 1 || 1;}

    for ( let x of word.toLowerCase().split('')) {
        charMap[x] === 1? result.push("(") : result.push(")")}
    return result.join('')
}


//Best practice:
function duplicateEncode(word){
    return word
      .toLowerCase()
      .split('')
      .map( function (a, i, w) {
        return w.indexOf(a) == w.lastIndexOf(a) ? '(' : ')'
      })
      .join('');
  }

console.log(duplicateEncode("din"));
console.log(duplicateEncode("Success"))