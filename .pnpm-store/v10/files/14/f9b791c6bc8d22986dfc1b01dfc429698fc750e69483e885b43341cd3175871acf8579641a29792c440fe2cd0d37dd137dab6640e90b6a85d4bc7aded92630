/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

'use strict';

var _getTag = require('./dep-4d2ef282.js');
var _baseUnary = require('./dep-dc4bbc14.js');
var isArray = require('./dep-87589faa.js');
var isArrayLike = require('./dep-165ca38a.js');
var _overArg = require('./dep-e27ea667.js');

/** `Object#toString` result references. */
var mapTag = '[object Map]',
  setTag = '[object Set]';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Checks if `value` is an empty object, collection, map, or set.
 *
 * Objects are considered empty if they have no own enumerable string keyed
 * properties.
 *
 * Array-like values such as `arguments` objects, arrays, buffers, strings, or
 * jQuery-like collections are considered empty if they have a `length` of `0`.
 * Similarly, maps and sets are considered empty if they have a `size` of `0`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is empty, else `false`.
 * @example
 *
 * _.isEmpty(null);
 * // => true
 *
 * _.isEmpty(true);
 * // => true
 *
 * _.isEmpty(1);
 * // => true
 *
 * _.isEmpty([1, 2, 3]);
 * // => false
 *
 * _.isEmpty({ 'a': 1 });
 * // => false
 */
function isEmpty(value) {
  if (value == null) {
    return true;
  }
  if (isArrayLike.isArrayLike(value) && (isArray.isArray(value) || typeof value == 'string' || typeof value.splice == 'function' || _overArg.isBuffer(value) || _overArg.isTypedArray(value) || _baseUnary.isArguments(value))) {
    return !value.length;
  }
  var tag = _getTag.getTag(value);
  if (tag == mapTag || tag == setTag) {
    return !value.size;
  }
  if (_overArg.isPrototype(value)) {
    return !_getTag.baseKeys(value).length;
  }
  for (var key in value) {
    if (hasOwnProperty.call(value, key)) {
      return false;
    }
  }
  return true;
}

exports.isEmpty = isEmpty;
//# sourceMappingURL=dep-06a7e589.js.map
