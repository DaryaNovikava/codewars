// DESCRIPTION:
// Write a function that removes the spaces from the string, then return the resultant string.
// Examples:
// Input -> Output
// "8 j 8   mBliB8g  imjB8B8  jl  B" -> "8j8mBliB8gimjB8B8jlB"

// MY SOLUTION
function noSpace(x){
return x.split(' ').join('');
}

let str1 = "8 j 8   mBliB8g  imjB8B8  jl  B";
console.log(noSpace(str1));

// BEST PRACTICES 1
// function noSpace(x){
//     return x.replace(/\s/g, '');
//   }

// BEST PRACTICES 2
// function noSpace(x) {
//     return x.replaceAll(' ', '');
//   }