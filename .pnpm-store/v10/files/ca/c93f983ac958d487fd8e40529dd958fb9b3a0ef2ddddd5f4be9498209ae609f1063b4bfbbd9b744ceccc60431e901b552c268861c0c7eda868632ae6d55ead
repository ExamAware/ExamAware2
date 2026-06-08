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
      "d": "M19.7011 2.12857L19.2259 4.1012C21.2053 5.19798 22.3778 7.45528 21.9853 9.81546C21.9275 10.1634 21.8679 10.5074 21.8058 10.8471C21.4258 12.9227 20.2006 16.8795 17.7059 19.3741C14.9866 22.0935 11.402 22.6085 8.62982 22.4938C7.23244 22.436 6.00126 22.2176 5.11996 22.0143C4.67818 21.9124 4.32131 21.8136 4.0719 21.7393C3.94712 21.7021 3.84901 21.671 3.78038 21.6485C3.74606 21.6373 3.71908 21.6282 3.69981 21.6217L3.67672 21.6137L3.66958 21.6112L3.66618 21.61L0.475586 20.4816L3.76138 19.6956L3.76247 19.6953L3.7669 19.6942C3.77395 19.6923 3.78765 19.6887 3.80757 19.683C3.84745 19.6716 3.91215 19.6521 3.99831 19.6229C4.17079 19.5645 4.4283 19.4676 4.74436 19.3194C5.37709 19.0226 6.23855 18.523 7.12295 17.7199C8.87075 16.1327 10.7836 13.2931 11.1129 8.27212C11.1162 8.2205 11.1195 8.16866 11.1225 8.1166L11.1231 8.1071C11.3383 4.9474 14.4596 3.06687 17.3216 3.46628L17.7567 1.66016L19.7011 2.12857ZM7.00774 20.3351C7.52948 20.4108 8.10443 20.4704 8.71248 20.4956C11.2218 20.5994 14.1373 20.1144 16.2917 17.9599C18.1891 16.0626 19.2921 12.9815 19.7341 10.9989L18.8724 10.1499L17.2173 11.2533L16.2173 9.75331L14.7173 10.7533L13.5535 9.00763L13.0492 9.1337C12.5536 14.2317 10.5069 17.3484 8.46751 19.2005C7.96807 19.654 7.47317 20.0281 7.00774 20.3351Z"
    }
  }]
};
var chiliFilled = defineComponent({
  name: "ChiliFilledIcon",
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
    var finalCls = computed(() => ["t-icon", "t-icon-chili-filled", className.value]);
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

export default chiliFilled;
//# sourceMappingURL=chili-filled.js.map
