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
      "d": "M6.49885 5H7.99885C11.6601 5 14.0647 6.46441 15.5776 8.50988C16.5869 9.87454 17.1704 11.4572 17.5106 12.9403C19.1908 11.6651 21.1814 11.1395 23.221 10.7486L21.8462 19.0113C15.3033 19.0107 8.76047 19.0107 2.21762 19.0096L0.71875 13.001H1.99885C3.02025 13.001 3.89692 13.1059 4.59466 13.2373L3.67315 10.0117H4.99885C6.29516 10.0117 7.55312 10.2432 8.50249 10.4787C8.12289 9.16244 7.65362 7.77145 7.07577 6.38462L6.49885 5ZM9.09065 12.7244C8.84984 12.6465 8.52977 12.5501 8.15388 12.4535C7.62868 12.3185 7.00783 12.1867 6.35055 12.1028L7.75309 17.0106C8.37066 17.0107 8.73442 17.0109 9.06955 17.0112C9.32511 17.0113 9.56402 17.0115 9.88613 17.0116C9.88426 16.9939 9.8824 16.9764 9.88057 16.959C9.78001 16.0094 9.73348 15.5701 9.65549 15.1277C9.57751 14.6853 9.471 14.2565 9.2408 13.3298C9.19573 13.1483 9.14592 12.9478 9.09065 12.7244ZM5.67287 17.0102L5.22568 15.4458C5.08942 15.4042 4.92194 15.3573 4.7254 15.3099C4.34919 15.2193 3.86763 15.1274 3.29558 15.0677L3.78007 17.0099L5.67287 17.0102ZM17.9814 17.0101L20.1515 17.0108L20.7481 13.4256C20.6554 13.4618 20.5603 13.5005 20.4633 13.5419C19.5691 13.9232 18.5909 14.4945 17.8856 15.3055C17.9368 15.8736 17.9644 16.4717 17.9796 16.9524C17.9802 16.9718 17.9808 16.991 17.9814 17.0101Z"
    }
  }]
};
var operaFilled = defineComponent({
  name: "OperaFilledIcon",
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
    var finalCls = computed(() => ["t-icon", "t-icon-opera-filled", className.value]);
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

export default operaFilled;
//# sourceMappingURL=opera-filled.js.map
