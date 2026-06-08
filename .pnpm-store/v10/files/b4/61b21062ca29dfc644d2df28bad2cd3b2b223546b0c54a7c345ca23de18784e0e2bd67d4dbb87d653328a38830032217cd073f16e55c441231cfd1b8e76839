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
      "d": "M16.5246 4.11021L17.5038 5.08941L19.5902 3.00476C19.2207 2.94277 18.8053 2.99898 18.3327 3.15729C17.7228 3.36155 17.1007 3.71562 16.5246 4.11021ZM20.9977 4.42572L18.918 6.50363L19.89 7.47562C20.2837 6.90148 20.637 6.2816 20.8414 5.67359C20.9989 5.20542 21.0561 4.79309 20.9977 4.42572ZM18.6616 9.07563L17.5032 7.91725L15.9294 9.48978L17.2666 10.828C17.7317 10.244 18.1967 9.65983 18.6616 9.07563ZM16.0121 12.4022L14.5146 10.9034L12.4548 12.9614C13.4509 12.9075 14.4489 13.0014 15.3573 13.2236L16.0121 12.4022ZM17.3218 13.9678C17.7182 14.1751 18.0571 14.3896 18.3319 14.5822C19.1723 15.1711 19.8585 15.9441 20.5811 16.6667L18.6772 16.984C18.6231 16.9961 18.5698 17.012 18.517 17.0285C18.3718 17.0739 18.1301 17.16 17.7916 17.3151C17.1145 17.6254 16.0505 18.2119 14.6 19.2998C14.45 19.4123 14.2745 19.5497 14.0768 19.7044C13.0734 20.49 11.5006 21.7213 9.82029 22.3912C8.79099 22.8015 7.62428 23.0466 6.4386 22.8139C5.26564 22.5836 4.19192 21.9088 3.28527 20.7145C2.09096 19.8079 1.41616 18.7341 1.18589 17.5612C0.953135 16.3755 1.19824 15.2088 1.60857 14.1795C2.27844 12.4991 3.50973 10.9264 4.29534 9.92294C4.45007 9.7253 4.58752 9.54974 4.69998 9.39979C5.78787 7.94926 6.37433 6.88523 6.68466 6.20814C6.83978 5.86969 6.92591 5.62793 6.97128 5.48277C7.00004 5.39072 7.01246 5.33739 7.01572 5.32258L7.33304 3.41864C8.05329 4.13889 8.82424 4.82302 9.41213 5.66004C9.60312 5.93196 9.8159 6.26716 10.0221 6.65915L14.3778 3.21689C15.2029 2.55707 16.404 1.69406 17.6975 1.26084C19.0262 0.815796 20.6308 0.781808 21.9279 2.08584C23.2204 3.38528 23.1827 4.98598 22.7371 6.31104C22.303 7.60204 21.4411 8.79998 20.7816 9.62355L20.7805 9.62494L20.7777 9.62852C19.6262 11.0754 18.4744 12.5219 17.3218 13.9678ZM14.9218 5.33577L13.165 6.72309L14.5158 8.07499L16.089 6.50304L14.9218 5.33577ZM13.101 9.48861L11.5856 7.97204L10.7701 8.6181C10.9971 9.53509 11.0931 10.5435 11.0382 11.5497L13.101 9.48861Z"
    }
  }]
};
var cornFilled = vue.defineComponent({
  name: "CornFilledIcon",
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
    var finalCls = vue.computed(() => ["t-icon", "t-icon-corn-filled", className.value]);
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

exports.default = cornFilled;
//# sourceMappingURL=corn-filled.js.map
