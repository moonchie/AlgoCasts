// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"


// My solution
// function maxChar(str) {
//     const chars = {};
//     for (char of str){
//         if(!chars[char]){
//             chars[char] = 1
//         } else {
//             chars[char] ++
//         }
//     }
//     chars;

//     // Getting the key with the highest value from object
//     return Object.keys(chars).reduce((a, b) => chars[a] > chars[b] ? a : b);
// }

// Tutor's solution
function maxChar(str) {
    const charMap = {};
    let max = 0;
    let maxChar = '';

    for (let char of str){
        if (charMap[char]){
            charMap[char] ++
        } else { charMap[char] = 1}
    }
    // iterate the object with for.in loop
    for (let char in charMap){
        console.log(char); // look at each key
        if (charMap[char] > max){
            max = charMap[char];
            console.log(max);
            maxChar = char;
            console.log(maxChar)
        }
    }
    return maxChar

}

console.log(maxChar("apple 1231111"))

module.exports = maxChar;



// 老师教的数出现次数的方法：
const string = "Hello There!";
const chars = {};

for (let char of string){
    // If the character doesnt exist in the object yet, we give 1 to this object
    if (!chars[char]) {
        chars[char] = 1;
        // check the lopped result
        console.log(char);
        // check the
        console.log(chars);
    } else (
    // if ths character ALREADY exist in the object, we increment by 1
        chars[char] ++
    )
}

console.log(chars)


// kata:Character Frequency
// My solution:
// function charFreq(message) {
//     const charMap = {};
//     for (let char of message){
//         if (charMap[char]) {
//             charMap[char] ++
//         } else {
//             charMap[char] = 1
//         }
//     }
//     return charMap
// }

// Best practice:
function charFreq(message) {
    return message.split('').reduce(function(acc, cur) {
      return (acc[cur] = (acc[cur] || 0) + 1) && acc;
    }, {});
  }

console.log(charFreq("I like cats"));



// kata: 6, Character frequency
function letterFrequency(text){
    text = text.toLowerCase().trim().replace(/[0-9]/g, "").replace(/ +/g, "");
    let result = [];
    const charObj = {};

    for (let char of text){
        if (!charObj[char]) {
            charObj[char] = 1
        } else {
            charObj[char] ++
        }
    }

    for ( let key in charObj){
        result.push([key, charObj[key]]);
    }

    // return result.sort((a, b) => a[0] !== b[0] ? a[0] < b[0] ? -1 : 1 : 0).sort((a, b) => b[1] - a[1])


     result.sort((a, b) => a[1] != b[1] ? b[1] - a[1] : a[0].localeCompare(b[0]))
}


function letterFrequency(text){
    var dict = text.split('').reduce((d, letter) => {
      if(/[a-zA-Z]/.test(letter))
        d[letter.toLowerCase()] = (d[letter.toLowerCase()]||0) + 1;
      return d;
    }, {})
   return Object.keys(dict).map(k => [k, dict[k]])
     .sort((a, b) => a[1] != b[1] ? b[1] - a[1] : a[0].localeCompare(b[0]))

  }

console.log(letterFrequency('aaAabb 7dddDD 1hhcc'));
console.log(letterFrequency('wklv lv d vhfuhw phvvdjh'))