/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

'use strict';

var _typeof = require('@babel/runtime/helpers/typeof');
var eq = require('./dep-f57bcb19.js');
var isArrayLike = require('./dep-165ca38a.js');
var _isIndex = require('./dep-32412d92.js');
var isObject = require('./dep-0813861e.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var _typeof__default = /*#__PURE__*/_interopDefaultLegacy(_typeof);

/**
 * Checks if the given arguments are from an iteratee call.
 *
 * @private
 * @param {*} value The potential iteratee value argument.
 * @param {*} index The potential iteratee index or key argument.
 * @param {*} object The potential iteratee object argument.
 * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
 *  else `false`.
 */
function isIterateeCall(value, index, object) {
  if (!isObject.isObject(object)) {
    return false;
  }
  var type = _typeof__default["default"](index);
  if (type == 'number' ? isArrayLike.isArrayLike(object) && _isIndex.isIndex(index, object.length) : type == 'string' && index in object) {
    return eq.eq(object[index], value);
  }
  return false;
}

exports.isIterateeCall = isIterateeCall;
//# sourceMappingURL=dep-591a72de.js.map
