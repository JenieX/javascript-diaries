/**
 * If the deleted portion is sparse, the array returned by splice() is sparse
 * as well, with those corresponding indices being empty slots.
 * In another word, The splice() method preserves the array's sparseness.
 */

// eslint-disable-next-line no-sparse-arrays
const numbers = [1, 2, , , , 4, 4, , 5];

const result = numbers.splice(2, 3);
console.log(result);

console.log(numbers);
