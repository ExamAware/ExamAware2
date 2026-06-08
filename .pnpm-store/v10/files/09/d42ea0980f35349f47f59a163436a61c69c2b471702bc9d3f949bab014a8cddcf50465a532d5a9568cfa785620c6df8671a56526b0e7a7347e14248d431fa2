/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

'use strict';

var Vue = require('vue');

function useResizeObserver(container, callback) {
  if (typeof window === "undefined") return;
  var isSupport = window && window.ResizeObserver;
  if (!isSupport) return;
  var containerObserver = null;
  var cleanupObserver = function cleanupObserver() {
    if (!containerObserver || !container.value) return;
    containerObserver.unobserve(container.value);
    containerObserver.disconnect();
    containerObserver = null;
  };
  var addObserver = function addObserver(el) {
    containerObserver = new ResizeObserver(callback);
    containerObserver.observe(el);
  };
  container && Vue.watch(container, function (el) {
    cleanupObserver();
    el && addObserver(el);
  }, {
    immediate: true,
    flush: "post"
  });
  Vue.onBeforeUnmount(function () {
    cleanupObserver();
  });
}

exports.useResizeObserver = useResizeObserver;
//# sourceMappingURL=dep-b6058ff9.js.map
