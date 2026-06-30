/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var Vue = require('vue');
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

var useMouse = function useMouse() {
  var x = Vue.ref(0);
  var y = Vue.ref(0);
  var onMouseMove = function onMouseMove(e) {
    x.value = e.clientX;
    y.value = e.clientY;
  };
  if (!dom.isServer) {
    Vue.onMounted(function () {
      window.addEventListener("mousemove", onMouseMove, {
        passive: true
      });
    });
    Vue.onUnmounted(function () {
      window.removeEventListener("mousemove", onMouseMove);
    });
  }
  return {
    x: x,
    y: y
  };
};

exports.useMouse = useMouse;
//# sourceMappingURL=index.js.map
