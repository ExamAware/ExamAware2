/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var Vue = require('vue');
var _defineProperty = require('@babel/runtime/helpers/defineProperty');
var _slicedToArray = require('@babel/runtime/helpers/slicedToArray');
var tabs_tabPanel = require('./tab-panel.js');
var tabs_tabNav = require('./tab-nav.js');
var tabs_props = require('./props.js');
require('@babel/runtime/helpers/toConsumableArray');
require('@babel/runtime/helpers/typeof');
require('../_chunks/dep-953a77eb.js');
var index$1 = require('../_chunks/dep-47c460dd.js');
var index = require('../_chunks/dep-ecaaae91.js');
require('../_chunks/dep-cc66acf1.js');
var index$2 = require('../_chunks/dep-e8ff2c13.js');
var isArray = require('../_chunks/dep-87589faa.js');
require('./tab-panel-props.js');
require('../_chunks/dep-8382953f.js');
require('../config-provider/hooks/useConfig.js');
require('../_chunks/dep-5d7e2375.js');
require('../_chunks/dep-94a7dc2d.js');
require('../_chunks/dep-8abdfb41.js');
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
require('../_chunks/dep-92c8c5c9.js');
require('tdesign-icons-vue-next');
require('./tab-nav-item.js');
require('../_chunks/dep-31c76dc6.js');
require('../_chunks/dep-0b6215b5.js');
require('../_chunks/dep-c3dee00a.js');
require('./tab-nav-bar.js');
require('../_chunks/dep-b6058ff9.js');
require('../_chunks/dep-441a3b7b.js');
require('../_chunks/dep-e86abdd2.js');
require('../_chunks/dep-80a478d7.js');
require('../_chunks/dep-5d4742f2.js');
require('../_chunks/dep-06276759.js');
require('../_chunks/dep-4fa46641.js');
require('../_chunks/dep-422dd97f.js');
require('../_chunks/dep-71fa6bfc.js');
require('../_chunks/dep-427dabac.js');
require('../_chunks/dep-72c4cc44.js');
require('../_chunks/dep-ee355a9a.js');
require('../_chunks/dep-23f77e26.js');
require('@babel/runtime/helpers/createClass');
require('@babel/runtime/helpers/classCallCheck');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var _defineProperty__default = /*#__PURE__*/_interopDefaultLegacy(_defineProperty);
var _slicedToArray__default = /*#__PURE__*/_interopDefaultLegacy(_slicedToArray);

var _Tabs = Vue.defineComponent({
  name: "TTabs",
  props: tabs_props["default"],
  setup: function setup(props2) {
    var COMPONENT_NAME = index.usePrefixClass("tabs");
    var classPrefix = index.usePrefixClass();
    var renderTNodeJSX = index$1.useTNodeJSX();
    var _toRefs = Vue.toRefs(props2),
      value = _toRefs.value,
      modelValue = _toRefs.modelValue;
    var _useVModel = index$2.useVModel(value, modelValue, props2.defaultValue || "", props2.onChange),
      _useVModel2 = _slicedToArray__default["default"](_useVModel, 2),
      tabValue = _useVModel2[0],
      setTabValue = _useVModel2[1];
    Vue.provide("tabs", {
      value: tabValue
    });
    var onTabAdd = function onTabAdd(context) {
      var _props2$onAdd;
      (_props2$onAdd = props2.onAdd) === null || _props2$onAdd === void 0 || _props2$onAdd.call(props2, {
        e: context.e
      });
    };
    var onTabChange = function onTabChange(value2) {
      setTabValue(value2);
    };
    var onTabRemove = function onTabRemove(_ref) {
      var _props2$onRemove;
      var e = _ref.e,
        value2 = _ref.value,
        index = _ref.index;
      (_props2$onRemove = props2.onRemove) === null || _props2$onRemove === void 0 || _props2$onRemove.call(props2, {
        value: value2,
        index: index,
        e: e
      });
    };
    var getSlotPanels = function getSlotPanels() {
      var content = renderTNodeJSX("default");
      if (!content) return [];
      var _flatContent = function flatContent(ct) {
        return ct.map(function (item) {
          if (item.children && isArray.isArray(item.children)) return _flatContent(item.children);
          return item;
        }).flat().filter(function (item) {
          return item.type.name === "TTabPanel";
        });
      };
      return _flatContent(content);
    };
    var renderHeader = function renderHeader() {
      var _props2$list;
      var panels = ((_props2$list = props2.list) !== null && _props2$list !== void 0 && _props2$list.length ? props2.list : getSlotPanels()) || [];
      var actionContent = renderTNodeJSX("action");
      var panelsData = panels.map(function (item) {
        var selfItem = item;
        if (item.props) {
          Object.keys(item.props).forEach(function (key) {
            selfItem[key] = item.props[key];
          });
        }
        return selfItem;
      });
      var tabNavProps = {
        theme: props2.theme,
        value: tabValue.value,
        size: props2.size,
        disabled: props2.disabled,
        placement: props2.placement,
        scrollPosition: props2.scrollPosition,
        addable: props2.addable,
        panels: panelsData,
        dragSort: props2.dragSort,
        action: actionContent
      };
      return Vue.createVNode("div", {
        "class": _defineProperty__default["default"](_defineProperty__default["default"]({}, "".concat(classPrefix.value, "-tabs__header"), true), "".concat(classPrefix.value, "-is-").concat(props2.placement), true)
      }, [Vue.createVNode(tabs_tabNav["default"], Vue.mergeProps(tabNavProps, {
        "onDragSort": props2.onDragSort,
        "onChange": onTabChange,
        "onAdd": onTabAdd,
        "onRemove": onTabRemove
      }), null)]);
    };
    var renderContent = function renderContent() {
      var _props2$list2;
      var panels = getSlotPanels();
      if ((_props2$list2 = props2.list) !== null && _props2$list2 !== void 0 && _props2$list2.length) {
        return props2.list.map(function (item) {
          return Vue.createVNode(tabs_tabPanel["default"], Vue.mergeProps(item, {
            "onRemove": onTabRemove
          }), null);
        });
      }
      if (panels && panels.length) {
        return Vue.createVNode("div", {
          "class": ["".concat(classPrefix.value, "-tabs__content")]
        }, [panels]);
      }
    };
    return function () {
      return Vue.createVNode("div", {
        "class": [COMPONENT_NAME.value]
      }, [props2.placement !== "bottom" ? [renderHeader(), renderContent()] : [renderContent(), renderHeader()]]);
    };
  }
});

exports["default"] = _Tabs;
//# sourceMappingURL=tabs.js.map
