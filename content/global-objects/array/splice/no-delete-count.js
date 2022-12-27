/**
 * If deleteCount is omitted, or if its value is greater than or equal to
 * the number of elements after the position specified by start, then all
 * the elements from start to the end of the array will be deleted.
 * However, if you wish to pass any itemN parameter, you should pass Infinity
 * as deleteCount to delete all elements after start, because an explicit
 * undefined gets converted to 0.
 */

const numbers = [1, 2, 3, 4, 5, 6, 7];

// const result = numbers.splice(1);
const result = numbers.splice(1, Infinity, 10);
console.log(result);

console.log(numbers);
