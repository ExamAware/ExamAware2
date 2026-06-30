/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import _defineProperty from '@babel/runtime/helpers/defineProperty';
import { defineComponent, getCurrentInstance, watchEffect, toRefs, ref, computed, reactive, provide, watch, onMounted, h, createVNode, isVNode } from 'vue';
import _toConsumableArray from '@babel/runtime/helpers/toConsumableArray';
import _slicedToArray from '@babel/runtime/helpers/slicedToArray';
import 'tdesign-icons-vue-next';
import { isFunction, isArray } from 'lodash-es';
import { l as log } from '../_chunks/dep-8295e674.js';
import props from './head-menu-props.js';
import { Tabs, TabPanel } from '../tabs/index.js';
import './submenu.js';
import { VMenu } from './utils/v-menu.js';
import '@babel/runtime/helpers/typeof';
import '../_chunks/dep-fe23be6e.js';
import { u as usePrefixClass } from '../_chunks/dep-9e6d8a78.js';
import { u as useDefaultValue } from '../_chunks/dep-aa34a263.js';
import '../_chunks/dep-880d05b9.js';
import { u as useVModel } from '../_chunks/dep-51e5a827.js';
import '../tabs/tabs.js';
import '../tabs/tab-panel.js';
import '../tabs/tab-panel-props.js';
import '../_chunks/dep-2accc95a.js';
import '../_chunks/dep-16bcfabc.js';
import '../_chunks/dep-fb805f69.js';
import '../_chunks/dep-4f8b6591.js';
import '../config-provider/hooks/useConfig.js';
import '../config-provider/utils/context.js';
import '../_chunks/dep-938cd955.js';
import '../_chunks/dep-81b01cae.js';
import 'dayjs';
import '../_chunks/dep-7f74a978.js';
import '../tabs/tab-nav.js';
import '../tabs/props.js';
import '../tabs/tab-nav-item.js';
import '../_chunks/dep-3a7a2ef1.js';
import '../_chunks/dep-d2a6e7a4.js';
import '../_chunks/dep-2ea19dca.js';
import '../tabs/tab-nav-bar.js';
import '../_chunks/dep-80a77612.js';
import '../_chunks/dep-172a2a45.js';
import '../_chunks/dep-664b8b22.js';
import '@babel/runtime/helpers/createClass';
import '@babel/runtime/helpers/classCallCheck';
import '../_chunks/dep-ea52617d.js';
import './submenu-props.js';
import '../common-components/fake-arrow.js';
import '../popup/index.js';
import '../popup/popup.js';
import '@popperjs/core';
import '../popup/container.js';
import '../popup/props.js';

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
//# sourceMappingURL=head-menu.js.map
