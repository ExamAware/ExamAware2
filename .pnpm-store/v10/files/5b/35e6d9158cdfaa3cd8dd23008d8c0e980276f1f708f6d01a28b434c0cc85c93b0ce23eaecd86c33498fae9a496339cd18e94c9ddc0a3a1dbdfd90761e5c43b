/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import { n as elementInViewport } from '../../_chunks/dep-16bcfabc.js';
import 'vue';
import 'lodash-es';
import '../../_chunks/dep-fe23be6e.js';
import '../../_chunks/dep-81b01cae.js';

function getScrollParent(element) {
  var style = window.getComputedStyle(element);
  var excludeStaticParent = style.position === "absolute";
  var overflowRegex = /(auto|scroll)/;
  if (style.position === "fixed") return document.body;
  for (var parent = element; parent.parentElement;) {
    parent = parent.parentElement;
    style = window.getComputedStyle(parent);
    if (excludeStaticParent && style.position === "static") {
      continue;
    }
    if (overflowRegex.test(style.overflow + style.overflowY + style.overflowX)) return parent;
  }
  return document.body;
}
function scrollToParentVisibleArea(element) {
  var parent = getScrollParent(element);
  if (parent === document.body) return;
  if (elementInViewport(element, parent)) return;
  parent.scrollTop = element.offsetTop - parent.offsetTop;
}

export { getScrollParent, scrollToParentVisibleArea };
//# sourceMappingURL=getScrollParent.js.map
