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
      "id": "banana"
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
          "d": "M18.0001 7.50098C17.3794 13.501 13.1106 16.253 8.23674 15.0718C5.15542 14.1025 4.22777 11.501 4.00005 10.501C3.77233 9.50098 4.23155 9.50602 4.96585 9.85568C5.70014 10.2053 8.11762 11.6743 11.0001 11.501C15.9358 11.2042 17.3226 8.88616 18.0001 7.50098Z"
        }
      }, {
        "tag": "path",
        "attrs": {
          "fill": "props.fillColor1",
          "d": "M21 4.1802L18 2.98047V7.50129C17.3793 13.5013 13.1105 16.2533 8.23668 15.0721C6.63432 14.6837 4.57637 14.0341 2.95083 13.1895C2.33917 12.8717 2 13.7136 2 14.5013C2 18.0013 7.42237 22.3043 14.0075 20.6236C20.5926 18.9428 23.7632 11.3288 21 7.50129V4.1802Z"
        }
      }]
    }, {
      "tag": "g",
      "attrs": {
        "id": "stroke1"
      },
      "children": [{
        "tag": "path",
        "attrs": {
          "stroke": "props.strokeColor1",
          "d": "M18.0001 7.50098C17.3794 13.501 13.1106 16.253 8.23674 15.0718C5.15542 14.1025 4.22777 11.501 4.00005 10.501C3.77233 9.50098 4.23155 9.50602 4.96585 9.85568C5.70014 10.2053 8.11762 11.6743 11.0001 11.501C15.9358 11.2042 17.3226 8.88616 18.0001 7.50098Z",
          "strokeLinecap": "square",
          "strokeWidth": "props.strokeWidth"
        }
      }, {
        "tag": "path",
        "attrs": {
          "stroke": "props.strokeColor1",
          "d": "M21 4.1802L18 2.98047V7.50129C17.3793 13.5013 13.1105 16.2533 8.23668 15.0721C6.63432 14.6837 4.57637 14.0341 2.95083 13.1895C2.33917 12.8717 2 13.7136 2 14.5013C2 18.0013 7.42237 22.3043 14.0075 20.6236C20.5926 18.9428 23.7632 11.3288 21 7.50129V4.1802Z",
          "strokeLinecap": "square",
          "strokeWidth": "props.strokeWidth"
        }
      }]
    }]
  }]
};
var banana = vue.defineComponent({
  name: "BananaIcon",
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
    var finalCls = vue.computed(() => ["t-icon", "t-icon-banana", className.value]);
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

exports.default = banana;
//# sourceMappingURL=banana.js.map
