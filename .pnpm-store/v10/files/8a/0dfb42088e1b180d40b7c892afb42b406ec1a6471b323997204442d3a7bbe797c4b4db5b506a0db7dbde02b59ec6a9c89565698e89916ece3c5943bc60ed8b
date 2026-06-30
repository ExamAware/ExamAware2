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
      "id": "wealth-1"
    },
    "children": [{
      "tag": "path",
      "attrs": {
        "id": "fill1",
        "fill": "props.fillColor1",
        "d": "M17 13.0274C14.75 13.2762 13 15.1837 13 17.5C13 18.3003 13.2089 19.0519 13.5752 19.7031C12.6597 19.8925 11.6125 20 10.5 20C6.91015 20 4 18.8807 4 17.5V5.5C4 6.88071 6.91015 8 10.5 8C14.0899 8 17 6.88071 17 5.5V13.0274Z"
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
          "d": "M13.5752 19.7031C14.3464 21.074 15.8151 22 17.5 22C19.9853 22 22 19.9853 22 17.5C22 15.0147 19.9853 13 17.5 13C17.331 13 17.1642 13.0093 17 13.0275C14.75 13.2762 13 15.1837 13 17.5C13 18.3003 13.2089 19.0519 13.5752 19.7031Z"
        }
      }, {
        "tag": "path",
        "attrs": {
          "fill": "props.fillColor2",
          "d": "M17 5.5C17 4.11929 14.0899 3 10.5 3C6.91015 3 4 4.11929 4 5.5C4 6.88071 6.91015 8 10.5 8C14.0899 8 17 6.88071 17 5.5Z"
        }
      }]
    }, {
      "tag": "path",
      "attrs": {
        "id": "stroke1",
        "stroke": "props.strokeColor1",
        "d": "M17 11.5C17 12.8807 14.0899 14 10.5 14C6.91015 14 4 12.8807 4 11.5M17 11.5V13.0275C14.75 13.2762 13 15.1837 13 17.5C13 18.3003 13.2089 19.0519 13.5752 19.7031C12.6597 19.8925 11.6125 20 10.5 20C6.91015 20 4 18.8807 4 17.5V11.5M17 11.5V6.5M4 11.5V6.5M17 5.5C17 6.88071 14.0899 8 10.5 8C6.91015 8 4 6.88071 4 5.5C4 4.11929 6.91015 3 10.5 3C14.0899 3 17 4.11929 17 5.5Z",
        "strokeLinecap": "square",
        "strokeWidth": "props.strokeWidth"
      }
    }, {
      "tag": "path",
      "attrs": {
        "id": "stroke2",
        "stroke": "props.strokeColor2",
        "d": "M13.5752 19.7031C14.3464 21.074 15.8151 22 17.5 22C19.9853 22 22 19.9853 22 17.5C22 15.0147 19.9853 13 17.5 13C17.331 13 17.1642 13.0093 17 13.0275C14.75 13.2762 13 15.1837 13 17.5C13 18.3003 13.2089 19.0519 13.5752 19.7031Z",
        "strokeLinecap": "square",
        "strokeWidth": "props.strokeWidth"
      }
    }]
  }]
};
var wealth1 = defineComponent({
  name: "Wealth1Icon",
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
    var finalCls = computed(() => ["t-icon", "t-icon-wealth-1", className.value]);
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

export default wealth1;
//# sourceMappingURL=wealth-1.js.map
