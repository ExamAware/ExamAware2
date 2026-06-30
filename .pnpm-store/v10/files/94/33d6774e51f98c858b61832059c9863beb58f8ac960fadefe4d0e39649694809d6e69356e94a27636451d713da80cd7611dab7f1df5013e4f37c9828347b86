/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import { ref, reactive } from 'vue';

function useDragSorter(props) {
  var sortOnDraggable = props.sortOnDraggable,
    onDragSort = props.onDragSort,
    onDragOverCheck = props.onDragOverCheck;
  var draggingIndex = ref(-1);
  var dragStartData = ref(null);
  var isDropped = ref(null);
  var startInfo = reactive({
    nodeX: 0,
    nodeWidth: 0,
    mouseX: 0
  });
  var onDragOver = function onDragOver(e, index, record) {
    e.preventDefault();
    if (draggingIndex.value === index || draggingIndex.value === -1) return;
    var target = e.target;
    if (onDragOverCheck !== null && onDragOverCheck !== void 0 && onDragOverCheck.targetClassNameRegExp && !(onDragOverCheck !== null && onDragOverCheck !== void 0 && onDragOverCheck.targetClassNameRegExp.test(target.className))) {
      return;
    }
    if (onDragOverCheck !== null && onDragOverCheck !== void 0 && onDragOverCheck.x && target) {
      if (!startInfo.nodeWidth) return;
      var _target$getBoundingCl = target.getBoundingClientRect(),
        x = _target$getBoundingCl.x,
        width = _target$getBoundingCl.width;
      var targetNodeMiddleX = x + width / 2;
      var draggingNodeLeft = e.clientX - (startInfo.mouseX - startInfo.nodeX);
      var draggingNodeRight = draggingNodeLeft + startInfo.nodeWidth;
      var overlap = false;
      if (draggingNodeLeft > x && draggingNodeLeft < x + width) {
        overlap = draggingNodeLeft < targetNodeMiddleX;
      } else {
        overlap = draggingNodeRight > targetNodeMiddleX;
      }
      if (!overlap) return;
    }
    onDragSort === null || onDragSort === void 0 || onDragSort({
      currentIndex: draggingIndex.value,
      current: dragStartData,
      target: record,
      targetIndex: index
    });
    draggingIndex.value = index;
  };
  if (!sortOnDraggable) {
    return {};
  }
  function onDragStart(e, index, record) {
    draggingIndex.value = index;
    dragStartData.value = record;
    var target = e.target;
    if (onDragOverCheck && target) {
      var _target$getBoundingCl2 = target.getBoundingClientRect(),
        x = _target$getBoundingCl2.x,
        width = _target$getBoundingCl2.width;
      startInfo.nodeX = x;
      startInfo.nodeWidth = width;
      startInfo.mouseX = e.clientX;
    }
  }
  function _onDrop() {
    isDropped.value = true;
  }
  function onDragEnd() {
    if (!isDropped.value) ;
    isDropped.value = false;
    draggingIndex.value = -1;
    dragStartData.value = null;
  }
  function getDragProps(index, record) {
    if (sortOnDraggable) {
      return {
        draggable: true,
        onDragstart: function onDragstart(e) {
          onDragStart(e, index, record);
        },
        onDragover: function onDragover(e) {
          onDragOver(e, index, record);
        },
        onDrop: function onDrop() {
          _onDrop();
        },
        onDragend: function onDragend() {
          onDragEnd();
        }
      };
    }
    return {};
  }
  return {
    onDragStart: onDragStart,
    onDragOver: onDragOver,
    onDrop: _onDrop,
    onDragEnd: onDragEnd,
    getDragProps: getDragProps,
    dragging: draggingIndex.value !== -1
  };
}

export { useDragSorter };
//# sourceMappingURL=useDragSorter.js.map
