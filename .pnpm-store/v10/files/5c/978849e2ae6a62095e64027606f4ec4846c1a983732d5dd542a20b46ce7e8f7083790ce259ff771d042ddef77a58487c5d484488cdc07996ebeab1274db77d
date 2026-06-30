/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

'use strict';

var zh_CN = require('./dep-94a7dc2d.js');
var _initCloneObject = require('./dep-92e23f17.js');
var _assignValue = require('./dep-0ff616fe.js');
var eq = require('./dep-f57bcb19.js');
var _baseUnary = require('./dep-dc4bbc14.js');
var isArray = require('./dep-87589faa.js');
var isArrayLikeObject = require('./dep-54e566d9.js');
var _overArg = require('./dep-e27ea667.js');
var isFunction = require('./dep-48f60c78.js');
var isObject = require('./dep-0813861e.js');
var _baseGetTag = require('./dep-b3b464e8.js');
var isObjectLike = require('./dep-05f89f0d.js');
var _isIterateeCall = require('./dep-591a72de.js');

/**
 * Creates a function like `_.assign`.
 *
 * @private
 * @param {Function} assigner The function to assign values.
 * @returns {Function} Returns the new assigner function.
 */
function createAssigner(assigner) {
  return isArrayLikeObject.baseRest(function (object, sources) {
    var index = -1,
      length = sources.length,
      customizer = length > 1 ? sources[length - 1] : undefined,
      guard = length > 2 ? sources[2] : undefined;
    customizer = assigner.length > 3 && typeof customizer == 'function' ? (length--, customizer) : undefined;
    if (guard && _isIterateeCall.isIterateeCall(sources[0], sources[1], guard)) {
      customizer = length < 3 ? undefined : customizer;
      length = 1;
    }
    object = Object(object);
    while (++index < length) {
      var source = sources[index];
      if (source) {
        assigner(object, source, index, customizer);
      }
    }
    return object;
  });
}

/** `Object#toString` result references. */
var objectTag = '[object Object]';

/** Used for built-in method references. */
var funcProto = Function.prototype,
  objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to infer the `Object` constructor. */
var objectCtorString = funcToString.call(Object);

/**
 * Checks if `value` is a plain object, that is, an object created by the
 * `Object` constructor or one with a `[[Prototype]]` of `null`.
 *
 * @static
 * @memberOf _
 * @since 0.8.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 * }
 *
 * _.isPlainObject(new Foo);
 * // => false
 *
 * _.isPlainObject([1, 2, 3]);
 * // => false
 *
 * _.isPlainObject({ 'x': 0, 'y': 0 });
 * // => true
 *
 * _.isPlainObject(Object.create(null));
 * // => true
 */
function isPlainObject(value) {
  if (!isObjectLike.isObjectLike(value) || _baseGetTag.baseGetTag(value) != objectTag) {
    return false;
  }
  var proto = _initCloneObject.getPrototype(value);
  if (proto === null) {
    return true;
  }
  var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
  return typeof Ctor == 'function' && Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString;
}

/**
 * Creates a base function for methods like `_.forIn` and `_.forOwn`.
 *
 * @private
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */
function createBaseFor(fromRight) {
  return function (object, iteratee, keysFunc) {
    var index = -1,
      iterable = Object(object),
      props = keysFunc(object),
      length = props.length;
    while (length--) {
      var key = props[fromRight ? length : ++index];
      if (iteratee(iterable[key], key, iterable) === false) {
        break;
      }
    }
    return object;
  };
}

/**
 * The base implementation of `baseForOwn` which iterates over `object`
 * properties returned by `keysFunc` and invokes `iteratee` for each property.
 * Iteratee functions may exit iteration early by explicitly returning `false`.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @returns {Object} Returns `object`.
 */
var baseFor = createBaseFor();

/**
 * This function is like `assignValue` except that it doesn't assign
 * `undefined` values.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function assignMergeValue(object, key, value) {
  if (value !== undefined && !eq.eq(object[key], value) || value === undefined && !(key in object)) {
    _assignValue.baseAssignValue(object, key, value);
  }
}

/**
 * Gets the value at `key`, unless `key` is "__proto__" or "constructor".
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function safeGet(object, key) {
  if (key === 'constructor' && typeof object[key] === 'function') {
    return;
  }
  if (key == '__proto__') {
    return;
  }
  return object[key];
}

/**
 * Converts `value` to a plain object flattening inherited enumerable string
 * keyed properties of `value` to own properties of the plain object.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {Object} Returns the converted plain object.
 * @example
 *
 * function Foo() {
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.assign({ 'a': 1 }, new Foo);
 * // => { 'a': 1, 'b': 2 }
 *
 * _.assign({ 'a': 1 }, _.toPlainObject(new Foo));
 * // => { 'a': 1, 'b': 2, 'c': 3 }
 */
