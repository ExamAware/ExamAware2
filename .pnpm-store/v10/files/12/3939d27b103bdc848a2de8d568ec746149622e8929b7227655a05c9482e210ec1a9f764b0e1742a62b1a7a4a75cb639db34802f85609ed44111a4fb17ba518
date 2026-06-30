/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

'use strict';

var Vue = require('vue');
var observe = require('./dep-fb83a452.js');
var dom = require('./dep-06276759.js');

function useLazyLoad(containerRef, childRef, params) {
  var tRowHeight = Vue.computed(function () {
    return Math.max(params.rowHeight || 48, 48);
  });
  var isInit = Vue.ref(false);
  var hasLazyLoadHolder = Vue.computed(function () {
    return (params === null || params === void 0 ? void 0 : params.type) === "lazy" && !isInit.value;
  });
  var requestAnimationFrame = !dom.isServer && window.requestAnimationFrame || function (cb) {
    return setTimeout(cb, 16.6);
  };
  var init = function init() {
    if (!isInit.value) {
      requestAnimationFrame(function () {
        isInit.value = true;
      });
    }
  };
  Vue.onMounted(function () {
    if ((params === null || params === void 0 ? void 0 : params.type) !== "lazy") return;
    Vue.nextTick(function () {
      var bufferSize = Math.max(10, params.bufferSize || 10);
      var height = tRowHeight.value * bufferSize;
      observe.observe(childRef.value, containerRef.value, init, height);
    });
  });
  return {
    hasLazyLoadHolder: hasLazyLoadHolder,
    tRowHeight: tRowHeight
  };
}

exports.useLazyLoad = useLazyLoad;
//# sourceMappingURL=dep-f75abe2a.js.map
