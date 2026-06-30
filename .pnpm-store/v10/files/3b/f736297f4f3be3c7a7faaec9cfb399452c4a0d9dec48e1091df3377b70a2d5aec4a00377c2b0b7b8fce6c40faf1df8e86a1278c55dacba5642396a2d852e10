/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import { defineComponent, computed, createVNode, Fragment } from 'vue';
import { _ as _slicedToArray } from '../_chunks/dep-9003fde5.mjs';
import { _ as _defineProperty } from '../_chunks/dep-1dacc319.mjs';
import props from './props.mjs';
import { u as usePrefixClass, a as useTNodeJSX, f as useChildSlots, g as useFlatChildrenSlots } from '../_chunks/dep-7673347f.mjs';
import { isArray, isNumber, isString } from 'lodash-es';
import { g as getFlexGapPolyFill } from '../_chunks/dep-0cde7579.mjs';
import '../_chunks/dep-9f459d8b.mjs';
import '../_chunks/dep-257428bc.mjs';
import '../_chunks/dep-00b4e06a.mjs';
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
import '../_chunks/dep-0dcc778a.mjs';

function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var sizeMap = {
  small: "8px",
  medium: "16px",
  large: "24px"
};
var defaultNeedPolyfill = getFlexGapPolyFill();
var _Space = defineComponent({
  name: "TSpace",
  props: _objectSpread(_objectSpread({}, props), {}, {
    forceFlexGapPolyfill: Boolean
  }),
  setup: function setup(props2) {
    var COMPONENT_NAME = usePrefixClass("space");
    var renderTNodeJSX = useTNodeJSX();
    var getChildSlots = useChildSlots();
    var getFlatChildren = useFlatChildrenSlots();
    var needPolyfill = computed(function () {
      return props2.forceFlexGapPolyfill || defaultNeedPolyfill;
    });
    var renderStyle = computed(function () {
      var renderGap = "";
      if (isArray(props2.size)) {
        renderGap = props2.size.map(function (s) {
          if (isNumber(s)) return "".concat(s, "px");
          if (isString(s) && ["small", "medium", "large"].includes(s)) return sizeMap[s];
          return s;
        }).join(" ");
      } else if (isString(props2.size)) {
        renderGap = ["small", "medium", "large"].includes(props2.size) ? sizeMap[props2.size] : props2.size;
      } else if (isNumber(props2.size)) {
        renderGap = "".concat(props2.size, "px");
      }
      var style = {};
      if (needPolyfill.value) {
        var _renderGap$split = renderGap.split(" "),
          _renderGap$split2 = _slicedToArray(_renderGap$split, 2),
          columnGap = _renderGap$split2[0],
          rowGap = _renderGap$split2[1];
        style["--td-space-column-gap"] = columnGap;
        style["--td-space-row-gap"] = rowGap || columnGap;
      } else {
        style.gap = renderGap;
      }
      return style;
    });
    function renderChildren() {
      var children = getFlatChildren(getChildSlots());
      var separatorContent = renderTNodeJSX("separator");
      return children.map(function (child, index) {
        var showSeparator = index + 1 !== children.length && separatorContent;
        return createVNode(Fragment, null, [createVNode("div", {
          "class": "".concat(COMPONENT_NAME.value, "-item")
        }, [child]), showSeparator && createVNode("div", {
          "class": "".concat(COMPONENT_NAME.value, "-item-separator")
        }, [separatorContent])]);
      });
    }
    return function () {
      var spaceClassNames = ["".concat(COMPONENT_NAME.value), _defineProperty(_defineProperty(_defineProperty(_defineProperty({}, "".concat(COMPONENT_NAME.value, "-align-").concat(props2.align), props2.align), "".concat(COMPONENT_NAME.value, "-").concat(props2.direction), props2.direction), "".concat(COMPONENT_NAME.value, "--break-line"), props2.breakLine), "".concat(COMPONENT_NAME.value, "--polyfill"), needPolyfill.value)];
      return createVNode("div", {
        "class": spaceClassNames,
        "style": renderStyle.value
      }, [renderChildren()]);
    };
  }
});

export { _Space as default };
//# sourceMappingURL=space.mjs.map
