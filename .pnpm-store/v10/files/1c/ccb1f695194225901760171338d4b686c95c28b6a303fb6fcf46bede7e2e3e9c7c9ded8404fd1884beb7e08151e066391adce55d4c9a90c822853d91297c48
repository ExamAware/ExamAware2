/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

'use strict';

var _baseGetTag = require('./dep-b3b464e8.js');
var isArray = require('./dep-87589faa.js');
var isObjectLike = require('./dep-05f89f0d.js');

/** `Object#toString` result references. */
var stringTag = '[object String]';

/**
 * Checks if `value` is classified as a `String` primitive or object.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a string, else `false`.
 * @example
 *
 * _.isString('abc');
 * // => true
 *
 * _.isString(1);
 * // => false
 */
function isString(value) {
  return typeof value == 'string' || !isArray.isArray(value) && isObjectLike.isObjectLike(value) && _baseGetTag.baseGetTag(value) == stringTag;
}

exports.isString = isString;
//# sourceMappingURL=dep-a55e8a08.js.map
