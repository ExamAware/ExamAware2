/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

'use strict';

var Vue = require('vue');
var configProvider_hooks_useConfig = require('../config-provider/hooks/useConfig.js');

function usePrefixClass(componentName) {
  var _useConfig = configProvider_hooks_useConfig.useConfig("classPrefix"),
    classPrefix = _useConfig.classPrefix;
  return Vue.computed(function () {
    return componentName ? "".concat(classPrefix.value, "-").concat(componentName) : classPrefix.value;
  });
}

exports.usePrefixClass = usePrefixClass;
//# sourceMappingURL=dep-ecaaae91.js.map