function toPlainObject(value) {
  return _initCloneObject.copyObject(value, _initCloneObject.keysIn(value));
}

/**
 * A specialized version of `baseMerge` for arrays and objects which performs
 * deep merges and tracks traversed objects enabling objects with circular
 * references to be merged.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @param {string} key The key of the value to merge.
 * @param {number} srcIndex The index of `source`.
 * @param {Function} mergeFunc The function to merge values.
 * @param {Function} [customizer] The function to customize assigned values.
 * @param {Object} [stack] Tracks traversed source values and their merged
 *  counterparts.
 */
function baseMergeDeep(object, source, key, srcIndex, mergeFunc, customizer, stack) {
  var objValue = safeGet(object, key),
    srcValue = safeGet(source, key),
    stacked = stack.get(srcValue);
  if (stacked) {
    assignMergeValue(object, key, stacked);
    return;
  }
  var newValue = customizer ? customizer(objValue, srcValue, key + '', object, source, stack) : undefined;
  var isCommon = newValue === undefined;
  if (isCommon) {
    var isArr = isArray.isArray(srcValue),
      isBuff = !isArr && _overArg.isBuffer(srcValue),
      isTyped = !isArr && !isBuff && _overArg.isTypedArray(srcValue);
    newValue = srcValue;
    if (isArr || isBuff || isTyped) {
      if (isArray.isArray(objValue)) {
        newValue = objValue;
      } else if (isArrayLikeObject.isArrayLikeObject(objValue)) {
        newValue = _initCloneObject.copyArray(objValue);
      } else if (isBuff) {
        isCommon = false;
        newValue = _initCloneObject.cloneBuffer(srcValue, true);
      } else if (isTyped) {
        isCommon = false;
        newValue = _initCloneObject.cloneTypedArray(srcValue, true);
      } else {
        newValue = [];
      }
    } else if (isPlainObject(srcValue) || _baseUnary.isArguments(srcValue)) {
      newValue = objValue;
      if (_baseUnary.isArguments(objValue)) {
        newValue = toPlainObject(objValue);
      } else if (!isObject.isObject(objValue) || isFunction.isFunction(objValue)) {
        newValue = _initCloneObject.initCloneObject(srcValue);
      }
    } else {
      isCommon = false;
    }
  }
  if (isCommon) {
    // Recursively merge objects and arrays (susceptible to call stack limits).
    stack.set(srcValue, newValue);
    mergeFunc(newValue, srcValue, srcIndex, customizer, stack);
    stack['delete'](srcValue);
  }
  assignMergeValue(object, key, newValue);
}

/**
 * The base implementation of `_.merge` without support for multiple sources.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @param {number} srcIndex The index of `source`.
 * @param {Function} [customizer] The function to customize merged values.
 * @param {Object} [stack] Tracks traversed source values and their merged
 *  counterparts.
 */
function baseMerge(object, source, srcIndex, customizer, stack) {
  if (object === source) {
    return;
  }
  baseFor(source, function (srcValue, key) {
    stack || (stack = new _initCloneObject.Stack());
    if (isObject.isObject(srcValue)) {
      baseMergeDeep(object, source, key, srcIndex, baseMerge, customizer, stack);
    } else {
      var newValue = customizer ? customizer(safeGet(object, key), srcValue, key + '', object, source, stack) : undefined;
      if (newValue === undefined) {
        newValue = srcValue;
      }
      assignMergeValue(object, key, newValue);
    }
  }, _initCloneObject.keysIn);
}

/**
 * This method is like `_.merge` except that it accepts `customizer` which
 * is invoked to produce the merged values of the destination and source
 * properties. If `customizer` returns `undefined`, merging is handled by the
 * method instead. The `customizer` is invoked with six arguments:
 * (objValue, srcValue, key, object, source, stack).
 *
 * **Note:** This method mutates `object`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Object
 * @param {Object} object The destination object.
 * @param {...Object} sources The source objects.
 * @param {Function} customizer The function to customize assigned values.
 * @returns {Object} Returns `object`.
 * @example
 *
 * function customizer(objValue, srcValue) {
 *   if (_.isArray(objValue)) {
 *     return objValue.concat(srcValue);
 *   }
 * }
 *
 * var object = { 'a': [1], 'b': [2] };
 * var other = { 'a': [3], 'b': [4] };
 *
 * _.mergeWith(object, other, customizer);
 * // => { 'a': [1, 3], 'b': [2, 4] }
 */
