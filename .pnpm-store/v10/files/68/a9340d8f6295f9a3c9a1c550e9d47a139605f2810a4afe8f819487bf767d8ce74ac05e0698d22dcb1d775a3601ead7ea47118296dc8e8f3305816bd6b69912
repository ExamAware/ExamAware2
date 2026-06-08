/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var dom = require('../../_chunks/dep-06276759.js');
require('vue');
require('../../_chunks/dep-953a77eb.js');
require('../../_chunks/dep-8abdfb41.js');
require('../../_chunks/dep-48f60c78.js');
require('../../_chunks/dep-b3b464e8.js');
require('@babel/runtime/helpers/typeof');
require('../../_chunks/dep-0813861e.js');
require('../../_chunks/dep-a55e8a08.js');
require('../../_chunks/dep-87589faa.js');
require('../../_chunks/dep-05f89f0d.js');

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
  if (dom.elementInViewport(element, parent)) return;
  parent.scrollTop = element.offsetTop - parent.offsetTop;
}

exports.getScrollParent = getScrollParent;
exports.scrollToParentVisibleArea = scrollToParentVisibleArea;
//# sourceMappingURL=getScrollParent.js.map
