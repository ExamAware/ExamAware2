/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

'use strict';

var Vue = require('vue');
var isBoolean = require('./dep-d45110a6.js');

function useDisabled(context) {
  var currentInstance = Vue.getCurrentInstance();
  var componentDisabled = Vue.computed(function () {
    return currentInstance.props.disabled;
  });
  var formDisabled = Vue.inject("formDisabled", /* @__PURE__ */Object.create(null));
  return Vue.computed(function () {
    var _context$beforeDisabl, _context$afterDisable, _formDisabled$disable;
    if (isBoolean.isBoolean(context === null || context === void 0 || (_context$beforeDisabl = context.beforeDisabled) === null || _context$beforeDisabl === void 0 ? void 0 : _context$beforeDisabl.value)) return context.beforeDisabled.value;
    if (isBoolean.isBoolean(componentDisabled.value)) return componentDisabled.value;
    if (isBoolean.isBoolean(context === null || context === void 0 || (_context$afterDisable = context.afterDisabled) === null || _context$afterDisable === void 0 ? void 0 : _context$afterDisable.value)) return context.afterDisabled.value;
    if (isBoolean.isBoolean((_formDisabled$disable = formDisabled.disabled) === null || _formDisabled$disable === void 0 ? void 0 : _formDisabled$disable.value)) return formDisabled.disabled.value;
    return false;
  });
}

exports.useDisabled = useDisabled;
//# sourceMappingURL=dep-874d2900.js.map
