// DESCRIPTION:
// Complete the solution so that it reverses the string passed into it.
// 'world'  =>  'dlrow'
// 'word'   =>  'drow'

// MY SOLUTION:
function solution(str){
  return str.split('').reverse().join('');
}

const str1 = 'world';
const str2 = 'hello';

console.log(solution(str1));
console.log(solution(str2));

   // BEST PRACTICES 1
// const solution = s => [...s].reverse().join('')