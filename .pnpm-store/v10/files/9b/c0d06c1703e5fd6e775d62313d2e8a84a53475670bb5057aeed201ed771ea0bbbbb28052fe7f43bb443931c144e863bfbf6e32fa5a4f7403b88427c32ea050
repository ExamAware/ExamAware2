/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

'use strict';

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

exports.observe = observe;
//# sourceMappingURL=dep-fb83a452.js.map
