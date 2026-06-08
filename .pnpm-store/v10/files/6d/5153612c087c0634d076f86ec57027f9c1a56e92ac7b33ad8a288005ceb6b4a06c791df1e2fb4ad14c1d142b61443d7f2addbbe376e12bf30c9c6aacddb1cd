/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var Vue = require('vue');

function useMoreAction(props, pageCount, innerCurrent) {
  var prevMore = Vue.ref(false);
  var nextMore = Vue.ref(false);
  var curPageLeftCount = Vue.computed(function () {
    return Math.ceil((props.foldedMaxPageBtn - 1) / 2);
  });
  var curPageRightCount = Vue.computed(function () {
    return Math.floor((props.foldedMaxPageBtn - 1) / 2);
  });
  var isPrevMoreShow = Vue.computed(function () {
    return 2 + curPageLeftCount.value < innerCurrent.value;
  });
  var isNextMoreShow = Vue.computed(function () {
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

exports.useMoreAction = useMoreAction;
//# sourceMappingURL=useMoreAction.js.map
