/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var Vue = require('vue');
var _defineProperty = require('@babel/runtime/helpers/defineProperty');
var tdesignIconsVueNext = require('tdesign-icons-vue-next');
var tabs_props = require('./props.js');
var tabs_tabPanelProps = require('./tab-panel-props.js');
require('@babel/runtime/helpers/toConsumableArray');
require('@babel/runtime/helpers/typeof');
require('../_chunks/dep-953a77eb.js');
var index$3 = require('../_chunks/dep-8382953f.js');
var index$1 = require('../_chunks/dep-ecaaae91.js');
var index$2 = require('../_chunks/dep-31c76dc6.js');
require('@babel/runtime/helpers/slicedToArray');
require('../_chunks/dep-cc66acf1.js');
var index = require('../_chunks/dep-0b6215b5.js');
require('../_chunks/dep-8abdfb41.js');
require('../config-provider/hooks/useConfig.js');
require('../_chunks/dep-5d7e2375.js');
require('../_chunks/dep-94a7dc2d.js');
require('dayjs');
require('../_chunks/dep-92e23f17.js');
require('../_chunks/dep-0ff616fe.js');
require('../_chunks/dep-5f52cd42.js');
require('../_chunks/dep-48f60c78.js');
require('../_chunks/dep-b3b464e8.js');
require('../_chunks/dep-0813861e.js');
require('../_chunks/dep-f57bcb19.js');
require('../_chunks/dep-dc4bbc14.js');
require('../_chunks/dep-05f89f0d.js');
require('../_chunks/dep-87589faa.js');
require('../_chunks/dep-e27ea667.js');
require('../_chunks/dep-165ca38a.js');
require('../_chunks/dep-32412d92.js');
require('../_chunks/dep-a8a3d718.js');
require('../_chunks/dep-54e566d9.js');
require('../_chunks/dep-591a72de.js');
require('../_chunks/dep-a55e8a08.js');
require('../_chunks/dep-8adeee89.js');
require('../_chunks/dep-4d2ef282.js');
require('../_chunks/dep-929933ce.js');
require('../_chunks/dep-6b1f0ef8.js');
require('@babel/runtime/helpers/createClass');
require('@babel/runtime/helpers/classCallCheck');
require('../_chunks/dep-c3dee00a.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var _defineProperty__default = /*#__PURE__*/_interopDefaultLegacy(_defineProperty);

var TTabNavItem = Vue.defineComponent({
  name: "TTabNavItem",
  props: {
    index: Number,
    active: {
      type: Boolean
    },
    theme: tabs_props["default"].theme,
    size: tabs_props["default"].size,
    placement: tabs_props["default"].placement,
    label: {
      type: null
    },
    disabled: tabs_tabPanelProps["default"].disabled,
    removable: tabs_tabPanelProps["default"].removable,
    value: tabs_tabPanelProps["default"].value,
    onClick: Function,
    onTabRemove: Function,
    onTabPanelRemove: Function
  },
  setup: function setup(props) {
    var itemRef = Vue.ref();
    index.useRipple(itemRef);
    var COMPONENT_NAME = index$1.usePrefixClass("tabs__nav-item");
    var _useGlobalIcon = index$2.useGlobalIcon({
        CloseIcon: tdesignIconsVueNext.CloseIcon
      }),
      CloseIcon = _useGlobalIcon.CloseIcon;
    var classPrefix = index$1.usePrefixClass();
    var _useCommonClassName = index$3.useCommonClassName(),
      STATUS = _useCommonClassName.STATUS,
      SIZE = _useCommonClassName.SIZE;
    var removeBtnClick = function removeBtnClick(_ref) {
      var _props$onTabPanelRemo;
      var e = _ref.e;
      if (e) e.stopPropagation();
      props.onTabRemove({
        e: e,
        value: props.value,
        index: props.index
      });
      (_props$onTabPanelRemo = props.onTabPanelRemove) === null || _props$onTabPanelRemo === void 0 || _props$onTabPanelRemo.call(props, {
        e: e,
        value: props.value
      });
    };
    var onClickNav = function onClickNav(e) {
      if (props.disabled) return;
      props.onClick(e);
    };
    var navItemClass = Vue.computed(function () {
      return _defineProperty__default["default"](_defineProperty__default["default"](_defineProperty__default["default"](_defineProperty__default["default"](_defineProperty__default["default"](_defineProperty__default["default"](_defineProperty__default["default"](_defineProperty__default["default"]({}, COMPONENT_NAME.value, true), "".concat(classPrefix.value, "-tabs__nav--card"), props.theme === "card"), STATUS.value.disabled, props.disabled), STATUS.value.active, props.active), "".concat(classPrefix.value, "-is-left"), props.placement === "left"), "".concat(classPrefix.value, "-is-right"), props.placement === "right"), SIZE.value.medium, props.size === "medium"), SIZE.value.large, props.size === "large");
    });
    var removeBtn = function removeBtn() {
      return props.removable && !props.disabled ? Vue.createVNode("span", {
        "onClick": function onClick(e) {
          return removeBtnClick({
            e: e
          });
        },
        "class": "remove-btn"
      }, [Vue.createVNode(CloseIcon, null, null)]) : null;
    };
    var renderCardItem = function renderCardItem() {
      return Vue.createVNode("div", {
        "class": navItemClass.value,
        "onClick": onClickNav,
        "ref": itemRef
      }, [Vue.createVNode("span", {
        "class": "".concat(COMPONENT_NAME.value, "-text-wrapper")
      }, [props.label]), removeBtn()]);
    };
    var renderNormalItem = function renderNormalItem() {
      return Vue.createVNode("div", {
        "class": navItemClass.value,
        "onClick": onClickNav
      }, [Vue.createVNode("div", {
        "class": ["".concat(COMPONENT_NAME.value, "-wrapper"), _defineProperty__default["default"](_defineProperty__default["default"]({}, STATUS.value.disabled, props.disabled), STATUS.value.active, props.active)],
        "ref": itemRef
      }, [Vue.createVNode("span", {
        "class": "".concat(COMPONENT_NAME.value, "-text-wrapper")
      }, [props.label])]), removeBtn()]);
    };
    return function () {
      return props.theme === "card" ? renderCardItem() : renderNormalItem();
    };
  }
});

exports["default"] = TTabNavItem;
//# sourceMappingURL=tab-nav-item.js.map
