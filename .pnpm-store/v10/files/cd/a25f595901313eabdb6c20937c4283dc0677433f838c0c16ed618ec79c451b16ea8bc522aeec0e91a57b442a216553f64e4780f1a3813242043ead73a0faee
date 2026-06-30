/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import { defineComponent, toRefs, ref, computed, watch, nextTick, onMounted, onUnmounted, provide, reactive, createVNode, h } from 'vue';
import _asyncToGenerator from '@babel/runtime/helpers/asyncToGenerator';
import _defineProperty from '@babel/runtime/helpers/defineProperty';
import _slicedToArray from '@babel/runtime/helpers/slicedToArray';
import _regeneratorRuntime from '@babel/runtime/regenerator';
import { throttle, isEqual, isNil, isNumber, isString, isFunction } from 'lodash-es';
import props from './radio-group-props.js';
import _Radio from './radio.js';
import _RadioButton from './radio-button.js';
import { RadioGroupInjectionKey } from './consts/index.js';
import '@babel/runtime/helpers/toConsumableArray';
import '@babel/runtime/helpers/typeof';
import '../_chunks/dep-fe23be6e.js';
import { b as useTNodeDefault } from '../_chunks/dep-2accc95a.js';
import { u as useCommonClassName } from '../_chunks/dep-4f8b6591.js';
import { u as usePrefixClass } from '../_chunks/dep-9e6d8a78.js';
import '../_chunks/dep-880d05b9.js';
import { u as useResizeObserver } from '../_chunks/dep-80a77612.js';
import { u as useVModel } from '../_chunks/dep-51e5a827.js';
import { useKeyboard } from './hooks/useKeyboard.js';
import { useMutationObserver } from '../watermark/hooks/index.js';
import '../_chunks/dep-f7dd3c12.js';
import '../_chunks/dep-47b13687.js';
import './props.js';
import '../_chunks/dep-80a99546.js';
import '@babel/runtime/helpers/objectWithoutProperties';
import '../_chunks/dep-81b01cae.js';
import '../_chunks/dep-16bcfabc.js';
import '../_chunks/dep-fb805f69.js';
import '../config-provider/hooks/useConfig.js';
import '../config-provider/utils/context.js';
import '../_chunks/dep-938cd955.js';
import 'dayjs';
import '@babel/runtime/helpers/createClass';
import '@babel/runtime/helpers/classCallCheck';
import '../_chunks/dep-30c631d1.js';

