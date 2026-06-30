/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var Vue = require('vue');
var _toConsumableArray = require('@babel/runtime/helpers/toConsumableArray');
var _defineProperty = require('@babel/runtime/helpers/defineProperty');
var select_optionProps = require('./option-props.js');
var checkbox_index = require('../checkbox/index.js');
require('@babel/runtime/helpers/typeof');
require('../_chunks/dep-953a77eb.js');
var index$1 = require('../_chunks/dep-47c460dd.js');
var index$3 = require('../_chunks/dep-8382953f.js');
var index$2 = require('../_chunks/dep-ecaaae91.js');
var index = require('../_chunks/dep-874d2900.js');
require('@babel/runtime/helpers/slicedToArray');
require('../_chunks/dep-cc66acf1.js');
var index$4 = require('../_chunks/dep-0b6215b5.js');
var select_utils_index = require('./utils/index.js');
var select_consts_index = require('./consts/index.js');
require('../checkbox/checkbox.js');
require('../checkbox/props.js');
require('../_chunks/dep-bc848944.js');
require('../_chunks/dep-d45110a6.js');
require('../_chunks/dep-b3b464e8.js');
require('../_chunks/dep-05f89f0d.js');
require('../_chunks/dep-e8ff2c13.js');
require('../_chunks/dep-23f77e26.js');
require('../_chunks/dep-ee355a9a.js');
require('../_chunks/dep-71fa6bfc.js');
require('../_chunks/dep-87589faa.js');
require('../_chunks/dep-80a478d7.js');
require('../checkbox/consts/index.js');
require('../checkbox/hooks/useCheckboxLazyLoad.js');
require('../_chunks/dep-fb83a452.js');
require('../checkbox/hooks/useKeyboardEvent.js');
require('../_chunks/dep-6280a7f6.js');
require('../_chunks/dep-a55e8a08.js');
require('../_chunks/dep-8abdfb41.js');
require('../_chunks/dep-06276759.js');
require('../_chunks/dep-48f60c78.js');
require('../_chunks/dep-0813861e.js');
require('../_chunks/dep-4fa46641.js');
require('../_chunks/dep-422dd97f.js');
require('../_chunks/dep-427dabac.js');
require('../_chunks/dep-72c4cc44.js');
require('../config-provider/hooks/useConfig.js');
require('../_chunks/dep-5d7e2375.js');
require('../_chunks/dep-94a7dc2d.js');
require('dayjs');
require('../_chunks/dep-92e23f17.js');
require('../_chunks/dep-0ff616fe.js');
require('../_chunks/dep-5f52cd42.js');
require('../_chunks/dep-f57bcb19.js');
require('../_chunks/dep-dc4bbc14.js');
require('../_chunks/dep-e27ea667.js');
require('../_chunks/dep-165ca38a.js');
require('../_chunks/dep-32412d92.js');
require('../_chunks/dep-a8a3d718.js');
require('../_chunks/dep-54e566d9.js');
require('../_chunks/dep-591a72de.js');
require('../_chunks/dep-8adeee89.js');
require('../_chunks/dep-4d2ef282.js');
require('../_chunks/dep-929933ce.js');
require('../_chunks/dep-6b1f0ef8.js');
require('@babel/runtime/helpers/createClass');
require('@babel/runtime/helpers/classCallCheck');
require('../_chunks/dep-c3dee00a.js');
require('../checkbox/group.js');
require('../checkbox/checkbox-group-props.js');
require('../_chunks/dep-3565d523.js');
require('../_chunks/dep-a58d79da.js');
require('../_chunks/dep-8b33876c.js');
require('../_chunks/dep-445924d5.js');
require('../_chunks/dep-fd5a369e.js');
require('../_chunks/dep-d62a674d.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var _toConsumableArray__default = /*#__PURE__*/_interopDefaultLegacy(_toConsumableArray);
var _defineProperty__default = /*#__PURE__*/_interopDefaultLegacy(_defineProperty);

function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty__default["default"](e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _isSlot(s) {
  return typeof s === 'function' || Object.prototype.toString.call(s) === '[object Object]' && !Vue.isVNode(s);
}
var _Option = Vue.defineComponent({
  name: "TOption",
  props: _objectSpread(_objectSpread({}, select_optionProps["default"]), {}, {
    createAble: Boolean,
    multiple: Boolean,
    index: Number,
    rowIndex: Number,
    trs: Map,
    scrollType: String,
    isVirtual: Boolean,
    bufferSize: Number,
    checkAll: Boolean
  }),
  emits: ["row-mounted"],
  setup: function setup(props2, context) {
    var selectProvider = Vue.inject(select_consts_index.selectInjectKey);
    var formDisabled = index.useDisabled();
    var _getCurrentInstance = Vue.getCurrentInstance(),
      vnode = _getCurrentInstance.vnode;
    var isReachMax = Vue.computed(function () {
      return selectProvider.value.max !== 0 && selectProvider.value.max <= selectProvider.value.selectValue.length;
    });
    var disabled = Vue.computed(function () {
      return formDisabled.value || props2.multiple && isReachMax.value && !isSelected.value && !selectProvider.value.isCheckAll;
    });
    var renderContent = index$1.useContent();
    var selectName = index$2.usePrefixClass("select");
    var _useCommonClassName = index$3.useCommonClassName(),
      STATUS = _useCommonClassName.STATUS,
      SIZE = _useCommonClassName.SIZE;
    var liRef = Vue.ref();
    var isHover = Vue.ref(false);
    var isSelected = Vue.computed(function () {
      if (selectProvider.value.isCheckAll && !props2.disabled) return true;
      return !props2.multiple ? selectProvider.value.selectValue === props2.value : selectProvider.value.selectValue.includes(props2.value);
    });
    var isIndeterminate = Vue.computed(function () {
      if (!props2.checkAll) return false;
      return selectProvider.value.indeterminate;
    });
    var classes = Vue.computed(function () {
      return ["".concat(selectName.value, "-option"), [SIZE.value[selectProvider.value.size]], _defineProperty__default["default"](_defineProperty__default["default"](_defineProperty__default["default"]({}, STATUS.value.disabled, disabled.value), STATUS.value.selected, isSelected.value), "".concat(selectName.value, "-option__hover"), (isHover.value || selectProvider.value.hoverIndex === props2.index) && !disabled.value)];
    });
    var labelText = Vue.computed(function () {
      return props2.label || props2.value;
    });
    var handleClick = function handleClick(e) {
      if (props2.disabled || disabled.value) return;
      if (props2.multiple) {
        handleCheckboxClick(!isSelected.value, {
          e: e
        });
        e.preventDefault();
        return;
      }
      if (props2.createAble) {
        var _selectProvider$value, _selectProvider$value2;
        (_selectProvider$value = (_selectProvider$value2 = selectProvider.value).handleCreate) === null || _selectProvider$value === void 0 || _selectProvider$value.call(_selectProvider$value2, props2.value);
        if (selectProvider.value.multiple) {
          selectProvider.value.handleValueChange([].concat(_toConsumableArray__default["default"](selectProvider.value.selectValue), [props2.value]), {
            selectedOptions: selectProvider.value.getSelectedOptions(),
            trigger: "check",
            e: e
          });
          return;
        }
      }
      var selectedOptions = selectProvider.value.getSelectedOptions(props2.value);
      selectProvider.value.handleValueChange(props2.value, {
        option: selectedOptions === null || selectedOptions === void 0 ? void 0 : selectedOptions[0],
        selectedOptions: selectedOptions,
        trigger: "check",
        e: e
      });
      selectProvider.value.handlePopupVisibleChange(false, {
        e: e
      });
      selectProvider.value.emitBlur(e);
    };
    var handleCheckboxClick = function handleCheckboxClick(val, context2) {
      var _selectProvider$value3;
      if (props2.checkAll) {
        selectProvider.value.onCheckAllChange(val);
        return;
      }
      var newValue = select_utils_index.getNewMultipleValue(selectProvider.value.selectValue, props2.value);
      var selectedOptions = selectProvider.value.getSelectedOptions(newValue.value);
      var currentOption = (_selectProvider$value3 = selectProvider.value.getSelectedOptions(props2.value)) === null || _selectProvider$value3 === void 0 ? void 0 : _selectProvider$value3[0];
      selectProvider.value.handleValueChange(newValue.value, {
        option: currentOption,
        selectedOptions: selectedOptions,
        trigger: val ? "check" : "uncheck",
        e: context2.e
      });
    };
    var renderTitle = function renderTitle() {
      var vProps = vnode.props || {};
      if (Reflect.has(vProps, "title")) {
        return props2.title;
      }
      if (typeof labelText.value === "string") return labelText.value;
      return null;
    };
    Vue.onMounted(function () {
      var trs = props2.trs,
        rowIndex = props2.rowIndex,
        isVirtual = props2.isVirtual;
      if (isVirtual) {
        trs.set(rowIndex, liRef.value);
        context.emit("row-mounted");
      }
    });
    Vue.onBeforeUnmount(function () {
      if (props2.isVirtual) {
        var trs = props2.trs,
          rowIndex = props2.rowIndex;
        trs["delete"](rowIndex);
      }
    });
    index$4.useRipple(liRef);
    return function () {
      var optionChild = renderContent("default", "content") || labelText.value;
      return Vue.createVNode("li", {
        "ref": liRef,
        "class": classes.value,
        "title": renderTitle(),
        "onMouseenter": function onMouseenter() {
          return isHover.value = true;
        },
        "onMouseleave": function onMouseleave() {
          return isHover.value = false;
        },
        "onClick": handleClick
      }, [selectProvider && props2.multiple ? Vue.createVNode(checkbox_index.Checkbox, {
        "checked": isSelected.value,
        "disabled": disabled.value,
        "onChange": handleCheckboxClick,
        "indeterminate": isIndeterminate.value
      }, _isSlot(optionChild) ? optionChild : {
        "default": function _default() {
          return [optionChild];
        }
      }) : Vue.createVNode("span", null, [optionChild])]);
    };
  }
});

exports["default"] = _Option;
//# sourceMappingURL=option.js.map
