/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import { _ as _defineProperty } from '../../_chunks/dep-1dacc319.mjs';
import { getCurrentInstance, computed } from 'vue';
import { isArray, isString, camelCase } from 'lodash-es';
import { h as useChildComponentSlots } from '../../_chunks/dep-7673347f.mjs';
import '../../_chunks/dep-257428bc.mjs';
import '../../_chunks/dep-00b4e06a.mjs';
import '../../_chunks/dep-9f459d8b.mjs';
import '../../_chunks/dep-51a43106.mjs';
import '../../_chunks/dep-fe644854.mjs';
import '../../config-provider/hooks/useConfig.mjs';
import '../../config-provider/utils/context.mjs';
import '../../_chunks/dep-a4c09318.mjs';
import '../../_chunks/dep-ffb85102.mjs';
import '../../_chunks/dep-ad588525.mjs';
import '../../_chunks/dep-9003fde5.mjs';
import '../../_chunks/dep-22ebd6af.mjs';
import '../../_chunks/dep-cdd448ec.mjs';
import '../../_chunks/dep-97ecacde.mjs';
import '../../_chunks/dep-84fd47b3.mjs';
import '../../_chunks/dep-d36c4a3f.mjs';

function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var _getOptionsFromChildren = function getOptionsFromChildren(menuNode) {
  var _menuNode$, _menuNode$3, _menuNode$4;
  if (!menuNode) return [];
  if (isArray(menuNode) && ((_menuNode$ = menuNode[0]) === null || _menuNode$ === void 0 || (_menuNode$ = _menuNode$.type) === null || _menuNode$ === void 0 ? void 0 : _menuNode$.name) === "TDropdownMenu") {
    var _menuNode$2, _menuNode$2$default;
    var groupChildren = (_menuNode$2 = menuNode[0]) === null || _menuNode$2 === void 0 || (_menuNode$2 = _menuNode$2.children) === null || _menuNode$2 === void 0 || (_menuNode$2$default = _menuNode$2["default"]) === null || _menuNode$2$default === void 0 ? void 0 : _menuNode$2$default.call(_menuNode$2);
    if (isArray(groupChildren)) {
      return _getOptionsFromChildren(groupChildren);
    }
  }
  if (isArray(menuNode)) {
    menuNode = menuNode.reduce(function (acc, item) {
      acc = acc.concat(isArray(item.children) ? item.children : item);
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
        return !isString(v.children) && ["TDropdownMenu", "TDropdownItem"].includes((_v$type2 = v.type) === null || _v$type2 === void 0 ? void 0 : _v$type2.name);
      });
      var itemProps = Object.keys(item.props || {}).reduce(function (props, propName) {
        var _item$type;
        if (item.props[propName] === "" && ((_item$type = item.type) === null || _item$type === void 0 ? void 0 : _item$type.name) === "TDropdownItem" && ["active", "divider", "disabled"].includes(propName)) {
          props[camelCase(propName)] = true;
        } else {
          props[camelCase(propName)] = item.props[propName];
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
  if (isArray(menuNode) && isArray((_menuNode$3 = menuNode[0]) === null || _menuNode$3 === void 0 ? void 0 : _menuNode$3.children)) return _getOptionsFromChildren((_menuNode$4 = menuNode[0]) === null || _menuNode$4 === void 0 ? void 0 : _menuNode$4.children);
  return [];
};
function useDropdownOptions(props) {
  var _getChildComponentSlo, _getChildComponentSlo2, _instance$slots, _instance$slots$dropd;
  var getChildComponentSlots = useChildComponentSlots();
  var instance = getCurrentInstance();
  var menuSlot = ((_getChildComponentSlo = getChildComponentSlots("DropdownMenu")) === null || _getChildComponentSlo === void 0 || (_getChildComponentSlo = _getChildComponentSlo[0]) === null || _getChildComponentSlo === void 0 || (_getChildComponentSlo = _getChildComponentSlo.children) === null || _getChildComponentSlo === void 0 || (_getChildComponentSlo2 = _getChildComponentSlo["default"]) === null || _getChildComponentSlo2 === void 0 ? void 0 : _getChildComponentSlo2.call(_getChildComponentSlo)) || ((_instance$slots = instance.slots) === null || _instance$slots === void 0 || (_instance$slots$dropd = _instance$slots.dropdown) === null || _instance$slots$dropd === void 0 ? void 0 : _instance$slots$dropd.call(_instance$slots));
  var dropdownOptions = computed(function () {
    if (props.options && props.options.length > 0) return props.options;
    return _getOptionsFromChildren(menuSlot);
  });
  return dropdownOptions;
}

export { useDropdownOptions as default, _getOptionsFromChildren as getOptionsFromChildren };
//# sourceMappingURL=useDropdownOptions.mjs.map
