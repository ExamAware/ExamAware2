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
      "id": "wave-bye"
    },
    "children": [{
      "tag": "path",
      "attrs": {
        "id": "fill1",
        "fill": "props.fillColor1",
        "d": "M6.40072 16.1019C5.85958 15.5608 5.85958 14.6834 6.40072 14.1423C6.94186 13.6011 7.81922 13.6011 8.36037 14.1423L6.27558 12.0575C5.73366 11.5156 5.73366 10.6369 6.27558 10.095C6.8175 9.55311 7.69612 9.55311 8.23804 10.095L6.87122 8.72821C6.3293 8.18629 6.3293 7.30767 6.87122 6.76575C7.41314 6.22384 8.29176 6.22384 8.83368 6.76575L10.2005 8.13257C9.65858 7.59065 9.65858 6.71203 10.2005 6.17011C10.7424 5.62819 11.621 5.62819 12.163 6.17011L17.6331 11.6403C17.634 11.6412 17.634 11.6388 17.6337 11.6376L16.965 9.14196C16.8412 8.67984 17.0176 8.18944 17.4074 7.91209C17.956 7.52182 18.7212 7.68647 19.0607 8.26783L21.287 12.0802C22.7054 14.5092 22.3076 17.5891 20.3187 19.578L19.4744 20.4223C17.0573 22.8395 13.1383 22.8395 10.7211 20.4223L6.40072 16.1019Z"
      }
    }, {
      "tag": "path",
      "attrs": {
        "id": "stroke1",
        "stroke": "props.strokeColor1",
        "d": "M8.36037 14.1423L10.8051 16.587M8.36037 14.1423L6.27558 12.0575C5.73366 11.5156 5.73366 10.6369 6.27558 10.095C6.8175 9.55311 7.69612 9.55311 8.23804 10.095M8.36037 14.1423C7.81922 13.6011 6.94186 13.6011 6.40072 14.1423C5.85958 14.6834 5.85958 15.5608 6.40072 16.1019L10.7211 20.4223C13.1383 22.8395 17.0573 22.8395 19.4744 20.4223L20.3187 19.578C22.3076 17.5891 22.7054 14.5092 21.287 12.0802L19.0607 8.26783C18.7212 7.68647 17.956 7.52182 17.4074 7.91209C17.0176 8.18944 16.8412 8.67984 16.965 9.14196L17.6325 11.6331C17.6331 11.6355 17.6314 11.6386 17.6296 11.6367L12.163 6.17011C11.621 5.62819 10.7424 5.62819 10.2005 6.17011C9.65858 6.71203 9.65858 7.59065 10.2005 8.13257M8.23804 10.095L12.7676 14.6245M8.23804 10.095L6.87122 8.72821C6.3293 8.18629 6.3293 7.30767 6.87122 6.76575C7.41314 6.22384 8.29176 6.22384 8.83368 6.76575L10.2005 8.13257M10.2005 8.13257L14.73 12.6621",
        "strokeLinecap": "square",
        "strokeWidth": "props.strokeWidth"
      }
    }, {
      "tag": "path",
      "attrs": {
        "id": "stroke2",
        "stroke": "props.strokeColor2",
        "d": "M5.76501 21.0637C4.65877 20.3013 3.699 19.3416 2.93652 18.2354M18.2354 2.93652C19.3416 3.699 20.3013 4.65877 21.0637 5.76501",
        "strokeLinecap": "square",
        "strokeWidth": "props.strokeWidth"
      }
    }]
  }]
};
var waveBye = vue.defineComponent({
  name: "WaveByeIcon",
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
    var finalCls = vue.computed(() => ["t-icon", "t-icon-wave-bye", className.value]);
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

exports.default = waveBye;
//# sourceMappingURL=wave-bye.js.map
