import { reduce } from './reduce';

/**
 * Map an array-like list.
 * Similar to native, but with iteratee-first arguments; and allows the object
 * into which properties will be mapped to be defined (a new array, by default),
 * avoiding always creating new arrays.
 *
 * @param {function} f The iteratee function, given standard `Array.map`
 *     arguments, and any given `to`.
 * @param {array} a The list to map over (array or array-like list).
 * @param {*} [to=[]] The initial accumulator, if given; `a` if falsey; or a new
 *     array if not given.
 *
 * @returns {*} The result of mapping `to` through the iteratee function over
 *     the `a` list.
 */
export const map = (f, a, to = []) => reduce((to, v, i) => {
        to[i] = f(v, i, a, to);

        return to;
    },
    a, (to || a));

export default map;
