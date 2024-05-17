// DESCRIPTION:
// Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.
// Examples:
// invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]
// invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5]
// invert([]) == []
// You can assume that all values are integers. Do not mutate the input array/list.

// MY SOLUTION
function invert(array) {
    return array.map(element => element = -element);
 }

 
 let array1 = [1,2,3,4,5];
 let array2 = [-1,-2,-3,-4,-5];
 let array3 = [-1, 2,-3, 4, 5];
 let array4 = [];
 console.log(invert(array1));
 console.log(invert(array2));
 console.log(invert(array3));
 console.log(invert(array4));

