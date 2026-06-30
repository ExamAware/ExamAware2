/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

'use strict';

var _baseGetTag = require('./dep-b3b464e8.js');
var isObjectLike = require('./dep-05f89f0d.js');

/** `Object#toString` result references. */
var boolTag = '[object Boolean]';

/**
 * Checks if `value` is classified as a boolean primitive or object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a boolean, else `false`.
 * @example
 *
 * _.isBoolean(false);
 * // => true
 *
 * _.isBoolean(null);
 * // => false
 */
function isBoolean(value) {
  return value === true || value === false || isObjectLike.isObjectLike(value) && _baseGetTag.baseGetTag(value) == boolTag;
}

exports.isBoolean = isBoolean;
//# sourceMappingURL=dep-d45110a6.js.map
