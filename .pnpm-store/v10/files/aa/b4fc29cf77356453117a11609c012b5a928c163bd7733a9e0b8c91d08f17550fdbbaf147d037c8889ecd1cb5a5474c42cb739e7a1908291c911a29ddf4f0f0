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
      "id": "undertake-delivery"
    },
    "children": [{
      "tag": "path",
      "attrs": {
        "id": "fill1",
        "fill": "props.fillColor1",
        "d": "M19.7812 14.5553L13.5 16L13.1251 16C13.6223 16 14.0992 15.8024 14.4508 15.4508C14.8025 15.0992 15 14.6223 15 14.125C15 13.6277 14.8025 13.1508 14.4508 12.7992C14.0992 12.4476 13.6223 12.25 13.125 12.25H8.4375C8.14175 12.2493 7.84877 12.3069 7.5753 12.4195C7.30182 12.5321 7.05324 12.6975 6.84375 12.9063L4.5 15.25V20.5H11.25L17.25 19L20.8894 17.4475C21.148 17.3184 21.3656 17.1197 21.5176 16.8738C21.6697 16.6279 21.7501 16.3444 21.75 16.0553C21.7497 15.8159 21.6942 15.5797 21.5878 15.3652C21.4814 15.1507 21.327 14.9636 21.1365 14.8185C20.9461 14.6734 20.7247 14.5741 20.4897 14.5285C20.2546 14.4829 20.0122 14.492 19.7812 14.5553Z"
      }
    }, {
      "tag": "g",
      "attrs": {
        "id": "fill2"
      },
      "children": [{
        "tag": "path",
        "attrs": {
          "fill": "props.fillColor2",
          "d": "M4.5 15.25V20.5H1V15.25H4.5Z"
        }
      }, {
        "tag": "path",
        "attrs": {
          "fill": "props.fillColor2",
          "d": "M16.5 3H12.5V8L14.5 7L16.5 8V3Z"
        }
      }]
    }, {
      "tag": "path",
      "attrs": {
        "id": "stroke1",
        "stroke": "props.strokeColor1",
        "d": "M4.5 20.5H11.25L17.25 19L20.8894 17.4475C21.148 17.3184 21.3656 17.1197 21.5176 16.8738C21.6697 16.6279 21.7501 16.3444 21.75 16.0553C21.7497 15.8159 21.6942 15.5797 21.5878 15.3652C21.4814 15.1507 21.327 14.9636 21.1365 14.8185C20.9461 14.6734 20.7247 14.5741 20.4897 14.5285C20.2546 14.4829 20.0122 14.492 19.7813 14.5553L13.5 16L13.1251 16M4.5 20.5V15.25M4.5 20.5H1V15.25H4.5M4.5 15.25L6.84375 12.9063C7.05324 12.6975 7.30182 12.5321 7.5753 12.4195C7.84877 12.3069 8.14175 12.2493 8.4375 12.25L13.125 12.25C14.1605 12.25 15 13.0895 15 14.125C15 15.1605 14.1605 16 13.125 16H11",
        "strokeLinecap": "square",
        "strokeWidth": "props.strokeWidth"
      }
    }, {
      "tag": "path",
      "attrs": {
        "id": "stroke2",
        "stroke": "props.strokeColor2",
        "d": "M8.5 8.5V3H20.5V10.5M12.5 3H16.5V8L14.5 7L12.5 8V3Z",
        "strokeLinecap": "square",
        "strokeWidth": "props.strokeWidth"
      }
    }]
  }]
};
var undertakeDelivery = defineComponent({
  name: "UndertakeDeliveryIcon",
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
    var finalCls = computed(() => ["t-icon", "t-icon-undertake-delivery", className.value]);
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

export default undertakeDelivery;
//# sourceMappingURL=undertake-delivery.js.map
