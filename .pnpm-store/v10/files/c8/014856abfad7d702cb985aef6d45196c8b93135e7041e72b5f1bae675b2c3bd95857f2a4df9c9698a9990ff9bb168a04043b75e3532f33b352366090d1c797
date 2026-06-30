/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import { isVNode, defineComponent, toRefs, ref, computed, nextTick, createVNode, onMounted, watch, mergeProps } from 'vue';
import { _ as _defineProperty } from '../../_chunks/dep-1dacc319.mjs';
import { d as dayjs } from '../../_chunks/dep-ad588525.mjs';
import { c as customParseFormat } from '../../_chunks/dep-83649365.mjs';
import { isUndefined } from 'lodash-es';
import { p as panelProps, D as DEFAULT_FORMAT, a as DEFAULT_STEPS } from '../../_chunks/dep-b1bc7bcc.mjs';
import { S as SinglePanel } from '../../_chunks/dep-928b1423.mjs';
import TButton from '../../button/button.mjs';
import { u as usePrefixClass } from '../../_chunks/dep-7673347f.mjs';
import '../../_chunks/dep-6d2705e1.mjs';
import { useConfig } from '../../config-provider/hooks/useConfig.mjs';
import { l as log } from '../../_chunks/dep-97ecacde.mjs';
import '../../_chunks/dep-257428bc.mjs';
import '../../_chunks/dep-fe644854.mjs';
import '../props.mjs';
import '../../_chunks/dep-63305cb0.mjs';
import '../../_chunks/dep-00b4e06a.mjs';
import '../../_chunks/dep-9f459d8b.mjs';
import '../../loading/index.mjs';
import '../../loading/directive.mjs';
import '../../loading/plugin.mjs';
import '../../loading/loading.mjs';
import '../../_chunks/dep-9003fde5.mjs';
import '../../loading/icon/gradient.mjs';
import '../../_chunks/dep-0cde7579.mjs';
import '../../_chunks/dep-0dcc778a.mjs';
import '../../_chunks/dep-51a43106.mjs';
import '../../loading/props.mjs';
import '../../config-provider/utils/context.mjs';
import '../../_chunks/dep-a4c09318.mjs';
import '../../_chunks/dep-ffb85102.mjs';
import '../../_chunks/dep-22ebd6af.mjs';
import '../../_chunks/dep-cdd448ec.mjs';
import '../../_chunks/dep-84fd47b3.mjs';
import '../../_chunks/dep-d36c4a3f.mjs';
import './style/css.mjs';
import '../../button/props.mjs';

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
//# sourceMappingURL=time-picker-panel.mjs.map
