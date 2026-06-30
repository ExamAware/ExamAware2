/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import { _ as _defineProperty } from '../_chunks/dep-1dacc319.mjs';
import { isVNode, defineComponent, getCurrentInstance, watchEffect, toRefs, ref, computed, reactive, provide, watch, onMounted, createVNode, h } from 'vue';
import { _ as _toConsumableArray } from '../_chunks/dep-00b4e06a.mjs';
import { _ as _slicedToArray } from '../_chunks/dep-9003fde5.mjs';
import { EllipsisIcon } from 'tdesign-icons-vue-next';
import { isFunction, isArray } from 'lodash-es';
import { l as log } from '../_chunks/dep-97ecacde.mjs';
import props from './head-menu-props.mjs';
import { Tabs, TabPanel } from '../tabs/index.mjs';
import _Submenu from './submenu.mjs';
import './utils/index.mjs';
import { u as usePrefixClass, j as useVModel, k as useDefaultValue } from '../_chunks/dep-7673347f.mjs';
import { VMenu } from './utils/v-menu.mjs';
import '../_chunks/dep-257428bc.mjs';
import '../_chunks/dep-9f459d8b.mjs';
import '../tabs/tabs.mjs';
import '../tabs/tab-panel.mjs';
import '../tabs/tab-panel-props.mjs';
import '../tabs/tab-nav.mjs';
import '../tabs/props.mjs';
import '../tabs/tab-nav-item.mjs';
import '../tabs/tab-nav-bar.mjs';
import '../_chunks/dep-51a43106.mjs';
import '../_chunks/dep-fe644854.mjs';
import './style/css.mjs';
import '../config-provider/hooks/useConfig.mjs';
import '../config-provider/utils/context.mjs';
import '../_chunks/dep-a4c09318.mjs';
import '../_chunks/dep-ffb85102.mjs';
import '../_chunks/dep-ad588525.mjs';
import '../_chunks/dep-22ebd6af.mjs';
import '../_chunks/dep-cdd448ec.mjs';
import '../_chunks/dep-84fd47b3.mjs';
import '../_chunks/dep-d36c4a3f.mjs';
import './submenu-props.mjs';
import '../common-components/fake-arrow.mjs';
import '../popup/index.mjs';
import '../popup/popup.mjs';
import '@popperjs/core';
import '../popup/container.mjs';
import '../popup/props.mjs';

