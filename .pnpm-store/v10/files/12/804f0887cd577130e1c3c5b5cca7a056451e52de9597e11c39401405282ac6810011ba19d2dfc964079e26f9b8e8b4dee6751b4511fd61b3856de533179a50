/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var Vue = require('vue');
var select_option = require('../option.js');
var select_optionGroup = require('../option-group.js');
var select_props = require('../props.js');
require('@babel/runtime/helpers/toConsumableArray');
require('@babel/runtime/helpers/typeof');
require('../../_chunks/dep-953a77eb.js');
var index$1 = require('../../_chunks/dep-47c460dd.js');
var index = require('../../_chunks/dep-ecaaae91.js');
require('@babel/runtime/helpers/slicedToArray');
require('../../_chunks/dep-cc66acf1.js');
require('@babel/runtime/helpers/defineProperty');
var select_hooks_usePanelVirtualScroll = require('../hooks/usePanelVirtualScroll.js');
var select_consts_index = require('../consts/index.js');
var omit = require('../../_chunks/dep-ace0b57c.js');
var configProvider_hooks_useConfig = require('../../config-provider/hooks/useConfig.js');
require('../option-props.js');
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
require('../../_chunks/dep-4fa46641.js');
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
require('../utils/index.js');
require('../option-group-props.js');
require('../../_chunks/dep-ac11336c.js');
require('../../_chunks/dep-11b67e11.js');
require('../../_chunks/dep-dcb859c6.js');

