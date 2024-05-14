// DESCRIPTION:
// Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

// For example,
// [true,  true,  true,  false,
//   true,  true,  true,  true ,
//   true,  false, true,  false,
//   true,  false, false, true ,
//   true,  true,  true,  true ,
//   false, false, true,  true]
// The correct answer would be 17.
// Hint: Don't forget to check for bad values like null/undefined


// SOLUTION:
let array = [true,  true,  true,  false,
  true,  true,  true,  true ,
  true,  false, true,  false,
  true,  false, false, true ,
  true,  true,  true,  true ,
  false, false, true,  true];

let array2 = [true,  true,  true,  false,
  true,  true,  undefined,  true ,
  null,  false, null,  false,
  true,  false, false, true ,
  undefined,  true,  true,  true ,
  false, false, true,  true];
   
function countSheeps(arrayOfSheeps) {
  let count = 0;
  if (!arrayOfSheeps || arrayOfSheeps.length === 0) {
    return 0;
  } 

  for (let i = 0; i < arrayOfSheeps.length; i++) {
    if (arrayOfSheeps[i] === true) {
      count++;
    } 
  } 
  return count;
}

// best practices
// function countSheeps(arrayOfSheeps) {
//   return arrayOfSheeps.filter(Boolean).length;
// } 

console.log(countSheeps(array));
console.log(countSheeps(array2));
