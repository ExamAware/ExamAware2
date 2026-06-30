/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import _defineProperty from '@babel/runtime/helpers/defineProperty';
import { defineComponent, computed, createVNode, h } from 'vue';
import Item from './Item.js';
import props from '../props.js';
import 'lodash-es';
import '@babel/runtime/helpers/toConsumableArray';
import '@babel/runtime/helpers/typeof';
import '../../_chunks/dep-fe23be6e.js';
import { b as getDefaultNode } from '../../_chunks/dep-fb805f69.js';
import { b as useTNodeDefault } from '../../_chunks/dep-2accc95a.js';
import { u as usePrefixClass } from '../../_chunks/dep-9e6d8a78.js';
import '@babel/runtime/helpers/slicedToArray';
import '../../_chunks/dep-880d05b9.js';
import { valueChangeEffect, expandClickEffect } from '../utils/effect.js';
import { getPanels } from '../utils/helper.js';
import { useConfig } from '../../config-provider/hooks/useConfig.js';
import 'tdesign-icons-vue-next';
import '../utils/className.js';
import '../../checkbox/index.js';
import '../../checkbox/checkbox.js';
import '../../checkbox/props.js';
import '../../_chunks/dep-4f8b6591.js';
import '../../_chunks/dep-f7dd3c12.js';
import '../../_chunks/dep-47b13687.js';
import '../../_chunks/dep-d2a6e7a4.js';
import '../../_chunks/dep-2ea19dca.js';
import '../../_chunks/dep-51e5a827.js';
import '../../checkbox/consts/index.js';
import '../../checkbox/hooks/useCheckboxLazyLoad.js';
import '../../_chunks/dep-6264b0a7.js';
import '../../checkbox/hooks/useKeyboardEvent.js';
import '../../_chunks/dep-30c631d1.js';
import '../../_chunks/dep-81b01cae.js';
import '../../_chunks/dep-16bcfabc.js';
import '../../config-provider/utils/context.js';
import '../../_chunks/dep-938cd955.js';
import 'dayjs';
import '@babel/runtime/helpers/createClass';
import '@babel/runtime/helpers/classCallCheck';
import '../../checkbox/group.js';
import '../../checkbox/checkbox-group-props.js';
import '../../_chunks/dep-e3ce8c8f.js';
import '../../_chunks/dep-664b8b22.js';
import '../../loading/index.js';
import '../../loading/directive.js';
import '../../loading/plugin.js';
import '../../_chunks/dep-ee693784.js';
import '../../loading/icon/gradient.js';
import '../../_chunks/dep-80a99546.js';
import '@babel/runtime/helpers/objectWithoutProperties';
import '../../loading/props.js';
import '../../_chunks/dep-3a7a2ef1.js';

var TCascaderSubPanel = defineComponent({
  name: "TCascaderSubPanel",
  props: {
    option: props.option,
    options: props.options,
    empty: props.empty,
    trigger: props.trigger,
    onChange: props.onChange,
    loading: props.loading,
    loadingText: props.loadingText,
    cascaderContext: {
      type: Object
    }
  },
  setup: function setup(props) {
    var renderTNodeJSXDefault = useTNodeDefault();
    var COMPONENT_NAME = usePrefixClass("cascader");
    var _useConfig = useConfig("cascader"),
      globalConfig = _useConfig.globalConfig;
    var panels = computed(function () {
      return getPanels(props.cascaderContext.treeNodes);
    });
    var handleExpand = function handleExpand(node, trigger) {
      var propsTrigger = props.trigger,
        cascaderContext = props.cascaderContext;
      expandClickEffect(propsTrigger, trigger, node, cascaderContext);
    };
    var renderItem = function renderItem(node, index) {
      var optionChild = node.data.content ? getDefaultNode(node.data.content(h)) : renderTNodeJSXDefault("option", {
        params: {
          item: node.data,
          index: index,
          onExpand: function onExpand() {
            return handleExpand(node, "click");
          },
          onChange: function onChange() {
            return valueChangeEffect(node, props.cascaderContext);
          }
        }
      });
      return createVNode(Item, {
        "key": node.value,
        "node": node,
        "optionChild": optionChild,
        "cascaderContext": props.cascaderContext,
        "onClick": function onClick() {
          handleExpand(node, "click");
        },
        "onMouseenter": function onMouseenter() {
          handleExpand(node, "hover");
        },
        "onChange": function onChange() {
          valueChangeEffect(node, props.cascaderContext);
        }
      }, null);
    };
    var renderList = function renderList(treeNodes) {
      var isFilter = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var segment = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
      var index = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1;
      return createVNode("ul", {
        "class": ["".concat(COMPONENT_NAME.value, "__menu"), "narrow-scrollbar", _defineProperty(_defineProperty({}, "".concat(COMPONENT_NAME.value, "__menu--segment"), segment), "".concat(COMPONENT_NAME.value, "__menu--filter"), isFilter)],
        "key": "".concat(COMPONENT_NAME, "__menu").concat(index)
      }, [treeNodes.map(function (node) {
        return renderItem(node, index);
      })]);
    };
    var renderPanels = function renderPanels() {
      var _props$cascaderContex = props.cascaderContext,
        inputVal = _props$cascaderContex.inputVal,
        treeNodes = _props$cascaderContex.treeNodes;
      return inputVal ? renderList(treeNodes, true) : panels.value.map(function (treeNodes2, index) {
        return renderList(treeNodes2, false, index !== panels.value.length - 1, index);
      });
    };
    return function () {
      var content;
      if (props.loading) {
        content = renderTNodeJSXDefault("loadingText", createVNode("div", {
          "class": "".concat(COMPONENT_NAME.value, "__panel--empty")
        }, [globalConfig.value.loadingText]));
      } else {
        content = panels.value.length ? renderPanels() : renderTNodeJSXDefault("empty", createVNode("div", {
          "class": "".concat(COMPONENT_NAME.value, "__panel--empty")
        }, [globalConfig.value.empty]));
      }
      return createVNode("div", {
        "class": ["".concat(COMPONENT_NAME.value, "__panel"), _defineProperty({}, "".concat(COMPONENT_NAME.value, "--normal"), panels.value.length && !props.loading)]
      }, [content]);
    };
  }
});

export { TCascaderSubPanel as default };
//# sourceMappingURL=Panel.js.map
