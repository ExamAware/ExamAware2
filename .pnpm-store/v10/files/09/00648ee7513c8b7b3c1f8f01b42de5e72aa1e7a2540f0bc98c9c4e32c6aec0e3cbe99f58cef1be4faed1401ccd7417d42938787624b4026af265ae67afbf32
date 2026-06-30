/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import { defineComponent, toRefs, ref, computed, onMounted, watch, createVNode, mergeProps, nextTick, isVNode } from 'vue';
import _defineProperty from '@babel/runtime/helpers/defineProperty';
import dayjs from 'dayjs';
import { c as customParseFormat } from '../../_chunks/dep-bcf15bc2.js';
import { isUndefined } from 'lodash-es';
import { p as panelProps, D as DEFAULT_FORMAT, a as DEFAULT_STEPS } from '../../_chunks/dep-af8a928d.js';
import { S as SinglePanel } from '../../_chunks/dep-86ee5d0c.js';
import TButton from '../../button/button.js';
import '@babel/runtime/helpers/toConsumableArray';
import '@babel/runtime/helpers/typeof';
import '../../_chunks/dep-fe23be6e.js';
import { u as usePrefixClass } from '../../_chunks/dep-9e6d8a78.js';
import '@babel/runtime/helpers/slicedToArray';
import { l as log } from '../../_chunks/dep-8295e674.js';
import '../../_chunks/dep-880d05b9.js';
import { useConfig } from '../../config-provider/hooks/useConfig.js';
import '../../_chunks/dep-81b01cae.js';
import '../props.js';
import '../../_chunks/dep-bf4a6186.js';
import '../../_chunks/dep-4f8b6591.js';
import '../../loading/index.js';
import '../../loading/directive.js';
import '../../loading/plugin.js';
import '../../_chunks/dep-ee693784.js';
import '../../loading/icon/gradient.js';
import '../../_chunks/dep-2ea19dca.js';
import '../../_chunks/dep-80a99546.js';
import '@babel/runtime/helpers/objectWithoutProperties';
import '../../_chunks/dep-16bcfabc.js';
import '../../_chunks/dep-2accc95a.js';
import '../../_chunks/dep-fb805f69.js';
import '../../loading/props.js';
import '../../config-provider/utils/context.js';
import '../../_chunks/dep-938cd955.js';
import '@babel/runtime/helpers/createClass';
import '@babel/runtime/helpers/classCallCheck';
import '../../_chunks/dep-664b8b22.js';
import 'tdesign-vue-next/esm/common/style/web/components/loading/_index.less';
import '../../button/props.js';
import '../../_chunks/dep-f7dd3c12.js';
import '../../_chunks/dep-d2a6e7a4.js';

