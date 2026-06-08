/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var Vue = require('vue');

function useFormDisabled(extend) {
  var ctx = Vue.getCurrentInstance();
  var propsDisabled = Vue.computed(function () {
    return ctx.props.disabled;
  });
  var _inject = Vue.inject("formDisabled", /* @__PURE__ */Object.create(null)),
    disabled = _inject.disabled;
  return Vue.computed(function () {
    return propsDisabled.value || (disabled === null || disabled === void 0 ? void 0 : disabled.value) || (extend === null || extend === void 0 ? void 0 : extend.value) || false;
  });
}

exports.useFormDisabled = useFormDisabled;
//# sourceMappingURL=index.js.map
