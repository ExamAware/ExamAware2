/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import { toRefs, ref, onBeforeUnmount, watch, nextTick, onMounted } from 'vue';
import { p as useResizeObserver } from '../../_chunks/dep-7673347f.mjs';
import 'lodash-es';
import '../../_chunks/dep-00b4e06a.mjs';
import '../../_chunks/dep-9f459d8b.mjs';
import '../../_chunks/dep-257428bc.mjs';
import '../../_chunks/dep-51a43106.mjs';
import '../../_chunks/dep-fe644854.mjs';
import '../../config-provider/hooks/useConfig.mjs';
import '../../config-provider/utils/context.mjs';
import '../../_chunks/dep-a4c09318.mjs';
import '../../_chunks/dep-ffb85102.mjs';
import '../../_chunks/dep-ad588525.mjs';
import '../../_chunks/dep-9003fde5.mjs';
import '../../_chunks/dep-22ebd6af.mjs';
import '../../_chunks/dep-cdd448ec.mjs';
import '../../_chunks/dep-97ecacde.mjs';
import '../../_chunks/dep-84fd47b3.mjs';
import '../../_chunks/dep-1dacc319.mjs';
import '../../_chunks/dep-d36c4a3f.mjs';

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
//# sourceMappingURL=useInputWidth.mjs.map
