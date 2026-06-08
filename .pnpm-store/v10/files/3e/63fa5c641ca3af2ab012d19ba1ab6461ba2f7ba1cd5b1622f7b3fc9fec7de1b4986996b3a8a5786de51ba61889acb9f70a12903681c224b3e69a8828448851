/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var Vue = require('vue');
var observe = require('../../_chunks/dep-fb83a452.js');
var dom = require('../../_chunks/dep-06276759.js');
require('../../_chunks/dep-953a77eb.js');
require('../../_chunks/dep-8abdfb41.js');
require('../../_chunks/dep-48f60c78.js');
require('../../_chunks/dep-b3b464e8.js');
require('@babel/runtime/helpers/typeof');
require('../../_chunks/dep-0813861e.js');
require('../../_chunks/dep-a55e8a08.js');
require('../../_chunks/dep-87589faa.js');
require('../../_chunks/dep-05f89f0d.js');

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
      if (!(childRef !== null && childRef !== void 0 && childRef.value) || !(containerRef !== null && containerRef !== void 0 && containerRef.value)) return;
      observe.observe(childRef.value, containerRef.value, init, height);
    });
  });
  return {
    hasLazyLoadHolder: hasLazyLoadHolder,
    tRowHeight: tRowHeight
  };
}

exports["default"] = useLazyLoad;
//# sourceMappingURL=useLazyLoad.js.map
