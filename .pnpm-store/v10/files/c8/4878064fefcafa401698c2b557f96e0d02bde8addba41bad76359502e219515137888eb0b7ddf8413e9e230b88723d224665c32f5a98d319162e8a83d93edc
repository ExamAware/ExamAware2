/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import { toRefs, ref, onBeforeUnmount, onMounted, watch, nextTick } from 'vue';
import 'lodash-es';
import '@babel/runtime/helpers/toConsumableArray';
import '@babel/runtime/helpers/typeof';
import '../../_chunks/dep-fe23be6e.js';
import '../../config-provider/hooks/useConfig.js';
import '@babel/runtime/helpers/slicedToArray';
import '../../_chunks/dep-880d05b9.js';
import { u as useResizeObserver } from '../../_chunks/dep-80a77612.js';
import '@babel/runtime/helpers/defineProperty';
import '../../_chunks/dep-81b01cae.js';
import '../../config-provider/utils/context.js';
import '../../_chunks/dep-938cd955.js';
import 'dayjs';
import '@babel/runtime/helpers/createClass';
import '@babel/runtime/helpers/classCallCheck';

var ANIMATION_TIME = 100;
function useInputWidth(props, inputRef, innerValue) {
  var _toRefs = toRefs(props),
    autoWidth = _toRefs.autoWidth,
    placeholder = _toRefs.placeholder;
  var inputPreRef = ref(null);
  var observerTimer = ref(null);
  var updateInputWidth = function updateInputWidth() {
    if (!inputPreRef.value || !inputRef.value) return;
    inputRef.value.style.width = getComputedStyle(inputPreRef.value).width;
  };
  useResizeObserver(inputPreRef, function () {
    if (autoWidth.value) {
      observerTimer.value = setTimeout(function () {
        updateInputWidth();
        clearTimeout(observerTimer.value);
      }, ANIMATION_TIME);
    }
  });
  onBeforeUnmount(function () {
    clearTimeout(observerTimer.value);
  });
  var addListeners = function addListeners() {
    watch([innerValue, placeholder], function () {
      if (!autoWidth.value) return;
      nextTick(function () {
        updateInputWidth();
      });
    }, {
      immediate: true
    });
  };
  onMounted(function () {
    if (autoWidth.value) {
      addListeners();
    }
  });
  return {
    inputPreRef: inputPreRef
  };
}

export { useInputWidth };
//# sourceMappingURL=useInputWidth.js.map