function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _isSlot(s) {
  return typeof s === 'function' || Object.prototype.toString.call(s) === '[object Object]' && !isVNode(s);
}
dayjs.extend(customParseFormat);
var _TimePickerPanel = defineComponent({
  name: "TTimePickerPanel",
  props: _objectSpread(_objectSpread({}, panelProps()), {}, {
    isFooterDisplay: Boolean,
    handleConfirmClick: Function,
    onChange: Function
  }),
  setup: function setup(props) {
    var _useConfig = useConfig("timePicker"),
      globalConfig = _useConfig.globalConfig;
    var COMPONENT_NAME = usePrefixClass("time-picker__panel");
    var _toRefs = toRefs(props),
      steps = _toRefs.steps,
      isFooterDisplay = _toRefs.isFooterDisplay,
      isShowPanel = _toRefs.isShowPanel;
    var triggerScroll = ref(false);
    var panelRef = ref();
    var showNowTimeBtn = computed(function () {
      return !!steps.value.filter(function (step) {
        return Number(step) > 1;
      }).length;
    });
    var defaultValue = computed(function () {
      var isStepsSet = showNowTimeBtn.value;
      var formattedValue = dayjs(props.value, props.format);
      if (props.value && formattedValue.isValid()) {
        return formattedValue.format(props.format);
      }
      if (isStepsSet) {
        return dayjs().hour(0).minute(0).second(0).format(props.format);
      }
      return dayjs().hour(0).minute(0).second(0).format(props.format);
    });
    var panelColUpdate = function panelColUpdate() {
      nextTick(function () {
        triggerScroll.value = true;
      });
    };
    var resetTriggerScroll = function resetTriggerScroll() {
      triggerScroll.value = false;
    };
    var handlePresetClick = function handlePresetClick(presetValue) {
      var presetVal = typeof presetValue === "function" ? presetValue() : presetValue;
      if (typeof props.activeIndex === "number") {
        if (Array.isArray(presetVal)) {
          var _props$onChange;
          (_props$onChange = props.onChange) === null || _props$onChange === void 0 || _props$onChange.call(props, presetVal[props.activeIndex]);
        } else {
          log.error("TimePicker", "preset: ".concat(props.presets, " \u9884\u8BBE\u503C\u5FC5\u987B\u662F\u6570\u7EC4!"));
        }
      } else {
        var _props$onChange2;
        (_props$onChange2 = props.onChange) === null || _props$onChange2 === void 0 || _props$onChange2.call(props, presetVal);
      }
    };
    var renderFooter = function renderFooter() {
      if (!isUndefined(props.presets)) return Object.keys(props.presets || []).map(function (key) {
        return createVNode(TButton, {
          "key": key,
          "theme": "primary",
          "size": "small",
          "variant": "text",
          "onClick": function onClick() {
            return handlePresetClick(props.presets[key]);
          }
        }, _isSlot(key) ? key : {
          "default": function _default() {
            return [key];
          }
        });
      });
      return !showNowTimeBtn.value ? createVNode(TButton, {
        "theme": "primary",
        "variant": "text",
        "size": "small",
        "onClick": function onClick() {
          var _props$onChange3;
          return (_props$onChange3 = props.onChange) === null || _props$onChange3 === void 0 ? void 0 : _props$onChange3.call(props, dayjs().format(props.format));
        }
      }, {
        "default": function _default() {
          return [globalConfig.value.now];
        }
      }) : null;
    };
    onMounted(function () {
      panelColUpdate();
    });
    watch(function () {
      return isShowPanel.value;
    }, function () {
      panelColUpdate();
    });
    return function () {
      return createVNode("div", {
        "class": COMPONENT_NAME.value
      }, [createVNode("div", {
        "class": "".concat(COMPONENT_NAME.value, "-section-body")
      }, [createVNode(SinglePanel, mergeProps(props, {
        "ref": panelRef,
        "format": props.format || DEFAULT_FORMAT,
        "steps": props.steps || DEFAULT_STEPS,
        "value": dayjs(props.value, props.format).isValid() ? props.value : defaultValue.value,
        "triggerScroll": triggerScroll.value,
        "onChange": props.onChange,
        "resetTriggerScroll": resetTriggerScroll,
        "isShowPanel": props.isShowPanel
      }), null)]), isFooterDisplay.value ? createVNode("div", {
        "class": "".concat(COMPONENT_NAME.value, "-section-footer")
      }, [createVNode(TButton, {
        "theme": "primary",
        "variant": "base",
        "disabled": !props.value,
        "onClick": function onClick(e) {
          var _props$handleConfirmC;
          return (_props$handleConfirmC = props.handleConfirmClick) === null || _props$handleConfirmC === void 0 ? void 0 : _props$handleConfirmC.call(props, e, defaultValue.value);
        },
        "size": "small"
      }, {
        "default": function _default() {
          return [globalConfig.value.confirm];
        }
      }), renderFooter()]) : null]);
    };
  }
});

export { _TimePickerPanel as default };
//# sourceMappingURL=time-picker-panel.js.map
