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
      "d": "M13.0003 3.57339C13.0265 7.04273 14.9123 10.0695 17.7103 11.7062C14.0995 10.7591 11.3743 7.62526 11.0355 3.80541C11.0211 3.80517 11.0067 3.80495 10.9923 3.80477C10.3318 3.79621 9.60889 3.84736 8.90924 3.9476C8.21144 4.04759 7.51241 4.19989 6.90495 4.40331C6.32977 4.5959 5.71185 4.87424 5.2932 5.29289L4.71351 5.87258L6.80029 9.00275C5.98691 10.2591 5.20065 11.7141 5.03302 14.0575C4.84375 14.0766 4.63389 14.1023 4.41075 14.1366C3.55384 14.2685 2.37934 14.5455 1.4456 15.1679L0.430664 15.8446L8.15573 23.5696L8.83235 22.5547C9.39533 21.7102 9.70212 20.9649 9.85588 20.1961C9.93856 19.7827 9.97393 19.3732 9.98905 18.9649C11.6933 18.8476 13.8257 18.42 15.6011 17.4421L16.7209 19.6918L17.7038 18.7088C18.8923 17.5203 19.5832 16.1272 19.9767 15.0562C20.1749 14.5168 20.3017 14.048 20.3796 13.7102C20.4064 13.5941 20.4275 13.4931 20.4438 13.4095C21.7293 11.65 22.1957 9.59882 22.3087 7.85937C22.4261 6.05294 22.169 4.48803 21.9654 3.73802L21.8011 3.13295L21.1849 3.01719C18.073 2.43258 15.2739 2.50377 13.0003 3.57339ZM19.4174 6.49726L18.0002 7.91415L16.5834 6.49726L18.0002 5.08026L19.4174 6.49726Z"
    }
  }]
};
var fishFilled = vue.defineComponent({
  name: "FishFilledIcon",
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
    var finalCls = vue.computed(() => ["t-icon", "t-icon-fish-filled", className.value]);
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

exports.default = fishFilled;
//# sourceMappingURL=fish-filled.js.map
