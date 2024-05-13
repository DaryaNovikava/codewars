// DESCRIPTION:
// We need a function that can transform a number (integer) into a string.
// What ways of achieving this do you know?

// Examples (input --> output):
// 123  --> "123"
// 999  --> "999"
// -100 --> "-100"

// SOLUTION:
const createString = number => {
  return String(Math.floor(number));
}

console.log(createString(12));
console.log(typeof(createString(12)));
console.log(createString(-12));
console.log(createString(120));
console.log(createString(1.2));
createString(-12);
createString(1.2);
createString(120);

