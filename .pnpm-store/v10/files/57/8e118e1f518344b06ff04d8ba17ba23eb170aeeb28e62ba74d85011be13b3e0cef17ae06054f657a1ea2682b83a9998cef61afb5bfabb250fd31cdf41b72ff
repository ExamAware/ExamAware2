/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import { onMounted, onBeforeUnmount } from 'vue';

function useListener(type, listener) {
  onMounted(function () {
    window.addEventListener(type, listener);
  });
  onBeforeUnmount(function () {
    window.removeEventListener(type, listener);
  });
}
function useResize(listener, observer) {
  useListener("resize", listener);
  var resizeObserver = null;
  onMounted(function () {
    if (!window.ResizeObserver || !observer) return;
    resizeObserver = new window.ResizeObserver(listener);
    resizeObserver.observe(observer);
  });
  onBeforeUnmount(function () {
    var _resizeObserver;
    (_resizeObserver = resizeObserver) === null || _resizeObserver === void 0 || _resizeObserver.disconnect();
  });
}

export { useListener as a, useResize as u };
//# sourceMappingURL=dep-172a2a45.js.map
