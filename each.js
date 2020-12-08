const e = Array.prototype.forEach;

/**
 * Iterates a function over every element of a list, returning the list.
 *
 * @param {function} f The iteratee function.
 * @param {array} a A list to iterate over (array or array-like object).
 *
 * @returns {array} The given list.
 */
export const each = (f, a) => {
    e.call(a, f);

    return a;
}

export default each;
