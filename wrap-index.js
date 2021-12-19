/**
 * Wraps an index over a given length, so that indexes greater than the length
 * loop back past `0`, and indexes less than `0` loop backward from the length.
 * Similar to the indexing behaviour of `Array`'s `slice`.
 * Indexing is the equivalent of a true _modulo_ operator, where JavaScript's
 * `%` operator is actually a _remainder_ operator.
 *
 * @see Array.prototpye.slice
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Remainder
 *
 * @param {number} i Index to wrap.
 * @param {number} l Length to wrap the index over.
 *
 * @returns {number} The index wrapped over the length.
 */
export const wrapIndex = (i, l) => ((i%l)+l)%l;

export default wrapIndex;
