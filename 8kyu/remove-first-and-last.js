// DESCRIPTION:
//  Your goal is to create a function that removes the first and last characters of a string. 
//  You're given one parameter, the original string.
//  You don't have to worry about strings with less than two characters.

// MY SOLUTION:
function removeChar(str){
return str.slice(1, str.length-1);
   };

   let str1 = 'eloquent';
   let str2 = 'country';
   let str3 = 'person';
   console.log(removeChar(str1));
   console.log(removeChar(str2));
   console.log(removeChar(str3));

   // BEST PRACTICES 1
//    function removeChar(str) {
//     return str.slice(1, -1);
//   }