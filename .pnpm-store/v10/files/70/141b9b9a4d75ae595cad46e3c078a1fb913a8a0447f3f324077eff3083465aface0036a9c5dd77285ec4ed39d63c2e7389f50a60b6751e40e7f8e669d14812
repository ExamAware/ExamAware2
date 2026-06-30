/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import { defineComponent, inject, getCurrentInstance, computed, ref, onMounted, onBeforeUnmount, createVNode, isVNode } from 'vue';
import _toConsumableArray from '@babel/runtime/helpers/toConsumableArray';
import _defineProperty from '@babel/runtime/helpers/defineProperty';
import props from './option-props.js';
import { Checkbox } from '../checkbox/index.js';
import 'lodash-es';
import '@babel/runtime/helpers/typeof';
import '../_chunks/dep-fe23be6e.js';
import { a as useContent } from '../_chunks/dep-2accc95a.js';
import { u as useCommonClassName } from '../_chunks/dep-4f8b6591.js';
import { u as usePrefixClass } from '../_chunks/dep-9e6d8a78.js';
import { u as useDisabled } from '../_chunks/dep-f7dd3c12.js';
import '@babel/runtime/helpers/slicedToArray';
import '../_chunks/dep-880d05b9.js';
import { u as useRipple } from '../_chunks/dep-d2a6e7a4.js';
import { getNewMultipleValue } from './utils/index.js';
import { selectInjectKey } from './consts/index.js';
import '../checkbox/checkbox.js';
import '../checkbox/props.js';
import '../_chunks/dep-47b13687.js';
import '../_chunks/dep-51e5a827.js';
import '../checkbox/consts/index.js';
import '../checkbox/hooks/useCheckboxLazyLoad.js';
import '../_chunks/dep-6264b0a7.js';
import '../checkbox/hooks/useKeyboardEvent.js';
import '../_chunks/dep-30c631d1.js';
import '../_chunks/dep-81b01cae.js';
import '../_chunks/dep-16bcfabc.js';
import '../_chunks/dep-fb805f69.js';
import '../config-provider/hooks/useConfig.js';
import '../config-provider/utils/context.js';
import '../_chunks/dep-938cd955.js';
import 'dayjs';
import '@babel/runtime/helpers/createClass';
import '@babel/runtime/helpers/classCallCheck';
import '../_chunks/dep-2ea19dca.js';
import '../checkbox/group.js';
import '../checkbox/checkbox-group-props.js';
import '../_chunks/dep-e3ce8c8f.js';
import '../_chunks/dep-664b8b22.js';

function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _isSlot(s) {
  return typeof s === 'function' || Object.prototype.toString.call(s) === '[object Object]' && !isVNode(s);
}
var _Option = defineComponent({
  name: "TOption",
  props: _objectSpread(_objectSpread({}, props), {}, {
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
    var selectProvider = inject(selectInjectKey);
    var formDisabled = useDisabled();
    var _getCurrentInstance = getCurrentInstance(),
      vnode = _getCurrentInstance.vnode;
    var isReachMax = computed(function () {
      return selectProvider.value.max !== 0 && selectProvider.value.max <= selectProvider.value.selectValue.length;
    });
    var disabled = computed(function () {
      return formDisabled.value || props2.multiple && isReachMax.value && !isSelected.value && !selectProvider.value.isCheckAll;
    });
    var renderContent = useContent();
    var selectName = usePrefixClass("select");
    var _useCommonClassName = useCommonClassName(),
      STATUS = _useCommonClassName.STATUS,
      SIZE = _useCommonClassName.SIZE;
    var liRef = ref();
    var isHover = ref(false);
    var isSelected = computed(function () {
      if (selectProvider.value.isCheckAll && !props2.disabled) return true;
      return !props2.multiple ? selectProvider.value.selectValue === props2.value : selectProvider.value.selectValue.includes(props2.value);
    });
    var isIndeterminate = computed(function () {
      if (!props2.checkAll) return false;
      return selectProvider.value.indeterminate;
    });
    var classes = computed(function () {
      return ["".concat(selectName.value, "-option"), [SIZE.value[selectProvider.value.size]], _defineProperty(_defineProperty(_defineProperty({}, STATUS.value.disabled, disabled.value), STATUS.value.selected, isSelected.value), "".concat(selectName.value, "-option__hover"), (isHover.value || selectProvider.value.hoverIndex === props2.index) && !disabled.value)];
    });
    var labelText = computed(function () {
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
          selectProvider.value.handleValueChange([].concat(_toConsumableArray(selectProvider.value.selectValue), [props2.value]), {
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
      var newValue = getNewMultipleValue(selectProvider.value.selectValue, props2.value);
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
    onMounted(function () {
      var trs = props2.trs,
        rowIndex = props2.rowIndex,
        isVirtual = props2.isVirtual;
      if (isVirtual) {
        trs.set(rowIndex, liRef.value);
        context.emit("row-mounted");
      }
    });
    onBeforeUnmount(function () {
      if (props2.isVirtual) {
        var trs = props2.trs,
          rowIndex = props2.rowIndex;
        trs["delete"](rowIndex);
      }
    });
    useRipple(liRef);
    return function () {
      var optionChild = renderContent("default", "content") || labelText.value;
      return createVNode("li", {
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
      }, [selectProvider && props2.multiple ? createVNode(Checkbox, {
        "checked": isSelected.value,
        "disabled": disabled.value,
        "onChange": handleCheckboxClick,
        "indeterminate": isIndeterminate.value
      }, _isSlot(optionChild) ? optionChild : {
        "default": function _default() {
          return [optionChild];
        }
      }) : createVNode("span", null, [optionChild])]);
    };
  }
});

export { _Option as default };
//# sourceMappingURL=option.js.map
