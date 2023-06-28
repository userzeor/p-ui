function o(i) {
  return { all: i = i || /* @__PURE__ */ new Map(), on: function(e, n) {
    var t = i.get(e);
    t ? t.push(n) : i.set(e, [n]);
  }, off: function(e, n) {
    var t = i.get(e);
    t && (n ? t.splice(t.indexOf(n) >>> 0, 1) : i.set(e, []));
  }, emit: function(e, n) {
    var t = i.get(e);
    t && t.slice().map(function(c) {
      c(n);
    }), (t = i.get("*")) && t.slice().map(function(c) {
      c(e, n);
    });
  } };
}
const f = o, s = new f();
export {
  s as emitter
};
