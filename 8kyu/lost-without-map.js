// DESCRIPTION:
// Given an array of integers, return a new array with each value doubled.
// For example:
// [1, 2, 3] --> [2, 4, 6]

// MY SOLUTION:
function maps(x){
return x.map(n => n * 2);
}

const arr1 = [2, 2, 2, 2, 2, 2];
const arr2 = [4, 1, 1, 1, 4];

console.log(maps(arr1));
console.log(maps(arr2));