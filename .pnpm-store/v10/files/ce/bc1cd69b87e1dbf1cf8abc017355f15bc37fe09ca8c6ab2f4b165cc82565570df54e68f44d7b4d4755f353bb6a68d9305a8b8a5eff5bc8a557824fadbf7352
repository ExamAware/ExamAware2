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

function getRelativePosition(elm) {
  var relativeElm = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document.body;
  var _getWindowScroll = dom.getWindowScroll(),
    scrollTop = _getWindowScroll.scrollTop,
    scrollLeft = _getWindowScroll.scrollLeft;
  var _elm$getBoundingClien = elm.getBoundingClientRect(),
    elmTop = _elm$getBoundingClien.top,
    elmLeft = _elm$getBoundingClien.left;
  var _relativeElm$getBound = relativeElm.getBoundingClientRect(),
    relElmTop = _relativeElm$getBound.top,
    relElmLeft = _relativeElm$getBound.left;
  var relativeElmPosition = dom.getElmCssPropValue(relativeElm, "position");
  if (relativeElm.tagName.toLowerCase() !== "body" && relativeElmPosition === "relative" || relativeElmPosition === "sticky") {
    return {
      top: elmTop - relElmTop,
      left: elmLeft - relElmLeft
    };
  }
  if (dom.isFixed(elm)) {
    return {
      top: elmTop,
      left: elmLeft
    };
  }
  return {
    top: elmTop + scrollTop,
    left: elmLeft + scrollLeft
  };
}

exports.getRelativePosition = getRelativePosition;
//# sourceMappingURL=getRelativePosition.js.map
