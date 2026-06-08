/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var Vue = require('vue');

function useHover(props) {
  var disabled = props.disabled,
    readonly = props.readonly,
    onMouseenter = props.onMouseenter,
    onMouseleave = props.onMouseleave;
  var isHover = Vue.ref(false);
  var addHover = function addHover(context) {
    if (readonly || disabled) return;
    isHover.value = true;
    onMouseenter === null || onMouseenter === void 0 || onMouseenter(context);
  };
  var cancelHover = function cancelHover(context) {
    if (readonly || disabled) return;
    isHover.value = false;
    onMouseleave === null || onMouseleave === void 0 || onMouseleave(context);
  };
  return {
    isHover: isHover,
    addHover: addHover,
    cancelHover: cancelHover
  };
}

exports.useHover = useHover;
//# sourceMappingURL=useHover.js.map
