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
      "d": "M18 5C18.9214 5 19.8929 5.23169 20.676 5.75374C21.4671 6.28116 22 7.07483 22 8C22 8.92517 21.4671 9.71884 20.676 10.2463C19.8929 10.7683 18.9214 11 18 11C17.0786 11 16.107 10.7683 15.324 10.2463C14.5328 9.71884 14 8.92517 14 8C14 7.07483 14.5328 6.28116 15.324 5.75374C16.107 5.23169 17.0786 5 18 5ZM5.99999 10.8292C6.40944 10.6848 6.79381 10.4488 7.12131 10.1213C8.29288 8.94975 8.29288 7.05025 7.12131 5.87868C5.94974 4.70711 4.05024 4.70711 2.87867 5.87868C1.70709 7.05025 1.70709 8.94975 2.87867 10.1213C3.20616 10.4488 3.59053 10.6848 3.99999 10.8292V12H1.99999V14H3.99999V15.5857L1.58594 17.9986L2.99984 19.4132L5.00035 17.4135L7.00291 19.4132L8.41609 17.9979L5.99999 15.5854V14H7.99999V12H5.99999V10.8292ZM9.49999 7H12.5V9H9.49999V7ZM18 13C18.9214 13 19.8929 13.2317 20.676 13.7537C21.4671 14.2812 22 15.0748 22 16C22 16.9252 21.4671 17.7188 20.676 18.2463C19.8929 18.7683 18.9214 19 18 19C17.0786 19 16.107 18.7683 15.324 18.2463C14.5328 17.7188 14 16.9252 14 16C14 15.0748 14.5328 14.2812 15.324 13.7537C16.107 13.2317 17.0786 13 18 13ZM9.49999 15H12.5V17H9.49999V15Z"
    }
  }]
};
var usercaseFilled = vue.defineComponent({
  name: "UsercaseFilledIcon",
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
    var finalCls = vue.computed(() => ["t-icon", "t-icon-usercase-filled", className.value]);
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

exports.default = usercaseFilled;
//# sourceMappingURL=usercase-filled.js.map
