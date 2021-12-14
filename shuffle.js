import map from './map';

const { floor, random } = Math;

/**
 * Shuffles a given list, to a new object or in-place; allows the object
 * into which properties will be mapped to be defined (a new array, by default),
 * avoiding always creating new arrays.
 *
 * @see [map]{@link ./map.js#map}
 *
 * @param {array|*} a The list to shuffle; array or array-like list.
 * @param {false|*} [to=[]] The initial accumulator, if given; `a` if falsey; or
 *     a new array if not given.
 *
 * @returns {*} The result of mapping `to` through the iteratee function over
 *     the `a` list.
 */
export const shuffle = map.bind(null, (x, _, a, to) => {
    const i = floor(random()*a.length);
    const y = a[i];

    to[i] = x;

    return y;
});

export default shuffle;
