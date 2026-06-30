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
      "d": "M3.00015 0.585938L5.41436 3.00015L4.00015 4.41436L1.58594 2.00015L3.00015 0.585938ZM22.4144 2.00015L20.0002 4.41436L18.5859 3.00015L21.0002 0.585938L22.4144 2.00015ZM10.3566 3.30271C10.0441 3.2966 9.77107 3.51304 9.70576 3.81877L7.42519 14.4933L6.20845 15.71L8.90974 18.4113L10.4369 16.8841C10.7951 16.5259 10.9964 16.0401 10.9964 15.5335L10.9964 3.9551C10.9964 3.5997 10.712 3.30966 10.3566 3.30271ZM7.74989 3.4009C8.01542 2.15809 9.12513 1.27824 10.3957 1.30309C11.0026 1.31497 11.5585 1.52992 11.9992 1.88235C12.4399 1.52992 12.9958 1.31497 13.6026 1.30309C14.8733 1.27824 15.983 2.15809 16.2485 3.4009L18.4055 13.4972L22.6761 17.7678L17.1464 23.2975L12.1473 18.2983C12.0963 18.2474 12.047 18.1952 11.9992 18.1419C11.9514 18.1952 11.902 18.2474 11.8511 18.2983L6.85199 23.2975L1.32227 17.7678L5.59287 13.4972L7.74989 3.4009ZM14.2926 3.81877C14.2273 3.51304 13.9543 3.2966 13.6418 3.30271C13.2864 3.30966 13.002 3.5997 13.002 3.9551L13.002 15.5335C13.002 16.0401 13.2033 16.5259 13.5615 16.8841L15.0886 18.4113L17.7899 15.71L16.5732 14.4933L14.2926 3.81877ZM5.41436 7.00015L3.00015 9.41436L1.58594 8.00015L4.00015 5.58594L5.41436 7.00015ZM20.0002 5.58594L22.4144 8.00015L21.0002 9.41436L18.5859 7.00015L20.0002 5.58594Z"
    }
  }]
};
var gestureApplauseFilled = defineComponent({
  name: "GestureApplauseFilledIcon",
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
    var finalCls = computed(() => ["t-icon", "t-icon-gesture-applause-filled", className.value]);
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

export default gestureApplauseFilled;
//# sourceMappingURL=gesture-applause-filled.js.map
