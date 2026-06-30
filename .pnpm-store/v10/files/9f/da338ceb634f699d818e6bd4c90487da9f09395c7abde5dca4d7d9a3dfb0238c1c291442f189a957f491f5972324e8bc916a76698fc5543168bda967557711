/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

'use strict';

var Vue = require('vue');
var isBoolean = require('./dep-d45110a6.js');

function useReadonly(context) {
  var currentInstance = Vue.getCurrentInstance();
  var componentReadonly = Vue.computed(function () {
    return currentInstance.props.readonly;
  });
  var formReadonly = Vue.inject("formReadonly", /* @__PURE__ */Object.create(null));
  return Vue.computed(function () {
    var _context$beforeReadon, _context$afterReadonl, _formReadonly$readonl;
    if (isBoolean.isBoolean(context === null || context === void 0 || (_context$beforeReadon = context.beforeReadonly) === null || _context$beforeReadon === void 0 ? void 0 : _context$beforeReadon.value)) return context.beforeReadonly.value;
    if (isBoolean.isBoolean(componentReadonly === null || componentReadonly === void 0 ? void 0 : componentReadonly.value)) return componentReadonly.value;
    if (isBoolean.isBoolean(context === null || context === void 0 || (_context$afterReadonl = context.afterReadonly) === null || _context$afterReadonl === void 0 ? void 0 : _context$afterReadonl.value)) return context.afterReadonly.value;
    if (isBoolean.isBoolean((_formReadonly$readonl = formReadonly.readonly) === null || _formReadonly$readonl === void 0 ? void 0 : _formReadonly$readonl.value)) return formReadonly.readonly.value;
    return false;
  });
}

exports.useReadonly = useReadonly;
//# sourceMappingURL=dep-bc848944.js.map
