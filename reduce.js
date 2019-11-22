/**
 * Reduce an array-like object.
 * Similar to native, but with iteratee-first arguments.
 * Supports the native one-value behaviour.
 *
 * Needs a fully separate `call` because native arrays detect an `undefined` parameter.
 *
 * @param {function} f The iteratee function, given standard arguments.
 * @param {array} a The array operand.
 * @param {*} [out] The initial accumulator, if given; standard behaviour, if not.
 */
export const reduce = (f, a, out) => ((out === undefined)?
        Array.prototype.reduce.call(a, f)
    :   Array.prototype.reduce.call(a, f, out));

export default reduce;
