// DESCRIPTION:
// Create a function which answers the question "Are you playing banjo?".
// If your name starts with the letter "R" or lower case "r", you are playing banjo!

// The function takes a name as its only argument, and returns one of the following strings:
// name + " plays banjo" 
// name + " does not play banjo"
// Names given are always valid strings.

// MY SOLUTION:
function areYouPlayingBanjo(name) {
   return (name.toLowerCase().startsWith('r')) ? `${name} plays banjo` : `${name} does not play banjo`;
  }

let str1 = 'Rolf';
let str2 = 'Paul';
let str3 = 'raul';
console.log(areYouPlayingBanjo(str1));
console.log(areYouPlayingBanjo(str2));
console.log(areYouPlayingBanjo(str3));