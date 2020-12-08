import { reduce } from './reduce';

/**
 * Map an array-like object.
 * Similar to native, but with iteratee-first arguments; and allows the object
 * into which properties will be mapped to be defined (a new array, by default),
 * avoiding always creating new arrays.
 *
 * @param {function} f The iteratee function, given standard `Array.map`
 *     arguments, plus the output object.
 * @param {array} a The list to map over (array or array-like object).
 * @param {*} [out=[]] The initial accumulator, if given; `a`, if defined and
 *     falsey.
 *
 * @returns {*} The `out` object, having been mapped through the iteratee
 *     function over the list.
 */
export const map = (f, a, out = []) => reduce((out, v, i) => {
        out[i] = f(v, i, a, out);

        return out;
    },
    a, (out || a));

export default map;
