/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import { getCurrentInstance, ref } from 'vue';
import { kebabCase } from 'lodash-es';

function useVModel(value, modelValue, defaultValue, onChange) {
  var propName = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : "value";
  var _getCurrentInstance = getCurrentInstance(),
    emit = _getCurrentInstance.emit,
    vnode = _getCurrentInstance.vnode;
  var internalValue = ref();
  var vProps = vnode.props || {};
  var isVM = Object.prototype.hasOwnProperty.call(vProps, "modelValue") || Object.prototype.hasOwnProperty.call(vProps, "model-value");
  var isVMP = Object.prototype.hasOwnProperty.call(vProps, propName) || Object.prototype.hasOwnProperty.call(vProps, kebabCase(propName));
  if (isVM) {
    return [modelValue, function (newValue) {
      emit("update:modelValue", newValue);
      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }
      onChange === null || onChange === void 0 || onChange.apply(void 0, [newValue].concat(args));
    }];
  }
  if (isVMP) {
    return [value, function (newValue) {
      emit("update:".concat(propName), newValue);
      for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        args[_key2 - 1] = arguments[_key2];
      }
      onChange === null || onChange === void 0 || onChange.apply(void 0, [newValue].concat(args));
    }];
  }
  internalValue.value = defaultValue;
  return [internalValue, function (newValue) {
    internalValue.value = newValue;
    for (var _len3 = arguments.length, args = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
      args[_key3 - 1] = arguments[_key3];
    }
    onChange === null || onChange === void 0 || onChange.apply(void 0, [newValue].concat(args));
  }];
}

export { useVModel as u };
//# sourceMappingURL=dep-51e5a827.js.map
