/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import { C as CHECKED_CODE_REG } from '../../_chunks/dep-d36c4a3f.mjs';

function useKeyboardEvent(handleChange) {
  var keyboardEventListener = function keyboardEventListener(e) {
    var isCheckedCode = CHECKED_CODE_REG.test(e.key) || CHECKED_CODE_REG.test(e.code);
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

export { useKeyboardEvent as default, useKeyboardEvent };
//# sourceMappingURL=useKeyboardEvent.mjs.map
