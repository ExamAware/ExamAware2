/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var Vue = require('vue');
var _defineProperty = require('@babel/runtime/helpers/defineProperty');
var dayjs = require('dayjs');
var customParseFormat = require('../../_chunks/dep-d54d4085.js');
var timePicker_panel_props = require('../../_chunks/dep-f957f9e4.js');
var timePicker_panel_singlePanel = require('../../_chunks/dep-5e8a20df.js');
var button_button = require('../../button/button.js');
require('@babel/runtime/helpers/toConsumableArray');
require('@babel/runtime/helpers/typeof');
require('../../_chunks/dep-953a77eb.js');
var index = require('../../_chunks/dep-ecaaae91.js');
require('@babel/runtime/helpers/slicedToArray');
var log = require('../../_chunks/dep-733b2b51.js');
require('../../_chunks/dep-cc66acf1.js');
var isUndefined = require('../../_chunks/dep-fd5a369e.js');
var configProvider_hooks_useConfig = require('../../config-provider/hooks/useConfig.js');
require('../../_chunks/dep-8abdfb41.js');
require('../props.js');
require('../../_chunks/dep-d45110a6.js');
require('../../_chunks/dep-b3b464e8.js');
require('../../_chunks/dep-05f89f0d.js');
require('../../_chunks/dep-b9b30627.js');
require('../../_chunks/dep-39403bd1.js');
require('../../_chunks/dep-e86abdd2.js');
require('../../_chunks/dep-0813861e.js');
require('../../_chunks/dep-80a478d7.js');
require('../../_chunks/dep-8382953f.js');
require('../../_chunks/dep-441a3b7b.js');
require('../../_chunks/dep-591a72de.js');
require('../../_chunks/dep-f57bcb19.js');
require('../../_chunks/dep-165ca38a.js');
require('../../_chunks/dep-48f60c78.js');
require('../../_chunks/dep-32412d92.js');
require('../../_chunks/dep-71fa6bfc.js');
require('../../_chunks/dep-87589faa.js');
require('../../_chunks/dep-427dabac.js');
require('../../_chunks/dep-72c4cc44.js');
require('../../_chunks/dep-779f6290.js');
require('../../loading/index.js');
require('../../_chunks/dep-95261778.js');
require('../../loading/plugin.js');
require('../../_chunks/dep-237ed01f.js');
require('../../loading/icon/gradient.js');
require('../../_chunks/dep-c3dee00a.js');
require('../../_chunks/dep-55c70201.js');
require('@babel/runtime/helpers/objectWithoutProperties');
require('../../_chunks/dep-4ccaead1.js');
require('../../_chunks/dep-a55e8a08.js');
require('../../_chunks/dep-990979bb.js');
require('../../_chunks/dep-06276759.js');
require('../../_chunks/dep-47c460dd.js');
require('../../_chunks/dep-4fa46641.js');
require('../../_chunks/dep-422dd97f.js');
require('../../_chunks/dep-ee355a9a.js');
require('../../_chunks/dep-23f77e26.js');
require('../../loading/props.js');
require('../../_chunks/dep-5d7e2375.js');
require('../../_chunks/dep-94a7dc2d.js');
require('../../_chunks/dep-92e23f17.js');
require('../../_chunks/dep-0ff616fe.js');
require('../../_chunks/dep-5f52cd42.js');
require('../../_chunks/dep-dc4bbc14.js');
require('../../_chunks/dep-e27ea667.js');
require('../../_chunks/dep-a8a3d718.js');
require('../../_chunks/dep-54e566d9.js');
require('../../_chunks/dep-8adeee89.js');
require('../../_chunks/dep-4d2ef282.js');
require('../../_chunks/dep-929933ce.js');
require('../../_chunks/dep-6b1f0ef8.js');
require('@babel/runtime/helpers/createClass');
require('@babel/runtime/helpers/classCallCheck');
require('../../_chunks/dep-9cc695aa.js');
require('../../_chunks/dep-48de95ee.js');
require('../../_chunks/dep-8b33876c.js');
require('../../_chunks/dep-912c9727.js');
require('../../_chunks/dep-0b8a4740.js');
require('../../_chunks/dep-cd8cfdc0.js');
require('../../_chunks/dep-ac11336c.js');
require('../../_chunks/dep-9ce6873a.js');
require('../../_chunks/dep-d62a674d.js');
require('../../button/props.js');
require('../../_chunks/dep-874d2900.js');
require('../../_chunks/dep-0b6215b5.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var _defineProperty__default = /*#__PURE__*/_interopDefaultLegacy(_defineProperty);
var dayjs__default = /*#__PURE__*/_interopDefaultLegacy(dayjs);

function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty__default["default"](e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _isSlot(s) {
  return typeof s === 'function' || Object.prototype.toString.call(s) === '[object Object]' && !Vue.isVNode(s);
}
dayjs__default["default"].extend(customParseFormat.customParseFormat);
var _TimePickerPanel = Vue.defineComponent({
  name: "TTimePickerPanel",
  props: _objectSpread(_objectSpread({}, timePicker_panel_props.panelProps()), {}, {
    isFooterDisplay: Boolean,
    handleConfirmClick: Function,
    onChange: Function
  }),
  setup: function setup(props) {
    var _useConfig = configProvider_hooks_useConfig.useConfig("timePicker"),
      globalConfig = _useConfig.globalConfig;
    var COMPONENT_NAME = index.usePrefixClass("time-picker__panel");
    var _toRefs = Vue.toRefs(props),
      steps = _toRefs.steps,
      isFooterDisplay = _toRefs.isFooterDisplay,
      isShowPanel = _toRefs.isShowPanel;
    var triggerScroll = Vue.ref(false);
    var panelRef = Vue.ref();
    var showNowTimeBtn = Vue.computed(function () {
      return !!steps.value.filter(function (step) {
        return Number(step) > 1;
      }).length;
    });
    var defaultValue = Vue.computed(function () {
      var isStepsSet = showNowTimeBtn.value;
      var formattedValue = dayjs__default["default"](props.value, props.format);
      if (props.value && formattedValue.isValid()) {
        return formattedValue.format(props.format);
      }
      if (isStepsSet) {
        return dayjs__default["default"]().hour(0).minute(0).second(0).format(props.format);
      }
      return dayjs__default["default"]().hour(0).minute(0).second(0).format(props.format);
    });
    var panelColUpdate = function panelColUpdate() {
      Vue.nextTick(function () {
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
          log.log.error("TimePicker", "preset: ".concat(props.presets, " \u9884\u8BBE\u503C\u5FC5\u987B\u662F\u6570\u7EC4!"));
        }
      } else {
        var _props$onChange2;
        (_props$onChange2 = props.onChange) === null || _props$onChange2 === void 0 || _props$onChange2.call(props, presetVal);
      }
    };
    var renderFooter = function renderFooter() {
      if (!isUndefined.isUndefined(props.presets)) return Object.keys(props.presets || []).map(function (key) {
        return Vue.createVNode(button_button["default"], {
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
      return !showNowTimeBtn.value ? Vue.createVNode(button_button["default"], {
        "theme": "primary",
        "variant": "text",
        "size": "small",
        "onClick": function onClick() {
          var _props$onChange3;
          return (_props$onChange3 = props.onChange) === null || _props$onChange3 === void 0 ? void 0 : _props$onChange3.call(props, dayjs__default["default"]().format(props.format));
        }
      }, {
        "default": function _default() {
          return [globalConfig.value.now];
        }
      }) : null;
    };
    Vue.onMounted(function () {
      panelColUpdate();
    });
    Vue.watch(function () {
      return isShowPanel.value;
    }, function () {
      panelColUpdate();
    });
    return function () {
      return Vue.createVNode("div", {
        "class": COMPONENT_NAME.value
      }, [Vue.createVNode("div", {
        "class": "".concat(COMPONENT_NAME.value, "-section-body")
      }, [Vue.createVNode(timePicker_panel_singlePanel.SinglePanel, Vue.mergeProps(props, {
        "ref": panelRef,
        "format": props.format || timePicker_panel_props.DEFAULT_FORMAT,
        "steps": props.steps || timePicker_panel_props.DEFAULT_STEPS,
        "value": dayjs__default["default"](props.value, props.format).isValid() ? props.value : defaultValue.value,
        "triggerScroll": triggerScroll.value,
        "onChange": props.onChange,
        "resetTriggerScroll": resetTriggerScroll,
        "isShowPanel": props.isShowPanel
      }), null)]), isFooterDisplay.value ? Vue.createVNode("div", {
        "class": "".concat(COMPONENT_NAME.value, "-section-footer")
      }, [Vue.createVNode(button_button["default"], {
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

exports["default"] = _TimePickerPanel;
//# sourceMappingURL=time-picker-panel.js.map
