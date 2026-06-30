/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import { defineComponent, toRefs, provide, createVNode, mergeProps } from 'vue';
import _defineProperty from '@babel/runtime/helpers/defineProperty';
import _slicedToArray from '@babel/runtime/helpers/slicedToArray';
import _TabPanel from './tab-panel.js';
import TTabNav from './tab-nav.js';
import props from './props.js';
import { isArray } from 'lodash-es';
import '@babel/runtime/helpers/toConsumableArray';
import '@babel/runtime/helpers/typeof';
import '../_chunks/dep-fe23be6e.js';
import { u as useTNodeJSX } from '../_chunks/dep-2accc95a.js';
import { u as usePrefixClass } from '../_chunks/dep-9e6d8a78.js';
import '../_chunks/dep-880d05b9.js';
import { u as useVModel } from '../_chunks/dep-51e5a827.js';
import './tab-panel-props.js';
import '../_chunks/dep-4f8b6591.js';
import '../config-provider/hooks/useConfig.js';
import '../config-provider/utils/context.js';
import '../_chunks/dep-938cd955.js';
import '../_chunks/dep-81b01cae.js';
import 'dayjs';
import '../_chunks/dep-7f74a978.js';
import 'tdesign-icons-vue-next';
import './tab-nav-item.js';
import '../_chunks/dep-3a7a2ef1.js';
import '../_chunks/dep-d2a6e7a4.js';
import '../_chunks/dep-2ea19dca.js';
import './tab-nav-bar.js';
import '../_chunks/dep-80a77612.js';
import '../_chunks/dep-172a2a45.js';
import '../_chunks/dep-16bcfabc.js';
import '../_chunks/dep-fb805f69.js';
import '@babel/runtime/helpers/createClass';
import '@babel/runtime/helpers/classCallCheck';

var _Tabs = defineComponent({
  name: "TTabs",
  props: props,
  setup: function setup(props2) {
    var COMPONENT_NAME = usePrefixClass("tabs");
    var classPrefix = usePrefixClass();
    var renderTNodeJSX = useTNodeJSX();
    var _toRefs = toRefs(props2),
      value = _toRefs.value,
      modelValue = _toRefs.modelValue;
    var _useVModel = useVModel(value, modelValue, props2.defaultValue || "", props2.onChange),
      _useVModel2 = _slicedToArray(_useVModel, 2),
      tabValue = _useVModel2[0],
      setTabValue = _useVModel2[1];
    provide("tabs", {
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
          if (item.children && isArray(item.children)) return _flatContent(item.children);
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
      return createVNode("div", {
        "class": _defineProperty(_defineProperty({}, "".concat(classPrefix.value, "-tabs__header"), true), "".concat(classPrefix.value, "-is-").concat(props2.placement), true)
      }, [createVNode(TTabNav, mergeProps(tabNavProps, {
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
          return createVNode(_TabPanel, mergeProps(item, {
            "onRemove": onTabRemove
          }), null);
        });
      }
      if (panels && panels.length) {
        return createVNode("div", {
          "class": ["".concat(classPrefix.value, "-tabs__content")]
        }, [panels]);
      }
    };
    return function () {
      return createVNode("div", {
        "class": [COMPONENT_NAME.value]
      }, [props2.placement !== "bottom" ? [renderHeader(), renderContent()] : [renderContent(), renderHeader()]]);
    };
  }
});

export { _Tabs as default };
//# sourceMappingURL=tabs.js.map
