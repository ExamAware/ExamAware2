/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import { defineComponent, provide, reactive, computed, createVNode, isVNode } from 'vue';
import _defineProperty from '@babel/runtime/helpers/defineProperty';
import props from './props.js';
import _Radio from './radio.js';
import { omit } from 'lodash-es';
import { RadioButtonInjectionKey } from './consts/index.js';
import '@babel/runtime/helpers/toConsumableArray';
import '@babel/runtime/helpers/typeof';
import '../_chunks/dep-fe23be6e.js';
import { a as useContent } from '../_chunks/dep-2accc95a.js';
import '../config-provider/hooks/useConfig.js';
import '@babel/runtime/helpers/slicedToArray';
import '../_chunks/dep-880d05b9.js';
import '../_chunks/dep-4f8b6591.js';
import '../_chunks/dep-9e6d8a78.js';
import '../_chunks/dep-f7dd3c12.js';
import '../_chunks/dep-47b13687.js';
import '../_chunks/dep-51e5a827.js';
import '../_chunks/dep-80a99546.js';
import '@babel/runtime/helpers/objectWithoutProperties';
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
//# sourceMappingURL=radio-button.js.map
