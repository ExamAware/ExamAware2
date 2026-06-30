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
      "d": "M8.1136 1.74293C10.4356 -0.579103 15.525 -0.392804 19.9577 4.04113C24.3901 8.47467 24.5779 13.5629 22.2557 15.8851C21.2823 16.8585 20.0377 16.9165 18.8693 16.5403C18.0004 16.2606 17.0912 15.7232 16.1776 15.0476C16.0284 15.2665 15.8732 15.5144 15.7105 15.7903C15.4022 16.3134 15.0922 16.8929 14.7609 17.5125C14.6925 17.6405 14.6231 17.7702 14.5526 17.9015C13.7565 19.3848 12.8181 21.0831 11.6481 22.25C10.6897 23.2059 9.46243 24.0534 7.86055 23.9972C6.29186 23.9422 4.64678 23.028 2.80965 21.1879C0.97313 19.3484 0.0590761 17.7033 0.00277407 16.136C-0.0547721 14.534 0.791503 13.3077 1.74955 12.3496C2.91735 11.1818 4.61507 10.2436 6.09794 9.44723C6.22746 9.37767 6.35546 9.30917 6.4818 9.24155C7.10301 8.90909 7.68408 8.59811 8.20843 8.28873C8.48432 8.12596 8.73226 7.97055 8.95117 7.82128C8.27556 6.90763 7.73811 5.99831 7.45835 5.12941C7.08214 3.96094 7.14021 2.71632 8.1136 1.74293ZM10.2164 9.37767C9.90322 9.59868 9.56695 9.80935 9.22475 10.0113C8.66102 10.3439 8.0354 10.6786 7.4141 11.011C7.29046 11.0772 7.16699 11.1433 7.04421 11.2092C5.5149 12.0305 4.08819 12.8394 3.16377 13.7638C2.36445 14.5631 1.97326 15.2785 2.00148 16.0642C2.03095 16.8845 2.52591 18.073 4.22499 19.7748C5.92345 21.476 7.11086 21.9697 7.93067 21.9984C8.71728 22.026 9.4345 21.6331 10.2358 20.834C11.1608 19.9114 11.9694 18.4854 12.7904 16.9557C12.8571 16.8314 12.924 16.7064 12.9909 16.5811C13.3223 15.9613 13.6561 15.3371 13.9876 14.7747C14.1895 14.4323 14.4001 14.0958 14.6211 13.7824C13.8809 13.1331 13.1215 12.4076 12.3563 11.6424C11.5911 10.8772 10.8657 10.1178 10.2164 9.37767Z"
    }
  }]
};
var mushroom1Filled = defineComponent({
  name: "Mushroom1FilledIcon",
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
    var finalCls = computed(() => ["t-icon", "t-icon-mushroom-1-filled", className.value]);
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

export default mushroom1Filled;
//# sourceMappingURL=mushroom-1-filled.js.map
