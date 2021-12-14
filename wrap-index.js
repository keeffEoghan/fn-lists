/**
 * Wraps an index over a given length, so that indexes greater than the length
 * loop back past `0`, and indexes less than `0` loop backward from the length.
 * Similar to the indexing behaviour of `Array`'s `slice`.
 *
 * @see Array.prototpye.slice
 *
 * @param {number} i Index to wrap.
 * @param {number} l Length to wrap the index over.
 *
 * @returns {number} The index wrapped over the length.
 */
export const wrapIndex = (i, l) => ((i%l)+l)%l;

/**
 * Gives an index wrapped over a given length, or the entry at the wrapped
 * index in a given list; wrapped backwards, forwards, never exceeding bounds.
 *
 * @see wrapIndex
 *
 * @param {number} i The index to wrap.
 * @param {number|array|*} l List to index, array or array-like; or numeric
 *     length for a numeric `wrapIndex` result instead.
 * @param {number} [end=l.length] Length to wrap the index over; allows wrapping
 *     over a sub-range of a list; if not given, tries the list's length.
 *
 * @returns {number|*} The index wrapped over the given length by `wrapIndex`;
 *     or the list entry at the wrapped index, if given a list.
 */
export const wrap = (i, l, end = l.length) =>
    ((end || (end === 0))? l[wrapIndex(i, end)] : wrapIndex(i, l));

export default wrap;
