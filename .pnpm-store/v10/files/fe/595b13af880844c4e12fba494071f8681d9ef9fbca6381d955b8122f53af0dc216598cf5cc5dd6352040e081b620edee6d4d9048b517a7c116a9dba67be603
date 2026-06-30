/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var Vue = require('vue');
var configProvider_utils_context = require('../../_chunks/dep-5d7e2375.js');
var _slicedToArray = require('@babel/runtime/helpers/slicedToArray');
var _typeof = require('@babel/runtime/helpers/typeof');
var isString = require('../../_chunks/dep-a55e8a08.js');
var cloneDeep = require('../../_chunks/dep-8adeee89.js');
var isFunction = require('../../_chunks/dep-48f60c78.js');
require('../../_chunks/dep-94a7dc2d.js');
require('../../_chunks/dep-8abdfb41.js');
require('dayjs');
require('../../_chunks/dep-92e23f17.js');
require('../../_chunks/dep-0ff616fe.js');
require('../../_chunks/dep-5f52cd42.js');
require('../../_chunks/dep-b3b464e8.js');
require('../../_chunks/dep-0813861e.js');
require('../../_chunks/dep-f57bcb19.js');
require('../../_chunks/dep-dc4bbc14.js');
require('../../_chunks/dep-05f89f0d.js');
require('../../_chunks/dep-87589faa.js');
require('../../_chunks/dep-e27ea667.js');
require('../../_chunks/dep-165ca38a.js');
require('../../_chunks/dep-32412d92.js');
require('../../_chunks/dep-a8a3d718.js');
require('../../_chunks/dep-54e566d9.js');
require('../../_chunks/dep-591a72de.js');
require('../../_chunks/dep-4d2ef282.js');
require('../../_chunks/dep-929933ce.js');
require('../../_chunks/dep-6b1f0ef8.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var _slicedToArray__default = /*#__PURE__*/_interopDefaultLegacy(_slicedToArray);
var _typeof__default = /*#__PURE__*/_interopDefaultLegacy(_typeof);

function getPluralIndex(count) {
  if (count === 0) return 0;
  if (count === 1) return 1;
  return 2;
}
function t(pattern) {
  if (isString.isString(pattern)) {
    var text = pattern;
    var count;
    var data = {};
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }
    if (args.length > 0) {
      var firstArg = args[0],
        secondArg = args[1];
      if (typeof firstArg === "number") {
        count = firstArg;
        if (secondArg && _typeof__default["default"](secondArg) === "object") {
          data = secondArg;
        } else {
          data.count = count;
        }
      } else if (_typeof__default["default"](firstArg) === "object" && firstArg !== null) {
        data = firstArg;
      }
    }
    if (text.includes("|")) {
      var pluralParts = text.split("|").map(function (part) {
        return part.trim();
      });
      if (typeof count === "number") {
        var pluralIndex = getPluralIndex(count);
        if (pluralIndex < pluralParts.length) {
          text = pluralParts[pluralIndex];
        } else {
          text = pluralParts[pluralParts.length - 1];
        }
      } else {
        var _pluralParts = _slicedToArray__default["default"](pluralParts, 1),
          firstPart = _pluralParts[0];
        text = firstPart;
      }
    }
    if (data && Object.keys(data).length > 0) {
      var regular = /\{\s*([\w-]+)\s*\}/g;
      text = text.replace(regular, function (match, key) {
        if (Object.prototype.hasOwnProperty.call(data, key)) {
          return String(data[key]);
        }
        return match;
      });
    }
    return text;
  }
  return "";
}

var globalConfigCopy = Vue.ref();
function useConfig() {
  var componentName = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : void 0;
  var componentLocale = arguments.length > 1 ? arguments[1] : undefined;
  var injectGlobalConfig = Vue.getCurrentInstance() ? Vue.inject(configProvider_utils_context.configProviderInjectKey, null) : globalConfigCopy;
  var mergedGlobalConfig = Vue.computed(function () {
    return (injectGlobalConfig === null || injectGlobalConfig === void 0 ? void 0 : injectGlobalConfig.value) || configProvider_utils_context.defaultGlobalConfig;
  });
  var globalConfig = Vue.computed(function () {
    return Object.assign({}, mergedGlobalConfig.value[componentName], componentLocale);
  });
  var classPrefix = Vue.computed(function () {
    return mergedGlobalConfig.value.classPrefix;
  });
  var t$1 = function t$1(pattern) {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }
    if (isFunction.isFunction(pattern)) {
      if (!args.length) return pattern(Vue.h);
      return pattern.apply(void 0, args);
    }
    return t.apply(void 0, [pattern].concat(args));
  };
  return {
    t: t$1,
    global: globalConfig,
    globalConfig: globalConfig,
    classPrefix: classPrefix
  };
}
var provideConfig = function provideConfig(props) {
  var defaultData = cloneDeep.cloneDeep(configProvider_utils_context.defaultGlobalConfig);
  var mergedGlobalConfig = Vue.computed(function () {
    return Object.assign({}, configProvider_utils_context.mergeWith(defaultData, props.globalConfig));
  });
  Vue.provide(configProvider_utils_context.configProviderInjectKey, mergedGlobalConfig);
  if (!globalConfigCopy.value) {
    globalConfigCopy.value = mergedGlobalConfig.value;
  }
  return mergedGlobalConfig;
};

exports.provideConfig = provideConfig;
exports.useConfig = useConfig;
//# sourceMappingURL=useConfig.js.map
