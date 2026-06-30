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
      "id": "nut"
    },
    "children": [{
      "tag": "path",
      "attrs": {
        "id": "fill1",
        "fill": "props.fillColor1",
        "d": "M4.50047 19.4996C7.62466 22.6238 13.0449 20.8545 16.9502 16.9493L15.536 15.5351L15.536 12.7067L12.7075 12.7067L7.05069 7.0498C3.14545 10.955 1.37627 16.3754 4.50047 19.4996Z"
      }
    }, {
      "tag": "path",
      "attrs": {
        "id": "fill2",
        "fill": "props.fillColor2",
        "d": "M7.75748 4.92921C10.5627 2.12402 15.4914 3.99693 17.6094 6.29561C20.0051 8.51301 21.8959 13.4182 19.0712 16.2429L17.657 17.6571L15.5356 15.5358L15.5357 12.7074H12.7072L6.34326 6.34343L7.75748 4.92921Z"
      }
    }, {
      "tag": "path",
      "attrs": {
        "id": "stroke1",
        "stroke": "props.strokeColor1",
        "d": "M6.70955 7.3999C3.04464 11.2734 1.46814 16.4676 4.49998 19.4995C7.53393 22.5334 12.7332 20.9526 16.6076 17.2822",
        "strokeLinecap": "square",
        "strokeWidth": "props.strokeWidth"
      }
    }, {
      "tag": "path",
      "attrs": {
        "id": "stroke2",
        "stroke": "props.strokeColor2",
        "d": "M17.5996 6.28696C17.5562 6.24691 17.6287 6.31567 17.6146 6.30172M17.5996 6.28696C17.6027 6.28982 17.6058 6.2927 17.6089 6.29557M17.5996 6.28696C17.5646 6.25471 17.605 6.29285 17.6146 6.30172M17.6146 6.30172C17.6127 6.29967 17.6108 6.29762 17.6089 6.29557M17.6146 6.30172C17.6169 6.30386 17.6173 6.30444 17.6146 6.30172ZM17.6146 6.30172C18.2072 5.5781 19.0679 4.29516 19.4996 3M17.6146 6.30172C17.2366 6.76325 16.793 7.20664 16.2422 7.75736M17.6089 6.29557C15.4909 3.9969 10.5622 2.12399 7.75699 4.92918L6.34277 6.3434L12.7066 12.7068H15.5351V15.5352L17.6565 17.6571L19.0707 16.2429C21.8955 13.4181 20.0046 8.51297 17.6089 6.29557Z",
        "strokeLinecap": "square",
        "strokeWidth": "props.strokeWidth"
      }
    }]
  }]
};
var nut = defineComponent({
  name: "NutIcon",
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
    var finalCls = computed(() => ["t-icon", "t-icon-nut", className.value]);
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

export default nut;
//# sourceMappingURL=nut.js.map
