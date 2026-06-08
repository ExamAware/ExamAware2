/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

'use strict';

var toString = require('./dep-71fa6bfc.js');
var cloneDeep = require('./dep-8adeee89.js');
var _baseGet = require('./dep-ac11336c.js');
var last = require('./dep-11b67e11.js');
var _baseSlice = require('./dep-72c4cc44.js');
var _initCloneObject = require('./dep-92e23f17.js');
var configProvider_utils_context = require('./dep-5d7e2375.js');
var _flatRest = require('./dep-dcb859c6.js');

/**
 * Gets the parent value at `path` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array} path The path to get the parent value of.
 * @returns {*} Returns the parent value.
 */
function parent(object, path) {
  return path.length < 2 ? object : _baseGet.baseGet(object, _baseSlice.baseSlice(path, 0, -1));
}

/**
 * The base implementation of `_.unset`.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {Array|string} path The property path to unset.
 * @returns {boolean} Returns `true` if the property is deleted, else `false`.
 */
function baseUnset(object, path) {
  path = _baseGet.castPath(path, object);
  object = parent(object, path);
  return object == null || delete object[_baseGet.toKey(last.last(path))];
}

/**
 * Used by `_.omit` to customize its `_.cloneDeep` use to only clone plain
 * objects.
 *
 * @private
 * @param {*} value The value to inspect.
 * @param {string} key The key of the property to inspect.
 * @returns {*} Returns the uncloned value or `undefined` to defer cloning to `_.cloneDeep`.
 */
function customOmitClone(value) {
  return configProvider_utils_context.isPlainObject(value) ? undefined : value;
}

/** Used to compose bitmasks for cloning. */
var CLONE_DEEP_FLAG = 1,
  CLONE_FLAT_FLAG = 2,
  CLONE_SYMBOLS_FLAG = 4;

/**
 * The opposite of `_.pick`; this method creates an object composed of the
 * own and inherited enumerable property paths of `object` that are not omitted.
 *
 * **Note:** This method is considerably slower than `_.pick`.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The source object.
 * @param {...(string|string[])} [paths] The property paths to omit.
 * @returns {Object} Returns the new object.
 * @example
 *
 * var object = { 'a': 1, 'b': '2', 'c': 3 };
 *
 * _.omit(object, ['a', 'c']);
 * // => { 'b': '2' }
 */
var omit = _flatRest.flatRest(function (object, paths) {
  var result = {};
  if (object == null) {
    return result;
  }
  var isDeep = false;
  paths = toString.arrayMap(paths, function (path) {
    path = _baseGet.castPath(path, object);
    isDeep || (isDeep = path.length > 1);
    return path;
  });
  _initCloneObject.copyObject(object, cloneDeep.getAllKeysIn(object), result);
  if (isDeep) {
    result = cloneDeep.baseClone(result, CLONE_DEEP_FLAG | CLONE_FLAT_FLAG | CLONE_SYMBOLS_FLAG, customOmitClone);
  }
  var length = paths.length;
  while (length--) {
    baseUnset(result, paths[length]);
  }
  return result;
});
var omit$1 = omit;

exports.baseUnset = baseUnset;
exports.omit = omit$1;
//# sourceMappingURL=dep-ace0b57c.js.map
