import map from './map';

/**
 * Shuffles a given list, to a new object or in-place; allows the object
 * into which properties will be mapped to be defined (a new array, by default),
 * avoiding always creating new arrays.
 *
 * @see [map]{@link ./map.js#map}
 *
 * @param {array} a The list to shuffle (array or array-like list).
 * @param {*} [to=[]] The initial accumulator, if given; `a` if falsey; or a new
 *     array if not given.
 *
 * @returns {*} The result of mapping `to` through the iteratee function over
 *     the `a` list.
 */
export const shuffle = map.bind(null, (i, _, a, to) => {
    const j = Math.floor(Math.random()*a.length);
    const v = a[j];

    to[j] = i;

    return v;
});

export default shuffle;
