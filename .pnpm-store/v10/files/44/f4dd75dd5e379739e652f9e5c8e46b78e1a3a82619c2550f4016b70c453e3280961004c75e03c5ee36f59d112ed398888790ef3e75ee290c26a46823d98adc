/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var Vue = require('vue');
var _asyncToGenerator = require('@babel/runtime/helpers/asyncToGenerator');
var _defineProperty = require('@babel/runtime/helpers/defineProperty');
var _slicedToArray = require('@babel/runtime/helpers/slicedToArray');
var _regeneratorRuntime = require('@babel/runtime/regenerator');
var radio_radioGroupProps = require('./radio-group-props.js');
var radio_radio = require('./radio.js');
var radio_radioButton = require('./radio-button.js');
var radio_consts_index = require('./consts/index.js');
require('@babel/runtime/helpers/toConsumableArray');
require('@babel/runtime/helpers/typeof');
require('../_chunks/dep-953a77eb.js');
var index$4 = require('../_chunks/dep-47c460dd.js');
var index$2 = require('../_chunks/dep-8382953f.js');
var index$1 = require('../_chunks/dep-ecaaae91.js');
require('../_chunks/dep-cc66acf1.js');
var index$3 = require('../_chunks/dep-b6058ff9.js');
var index = require('../_chunks/dep-e8ff2c13.js');
var radio_hooks_useKeyboard = require('./hooks/useKeyboard.js');
var watermark_hooks_index = require('../watermark/hooks/index.js');
var throttle = require('../_chunks/dep-9071ce5e.js');
var isEqual = require('../_chunks/dep-9cc695aa.js');
var isNil = require('../_chunks/dep-6f2064e4.js');
var isNumber = require('../_chunks/dep-990979bb.js');
var isString = require('../_chunks/dep-a55e8a08.js');
var isFunction = require('../_chunks/dep-48f60c78.js');
require('../_chunks/dep-874d2900.js');
require('../_chunks/dep-d45110a6.js');
require('../_chunks/dep-b3b464e8.js');
require('../_chunks/dep-05f89f0d.js');
require('../_chunks/dep-bc848944.js');
require('./props.js');
require('../_chunks/dep-55c70201.js');
require('@babel/runtime/helpers/objectWithoutProperties');
require('../_chunks/dep-fd5a369e.js');
require('../_chunks/dep-4ccaead1.js');
require('../_chunks/dep-87589faa.js');
require('../_chunks/dep-ace0b57c.js');
require('../_chunks/dep-71fa6bfc.js');
require('../_chunks/dep-80a478d7.js');
require('../_chunks/dep-8adeee89.js');
require('../_chunks/dep-92e23f17.js');
require('../_chunks/dep-0ff616fe.js');
require('../_chunks/dep-5f52cd42.js');
require('../_chunks/dep-0813861e.js');
require('../_chunks/dep-f57bcb19.js');
require('../_chunks/dep-dc4bbc14.js');
require('../_chunks/dep-e27ea667.js');
require('../_chunks/dep-165ca38a.js');
require('../_chunks/dep-32412d92.js');
require('../_chunks/dep-a8a3d718.js');
require('../_chunks/dep-4d2ef282.js');
require('../_chunks/dep-929933ce.js');
require('../_chunks/dep-6b1f0ef8.js');
require('../_chunks/dep-ac11336c.js');
require('../_chunks/dep-11b67e11.js');
require('../_chunks/dep-72c4cc44.js');
require('../_chunks/dep-5d7e2375.js');
require('../_chunks/dep-94a7dc2d.js');
require('../_chunks/dep-8abdfb41.js');
require('dayjs');
require('../_chunks/dep-54e566d9.js');
require('../_chunks/dep-591a72de.js');
require('../_chunks/dep-dcb859c6.js');
require('../_chunks/dep-06276759.js');
require('../_chunks/dep-4fa46641.js');
require('../_chunks/dep-422dd97f.js');
require('../_chunks/dep-427dabac.js');
require('../_chunks/dep-ee355a9a.js');
require('../_chunks/dep-23f77e26.js');
require('../config-provider/hooks/useConfig.js');
require('@babel/runtime/helpers/createClass');
require('@babel/runtime/helpers/classCallCheck');
require('../_chunks/dep-6280a7f6.js');
require('../_chunks/dep-441a3b7b.js');
require('../_chunks/dep-e86abdd2.js');
require('../_chunks/dep-48de95ee.js');
require('../_chunks/dep-8b33876c.js');
require('../_chunks/dep-912c9727.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var _asyncToGenerator__default = /*#__PURE__*/_interopDefaultLegacy(_asyncToGenerator);
var _defineProperty__default = /*#__PURE__*/_interopDefaultLegacy(_defineProperty);
var _slicedToArray__default = /*#__PURE__*/_interopDefaultLegacy(_slicedToArray);
var _regeneratorRuntime__default = /*#__PURE__*/_interopDefaultLegacy(_regeneratorRuntime);

function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty__default["default"](e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var _Group = Vue.defineComponent({
  name: "TRadioGroup",
  props: radio_radioGroupProps["default"],
  setup: function setup(props2) {
    var _toRefs = Vue.toRefs(props2),
      value = _toRefs.value,
      modelValue = _toRefs.modelValue;
    var _useVModel = index.useVModel(value, modelValue, props2.defaultValue, props2.onChange),
      _useVModel2 = _slicedToArray__default["default"](_useVModel, 2),
      innerValue = _useVModel2[0],
      setInnerValue = _useVModel2[1];
    var radioGroupRef = Vue.ref();
    var radioBtnName = index$1.usePrefixClass("radio-button");
    var _useCommonClassName = index$2.useCommonClassName(),
      STATUS = _useCommonClassName.STATUS,
      SIZE = _useCommonClassName.SIZE;
    var updateInnerValue = function updateInnerValue(value2, context) {
      if (isEqual.isEqual(value2, innerValue.value)) return;
      setInnerValue(value2, context);
    };
    radio_hooks_useKeyboard.useKeyboard(radioGroupRef, updateInnerValue);
    var checkedClassName = Vue.computed(function () {
      return ".".concat(radioBtnName.value, ".").concat(STATUS.value.checked);
    });
    var barStyle = Vue.ref({
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
    Vue.watch(innerValue, /*#__PURE__*/_asyncToGenerator__default["default"](/*#__PURE__*/_regeneratorRuntime__default["default"].mark(function _callee() {
      return _regeneratorRuntime__default["default"].wrap(function (_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.next = 1;
            return Vue.nextTick();
          case 1:
            calcBarStyle();
          case 2:
          case "end":
            return _context.stop();
        }
      }, _callee);
    })));
    Vue.onMounted(function () {
      calcBarStyle(true);
      index$3.useResizeObserver(radioGroupRef, throttle.throttle(/*#__PURE__*/_asyncToGenerator__default["default"](/*#__PURE__*/_regeneratorRuntime__default["default"].mark(function _callee2() {
        return _regeneratorRuntime__default["default"].wrap(function (_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 1;
              return Vue.nextTick();
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
        observerReturn = watermark_hooks_index.useMutationObserver(checkedRadioLabel, function (mutations) {
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
    Vue.onUnmounted(function () {
      var _observerReturn;
      (_observerReturn = observerReturn) === null || _observerReturn === void 0 || _observerReturn.stop();
    });
    var _toRefs2 = Vue.toRefs(props2),
      name = _toRefs2.name,
      disabled = _toRefs2.disabled,
      readonly = _toRefs2.readonly;
    Vue.provide(radio_consts_index.RadioGroupInjectionKey, Vue.reactive({
      name: name,
      disabled: disabled,
      readonly: readonly,
      value: innerValue,
      allowUncheck: props2.allowUncheck,
      setValue: updateInnerValue
    }));
    var radioGroupName = index$1.usePrefixClass("radio-group");
    var renderSlot = index$4.useTNodeDefault();
    var renderBlock = function renderBlock() {
      if (props2.variant.includes("filled") && !isNil.isNil(innerValue.value)) return Vue.createVNode("div", {
        "style": barStyle.value,
        "class": "".concat(radioGroupName.value, "__bg-block")
      }, null);
    };
    var renderOptions = function renderOptions() {
      var _props2$options;
      return (_props2$options = props2.options) === null || _props2$options === void 0 ? void 0 : _props2$options.map(function (option) {
        var opt = option;
        if (isNumber.isNumber(option) || isString.isString(option)) {
          opt = {
            value: option,
            label: option.toString()
          };
        }
        var RadioComponent = props2.theme === "button" ? radio_radioButton["default"] : radio_radio["default"];
        return Vue.createVNode(RadioComponent, {
          "key": "radio-group-options-".concat(opt.value, "-").concat(Math.random()),
          "name": props2.name,
          "checked": innerValue.value === opt.value,
          "disabled": "disabled" in opt ? opt.disabled : props2.disabled,
          "value": opt.value
        }, {
          "default": function _default() {
            return [isFunction.isFunction(opt.label) ? opt.label(Vue.h) : opt.label];
          }
        });
      });
    };
    var groupClass = Vue.computed(function () {
      return ["".concat(radioGroupName.value), SIZE.value[props2.size], _defineProperty__default["default"](_defineProperty__default["default"](_defineProperty__default["default"]({}, "".concat(radioGroupName.value, "__outline"), props2.variant === "outline"), "".concat(radioGroupName.value, "--filled"), props2.variant.includes("filled")), "".concat(radioGroupName.value, "--primary-filled"), props2.variant === "primary-filled")];
    });
    return function () {
      return Vue.createVNode("div", {
        "ref": radioGroupRef,
        "class": groupClass.value
      }, [renderSlot("default") || renderOptions(), renderBlock()]);
    };
  }
});

exports["default"] = _Group;
//# sourceMappingURL=group.js.map
