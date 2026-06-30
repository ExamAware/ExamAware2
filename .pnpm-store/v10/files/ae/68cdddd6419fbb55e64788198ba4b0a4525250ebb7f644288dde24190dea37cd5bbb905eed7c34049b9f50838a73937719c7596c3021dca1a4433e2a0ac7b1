/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _defineProperty = require('@babel/runtime/helpers/defineProperty');
var Vue = require('vue');
var cascader_components_Item = require('./Item.js');
var cascader_props = require('../props.js');
require('@babel/runtime/helpers/toConsumableArray');
require('@babel/runtime/helpers/typeof');
require('../../_chunks/dep-953a77eb.js');
var renderTnode = require('../../_chunks/dep-4fa46641.js');
var index = require('../../_chunks/dep-47c460dd.js');
var index$1 = require('../../_chunks/dep-ecaaae91.js');
require('@babel/runtime/helpers/slicedToArray');
require('../../_chunks/dep-cc66acf1.js');
var cascader_utils_effect = require('../utils/effect.js');
var cascader_utils_helper = require('../utils/helper.js');
var configProvider_hooks_useConfig = require('../../config-provider/hooks/useConfig.js');
require('tdesign-icons-vue-next');
require('../utils/className.js');
require('../../checkbox/index.js');
require('../../checkbox/checkbox.js');
require('../../checkbox/props.js');
require('../../_chunks/dep-8382953f.js');
require('../../_chunks/dep-874d2900.js');
require('../../_chunks/dep-d45110a6.js');
require('../../_chunks/dep-b3b464e8.js');
require('../../_chunks/dep-05f89f0d.js');
require('../../_chunks/dep-bc848944.js');
require('../../_chunks/dep-0b6215b5.js');
require('../../_chunks/dep-c3dee00a.js');
require('../../_chunks/dep-e8ff2c13.js');
require('../../_chunks/dep-23f77e26.js');
require('../../_chunks/dep-ee355a9a.js');
require('../../_chunks/dep-71fa6bfc.js');
require('../../_chunks/dep-87589faa.js');
require('../../_chunks/dep-80a478d7.js');
require('../../checkbox/consts/index.js');
require('../../checkbox/hooks/useCheckboxLazyLoad.js');
require('../../_chunks/dep-fb83a452.js');
require('../../checkbox/hooks/useKeyboardEvent.js');
require('../../_chunks/dep-6280a7f6.js');
require('../../_chunks/dep-a55e8a08.js');
require('../../_chunks/dep-8abdfb41.js');
require('../../_chunks/dep-06276759.js');
require('../../_chunks/dep-48f60c78.js');
require('../../_chunks/dep-0813861e.js');
require('../../_chunks/dep-422dd97f.js');
require('../../_chunks/dep-427dabac.js');
require('../../_chunks/dep-72c4cc44.js');
require('../../_chunks/dep-5d7e2375.js');
require('../../_chunks/dep-94a7dc2d.js');
require('dayjs');
require('../../_chunks/dep-92e23f17.js');
require('../../_chunks/dep-0ff616fe.js');
require('../../_chunks/dep-5f52cd42.js');
require('../../_chunks/dep-f57bcb19.js');
require('../../_chunks/dep-dc4bbc14.js');
require('../../_chunks/dep-e27ea667.js');
require('../../_chunks/dep-165ca38a.js');
require('../../_chunks/dep-32412d92.js');
require('../../_chunks/dep-a8a3d718.js');
require('../../_chunks/dep-54e566d9.js');
require('../../_chunks/dep-591a72de.js');
require('../../_chunks/dep-8adeee89.js');
require('../../_chunks/dep-4d2ef282.js');
require('../../_chunks/dep-929933ce.js');
require('../../_chunks/dep-6b1f0ef8.js');
require('@babel/runtime/helpers/createClass');
require('@babel/runtime/helpers/classCallCheck');
require('../../checkbox/group.js');
require('../../checkbox/checkbox-group-props.js');
require('../../_chunks/dep-3565d523.js');
require('../../_chunks/dep-a58d79da.js');
require('../../_chunks/dep-8b33876c.js');
require('../../_chunks/dep-445924d5.js');
require('../../_chunks/dep-fd5a369e.js');
require('../../_chunks/dep-d62a674d.js');
require('../../loading/index.js');
require('../../_chunks/dep-95261778.js');
require('../../loading/plugin.js');
require('../../_chunks/dep-237ed01f.js');
require('../../loading/icon/gradient.js');
require('../../_chunks/dep-55c70201.js');
require('@babel/runtime/helpers/objectWithoutProperties');
require('../../_chunks/dep-4ccaead1.js');
require('../../_chunks/dep-990979bb.js');
require('../../loading/props.js');
require('../../_chunks/dep-9cc695aa.js');
require('../../_chunks/dep-48de95ee.js');
require('../../_chunks/dep-912c9727.js');
require('../../_chunks/dep-0b8a4740.js');
require('../../_chunks/dep-cd8cfdc0.js');
require('../../_chunks/dep-ac11336c.js');
require('../../_chunks/dep-9ce6873a.js');
require('../../_chunks/dep-779f6290.js');
require('../../_chunks/dep-31c76dc6.js');
require('../../_chunks/dep-06a7e589.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var _defineProperty__default = /*#__PURE__*/_interopDefaultLegacy(_defineProperty);

var TCascaderSubPanel = Vue.defineComponent({
  name: "TCascaderSubPanel",
  props: {
    option: cascader_props["default"].option,
    options: cascader_props["default"].options,
    empty: cascader_props["default"].empty,
    trigger: cascader_props["default"].trigger,
    onChange: cascader_props["default"].onChange,
    loading: cascader_props["default"].loading,
    loadingText: cascader_props["default"].loadingText,
    cascaderContext: {
      type: Object
    }
  },
  setup: function setup(props) {
    var renderTNodeJSXDefault = index.useTNodeDefault();
    var COMPONENT_NAME = index$1.usePrefixClass("cascader");
    var _useConfig = configProvider_hooks_useConfig.useConfig("cascader"),
      globalConfig = _useConfig.globalConfig;
    var panels = Vue.computed(function () {
      return cascader_utils_helper.getPanels(props.cascaderContext.treeNodes);
    });
    var handleExpand = function handleExpand(node, trigger) {
      var propsTrigger = props.trigger,
        cascaderContext = props.cascaderContext;
      cascader_utils_effect.expandClickEffect(propsTrigger, trigger, node, cascaderContext);
    };
    var renderItem = function renderItem(node, index) {
      var optionChild = node.data.content ? renderTnode.getDefaultNode(node.data.content(Vue.h)) : renderTNodeJSXDefault("option", {
        params: {
          item: node.data,
          index: index,
          onExpand: function onExpand() {
            return handleExpand(node, "click");
          },
          onChange: function onChange() {
            return cascader_utils_effect.valueChangeEffect(node, props.cascaderContext);
          }
        }
      });
      return Vue.createVNode(cascader_components_Item["default"], {
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
          cascader_utils_effect.valueChangeEffect(node, props.cascaderContext);
        }
      }, null);
    };
    var renderList = function renderList(treeNodes) {
      var isFilter = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var segment = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
      var index = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1;
      return Vue.createVNode("ul", {
        "class": ["".concat(COMPONENT_NAME.value, "__menu"), "narrow-scrollbar", _defineProperty__default["default"](_defineProperty__default["default"]({}, "".concat(COMPONENT_NAME.value, "__menu--segment"), segment), "".concat(COMPONENT_NAME.value, "__menu--filter"), isFilter)],
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
        content = renderTNodeJSXDefault("loadingText", Vue.createVNode("div", {
          "class": "".concat(COMPONENT_NAME.value, "__panel--empty")
        }, [globalConfig.value.loadingText]));
      } else {
        content = panels.value.length ? renderPanels() : renderTNodeJSXDefault("empty", Vue.createVNode("div", {
          "class": "".concat(COMPONENT_NAME.value, "__panel--empty")
        }, [globalConfig.value.empty]));
      }
      return Vue.createVNode("div", {
        "class": ["".concat(COMPONENT_NAME.value, "__panel"), _defineProperty__default["default"]({}, "".concat(COMPONENT_NAME.value, "--normal"), panels.value.length && !props.loading)]
      }, [content]);
    };
  }
});

exports["default"] = TCascaderSubPanel;
//# sourceMappingURL=Panel.js.map
