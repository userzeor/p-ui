const c = function() {
  let o = arguments.length, e = arguments[0];
  i(e) || (e = {});
  for (let r = 1; r < o; r++) {
    let n = arguments[r];
    if (i(n))
      for (let t in n)
        t === "__proto__" || e === n[t] || (i(n[t]) ? e[t] = c(e[t], n[t]) : e[t] = n[t]);
  }
  return e;
}, i = (o) => typeof o == "object" && Object.prototype.toString.call(o) === "[object Object]";
export {
  c as deepAssign
};
