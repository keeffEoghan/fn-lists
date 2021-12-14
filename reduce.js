const r = Array.prototype.reduce;

/**
 * Reduce an array-like list.
 * Similar to native, but with iteratee-first arguments.
 * Supports the native single-argument behaviour.
 *
 * @see Array.prototype.reduce
 *
 * @param {function} f Iteratee function, called as `Array`'s `reduce` does.
 * @param {array|*} a List to reduce over, array or array-like.
 * @param {*} [to] The initial accumulator, if any; handled like `Array`'s
 *     `reduce` does, given or not.
 *
 * @returns {*} The result of running the reducer iteratee function over all
 *     elements of the list.
 */
export const reduce = (f, a, to) =>
    // Needs separate `call` because native detects even `undefined` parameter.
    ((to === undefined)? r.call(a, f) : r.call(a, f, to));

export default reduce;
