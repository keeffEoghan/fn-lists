const e = Array.prototype.forEach;

export const each = (f, a) => e.call(a, f);

export default each;
