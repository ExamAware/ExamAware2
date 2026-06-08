/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import { isEqual, isObject, mapKeys } from 'lodash-es';
import { LoadingPlugin } from './plugin.js';
import 'vue';
import '../_chunks/dep-ee693784.js';
import '@babel/runtime/helpers/slicedToArray';
import '@babel/runtime/helpers/defineProperty';
import './icon/gradient.js';
import '@babel/runtime/helpers/toConsumableArray';
import '@babel/runtime/helpers/typeof';
import '../_chunks/dep-fe23be6e.js';
import '../_chunks/dep-81b01cae.js';
import '../_chunks/dep-9e6d8a78.js';
import '../config-provider/hooks/useConfig.js';
import '../config-provider/utils/context.js';
import '../_chunks/dep-938cd955.js';
import 'dayjs';
import '../_chunks/dep-880d05b9.js';
import '@babel/runtime/helpers/createClass';
import '@babel/runtime/helpers/classCallCheck';
import '../_chunks/dep-2ea19dca.js';
import '../_chunks/dep-80a99546.js';
import '@babel/runtime/helpers/objectWithoutProperties';
import '../_chunks/dep-16bcfabc.js';
import '../_chunks/dep-2accc95a.js';
import '../_chunks/dep-fb805f69.js';
import '../_chunks/dep-4f8b6591.js';
import './props.js';

var INSTANCE_KEY = Symbol("TdLoading");
var createInstance = function createInstance(el, binding) {
  var _binding$modifiers = binding.modifiers,
    fullscreen = _binding$modifiers.fullscreen,
    inheritColor = _binding$modifiers.inheritColor;
  var options = {
    attach: function attach() {
      return el;
    },
    fullscreen: fullscreen !== null && fullscreen !== void 0 ? fullscreen : false,
    inheritColor: inheritColor !== null && inheritColor !== void 0 ? inheritColor : false,
    loading: binding.value
  };
  if (isObject(binding.value)) {
    mapKeys(binding.value, function (value, key) {
      options[key] = value;
    });
  }
  el[INSTANCE_KEY] = {
    options: options,
    instance: LoadingPlugin(options)
  };
};
var vLoading = {
  mounted: function mounted(el, binding) {
    if (binding.value) {
      createInstance(el, binding);
    }
  },
  updated: function updated(el, binding) {
    var instance = el[INSTANCE_KEY];
    var value = binding.value,
      oldValue = binding.oldValue;
    if (!isEqual(value, oldValue)) {
      var _value$loading;
      var loading = (_value$loading = value === null || value === void 0 ? void 0 : value.loading) !== null && _value$loading !== void 0 ? _value$loading : value;
      if (loading) {
        createInstance(el, binding);
      } else {
        instance === null || instance === void 0 || instance.instance.hide();
      }
    }
  },
  unmounted: function unmounted(el) {
    var _el$INSTANCE_KEY;
    (_el$INSTANCE_KEY = el[INSTANCE_KEY]) === null || _el$INSTANCE_KEY === void 0 || _el$INSTANCE_KEY.instance.hide();
  }
};

export { vLoading as default, vLoading };
//# sourceMappingURL=directive.js.map
