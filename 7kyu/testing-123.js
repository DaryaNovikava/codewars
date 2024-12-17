// DESCRIPTION:
// Your team is writing a fancy new text editor and you've been tasked with implementing the line numbering.
// Write a function which takes a list of strings and returns each line prepended by the correct number.
// The numbering starts at 1. The format is n: string. Notice the colon and space in between.

// Examples: (Input --> Output)
// [] --> []
// ["a", "b", "c"] --> ["1: a", "2: b", "3: c"]

// MY SOLUTION
const numberingLine = (arr) => {
 if (arr.length === 0) {
  return []
 } else {
  let newArray = []
  for (let i = 0; i < arr.length; i++) {
  newArray.push( `${i + 1}: ${arr[i]}`)
 }
return newArray
 }
}

// MY SOLUTION 2
// const numberingLine = (arr) => arr.map((line, index) => `${index + 1}: ${line}`);

const arr1 = ['a',  'b', 'c']
const arr2 = ['y', 'Z', 'k', 'D', 'O', 'r', 'p', 'l', '{', 'V', 'w', 'm', 'P', 'L', 'd', 'Z', 'Y', 'o', 'e', 'w', 'x', 'b', 'z', 'i', 'b', 'w', 'A', 'U', 'y', 'u', 'd', 'k', 'y', 'N', 'K', 'p', 'P', 'E', 'O', 'r', 'v', 'J', 'W', 'b', 'u', 'x', 'r', 'T', 'S', 'E', 'j', '[', 'X', 'S', 'e', 'G', 'K', 'y', 'E', 'Y', 'w', '{', 'D', 'B', 'V', 'x', '{', 'T', 'U', 'n', 'V', 'z', 'K', 'U', 'B', 'i', 'H', 'w', 'R', 'H', 'H', 'G', 'n', 'j', 'm', 'D', '[', 'y', 't', 'O', 'e', 'P', 's', 'f', 'C', 'C', 'N', 'm', 'E', 'u']
console.log(numberingLine(arr1));
console.log(numberingLine(arr2));
