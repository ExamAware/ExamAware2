/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import { _ as _defineProperty } from '../_chunks/dep-1dacc319.mjs';
import { isVNode, defineComponent, createVNode, mergeProps, h, Fragment } from 'vue';
import { _ as _toConsumableArray } from '../_chunks/dep-00b4e06a.mjs';
import { u as usePrefixClass, b as useContent } from '../_chunks/dep-7673347f.mjs';
import props from './title-props.mjs';
import Ellipsis from './components/ellipsis.mjs';
import '../_chunks/dep-257428bc.mjs';
import '../_chunks/dep-9f459d8b.mjs';
import 'lodash-es';
import '../_chunks/dep-51a43106.mjs';
import '../_chunks/dep-fe644854.mjs';
import '../config-provider/hooks/useConfig.mjs';
import '../config-provider/utils/context.mjs';
import '../_chunks/dep-a4c09318.mjs';
import '../_chunks/dep-ffb85102.mjs';
import '../_chunks/dep-ad588525.mjs';
import '../_chunks/dep-9003fde5.mjs';
import '../_chunks/dep-22ebd6af.mjs';
import '../_chunks/dep-cdd448ec.mjs';
import '../_chunks/dep-97ecacde.mjs';
import '../_chunks/dep-84fd47b3.mjs';
import '../_chunks/dep-d36c4a3f.mjs';
import './paragraph-props.mjs';
import '../tooltip/index.mjs';
import '../tooltip/tooltip.mjs';
import '../tooltip/props.mjs';
import '../popup/props.mjs';
import '../popup/index.mjs';
import '../popup/popup.mjs';
import '@popperjs/core';
import '../popup/container.mjs';
import './style/css.mjs';
import '../tooltip/utils/index.mjs';

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
//# sourceMappingURL=title.mjs.map
