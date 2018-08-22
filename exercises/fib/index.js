// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

// ----- 1. Use while loop
function fib(num){
    var a = 1, b = 0, temp;

    while (num >= 0){
      temp = a;
      a = a + b;
      b = temp;
      num--;
    }
    return b;
  }

console.log(fib(4));

// --------2. recursive method from the internet
function fibonacci(num) {
    if( num <= 1) return num;

    return fibonacci(num - 1) + fibonacci(num - 2)
  }
 console.log(fibonacci(4))

// --------3. use for loop
function fibSolution1(n) {
    const result = [0, 1];

    for (let i = 2; i <= n; i++){
        let a = result[i - 1];
        let b = result[i - 2];

        result.push( a + b);
    }
    return result[n];
}

console.log(fibSolution1(4));

// ---------4. use recursive method










module.exports = fib;
