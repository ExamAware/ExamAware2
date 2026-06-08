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
      "id": "usercase-link"
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
          "d": "M8.12132 13.4142C6.94975 14.1953 5.05025 14.1953 3.87868 13.4142C2.70711 12.6332 2.70711 11.3668 3.87868 10.5858C5.05025 9.80474 6.94975 9.80474 8.12132 10.5858C9.29289 11.3668 9.29289 12.6332 8.12132 13.4142Z"
        }
      }, {
        "tag": "path",
        "attrs": {
          "fill": "props.fillColor1",
          "d": "M20.1213 13.4142C18.9497 14.1953 17.0503 14.1953 15.8787 13.4142C14.7071 12.6332 14.7071 11.3668 15.8787 10.5858C17.0503 9.80474 18.9497 9.80474 20.1213 10.5858C21.2929 11.3668 21.2929 12.6332 20.1213 13.4142Z"
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
          "d": "M8.12132 13.4142C6.94975 14.1953 5.05025 14.1953 3.87868 13.4142C2.70711 12.6332 2.70711 11.3668 3.87868 10.5858C5.05025 9.80474 6.94975 9.80474 8.12132 10.5858C9.29289 11.3668 9.29289 12.6332 8.12132 13.4142Z",
          "strokeLinecap": "square",
          "strokeWidth": "props.strokeWidth"
        }
      }, {
        "tag": "path",
        "attrs": {
          "stroke": "props.strokeColor1",
          "d": "M11.998 11.9961H12.002V12H11.998V11.9961Z",
          "strokeLinecap": "square",
          "strokeWidth": "props.strokeWidth"
        }
      }, {
        "tag": "path",
        "attrs": {
          "stroke": "props.strokeColor1",
          "d": "M20.1213 13.4142C18.9497 14.1953 17.0503 14.1953 15.8787 13.4142C14.7071 12.6332 14.7071 11.3668 15.8787 10.5858C17.0503 9.80474 18.9497 9.80474 20.1213 10.5858C21.2929 11.3668 21.2929 12.6332 20.1213 13.4142Z",
          "strokeLinecap": "square",
          "strokeWidth": "props.strokeWidth"
        }
      }]
    }]
  }]
};
var usercaseLink = defineComponent({
  name: "UsercaseLinkIcon",
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
    var finalCls = computed(() => ["t-icon", "t-icon-usercase-link", className.value]);
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

export default usercaseLink;
//# sourceMappingURL=usercase-link.js.map