function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var _Group = defineComponent({
  name: "TRadioGroup",
  props: props,
  setup: function setup(props2) {
    var _toRefs = toRefs(props2),
      value = _toRefs.value,
      modelValue = _toRefs.modelValue;
    var _useVModel = useVModel(value, modelValue, props2.defaultValue, props2.onChange),
      _useVModel2 = _slicedToArray(_useVModel, 2),
      innerValue = _useVModel2[0],
      setInnerValue = _useVModel2[1];
    var radioGroupRef = ref();
    var radioBtnName = usePrefixClass("radio-button");
    var _useCommonClassName = useCommonClassName(),
      STATUS = _useCommonClassName.STATUS,
      SIZE = _useCommonClassName.SIZE;
    var updateInnerValue = function updateInnerValue(value2, context) {
      if (isEqual(value2, innerValue.value)) return;
      setInnerValue(value2, context);
    };
    useKeyboard(radioGroupRef, updateInnerValue);
    var checkedClassName = computed(function () {
      return ".".concat(radioBtnName.value, ".").concat(STATUS.value.checked);
    });
    var barStyle = ref({
      width: "0px",
      height: "0px",
      left: "0px",
      top: "0px",
      "transition-property": "none"
    });
    var calcDefaultBarStyle = function calcDefaultBarStyle() {
      var div = document.createElement("div");
      div.setAttribute("style", "position: absolute; visibility: hidden;");
      div.appendChild(radioGroupRef.value.cloneNode(true));
      document.body.appendChild(div);
      var defaultCheckedRadio = div.querySelector(checkedClassName.value);
      var offsetWidth = defaultCheckedRadio.offsetWidth,
        offsetHeight = defaultCheckedRadio.offsetHeight,
        offsetLeft = defaultCheckedRadio.offsetLeft,
        offsetTop = defaultCheckedRadio.offsetTop;
      barStyle.value = _objectSpread(_objectSpread({}, barStyle.value), {}, {
        width: "".concat(offsetWidth, "px"),
        height: "".concat(offsetHeight, "px"),
        left: "".concat(offsetLeft, "px"),
        top: "".concat(offsetTop, "px")
      });
      document.body.removeChild(div);
    };
    var calcBarStyle = function calcBarStyle() {
      var disableAnimation = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      if (props2.variant === "outline") return;
      var checkedRadio = radioGroupRef.value.querySelector(checkedClassName.value);
      var transitionProperty = disableAnimation ? "none" : "all";
      if (!checkedRadio) {
        barStyle.value = {
          "transition-property": transitionProperty,
          width: "0px",
          height: "9px",
          left: "0px",
          top: "0px"
        };
        return;
      }
      var offsetWidth = checkedRadio.offsetWidth,
        offsetHeight = checkedRadio.offsetHeight,
        offsetLeft = checkedRadio.offsetLeft,
        offsetTop = checkedRadio.offsetTop;
      if (!offsetWidth) {
        calcDefaultBarStyle();
      } else {
        barStyle.value = {
          "transition-property": transitionProperty,
          width: "".concat(offsetWidth, "px"),
          height: "".concat(offsetHeight, "px"),
          left: "".concat(offsetLeft, "px"),
          top: "".concat(offsetTop, "px")
        };
      }
    };
    var observerReturn;
    watch(innerValue, /*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime.mark(function _callee() {
      return _regeneratorRuntime.wrap(function (_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.next = 1;
            return nextTick();
          case 1:
            calcBarStyle();
          case 2:
          case "end":
            return _context.stop();
        }
      }, _callee);
    })));
    onMounted(function () {
      calcBarStyle(true);
      useResizeObserver(radioGroupRef, throttle(/*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime.mark(function _callee2() {
        return _regeneratorRuntime.wrap(function (_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 1;
              return nextTick();
            case 1:
              calcBarStyle();
            case 2:
            case "end":
              return _context2.stop();
          }
        }, _callee2);
      })), 300));
      var checkedRadioLabel = radioGroupRef.value.querySelector("".concat(checkedClassName.value, " .").concat(radioBtnName.value, "__label"));
      if (checkedRadioLabel) {
        observerReturn = useMutationObserver(checkedRadioLabel, function (mutations) {
          mutations.forEach(function (mutation) {
            if (mutation.type === "characterData") {
              calcBarStyle();
            }
          });
        }, {
          attributes: true,
          childList: true,
          characterData: true,
          subtree: true
        });
      }
    });
    onUnmounted(function () {
      var _observerReturn;
      (_observerReturn = observerReturn) === null || _observerReturn === void 0 || _observerReturn.stop();
    });
    var _toRefs2 = toRefs(props2),
      name = _toRefs2.name,
      disabled = _toRefs2.disabled,
      readonly = _toRefs2.readonly;
    provide(RadioGroupInjectionKey, reactive({
      name: name,
      disabled: disabled,
      readonly: readonly,
      value: innerValue,
      allowUncheck: props2.allowUncheck,
      setValue: updateInnerValue
    }));
    var radioGroupName = usePrefixClass("radio-group");
    var renderSlot = useTNodeDefault();
    var renderBlock = function renderBlock() {
      if (props2.variant.includes("filled") && !isNil(innerValue.value)) return createVNode("div", {
        "style": barStyle.value,
        "class": "".concat(radioGroupName.value, "__bg-block")
      }, null);
    };
    var renderOptions = function renderOptions() {
      var _props2$options;
      return (_props2$options = props2.options) === null || _props2$options === void 0 ? void 0 : _props2$options.map(function (option) {
        var opt = option;
        if (isNumber(option) || isString(option)) {
          opt = {
            value: option,
            label: option.toString()
          };
        }
        var RadioComponent = props2.theme === "button" ? _RadioButton : _Radio;
        return createVNode(RadioComponent, {
          "key": "radio-group-options-".concat(opt.value, "-").concat(Math.random()),
          "name": props2.name,
          "checked": innerValue.value === opt.value,
          "disabled": "disabled" in opt ? opt.disabled : props2.disabled,
          "value": opt.value
        }, {
          "default": function _default() {
            return [isFunction(opt.label) ? opt.label(h) : opt.label];
          }
        });
      });
    };
    var groupClass = computed(function () {
      return ["".concat(radioGroupName.value), SIZE.value[props2.size], _defineProperty(_defineProperty(_defineProperty({}, "".concat(radioGroupName.value, "__outline"), props2.variant === "outline"), "".concat(radioGroupName.value, "--filled"), props2.variant.includes("filled")), "".concat(radioGroupName.value, "--primary-filled"), props2.variant === "primary-filled")];
    });
    return function () {
      return createVNode("div", {
        "ref": radioGroupRef,
        "class": groupClass.value
      }, [renderSlot("default") || renderOptions(), renderBlock()]);
    };
  }
});

export { _Group as default };
//# sourceMappingURL=group.js.map
