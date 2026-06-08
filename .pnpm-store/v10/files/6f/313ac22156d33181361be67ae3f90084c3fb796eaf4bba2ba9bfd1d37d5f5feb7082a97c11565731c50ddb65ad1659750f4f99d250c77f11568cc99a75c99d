'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var defineProperty = require('../_chunks/dep-23fc4c9b.js');
var vue = require('vue');
var utils_renderFn = require('../utils/render-fn.js');
var utils_useSizeProps = require('../utils/use-size-props.js');
require('../utils/use-common-classname.js');
require('../utils/config-context.js');

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { defineProperty._defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
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
      "d": "M16.1313 0.901367L16.029 2.08597C16.0178 2.21553 16.0121 2.34687 16.0121 2.47979C16.0121 4.96789 18.0291 6.98489 20.5172 6.98489C20.6501 6.98489 20.7814 6.97917 20.911 6.96798L22.0956 6.8657L21.9933 8.0503C21.8458 9.75856 21.0391 11.2761 19.8311 12.3493C20.5702 13.2552 21.0167 14.4038 21.0167 15.6588C21.0167 17.871 19.634 19.7444 17.7014 20.5572L16.7796 20.9449L16.0042 19.1014L16.926 18.7137C18.1755 18.1881 19.0167 17.0041 19.0167 15.6588C19.0167 14.6066 18.5051 13.6582 17.6842 13.0396C17.5545 12.9419 17.4174 12.8527 17.2737 12.7729C16.7584 12.4868 16.1579 12.3214 15.5125 12.3214C15.5007 12.3214 15.4889 12.3215 15.4771 12.3216C15.4692 12.3217 15.4614 12.3218 15.4535 12.3219L14.5993 12.3352L14.4527 11.4935C14.1701 9.87034 12.8999 8.53412 11.2149 8.11784C10.8622 8.03072 10.4913 7.98406 10.1075 7.98406C10.0861 7.98406 10.0647 7.98421 10.0434 7.9845C7.60508 8.01758 5.70251 9.9216 5.70251 12.1889C5.70251 12.4514 5.72758 12.7074 5.77532 12.9552L5.95942 13.9106L5.00935 14.1208C3.83266 14.381 3 15.3817 3 16.5262C3 17.4741 3.56688 18.3187 4.43353 18.7334L5.33556 19.1651L4.47222 20.9692L3.57019 20.5375C2.06388 19.8166 1 18.3032 1 16.5262C1 14.6949 2.1256 13.1481 3.70819 12.4522C3.70441 12.3648 3.70251 12.277 3.70251 12.1889C3.70251 9.04272 6.1007 6.49027 9.16605 6.05095C9.77898 3.32609 12.1 1.24945 14.9467 1.00365L16.1313 0.901367ZM12.8767 13.656L10.8177 16.9794H14.8352L10.8125 23.3587L9.12075 22.2919L11.2096 18.9794H7.2259L11.1766 12.6027L12.8767 13.656Z"
    }
  }]
};
var thunderstormNightFilled = vue.defineComponent({
  name: "ThunderstormNightFilledIcon",
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
    var propsSize = vue.computed(() => props.size);
    var strokeColor1 = vue.computed(() => {
      if (!props.strokeColor) return "currentColor";
      return Array.isArray(props.strokeColor) ? props.strokeColor[0] : props.strokeColor;
    });
    var strokeColor2 = vue.computed(() => {
      var _props$strokeColor$;
      if (!props.strokeColor) return "currentColor";
      return Array.isArray(props.strokeColor) ? (_props$strokeColor$ = props.strokeColor[1]) !== null && _props$strokeColor$ !== void 0 ? _props$strokeColor$ : props.strokeColor[0] : props.strokeColor;
    });
    var fillColor1 = vue.computed(() => {
      if (!props.fillColor) return "transparent";
      return Array.isArray(props.fillColor) ? props.fillColor[0] : props.fillColor;
    });
    var fillColor2 = vue.computed(() => {
      var _props$fillColor$;
      if (!props.fillColor) return "transparent";
      return Array.isArray(props.fillColor) ? (_props$fillColor$ = props.fillColor[1]) !== null && _props$fillColor$ !== void 0 ? _props$fillColor$ : props.fillColor[0] : props.fillColor;
    });
    var filledColor = vue.computed(() => {
      if (!props.fillColor) return "currentColor";
      return Array.isArray(props.fillColor) ? props.fillColor[0] : props.fillColor;
    });
    var {
      className,
      style
    } = utils_useSizeProps['default'](propsSize);
    var finalCls = vue.computed(() => ["t-icon", "t-icon-thunderstorm-night-filled", className.value]);
    var finalStyle = vue.computed(() => _objectSpread(_objectSpread({
      fill: "none"
    }, style.value), attrs.style));
    var finalProps = vue.computed(() => ({
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
    return () => utils_renderFn['default'](element, finalProps.value);
  }
});

exports.default = thunderstormNightFilled;
//# sourceMappingURL=thunderstorm-night-filled.js.map
