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
      "d": "M16.0035 1V3.00396L14 3.00424V1.00027L16.0035 1ZM10.0524 2.63458L11.4699 4.05185L10.0529 5.4685L8.63643 4.05168L10.0524 2.63458ZM19.9515 2.63476L21.3674 4.05132L19.9516 5.46846L18.5337 4.05202L19.9515 2.63476ZM10.9588 6.05557C10.6775 6.01898 10.3908 6.00014 10.1 6.00014C6.60128 6.00014 3.7 8.74073 3.7 12.2001C3.7 12.288 3.70189 12.3755 3.70565 12.4626C2.12452 13.1582 1 14.7036 1 16.5335C1 18.3092 2.06313 19.8215 3.56833 20.5418L4.47036 20.9735L5.3337 19.1694L4.43167 18.7378C3.56612 18.3235 3 17.4801 3 16.5335C3 15.3905 3.83155 14.3911 5.00676 14.1311L5.95683 13.921L5.77273 12.9655C5.72505 12.7181 5.7 12.4623 5.7 12.2001C5.7 9.91577 7.63404 8.00014 10.1 8.00014C10.4834 8.00014 10.8538 8.04674 11.2061 8.13376C12.8892 8.54957 14.158 9.88428 14.4403 11.5056L14.5868 12.3473L15.4411 12.3339C15.4607 12.3336 15.4803 12.3335 15.5 12.3335C16.1446 12.3335 16.7444 12.4987 17.259 12.7844C18.3143 13.3703 19 14.4514 19 15.6668C19 17.0105 18.1598 18.1931 16.9118 18.718L15.99 19.1057L16.7654 20.9493L17.6872 20.5616C19.6183 19.7493 21 17.8774 21 15.6668C21 14.0925 20.2982 12.6885 19.1971 11.7183C19.7046 10.936 20 10.0022 20 9.00012C20 6.2387 17.7614 4.00012 15 4.00012C13.3383 4.00012 11.8672 4.81094 10.9588 6.05557ZM21 8.00004L23.0039 8.00029V10.0037H21V8.00004ZM11.998 13.9982H14.002V16.0021H11.998V13.9982ZM6.99805 15.9982H9.00195V18.0021H6.99805V15.9982ZM11.998 18.9982H14.002V21.0021H11.998V18.9982ZM6.99805 20.9982H9.00195V23.0021H6.99805V20.9982Z"
    }
  }]
};
var cloudyRainFilled = vue.defineComponent({
  name: "CloudyRainFilledIcon",
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
    var finalCls = vue.computed(() => ["t-icon", "t-icon-cloudy-rain-filled", className.value]);
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

exports.default = cloudyRainFilled;
//# sourceMappingURL=cloudy-rain-filled.js.map
