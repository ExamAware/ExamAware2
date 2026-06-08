/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import { defineComponent, toRefs, provide, createVNode, mergeProps } from 'vue';
import { _ as _defineProperty } from '../_chunks/dep-1dacc319.mjs';
import { _ as _slicedToArray } from '../_chunks/dep-9003fde5.mjs';
import _TabPanel from './tab-panel.mjs';
import TTabNav from './tab-nav.mjs';
import props from './props.mjs';
import { u as usePrefixClass, a as useTNodeJSX, j as useVModel } from '../_chunks/dep-7673347f.mjs';
import { isArray } from 'lodash-es';
import '../_chunks/dep-257428bc.mjs';
import '../_chunks/dep-9f459d8b.mjs';
import './tab-panel-props.mjs';
import 'tdesign-icons-vue-next';
import './tab-nav-item.mjs';
import './tab-nav-bar.mjs';
import '../_chunks/dep-00b4e06a.mjs';
import '../_chunks/dep-51a43106.mjs';
import '../_chunks/dep-fe644854.mjs';
import '../config-provider/hooks/useConfig.mjs';
import '../config-provider/utils/context.mjs';
import '../_chunks/dep-a4c09318.mjs';
import '../_chunks/dep-ffb85102.mjs';
import '../_chunks/dep-ad588525.mjs';
import '../_chunks/dep-22ebd6af.mjs';
import '../_chunks/dep-cdd448ec.mjs';
import '../_chunks/dep-97ecacde.mjs';
import '../_chunks/dep-84fd47b3.mjs';
import '../_chunks/dep-d36c4a3f.mjs';

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
//# sourceMappingURL=tabs.mjs.map
