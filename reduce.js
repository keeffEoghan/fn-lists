const r = Array.prototype.reduce;

/**
 * Reduce an array-like object.
 * Similar to native, but with iteratee-first arguments.
 * Supports the native single-argument behaviour.
 *
 * @param {function} f The iteratee function, given standard arguments, plus the
 *     `out` argument.
 * @param {array} a The list to reduce over (array or array-like object).
 * @param {*} [out] The initial accumulator, if given; otherwise, uses standard
 *     `Array.reduce` behaviour.
 *
 * @returns {*} The result of running the reducer iteratee function over all
 *     elements of the list.
 */
export const reduce = (f, a, out) =>
    // Needs separate `call` because native detects even `undefined` parameter.
    ((out === undefined)? r.call(a, f) : r.call(a, f, out));

export default reduce;
