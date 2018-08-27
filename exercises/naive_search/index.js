// Pseudocode
function naiveSearch (input, str) {
    let count = 0;
    for ( let x = 0; x < input.length; x ++){
        for ( let i = 0; i < str.length; i++){
            if (str[i] !== input[x+i]) break;
            if(i === str.length - 1) count ++;
        }
    }
    return count;
}

console.log(naiveSearch('this is shanshan', 'shanshan'));