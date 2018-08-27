//1. built-in function indexOf()

// function linearSearch(input, value){
//     return input.indexOf(value)
// }


//2. behind the scence of indexOf()
function linearSearch(input, value){
    for (let x in input){
        if (input[x] === value) return x;
    } return -1;
}
// runtime: O(n)


console.log(linearSearch([1,2,3,4,5], 5))