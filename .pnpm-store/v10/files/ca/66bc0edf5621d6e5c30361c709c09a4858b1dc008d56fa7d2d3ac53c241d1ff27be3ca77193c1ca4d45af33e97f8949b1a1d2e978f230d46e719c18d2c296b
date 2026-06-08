/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var Vue = require('vue');
require('@babel/runtime/helpers/toConsumableArray');
require('@babel/runtime/helpers/typeof');
require('../../_chunks/dep-953a77eb.js');
require('../../config-provider/hooks/useConfig.js');
require('@babel/runtime/helpers/slicedToArray');
require('../../_chunks/dep-cc66acf1.js');
var index = require('../../_chunks/dep-b6058ff9.js');
require('@babel/runtime/helpers/defineProperty');
require('../../_chunks/dep-8abdfb41.js');
require('../../_chunks/dep-5d7e2375.js');
require('../../_chunks/dep-94a7dc2d.js');
require('dayjs');
require('../../_chunks/dep-92e23f17.js');
require('../../_chunks/dep-0ff616fe.js');
require('../../_chunks/dep-5f52cd42.js');
require('../../_chunks/dep-48f60c78.js');
require('../../_chunks/dep-b3b464e8.js');
require('../../_chunks/dep-0813861e.js');
require('../../_chunks/dep-f57bcb19.js');
require('../../_chunks/dep-dc4bbc14.js');
require('../../_chunks/dep-05f89f0d.js');
require('../../_chunks/dep-87589faa.js');
require('../../_chunks/dep-e27ea667.js');
require('../../_chunks/dep-165ca38a.js');
require('../../_chunks/dep-32412d92.js');
require('../../_chunks/dep-a8a3d718.js');
require('../../_chunks/dep-54e566d9.js');
require('../../_chunks/dep-591a72de.js');
require('../../_chunks/dep-a55e8a08.js');
require('../../_chunks/dep-8adeee89.js');
require('../../_chunks/dep-4d2ef282.js');
require('../../_chunks/dep-929933ce.js');
require('../../_chunks/dep-6b1f0ef8.js');
require('@babel/runtime/helpers/createClass');
require('@babel/runtime/helpers/classCallCheck');

var ANIMATION_TIME = 100;
function useInputWidth(props, inputRef, innerValue) {
  var _toRefs = Vue.toRefs(props),
    autoWidth = _toRefs.autoWidth,
    placeholder = _toRefs.placeholder;
  var inputPreRef = Vue.ref(null);
  var observerTimer = Vue.ref(null);
  var updateInputWidth = function updateInputWidth() {
    if (!inputPreRef.value || !inputRef.value) return;
    inputRef.value.style.width = getComputedStyle(inputPreRef.value).width;
  };
  index.useResizeObserver(inputPreRef, function () {
    if (autoWidth.value) {
      observerTimer.value = setTimeout(function () {
        updateInputWidth();
        clearTimeout(observerTimer.value);
      }, ANIMATION_TIME);
    }
  });
  Vue.onBeforeUnmount(function () {
    clearTimeout(observerTimer.value);
  });
  var addListeners = function addListeners() {
    Vue.watch([innerValue, placeholder], function () {
      if (!autoWidth.value) return;
      Vue.nextTick(function () {
        updateInputWidth();
      });
    }, {
      immediate: true
    });
  };
  Vue.onMounted(function () {
    if (autoWidth.value) {
      addListeners();
    }
  });
  return {
    inputPreRef: inputPreRef
  };
}

exports.useInputWidth = useInputWidth;
//# sourceMappingURL=useInputWidth.js.map
