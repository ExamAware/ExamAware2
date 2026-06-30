/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var isString = require('../../_chunks/dep-a55e8a08.js');
var isFunction = require('../../_chunks/dep-48f60c78.js');
require('../../_chunks/dep-b3b464e8.js');
require('@babel/runtime/helpers/typeof');
require('../../_chunks/dep-87589faa.js');
require('../../_chunks/dep-05f89f0d.js');
require('../../_chunks/dep-0813861e.js');

function getTargetElm(elm) {
  if (elm) {
    var _process;
    var targetElement = null;
    if (isString.isString(elm)) {
      targetElement = document.querySelector(elm);
    } else if (isFunction.isFunction(elm)) {
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

exports.getTargetElm = getTargetElm;
//# sourceMappingURL=getTargetElm.js.map
