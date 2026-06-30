/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import { defineComponent, ref, h, createVNode, mergeProps } from 'vue';
import { _ as _defineProperty } from '../../_chunks/dep-1dacc319.mjs';
import { _ as _typeof } from '../../_chunks/dep-257428bc.mjs';
import { FilterIcon } from 'tdesign-icons-vue-next';
import { isFunction, isEmpty } from 'lodash-es';
import { Popup } from '../../popup/index.mjs';
import { CheckboxGroup } from '../../checkbox/index.mjs';
import { RadioGroup } from '../../radio/index.mjs';
import { Input } from '../../input/index.mjs';
import { Button } from '../../button/index.mjs';
import { q as useTNodeDefault, i as useGlobalIcon } from '../../_chunks/dep-7673347f.mjs';
import { useConfig } from '../../config-provider/hooks/useConfig.mjs';
import '../../popup/popup.mjs';
import '../../_chunks/dep-9003fde5.mjs';
import '../../_chunks/dep-9f459d8b.mjs';
import '@popperjs/core';
import '../../_chunks/dep-51a43106.mjs';
import '../../_chunks/dep-fe644854.mjs';
import '../../popup/container.mjs';
import '../../_chunks/dep-00b4e06a.mjs';
import '../../popup/props.mjs';
import '../../config-provider/utils/context.mjs';
import '../../_chunks/dep-a4c09318.mjs';
import '../../_chunks/dep-ffb85102.mjs';
import '../../_chunks/dep-ad588525.mjs';
import '../../_chunks/dep-22ebd6af.mjs';
import '../../_chunks/dep-cdd448ec.mjs';
import '../../_chunks/dep-97ecacde.mjs';
import '../../_chunks/dep-84fd47b3.mjs';
import '../../_chunks/dep-d36c4a3f.mjs';
import './style/css.mjs';
import '../../checkbox/checkbox.mjs';
import '../../checkbox/props.mjs';
import '../../checkbox/consts/index.mjs';
import '../../checkbox/hooks/useCheckboxLazyLoad.mjs';
import '../../checkbox/hooks/useKeyboardEvent.mjs';
import '../../checkbox/group.mjs';
import '../../checkbox/checkbox-group-props.mjs';
import '../../radio/radio.mjs';
import '../../radio/props.mjs';
import '../../radio/consts/index.mjs';
import '../../_chunks/dep-0cde7579.mjs';
import '../../_chunks/dep-0dcc778a.mjs';
import '../../radio/group.mjs';
import '../../_chunks/dep-88e5a7b0.mjs';
import '../../radio/radio-group-props.mjs';
import '../../radio/radio-button.mjs';
import '../../radio/hooks/index.mjs';
import '../../radio/hooks/useKeyboard.mjs';
import '../../watermark/hooks/index.mjs';
import '../../input/input.mjs';
import '../../input/props.mjs';
import '../../input/hooks/index.mjs';
import '../../input/hooks/useInput.mjs';
import '../../form/consts/index.mjs';
import '../../input/hooks/useLengthLimit.mjs';
import '../../_chunks/dep-6d2705e1.mjs';
import '../../input/hooks/useInputEventHandler.mjs';
import '../../input/hooks/useInputWidth.mjs';
import '../../input/input-group.mjs';
import '../../input/input-group-props.mjs';
import '../../button/button.mjs';
import '../../loading/index.mjs';
import '../../loading/directive.mjs';
import '../../loading/plugin.mjs';
import '../../loading/loading.mjs';
import '../../loading/icon/gradient.mjs';
import '../../loading/props.mjs';
import '../../button/props.mjs';

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
//# sourceMappingURL=filter-controller.mjs.map
