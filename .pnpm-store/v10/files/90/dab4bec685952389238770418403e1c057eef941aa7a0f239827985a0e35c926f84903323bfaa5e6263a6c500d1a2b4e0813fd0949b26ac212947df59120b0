/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import { defineComponent, ref, createVNode } from 'vue';
import _defineProperty from '@babel/runtime/helpers/defineProperty';
import dropdownItemProps from './dropdown-item-props.js';
import 'lodash-es';
import '@babel/runtime/helpers/toConsumableArray';
import '@babel/runtime/helpers/typeof';
import '../_chunks/dep-fe23be6e.js';
import { u as useTNodeJSX, a as useContent } from '../_chunks/dep-2accc95a.js';
import { u as usePrefixClass } from '../_chunks/dep-9e6d8a78.js';
import '@babel/runtime/helpers/slicedToArray';
import '../_chunks/dep-880d05b9.js';
import { u as useRipple } from '../_chunks/dep-d2a6e7a4.js';
import { p as pxCompat } from '../_chunks/dep-80a99546.js';
import '../_chunks/dep-81b01cae.js';
import '../_chunks/dep-16bcfabc.js';
import '../_chunks/dep-fb805f69.js';
import '../config-provider/hooks/useConfig.js';
import '../config-provider/utils/context.js';
import '../_chunks/dep-938cd955.js';
import 'dayjs';
import '@babel/runtime/helpers/createClass';
import '@babel/runtime/helpers/classCallCheck';
import '../_chunks/dep-2ea19dca.js';
import '@babel/runtime/helpers/objectWithoutProperties';

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
//# sourceMappingURL=dropdown-item.js.map
