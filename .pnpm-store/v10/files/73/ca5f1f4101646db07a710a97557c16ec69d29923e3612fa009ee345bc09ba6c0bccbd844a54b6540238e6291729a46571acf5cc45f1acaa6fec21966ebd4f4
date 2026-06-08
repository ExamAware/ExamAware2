/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import { defineComponent, toRefs, computed, createVNode, mergeProps } from 'vue';
import { _ as _defineProperty } from '../../_chunks/dep-1dacc319.mjs';
import { _ as _toConsumableArray } from '../../_chunks/dep-00b4e06a.mjs';
import { _ as _typeof } from '../../_chunks/dep-257428bc.mjs';
import { Checkbox, CheckboxGroup } from '../../checkbox/index.mjs';
import { intersection } from 'lodash-es';
import { u as usePrefixClass } from '../../_chunks/dep-7673347f.mjs';
import '../../_chunks/dep-9f459d8b.mjs';
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
import '../../config-provider/hooks/useConfig.mjs';
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

function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var ColumnCheckboxGroup = defineComponent({
  name: "ColumnCheckboxGroup",
  props: {
    checkboxProps: Object,
    options: {
      type: Array,
      "default": function _default() {
        return [];
      }
    },
    label: String,
    uniqueKey: String,
    value: Array,
    onChange: Function
  },
  setup: function setup(props) {
    var _toRefs = toRefs(props),
      checkboxProps = _toRefs.checkboxProps,
      value = _toRefs.value,
      options = _toRefs.options;
    var classPrefix = usePrefixClass();
    var allCheckedColumnKeys = computed(function () {
      var allCheckedKeys = [];
      options.value.forEach(function (option) {
        if (_typeof(option) === "object") {
          if (option.disabled) return;
          if (option.value) {
            allCheckedKeys.push(option.value);
          } else if (typeof option.label === "string") {
            allCheckedKeys.push(option.label);
          }
        } else {
          allCheckedKeys.push(option);
        }
      });
      return allCheckedKeys;
    });
    var intersectionKeys = computed(function () {
      return intersection(allCheckedColumnKeys.value, value.value);
    });
    var isCheckedAll = computed(function () {
      var len = intersectionKeys.value.length;
      return Boolean(len && allCheckedColumnKeys.value.length === len);
    });
    var isIndeterminate = computed(function () {
      var len = intersectionKeys.value.length;
      return Boolean(len < allCheckedColumnKeys.value.length && len);
    });
    var onCheckAllColumnsChange = function onCheckAllColumnsChange(checkAll, ctx) {
      var changeParams = {
        e: ctx.e,
        type: "check",
        current: void 0,
        option: void 0
      };
      if (checkAll) {
        var _props$onChange;
        var newKeys = _toConsumableArray(new Set(value.value.concat(allCheckedColumnKeys.value)));
        (_props$onChange = props.onChange) === null || _props$onChange === void 0 || _props$onChange.call(props, newKeys, changeParams);
      } else {
        var _props$onChange2;
        var _newKeys = value.value.filter(function (val) {
          return !allCheckedColumnKeys.value.includes(val);
        });
        (_props$onChange2 = props.onChange) === null || _props$onChange2 === void 0 || _props$onChange2.call(props, _newKeys, _objectSpread(_objectSpread({}, changeParams), {}, {
          type: "uncheck"
        }));
      }
    };
    var handleCheckChange = function handleCheckChange(val, ctx) {
      var _props$onChange3;
      (_props$onChange3 = props.onChange) === null || _props$onChange3 === void 0 || _props$onChange3.call(props, val, ctx);
    };
    var classes = computed(function () {
      return ["".concat(classPrefix.value, "-table__column-controller-item"), _defineProperty({}, "".concat(classPrefix.value, "-table__").concat(props.uniqueKey), props.uniqueKey)];
    });
    return function () {
      return createVNode("div", {
        "class": classes.value
      }, [createVNode("div", {
        "class": "".concat(classPrefix.value, "-table__column-controller-block")
      }, [createVNode(Checkbox, {
        "indeterminate": isIndeterminate.value,
        "checked": isCheckedAll.value,
        "onChange": onCheckAllColumnsChange,
        "disabled": !allCheckedColumnKeys.value.length
      }, {
        "default": function _default() {
          return [props.label];
        }
      })]), createVNode("div", {
        "class": "".concat(classPrefix.value, "-table__column-controller-block")
      }, [createVNode(CheckboxGroup, mergeProps({
        "options": options.value
      }, checkboxProps.value, {
        "modelValue": value.value,
        "onChange": handleCheckChange
      }), null)])]);
    };
  }
});

export { ColumnCheckboxGroup as default };
//# sourceMappingURL=column-checkbox-group.mjs.map
