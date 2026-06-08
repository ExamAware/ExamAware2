/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import { defineComponent, ref, createVNode, mergeProps, h } from 'vue';
import _defineProperty from '@babel/runtime/helpers/defineProperty';
import _typeof from '@babel/runtime/helpers/typeof';
import { FilterIcon } from 'tdesign-icons-vue-next';
import { isEmpty, isFunction } from 'lodash-es';
import { Popup } from '../../popup/index.js';
import { CheckboxGroup } from '../../checkbox/index.js';
import { RadioGroup } from '../../radio/index.js';
import { Input } from '../../input/index.js';
import { Button } from '../../button/index.js';
import '@babel/runtime/helpers/toConsumableArray';
import '../../_chunks/dep-fe23be6e.js';
import { b as useTNodeDefault } from '../../_chunks/dep-2accc95a.js';
import { useConfig } from '../../config-provider/hooks/useConfig.js';
import { u as useGlobalIcon } from '../../_chunks/dep-3a7a2ef1.js';
import '@babel/runtime/helpers/slicedToArray';
import '../../_chunks/dep-880d05b9.js';
import '../../popup/popup.js';
import '@popperjs/core';
import '../../_chunks/dep-16bcfabc.js';
import '../../_chunks/dep-4f8b6591.js';
import '../../_chunks/dep-9e6d8a78.js';
import '../../_chunks/dep-2ea19dca.js';
import '../../_chunks/dep-51e5a827.js';
import '../../popup/container.js';
import '../../popup/props.js';
import '../../_chunks/dep-80a77612.js';
import '../../_chunks/dep-81b01cae.js';
import '../../config-provider/utils/context.js';
import '../../_chunks/dep-938cd955.js';
import 'dayjs';
import '@babel/runtime/helpers/createClass';
import '@babel/runtime/helpers/classCallCheck';
import '../../_chunks/dep-fb805f69.js';
import '../../_chunks/dep-664b8b22.js';
import '../../checkbox/checkbox.js';
import '../../checkbox/props.js';
import '../../_chunks/dep-f7dd3c12.js';
import '../../_chunks/dep-47b13687.js';
import '../../_chunks/dep-d2a6e7a4.js';
import '../../checkbox/consts/index.js';
import '../../checkbox/hooks/useCheckboxLazyLoad.js';
import '../../_chunks/dep-6264b0a7.js';
import '../../checkbox/hooks/useKeyboardEvent.js';
import '../../_chunks/dep-30c631d1.js';
import '../../checkbox/group.js';
import '../../checkbox/checkbox-group-props.js';
import '../../_chunks/dep-e3ce8c8f.js';
import '../../radio/radio.js';
import '../../radio/props.js';
import '../../radio/consts/index.js';
import '../../_chunks/dep-80a99546.js';
import '@babel/runtime/helpers/objectWithoutProperties';
import '../../radio/group.js';
import '@babel/runtime/helpers/asyncToGenerator';
import '@babel/runtime/regenerator';
import '../../radio/radio-group-props.js';
import '../../radio/radio-button.js';
import '../../radio/hooks/useKeyboard.js';
import '../../watermark/hooks/index.js';
import '../../input/input.js';
import '../../input/props.js';
import '../../input/hooks/useInput.js';
import '../../form/consts/index.js';
import '../../input/hooks/useLengthLimit.js';
import '../../_chunks/dep-8295e674.js';
import '../../input/hooks/useInputEventHandler.js';
import '../../input/hooks/useInputWidth.js';
import '../../input/input-group.js';
import '../../input/input-group-props.js';
import '../../button/button.js';
import '../../loading/index.js';
import '../../loading/directive.js';
import '../../loading/plugin.js';
import '../../_chunks/dep-ee693784.js';
import '../../loading/icon/gradient.js';
import '../../loading/props.js';
import '../../button/props.js';

