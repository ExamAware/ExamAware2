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
      "id": "lemon"
    },
    "children": [{
      "tag": "path",
      "attrs": {
        "id": "fill1",
        "fill": "props.fillColor1",
        "d": "M20.0001 6.50007C22.0236 9.53279 22.3232 13.677 18.0001 18.0001C13.6769 22.3232 9.53278 22.0236 6.50006 20.0001L4.59851 20.5086C3.95689 20.6194 3.39681 20.0659 3.50009 19.423L4.00006 17.5001C1.96678 14.4657 1.67048 10.3297 6.00008 6.00006C10.3297 1.67046 14.4656 1.96679 17.5001 4.00007L19.4231 3.50007C20.0659 3.39679 20.6195 3.95687 20.5086 4.59849L20.0001 6.50007Z"
      }
    }, {
      "tag": "path",
      "attrs": {
        "id": "stroke1",
        "stroke": "props.strokeColor1",
        "d": "M20.0001 6.50007C22.0236 9.53279 22.3232 13.677 18.0001 18.0001C13.6769 22.3232 9.53278 22.0236 6.50006 20.0001L4.59851 20.5086C3.95689 20.6194 3.39681 20.0659 3.50009 19.423L4.00006 17.5001C1.96678 14.4657 1.67048 10.3297 6.00008 6.00006C10.3297 1.67046 14.4656 1.96679 17.5001 4.00007L19.4231 3.50007C20.0659 3.39679 20.6195 3.95687 20.5086 4.59849L20.0001 6.50007Z",
        "strokeLinecap": "square",
        "strokeWidth": "props.strokeWidth"
      }
    }, {
      "tag": "g",
      "attrs": {
        "id": "stroke2"
      },
      "children": [{
        "tag": "path",
        "attrs": {
          "stroke": "props.strokeColor2",
          "d": "M8.58398 12.8299L8.58675 12.8271L8.58951 12.8299L8.58675 12.8327L8.58398 12.8299Z",
          "strokeLinecap": "square",
          "strokeWidth": "props.strokeWidth"
        }
      }, {
        "tag": "path",
        "attrs": {
          "stroke": "props.strokeColor2",
          "d": "M9.29102 9.29475L9.29378 9.29199L9.29654 9.29475L9.29378 9.29752L9.29102 9.29475Z",
          "strokeLinecap": "square",
          "strokeWidth": "props.strokeWidth"
        }
      }, {
        "tag": "path",
        "attrs": {
          "stroke": "props.strokeColor2",
          "d": "M12.8267 8.58772L12.8294 8.58496L12.8322 8.58772L12.8294 8.59048L12.8267 8.58772Z",
          "strokeLinecap": "square",
          "strokeWidth": "props.strokeWidth"
        }
      }]
    }]
  }]
};
var lemon = defineComponent({
  name: "LemonIcon",
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
    var finalCls = computed(() => ["t-icon", "t-icon-lemon", className.value]);
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

export default lemon;
//# sourceMappingURL=lemon.js.map
