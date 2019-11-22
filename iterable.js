export const iterable = (x) => (x != null) && typeof x[Symbol.iterator] === 'function';

export default iterable;
