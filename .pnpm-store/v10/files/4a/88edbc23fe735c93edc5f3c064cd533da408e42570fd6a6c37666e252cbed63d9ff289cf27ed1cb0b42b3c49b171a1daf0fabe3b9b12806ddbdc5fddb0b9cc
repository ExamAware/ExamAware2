/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var Vue = require('vue');
var _toConsumableArray = require('@babel/runtime/helpers/toConsumableArray');
var _slicedToArray = require('@babel/runtime/helpers/slicedToArray');
var _defineProperty = require('@babel/runtime/helpers/defineProperty');
var menu_props = require('./props.js');
require('@babel/runtime/helpers/typeof');
require('../_chunks/dep-953a77eb.js');
var index$1 = require('../_chunks/dep-47c460dd.js');
var index = require('../_chunks/dep-ecaaae91.js');
var index$3 = require('../_chunks/dep-f20044b8.js');
var log = require('../_chunks/dep-733b2b51.js');
require('../_chunks/dep-cc66acf1.js');
var index$2 = require('../_chunks/dep-e8ff2c13.js');
var menu_utils_vMenu = require('./utils/v-menu.js');
var isArray = require('../_chunks/dep-87589faa.js');
var isNumber = require('../_chunks/dep-990979bb.js');
require('../_chunks/dep-8abdfb41.js');
require('../_chunks/dep-06276759.js');
require('../_chunks/dep-48f60c78.js');
require('../_chunks/dep-b3b464e8.js');
require('../_chunks/dep-0813861e.js');
require('../_chunks/dep-a55e8a08.js');
require('../_chunks/dep-05f89f0d.js');
require('../_chunks/dep-4fa46641.js');
require('../_chunks/dep-422dd97f.js');
require('../_chunks/dep-71fa6bfc.js');
require('../_chunks/dep-80a478d7.js');
require('../_chunks/dep-427dabac.js');
require('../_chunks/dep-72c4cc44.js');
require('../_chunks/dep-ee355a9a.js');
require('../_chunks/dep-23f77e26.js');
require('../config-provider/hooks/useConfig.js');
require('../_chunks/dep-5d7e2375.js');
require('../_chunks/dep-94a7dc2d.js');
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
require('@babel/runtime/helpers/createClass');
require('@babel/runtime/helpers/classCallCheck');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var _toConsumableArray__default = /*#__PURE__*/_interopDefaultLegacy(_toConsumableArray);
var _slicedToArray__default = /*#__PURE__*/_interopDefaultLegacy(_slicedToArray);
var _defineProperty__default = /*#__PURE__*/_interopDefaultLegacy(_defineProperty);

