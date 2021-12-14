const e = Array.prototype.forEach;

/**
 * Iterates a function over every element of a list, returning the list.
 *
 * @see Array.prototype.forEach
 *
 * @param {function} f The iteratee function.
 * @param {array|*} a List to iterate over, array or array-like.
 *
 * @returns {array|*} The given list.
 */
export const each = (f, a) => {
    e.call(a, f);

    return a;
}

export default each;
