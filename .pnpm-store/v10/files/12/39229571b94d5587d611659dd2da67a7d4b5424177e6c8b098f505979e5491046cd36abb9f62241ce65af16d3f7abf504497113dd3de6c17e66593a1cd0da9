/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import { defineComponent, toRefs, computed, createVNode, mergeProps } from 'vue';
import _defineProperty from '@babel/runtime/helpers/defineProperty';
import _toConsumableArray from '@babel/runtime/helpers/toConsumableArray';
import _typeof from '@babel/runtime/helpers/typeof';
import { Checkbox, CheckboxGroup } from '../../checkbox/index.js';
import { intersection } from 'lodash-es';
import '../../_chunks/dep-fe23be6e.js';
import { u as usePrefixClass } from '../../_chunks/dep-9e6d8a78.js';
import '@babel/runtime/helpers/slicedToArray';
import '../../_chunks/dep-880d05b9.js';
import '../../checkbox/checkbox.js';
import '../../checkbox/props.js';
import '../../_chunks/dep-2accc95a.js';
import '../../_chunks/dep-16bcfabc.js';
import '../../_chunks/dep-fb805f69.js';
import '../../_chunks/dep-4f8b6591.js';
import '../../config-provider/hooks/useConfig.js';
import '../../config-provider/utils/context.js';
import '../../_chunks/dep-938cd955.js';
import '../../_chunks/dep-81b01cae.js';
import 'dayjs';
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
import '@babel/runtime/helpers/createClass';
import '@babel/runtime/helpers/classCallCheck';
import '../../checkbox/group.js';
import '../../checkbox/checkbox-group-props.js';
import '../../_chunks/dep-e3ce8c8f.js';
import '../../_chunks/dep-664b8b22.js';
import 'tdesign-vue-next/esm/common/style/web/components/checkbox/_index.less';

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
//# sourceMappingURL=column-checkbox-group.js.map
