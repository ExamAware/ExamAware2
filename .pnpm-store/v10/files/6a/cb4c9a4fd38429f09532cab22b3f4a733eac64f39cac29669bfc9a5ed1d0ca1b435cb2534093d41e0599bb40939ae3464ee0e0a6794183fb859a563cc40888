/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import { defineComponent, ref, createVNode } from 'vue';
import { _ as _defineProperty } from '../_chunks/dep-1dacc319.mjs';
import dropdownItemProps from './dropdown-item-props.mjs';
import { a as useTNodeJSX, b as useContent, d as useRipple, u as usePrefixClass } from '../_chunks/dep-7673347f.mjs';
import { p as pxCompat } from '../_chunks/dep-0cde7579.mjs';
import '../_chunks/dep-257428bc.mjs';
import 'lodash-es';
import '../_chunks/dep-00b4e06a.mjs';
import '../_chunks/dep-9f459d8b.mjs';
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
import '../_chunks/dep-0dcc778a.mjs';

function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var _DropdownItem = defineComponent({
  name: "TDropdownItem",
  props: _objectSpread(_objectSpread({}, dropdownItemProps), {}, {
    maxColumnWidth: {
      type: [String, Number],
      "default": 100
    },
    minColumnWidth: {
      type: [String, Number],
      "default": 10
    },
    isSubmenu: Boolean
  }),
  setup: function setup(props) {
    var renderTNodeJSX = useTNodeJSX();
    var renderContent = useContent();
    var itemRef = ref();
    useRipple(props.isSubmenu ? null : itemRef);
    var prefixIcon = renderTNodeJSX("prefixIcon");
    var dropdownItemClass = usePrefixClass("dropdown__item");
    var handleItemClick = function handleItemClick(e) {
      var _props$onClick;
      if (props.disabled) return;
      (_props$onClick = props.onClick) === null || _props$onClick === void 0 || _props$onClick.call(props, props.value, {
        e: e
      });
    };
    return function () {
      var content = renderContent("default", "content");
      var classes = [dropdownItemClass.value, "".concat(dropdownItemClass.value, "--theme-").concat(props.theme), _defineProperty(_defineProperty({}, "".concat(dropdownItemClass.value, "--active"), props.active), "".concat(dropdownItemClass.value, "--disabled"), props.disabled)];
      return createVNode("li", {
        "class": classes,
        "onClick": handleItemClick,
        "style": {
          maxWidth: pxCompat(props.maxColumnWidth),
          minWidth: pxCompat(props.minColumnWidth)
        },
        "ref": itemRef
      }, [props.prefixIcon ? createVNode("div", {
        "class": "".concat(dropdownItemClass.value, "-icon")
      }, [prefixIcon]) : null, content]);
    };
  }
});

export { _DropdownItem as default };
//# sourceMappingURL=dropdown-item.mjs.map
