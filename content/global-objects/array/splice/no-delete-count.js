/**
 * Unexplicit undefined value for deleteCount will be treated as Infinity.
 *
 * If the value of deleteCount is greater than or equal to the number of
 * elements after the position specified by start, then all the elements
 * from start to the end of the array will be deleted.
 * However, if you wish to add any items, you should pass explicit Infinity
 * as deleteCount value to delete all elements after start.
 *
 * Note: an explicit undefined value for deleteCount gets converted to 0.
 */

const numbers = [1, 2, 3, 4, 5, 6, 7];

// const result = numbers.splice(1);
const result = numbers.splice(1, Infinity);
// const result = numbers.splice(1, Infinity, 10);
console.log(result);

console.log(numbers);
