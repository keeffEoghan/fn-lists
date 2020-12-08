/**
 * Shows whether a given object is iterable - either strictly or not.
 *
 * @param {*} x An object to check for iterability.
 * @param {boolean} [strict=false] Whether to strictly check; strict checks only
 *     allow objects with a `Symbol.iterator` function; loose checks also allow
 *     objects with just a numeric `length` property.
 *
 * @returns {boolean} Whether the given object seems iterable.
 */
export const iterable = (x, strict = false) =>
    (x instanceof Object) &&
        ((typeof x[Symbol.iterator] === 'function') ||
        (strict || toString.call(x.length) === '[object Number]'));

export default iterable;
