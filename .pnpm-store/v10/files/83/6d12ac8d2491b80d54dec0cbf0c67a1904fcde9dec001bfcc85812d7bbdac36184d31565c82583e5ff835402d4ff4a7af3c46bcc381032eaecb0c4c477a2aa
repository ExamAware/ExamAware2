/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _defineProperty = require('@babel/runtime/helpers/defineProperty');
var Vue = require('vue');
var index = require('../../_chunks/dep-3565d523.js');
require('../../_chunks/dep-953a77eb.js');
require('../../config-provider/hooks/useConfig.js');
require('@babel/runtime/helpers/slicedToArray');
require('../../_chunks/dep-cc66acf1.js');
require('@babel/runtime/helpers/toConsumableArray');
var isArray = require('../../_chunks/dep-87589faa.js');
var isString = require('../../_chunks/dep-a55e8a08.js');
var camelCase = require('../../_chunks/dep-422dd97f.js');
require('@babel/runtime/helpers/typeof');
require('../../_chunks/dep-4fa46641.js');
require('../../_chunks/dep-0813861e.js');
require('../../_chunks/dep-8abdfb41.js');
require('../../_chunks/dep-5d7e2375.js');
require('../../_chunks/dep-94a7dc2d.js');
require('dayjs');
require('../../_chunks/dep-92e23f17.js');
require('../../_chunks/dep-0ff616fe.js');
require('../../_chunks/dep-5f52cd42.js');
require('../../_chunks/dep-48f60c78.js');
require('../../_chunks/dep-b3b464e8.js');
require('../../_chunks/dep-f57bcb19.js');
require('../../_chunks/dep-dc4bbc14.js');
require('../../_chunks/dep-05f89f0d.js');
require('../../_chunks/dep-e27ea667.js');
require('../../_chunks/dep-165ca38a.js');
require('../../_chunks/dep-32412d92.js');
require('../../_chunks/dep-a8a3d718.js');
require('../../_chunks/dep-54e566d9.js');
require('../../_chunks/dep-591a72de.js');
require('../../_chunks/dep-8adeee89.js');
require('../../_chunks/dep-4d2ef282.js');
require('../../_chunks/dep-929933ce.js');
require('../../_chunks/dep-6b1f0ef8.js');
require('@babel/runtime/helpers/createClass');
require('@babel/runtime/helpers/classCallCheck');
require('../../_chunks/dep-71fa6bfc.js');
require('../../_chunks/dep-80a478d7.js');
require('../../_chunks/dep-427dabac.js');
require('../../_chunks/dep-72c4cc44.js');
require('../../_chunks/dep-ee355a9a.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var _defineProperty__default = /*#__PURE__*/_interopDefaultLegacy(_defineProperty);

function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty__default["default"](e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var _getOptionsFromChildren = function getOptionsFromChildren(menuNode) {
  var _menuNode$, _menuNode$3, _menuNode$4;
  if (!menuNode) return [];
  if (isArray.isArray(menuNode) && ((_menuNode$ = menuNode[0]) === null || _menuNode$ === void 0 || (_menuNode$ = _menuNode$.type) === null || _menuNode$ === void 0 ? void 0 : _menuNode$.name) === "TDropdownMenu") {
    var _menuNode$2, _menuNode$2$default;
    var groupChildren = (_menuNode$2 = menuNode[0]) === null || _menuNode$2 === void 0 || (_menuNode$2 = _menuNode$2.children) === null || _menuNode$2 === void 0 || (_menuNode$2$default = _menuNode$2["default"]) === null || _menuNode$2$default === void 0 ? void 0 : _menuNode$2$default.call(_menuNode$2);
    if (isArray.isArray(groupChildren)) {
      return _getOptionsFromChildren(groupChildren);
    }
  }
  if (isArray.isArray(menuNode)) {
    menuNode = menuNode.reduce(function (acc, item) {
      acc = acc.concat(isArray.isArray(item.children) ? item.children : item);
      return acc;
    }, []);
    return menuNode.map(function (item) {
      var _item$children, _item$children$conten, _item$children2, _item$children2$prefi, _item$children3, _item$children3$prefi, _item$children4, _item$children4$defau, _groupChildren$filter, _groupChildren$filter2;
      var slotContent = (_item$children = item.children) === null || _item$children === void 0 || (_item$children$conten = _item$children.content) === null || _item$children$conten === void 0 ? void 0 : _item$children$conten.call(_item$children);
      var slotPrefixIcon = ((_item$children2 = item.children) === null || _item$children2 === void 0 || (_item$children2$prefi = _item$children2.prefixIcon) === null || _item$children2$prefi === void 0 ? void 0 : _item$children2$prefi.call(_item$children2)) || ((_item$children3 = item.children) === null || _item$children3 === void 0 || (_item$children3$prefi = _item$children3["prefix-icon"]) === null || _item$children3$prefi === void 0 ? void 0 : _item$children3$prefi.call(_item$children3));
      var groupChildren = (_item$children4 = item.children) === null || _item$children4 === void 0 || (_item$children4$defau = _item$children4["default"]) === null || _item$children4$defau === void 0 ? void 0 : _item$children4$defau.call(_item$children4);
      var contentCtx = groupChildren === null || groupChildren === void 0 || (_groupChildren$filter = groupChildren.filter) === null || _groupChildren$filter === void 0 ? void 0 : _groupChildren$filter.call(groupChildren, function (v) {
        var _v$type;
        return !["TDropdownMenu", "TDropdownItem"].includes((_v$type = v.type) === null || _v$type === void 0 ? void 0 : _v$type.name);
      });
      var childrenCtx = groupChildren === null || groupChildren === void 0 || (_groupChildren$filter2 = groupChildren.filter) === null || _groupChildren$filter2 === void 0 ? void 0 : _groupChildren$filter2.call(groupChildren, function (v) {
        var _v$type2;
        return !isString.isString(v.children) && ["TDropdownMenu", "TDropdownItem"].includes((_v$type2 = v.type) === null || _v$type2 === void 0 ? void 0 : _v$type2.name);
      });
      var itemProps = Object.keys(item.props || {}).reduce(function (props, propName) {
        var _item$type;
        if (item.props[propName] === "" && ((_item$type = item.type) === null || _item$type === void 0 ? void 0 : _item$type.name) === "TDropdownItem" && ["active", "divider", "disabled"].includes(propName)) {
          props[camelCase.camelCase(propName)] = true;
        } else {
          props[camelCase.camelCase(propName)] = item.props[propName];
        }
        return props;
      }, {});
      return _objectSpread(_objectSpread(_objectSpread({
        content: slotContent || contentCtx || groupChildren
      }, itemProps), slotPrefixIcon ? {
        prefixIcon: function prefixIcon() {
          return slotPrefixIcon;
        }
      } : {}), {}, {
        children: (childrenCtx === null || childrenCtx === void 0 ? void 0 : childrenCtx.length) > 0 ? _getOptionsFromChildren(childrenCtx) : null
      });
    }).filter(function (v) {
      return !!v.content;
    });
  }
  if (isArray.isArray(menuNode) && isArray.isArray((_menuNode$3 = menuNode[0]) === null || _menuNode$3 === void 0 ? void 0 : _menuNode$3.children)) return _getOptionsFromChildren((_menuNode$4 = menuNode[0]) === null || _menuNode$4 === void 0 ? void 0 : _menuNode$4.children);
  return [];
};
function useDropdownOptions(props) {
  var _getChildComponentSlo, _getChildComponentSlo2, _instance$slots, _instance$slots$dropd;
  var getChildComponentSlots = index.useChildComponentSlots();
  var instance = Vue.getCurrentInstance();
  var menuSlot = ((_getChildComponentSlo = getChildComponentSlots("DropdownMenu")) === null || _getChildComponentSlo === void 0 || (_getChildComponentSlo = _getChildComponentSlo[0]) === null || _getChildComponentSlo === void 0 || (_getChildComponentSlo = _getChildComponentSlo.children) === null || _getChildComponentSlo === void 0 || (_getChildComponentSlo2 = _getChildComponentSlo["default"]) === null || _getChildComponentSlo2 === void 0 ? void 0 : _getChildComponentSlo2.call(_getChildComponentSlo)) || ((_instance$slots = instance.slots) === null || _instance$slots === void 0 || (_instance$slots$dropd = _instance$slots.dropdown) === null || _instance$slots$dropd === void 0 ? void 0 : _instance$slots$dropd.call(_instance$slots));
  var dropdownOptions = Vue.computed(function () {
    if (props.options && props.options.length > 0) return props.options;
    return _getOptionsFromChildren(menuSlot);
  });
  return dropdownOptions;
}

exports["default"] = useDropdownOptions;
exports.getOptionsFromChildren = _getOptionsFromChildren;
//# sourceMappingURL=useDropdownOptions.js.map
