/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import { _ as _defineProperty } from '../../_chunks/dep-1dacc319.mjs';
import { defineComponent, computed, h, createVNode } from 'vue';
import Item from './Item.mjs';
import props from '../props.mjs';
import { q as useTNodeDefault, u as usePrefixClass } from '../../_chunks/dep-7673347f.mjs';
import { p as getDefaultNode } from '../../_chunks/dep-51a43106.mjs';
import '../utils/index.mjs';
import { useConfig } from '../../config-provider/hooks/useConfig.mjs';
import { getPanels } from '../utils/helper.mjs';
import { expandClickEffect, valueChangeEffect } from '../utils/effect.mjs';
import '../../_chunks/dep-257428bc.mjs';
import 'tdesign-icons-vue-next';
import '../../checkbox/index.mjs';
import '../../checkbox/checkbox.mjs';
import '../../_chunks/dep-9003fde5.mjs';
import '../../_chunks/dep-9f459d8b.mjs';
import 'lodash-es';
import '../../checkbox/props.mjs';
import '../../checkbox/consts/index.mjs';
import '../../checkbox/hooks/useCheckboxLazyLoad.mjs';
import '../../_chunks/dep-22ebd6af.mjs';
import '../../checkbox/hooks/useKeyboardEvent.mjs';
import '../../_chunks/dep-d36c4a3f.mjs';
import '../../_chunks/dep-00b4e06a.mjs';
import '../../_chunks/dep-fe644854.mjs';
import '../../config-provider/utils/context.mjs';
import '../../_chunks/dep-a4c09318.mjs';
import '../../_chunks/dep-ffb85102.mjs';
import '../../_chunks/dep-ad588525.mjs';
import '../../_chunks/dep-cdd448ec.mjs';
import '../../_chunks/dep-97ecacde.mjs';
import '../../_chunks/dep-84fd47b3.mjs';
import '../../checkbox/group.mjs';
import '../../checkbox/checkbox-group-props.mjs';
import './style/css.mjs';
import '../../loading/index.mjs';
import '../../loading/directive.mjs';
import '../../loading/plugin.mjs';
import '../../loading/loading.mjs';
import '../../loading/icon/gradient.mjs';
import '../../_chunks/dep-0cde7579.mjs';
import '../../_chunks/dep-0dcc778a.mjs';
import '../../loading/props.mjs';
import '../utils/className.mjs';

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
//# sourceMappingURL=Panel.mjs.map
