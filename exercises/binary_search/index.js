// Pseudocode
function binarySearch(arr, elem) {
    let start = 0;
    let end = arr.length - 1;
    let middle = Math.floor((start + end) / 2);

    while(arr[middle] !== elem){
        if (elem < arr[middle]) end = middle - 1;
        else start = middle + 1;
        // update the middle:
        middle = Math.floor((start + end) / 2);
    }
    // console.log(start, end, middle);
    return arr[middle] === elem ? middle : -1;

}

// average Big O: O(log n)
// best Big O: O(1)

// console.log(binarySearch([1,2,3,4,5,6,7,8,10,28], 28));
console.log(binarySearch([1,2,3,4,5,6,7,8,10,28], 5));