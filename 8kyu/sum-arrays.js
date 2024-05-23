// DESCRIPTION:
// Write a function that takes an array of numbers and returns the sum of the numbers. The numbers can be negative or non-integer. If the array does not contain any numbers then you should return 0.

// Examples
// Input: [1, 5.2, 4, 0, -1]
// Output: 9.2
// Input: []
// Output: 0

// MY SOLUTION:
function sum (numbers) {
    "use strict";
    let summ = 0;
    for (const number of numbers) {
     summ += number;
    }
    return summ;
};

const arr1 = [];
const arr2 = [1, 5.2, 4, 0, -1];

console.log(sum(arr1));
console.log(sum(arr2));
