/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import { isVNode, defineComponent, inject, ref, computed, createVNode, mergeProps, Fragment } from 'vue';
import { omit } from 'lodash-es';
import _Option from '../option.mjs';
import _OptionGroup from '../option-group.mjs';
import props from '../props.mjs';
import { u as usePrefixClass, a as useTNodeJSX, q as useTNodeDefault } from '../../_chunks/dep-7673347f.mjs';
import '../hooks/index.mjs';
import { selectInjectKey } from '../consts/index.mjs';
import { useConfig } from '../../config-provider/hooks/useConfig.mjs';
import { usePanelVirtualScroll } from '../hooks/usePanelVirtualScroll.mjs';
import '../../_chunks/dep-00b4e06a.mjs';
import '../../_chunks/dep-9f459d8b.mjs';
import '../../_chunks/dep-1dacc319.mjs';
import '../../_chunks/dep-257428bc.mjs';
import '../option-props.mjs';
import '../../checkbox/index.mjs';
import '../../checkbox/checkbox.mjs';
import '../../_chunks/dep-9003fde5.mjs';
import '../../checkbox/props.mjs';
import '../../checkbox/consts/index.mjs';
import '../../checkbox/hooks/useCheckboxLazyLoad.mjs';
import '../../_chunks/dep-22ebd6af.mjs';
import '../../checkbox/hooks/useKeyboardEvent.mjs';
import '../../_chunks/dep-d36c4a3f.mjs';
import '../../_chunks/dep-51a43106.mjs';
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
import '../utils/index.mjs';
import '../option-group-props.mjs';
import '../hooks/useKeyboardControl.mjs';
import '../hooks/useSelectOptions.mjs';

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
//# sourceMappingURL=select-panel.mjs.map