function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty__default["default"](e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var _Menu = Vue.defineComponent({
  name: "TMenu",
  props: _objectSpread(_objectSpread({}, menu_props["default"]), {}, {
    onCollapsed: Function
  }),
  setup: function setup(props2, ctx) {
    var classPrefix = index.usePrefixClass();
    var renderTNodeJSX = index$1.useTNodeJSX();
    var renderContent = index$1.useContent();
    var mode = Vue.ref(props2.expandType);
    var theme = Vue.computed(function () {
      return props2.theme;
    });
    var isMutex = Vue.computed(function () {
      return props2.expandMutex;
    });
    var collapsed = Vue.computed(function () {
      return props2.collapsed;
    });
    var menuClass = Vue.computed(function () {
      return ["".concat(classPrefix.value, "-default-menu"), "".concat(classPrefix.value, "-menu--").concat(props2.theme), _defineProperty__default["default"]({}, "".concat(classPrefix.value, "-is-collapsed"), props2.collapsed)];
    });
    var innerClasses = Vue.computed(function () {
      return ["".concat(classPrefix.value, "-menu"), "".concat(classPrefix.value, "-menu--scroll")];
    });
    var expandWidth = Vue.computed(function () {
      var width = props2.width;
      var format = function format(val) {
        return isNumber.isNumber(val) ? "".concat(val, "px") : val;
      };
      if (isArray.isArray(width)) return width.map(function (item) {
        return format(item);
      });
      return [format(width), "64px"];
    });
    var styles = Vue.computed(function () {
      return {
        height: "100%",
        width: props2.collapsed ? expandWidth.value[1] : expandWidth.value[0]
      };
    });
    var _toRefs = Vue.toRefs(props2),
      value = _toRefs.value,
      modelValue = _toRefs.modelValue,
      expanded = _toRefs.expanded;
    var _useVModel = index$2.useVModel(value, modelValue, props2.defaultValue, props2.onChange),
      _useVModel2 = _slicedToArray__default["default"](_useVModel, 2),
      activeValue = _useVModel2[0],
      setActiveValue = _useVModel2[1];
    var _useDefaultValue = index$3.useDefaultValue(expanded, props2.defaultExpanded, props2.onExpand, "expanded"),
      _useDefaultValue2 = _slicedToArray__default["default"](_useDefaultValue, 2),
      expandValues = _useDefaultValue2[0],
      setExpand = _useDefaultValue2[1];
    var activeValues = Vue.ref([]);
    Vue.watchEffect(function () {
      var _props2$onCollapsed;
      mode.value = props2.collapsed ? "popup" : props2.expandType;
      (_props2$onCollapsed = props2.onCollapsed) === null || _props2$onCollapsed === void 0 || _props2$onCollapsed.call(props2, {
        collapsed: props2.collapsed
      });
    });
    var vMenu = new menu_utils_vMenu.VMenu({
      isMutex: isMutex,
      expandValues: expandValues.value ? _toConsumableArray__default["default"](expandValues.value) : []
    });
    Vue.provide("TdMenu", {
      activeValue: activeValue,
      activeValues: activeValues,
      expandValues: expandValues,
      mode: mode,
      theme: theme,
      isHead: false,
      vMenu: vMenu,
      collapsed: collapsed,
      select: function select(value2) {
        if (value2 !== activeValue.value) {
          setActiveValue(value2);
        }
      },
      open: function open(value2, type) {
        if (mode.value === "normal") {
          setExpand(vMenu.expand(value2));
        } else if (type === "add") {
          if (expandValues.value.indexOf(value2) === -1) {
            setExpand([].concat(_toConsumableArray__default["default"](expandValues.value), [value2]));
          }
        } else if (type === "remove") {
          var index = expandValues.value.indexOf(value2);
          var tmp = _toConsumableArray__default["default"](expandValues.value);
          tmp.splice(index, 1);
          setExpand(tmp);
        }
      }
    });
    Vue.watch(function () {
      return props2.expanded;
    }, function (value2) {
      vMenu.expandValues = new Set(value2);
    });
    Vue.watch(function () {
      return props2.collapsed;
    }, function (newValue, oldValue) {
      if (!newValue && oldValue) {
        setExpand(_toConsumableArray__default["default"](vMenu.expandValues));
      }
    });
    Vue.watch(activeValue, function (value2) {
      activeValues.value = vMenu.select(value2);
    });
    Vue.watchEffect(function () {
      if (ctx.slots.options) {
        log.log.warnOnce("TMenu", "`options` slot is going to be deprecated, please use `operations` for slot instead.");
      }
    });
    Vue.onMounted(function () {
      activeValues.value = vMenu.select(activeValue.value);
    });
    return function () {
      var operations = renderContent("operations", "options");
      var logo = renderTNodeJSX("logo");
      return Vue.createVNode("div", {
        "class": menuClass.value,
        "style": styles.value
      }, [Vue.createVNode("div", {
        "class": "".concat(classPrefix.value, "-default-menu__inner")
      }, [logo && Vue.createVNode("div", {
        "class": "".concat(classPrefix.value, "-menu__logo")
      }, [logo]), Vue.createVNode("ul", {
        "class": innerClasses.value
      }, [renderContent("default", "content")]), operations && Vue.createVNode("div", {
        "class": "".concat(classPrefix.value, "-menu__operations")
      }, [operations])])]);
    };
  }
});

exports["default"] = _Menu;
//# sourceMappingURL=menu.js.map
