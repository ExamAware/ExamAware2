/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import { isString, isFunction } from 'lodash-es';

function getTargetElm(elm) {
  if (elm) {
    var _process;
    var targetElement = null;
    if (isString(elm)) {
      targetElement = document.querySelector(elm);
    } else if (isFunction(elm)) {
      targetElement = elm();
    } else {
      throw new Error("elm should be string or function");
    }
    if (targetElement) {
      return targetElement;
    }
    if (((_process = process) === null || _process === void 0 || (_process = _process.env) === null || _process === void 0 ? void 0 : _process.NODE_ENV) !== "test") {
      throw new Error("There is no element with given.");
    }
  } else {
    return document.body;
  }
}

export { getTargetElm };
//# sourceMappingURL=getTargetElm.mjs.map
