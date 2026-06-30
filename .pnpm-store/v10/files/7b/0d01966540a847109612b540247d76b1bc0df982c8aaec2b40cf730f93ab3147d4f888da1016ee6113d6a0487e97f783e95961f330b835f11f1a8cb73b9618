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
      "id": "barbecue"
    },
    "children": [{
      "tag": "g",
      "attrs": {
        "id": "fill1"
      },
      "children": [{
        "tag": "path",
        "attrs": {
          "fill": "props.fillColor1",
          "d": "M14.0233 3.50281C14.6937 2.8324 15.7807 2.8324 16.4511 3.50281L20.4974 7.54909C21.1678 8.2195 21.1678 9.30645 20.4974 9.97686L19.2835 11.1907C18.6131 11.8612 17.5261 11.8612 16.8557 11.1907L12.8094 7.14446C12.139 6.47405 12.139 5.3871 12.8094 4.71669L14.0233 3.50281Z"
        }
      }, {
        "tag": "path",
        "attrs": {
          "fill": "props.fillColor1",
          "d": "M10.3817 7.14441C11.0521 6.474 12.1391 6.474 12.8095 7.14441L16.8558 11.1907C17.5262 11.8611 17.5262 12.9481 16.8558 13.6185L15.6419 14.8323C14.9715 15.5028 13.8845 15.5028 13.2141 14.8323L9.16785 10.7861C8.49744 10.1157 8.49744 9.0287 9.16785 8.35829L10.3817 7.14441Z"
        }
      }, {
        "tag": "path",
        "attrs": {
          "fill": "props.fillColor1",
          "d": "M6.73964 10.786C7.41005 10.1156 8.497 10.1156 9.16741 10.786L13.2137 14.8323C13.8841 15.5027 13.8841 16.5897 13.2137 17.2601L11.9998 18.4739C11.3294 19.1444 10.2424 19.1444 9.57204 18.4739L5.52576 14.4277C4.85535 13.7573 4.85535 12.6703 5.52576 11.9999L6.73964 10.786Z"
        }
      }]
    }, {
      "tag": "path",
      "attrs": {
        "id": "stroke1",
        "stroke": "props.strokeColor1",
        "d": "M7.54909 16.4512L5.93058 18.0697C5.26017 17.3993 4.17322 17.3993 3.50281 18.0697C2.8324 18.7401 2.8324 19.827 3.50281 20.4975C3.98561 20.9803 4.68445 21.1154 5.28817 20.9028M20.0926 3.90723L17.5 6.49979M12.8094 7.14446L16.8557 11.1907C17.5261 11.8612 18.6131 11.8612 19.2835 11.1907L20.4974 9.97686C21.1678 9.30645 21.1678 8.2195 20.4974 7.54909L16.4511 3.50281C15.7807 2.8324 14.6937 2.8324 14.0233 3.50281L12.8094 4.71669C12.139 5.3871 12.139 6.47405 12.8094 7.14446ZM12.8095 7.14441L16.8558 11.1907C17.5262 11.8611 17.5262 12.9481 16.8558 13.6185L15.6419 14.8323C14.9715 15.5028 13.8845 15.5028 13.2141 14.8323L9.16785 10.7861C8.49744 10.1157 8.49744 9.0287 9.16785 8.35829L10.3817 7.14441C11.0521 6.474 12.1391 6.474 12.8095 7.14441ZM9.16741 10.786L13.2137 14.8323C13.8841 15.5027 13.8841 16.5897 13.2137 17.2601L11.9998 18.4739C11.3294 19.1444 10.2424 19.1444 9.57204 18.4739L5.52576 14.4277C4.85535 13.7573 4.85535 12.6703 5.52576 11.9999L6.73964 10.786C7.41005 10.1156 8.497 10.1156 9.16741 10.786Z",
        "strokeLinecap": "square",
        "strokeWidth": "props.strokeWidth"
      }
    }]
  }]
};
var barbecue = vue.defineComponent({
  name: "BarbecueIcon",
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
    var finalCls = vue.computed(() => ["t-icon", "t-icon-barbecue", className.value]);
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

exports.default = barbecue;
//# sourceMappingURL=barbecue.js.map
