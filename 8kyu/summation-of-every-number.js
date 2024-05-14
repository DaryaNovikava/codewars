// DESCRIPTION:
// Summation
// Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0. Your function only needs to return the result, what is shown between parentheses in the example below is how you reach that result and it's not part of it, see the sample tests.
// For example (Input -> Output):
// 2 -> 3 (1 + 2)
// 8 -> 36 (1 + 2 + 3 + 4 + 5 + 6 + 7 + 8)

// MY SOLUTION
var summation = function (num) {
  const numberArray = [];
  let accumulatedSumm = 0;
  for (let i = 1; i <= num; i++) {
    numberArray.push(i);
  } 
  for (let i = 0; i < numberArray.length; i++) {
    accumulatedSumm += numberArray[i];
  }
  return accumulatedSumm;
}

console.log(summation(8));
console.log(summation(3));
console.log(summation(16));


// BEST PRACTICES 1
// var summation = function (num) {
//   let result = 0;
//   for (var i = 1; i <= num; i++) {
//     result += i;
//   }
//   return result;
// }

// BEST PRACTICES 2
// function summation(num) {
//   return num * (num + 1) / 2
// }