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
      "id": "thunderstorm-sunny"
    },
    "children": [{
      "tag": "path",
      "attrs": {
        "id": "fill2",
        "fill": "props.fillColor2",
        "d": "M15.4994 11.3333C15.4745 11.3333 15.4496 11.3335 15.4248 11.3339C15.071 9.30142 13.4927 7.66862 11.4453 7.16283C12.1108 5.878 13.4526 5 14.9994 5C17.2085 5 18.9994 6.79086 18.9994 9C18.9994 10.1467 18.5169 11.1807 17.7438 11.91C17.0832 11.5432 16.3167 11.3333 15.4994 11.3333Z"
      }
    }, {
      "tag": "path",
      "attrs": {
        "id": "stroke2",
        "stroke": "props.strokeColor2",
        "d": "M10.4997 22L13.022 18H9.02148L11.4997 14M15.4248 11.3339C15.4496 11.3335 15.4745 11.3333 15.4994 11.3333C16.3167 11.3333 17.0832 11.5432 17.7438 11.91C18.5169 11.1807 18.9994 10.1467 18.9994 9C18.9994 6.79086 17.2085 5 14.9994 5C13.4526 5 12.1108 5.878 11.4453 7.16283C13.4927 7.66862 15.071 9.30142 15.4248 11.3339ZM15 2L15.0035 2V2.00396L15 2.00396V2ZM19.952 4.04883L19.9545 4.05132L19.9517 4.05412L19.9492 4.05163L19.952 4.04883ZM22.004 9V9.00352H22V9H22.004ZM10.0561 4.05163L10.0536 4.05412L10.0508 4.05132L10.0533 4.04883L10.0561 4.05163Z",
        "strokeLinecap": "square",
        "strokeWidth": "props.strokeWidth"
      }
    }, {
      "tag": "path",
      "attrs": {
        "id": "stroke1",
        "stroke": "props.strokeColor1",
        "d": "M4 19.6397C2.81463 19.0724 2 17.8945 2 16.5333C2 14.8867 3.19223 13.5082 4.79079 13.1546C4.73117 12.8451 4.7 12.5261 4.7 12.2C4.7 9.32812 7.11766 7 10.1 7C12.7759 7 14.9972 8.87428 15.4254 11.3339C15.4502 11.3335 15.4751 11.3333 15.5 11.3333C17.9853 11.3333 20 13.2734 20 15.6667C20 17.4438 18.8891 18.9711 17.2995 19.6397",
        "strokeLinecap": "square",
        "strokeWidth": "props.strokeWidth"
      }
    }]
  }]
};
var thunderstormSunny = vue.defineComponent({
  name: "ThunderstormSunnyIcon",
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
    var finalCls = vue.computed(() => ["t-icon", "t-icon-thunderstorm-sunny", className.value]);
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

exports.default = thunderstormSunny;
//# sourceMappingURL=thunderstorm-sunny.js.map
