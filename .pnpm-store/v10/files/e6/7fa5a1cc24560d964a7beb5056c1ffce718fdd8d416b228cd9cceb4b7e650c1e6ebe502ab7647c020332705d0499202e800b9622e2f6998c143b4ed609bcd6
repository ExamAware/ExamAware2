/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

'use strict';

var Vue = require('vue');
var configProvider_hooks_useConfig = require('../config-provider/hooks/useConfig.js');

function useCommonClassName() {
  var _useConfig = configProvider_hooks_useConfig.useConfig("classPrefix"),
    classPrefix = _useConfig.classPrefix;
  return {
    classPrefix: classPrefix,
    SIZE: Vue.computed(function () {
      return {
        small: "".concat(classPrefix.value, "-size-s"),
        medium: "".concat(classPrefix.value, "-size-m"),
        large: "".concat(classPrefix.value, "-size-l"),
        "default": "",
        xs: "".concat(classPrefix.value, "-size-xs"),
        xl: "".concat(classPrefix.value, "-size-xl"),
        block: "".concat(classPrefix.value, "-size-full-width")
      };
    }),
    STATUS: Vue.computed(function () {
      return {
        loading: "".concat(classPrefix.value, "-is-loading"),
        loadMore: "".concat(classPrefix.value, "-is-load-more"),
        disabled: "".concat(classPrefix.value, "-is-disabled"),
        focused: "".concat(classPrefix.value, "-is-focused"),
        success: "".concat(classPrefix.value, "-is-success"),
        error: "".concat(classPrefix.value, "-is-error"),
        warning: "".concat(classPrefix.value, "-is-warning"),
        selected: "".concat(classPrefix.value, "-is-selected"),
        active: "".concat(classPrefix.value, "-is-active"),
        checked: "".concat(classPrefix.value, "-is-checked"),
        current: "".concat(classPrefix.value, "-is-current"),
        hidden: "".concat(classPrefix.value, "-is-hidden"),
        visible: "".concat(classPrefix.value, "-is-visible"),
        expanded: "".concat(classPrefix.value, "-is-expanded"),
        indeterminate: "".concat(classPrefix.value, "-is-indeterminate")
      };
    })
  };
}

exports.useCommonClassName = useCommonClassName;
//# sourceMappingURL=dep-8382953f.js.map
