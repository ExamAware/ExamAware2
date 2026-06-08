/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import { getCurrentInstance, computed, inject } from 'vue';
import { isBoolean } from 'lodash-es';

function useReadonly(context) {
  var currentInstance = getCurrentInstance();
  var componentReadonly = computed(function () {
    return currentInstance.props.readonly;
  });
  var formReadonly = inject("formReadonly", /* @__PURE__ */Object.create(null));
  return computed(function () {
    var _context$beforeReadon, _context$afterReadonl, _formReadonly$readonl;
    if (isBoolean(context === null || context === void 0 || (_context$beforeReadon = context.beforeReadonly) === null || _context$beforeReadon === void 0 ? void 0 : _context$beforeReadon.value)) return context.beforeReadonly.value;
    if (isBoolean(componentReadonly === null || componentReadonly === void 0 ? void 0 : componentReadonly.value)) return componentReadonly.value;
    if (isBoolean(context === null || context === void 0 || (_context$afterReadonl = context.afterReadonly) === null || _context$afterReadonl === void 0 ? void 0 : _context$afterReadonl.value)) return context.afterReadonly.value;
    if (isBoolean((_formReadonly$readonl = formReadonly.readonly) === null || _formReadonly$readonl === void 0 ? void 0 : _formReadonly$readonl.value)) return formReadonly.readonly.value;
    return false;
  });
}

export { useReadonly as u };
//# sourceMappingURL=dep-47b13687.js.map
