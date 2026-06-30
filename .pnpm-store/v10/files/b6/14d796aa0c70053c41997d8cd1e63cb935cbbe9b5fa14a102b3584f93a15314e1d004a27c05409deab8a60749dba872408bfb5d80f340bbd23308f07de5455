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
      "d": "M16.0003 7.5C16.0003 7.22386 16.2242 7 16.5003 7C16.7765 7 17.0003 7.22386 17.0003 7.5C17.0003 7.72205 16.8432 8.04533 16.5123 8.40726L16.5004 8.42026L16.4884 8.40723C16.1574 8.04524 16.0003 7.72197 16.0003 7.5Z"
    }
  }, {
    "tag": "path",
    "attrs": {
      "fill": "props.filledColor",
      "d": "M8.00034 10.5C8.00034 10.2239 8.2242 10 8.50034 10C8.77649 10 9.00034 10.2239 9.00034 10.5C9.00034 10.722 8.84323 11.0453 8.51231 11.4073L8.50037 11.4203L8.48839 11.4072C8.15744 11.0452 8.00034 10.722 8.00034 10.5Z"
    }
  }, {
    "tag": "path",
    "attrs": {
      "fill": "props.filledColor",
      "d": "M22 2V22H2V2H22ZM16.3129 10.8359C16.3755 10.8784 16.4381 10.9208 16.5003 10.9636C16.5625 10.9208 16.6251 10.8784 16.6877 10.836C16.9203 10.6783 17.1532 10.5205 17.3701 10.342C17.5367 10.2049 17.761 10.0055 17.9884 9.7568C18.4075 9.29842 19.0003 8.4967 19.0003 7.5C19.0003 6.11929 17.8811 5 16.5003 5C15.1196 5 14.0003 6.11929 14.0003 7.5C14.0003 8.49664 14.5932 9.29837 15.0123 9.75673C15.2397 10.0054 15.4639 10.2049 15.6305 10.3419C15.8475 10.5205 16.0803 10.6783 16.3129 10.8359ZM8.30186 13.8287C8.36818 13.8735 8.43447 13.9183 8.5003 13.9636C8.56616 13.9183 8.63246 13.8735 8.69879 13.8287C8.85508 13.7232 9.01151 13.6176 9.1625 13.505C9.21479 13.466 9.2861 13.4111 9.37014 13.342C9.53672 13.2049 9.76099 13.0055 9.98837 12.7568C10.4075 12.2984 11.0003 11.4967 11.0003 10.5C11.0003 9.11929 9.88106 8 8.50034 8C7.11963 8 6.00034 9.11929 6.00034 10.5C6.00034 11.4966 6.59324 12.2984 7.0123 12.7567C7.23968 13.0054 7.46394 13.2049 7.63051 13.3419C7.71455 13.4111 7.78585 13.466 7.83814 13.505C7.98914 13.6176 8.14557 13.7232 8.30186 13.8287ZM13.9151 15.7875L19.7878 13.5852L19.0855 11.7125L13.2129 13.9148L13.9151 15.7875ZM5.91514 18.7875L11.7878 16.5852L11.0855 14.7125L5.21289 16.9148L5.91514 18.7875Z"
    }
  }]
};
var mapDistanceFilled = defineComponent({
  name: "MapDistanceFilledIcon",
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
    var finalCls = computed(() => ["t-icon", "t-icon-map-distance-filled", className.value]);
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

export default mapDistanceFilled;
//# sourceMappingURL=map-distance-filled.js.map
