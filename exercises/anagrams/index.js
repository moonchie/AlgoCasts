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
