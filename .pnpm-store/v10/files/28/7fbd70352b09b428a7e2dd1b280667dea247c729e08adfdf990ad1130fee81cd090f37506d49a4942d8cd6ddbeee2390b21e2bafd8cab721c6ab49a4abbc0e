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
    "tag": "g",
    "attrs": {
      "id": "wave-left"
    },
    "children": [{
      "tag": "path",
      "attrs": {
        "id": "fill1",
        "fill": "props.fillColor1",
        "d": "M6.3304 15.9222C5.78926 15.3811 5.78926 14.5037 6.3304 13.9626C6.87155 13.4214 7.74891 13.4214 8.29005 13.9626L6.20527 11.8778C5.66335 11.3359 5.66335 10.4573 6.20527 9.91534C6.74718 9.37342 7.62581 9.37342 8.16772 9.91534L6.80091 8.54852C6.25899 8.0066 6.25899 7.12798 6.80091 6.58607C7.34283 6.04415 8.22145 6.04415 8.76337 6.58607L10.1302 7.95288C9.58826 7.41096 9.58826 6.53234 10.1302 5.99042C10.6721 5.4485 11.5507 5.44851 12.0926 5.99042L17.5628 11.4606C17.5637 11.4615 17.5637 11.4591 17.5634 11.4579L16.8947 8.96228C16.7709 8.50016 16.9473 8.00975 17.3371 7.7324C17.8856 7.34213 18.6509 7.50679 18.9904 8.08814L21.2166 11.9005C22.6351 14.3295 22.2373 17.4094 20.2484 19.3984L19.4041 20.2427C16.9869 22.6598 13.068 22.6598 10.6508 20.2427L6.3304 15.9222Z"
      }
    }, {
      "tag": "path",
      "attrs": {
        "id": "stroke1",
        "stroke": "props.strokeColor1",
        "d": "M8.29005 13.9626L10.7348 16.4073M8.29005 13.9626L6.20527 11.8778C5.66335 11.3359 5.66335 10.4573 6.20527 9.91534C6.74718 9.37342 7.62581 9.37342 8.16772 9.91534M8.29005 13.9626C7.74891 13.4214 6.87155 13.4214 6.3304 13.9626C5.78926 14.5037 5.78926 15.3811 6.3304 15.9222L10.6508 20.2427C13.068 22.6598 16.9869 22.6598 19.4041 20.2427L20.2484 19.3984C22.2373 17.4094 22.6351 14.3295 21.2166 11.9005L18.9904 8.08814C18.6509 7.50679 17.8856 7.34213 17.3371 7.7324C16.9473 8.00975 16.7709 8.50016 16.8947 8.96228L17.5622 11.4534C17.5628 11.4559 17.5611 11.4589 17.5593 11.4571L12.0926 5.99042C11.5507 5.44851 10.6721 5.4485 10.1302 5.99042C9.58826 6.53234 9.58826 7.41096 10.1302 7.95288M8.16772 9.91534L12.6972 14.4449M8.16772 9.91534L6.80091 8.54852C6.25899 8.0066 6.25899 7.12798 6.80091 6.58607C7.34283 6.04415 8.22145 6.04415 8.76337 6.58607L10.1302 7.95288M10.1302 7.95288L14.6597 12.4824",
        "strokeLinecap": "square",
        "strokeWidth": "props.strokeWidth"
      }
    }, {
      "tag": "path",
      "attrs": {
        "id": "stroke2",
        "stroke": "props.strokeColor2",
        "d": "M2.86621 5.58521C3.62869 4.479 4.58845 3.51927 5.69469 2.75684",
        "strokeLinecap": "square",
        "strokeWidth": "props.strokeWidth"
      }
    }]
  }]
};
var waveLeft = vue.defineComponent({
  name: "WaveLeftIcon",
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
    var finalCls = vue.computed(() => ["t-icon", "t-icon-wave-left", className.value]);
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

exports.default = waveLeft;
//# sourceMappingURL=wave-left.js.map
