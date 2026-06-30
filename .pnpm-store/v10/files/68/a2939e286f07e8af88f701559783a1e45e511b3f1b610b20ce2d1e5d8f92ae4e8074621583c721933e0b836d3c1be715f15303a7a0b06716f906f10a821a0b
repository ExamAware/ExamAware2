/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import { defineComponent, inject, ref, computed, createVNode, Fragment, mergeProps, isVNode } from 'vue';
import { omit } from 'lodash-es';
import _Option from '../option.js';
import _OptionGroup from '../option-group.js';
import props from '../props.js';
import '@babel/runtime/helpers/toConsumableArray';
import '@babel/runtime/helpers/typeof';
import '../../_chunks/dep-fe23be6e.js';
import { u as useTNodeJSX, b as useTNodeDefault } from '../../_chunks/dep-2accc95a.js';
import { u as usePrefixClass } from '../../_chunks/dep-9e6d8a78.js';
import '@babel/runtime/helpers/slicedToArray';
import '../../_chunks/dep-880d05b9.js';
import '@babel/runtime/helpers/defineProperty';
import { usePanelVirtualScroll } from '../hooks/usePanelVirtualScroll.js';
import { selectInjectKey } from '../consts/index.js';
import { useConfig } from '../../config-provider/hooks/useConfig.js';
import '../option-props.js';
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
import '../../_chunks/dep-fb805f69.js';
import '../../config-provider/utils/context.js';
import '../../_chunks/dep-938cd955.js';
import 'dayjs';
import '@babel/runtime/helpers/createClass';
import '@babel/runtime/helpers/classCallCheck';
import '../../checkbox/group.js';
import '../../checkbox/checkbox-group-props.js';
import '../../_chunks/dep-e3ce8c8f.js';
import '../../_chunks/dep-664b8b22.js';
import '../utils/index.js';
import '../option-group-props.js';

function _isSlot(s) {
  return typeof s === 'function' || Object.prototype.toString.call(s) === '[object Object]' && !isVNode(s);
}
var SelectPanel = defineComponent({
  name: "TSelectPanel",
  props: {
    inputValue: props.inputValue,
    panelTopContent: props.panelTopContent,
    panelBottomContent: props.panelBottomContent,
    empty: props.empty,
    creatable: props.creatable,
    loading: props.loading,
    loadingText: props.loadingText,
    multiple: props.multiple,
    filterable: props.filterable,
    filter: props.filter,
    scroll: props.scroll,
    keys: props.keys
  },
  setup: function setup(props, _ref) {
    var expose = _ref.expose;
    var COMPONENT_NAME = usePrefixClass("select");
    var renderTNodeJSX = useTNodeJSX();
    var renderDefaultTNode = useTNodeDefault();
    var _useConfig = useConfig("select"),
      t = _useConfig.t,
      globalConfig = _useConfig.globalConfig;
    var tSelect = inject(selectInjectKey);
    var innerRef = ref(null);
    var keys = computed(function () {
      return props.keys;
    });
    var popupContentRef = computed(function () {
      return tSelect.value.popupContentRef.value;
    });
    var showCreateOption = computed(function () {
      return props.creatable && props.filterable && props.inputValue;
    });
    var displayOptions = computed(function () {
      return tSelect.value.displayOptions;
    });
    var _usePanelVirtualScrol = usePanelVirtualScroll({
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
    var isEmpty = computed(function () {
      return !displayOptions.value.length;
    });
    var renderCreateOption = function renderCreateOption() {
      return createVNode("ul", {
        "class": ["".concat(COMPONENT_NAME.value, "__create-option"), "".concat(COMPONENT_NAME.value, "__list")]
      }, [createVNode(_Option, {
        "value": props.inputValue,
        "label": "".concat(props.inputValue),
        "createAble": true,
        "class": "".concat(COMPONENT_NAME.value, "__create-option--special")
      }, null)]);
    };
    var _renderOptionsContent = function renderOptionsContent(options) {
      return createVNode("ul", {
        "class": "".concat(COMPONENT_NAME.value, "__list")
      }, [options.map(function (item, index) {
        var _props$scroll, _props$scroll2;
        if (item.children) {
          var _slot;
          return createVNode(_OptionGroup, {
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
        var option = omit(item, defaultOmit.concat(shouldOmitContent ? "content" : []));
        return createVNode(_Option, mergeProps(option, isVirtual.value ? {
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
    var dropdownInnerSize = computed(function () {
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
      return createVNode("div", {
        "ref": innerRef,
        "class": ["".concat(COMPONENT_NAME.value, "__dropdown-inner"), "".concat(COMPONENT_NAME.value, "__dropdown-inner--size-").concat(dropdownInnerSize.value)],
        "style": extraStyle
      }, [showCreateOption.value && renderCreateOption(), props.loading && renderDefaultTNode("loadingText", {
        defaultNode: createVNode("div", {
          "class": "".concat(COMPONENT_NAME.value, "__loading-tips")
        }, [t(globalConfig.value.loadingText)])
      }), !props.loading && isEmpty.value && !showCreateOption.value && createVNode("div", {
        "class": "".concat(COMPONENT_NAME.value, "__empty")
      }, [renderTNodeJSX("empty") || t(globalConfig.value.empty)]), !isEmpty.value && _renderOptionsContent(options)]);
    };
    return function () {
      return isVirtual.value ? createVNode(Fragment, null, [renderTNodeJSX("panelTopContent"), createVNode("div", null, [createVNode("div", {
        "style": cursorStyle.value
      }, null), renderPanel(visibleData.value, panelStyle.value)]), renderTNodeJSX("panelBottomContent")]) : createVNode(Fragment, null, [renderTNodeJSX("panelTopContent"), renderPanel(displayOptions.value), renderTNodeJSX("panelBottomContent")]);
    };
  }
});

export { SelectPanel as default };
//# sourceMappingURL=select-panel.js.map
