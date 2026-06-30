/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import { computed, ref, onMounted, nextTick } from 'vue';
import { o as observe } from './dep-6264b0a7.js';
import { i as isServer } from './dep-16bcfabc.js';
import 'lodash-es';

function useLazyLoad(containerRef, childRef, params) {
  var tRowHeight = computed(function () {
    return Math.max(params.rowHeight || 48, 48);
  });
  var isInit = ref(false);
  var hasLazyLoadHolder = computed(function () {
    return (params === null || params === void 0 ? void 0 : params.type) === "lazy" && !isInit.value;
  });
  var requestAnimationFrame = !isServer && window.requestAnimationFrame || function (cb) {
    return setTimeout(cb, 16.6);
  };
  var init = function init() {
    if (!isInit.value) {
      requestAnimationFrame(function () {
        isInit.value = true;
      });
    }
  };
  onMounted(function () {
    if ((params === null || params === void 0 ? void 0 : params.type) !== "lazy") return;
    nextTick(function () {
      var bufferSize = Math.max(10, params.bufferSize || 10);
      var height = tRowHeight.value * bufferSize;
      observe(childRef.value, containerRef.value, init, height);
    });
  });
  return {
    hasLazyLoadHolder: hasLazyLoadHolder,
    tRowHeight: tRowHeight
  };
}

export { useLazyLoad as u };
//# sourceMappingURL=dep-1da4c51c.js.map
