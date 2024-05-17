// DESCRIPTION:
// Write a function to split a string and convert it into an array of words.

// Examples (Input ==> Output):
// "Robin Singh" ==> ["Robin", "Singh"]


// MY SOLUTION
function stringToArray(string){
  return string.split(' ');
}

str1 = "I love arrays they are my favorite";
str2 = "DARYA NOVIKAVA 22 september 1992";
console.log(stringToArray(str1));
console.log(stringToArray(str2));