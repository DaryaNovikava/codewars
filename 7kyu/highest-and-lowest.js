// DESCRIPTION:
// In this little assignment you are given a string of space separated numbers,
// and have to return the highest and lowest number.

// Examples:
// highAndLow("1 2 3 4 5"); // return "5 1"
// highAndLow("1 2 -3 4 5"); // return "5 -3"

// SOLUTION
function highAndLow(numbers){
 const arrayOfNumbers =  numbers.split(' ').map(Number);
 const sortedArray = arrayOfNumbers.sort((a, b) => b - a)
 return `${sortedArray[0]} ${sortedArray[sortedArray.length - 1]}`
}

// SOLUTION 2
// function highAndLow(numbers){
//   numbers = numbers.split(' ');
//   return `${Math.max(...numbers)} ${Math.min(...numbers)}`;
// }

const numbers1 = "1 2 -3 4 5";
console.log(highAndLow(numbers1))
