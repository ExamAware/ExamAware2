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
      "id": "logo-alipay",
      "fill": "props.strokeColor1",
      "d": "M10.5 2H12.5V4.78768H19.5018V6.78768H12.5V8.64495H17.7643L17.5658 9.81254C17.3047 11.3488 16.5881 12.9667 15.6173 14.4693C16.9118 14.9159 18.1896 15.3888 19.4102 15.8406L19.6428 15.9267C21.219 16.5099 22.6869 17.0494 24 17.4614V21.2888L23.5636 21.0694L23.5049 21.0401C23.4655 21.0204 23.4067 20.9911 23.3299 20.953C23.1763 20.8768 22.9506 20.7654 22.6637 20.6254C22.0899 20.3452 21.2717 19.9505 20.2962 19.4932C18.5153 18.6584 16.2179 17.6189 13.9291 16.6876C12.9032 17.8444 11.7295 18.8793 10.5008 19.6624C9.17994 20.5041 7.73348 21.0938 6.30325 21.168C6.20244 21.1733 6.10146 21.1759 6.00036 21.1759C4.17247 21.1759 2.73249 20.6909 1.75042 19.8335C0.757794 18.967 0.314967 17.7861 0.398632 16.6106C0.567055 14.2441 2.77152 12.2151 6.02849 12.3067C8.2767 12.37 10.7335 12.9311 13.1573 13.6672C13.7573 12.6691 14.2302 11.6336 14.5335 10.6449H5.50069V8.64495H10.5V6.78768H3.50058V4.78768H10.5V2ZM5.97223 14.3059C3.58475 14.2387 2.47244 15.6446 2.39359 16.7525C2.35361 17.3142 2.55452 17.8806 3.06573 18.3269C3.5875 18.7824 4.51146 19.1759 6.00036 19.1759C7.72982 19.1759 9.73338 17.9501 11.4765 15.9699C11.5282 15.9112 11.5795 15.852 11.6303 15.7924C9.40672 14.9705 7.45602 14.3945 6.24418 14.3163C6.153 14.3119 6.06235 14.3085 5.97223 14.3059Z"
    }
  }]
};
var logoAlipay = defineComponent({
  name: "LogoAlipayIcon",
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
    var finalCls = computed(() => ["t-icon", "t-icon-logo-alipay", className.value]);
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

export default logoAlipay;
//# sourceMappingURL=logo-alipay.js.map
