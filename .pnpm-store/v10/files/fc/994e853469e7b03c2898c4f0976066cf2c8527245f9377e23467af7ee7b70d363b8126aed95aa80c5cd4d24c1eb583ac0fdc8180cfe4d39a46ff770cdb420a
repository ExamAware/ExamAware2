/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import { j as getWindowScroll, p as getElmCssPropValue, h as isFixed } from '../../_chunks/dep-16bcfabc.js';
import 'vue';
import 'lodash-es';
import '../../_chunks/dep-fe23be6e.js';
import '../../_chunks/dep-81b01cae.js';

function getRelativePosition(elm) {
  var relativeElm = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document.body;
  var _getWindowScroll = getWindowScroll(),
    scrollTop = _getWindowScroll.scrollTop,
    scrollLeft = _getWindowScroll.scrollLeft;
  var _elm$getBoundingClien = elm.getBoundingClientRect(),
    elmTop = _elm$getBoundingClien.top,
    elmLeft = _elm$getBoundingClien.left;
  var _relativeElm$getBound = relativeElm.getBoundingClientRect(),
    relElmTop = _relativeElm$getBound.top,
    relElmLeft = _relativeElm$getBound.left;
  var relativeElmPosition = getElmCssPropValue(relativeElm, "position");
  if (relativeElm.tagName.toLowerCase() !== "body" && relativeElmPosition === "relative" || relativeElmPosition === "sticky") {
    return {
      top: elmTop - relElmTop,
      left: elmLeft - relElmLeft
    };
  }
  if (isFixed(elm)) {
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

export { getRelativePosition };
//# sourceMappingURL=getRelativePosition.js.map
