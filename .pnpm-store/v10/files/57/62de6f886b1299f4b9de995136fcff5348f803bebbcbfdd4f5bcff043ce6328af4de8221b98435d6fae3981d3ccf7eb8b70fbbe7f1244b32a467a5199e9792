/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import { isObject, mapKeys, isEqual } from 'lodash-es';
import { LoadingPlugin } from './plugin.mjs';
import 'vue';
import './loading.mjs';
import '../_chunks/dep-9003fde5.mjs';
import '../_chunks/dep-9f459d8b.mjs';
import '../_chunks/dep-1dacc319.mjs';
import '../_chunks/dep-257428bc.mjs';
import './icon/gradient.mjs';
import '../_chunks/dep-7673347f.mjs';
import '../_chunks/dep-00b4e06a.mjs';
import '../_chunks/dep-51a43106.mjs';
import '../_chunks/dep-fe644854.mjs';
import '../config-provider/hooks/useConfig.mjs';
import '../config-provider/utils/context.mjs';
import '../_chunks/dep-a4c09318.mjs';
import '../_chunks/dep-ffb85102.mjs';
import '../_chunks/dep-ad588525.mjs';
import '../_chunks/dep-22ebd6af.mjs';
import '../_chunks/dep-cdd448ec.mjs';
import '../_chunks/dep-97ecacde.mjs';
import '../_chunks/dep-84fd47b3.mjs';
import '../_chunks/dep-d36c4a3f.mjs';
import '../_chunks/dep-0cde7579.mjs';
import '../_chunks/dep-0dcc778a.mjs';
import './props.mjs';

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
//# sourceMappingURL=directive.mjs.map
