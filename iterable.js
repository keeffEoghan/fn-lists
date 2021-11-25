/**
 * The various iterable status an object may have - with an `iterator` function,
 * numeric `length`, both, or neither.
 *
 * @type {object<boolean,string>}
 */
export const iterableStatus = {
    // Legible.
    none: false, iterator: 'iterator', length: 'length', all: true,
    // Quick lookups.
    ['']: false, ['iterator:']: 'iterator', ['length:']: 'length',
    ['iterator:length:']: true
};

/**
 * Shows whether a given object is iterable - with an `iterator` function,
 * numeric `length`, none, or all.
 *
 * @see iterableStatus
 *
 * @param {*} x An object to check.
 *
 * @returns {boolean|string} Whether the given object seems iterable - with a
 *     `Symbol.iterator` function; a numeric `length` property; none, or all.
 */
export function iterable(x) {
    if(!(x instanceof Object)) { return iterableStatus.none; }

    const iterator = ((typeof x[Symbol.iterator] === 'function') || '');
    const length = (Number.isFinite(x.length) || '');

    return iterableStatus[(iterator && 'iterator:')+(length && 'length:')];
}

export default iterable;
