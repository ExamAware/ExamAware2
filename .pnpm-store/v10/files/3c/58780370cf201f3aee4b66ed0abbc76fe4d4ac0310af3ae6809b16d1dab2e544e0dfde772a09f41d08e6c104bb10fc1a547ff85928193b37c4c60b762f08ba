/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import _toConsumableArray from '@babel/runtime/helpers/toConsumableArray';
import { ref } from 'vue';

function useDragSort(currentValue, curPageData, handleDataChange) {
  var draggingIndex = ref(null);
  var dragoverIndex = ref(null);
  var dragoverPos = ref(null);
  var onDragStart = function onDragStart(e) {
    var index = Number(e.target.dataset.index);
    draggingIndex.value = index;
  };
  var onDragOver = function onDragOver(e) {
    e.preventDefault();
    if (e.currentTarget) {
      var currentElement = e.currentTarget;
      var index = Number(currentElement.dataset.index);
      var elemHeight = currentElement.offsetHeight;
      var dragY = e.clientY - currentElement.getBoundingClientRect().top;
      var insertAreaPercent = 0.3;
      var insertAreaHeight = elemHeight * insertAreaPercent;
      dragoverIndex.value = index;
      if (dragoverIndex.value === draggingIndex.value) {
        dragoverPos.value = "";
        return;
      }
      if (dragY < insertAreaHeight) {
        dragoverPos.value = "top";
      } else if (dragY > elemHeight - insertAreaHeight) {
        dragoverPos.value = "bottom";
      } else {
        dragoverPos.value = "center";
      }
    }
  };
  var onDragLeave = function onDragLeave() {
    dragoverPos.value = "";
    dragoverIndex.value = null;
  };
  var onDragEnd = function onDragEnd() {
    draggingIndex.value = null;
    dragoverIndex.value = null;
    dragoverPos.value = "";
  };
  var onDrop = function onDrop(e) {
    e.preventDefault();
    var currentDraggingIndex = draggingIndex.value;
    var currentDragoverIndex = dragoverIndex.value;
    draggingIndex.value = null;
    dragoverIndex.value = null;
    dragoverPos.value = "";
    if (currentDraggingIndex === currentDragoverIndex) {
      return;
    }
    var newData = _toConsumableArray(currentValue.value);
    var sourceItem = curPageData.value[currentDraggingIndex].value;
    var targetItem = curPageData.value[currentDragoverIndex].value;
    var sourceIndex = newData.indexOf(sourceItem);
    var targetIndex = newData.indexOf(targetItem);
    newData.splice(sourceIndex, 1);
    if (dragoverPos.value === "bottom") {
      targetIndex += 1;
    }
    newData.splice(targetIndex, 0, sourceItem);
    handleDataChange === null || handleDataChange === void 0 || handleDataChange(newData, [sourceItem, targetItem]);
  };
  return {
    onDragStart: onDragStart,
    onDragEnd: onDragEnd,
    onDrop: onDrop,
    onDragOver: onDragOver,
    onDragLeave: onDragLeave
  };
}

export { useDragSort as default };
//# sourceMappingURL=useDragSort.js.map
