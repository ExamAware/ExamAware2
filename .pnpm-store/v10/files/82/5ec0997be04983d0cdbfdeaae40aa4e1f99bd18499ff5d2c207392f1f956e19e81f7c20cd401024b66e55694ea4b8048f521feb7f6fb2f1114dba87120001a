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
    "tag": "g",
    "attrs": {
      "id": "logo-apple"
    },
    "children": [{
      "tag": "g",
      "attrs": {
        "id": "fill1"
      },
      "children": [{
        "tag": "path",
        "attrs": {
          "fill": "props.fillColor1",
          "d": "M12.8625 3.98848H12.9125C14.2933 3.98848 15.4125 2.86919 15.4125 1.48848V1.43848H15.3625C13.9818 1.43848 12.8625 2.55776 12.8625 3.93848V3.98848Z"
        }
      }, {
        "tag": "path",
        "attrs": {
          "fill": "props.fillColor1",
          "d": "M20.2872 8.10012C19.3499 6.79124 17.8267 6.11368 16.2411 6.01052C15.1337 5.92923 14.1306 6.29423 13.3245 6.59686C12.9088 6.75295 12.4537 6.96932 12.0005 6.96932C11.5266 6.96932 11.0566 6.7545 10.6217 6.58975C9.85047 6.29758 9.06529 6.02991 8.2308 6.05934C6.40219 6.12385 4.73409 7.1297 3.78666 8.70334C1.45223 12.5721 3.63566 18.3873 6.73366 21.1592C7.30727 21.6724 7.94536 22.0193 8.67202 21.9981C9.93863 21.9442 11.009 21.1306 12.2994 21.1306C13.5877 21.1306 14.668 21.992 15.9491 21.9636C18.5355 21.9218 20.1454 18.3533 20.8483 16.3414C19.1061 15.6333 17.9171 14.018 17.8951 12.1058C17.8751 10.4378 18.8823 8.93365 20.2872 8.10012Z",
          "fillRule": "evenodd",
          "clipRule": "evenodd"
        }
      }]
    }, {
      "tag": "g",
      "attrs": {
        "id": "stroke1"
      },
      "children": [{
        "tag": "path",
        "attrs": {
          "stroke": "props.strokeColor1",
          "d": "M20.2872 8.10014C19.3499 6.79126 17.8267 6.1137 16.2411 6.01055C15.1337 5.92926 14.1306 6.29426 13.3245 6.59688C12.9088 6.75298 12.4537 6.96935 12.0005 6.96935C11.5266 6.96935 11.0566 6.75453 10.6217 6.58978C9.85047 6.2976 9.06529 6.02993 8.2308 6.05937C6.40219 6.12388 4.73409 7.12973 3.78666 8.70336C1.45223 12.5721 3.63566 18.3873 6.73366 21.1592C7.30727 21.6724 7.94536 22.0193 8.67202 21.9981C9.93863 21.9443 11.009 21.1307 12.2994 21.1307C13.5877 21.1307 14.668 21.992 15.9491 21.9636C18.5355 21.9218 20.1454 18.3533 20.8483 16.3414C19.1061 15.6333 17.9171 14.018 17.8951 12.1058C17.8751 10.4378 18.8823 8.93368 20.2872 8.10014Z",
          "fillRule": "evenodd",
          "strokeWidth": "props.strokeWidth",
          "clipRule": "evenodd"
        }
      }, {
        "tag": "path",
        "attrs": {
          "stroke": "props.strokeColor1",
          "d": "M12.8625 3.98848H12.9125C14.2933 3.98848 15.4125 2.86919 15.4125 1.48848V1.43848H15.3625C13.9818 1.43848 12.8625 2.55776 12.8625 3.93848V3.98848Z",
          "strokeWidth": "props.strokeWidth"
        }
      }]
    }]
  }]
};
var logoApple = defineComponent({
  name: "LogoAppleIcon",
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
    var finalCls = computed(() => ["t-icon", "t-icon-logo-apple", className.value]);
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

export default logoApple;
//# sourceMappingURL=logo-apple.js.map
