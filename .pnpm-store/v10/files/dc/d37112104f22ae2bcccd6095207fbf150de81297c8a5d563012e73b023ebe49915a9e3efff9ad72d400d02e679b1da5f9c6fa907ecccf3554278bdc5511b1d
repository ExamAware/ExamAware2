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
      "id": "rice-ball"
    },
    "children": [{
      "tag": "path",
      "attrs": {
        "id": "fill1",
        "fill": "props.fillColor1",
        "d": "M16 21.8103C14.7791 21.9256 13.4087 21.9965 12 22C10.5913 21.9965 9.22084 21.9256 8 21.8103V14H16L16 21.8103Z"
      }
    }, {
      "tag": "path",
      "attrs": {
        "id": "fill2",
        "fill": "props.fillColor2",
        "d": "M9.748 3.08604C6.67525 6.37422 2.96423 12.6201 2.0911 17.2918C1.82845 18.6971 2.09109 19.8286 3.44233 20.8433C3.94531 21.221 5.70943 21.5938 8.00005 21.8102V14H16.0001V21.8102C18.2906 21.5938 20.0547 21.221 20.5577 20.8433C21.9089 19.8286 22.1715 18.6971 21.9089 17.2918C21.0358 12.6201 17.3248 6.37422 14.252 3.08604C13.5754 2.36202 12.7877 2.00001 12 2C11.2123 2.00001 10.4246 2.36202 9.748 3.08604Z"
      }
    }, {
      "tag": "path",
      "attrs": {
        "id": "stroke1",
        "stroke": "props.strokeColor1",
        "d": "M16.0001 21.8102V14H8.00005V21.8102M2.0911 17.2918C2.96423 12.6201 6.67525 6.37422 9.748 3.08604C10.4246 2.36202 11.2123 2.00001 12 2C12.7877 2.00001 13.5754 2.36202 14.252 3.08604C17.3248 6.37422 21.0358 12.6201 21.9089 17.2918C22.1715 18.6971 21.9089 19.8286 20.5577 20.8433C19.7866 21.4223 16.0519 21.9899 12 22C7.9481 21.9899 4.21339 21.4223 3.44233 20.8433C2.09109 19.8286 1.82845 18.6971 2.0911 17.2918Z",
        "strokeWidth": "props.strokeWidth"
      }
    }, {
      "tag": "g",
      "attrs": {
        "id": "stroke2"
      },
      "children": [{
        "tag": "path",
        "attrs": {
          "stroke": "props.strokeColor2",
          "d": "M9.2959 10.1865H9.29942V10.1905H9.2959V10.1865Z",
          "strokeWidth": "props.strokeWidth"
        }
      }, {
        "tag": "path",
        "attrs": {
          "stroke": "props.strokeColor2",
          "d": "M11.998 6.12793H12.0016V6.13189H11.998V6.12793Z",
          "strokeWidth": "props.strokeWidth"
        }
      }, {
        "tag": "path",
        "attrs": {
          "stroke": "props.strokeColor2",
          "d": "M14.7007 10.1875H14.7042V10.1915H14.7007V10.1875Z",
          "strokeWidth": "props.strokeWidth"
        }
      }]
    }]
  }]
};
var riceBall = vue.defineComponent({
  name: "RiceBallIcon",
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
    var finalCls = vue.computed(() => ["t-icon", "t-icon-rice-ball", className.value]);
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

exports.default = riceBall;
//# sourceMappingURL=rice-ball.js.map
