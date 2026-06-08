/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import { ref, getCurrentInstance, inject, computed, provide, h } from 'vue';
import { isString, cloneDeep, isFunction } from 'lodash-es';
import { configProviderInjectKey, defaultGlobalConfig, mergeWith } from '../utils/context.js';
import _slicedToArray from '@babel/runtime/helpers/slicedToArray';
import _typeof from '@babel/runtime/helpers/typeof';
import '../../_chunks/dep-938cd955.js';
import '../../_chunks/dep-81b01cae.js';
import 'dayjs';

function getPluralIndex(count) {
  if (count === 0) return 0;
  if (count === 1) return 1;
  return 2;
}
function t(pattern) {
  if (isString(pattern)) {
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
        if (secondArg && _typeof(secondArg) === "object") {
          data = secondArg;
        } else {
          data.count = count;
        }
      } else if (_typeof(firstArg) === "object" && firstArg !== null) {
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
        var _pluralParts = _slicedToArray(pluralParts, 1),
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

var globalConfigCopy = ref();
function useConfig() {
  var componentName = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : void 0;
  var componentLocale = arguments.length > 1 ? arguments[1] : undefined;
  var injectGlobalConfig = getCurrentInstance() ? inject(configProviderInjectKey, null) : globalConfigCopy;
  var mergedGlobalConfig = computed(function () {
    return (injectGlobalConfig === null || injectGlobalConfig === void 0 ? void 0 : injectGlobalConfig.value) || defaultGlobalConfig;
  });
  var globalConfig = computed(function () {
    return Object.assign({}, mergedGlobalConfig.value[componentName], componentLocale);
  });
  var classPrefix = computed(function () {
    return mergedGlobalConfig.value.classPrefix;
  });
  var t$1 = function t$1(pattern) {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }
    if (isFunction(pattern)) {
      if (!args.length) return pattern(h);
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
  var defaultData = cloneDeep(defaultGlobalConfig);
  var mergedGlobalConfig = computed(function () {
    return Object.assign({}, mergeWith(defaultData, props.globalConfig));
  });
  provide(configProviderInjectKey, mergedGlobalConfig);
  if (!globalConfigCopy.value) {
    globalConfigCopy.value = mergedGlobalConfig.value;
  }
  return mergedGlobalConfig;
};

export { provideConfig, useConfig };
//# sourceMappingURL=useConfig.js.map
