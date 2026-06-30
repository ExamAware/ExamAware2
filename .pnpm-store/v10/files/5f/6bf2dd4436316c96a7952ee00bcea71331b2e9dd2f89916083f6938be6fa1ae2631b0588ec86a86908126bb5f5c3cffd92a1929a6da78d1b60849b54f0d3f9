/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

'use strict';

var Vue = require('vue');

function useListener(type, listener) {
  Vue.onMounted(function () {
    window.addEventListener(type, listener);
  });
  Vue.onBeforeUnmount(function () {
    window.removeEventListener(type, listener);
  });
}
function useResize(listener, observer) {
  useListener("resize", listener);
  var resizeObserver = null;
  Vue.onMounted(function () {
    if (!window.ResizeObserver || !observer) return;
    resizeObserver = new window.ResizeObserver(listener);
    resizeObserver.observe(observer);
  });
  Vue.onBeforeUnmount(function () {
    var _resizeObserver;
    (_resizeObserver = resizeObserver) === null || _resizeObserver === void 0 || _resizeObserver.disconnect();
  });
}

exports.useListener = useListener;
exports.useResize = useResize;
//# sourceMappingURL=dep-5d4742f2.js.map
