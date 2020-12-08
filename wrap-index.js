/**
 * Wraps an index within a given length, so that indexes greater than the length
 * loop back past 0, and indexes less than 0 loop backward from the length.
 * Similar to the indexing behaviour of `Array.slice`.
 *
 * @param {number} i The index to wrap.
 * @param {number} l The length to wrap the index within.
 *
 * @returns {number} The index wrapped within the length.
 */
export const wrapIndex = (i, l) => ((i%l)+l)%l;

/**
 * Gives the entry at a wrapped index of a given list, never exceeds its bounds.
 *
 * @see wrapIndex
 *
 * @param {number} i The index to wrap.
 * @param {array} a A list to index (array or array-like object).
 * @param {number} a.length The length property of the given list.
 *
 * @returns {*} The entry at the wrapped index of the given list.
 */
export const wrapGet = (i, a) => a[wrapIndex(i, a.length)];

export const wrap = { index: wrapIndex, get: wrapGet };

export default wrap;
