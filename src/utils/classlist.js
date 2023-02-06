
// Combines a list of classes into a single string for use by the className prop
export const classList = (...classes) => classes.reduce((p, c) => p + (p && c ? ' ' : '') + (c ? c : ''), '');
