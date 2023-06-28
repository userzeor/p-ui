const t = (r) => typeof Array.isArray > "u" ? Object.prototype.toString.call(r) === "[object Array]" : Array.isArray(r);
export {
  t as isArray
};