function _isSlot(s) {
  return typeof s === 'function' || Object.prototype.toString.call(s) === '[object Object]' && !Vue.isVNode(s);
}
var SelectPanel = Vue.defineComponent({
  name: "TSelectPanel",
  props: {
    inputValue: select_props["default"].inputValue,
    panelTopContent: select_props["default"].panelTopContent,
    panelBottomContent: select_props["default"].panelBottomContent,
    empty: select_props["default"].empty,
    creatable: select_props["default"].creatable,
    loading: select_props["default"].loading,
    loadingText: select_props["default"].loadingText,
    multiple: select_props["default"].multiple,
    filterable: select_props["default"].filterable,
    filter: select_props["default"].filter,
    scroll: select_props["default"].scroll,
    keys: select_props["default"].keys
  },
  setup: function setup(props, _ref) {
    var expose = _ref.expose;
    var COMPONENT_NAME = index.usePrefixClass("select");
    var renderTNodeJSX = index$1.useTNodeJSX();
    var renderDefaultTNode = index$1.useTNodeDefault();
    var _useConfig = configProvider_hooks_useConfig.useConfig("select"),
      t = _useConfig.t,
      globalConfig = _useConfig.globalConfig;
    var tSelect = Vue.inject(select_consts_index.selectInjectKey);
    var innerRef = Vue.ref(null);
    var keys = Vue.computed(function () {
      return props.keys;
    });
    var popupContentRef = Vue.computed(function () {
      return tSelect.value.popupContentRef.value;
    });
    var showCreateOption = Vue.computed(function () {
      return props.creatable && props.filterable && props.inputValue;
    });
    var displayOptions = Vue.computed(function () {
      return tSelect.value.displayOptions;
    });
    var _usePanelVirtualScrol = select_hooks_usePanelVirtualScroll.usePanelVirtualScroll({
        scroll: props.scroll,
        popupContentRef: popupContentRef,
        options: displayOptions
      }),
      trs = _usePanelVirtualScrol.trs,
      visibleData = _usePanelVirtualScrol.visibleData,
      handleRowMounted = _usePanelVirtualScrol.handleRowMounted,
      isVirtual = _usePanelVirtualScrol.isVirtual,
      panelStyle = _usePanelVirtualScrol.panelStyle,
      cursorStyle = _usePanelVirtualScrol.cursorStyle;
    var isEmpty = Vue.computed(function () {
      return !displayOptions.value.length;
    });
    var renderCreateOption = function renderCreateOption() {
      return Vue.createVNode("ul", {
        "class": ["".concat(COMPONENT_NAME.value, "__create-option"), "".concat(COMPONENT_NAME.value, "__list")]
      }, [Vue.createVNode(select_option["default"], {
        "value": props.inputValue,
        "label": "".concat(props.inputValue),
        "createAble": true,
        "class": "".concat(COMPONENT_NAME.value, "__create-option--special")
      }, null)]);
    };
    var _renderOptionsContent = function renderOptionsContent(options) {
      return Vue.createVNode("ul", {
        "class": "".concat(COMPONENT_NAME.value, "__list")
      }, [options.map(function (item, index) {
        var _props$scroll, _props$scroll2;
        if (item.children) {
          var _slot;
          return Vue.createVNode(select_optionGroup["default"], {
            "label": item.group,
            "divider": item.divider
          }, _isSlot(_slot = _renderOptionsContent(item.children)) ? _slot : {
            "default": function _default() {
              return [_slot];
            }
          });
        }
        var defaultOmit = ["index", "$index", "className", "tagName"];
        var _ref2 = keys.value || {},
          value = _ref2.value,
          label = _ref2.label,
          disabled = _ref2.disabled;
        var shouldOmitContent = [value, label, disabled].includes("content");
        var option = omit.omit(item, defaultOmit.concat(shouldOmitContent ? "content" : []));
        return Vue.createVNode(select_option["default"], Vue.mergeProps(option, isVirtual.value ? {
          rowIndex: item.$index,
          trs: trs,
          scrollType: (_props$scroll = props.scroll) === null || _props$scroll === void 0 ? void 0 : _props$scroll.type,
          isVirtual: isVirtual.value,
          bufferSize: (_props$scroll2 = props.scroll) === null || _props$scroll2 === void 0 ? void 0 : _props$scroll2.bufferSize,
          key: "".concat(item.$index || "", "_").concat(index, "_").concat(item.value)
        } : {
          key: "".concat(index, "_").concat(item.value)
        }, {
          "index": index,
          "multiple": props.multiple,
          "onRowMounted": handleRowMounted
        }), item.slots);
      })]);
    };
    var dropdownInnerSize = Vue.computed(function () {
      return {
        small: "s",
        medium: "m",
        large: "l"
      }[tSelect.value.size];
    });
    expose({
      innerRef: innerRef,
      visibleData: visibleData,
      isVirtual: isVirtual,
      displayOptions: displayOptions
    });
    var renderPanel = function renderPanel(options, extraStyle) {
      return Vue.createVNode("div", {
        "ref": innerRef,
        "class": ["".concat(COMPONENT_NAME.value, "__dropdown-inner"), "".concat(COMPONENT_NAME.value, "__dropdown-inner--size-").concat(dropdownInnerSize.value)],
        "style": extraStyle
      }, [showCreateOption.value && renderCreateOption(), props.loading && renderDefaultTNode("loadingText", {
        defaultNode: Vue.createVNode("div", {
          "class": "".concat(COMPONENT_NAME.value, "__loading-tips")
        }, [t(globalConfig.value.loadingText)])
      }), !props.loading && isEmpty.value && !showCreateOption.value && Vue.createVNode("div", {
        "class": "".concat(COMPONENT_NAME.value, "__empty")
      }, [renderTNodeJSX("empty") || t(globalConfig.value.empty)]), !isEmpty.value && _renderOptionsContent(options)]);
    };
    return function () {
      return isVirtual.value ? Vue.createVNode(Vue.Fragment, null, [renderTNodeJSX("panelTopContent"), Vue.createVNode("div", null, [Vue.createVNode("div", {
        "style": cursorStyle.value
      }, null), renderPanel(visibleData.value, panelStyle.value)]), renderTNodeJSX("panelBottomContent")]) : Vue.createVNode(Vue.Fragment, null, [renderTNodeJSX("panelTopContent"), renderPanel(displayOptions.value), renderTNodeJSX("panelBottomContent")]);
    };
  }
});

exports["default"] = SelectPanel;
//# sourceMappingURL=select-panel.js.map
