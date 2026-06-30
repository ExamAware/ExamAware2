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
var button_index = require('../button/index.js');
var input_index = require('../input/index.js');
var inputNumber_props = require('./props.js');
require('@babel/runtime/helpers/toConsumableArray');
require('@babel/runtime/helpers/typeof');
require('../_chunks/dep-953a77eb.js');
require('../config-provider/hooks/useConfig.js');
var index = require('../_chunks/dep-31c76dc6.js');
require('@babel/runtime/helpers/slicedToArray');
require('../_chunks/dep-cc66acf1.js');
var index$1 = require('../_chunks/dep-bf113ca4.js');
var inputNumber_hooks_useInputNumber = require('./hooks/useInputNumber.js');
require('../button/button.js');
require('../loading/index.js');
require('../_chunks/dep-95261778.js');
require('../loading/plugin.js');
require('../_chunks/dep-237ed01f.js');
require('../loading/icon/gradient.js');
require('../_chunks/dep-ecaaae91.js');
require('../_chunks/dep-c3dee00a.js');
require('../_chunks/dep-55c70201.js');
require('@babel/runtime/helpers/objectWithoutProperties');
require('../_chunks/dep-fd5a369e.js');
require('../_chunks/dep-4ccaead1.js');
require('../_chunks/dep-a55e8a08.js');
require('../_chunks/dep-b3b464e8.js');
require('../_chunks/dep-87589faa.js');
require('../_chunks/dep-05f89f0d.js');
require('../_chunks/dep-990979bb.js');
require('../_chunks/dep-06276759.js');
require('../_chunks/dep-48f60c78.js');
require('../_chunks/dep-0813861e.js');
require('../_chunks/dep-47c460dd.js');
require('../_chunks/dep-4fa46641.js');
require('../_chunks/dep-422dd97f.js');
require('../_chunks/dep-71fa6bfc.js');
require('../_chunks/dep-80a478d7.js');
require('../_chunks/dep-427dabac.js');
require('../_chunks/dep-72c4cc44.js');
require('../_chunks/dep-ee355a9a.js');
require('../_chunks/dep-23f77e26.js');
require('../_chunks/dep-8382953f.js');
require('../loading/props.js');
require('../_chunks/dep-5d7e2375.js');
require('../_chunks/dep-94a7dc2d.js');
require('../_chunks/dep-8abdfb41.js');
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
require('../_chunks/dep-8adeee89.js');
require('../_chunks/dep-4d2ef282.js');
require('../_chunks/dep-929933ce.js');
require('../_chunks/dep-6b1f0ef8.js');
require('@babel/runtime/helpers/createClass');
require('@babel/runtime/helpers/classCallCheck');
require('../_chunks/dep-9cc695aa.js');
require('../_chunks/dep-48de95ee.js');
require('../_chunks/dep-8b33876c.js');
require('../_chunks/dep-912c9727.js');
require('../_chunks/dep-0b8a4740.js');
require('../_chunks/dep-cd8cfdc0.js');
require('../_chunks/dep-ac11336c.js');
require('../_chunks/dep-9ce6873a.js');
require('../_chunks/dep-779f6290.js');
require('../_chunks/dep-d62a674d.js');
require('../button/props.js');
require('../_chunks/dep-874d2900.js');
require('../_chunks/dep-d45110a6.js');
require('../_chunks/dep-0b6215b5.js');
require('../input/input.js');
require('../input/props.js');
require('../_chunks/dep-bc848944.js');
require('../input/hooks/useInput.js');
require('../form/consts/index.js');
require('../_chunks/dep-e8ff2c13.js');
require('../input/hooks/useLengthLimit.js');
require('../_chunks/dep-733b2b51.js');
require('../input/hooks/useInputEventHandler.js');
require('../input/hooks/useInputWidth.js');
require('../_chunks/dep-b6058ff9.js');
require('../input/input-group.js');
require('../input/input-group-props.js');
require('../_chunks/dep-2359c164.js');
require('../_chunks/dep-48e7c2a2.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var _defineProperty__default = /*#__PURE__*/_interopDefaultLegacy(_defineProperty);

function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty__default["default"](e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var _InputNumber = Vue.defineComponent({
  name: "TInputNumber",
  props: inputNumber_props["default"],
  setup: function setup(props2, context) {
    var _useGlobalIcon = index.useGlobalIcon({
        AddIcon: tdesignIconsVueNext.AddIcon,
        RemoveIcon: tdesignIconsVueNext.RemoveIcon,
        ChevronDownIcon: tdesignIconsVueNext.ChevronDownIcon,
        ChevronUpIcon: tdesignIconsVueNext.ChevronUpIcon
      }),
      AddIcon = _useGlobalIcon.AddIcon,
      RemoveIcon = _useGlobalIcon.RemoveIcon,
      ChevronDownIcon = _useGlobalIcon.ChevronDownIcon,
      ChevronUpIcon = _useGlobalIcon.ChevronUpIcon;
    var p = inputNumber_hooks_useInputNumber["default"](props2);
    var inputRef = p.inputRef;
    context.expose(_objectSpread({}, p));
    var inputEvents = index$1.useEventForward(props2.inputProps, _objectSpread({
      onChange: p.onInnerInputChange
    }, p.listeners));
    return function () {
      var reduceIcon = props2.theme === "column" ? Vue.createVNode(ChevronDownIcon, {
        "size": props2.size
      }, null) : Vue.createVNode(RemoveIcon, {
        "size": props2.size
      }, null);
      var addIcon = props2.theme === "column" ? Vue.createVNode(ChevronUpIcon, {
        "size": props2.size
      }, null) : Vue.createVNode(AddIcon, {
        "size": props2.size
      }, null);
      var status = p.isError.value ? "error" : props2.status;
      return Vue.createVNode("div", {
        "class": p.wrapClasses.value
      }, [props2.theme !== "normal" && Vue.createVNode(button_index.Button, {
        "class": p.reduceClasses.value,
        "disabled": p.tDisabled.value,
        "onClick": p.handleReduce,
        "variant": "outline",
        "shape": "square",
        "icon": function icon() {
          return reduceIcon;
        }
      }, null), Vue.createVNode(input_index.Input, Vue.mergeProps({
        "ref": inputRef,
        "disabled": p.tDisabled.value,
        "readonly": p.isReadonly.value,
        "autocomplete": "off",
        "placeholder": props2.placeholder,
        "unselectable": p.isReadonly.value ? "on" : "off",
        "autoWidth": props2.autoWidth,
        "align": props2.align || (props2.theme === "row" ? "center" : void 0),
        "status": status,
        "label": props2.label,
        "suffix": props2.suffix,
        "tips": props2.tips,
        "value": p.userInput.value
      }, inputEvents.value), context.slots), props2.theme !== "normal" && Vue.createVNode(button_index.Button, {
        "class": p.addClasses.value,
        "disabled": p.tDisabled.value,
        "onClick": p.handleAdd,
        "variant": "outline",
        "shape": "square",
        "icon": function icon() {
          return addIcon;
        }
      }, null)]);
    };
  }
});

exports["default"] = _InputNumber;
//# sourceMappingURL=input-number.js.map
