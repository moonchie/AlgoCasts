// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
    let wordA = stringA.replace(/[^\w]/g, "").toLowerCase().split("");
    let wordB = stringB.replace(/[^\w]/g, "").toLowerCase().split("");

    const objectA = {};
    const objectB = {};

    for ( let x of wordA) {
        if (!objectA[x]){
            objectA[x] = 1
        } else {
            objectA[x] ++
        }
    }
    // console.log(objectA);

    for (let x of wordB) {
        !objectB[x] ? objectB[x] = 1 : objectB[x] ++
    }
    // console.log(objectB);

    // get key
    var keyA = Object.getOwnPropertyNames(objectA);
    var keyB = Object.getOwnPropertyNames(objectB);

    // check objectA and B match or not?
    // check key length
    if (keyA.length != keyB.length) { return "False" }
    // if lenght is the same, check if value mataches
    for ( let x in keyA ) {
        // use an indexValue helper
        var indexValue = keyA[x];
        if (objectA[indexValue] !== objectB[indexValue]) {
            return "False"
        } else {
            return "True"
        }
    }
}


console.log(anagrams('RAIL! SAFETY!', 'fairy tales'));
console.log(anagrams('Hi there', 'Bye there'));
module.exports = anagrams;
