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
      "d": "M12 1C5.92487 1 1 5.92487 1 12C1 18.042 5.54478 22.8971 11.6525 22.8971C12.183 22.8971 12.7172 22.8217 13.1424 22.5468C13.6567 22.2143 13.8564 21.697 13.8419 21.209C13.8297 20.8004 13.6721 20.4347 13.5521 20.1961C13.4359 19.9652 13.2963 19.7438 13.2 19.5911L13.1731 19.5483C12.9286 19.1594 12.7989 18.743 12.8227 18.3628C12.8444 18.0158 12.9984 17.596 13.5249 17.1555C13.9295 16.8169 14.463 16.7376 15.3798 16.7739C15.5177 16.7794 15.6676 16.7882 15.8269 16.7976C16.603 16.8433 17.6033 16.9022 18.535 16.6508C21.0902 15.9613 22.8253 14.0956 22.9977 11.5309C23.4176 5.28585 17.931 1 12 1ZM9.75 7.00391C9.75 5.89934 10.6454 5.00391 11.75 5.00391C12.8546 5.00391 13.75 5.89934 13.75 7.00391C13.75 8.10848 12.8546 9.00391 11.75 9.00391C10.6454 9.00391 9.75 8.10848 9.75 7.00391ZM5.0293 10.0039C5.0293 8.89934 5.92473 8.00391 7.0293 8.00391C8.13387 8.00391 9.0293 8.89934 9.0293 10.0039C9.0293 11.1085 8.13387 12.0039 7.0293 12.0039C5.92473 12.0039 5.0293 11.1085 5.0293 10.0039ZM16.5176 8.00391C17.6221 8.00391 18.5176 8.89934 18.5176 10.0039C18.5176 11.1085 17.6221 12.0039 16.5176 12.0039C15.413 12.0039 14.5176 11.1085 14.5176 10.0039C14.5176 8.89934 15.413 8.00391 16.5176 8.00391Z"
    }
  }]
};
var paletteFilled = vue.defineComponent({
  name: "PaletteFilledIcon",
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
    var finalCls = vue.computed(() => ["t-icon", "t-icon-palette-filled", className.value]);
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

exports.default = paletteFilled;
//# sourceMappingURL=palette-filled.js.map