var mergeWith$1 = createAssigner(function (object, source, srcIndex, customizer) {
  baseMerge(object, source, srcIndex, customizer);
});
var _mergeWith = mergeWith$1;

/**
 * This method is like `_.assign` except that it recursively merges own and
 * inherited enumerable string keyed properties of source objects into the
 * destination object. Source properties that resolve to `undefined` are
 * skipped if a destination value exists. Array and plain object properties
 * are merged recursively. Other objects and value types are overridden by
 * assignment. Source objects are applied from left to right. Subsequent
 * sources overwrite property assignments of previous sources.
 *
 * **Note:** This method mutates `object`.
 *
 * @static
 * @memberOf _
 * @since 0.5.0
 * @category Object
 * @param {Object} object The destination object.
 * @param {...Object} [sources] The source objects.
 * @returns {Object} Returns `object`.
 * @example
 *
 * var object = {
 *   'a': [{ 'b': 2 }, { 'd': 4 }]
 * };
 *
 * var other = {
 *   'a': [{ 'c': 3 }, { 'e': 5 }]
 * };
 *
 * _.merge(object, other);
 * // => { 'a': [{ 'b': 2, 'c': 3 }, { 'd': 4, 'e': 5 }] }
 */
var merge = createAssigner(function (object, source, srcIndex) {
  baseMerge(object, source, srcIndex);
});
var merge$1 = merge;

var defaultConfig = {
  classPrefix: "t",
  animation: {
    include: ["ripple", "expand", "fade"],
    exclude: []
  },
  attach: null,
  calendar: {
    firstDayOfWeek: 1,
    fillWithZero: true,
    controllerConfig: void 0
  },
  icon: {},
  input: {
    autocomplete: ""
  },
  dialog: {
    closeOnEscKeydown: true,
    closeOnOverlayClick: true,
    confirmBtnTheme: {
      "default": "primary",
      info: "primary",
      warning: "primary",
      danger: "primary",
      success: "primary"
    }
  },
  message: {},
  popconfirm: {
    confirmBtnTheme: {
      "default": "primary",
      warning: "primary",
      danger: "primary"
    }
  },
  table: {
    expandIcon: void 0,
    sortIcon: void 0,
    filterIcon: void 0,
    treeExpandAndFoldIcon: void 0,
    hideSortTips: false,
    size: "medium"
  },
  select: {
    clearIcon: void 0,
    filterable: false
  },
  drawer: {
    closeOnEscKeydown: true,
    closeOnOverlayClick: true,
    size: "small"
  },
  tree: {
    folderIcon: void 0
  },
  datePicker: {
    firstDayOfWeek: 1
  },
  steps: {
    checkIcon: void 0,
    errorIcon: void 0
  },
  tag: {
    closeIcon: void 0
  },
  form: {
    requiredMark: void 0
  },
  empty: {
    titleText: {
      maintenance: void 0,
      success: void 0,
      fail: void 0,
      empty: void 0,
      networkError: void 0
    },
    image: {
      maintenance: void 0,
      success: void 0,
      fail: void 0,
      empty: void 0,
      networkError: void 0
    }
  }
};

var EAnimationType = /* @__PURE__ */function (EAnimationType2) {
  EAnimationType2["ripple"] = "ripple";
  EAnimationType2["expand"] = "expand";
  EAnimationType2["fade"] = "fade";
  return EAnimationType2;
}(EAnimationType || {});
var defaultGlobalConfig = merge$1(defaultConfig, zh_CN.zhCn);
var configProviderInjectKey = Symbol("configProvide");
var mergeWith = function mergeWith(defaultGlobalConfig2, injectConfig) {
  return _mergeWith(defaultGlobalConfig2, injectConfig, function (objValue, srcValue) {
    if (isArray.isArray(objValue)) {
      return srcValue;
    }
  });
};

exports.EAnimationType = EAnimationType;
exports.baseFor = baseFor;
exports.configProviderInjectKey = configProviderInjectKey;
exports.defaultGlobalConfig = defaultGlobalConfig;
exports.isPlainObject = isPlainObject;
exports.merge = merge$1;
exports.mergeWith = mergeWith;
//# sourceMappingURL=dep-5d7e2375.js.map
