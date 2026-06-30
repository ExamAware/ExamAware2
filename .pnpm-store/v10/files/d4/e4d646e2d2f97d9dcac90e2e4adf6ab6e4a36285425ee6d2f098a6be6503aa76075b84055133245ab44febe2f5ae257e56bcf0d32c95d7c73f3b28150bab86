/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

function useSameTarget(handleClick) {
  var MOUSEDOWN_TARGET = false;
  var MOUSEUP_TARGET = false;
  var onClick = function onClick(e) {
    if (MOUSEDOWN_TARGET && MOUSEUP_TARGET) {
      handleClick === null || handleClick === void 0 || handleClick(e);
    }
    MOUSEDOWN_TARGET = false;
    MOUSEUP_TARGET = false;
  };
  var onMousedown = function onMousedown(e) {
    MOUSEDOWN_TARGET = e.target === e.currentTarget;
  };
  var onMouseup = function onMouseup(e) {
    MOUSEUP_TARGET = e.target === e.currentTarget;
  };
  return {
    onClick: onClick,
    onMousedown: onMousedown,
    onMouseup: onMouseup
  };
}

export { useSameTarget };
//# sourceMappingURL=useSameTarget.js.map
