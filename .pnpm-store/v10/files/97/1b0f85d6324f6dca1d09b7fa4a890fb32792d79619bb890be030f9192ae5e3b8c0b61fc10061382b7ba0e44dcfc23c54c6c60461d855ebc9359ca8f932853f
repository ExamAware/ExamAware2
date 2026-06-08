/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import { ref, computed } from 'vue';

function useMoreAction(props, pageCount, innerCurrent) {
  var prevMore = ref(false);
  var nextMore = ref(false);
  var curPageLeftCount = computed(function () {
    return Math.ceil((props.foldedMaxPageBtn - 1) / 2);
  });
  var curPageRightCount = computed(function () {
    return Math.floor((props.foldedMaxPageBtn - 1) / 2);
  });
  var isPrevMoreShow = computed(function () {
    return 2 + curPageLeftCount.value < innerCurrent.value;
  });
  var isNextMoreShow = computed(function () {
    return pageCount.value - 1 - curPageRightCount.value > innerCurrent.value;
  });
  return {
    prevMore: prevMore,
    nextMore: nextMore,
    curPageLeftCount: curPageLeftCount,
    curPageRightCount: curPageRightCount,
    isPrevMoreShow: isPrevMoreShow,
    isNextMoreShow: isNextMoreShow
  };
}

export { useMoreAction };
//# sourceMappingURL=useMoreAction.js.map
