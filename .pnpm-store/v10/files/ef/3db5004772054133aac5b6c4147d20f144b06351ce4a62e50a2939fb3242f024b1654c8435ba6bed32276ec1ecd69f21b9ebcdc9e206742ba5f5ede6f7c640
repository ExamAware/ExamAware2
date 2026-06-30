/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import { getCurrentInstance, computed, inject } from 'vue';

function useFormDisabled(extend) {
  var ctx = getCurrentInstance();
  var propsDisabled = computed(function () {
    return ctx.props.disabled;
  });
  var _inject = inject("formDisabled", /* @__PURE__ */Object.create(null)),
    disabled = _inject.disabled;
  return computed(function () {
    return propsDisabled.value || (disabled === null || disabled === void 0 ? void 0 : disabled.value) || (extend === null || extend === void 0 ? void 0 : extend.value) || false;
  });
}

export { useFormDisabled };
//# sourceMappingURL=index.mjs.map
