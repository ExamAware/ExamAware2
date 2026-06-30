/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import { defineComponent, inject, computed, createVNode, h } from 'vue';
import _defineProperty from '@babel/runtime/helpers/defineProperty';
import { isFunction } from 'lodash-es';
import { CheckIcon, CloseIcon } from 'tdesign-icons-vue-next';
import stepItemProps from './step-item-props.js';
import '@babel/runtime/helpers/toConsumableArray';
import '@babel/runtime/helpers/typeof';
import '../_chunks/dep-fe23be6e.js';
import { u as useTNodeJSX, a as useContent } from '../_chunks/dep-2accc95a.js';
import { u as usePrefixClass } from '../_chunks/dep-9e6d8a78.js';
import { u as useGlobalIcon } from '../_chunks/dep-3a7a2ef1.js';
import '@babel/runtime/helpers/slicedToArray';
import '../_chunks/dep-880d05b9.js';
import { useConfig } from '../config-provider/hooks/useConfig.js';
import '../_chunks/dep-81b01cae.js';
import '../_chunks/dep-16bcfabc.js';
import '../_chunks/dep-fb805f69.js';
import '../config-provider/utils/context.js';
import '../_chunks/dep-938cd955.js';
import 'dayjs';
import '@babel/runtime/helpers/createClass';
import '@babel/runtime/helpers/classCallCheck';

function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var _StepItem = defineComponent({
  name: "TStepItem",
  props: _objectSpread(_objectSpread({}, stepItemProps), {}, {
    index: Number
  }),
  setup: function setup(props2) {
    var stepsState = inject("StepsState", void 0);
    var stepsProps = inject("StepsProps", void 0);
    var _useConfig = useConfig("steps"),
      globalConfig = _useConfig.globalConfig;
    var _useGlobalIcon = useGlobalIcon({
        CheckIcon: CheckIcon,
        CloseIcon: CloseIcon
      }),
      CheckIcon$1 = _useGlobalIcon.CheckIcon,
      CloseIcon$1 = _useGlobalIcon.CloseIcon;
    var canClick = computed(function () {
      return props2.status !== "process" && !(stepsProps !== null && stepsProps !== void 0 && stepsProps.readonly);
    });
    var onStepClick = function onStepClick(e) {
      if (!canClick.value) return;
      var val = props2.value === void 0 ? props2.index : props2.value;
      stepsState.setCurrent(val, stepsState.current, {
        e: e
      });
    };
    var COMPONENT_NAME = usePrefixClass("steps-item");
    var statusClass = computed(function () {
      return _defineProperty({}, "".concat(COMPONENT_NAME.value, "--").concat(props2.status), props2.status);
    });
    var baseClass = computed(function () {
      return [COMPONENT_NAME.value, statusClass.value];
    });
    var iconClass = computed(function () {
      return ["".concat(COMPONENT_NAME.value, "__icon"), statusClass.value];
    });
    var renderTNodeJSX = useTNodeJSX();
    var renderContent = useContent();
    var renderIcon = function renderIcon() {
      var defaultIcon;
      if (stepsProps.theme === "default") {
        var icon = "";
        switch (props2.status) {
          case "finish":
            if (isFunction(globalConfig.value.checkIcon)) {
              icon = globalConfig.value.checkIcon(h);
            } else {
              icon = createVNode(CheckIcon$1, null, null);
            }
            break;
          case "error":
            if (isFunction(globalConfig.value.errorIcon)) {
              icon = globalConfig.value.errorIcon(h);
            } else {
              icon = createVNode(CloseIcon$1, null, null);
            }
            break;
          default:
            icon = String(props2.index + 1);
            break;
        }
        defaultIcon = createVNode("span", {
          "class": "".concat(COMPONENT_NAME.value, "__icon--number")
        }, [icon]);
      }
      return renderTNodeJSX("icon", defaultIcon);
    };
    return function () {
      return createVNode("div", {
        "class": baseClass.value
      }, [createVNode("div", {
        "class": "".concat(COMPONENT_NAME.value, "__inner ").concat(canClick.value ? "".concat(COMPONENT_NAME.value, "--clickable") : ""),
        "onClick": onStepClick
      }, [createVNode("div", {
        "class": iconClass.value
      }, [renderIcon()]), createVNode("div", {
        "class": "".concat(COMPONENT_NAME.value, "__content")
      }, [createVNode("div", {
        "class": "".concat(COMPONENT_NAME.value, "__title")
      }, [renderTNodeJSX("title")]), createVNode("div", {
        "class": "".concat(COMPONENT_NAME.value, "__description")
      }, [renderContent("default", "content")]), createVNode("div", {
        "class": "".concat(COMPONENT_NAME.value, "__extra")
      }, [renderTNodeJSX("extra")])])])]);
    };
  }
});

export { _StepItem as default };
//# sourceMappingURL=step-item.js.map
