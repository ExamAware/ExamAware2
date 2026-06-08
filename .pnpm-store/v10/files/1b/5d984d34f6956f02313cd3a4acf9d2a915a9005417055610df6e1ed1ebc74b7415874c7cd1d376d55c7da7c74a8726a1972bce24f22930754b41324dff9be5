/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

function observe(element, root, callback, marginBottom) {
  if (typeof window === "undefined") return null;
  if (!window || !window.IntersectionObserver) {
    callback();
    return null;
  }
  var io = null;
  try {
    io = new window.IntersectionObserver(function (entries) {
      var entry = entries[0];
      if (entry.isIntersecting) {
        callback();
        io.unobserve(element);
      }
    }, {
      rootMargin: "0px 0px ".concat(marginBottom, "px 0px"),
      root: root
    });
    io.observe(element);
  } catch (e) {
    console.error(e);
    callback();
  }
  return io;
}

export { observe as o };
//# sourceMappingURL=dep-6264b0a7.js.map
