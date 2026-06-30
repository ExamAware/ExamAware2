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
      "d": "M11.0869 5.89858L9.60155 5.20575L10.6113 4.19601C12.932 1.87531 16.5704 1.67603 19.1178 3.59822L20.6055 2.85438L21.4999 4.64324L20.5664 5.11C22.3112 7.64249 22.0573 11.1369 19.8047 13.3894L18.795 14.3992L18.1012 12.9118C17.639 13.4037 17.0887 13.9813 16.6218 14.4481C16.1637 14.9063 15.9595 15.5212 15.6268 16.5228C15.5975 16.6111 15.5672 16.7024 15.5356 16.7968C15.1693 17.8928 14.6678 19.226 13.4415 20.4567C12.2333 21.6692 10.5966 22.5013 8.8194 22.6059C7.0177 22.7119 5.15084 22.0642 3.54366 20.4571C1.93712 18.8505 1.28771 16.9861 1.39273 15.1847C1.49632 13.4078 2.32809 11.7711 3.54076 10.5584C4.77314 9.32605 6.10706 8.82434 7.204 8.45892C7.30132 8.4265 7.39525 8.39543 7.48599 8.36542C8.4835 8.03548 9.09441 7.83341 9.55075 7.37707C10.0175 6.91034 10.5949 6.36047 11.0869 5.89858ZM17.179 10.9347L13.6271 10.3736L13.0661 6.82172L13.0415 6.81027C12.9173 6.92545 12.7753 7.05762 12.6222 7.20079C12.1017 7.68765 11.4619 8.2943 10.965 8.79128C10.1495 9.60677 9.05819 9.95993 8.15508 10.2522C8.04572 10.2876 7.93912 10.3221 7.83611 10.3564C6.81223 10.6975 5.84719 11.0804 4.95496 11.9726C4.04302 12.8846 3.46084 14.0747 3.38934 15.3011C3.31927 16.5031 3.73363 17.8186 4.95788 19.0429C6.1815 20.2665 7.4987 20.6802 8.70192 20.6094C9.92964 20.5371 11.1188 19.9542 12.0248 19.045C12.9128 18.1538 13.296 17.1882 13.6388 16.1627C13.6729 16.0607 13.7072 15.9552 13.7424 15.847C14.0365 14.9422 14.3916 13.8499 15.2076 13.0339C15.7049 12.5367 16.312 11.8969 16.7991 11.3765C16.9423 11.2236 17.0745 11.0817 17.1897 10.9575L17.179 10.9347Z"
    }
  }]
};
var eggplantFilled = vue.defineComponent({
  name: "EggplantFilledIcon",
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
    var finalCls = vue.computed(() => ["t-icon", "t-icon-eggplant-filled", className.value]);
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

exports.default = eggplantFilled;
//# sourceMappingURL=eggplant-filled.js.map
