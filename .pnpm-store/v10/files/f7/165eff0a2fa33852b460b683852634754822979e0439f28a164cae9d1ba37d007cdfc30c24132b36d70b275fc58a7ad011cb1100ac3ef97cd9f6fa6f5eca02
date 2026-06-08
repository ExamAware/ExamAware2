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
      "d": "M13 1V2H16V8H15.0614C15.2612 9.7854 15.9348 12.1988 16.8796 14.5814C17.9352 17.2434 19.2498 19.6653 20.4322 21H22V23H14.1527L14.0144 22.1689L14.0121 22.157C14.0097 22.1443 14.0052 22.1221 13.9983 22.0915C13.9844 22.0303 13.9613 21.9373 13.9265 21.8233C13.8558 21.5918 13.7427 21.2933 13.5739 21.0038C13.2377 20.4274 12.7631 20 12 20C11.2369 20 10.7623 20.4274 10.4261 21.0038C10.2573 21.2933 10.1442 21.5918 10.0735 21.8233C10.0387 21.9373 10.0156 22.0303 10.0017 22.0915C9.99484 22.1221 9.99033 22.1443 9.98787 22.157L9.98579 22.168L9.84729 23H2V21H3.56781C4.75023 19.6653 6.0648 17.2434 7.12042 14.5814C8.06522 12.1988 8.73883 9.7854 8.93861 8H8V2H11V1H13ZM10.9489 8C10.7483 10.1007 9.977 12.8034 8.97958 15.3186C8.16311 17.3775 7.14961 19.4261 6.08129 21H8.23905C8.34209 20.7056 8.49 20.3536 8.69847 19.9962C9.23712 19.0726 10.2625 18 12 18C13.7375 18 14.7629 19.0726 15.3015 19.9962C15.51 20.3536 15.6579 20.7056 15.7609 21H17.9187C16.8504 19.4261 15.8369 17.3775 15.0204 15.3186C14.023 12.8034 13.2517 10.1007 13.0511 8H10.9489Z"
    }
  }]
};
var tower1Filled = defineComponent({
  name: "Tower1FilledIcon",
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
    var finalCls = computed(() => ["t-icon", "t-icon-tower-1-filled", className.value]);
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

export default tower1Filled;
//# sourceMappingURL=tower-1-filled.js.map
