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
      "d": "M5.65163 4C6.17244 2.30469 7.9684 1 10 1C10.9878 1 11.915 1.31569 12.664 1.77C13.204 2.09756 13.6896 2.52079 14.0498 3H15C16.933 3 18.5 4.567 18.5 6.5L18.5 6.5141C18.5001 6.75054 18.5002 7.37728 18.3828 8H19.5C19.9967 8 20.5538 8.12581 20.9744 8.56001C21.389 8.98807 21.5 9.54067 21.5 10.0169V18C21.5 18.476 21.3889 19.0312 20.9655 19.4575C20.5409 19.885 19.9838 20 19.5 20H17.5V21C17.5 21.476 17.3889 22.0312 16.9655 22.4575C16.5409 22.885 15.9838 23 15.5 23H6.5C6.0162 23 5.45915 22.885 5.03447 22.4575C4.61106 22.0312 4.5 21.476 4.5 21V15.8293C3.33481 15.4175 2.5 14.3062 2.5 13V7C2.5 5.34315 3.84315 4 5.5 4H5.65163ZM17.5 10V18H19.5V10.0169C19.5 10.0111 19.5 10.0055 19.4999 10H17.5ZM16.3152 8C16.3407 7.938 16.3707 7.84688 16.3988 7.72057C16.4969 7.27897 16.5 6.75702 16.5 6.5C16.5 5.67157 15.8284 5 15 5H12.882L12.6056 4.44721C12.4585 4.15301 12.1234 3.78127 11.6267 3.48C11.1392 3.18431 10.5664 3 10 3C8.4733 3 7.5 4.15378 7.5 5V6H5.5C4.94772 6 4.5 6.44772 4.5 7V13C4.5 13.5523 4.94772 14 5.5 14C6.05228 14 6.5 13.5523 6.5 13V8H16.3152Z"
    }
  }]
};
var beerFilled = defineComponent({
  name: "BeerFilledIcon",
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
    var finalCls = computed(() => ["t-icon", "t-icon-beer-filled", className.value]);
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

export default beerFilled;
//# sourceMappingURL=beer-filled.js.map
