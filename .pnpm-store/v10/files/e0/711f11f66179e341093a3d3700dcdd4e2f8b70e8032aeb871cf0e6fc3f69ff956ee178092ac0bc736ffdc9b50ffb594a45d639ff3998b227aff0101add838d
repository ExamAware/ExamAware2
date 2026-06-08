/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import { ref } from 'vue';
import { h as getFileList } from '../../_chunks/dep-7d14e543.js';
import '../../_chunks/dep-8295e674.js';

function useDrag(props, accept) {
  var target = ref(null);
  var dragActive = ref(false);
  var handleDrop = function handleDrop(event) {
    var _props$onDrop;
    event.preventDefault();
    dragActive.value = false;
    var files = event.dataTransfer.files;
    var dragFiles = getFileList(files, accept.value);
    (_props$onDrop = props.onDrop) === null || _props$onDrop === void 0 || _props$onDrop.call(props, {
      e: event
    });
    if (dragFiles !== null && dragFiles !== void 0 && dragFiles.length) {
      var _props$onDragFileChan;
      (_props$onDragFileChan = props.onDragFileChange) === null || _props$onDragFileChan === void 0 || _props$onDragFileChan.call(props, dragFiles);
    }
  };
  var handleDragenter = function handleDragenter(event) {
    var _props$onDragenter;
    event.preventDefault();
    target.value = event.target;
    (_props$onDragenter = props.onDragenter) === null || _props$onDragenter === void 0 || _props$onDragenter.call(props, {
      e: event
    });
    dragActive.value = true;
  };
  var handleDragleave = function handleDragleave(event) {
    var _props$onDragleave;
    if (event.target !== target.value) return;
    event.preventDefault();
    (_props$onDragleave = props.onDragleave) === null || _props$onDragleave === void 0 || _props$onDragleave.call(props, {
      e: event
    });
    dragActive.value = false;
  };
  var handleDragover = function handleDragover(event) {
    event.preventDefault();
  };
  return {
    target: target,
    dragActive: dragActive,
    handleDrop: handleDrop,
    handleDragenter: handleDragenter,
    handleDragleave: handleDragleave,
    handleDragover: handleDragover
  };
}

export { useDrag as default };
//# sourceMappingURL=useDrag.js.map
