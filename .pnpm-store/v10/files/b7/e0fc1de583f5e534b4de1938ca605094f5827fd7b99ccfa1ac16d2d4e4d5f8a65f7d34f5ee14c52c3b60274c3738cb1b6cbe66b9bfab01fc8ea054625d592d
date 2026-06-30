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
      "id": "logo-instagram"
    },
    "children": [{
      "tag": "path",
      "attrs": {
        "id": "fill1",
        "fill": "props.fillColor1",
        "d": "M2 12C2 8.26154 2 6.3923 2.80385 5C3.33046 4.08788 4.08788 3.33046 5 2.80385C6.3923 2 8.26154 2 12 2C15.7385 2 17.6077 2 19 2.80385C19.9121 3.33046 20.6695 4.08788 21.1962 5C22 6.3923 22 8.26154 22 12C22 15.7385 22 17.6077 21.1962 19C20.6695 19.9121 19.9121 20.6695 19 21.1962C17.6077 22 15.7385 22 12 22C8.26154 22 6.3923 22 5 21.1962C4.08788 20.6695 3.33046 19.9121 2.80385 19C2 17.6077 2 15.7385 2 12Z"
      }
    }, {
      "tag": "path",
      "attrs": {
        "id": "fill2",
        "fill": "props.fillColor2",
        "d": "M16.5 12C16.5 14.4853 14.4853 16.5 12 16.5C9.51472 16.5 7.5 14.4853 7.5 12C7.5 9.51472 9.51472 7.5 12 7.5C14.4853 7.5 16.5 9.51472 16.5 12Z"
      }
    }, {
      "tag": "path",
      "attrs": {
        "id": "stroke1",
        "stroke": "props.strokeColor1",
        "d": "M2 12C2 8.26154 2 6.39231 2.80385 5C3.33046 4.08788 4.08788 3.33046 5 2.80385C6.39231 2 8.26154 2 12 2C15.7385 2 17.6077 2 19 2.80385C19.9121 3.33046 20.6695 4.08788 21.1962 5C22 6.39231 22 8.26154 22 12C22 15.7385 22 17.6077 21.1962 19C20.6695 19.9121 19.9121 20.6695 19 21.1962C17.6077 22 15.7385 22 12 22C8.26154 22 6.39231 22 5 21.1962C4.08788 20.6695 3.33046 19.9121 2.80385 19C2 17.6077 2 15.7385 2 12Z",
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
          "d": "M17.75 6.25H17.7539V6.25391H17.75V6.25Z",
          "strokeLinejoin": "round",
          "strokeWidth": "props.strokeWidth"
        }
      }, {
        "tag": "path",
        "attrs": {
          "stroke": "props.strokeColor2",
          "d": "M16.5 12C16.5 14.4853 14.4853 16.5 12 16.5C9.51472 16.5 7.5 14.4853 7.5 12C7.5 9.51472 9.51472 7.5 12 7.5C14.4853 7.5 16.5 9.51472 16.5 12Z",
          "strokeLinejoin": "round",
          "strokeWidth": "props.strokeWidth"
        }
      }]
    }]
  }]
};
var logoInstagram = vue.defineComponent({
  name: "LogoInstagramIcon",
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
    var finalCls = vue.computed(() => ["t-icon", "t-icon-logo-instagram", className.value]);
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

exports.default = logoInstagram;
//# sourceMappingURL=logo-instagram.js.map
