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
      "d": "M16.1333 0.920898L16.031 2.1055C16.0198 2.23508 16.0141 2.36645 16.0141 2.49939C16.0141 4.98797 18.0315 7.00536 20.5201 7.00536C20.653 7.00536 20.7844 6.99963 20.914 6.98845L22.0986 6.88616L21.9963 8.07076C21.8488 9.7793 21.0419 11.2971 19.8336 12.3704C20.5729 13.2765 21.0195 14.4252 21.0195 15.6805C21.0195 18.6638 18.519 21.0185 15.5147 21.0185H5.60391C3.09715 21.0185 1 19.0522 1 16.5481C1 14.7164 2.12578 13.1695 3.70861 12.4734C3.70484 12.386 3.70293 12.2982 3.70293 12.21C3.70293 9.06341 6.1015 6.51059 9.1673 6.07126C9.78028 3.34598 12.1017 1.26901 14.9487 1.02318L16.1333 0.920898ZM10.1088 8.00437C10.0874 8.00437 10.066 8.00452 10.0446 8.00481C7.60588 8.0379 5.70293 9.94228 5.70293 12.21C5.70293 12.4726 5.72801 12.7286 5.77576 12.9765L5.95986 13.9319L5.00979 14.1421C3.83284 14.4024 3 15.4033 3 16.5481C3 17.8772 4.1299 19.0185 5.60391 19.0185H15.5147C17.4863 19.0185 19.0195 17.4888 19.0195 15.6805C19.0195 14.628 18.5078 13.6794 17.6867 13.0607C17.557 12.963 17.4199 12.8738 17.2761 12.794C16.7608 12.5078 16.1602 12.3424 15.5147 12.3424C15.4949 12.3424 15.4753 12.3426 15.4557 12.3429L14.6014 12.3562L14.4548 11.5145C14.1722 9.89101 12.9017 8.55454 11.2163 8.13818C10.8636 8.05104 10.4927 8.00437 10.1088 8.00437Z"
    }
  }]
};
var cloudyNightFilled = defineComponent({
  name: "CloudyNightFilledIcon",
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
    var finalCls = computed(() => ["t-icon", "t-icon-cloudy-night-filled", className.value]);
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

export default cloudyNightFilled;
//# sourceMappingURL=cloudy-night-filled.js.map
