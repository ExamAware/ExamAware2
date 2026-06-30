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
      "id": "gesture-press"
    },
    "children": [{
      "tag": "path",
      "attrs": {
        "id": "fill1",
        "fill": "props.fillColor1",
        "d": "M9.24412 16.3511V7.56622C9.24412 6.59659 10.0302 5.81055 10.9998 5.81055C11.9694 5.81055 12.7555 6.59659 12.7555 7.56622V11.52H14.9138C15.0767 11.52 15.2381 11.5427 15.3935 11.5868C15.5349 11.6269 15.6713 11.6848 15.7994 11.7596L19.4241 13.8752C20.1419 14.2943 20.4679 15.1591 20.2052 15.9477L18.4228 21.2982C18.1837 22.0157 17.5123 22.4997 16.7561 22.4997H9.67056C9.12496 22.4997 8.61032 22.2462 8.27779 21.8137L4.41602 16.7903L4.95999 15.9738C5.1612 15.6718 5.5274 15.5246 5.88164 15.6034L9.24412 16.3511Z"
      }
    }, {
      "tag": "path",
      "attrs": {
        "id": "fill2",
        "fill": "props.fillColor2",
        "d": "M15.3935 11.5863C16.3903 10.515 17 9.07871 17 7.5C17 4.18629 14.3137 1.5 11 1.5C7.68629 1.5 5 4.18629 5 7.5C5 10.2028 6.7871 12.4882 9.24412 13.239V7.56574C9.24412 6.5961 10.0302 5.81006 10.9998 5.81006C11.9694 5.81006 12.7555 6.5961 12.7555 7.56573V11.5195H14.9138C15.0767 11.5195 15.2381 11.5422 15.3935 11.5863Z"
      }
    }, {
      "tag": "path",
      "attrs": {
        "id": "stroke2",
        "stroke": "props.strokeColor2",
        "d": "M15.6435 11.3C16.4913 10.2653 17 8.94204 17 7.5C17 4.18629 14.3137 1.5 11 1.5C7.68629 1.5 5 4.18629 5 7.5C5 10.056 6.5983 12.2388 8.85 13.1033",
        "strokeLinecap": "square",
        "strokeWidth": "props.strokeWidth"
      }
    }, {
      "tag": "path",
      "attrs": {
        "id": "stroke1",
        "stroke": "props.strokeColor1",
        "d": "M9.24412 16.3511V7.56622C9.24412 6.59659 10.0302 5.81055 10.9998 5.81055C11.9694 5.81055 12.7555 6.59659 12.7555 7.56622V11.52H14.9138C15.0767 11.52 15.2381 11.5427 15.3935 11.5868C15.5349 11.6269 15.6713 11.6848 15.7994 11.7596L19.4241 13.8752C20.1419 14.2943 20.4679 15.1591 20.2052 15.9477L18.4228 21.2982C18.1837 22.0157 17.5123 22.4997 16.7561 22.4997H9.67056C9.12496 22.4997 8.61032 22.2462 8.27779 21.8137L4.41602 16.7903L4.95999 15.9738C5.1612 15.6718 5.5274 15.5246 5.88164 15.6034L9.24412 16.3511Z",
        "strokeLinecap": "square",
        "strokeWidth": "props.strokeWidth"
      }
    }]
  }]
};
var gesturePress = defineComponent({
  name: "GesturePressIcon",
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
    var finalCls = computed(() => ["t-icon", "t-icon-gesture-press", className.value]);
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

export default gesturePress;
//# sourceMappingURL=gesture-press.js.map
