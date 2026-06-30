/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import { e as getIEVersion } from './dep-80a99546.js';

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
  if (getIEVersion() <= 11) {
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

export { getScrollbarWidthWithCSS as a, getScrollbarWidth as g };
//# sourceMappingURL=dep-167f0981.js.map
