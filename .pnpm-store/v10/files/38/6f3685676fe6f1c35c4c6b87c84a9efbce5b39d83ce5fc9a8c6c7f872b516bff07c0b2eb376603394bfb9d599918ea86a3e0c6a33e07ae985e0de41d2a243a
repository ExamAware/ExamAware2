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
      "d": "M6 2H18V4H17V8H22V12.8365C21.2441 12.3092 20.3248 12 19.3333 12C17.846 12 16.5212 12.6958 15.6667 13.7796C14.8121 12.6958 13.4873 12 12 12C10.5127 12 9.18789 12.6958 8.33333 13.7796C7.47878 12.6958 6.15398 12 4.66667 12C3.67517 12 2.75589 12.3092 2 12.8365V8H7V4H6V2ZM11.0195 8H13.0215V6.00439H11.0195V8Z"
    }
  }, {
    "tag": "path",
    "attrs": {
      "fill": "props.filledColor",
      "d": "M19.3333 14C20.8061 14 22 15.1939 22 16.6667V22H16.6667V16.6667C16.6667 15.1939 17.8606 14 19.3333 14Z"
    }
  }, {
    "tag": "path",
    "attrs": {
      "fill": "props.filledColor",
      "d": "M14.6667 16.6667V22H9.33333V16.6667C9.33333 15.1939 10.5272 14 12 14C13.4728 14 14.6667 15.1939 14.6667 16.6667Z"
    }
  }, {
    "tag": "path",
    "attrs": {
      "fill": "props.filledColor",
      "d": "M7.33333 16.6667V22H2V16.6667C2 15.1939 3.19391 14 4.66667 14C6.13943 14 7.33333 15.1939 7.33333 16.6667Z"
    }
  }]
};
var castle6Filled = vue.defineComponent({
  name: "Castle6FilledIcon",
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
    var finalCls = vue.computed(() => ["t-icon", "t-icon-castle-6-filled", className.value]);
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

exports.default = castle6Filled;
//# sourceMappingURL=castle-6-filled.js.map
