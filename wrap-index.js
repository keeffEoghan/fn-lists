export const wrapIndex = (i, l) => ((i%l)+l)%l;

export const wrapGet = (i, a) => a[wrapIndex(i, a.length)];

export const wrap = { index: wrapIndex, get: wrapGet };

export default wrap;
