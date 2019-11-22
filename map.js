import { reduce } from './reduce';

/**
 * Map an array-like object.
 * Similar to native, but with iteratee-first arguments; and allows the object
 * into which properties will be mapped to be defined (a new array, by default),
 * avoiding always creating new arrays.
 *
 * @param {function} f The iteratee function, given standard arguments.
 * @param {array} a The array operand.
 * @param {*} [out=[]] The initial accumulator, if given; `a`, if defined and falsey.
 */
export const map = (f, a, out = []) => reduce((out, v, i) => {
        out[i] = f(v, i, a);

        return out;
    },
    a, (out || a));

export default map;
