/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import { ref, onMounted, watch, onBeforeUnmount } from 'vue';
import { o as observe } from '../../_chunks/dep-22ebd6af.mjs';

function useCheckboxLazyLoad(labelRef, lazyLoad) {
  var ioObserver = ref();
  var showCheckbox = ref(true);
  var handleLazyLoad = function handleLazyLoad() {
    if (!lazyLoad.value) return;
    showCheckbox.value = false;
    var io = observe(labelRef.value, null, function () {
      showCheckbox.value = true;
    }, 0);
    ioObserver.value = io;
  };
  onMounted(handleLazyLoad);
  watch([lazyLoad, labelRef], handleLazyLoad);
  onBeforeUnmount(function () {
    if (!lazyLoad.value) return;
    ioObserver.value.unobserve(labelRef.value);
  });
  return {
    showCheckbox: showCheckbox
  };
}

export { useCheckboxLazyLoad as default, useCheckboxLazyLoad };
//# sourceMappingURL=useCheckboxLazyLoad.mjs.map
