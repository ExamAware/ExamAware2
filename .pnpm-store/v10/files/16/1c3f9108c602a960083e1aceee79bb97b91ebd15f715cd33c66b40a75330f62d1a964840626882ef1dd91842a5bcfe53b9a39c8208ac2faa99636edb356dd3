/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import _defineProperty from '@babel/runtime/helpers/defineProperty';
import { defineComponent, createVNode, mergeProps, h, Fragment, isVNode } from 'vue';
import _toConsumableArray from '@babel/runtime/helpers/toConsumableArray';
import 'lodash-es';
import '@babel/runtime/helpers/typeof';
import '../_chunks/dep-fe23be6e.js';
import { a as useContent } from '../_chunks/dep-2accc95a.js';
import { u as usePrefixClass } from '../_chunks/dep-9e6d8a78.js';
import '@babel/runtime/helpers/slicedToArray';
import '../_chunks/dep-880d05b9.js';
import props from './title-props.js';
import Ellipsis from './components/ellipsis.js';
import '../_chunks/dep-81b01cae.js';
import '../_chunks/dep-16bcfabc.js';
import '../_chunks/dep-fb805f69.js';
import '../config-provider/hooks/useConfig.js';
import '../config-provider/utils/context.js';
import '../_chunks/dep-938cd955.js';
import 'dayjs';
import '@babel/runtime/helpers/createClass';
import '@babel/runtime/helpers/classCallCheck';
import './paragraph-props.js';
import '../tooltip/index.js';
import '../tooltip/tooltip.js';
import '../tooltip/props.js';
import '../popup/props.js';
import '../popup/index.js';
import '../popup/popup.js';
import '@popperjs/core';
import '../_chunks/dep-4f8b6591.js';
import '../_chunks/dep-2ea19dca.js';
import '../_chunks/dep-51e5a827.js';
import '../popup/container.js';
import '../_chunks/dep-80a77612.js';
import '../_chunks/dep-664b8b22.js';
import 'tdesign-vue-next/esm/common/style/web/components/popup/_index.less';
import '../tooltip/utils/index.js';
import 'tdesign-vue-next/esm/common/style/web/components/tooltip/_index.less';

function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _isSlot(s) {
  return typeof s === 'function' || Object.prototype.toString.call(s) === '[object Object]' && !isVNode(s);
}
var _Title = defineComponent({
  name: "TTypographyTitle",
  props: props,
  setup: function setup(props2, _ref) {
    var attrs = _ref.attrs;
    var COMPONENT_NAME = usePrefixClass("typography");
    var renderContent = useContent();
    return function () {
      var _slot;
      var Tag = props2.level;
      var content = renderContent("default", "content");
      return props2.ellipsis ? createVNode(Ellipsis, mergeProps(props2, {
        "class": COMPONENT_NAME.value
      }), _isSlot(_slot = h.apply(void 0, [Tag].concat(_toConsumableArray(content)))) ? _slot : {
        "default": function _default() {
          return [_slot];
        }
      }) : createVNode(Fragment, null, [h.apply(void 0, [Tag, _objectSpread(_objectSpread({}, attrs), {}, {
        "class": [COMPONENT_NAME.value, attrs["class"]]
      })].concat(_toConsumableArray(content)))]);
    };
  }
});

export { _Title as default };
//# sourceMappingURL=title.js.map
