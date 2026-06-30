/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import { isVNode, defineComponent, provide, reactive, computed, createVNode } from 'vue';
import { _ as _defineProperty } from '../_chunks/dep-1dacc319.mjs';
import props from './props.mjs';
import _Radio from './radio.mjs';
import { omit } from 'lodash-es';
import { RadioButtonInjectionKey } from './consts/index.mjs';
import { b as useContent } from '../_chunks/dep-7673347f.mjs';
import '../_chunks/dep-257428bc.mjs';
import '../_chunks/dep-00b4e06a.mjs';
import '../_chunks/dep-9f459d8b.mjs';
import '../_chunks/dep-9003fde5.mjs';
import '../_chunks/dep-0cde7579.mjs';
import '../_chunks/dep-0dcc778a.mjs';
import '../_chunks/dep-51a43106.mjs';
import '../_chunks/dep-fe644854.mjs';
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

function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _isSlot(s) {
  return typeof s === 'function' || Object.prototype.toString.call(s) === '[object Object]' && !isVNode(s);
}
var _RadioButton = defineComponent({
  name: "TRadioButton",
  inheritAttrs: false,
  props: props,
  setup: function setup(props2, _ref) {
    var attrs = _ref.attrs;
    provide(RadioButtonInjectionKey, reactive({}));
    var radioProps = computed(function () {
      var res = _objectSpread(_objectSpread({}, props2), omit(attrs, Object.keys(attrs).filter(function (key) {
        return key.startsWith("on");
      })));
      return res;
    });
    var renderContent = useContent();
    return function () {
      var _slot;
      return createVNode(_Radio, radioProps.value, _isSlot(_slot = renderContent("default", "label")) ? _slot : {
        "default": function _default() {
          return [_slot];
        }
      });
    };
  }
});

export { _RadioButton as default };
//# sourceMappingURL=radio-button.mjs.map
