/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

function getCSSValue(v) {
  return Number.isNaN(Number(v)) ? v : "".concat(Number(v), "px");
}
function initDragEvent(dragBox) {
  var target = dragBox;
  var windowInnerWidth = window.innerWidth || document.documentElement.clientWidth;
  var windowInnerHeight = window.innerHeight || document.documentElement.clientHeight;
  target.addEventListener("mousedown", function (targetEvent) {
    var disX = targetEvent.clientX - target.offsetLeft;
    var disY = targetEvent.clientY - target.offsetTop;
    var dialogW = target.offsetWidth;
    var dialogH = target.offsetHeight;
    if (dialogW > windowInnerWidth || dialogH > windowInnerHeight) return;
    function mouseMoverHandler(documentEvent) {
      var left = documentEvent.clientX - disX;
      var top = documentEvent.clientY - disY;
      if (left < 0) left = 0;
      if (top < 0) top = 0;
      if (windowInnerWidth - target.offsetWidth - left < 0) left = windowInnerWidth - target.offsetWidth;
      if (windowInnerHeight - target.offsetHeight - top < 0) top = windowInnerHeight - target.offsetHeight;
      target.style.position = "absolute";
      target.style.left = "".concat(left, "px");
      target.style.top = "".concat(top, "px");
    }
    function mouseUpHandler() {
      document.removeEventListener("mousemove", mouseMoverHandler);
      document.removeEventListener("mouseup", mouseUpHandler);
    }
    document.addEventListener("mousemove", mouseMoverHandler);
    document.addEventListener("mouseup", mouseUpHandler);
    document.addEventListener("dragend", mouseUpHandler);
  });
}

export { getCSSValue, initDragEvent };
//# sourceMappingURL=index.js.map
