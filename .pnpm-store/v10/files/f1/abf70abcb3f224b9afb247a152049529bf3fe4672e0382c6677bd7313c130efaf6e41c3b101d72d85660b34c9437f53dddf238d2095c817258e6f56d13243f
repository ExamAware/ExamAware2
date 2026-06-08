/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import { defineComponent, createVNode, mergeProps } from 'vue';
import _defineProperty from '@babel/runtime/helpers/defineProperty';
import { AddIcon, RemoveIcon, ChevronDownIcon, ChevronUpIcon } from 'tdesign-icons-vue-next';
import { Button } from '../button/index.js';
import { Input } from '../input/index.js';
import props from './props.js';
import 'lodash-es';
import '@babel/runtime/helpers/toConsumableArray';
import '@babel/runtime/helpers/typeof';
import '../_chunks/dep-fe23be6e.js';
import '../config-provider/hooks/useConfig.js';
import { u as useGlobalIcon } from '../_chunks/dep-3a7a2ef1.js';
import '@babel/runtime/helpers/slicedToArray';
import '../_chunks/dep-880d05b9.js';
import { u as useEventForward } from '../_chunks/dep-4d7b9152.js';
import useInputNumber from './hooks/useInputNumber.js';
import '../button/button.js';
import '../loading/index.js';
import '../loading/directive.js';
import '../loading/plugin.js';
import '../_chunks/dep-ee693784.js';
import '../loading/icon/gradient.js';
import '../_chunks/dep-9e6d8a78.js';
import '../_chunks/dep-2ea19dca.js';
import '../_chunks/dep-80a99546.js';
import '@babel/runtime/helpers/objectWithoutProperties';
import '../_chunks/dep-16bcfabc.js';
import '../_chunks/dep-2accc95a.js';
import '../_chunks/dep-fb805f69.js';
import '../_chunks/dep-4f8b6591.js';
import '../loading/props.js';
import '../_chunks/dep-81b01cae.js';
import '../config-provider/utils/context.js';
import '../_chunks/dep-938cd955.js';
import 'dayjs';
import '@babel/runtime/helpers/createClass';
import '@babel/runtime/helpers/classCallCheck';
import '../_chunks/dep-664b8b22.js';
import '../button/props.js';
import '../_chunks/dep-f7dd3c12.js';
import '../_chunks/dep-d2a6e7a4.js';
import '../input/input.js';
import '../input/props.js';
import '../_chunks/dep-47b13687.js';
import '../input/hooks/useInput.js';
import '../form/consts/index.js';
import '../_chunks/dep-51e5a827.js';
import '../input/hooks/useLengthLimit.js';
import '../_chunks/dep-8295e674.js';
import '../input/hooks/useInputEventHandler.js';
import '../input/hooks/useInputWidth.js';
import '../_chunks/dep-80a77612.js';
import '../input/input-group.js';
import '../input/input-group-props.js';
import '../_chunks/dep-1a63d163.js';
import '../_chunks/dep-05f15b4e.js';

function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var _InputNumber = defineComponent({
  name: "TInputNumber",
  props: props,
  setup: function setup(props2, context) {
    var _useGlobalIcon = useGlobalIcon({
        AddIcon: AddIcon,
        RemoveIcon: RemoveIcon,
        ChevronDownIcon: ChevronDownIcon,
        ChevronUpIcon: ChevronUpIcon
      }),
      AddIcon$1 = _useGlobalIcon.AddIcon,
      RemoveIcon$1 = _useGlobalIcon.RemoveIcon,
      ChevronDownIcon$1 = _useGlobalIcon.ChevronDownIcon,
      ChevronUpIcon$1 = _useGlobalIcon.ChevronUpIcon;
    var p = useInputNumber(props2);
    var inputRef = p.inputRef;
    context.expose(_objectSpread({}, p));
    var inputEvents = useEventForward(props2.inputProps, _objectSpread({
      onChange: p.onInnerInputChange
    }, p.listeners));
    return function () {
      var reduceIcon = props2.theme === "column" ? createVNode(ChevronDownIcon$1, {
        "size": props2.size
      }, null) : createVNode(RemoveIcon$1, {
        "size": props2.size
      }, null);
      var addIcon = props2.theme === "column" ? createVNode(ChevronUpIcon$1, {
        "size": props2.size
      }, null) : createVNode(AddIcon$1, {
        "size": props2.size
      }, null);
      var status = p.isError.value ? "error" : props2.status;
      return createVNode("div", {
        "class": p.wrapClasses.value
      }, [props2.theme !== "normal" && createVNode(Button, {
        "class": p.reduceClasses.value,
        "disabled": p.tDisabled.value,
        "onClick": p.handleReduce,
        "variant": "outline",
        "shape": "square",
        "icon": function icon() {
          return reduceIcon;
        }
      }, null), createVNode(Input, mergeProps({
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
      }, inputEvents.value), context.slots), props2.theme !== "normal" && createVNode(Button, {
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

export { _InputNumber as default };
//# sourceMappingURL=input-number.js.map
