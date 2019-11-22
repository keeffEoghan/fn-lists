export const wrapIndex = (i, l) => ((i%l)+l)%l;

export const wrapGet = (i, a) => a[wrapIndex(i, a.length)];

export default wrapIndex;
