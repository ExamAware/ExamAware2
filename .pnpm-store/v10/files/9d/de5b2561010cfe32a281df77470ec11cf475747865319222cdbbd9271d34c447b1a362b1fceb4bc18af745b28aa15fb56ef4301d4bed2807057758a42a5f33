/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _defineProperty = require('@babel/runtime/helpers/defineProperty');
var Vue = require('vue');
var _toConsumableArray = require('@babel/runtime/helpers/toConsumableArray');
var _slicedToArray = require('@babel/runtime/helpers/slicedToArray');
require('tdesign-icons-vue-next');
var log = require('../_chunks/dep-733b2b51.js');
var menu_headMenuProps = require('./head-menu-props.js');
var tabs_index = require('../tabs/index.js');
require('./submenu.js');
var menu_utils_vMenu = require('./utils/v-menu.js');
require('@babel/runtime/helpers/typeof');
require('../_chunks/dep-953a77eb.js');
var index = require('../_chunks/dep-ecaaae91.js');
var index$2 = require('../_chunks/dep-f20044b8.js');
require('../_chunks/dep-cc66acf1.js');
var index$1 = require('../_chunks/dep-e8ff2c13.js');
var isFunction = require('../_chunks/dep-48f60c78.js');
var isArray = require('../_chunks/dep-87589faa.js');
require('../tabs/tabs.js');
require('../tabs/tab-panel.js');
require('../tabs/tab-panel-props.js');
require('../_chunks/dep-47c460dd.js');
require('../_chunks/dep-06276759.js');
require('../_chunks/dep-a55e8a08.js');
require('../_chunks/dep-b3b464e8.js');
require('../_chunks/dep-05f89f0d.js');
require('../_chunks/dep-4fa46641.js');
require('../_chunks/dep-0813861e.js');
require('../_chunks/dep-422dd97f.js');
require('../_chunks/dep-71fa6bfc.js');
require('../_chunks/dep-80a478d7.js');
require('../_chunks/dep-427dabac.js');
require('../_chunks/dep-72c4cc44.js');
require('../_chunks/dep-ee355a9a.js');
require('../_chunks/dep-23f77e26.js');
require('../_chunks/dep-8382953f.js');
require('../config-provider/hooks/useConfig.js');
require('../_chunks/dep-5d7e2375.js');
require('../_chunks/dep-94a7dc2d.js');
require('../_chunks/dep-8abdfb41.js');
require('dayjs');
require('../_chunks/dep-92e23f17.js');
require('../_chunks/dep-0ff616fe.js');
require('../_chunks/dep-5f52cd42.js');
require('../_chunks/dep-f57bcb19.js');
require('../_chunks/dep-dc4bbc14.js');
require('../_chunks/dep-e27ea667.js');
require('../_chunks/dep-165ca38a.js');
require('../_chunks/dep-32412d92.js');
require('../_chunks/dep-a8a3d718.js');
require('../_chunks/dep-54e566d9.js');
require('../_chunks/dep-591a72de.js');
require('../_chunks/dep-8adeee89.js');
require('../_chunks/dep-4d2ef282.js');
require('../_chunks/dep-929933ce.js');
require('../_chunks/dep-6b1f0ef8.js');
require('../_chunks/dep-92c8c5c9.js');
require('../tabs/tab-nav.js');
require('../tabs/props.js');
require('../tabs/tab-nav-item.js');
require('../_chunks/dep-31c76dc6.js');
require('../_chunks/dep-0b6215b5.js');
require('../_chunks/dep-c3dee00a.js');
require('../tabs/tab-nav-bar.js');
require('../_chunks/dep-b6058ff9.js');
require('../_chunks/dep-441a3b7b.js');
require('../_chunks/dep-e86abdd2.js');
require('../_chunks/dep-5d4742f2.js');
require('../_chunks/dep-d62a674d.js');
require('@babel/runtime/helpers/createClass');
require('@babel/runtime/helpers/classCallCheck');
require('../_chunks/dep-670d3f43.js');
require('./submenu-props.js');
require('../common-components/fake-arrow.js');
require('../popup/index.js');
require('../popup/popup.js');
require('@popperjs/core');
require('../popup/container.js');
require('../popup/props.js');
require('../_chunks/dep-39403bd1.js');
require('../_chunks/dep-3a7785db.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var _defineProperty__default = /*#__PURE__*/_interopDefaultLegacy(_defineProperty);
var _toConsumableArray__default = /*#__PURE__*/_interopDefaultLegacy(_toConsumableArray);
var _slicedToArray__default = /*#__PURE__*/_interopDefaultLegacy(_slicedToArray);

function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty__default["default"](e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _isSlot(s) {
  return typeof s === 'function' || Object.prototype.toString.call(s) === '[object Object]' && !Vue.isVNode(s);
}
var _HeadMenu = Vue.defineComponent({
  name: "THeadMenu",
  props: menu_headMenuProps["default"],
  setup: function setup(props2, ctx) {
    var _ctx$slots$default2, _ctx$slots3, _ctx$slots$content2, _ctx$slots4;
    var classPrefix = index.usePrefixClass();
    var _getCurrentInstance = Vue.getCurrentInstance(),
      proxy = _getCurrentInstance.proxy;
    Vue.watchEffect(function () {
      if (ctx.slots.options) {
        log.log.warnOnce("TMenu", "`options` slot is going to be deprecated, please use `operations` for slot instead.");
      }
    });
    var _toRefs = Vue.toRefs(props2),
      value = _toRefs.value,
      modelValue = _toRefs.modelValue,
      expanded = _toRefs.expanded;
    var _useVModel = index$1.useVModel(value, modelValue, props2.defaultValue, props2.onChange),
      _useVModel2 = _slicedToArray__default["default"](_useVModel, 2),
      activeValue = _useVModel2[0],
      setActiveValue = _useVModel2[1];
    var _useDefaultValue = index$2.useDefaultValue(expanded, props2.defaultExpanded, props2.onExpand, "expanded"),
      _useDefaultValue2 = _slicedToArray__default["default"](_useDefaultValue, 2),
      expandValues = _useDefaultValue2[0],
      setExpanded = _useDefaultValue2[1];
    var activeValues = Vue.ref([]);
    var theme = Vue.computed(function () {
      return props2.theme;
    });
    var menuClass = Vue.computed(function () {
      return ["".concat(classPrefix.value, "-menu"), "".concat(classPrefix.value, "-head-menu"), "".concat(classPrefix.value, "-menu--").concat(props2.theme)];
    });
    var mode = Vue.ref(props2.expandType);
    var submenu = Vue.reactive([]);
    var vMenu = new menu_utils_vMenu.VMenu({
      isMutex: true,
      expandValues: expandValues.value
    });
    Vue.provide("TdMenu", {
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
        var expanded2 = _toConsumableArray__default["default"](expandValues.value);
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
      submenu.push.apply(submenu, _toConsumableArray__default["default"](ans));
    };
    Vue.watch(expandValues, function (value2) {
      if (mode.value === "normal") {
        handleSubmenuExpand(value2[0]);
      }
    });
    var updateActiveValues = function updateActiveValues(value2) {
      activeValues.value = vMenu.select(value2);
    };
    Vue.watch(activeValue, updateActiveValues);
    Vue.watch(function () {
      return props2.expandType;
    }, function (value2) {
      mode.value = value2;
    });
    Vue.onMounted(function () {
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
      return Vue.createVNode("ul", {
        "class": ["".concat(classPrefix.value, "-head-menu__submenu"), "".concat(classPrefix.value, "-submenu")]
      }, [Vue.createVNode(tabs_index.Tabs, {
        "value": activeValue.value,
        "onChange": handleTabChange
      }, _isSlot(_slot = submenu.map(function (item) {
        var _item$vnode$;
        return Vue.createVNode(tabs_index.TabPanel, {
          "value": item.value,
          "label": (_item$vnode$ = item.vnode()[0]) === null || _item$vnode$ === void 0 ? void 0 : _item$vnode$.children
        }, null);
      })) ? _slot : {
        "default": function _default() {
          return [_slot];
        }
      })]);
    };
    var menuRef = Vue.ref();
    var innerRef = Vue.ref();
    var logoRef = Vue.ref();
    var operationRef = Vue.ref();
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
        if (isFunction.isFunction((_node$children = node.children) === null || _node$children === void 0 ? void 0 : _node$children["default"])) {
          _initVMenu(node.children["default"](), nodeValue);
          return;
        }
        if (isArray.isArray(node.children)) {
          _initVMenu(node.children, nodeValue);
        }
      });
    };
    _initVMenu(((_ctx$slots$default2 = (_ctx$slots3 = ctx.slots)["default"]) === null || _ctx$slots$default2 === void 0 ? void 0 : _ctx$slots$default2.call(_ctx$slots3)) || ((_ctx$slots$content2 = (_ctx$slots4 = ctx.slots).content) === null || _ctx$slots$content2 === void 0 ? void 0 : _ctx$slots$content2.call(_ctx$slots4)) || []);
    return function () {
      var _props2$logo, _ctx$slots$logo, _ctx$slots5, _props2$operations, _ctx$slots$operations, _ctx$slots6, _ctx$slots$options, _ctx$slots7, _ctx$slots$default3, _ctx$slots8, _ctx$slots$content3, _ctx$slots9;
      var logo = ((_props2$logo = props2.logo) === null || _props2$logo === void 0 ? void 0 : _props2$logo.call(props2, Vue.h)) || ((_ctx$slots$logo = (_ctx$slots5 = ctx.slots).logo) === null || _ctx$slots$logo === void 0 ? void 0 : _ctx$slots$logo.call(_ctx$slots5));
      var operations = ((_props2$operations = props2.operations) === null || _props2$operations === void 0 ? void 0 : _props2$operations.call(props2, Vue.h)) || ((_ctx$slots$operations = (_ctx$slots6 = ctx.slots).operations) === null || _ctx$slots$operations === void 0 ? void 0 : _ctx$slots$operations.call(_ctx$slots6)) || ((_ctx$slots$options = (_ctx$slots7 = ctx.slots).options) === null || _ctx$slots$options === void 0 ? void 0 : _ctx$slots$options.call(_ctx$slots7));
      var content = ((_ctx$slots$default3 = (_ctx$slots8 = ctx.slots)["default"]) === null || _ctx$slots$default3 === void 0 ? void 0 : _ctx$slots$default3.call(_ctx$slots8)) || ((_ctx$slots$content3 = (_ctx$slots9 = ctx.slots).content) === null || _ctx$slots$content3 === void 0 ? void 0 : _ctx$slots$content3.call(_ctx$slots9)) || [];
      return Vue.createVNode("div", {
        "class": menuClass.value
      }, [Vue.createVNode("div", {
        "class": "".concat(classPrefix.value, "-head-menu__inner"),
        "ref": innerRef
      }, [logo && Vue.createVNode("div", {
        "class": "".concat(classPrefix.value, "-menu__logo"),
        "ref": logoRef
      }, [logo]), Vue.createVNode("ul", {
        "class": "".concat(classPrefix.value, "-menu"),
        "ref": menuRef
      }, [content]), operations && Vue.createVNode("div", {
        "class": "".concat(classPrefix.value, "-menu__operations"),
        "ref": operationRef
      }, [operations])]), mode.value === "normal" && renderNormalSubmenu()]);
    };
  }
});

exports["default"] = _HeadMenu;
//# sourceMappingURL=head-menu.js.map
