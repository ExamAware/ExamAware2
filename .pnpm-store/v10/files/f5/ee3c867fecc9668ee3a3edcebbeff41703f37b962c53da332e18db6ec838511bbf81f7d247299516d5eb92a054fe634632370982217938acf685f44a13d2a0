/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import { defineComponent, createVNode, mergeProps } from 'vue';
import { _ as _defineProperty } from '../_chunks/dep-1dacc319.mjs';
import { AddIcon, RemoveIcon, ChevronDownIcon, ChevronUpIcon } from 'tdesign-icons-vue-next';
import { Button } from '../button/index.mjs';
import { Input } from '../input/index.mjs';
import props from './props.mjs';
import { i as useGlobalIcon, o as useEventForward } from '../_chunks/dep-7673347f.mjs';
import useInputNumber from './hooks/useInputNumber.mjs';
import '../_chunks/dep-257428bc.mjs';
import '../button/button.mjs';
import '../_chunks/dep-00b4e06a.mjs';
import '../_chunks/dep-9f459d8b.mjs';
import '../loading/index.mjs';
import '../loading/directive.mjs';
import 'lodash-es';
import '../loading/plugin.mjs';
import '../loading/loading.mjs';
import '../_chunks/dep-9003fde5.mjs';
import '../loading/icon/gradient.mjs';
import '../_chunks/dep-0cde7579.mjs';
import '../_chunks/dep-0dcc778a.mjs';
import '../_chunks/dep-51a43106.mjs';
import '../_chunks/dep-fe644854.mjs';
import '../loading/props.mjs';
import '../config-provider/hooks/useConfig.mjs';
import '../config-provider/utils/context.mjs';
import '../_chunks/dep-a4c09318.mjs';
import '../_chunks/dep-ffb85102.mjs';
import '../_chunks/dep-ad588525.mjs';
import '../_chunks/dep-22ebd6af.mjs';
import '../_chunks/dep-cdd448ec.mjs';
import '../_chunks/dep-97ecacde.mjs';
import '../_chunks/dep-84fd47b3.mjs';
import '../_chunks/dep-d36c4a3f.mjs';
import './style/css.mjs';
import '../button/props.mjs';
import '../input/input.mjs';
import '../input/props.mjs';
import '../input/hooks/index.mjs';
import '../input/hooks/useInput.mjs';
import '../form/consts/index.mjs';
import '../input/hooks/useLengthLimit.mjs';
import '../_chunks/dep-6d2705e1.mjs';
import '../input/hooks/useInputEventHandler.mjs';
import '../input/hooks/useInputWidth.mjs';
import '../input/input-group.mjs';
import '../input/input-group-props.mjs';
import '../_chunks/dep-29754cb4.mjs';
import '../_chunks/dep-db81c302.mjs';

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
//# sourceMappingURL=input-number.mjs.map
