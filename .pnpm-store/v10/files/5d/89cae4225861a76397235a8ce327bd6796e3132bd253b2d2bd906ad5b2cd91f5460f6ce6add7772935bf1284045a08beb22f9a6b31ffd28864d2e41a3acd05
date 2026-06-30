/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var Vue = require('vue');
var observe = require('../../_chunks/dep-fb83a452.js');

function useCheckboxLazyLoad(labelRef, lazyLoad) {
  var ioObserver = Vue.ref();
  var showCheckbox = Vue.ref(true);
  var handleLazyLoad = function handleLazyLoad() {
    if (!lazyLoad.value) return;
    showCheckbox.value = false;
    var io = observe.observe(labelRef.value, null, function () {
      showCheckbox.value = true;
    }, 0);
    ioObserver.value = io;
  };
  Vue.onMounted(handleLazyLoad);
  Vue.watch([lazyLoad, labelRef], handleLazyLoad);
  Vue.onBeforeUnmount(function () {
    if (!lazyLoad.value) return;
    ioObserver.value.unobserve(labelRef.value);
  });
  return {
    showCheckbox: showCheckbox
  };
}

exports["default"] = useCheckboxLazyLoad;
exports.useCheckboxLazyLoad = useCheckboxLazyLoad;
//# sourceMappingURL=useCheckboxLazyLoad.js.map
