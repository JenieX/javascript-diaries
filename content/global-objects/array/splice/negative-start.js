/**
 * Negative index counts back from the end of the array (start + array.length).
 */

const numbers = [1, 2, 3, 4, 5, 6, 7];

// const result = numbers.splice(-3, 2);
// or
const result = numbers.splice(-3 + numbers.length, 2);
console.log(result);

console.log(numbers);