function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var TableFilterController = defineComponent({
  name: "TableFilterController",
  props: {
    locale: Object,
    column: Object,
    colIndex: Number,
    tFilterValue: Object,
    innerFilterValue: Object,
    tableFilterClasses: Object,
    isFocusClass: String,
    primaryTableElement: {},
    popupProps: Object,
    attach: [String, Function],
    onVisibleChange: Function,
    filterIcon: [Function]
  },
  emits: ["inner-filter-change", "reset", "confirm"],
  setup: function setup(props, context) {
    var triggerElementRef = ref(null);
    var renderTNode = useTNodeDefault();
    var _useConfig = useConfig("table", props.locale),
      t = _useConfig.t,
      globalConfig = _useConfig.globalConfig;
    var _useGlobalIcon = useGlobalIcon({
        FilterIcon: FilterIcon
      }),
      FilterIcon$1 = _useGlobalIcon.FilterIcon;
    var filterPopupVisible = ref(false);
    var onFilterPopupVisibleChange = function onFilterPopupVisibleChange(visible) {
      var _props$onVisibleChang;
      filterPopupVisible.value = visible;
      (_props$onVisibleChang = props.onVisibleChange) === null || _props$onVisibleChang === void 0 || _props$onVisibleChang.call(props, visible);
    };
    var renderComponent = function renderComponent(column, filterComponentProps, component) {
      if (!component) return null;
      var isVueComponent = !!component.setup;
      if (isFunction(column.filter.component) && !isVueComponent) {
        return column.filter.component(function (v, b) {
          var tProps = _typeof(b) === "object" && "attrs" in b ? b.attrs : {};
          return h(v, {
            props: _objectSpread(_objectSpread({}, filterComponentProps), tProps)
          });
        });
      }
      var filter = column.filter || {};
      return createVNode(component, mergeProps({
        "class": filter.classNames,
        "style": filter.style
      }, filter.attrs, filterComponentProps), null);
    };
    var getFilterContent = function getFilterContent(column) {
      var _column$filter, _column$filter2, _column$filter3;
      var types = ["single", "multiple", "input"];
      if ((_column$filter = column.filter) !== null && _column$filter !== void 0 && _column$filter.type && !types.includes(column.filter.type)) {
        console.error("TDesign Table Error: column.filter.type must be the following: ".concat(JSON.stringify(types)));
        return;
      }
      var _props$innerFilterVal = props.innerFilterValue,
        innerFilterValue = _props$innerFilterVal === void 0 ? {} : _props$innerFilterVal;
      var component = {
        single: RadioGroup,
        multiple: CheckboxGroup,
        input: Input
      }[column.filter.type] || column.filter.component;
      if (!component && !column.filter.component) return;
      var filterComponentProps = _objectSpread(_objectSpread({
        options: ["single", "multiple"].includes(column.filter.type) ? (_column$filter2 = column.filter) === null || _column$filter2 === void 0 ? void 0 : _column$filter2.list : void 0
      }, ((_column$filter3 = column.filter) === null || _column$filter3 === void 0 ? void 0 : _column$filter3.props) || {}), {}, {
        onChange: function onChange(val, ctx) {
          var _column$filter$props, _column$filter4;
          context.emit("inner-filter-change", val, column);
          if ((_column$filter$props = column.filter.props) !== null && _column$filter$props !== void 0 && _column$filter$props.onChange) {
            var _column$filter$props$, _column$filter$props2;
            (_column$filter$props$ = (_column$filter$props2 = column.filter.props).onChange) === null || _column$filter$props$ === void 0 || _column$filter$props$.call(_column$filter$props2, val, ctx);
          }
          if ((_column$filter4 = column.filter) !== null && _column$filter4 !== void 0 && (_column$filter4 = _column$filter4.confirmEvents) !== null && _column$filter4 !== void 0 && _column$filter4.includes("onChange")) {
            filterPopupVisible.value = false;
          }
        }
      });
      if (column.colKey && innerFilterValue && column.colKey in innerFilterValue) {
        filterComponentProps.value = innerFilterValue === null || innerFilterValue === void 0 ? void 0 : innerFilterValue[column.colKey];
      }
      if (column.filter.confirmEvents) {
        column.filter.confirmEvents.forEach(function (event) {
          if (event === "onChange") return;
          filterComponentProps[event] = function () {
            context.emit("confirm", column);
            filterPopupVisible.value = false;
          };
        });
      }
      return createVNode("div", {
        "class": props.tableFilterClasses.contentInner
      }, [renderComponent(column, filterComponentProps, component)]);
    };
    var getBottomButtons = function getBottomButtons(column) {
      if (!column.filter.showConfirmAndReset) return;
      return createVNode("div", {
        "class": props.tableFilterClasses.bottomButtons
      }, [createVNode(Button, {
        "theme": "default",
        "size": "small",
        "onClick": function onClick() {
          context.emit("reset", column);
          filterPopupVisible.value = false;
        }
      }, {
        "default": function _default() {
          return [globalConfig.value.resetText];
        }
      }), createVNode(Button, {
        "theme": "primary",
        "size": "small",
        "onClick": function onClick() {
          context.emit("confirm", column);
          filterPopupVisible.value = false;
        }
      }, {
        "default": function _default() {
          return [globalConfig.value.confirmText];
        }
      })]);
    };
    var getContent = function getContent() {
      return createVNode("div", {
        "class": props.tableFilterClasses.popupContent
      }, [getFilterContent(props.column), getBottomButtons(props.column)]);
    };
    return function () {
      var _props$tFilterValue;
      if (!props.column.filter || props.column.filter && !Object.keys(props.column.filter).length) return null;
      var defaultFilterIcon = t(globalConfig.value.filterIcon) || createVNode(FilterIcon$1, null, null);
      var filterValue = (_props$tFilterValue = props.tFilterValue) === null || _props$tFilterValue === void 0 ? void 0 : _props$tFilterValue[props.column.colKey];
      var isObjectTrue = _typeof(filterValue) === "object" && !isEmpty(filterValue);
      var isValueExist = ![null, void 0, ""].includes(filterValue) && _typeof(filterValue) !== "object";
      return createVNode(Popup, mergeProps({
        "attach": props.attach || (props.primaryTableElement ? function () {
          return props.primaryTableElement;
        } : void 0),
        "visible": filterPopupVisible.value,
        "destroyOnClose": true,
        "trigger": "click",
        "placement": "bottom-right",
        "showArrow": true,
        "overlayClassName": props.tableFilterClasses.popup,
        "onVisibleChange": function onVisibleChange(val) {
          return onFilterPopupVisibleChange(val);
        },
        "class": [props.tableFilterClasses.icon, _defineProperty({}, props.isFocusClass, isObjectTrue || isValueExist)],
        "content": getContent
      }, props.popupProps), {
        "default": function _default() {
          return [createVNode("div", {
            "ref": triggerElementRef
          }, [renderTNode("filterIcon", {
            defaultNode: defaultFilterIcon,
            params: {
              col: props.column,
              colIndex: props.colIndex
            }
          })])];
        }
      });
    };
  }
});

export { TableFilterController as default };
//# sourceMappingURL=filter-controller.js.map
