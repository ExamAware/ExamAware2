/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

'use strict';

var _overArg = require('./dep-e27ea667.js');
var _Map = require('./dep-5f52cd42.js');
var _baseGetTag = require('./dep-b3b464e8.js');
var _Set = require('./dep-929933ce.js');

/* Built-in method references that are verified to be native. */
var WeakMap = _Map.getNative(_baseGetTag.root, 'WeakMap');

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeKeys = _overArg.overArg(Object.keys, Object);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeys(object) {
  if (!_overArg.isPrototype(object)) {
    return nativeKeys(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty.call(object, key) && key != 'constructor') {
      result.push(key);
    }
  }
  return result;
}

/* Built-in method references that are verified to be native. */
var DataView = _Map.getNative(_baseGetTag.root, 'DataView');

/* Built-in method references that are verified to be native. */
var Promise$1 = _Map.getNative(_baseGetTag.root, 'Promise');

/** `Object#toString` result references. */
var mapTag = '[object Map]',
  objectTag = '[object Object]',
  promiseTag = '[object Promise]',
  setTag = '[object Set]',
  weakMapTag = '[object WeakMap]';
var dataViewTag = '[object DataView]';

/** Used to detect maps, sets, and weakmaps. */
var dataViewCtorString = _Map.toSource(DataView),
  mapCtorString = _Map.toSource(_Map.Map),
  promiseCtorString = _Map.toSource(Promise$1),
  setCtorString = _Map.toSource(_Set.Set),
  weakMapCtorString = _Map.toSource(WeakMap);

/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
var getTag = _baseGetTag.baseGetTag;

// Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
if (DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag || _Map.Map && getTag(new _Map.Map()) != mapTag || Promise$1 && getTag(Promise$1.resolve()) != promiseTag || _Set.Set && getTag(new _Set.Set()) != setTag || WeakMap && getTag(new WeakMap()) != weakMapTag) {
  getTag = function getTag(value) {
    var result = _baseGetTag.baseGetTag(value),
      Ctor = result == objectTag ? value.constructor : undefined,
      ctorString = Ctor ? _Map.toSource(Ctor) : '';
    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString:
          return dataViewTag;
        case mapCtorString:
          return mapTag;
        case promiseCtorString:
          return promiseTag;
        case setCtorString:
          return setTag;
        case weakMapCtorString:
          return weakMapTag;
      }
    }
    return result;
  };
}
var getTag$1 = getTag;

exports.baseKeys = baseKeys;
exports.getTag = getTag$1;
//# sourceMappingURL=dep-4d2ef282.js.map
