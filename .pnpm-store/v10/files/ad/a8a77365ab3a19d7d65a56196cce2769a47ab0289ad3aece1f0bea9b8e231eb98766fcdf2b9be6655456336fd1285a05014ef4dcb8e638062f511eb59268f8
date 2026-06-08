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
      "id": "usercase"
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
          "d": "M20.1213 9.41421C18.9497 10.1953 17.0503 10.1953 15.8787 9.41421C14.7071 8.63317 14.7071 7.36683 15.8787 6.58579C17.0503 5.80474 18.9497 5.80474 20.1213 6.58579C21.2929 7.36683 21.2929 8.63317 20.1213 9.41421Z"
        }
      }, {
        "tag": "path",
        "attrs": {
          "fill": "props.fillColor1",
          "d": "M20.1213 17.4142C18.9497 18.1953 17.0503 18.1953 15.8787 17.4142C14.7071 16.6332 14.7071 15.3668 15.8787 14.5858C17.0503 13.8047 18.9497 13.8047 20.1213 14.5858C21.2929 15.3668 21.2929 16.6332 20.1213 17.4142Z"
        }
      }, {
        "tag": "path",
        "attrs": {
          "fill": "props.fillColor1",
          "d": "M6.41421 9.41421C5.63317 10.1953 4.36683 10.1953 3.58579 9.41421C2.80474 8.63317 2.80474 7.36683 3.58579 6.58579C4.36683 5.80474 5.63317 5.80474 6.41421 6.58579C7.19526 7.36683 7.19526 8.63317 6.41421 9.41421Z"
        }
      }]
    }, {
      "tag": "path",
      "attrs": {
        "id": "stroke1",
        "stroke": "props.strokeColor1",
        "d": "M3 13H7M4.99984 16.0001V10.0001M4.99984 16.0001L3 17.999M4.99984 16.0001L7.00173 17.999M20.1213 9.41421C18.9497 10.1953 17.0503 10.1953 15.8787 9.41421C14.7071 8.63317 14.7071 7.36684 15.8787 6.58579C17.0503 5.80474 18.9497 5.80474 20.1213 6.58579C21.2929 7.36684 21.2929 8.63317 20.1213 9.41421ZM20.1213 17.4142C18.9497 18.1953 17.0503 18.1953 15.8787 17.4142C14.7071 16.6332 14.7071 15.3668 15.8787 14.5858C17.0503 13.8047 18.9497 13.8047 20.1213 14.5858C21.2929 15.3668 21.2929 16.6332 20.1213 17.4142ZM6.41421 9.41421C5.63317 10.1953 4.36684 10.1953 3.58579 9.41421C2.80474 8.63317 2.80474 7.36684 3.58579 6.58579C4.36684 5.80474 5.63317 5.80474 6.41421 6.58579C7.19526 7.36684 7.19526 8.63317 6.41421 9.41421Z",
        "strokeLinecap": "square",
        "strokeWidth": "props.strokeWidth"
      }
    }, {
      "tag": "path",
      "attrs": {
        "id": "stroke2",
        "stroke": "props.strokeColor2",
        "d": "M10.5 8H11.5M10.5 16H11.5",
        "strokeLinecap": "square",
        "strokeWidth": "props.strokeWidth"
      }
    }]
  }]
};
var usercase = defineComponent({
  name: "UsercaseIcon",
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
    var finalCls = computed(() => ["t-icon", "t-icon-usercase", className.value]);
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

export default usercase;
//# sourceMappingURL=usercase.js.map
