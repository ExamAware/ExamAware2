/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import { defineComponent, inject, computed, h, createVNode } from 'vue';
import { _ as _defineProperty } from '../_chunks/dep-1dacc319.mjs';
import { isFunction } from 'lodash-es';
import { CheckIcon, CloseIcon } from 'tdesign-icons-vue-next';
import stepItemProps from './step-item-props.mjs';
import { i as useGlobalIcon, u as usePrefixClass, a as useTNodeJSX, b as useContent } from '../_chunks/dep-7673347f.mjs';
import { useConfig } from '../config-provider/hooks/useConfig.mjs';
import '../_chunks/dep-257428bc.mjs';
import '../_chunks/dep-00b4e06a.mjs';
import '../_chunks/dep-9f459d8b.mjs';
import '../_chunks/dep-51a43106.mjs';
import '../_chunks/dep-fe644854.mjs';
import '../_chunks/dep-22ebd6af.mjs';
import '../_chunks/dep-9003fde5.mjs';
import '../_chunks/dep-cdd448ec.mjs';
import '../_chunks/dep-97ecacde.mjs';
import '../config-provider/utils/context.mjs';
import '../_chunks/dep-a4c09318.mjs';
import '../_chunks/dep-ffb85102.mjs';
import '../_chunks/dep-ad588525.mjs';
import '../_chunks/dep-84fd47b3.mjs';
import '../_chunks/dep-d36c4a3f.mjs';

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
//# sourceMappingURL=step-item.mjs.map
