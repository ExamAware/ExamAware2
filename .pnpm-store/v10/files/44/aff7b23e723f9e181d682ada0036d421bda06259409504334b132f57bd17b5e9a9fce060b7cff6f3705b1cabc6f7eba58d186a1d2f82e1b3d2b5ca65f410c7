import { _ as _defineProperty } from '../_chunks/dep-2cb449a9.js';
import { defineComponent, computed } from 'vue';
import renderNode from '../utils/render-fn.js';
import useSizeProps from '../utils/use-size-props.js';
import '../style/css.js';
import '../utils/use-common-classname.js';
import '../utils/config-context.js';

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var element = {
  "tag": "svg",
  "attrs": {
    "fill": "none",
    "viewBox": "0 0 24 24",
    "width": "1em",
    "height": "1em"
  },
  "children": [{
    "tag": "path",
    "attrs": {
      "fill": "props.filledColor",
      "d": "M20.5571 13.526C20.5983 13.532 20.6394 13.5389 20.6803 13.5468C21.0663 13.6218 21.4298 13.7848 21.7426 14.0231C22.0554 14.2614 22.309 14.5686 22.4837 14.9209C22.6584 15.2731 22.7495 15.6609 22.75 16.0542C22.7502 16.5292 22.618 16.9956 22.3682 17.3996C22.1185 17.8036 21.761 18.13 21.336 18.3422L21.3093 18.3556L17.5694 19.9509L11.3731 21.5H0V14.25H4.08579L6.13787 12.1979C6.44046 11.8964 6.79953 11.6574 7.19454 11.4948C7.25866 11.4684 7.32353 11.4441 7.38903 11.4219C5.70857 9.31876 5.84244 6.24326 7.79065 4.29505C9.7651 2.3206 12.8974 2.20968 15.0019 3.96231C17.1065 2.21099 20.2377 2.32233 22.2117 4.2963C24.3037 6.38827 24.3037 9.78001 22.2117 11.872L20.5571 13.526ZM3.5 16.25H2V19.5H3.5V16.25ZM5.5 19.5H11.1269L16.9306 18.0491L20.4625 16.5424C20.5462 16.4963 20.6167 16.4294 20.667 16.348C20.7212 16.2604 20.7499 16.1595 20.75 16.0565C20.7499 15.9708 20.73 15.8863 20.692 15.8096C20.6539 15.7328 20.5986 15.6659 20.5305 15.6139C20.4623 15.562 20.3831 15.5265 20.299 15.5102C20.2149 15.4938 20.1282 15.4971 20.0455 15.5198L20.0256 15.5252L13.6135 17L13.1251 17H10V15H13.125C13.1561 15 13.1869 14.9984 13.2174 14.9951C13.4155 14.9741 13.6016 14.8859 13.7437 14.7437C13.9078 14.5796 14 14.3571 14 14.125C14 13.8929 13.9078 13.6704 13.7437 13.5063C13.5796 13.3422 13.3571 13.25 13.125 13.25H8.4375L8.43505 13.25C8.27074 13.2496 8.10797 13.2816 7.95605 13.3442C7.80432 13.4066 7.66639 13.4984 7.55011 13.6141L5.5 15.6642V19.5Z"
    }
  }]
};
var undertakeHoldUpFilled = defineComponent({
  name: "UndertakeHoldUpFilledIcon",
  props: {
    size: {
      type: String
    },
    onClick: {
      type: Function
    },
    fillColor: {
      type: [Array, String]
    },
    strokeColor: {
      type: [Array, String]
    },
    strokeWidth: {
      type: Number
    }
  },
  setup(props, _ref) {
    var {
      attrs
    } = _ref;
    var propsSize = computed(() => props.size);
    var strokeColor1 = computed(() => {
      if (!props.strokeColor) return "currentColor";
      return Array.isArray(props.strokeColor) ? props.strokeColor[0] : props.strokeColor;
    });
    var strokeColor2 = computed(() => {
      var _props$strokeColor$;
      if (!props.strokeColor) return "currentColor";
      return Array.isArray(props.strokeColor) ? (_props$strokeColor$ = props.strokeColor[1]) !== null && _props$strokeColor$ !== void 0 ? _props$strokeColor$ : props.strokeColor[0] : props.strokeColor;
    });
    var fillColor1 = computed(() => {
      if (!props.fillColor) return "transparent";
      return Array.isArray(props.fillColor) ? props.fillColor[0] : props.fillColor;
    });
    var fillColor2 = computed(() => {
      var _props$fillColor$;
      if (!props.fillColor) return "transparent";
      return Array.isArray(props.fillColor) ? (_props$fillColor$ = props.fillColor[1]) !== null && _props$fillColor$ !== void 0 ? _props$fillColor$ : props.fillColor[0] : props.fillColor;
    });
    var filledColor = computed(() => {
      if (!props.fillColor) return "currentColor";
      return Array.isArray(props.fillColor) ? props.fillColor[0] : props.fillColor;
    });
    var {
      className,
      style
    } = useSizeProps(propsSize);
    var finalCls = computed(() => ["t-icon", "t-icon-undertake-hold-up-filled", className.value]);
    var finalStyle = computed(() => _objectSpread(_objectSpread({
      fill: "none"
    }, style.value), attrs.style));
    var finalProps = computed(() => ({
      class: finalCls.value,
      style: finalStyle.value,
      onClick: e => {
        var _props$onClick;
        return (_props$onClick = props.onClick) === null || _props$onClick === void 0 ? void 0 : _props$onClick.call(props, {
          e
        });
      },
      strokeColor1: strokeColor1.value,
      strokeColor2: strokeColor2.value,
      fillColor1: fillColor1.value,
      fillColor2: fillColor2.value,
      strokeWidth: props.strokeWidth || 2,
      filledColor: filledColor.value
    }));
    return () => renderNode(element, finalProps.value);
  }
});

export default undertakeHoldUpFilled;
//# sourceMappingURL=undertake-hold-up-filled.js.map
