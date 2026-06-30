/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var Vue = require('vue');
var _defineProperty = require('@babel/runtime/helpers/defineProperty');
var tdesignIconsVueNext = require('tdesign-icons-vue-next');
var steps_stepItemProps = require('./step-item-props.js');
require('@babel/runtime/helpers/toConsumableArray');
require('@babel/runtime/helpers/typeof');
require('../_chunks/dep-953a77eb.js');
var index$2 = require('../_chunks/dep-47c460dd.js');
var index$1 = require('../_chunks/dep-ecaaae91.js');
var index = require('../_chunks/dep-31c76dc6.js');
require('@babel/runtime/helpers/slicedToArray');
require('../_chunks/dep-cc66acf1.js');
var isFunction = require('../_chunks/dep-48f60c78.js');
var configProvider_hooks_useConfig = require('../config-provider/hooks/useConfig.js');
require('../_chunks/dep-8abdfb41.js');
require('../_chunks/dep-06276759.js');
require('../_chunks/dep-a55e8a08.js');
require('../_chunks/dep-b3b464e8.js');
require('../_chunks/dep-87589faa.js');
require('../_chunks/dep-05f89f0d.js');
require('../_chunks/dep-4fa46641.js');
require('../_chunks/dep-0813861e.js');
require('../_chunks/dep-422dd97f.js');
require('../_chunks/dep-71fa6bfc.js');
require('../_chunks/dep-80a478d7.js');
require('../_chunks/dep-427dabac.js');
require('../_chunks/dep-72c4cc44.js');
require('../_chunks/dep-ee355a9a.js');
require('../_chunks/dep-23f77e26.js');
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
require('@babel/runtime/helpers/createClass');
require('@babel/runtime/helpers/classCallCheck');
require('../_chunks/dep-8adeee89.js');
require('../_chunks/dep-4d2ef282.js');
require('../_chunks/dep-929933ce.js');
require('../_chunks/dep-6b1f0ef8.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var _defineProperty__default = /*#__PURE__*/_interopDefaultLegacy(_defineProperty);

function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty__default["default"](e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var _StepItem = Vue.defineComponent({
  name: "TStepItem",
  props: _objectSpread(_objectSpread({}, steps_stepItemProps["default"]), {}, {
    index: Number
  }),
  setup: function setup(props2) {
    var stepsState = Vue.inject("StepsState", void 0);
    var stepsProps = Vue.inject("StepsProps", void 0);
    var _useConfig = configProvider_hooks_useConfig.useConfig("steps"),
      globalConfig = _useConfig.globalConfig;
    var _useGlobalIcon = index.useGlobalIcon({
        CheckIcon: tdesignIconsVueNext.CheckIcon,
        CloseIcon: tdesignIconsVueNext.CloseIcon
      }),
      CheckIcon = _useGlobalIcon.CheckIcon,
      CloseIcon = _useGlobalIcon.CloseIcon;
    var canClick = Vue.computed(function () {
      return props2.status !== "process" && !(stepsProps !== null && stepsProps !== void 0 && stepsProps.readonly);
    });
    var onStepClick = function onStepClick(e) {
      if (!canClick.value) return;
      var val = props2.value === void 0 ? props2.index : props2.value;
      stepsState.setCurrent(val, stepsState.current, {
        e: e
      });
    };
    var COMPONENT_NAME = index$1.usePrefixClass("steps-item");
    var statusClass = Vue.computed(function () {
      return _defineProperty__default["default"]({}, "".concat(COMPONENT_NAME.value, "--").concat(props2.status), props2.status);
    });
    var baseClass = Vue.computed(function () {
      return [COMPONENT_NAME.value, statusClass.value];
    });
    var iconClass = Vue.computed(function () {
      return ["".concat(COMPONENT_NAME.value, "__icon"), statusClass.value];
    });
    var renderTNodeJSX = index$2.useTNodeJSX();
    var renderContent = index$2.useContent();
    var renderIcon = function renderIcon() {
      var defaultIcon;
      if (stepsProps.theme === "default") {
        var icon = "";
        switch (props2.status) {
          case "finish":
            if (isFunction.isFunction(globalConfig.value.checkIcon)) {
              icon = globalConfig.value.checkIcon(Vue.h);
            } else {
              icon = Vue.createVNode(CheckIcon, null, null);
            }
            break;
          case "error":
            if (isFunction.isFunction(globalConfig.value.errorIcon)) {
              icon = globalConfig.value.errorIcon(Vue.h);
            } else {
              icon = Vue.createVNode(CloseIcon, null, null);
            }
            break;
          default:
            icon = String(props2.index + 1);
            break;
        }
        defaultIcon = Vue.createVNode("span", {
          "class": "".concat(COMPONENT_NAME.value, "__icon--number")
        }, [icon]);
      }
      return renderTNodeJSX("icon", defaultIcon);
    };
    return function () {
      return Vue.createVNode("div", {
        "class": baseClass.value
      }, [Vue.createVNode("div", {
        "class": "".concat(COMPONENT_NAME.value, "__inner ").concat(canClick.value ? "".concat(COMPONENT_NAME.value, "--clickable") : ""),
        "onClick": onStepClick
      }, [Vue.createVNode("div", {
        "class": iconClass.value
      }, [renderIcon()]), Vue.createVNode("div", {
        "class": "".concat(COMPONENT_NAME.value, "__content")
      }, [Vue.createVNode("div", {
        "class": "".concat(COMPONENT_NAME.value, "__title")
      }, [renderTNodeJSX("title")]), Vue.createVNode("div", {
        "class": "".concat(COMPONENT_NAME.value, "__description")
      }, [renderContent("default", "content")]), Vue.createVNode("div", {
        "class": "".concat(COMPONENT_NAME.value, "__extra")
      }, [renderTNodeJSX("extra")])])])]);
    };
  }
});

exports["default"] = _StepItem;
//# sourceMappingURL=step-item.js.map
