/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

'use strict';

var Vue = require('vue');
var kebabCase = require('./dep-23f77e26.js');

function useDefaultValue(value, defaultValue, onChange, propsName) {
  var _getCurrentInstance = Vue.getCurrentInstance(),
    emit = _getCurrentInstance.emit,
    vnode = _getCurrentInstance.vnode;
  var internalValue = Vue.ref();
  var vProps = vnode.props || {};
  var isVMP = Object.prototype.hasOwnProperty.call(vProps, propsName) || Object.prototype.hasOwnProperty.call(vProps, kebabCase.kebabCase(propsName));
  if (isVMP) {
    return [value, function (newValue) {
      emit("update:".concat(propsName), newValue);
      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }
      onChange === null || onChange === void 0 || onChange.apply(void 0, [newValue].concat(args));
    }];
  }
  internalValue.value = defaultValue;
  return [internalValue, function (newValue) {
    internalValue.value = newValue;
    for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      args[_key2 - 1] = arguments[_key2];
    }
    onChange === null || onChange === void 0 || onChange.apply(void 0, [newValue].concat(args));
  }];
}

exports.useDefaultValue = useDefaultValue;
//# sourceMappingURL=dep-f20044b8.js.map