function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _isSlot(s) {
  return typeof s === 'function' || Object.prototype.toString.call(s) === '[object Object]' && !isVNode(s);
}
var _HeadMenu = defineComponent({
  name: "THeadMenu",
  props: props,
  setup: function setup(props2, ctx) {
    var _ctx$slots$default2, _ctx$slots3, _ctx$slots$content2, _ctx$slots4;
    var classPrefix = usePrefixClass();
    var _getCurrentInstance = getCurrentInstance(),
      proxy = _getCurrentInstance.proxy;
    watchEffect(function () {
      if (ctx.slots.options) {
        log.warnOnce("TMenu", "`options` slot is going to be deprecated, please use `operations` for slot instead.");
      }
    });
    var _toRefs = toRefs(props2),
      value = _toRefs.value,
      modelValue = _toRefs.modelValue,
      expanded = _toRefs.expanded;
    var _useVModel = useVModel(value, modelValue, props2.defaultValue, props2.onChange),
      _useVModel2 = _slicedToArray(_useVModel, 2),
      activeValue = _useVModel2[0],
      setActiveValue = _useVModel2[1];
    var _useDefaultValue = useDefaultValue(expanded, props2.defaultExpanded, props2.onExpand, "expanded"),
      _useDefaultValue2 = _slicedToArray(_useDefaultValue, 2),
      expandValues = _useDefaultValue2[0],
      setExpanded = _useDefaultValue2[1];
    var activeValues = ref([]);
    var theme = computed(function () {
      return props2.theme;
    });
    var menuClass = computed(function () {
      return ["".concat(classPrefix.value, "-menu"), "".concat(classPrefix.value, "-head-menu"), "".concat(classPrefix.value, "-menu--").concat(props2.theme)];
    });
    var mode = ref(props2.expandType);
    var submenu = reactive([]);
    var vMenu = new VMenu({
      isMutex: true,
      expandValues: expandValues.value
    });
    provide("TdMenu", {
      mode: mode,
      theme: theme,
      vMenu: vMenu,
      isHead: true,
      expandValues: expandValues,
      activeValue: activeValue,
      activeValues: activeValues,
      select: function select(value2) {
        setActiveValue(value2);
      },
      open: function open(value2, type) {
        var expanded2 = _toConsumableArray(expandValues.value);
        var index = expanded2.indexOf(value2);
        if (mode.value === "popup") {
          if (type === "add") {
            if (index === -1) {
              expanded2.push(value2);
            }
          } else if (type === "remove") {
            expanded2.splice(index, 1);
          }
        } else if (mode.value === "normal" && value2 !== void 0) {
          expanded2.splice(0, 1);
          if (index === -1) {
            expanded2.push(value2);
          }
        }
        setExpanded(expanded2);
      }
    });
    var handleTabChange = function handleTabChange(value2) {
      setActiveValue(value2);
      handleClickSubMenuItem(value2);
    };
    var handleSubmenuExpand = function handleSubmenuExpand(value2) {
      var ans = vMenu.getChild(value2);
      submenu.length = 0;
      submenu.push.apply(submenu, _toConsumableArray(ans));
    };
    watch(expandValues, function (value2) {
      if (mode.value === "normal") {
        handleSubmenuExpand(value2[0]);
      }
    });
    var updateActiveValues = function updateActiveValues(value2) {
      activeValues.value = vMenu.select(value2);
    };
    watch(activeValue, updateActiveValues);
    watch(function () {
      return props2.expandType;
    }, function (value2) {
      mode.value = value2;
    });
    onMounted(function () {
      var _expandValues$value;
      activeValues.value = vMenu.select(activeValue.value);
      if (((_expandValues$value = expandValues.value) === null || _expandValues$value === void 0 ? void 0 : _expandValues$value.length) > 0) {
        handleSubmenuExpand(expandValues.value[0]);
      }
    });
    var handleClickSubMenuItem = function handleClickSubMenuItem(value2) {
      var _activeMenuItem$onCli;
      var activeMenuItem = submenu.find(function (v) {
        return v.value === value2;
      });
      (_activeMenuItem$onCli = activeMenuItem.onClick) === null || _activeMenuItem$onCli === void 0 || _activeMenuItem$onCli.call(activeMenuItem, {
        value: value2
      });
      var to = activeMenuItem.to,
        href = activeMenuItem.href,
        replace = activeMenuItem.replace;
      if (href) {
        window.location.href = activeMenuItem.href;
      }
      var router = activeMenuItem.router || proxy.$router;
      if (to && router) {
        replace ? router.replace(to) : router.push(to);
      }
    };
    var renderNormalSubmenu = function renderNormalSubmenu() {
      var _slot;
      if (submenu.length === 0) return null;
      return createVNode("ul", {
        "class": ["".concat(classPrefix.value, "-head-menu__submenu"), "".concat(classPrefix.value, "-submenu")]
      }, [createVNode(Tabs, {
        "value": activeValue.value,
        "onChange": handleTabChange
      }, _isSlot(_slot = submenu.map(function (item) {
        var _item$vnode$;
        return createVNode(TabPanel, {
          "value": item.value,
          "label": (_item$vnode$ = item.vnode()[0]) === null || _item$vnode$ === void 0 ? void 0 : _item$vnode$.children
        }, null);
      })) ? _slot : {
        "default": function _default() {
          return [_slot];
        }
      })]);
    };
    var menuRef = ref();
    var innerRef = ref();
    var logoRef = ref();
    var operationRef = ref();
    var getComputedCss = function getComputedCss(el, cssProperty) {
      var _getComputedStyle$css;
      return (_getComputedStyle$css = getComputedStyle(el)[cssProperty]) !== null && _getComputedStyle$css !== void 0 ? _getComputedStyle$css : "";
    };
    var getComputedCssValue = function getComputedCssValue(el, cssProperty) {
      return Number.parseInt(String(getComputedCss(el, cssProperty)), 10);
    };
    var calcMenuWidth = function calcMenuWidth() {
      var menuPaddingLeft = getComputedCssValue(menuRef.value, "paddingLeft");
      var menuPaddingRight = getComputedCssValue(menuRef.value, "paddingRight");
      var totalWidth = innerRef.value.clientWidth;
      if (logoRef.value) {
        var logoMarginLeft = getComputedCssValue(logoRef.value, "marginLeft");
        var logoMarginRight = getComputedCssValue(logoRef.value, "marginRight");
        totalWidth = totalWidth - logoRef.value.offsetWidth - logoMarginLeft - logoMarginRight;
      }
      if (operationRef.value) {
        var operationMarginLeft = getComputedCssValue(operationRef.value, "marginLeft");
        var operationMarginRight = getComputedCssValue(operationRef.value, "marginRight");
        totalWidth = totalWidth - operationRef.value.offsetWidth - operationMarginLeft - operationMarginRight;
      }
      return totalWidth - menuPaddingLeft - menuPaddingRight;
    };
    var formatContent = function formatContent() {
      var _ctx$slots$default, _ctx$slots, _ctx$slots$content, _ctx$slots2;
      var slot = ((_ctx$slots$default = (_ctx$slots = ctx.slots)["default"]) === null || _ctx$slots$default === void 0 ? void 0 : _ctx$slots$default.call(_ctx$slots)) || ((_ctx$slots$content = (_ctx$slots2 = ctx.slots).content) === null || _ctx$slots$content === void 0 ? void 0 : _ctx$slots$content.call(_ctx$slots2)) || [];
      if (menuRef.value && innerRef.value) {
        var _menuRef$value$childN;
        var validNodes = Array.from((_menuRef$value$childN = menuRef.value.childNodes) !== null && _menuRef$value$childN !== void 0 ? _menuRef$value$childN : []).filter(function (item) {
          return item.nodeName !== "#text" || item.nodeValue;
        });
        var menuWidth = calcMenuWidth();
        var menuItemMinWidth = 104;
        var remainWidth = menuWidth;
        var sliceIndex = validNodes.length;
        for (var index = 0; index < validNodes.length; index++) {
          var element = validNodes[index];
          remainWidth -= element.offsetWidth || 0;
          if (remainWidth < menuItemMinWidth) {
            sliceIndex = index;
            break;
          }
        }
        var defaultSlot = slot.slice(0, sliceIndex);
        var subMore = slot.slice(sliceIndex);
        if (subMore.length) {
          slot = defaultSlot.concat(createVNode(_Submenu, {
            "expandType": "popup",
            "title": function title() {
              return createVNode(EllipsisIcon, null, null);
            }
          }, _isSlot(subMore) ? subMore : {
            "default": function _default() {
              return [subMore];
            }
          }));
        }
      }
      return slot;
    };
    var _initVMenu = function initVMenu(slots, parentValue) {
      slots.forEach(function (node) {
        var _node$props, _node$type, _node$type2, _node$children;
        var nodeValue = (_node$props = node.props) === null || _node$props === void 0 ? void 0 : _node$props.value;
        if (((_node$type = node.type) === null || _node$type === void 0 ? void 0 : _node$type.name) === "TSubmenu" || ((_node$type2 = node.type) === null || _node$type2 === void 0 ? void 0 : _node$type2.name) === "TMenuItem") {
          vMenu.add(_objectSpread({
            value: nodeValue,
            parent: parentValue,
            vnode: node.children["default"]
          }, node.props));
        }
        if (isFunction((_node$children = node.children) === null || _node$children === void 0 ? void 0 : _node$children["default"])) {
          _initVMenu(node.children["default"](), nodeValue);
          return;
        }
        if (isArray(node.children)) {
          _initVMenu(node.children, nodeValue);
        }
      });
    };
    _initVMenu(((_ctx$slots$default2 = (_ctx$slots3 = ctx.slots)["default"]) === null || _ctx$slots$default2 === void 0 ? void 0 : _ctx$slots$default2.call(_ctx$slots3)) || ((_ctx$slots$content2 = (_ctx$slots4 = ctx.slots).content) === null || _ctx$slots$content2 === void 0 ? void 0 : _ctx$slots$content2.call(_ctx$slots4)) || []);
    return function () {
      var _props2$logo, _ctx$slots$logo, _ctx$slots5, _props2$operations, _ctx$slots$operations, _ctx$slots6, _ctx$slots$options, _ctx$slots7, _ctx$slots$default3, _ctx$slots8, _ctx$slots$content3, _ctx$slots9;
      var logo = ((_props2$logo = props2.logo) === null || _props2$logo === void 0 ? void 0 : _props2$logo.call(props2, h)) || ((_ctx$slots$logo = (_ctx$slots5 = ctx.slots).logo) === null || _ctx$slots$logo === void 0 ? void 0 : _ctx$slots$logo.call(_ctx$slots5));
      var operations = ((_props2$operations = props2.operations) === null || _props2$operations === void 0 ? void 0 : _props2$operations.call(props2, h)) || ((_ctx$slots$operations = (_ctx$slots6 = ctx.slots).operations) === null || _ctx$slots$operations === void 0 ? void 0 : _ctx$slots$operations.call(_ctx$slots6)) || ((_ctx$slots$options = (_ctx$slots7 = ctx.slots).options) === null || _ctx$slots$options === void 0 ? void 0 : _ctx$slots$options.call(_ctx$slots7));
      var content = ((_ctx$slots$default3 = (_ctx$slots8 = ctx.slots)["default"]) === null || _ctx$slots$default3 === void 0 ? void 0 : _ctx$slots$default3.call(_ctx$slots8)) || ((_ctx$slots$content3 = (_ctx$slots9 = ctx.slots).content) === null || _ctx$slots$content3 === void 0 ? void 0 : _ctx$slots$content3.call(_ctx$slots9)) || [];
      return createVNode("div", {
        "class": menuClass.value
      }, [createVNode("div", {
        "class": "".concat(classPrefix.value, "-head-menu__inner"),
        "ref": innerRef
      }, [logo && createVNode("div", {
        "class": "".concat(classPrefix.value, "-menu__logo"),
        "ref": logoRef
      }, [logo]), createVNode("ul", {
        "class": "".concat(classPrefix.value, "-menu"),
        "ref": menuRef
      }, [content]), operations && createVNode("div", {
        "class": "".concat(classPrefix.value, "-menu__operations"),
        "ref": operationRef
      }, [operations])]), mode.value === "normal" && renderNormalSubmenu()]);
    };
  }
});

export { _HeadMenu as default };
//# sourceMappingURL=head-menu.mjs.map
