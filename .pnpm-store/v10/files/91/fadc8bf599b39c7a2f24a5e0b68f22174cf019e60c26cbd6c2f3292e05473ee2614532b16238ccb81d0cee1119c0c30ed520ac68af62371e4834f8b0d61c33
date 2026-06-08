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
      "id": "candy"
    },
    "children": [{
      "tag": "path",
      "attrs": {
        "id": "fill1",
        "fill": "props.fillColor1",
        "d": "M5.91391 13.9139C5.13286 13.1329 5.13286 11.8665 5.91391 11.0855L11.0855 5.91391C11.8665 5.13286 13.1329 5.13286 13.9139 5.91391L18.0855 10.0855C18.8665 10.8665 18.8665 12.1329 18.0855 12.9139L12.9139 18.0855C12.1329 18.8665 10.8665 18.8665 10.0855 18.0855L5.91391 13.9139Z"
      }
    }, {
      "tag": "g",
      "attrs": {
        "id": "fill2"
      },
      "children": [{
        "tag": "path",
        "attrs": {
          "fill": "props.fillColor2",
          "d": "M17.0093 3.00913C16.4098 2.40962 15.383 2.78134 15.3063 3.6257L15.0844 6.06652C15.0307 6.65765 15.2423 7.2421 15.662 7.66181L16.3372 8.33705C16.7569 8.75676 17.3414 8.96836 17.9325 8.91462L20.3733 8.69272C21.2177 8.61596 21.5894 7.58923 20.9899 6.98972L17.0093 3.00913Z"
        }
      }, {
        "tag": "path",
        "attrs": {
          "fill": "props.fillColor2",
          "d": "M3.00913 17.0097C2.40962 16.4102 2.78134 15.3835 3.6257 15.3067L6.99943 15L8.99943 17L8.69272 20.3737C8.61596 21.2181 7.58923 21.5898 6.98972 20.9903L3.00913 17.0097Z"
        }
      }]
    }, {
      "tag": "g",
      "attrs": {
        "id": "stroke2"
      },
      "children": [{
        "tag": "path",
        "attrs": {
          "stroke": "props.strokeColor2",
          "d": "M17.0093 3.00913C16.4098 2.40962 15.383 2.78134 15.3063 3.6257L15.0844 6.06652C15.0307 6.65765 15.2423 7.2421 15.662 7.66181L16.3372 8.33705C16.7569 8.75676 17.3414 8.96836 17.9325 8.91462L20.3733 8.69272C21.2177 8.61596 21.5894 7.58923 20.9899 6.98972L17.0093 3.00913Z",
          "strokeLinecap": "square",
          "strokeWidth": "props.strokeWidth"
        }
      }, {
        "tag": "path",
        "attrs": {
          "stroke": "props.strokeColor2",
          "d": "M3.00913 17.0097C2.40962 16.4102 2.78134 15.3835 3.6257 15.3067L6.99943 15L8.99943 17L8.69272 20.3737C8.61596 21.2181 7.58924 21.5898 6.98972 20.9903L3.00913 17.0097Z",
          "strokeLinecap": "square",
          "strokeWidth": "props.strokeWidth"
        }
      }]
    }, {
      "tag": "path",
      "attrs": {
        "id": "stroke1",
        "stroke": "props.strokeColor1",
        "d": "M8.49951 8.5L15.4995 15.5M12.9139 18.0855L18.0855 12.9139C18.8665 12.1329 18.8665 10.8665 18.0855 10.0855L13.9139 5.91391C13.1329 5.13286 11.8665 5.13286 11.0855 5.91391L5.91391 11.0855C5.13286 11.8665 5.13286 13.1329 5.91391 13.9139L10.0855 18.0855C10.8665 18.8665 12.1329 18.8665 12.9139 18.0855Z",
        "strokeLinecap": "square",
        "strokeWidth": "props.strokeWidth"
      }
    }]
  }]
};
var candy = vue.defineComponent({
  name: "CandyIcon",
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
    var finalCls = vue.computed(() => ["t-icon", "t-icon-candy", className.value]);
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

exports.default = candy;
//# sourceMappingURL=candy.js.map
