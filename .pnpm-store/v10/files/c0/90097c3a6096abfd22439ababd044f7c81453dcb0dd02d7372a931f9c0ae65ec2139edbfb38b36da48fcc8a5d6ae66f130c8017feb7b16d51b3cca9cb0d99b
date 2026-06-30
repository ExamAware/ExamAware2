/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

'use strict';

var helper = require('./dep-55c70201.js');

function getScrollbarWidthWithCSS() {
  var defaultScrollbarWidth = 6;
  if (typeof navigator === "undefined" || !navigator) return defaultScrollbarWidth;
  if (/(Chrome|Safari)/i.test(navigator.userAgent)) return defaultScrollbarWidth;
  var scrollDiv = document.createElement("div");
  scrollDiv.style.cssText = "width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;";
  document.body.appendChild(scrollDiv);
  var scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
  document.body.removeChild(scrollDiv);
  if (/Firefox/.test(navigator.userAgent)) {
    scrollbarWidth -= 4;
  }
  if (helper.getIEVersion() <= 11) {
    scrollbarWidth = 12;
  }
  return scrollbarWidth;
}
function getScrollbarWidth() {
  var container = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : document.body;
  if (container === document.body) {
    return window.innerWidth - document.documentElement.clientWidth;
  }
  return container.offsetWidth - container.clientWidth;
}

exports.getScrollbarWidth = getScrollbarWidth;
exports.getScrollbarWidthWithCSS = getScrollbarWidthWithCSS;
//# sourceMappingURL=dep-7067edce.js.map
