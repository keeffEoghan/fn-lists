const { fill } = Array.prototype;
const { isFinite } = Number;
const { floor } = Math;

/**
 * Fills list with the given items filled via `Array`'s `fill`.
 *
 * @see Array.constructor
 * @see Array.prototype.fill
 * @see Number.isFinite
 *
 * @param {number|array|*} [l=0] How many items to create, or existing list.
 * @param {*} [value] A value to fill the array with; for `Array`'s `fill`.
 * @param {number} [start] Start index, inclusive; for `Array`'s `fill`.
 * @param {number} [end] End index, exclusive; for `Array`'s `fill`.
 *
 * @returns {array|*} List with items filled as given.
 */
export const range = (l = 0, value, start, end) =>
    fill.call(((isFinite(l))? Array(floor(l)) : l), value, start, end);

export default range;
