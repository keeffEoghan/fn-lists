/**
 * Creates an iterable array of the given length of empty entries, or those
 * given by optional arguments to `Array.fill`.
 *
 * @see Array.constructor
 * @see Array.fill
 *
 * @param {number} n The number of elements to create.
 * @param {*} [value] A value to fill the array with; for `Array.fill`.
 * @param {number} [start=0] Start index, inclusive; for `Array.fill`.
 * @param {number} [end=n] End index, exclusive; for `Array.fill`.
 *
 * @returns {array} An array of the given number of empty elements.
 */
export const range = (n, value, start, end) =>
    Array(Math.floor(n)).fill(value, start, end);

export default range;
