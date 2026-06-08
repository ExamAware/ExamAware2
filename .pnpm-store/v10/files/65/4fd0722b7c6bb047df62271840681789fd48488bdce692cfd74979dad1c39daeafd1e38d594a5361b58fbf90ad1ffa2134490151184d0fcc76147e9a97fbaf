/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var common = require('../../_chunks/dep-6280a7f6.js');

function useKeyboardEvent(handleChange) {
  var keyboardEventListener = function keyboardEventListener(e) {
    var isCheckedCode = common.CHECKED_CODE_REG.test(e.key) || common.CHECKED_CODE_REG.test(e.code);
    if (isCheckedCode) {
      e.preventDefault();
      var _e$currentTarget$quer = e.currentTarget.querySelector("input"),
        disabled = _e$currentTarget$quer.disabled;
      !disabled && handleChange(e);
    }
  };
  var onCheckboxFocus = function onCheckboxFocus(e) {
    e.currentTarget.addEventListener("keydown", keyboardEventListener);
  };
  var onCheckboxBlur = function onCheckboxBlur(e) {
    e.currentTarget.removeEventListener("keydown", keyboardEventListener);
  };
  return {
    onCheckboxFocus: onCheckboxFocus,
    onCheckboxBlur: onCheckboxBlur
  };
}

exports["default"] = useKeyboardEvent;
exports.useKeyboardEvent = useKeyboardEvent;
//# sourceMappingURL=useKeyboardEvent.js.map
