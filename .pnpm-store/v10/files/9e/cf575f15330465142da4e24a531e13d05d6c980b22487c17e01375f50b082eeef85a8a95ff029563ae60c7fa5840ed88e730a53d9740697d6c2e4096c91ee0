/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import { getCurrentInstance, computed, inject } from 'vue';
import { isBoolean } from 'lodash-es';

function useDisabled(context) {
  var currentInstance = getCurrentInstance();
  var componentDisabled = computed(function () {
    return currentInstance.props.disabled;
  });
  var formDisabled = inject("formDisabled", /* @__PURE__ */Object.create(null));
  return computed(function () {
    var _context$beforeDisabl, _context$afterDisable, _formDisabled$disable;
    if (isBoolean(context === null || context === void 0 || (_context$beforeDisabl = context.beforeDisabled) === null || _context$beforeDisabl === void 0 ? void 0 : _context$beforeDisabl.value)) return context.beforeDisabled.value;
    if (isBoolean(componentDisabled.value)) return componentDisabled.value;
    if (isBoolean(context === null || context === void 0 || (_context$afterDisable = context.afterDisabled) === null || _context$afterDisable === void 0 ? void 0 : _context$afterDisable.value)) return context.afterDisabled.value;
    if (isBoolean((_formDisabled$disable = formDisabled.disabled) === null || _formDisabled$disable === void 0 ? void 0 : _formDisabled$disable.value)) return formDisabled.disabled.value;
    return false;
  });
}

export { useDisabled as u };
//# sourceMappingURL=dep-f7dd3c12.js.map
