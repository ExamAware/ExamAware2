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
      "d": "M9.11454 21.8111C9.72135 22.3105 10.3529 22.7684 11 23.2136C11.5449 22.8389 12.0784 22.4552 12.5958 22.0451C11.7507 20.9178 11.25 19.5174 11.25 18C11.25 14.2721 14.2721 11.25 18 11.25C18.6504 11.25 19.2792 11.342 19.8743 11.5136C19.9559 11.0181 20 10.513 20 10C20 5.02944 15.9706 1 11 1C6.02944 1 2 5.02944 2 10C2 13.637 4.2179 16.8762 6.26196 19.112C7.30183 20.2494 8.33859 21.1725 9.11454 21.8111ZM11 13.25C9.20507 13.25 7.75 11.7949 7.75 10C7.75 8.20507 9.20507 6.75 11 6.75C12.7949 6.75 14.25 8.20507 14.25 10C14.25 11.7949 12.7949 13.25 11 13.25Z"
    }
  }, {
    "tag": "path",
    "attrs": {
      "fill": "props.filledColor",
      "d": "M18.9998 14.126C19.7147 14.31 20.3523 14.6867 20.8539 15.1975L22.0464 14.509L23.0464 16.241L21.8548 16.929C21.9493 17.2699 21.9998 17.629 21.9998 18C21.9998 18.371 21.9493 18.7301 21.8548 19.071L23.0464 19.759L22.0464 21.491L20.8539 20.8025C20.3523 21.3133 19.7147 21.69 18.9998 21.874V23.25H16.9998V21.874C16.2848 21.69 15.6472 21.3133 15.1457 20.8025L13.9531 21.491L12.9531 19.759L14.1447 19.071C14.0503 18.7301 13.9998 18.371 13.9998 18C13.9998 17.629 14.0503 17.2699 14.1447 16.929L12.9531 16.241L13.9531 14.509L15.1457 15.1975C15.6472 14.6867 16.2848 14.31 16.9998 14.126V12.75H18.9998V14.126ZM16.285 16.97L16.2485 17.0333C16.09 17.3198 15.9998 17.6494 15.9998 18C15.9998 18.3506 16.09 18.6802 16.2485 18.9667L16.285 19.03C16.6349 19.6112 17.2719 20 17.9998 20C18.7276 20 19.3646 19.6112 19.7145 19.03L19.751 18.9668C19.9095 18.6803 19.9998 18.3507 19.9998 18C19.9998 17.6493 19.9095 17.3197 19.751 17.0332L19.7145 16.97C19.3646 16.3888 18.7276 16 17.9998 16C17.2719 16 16.6349 16.3888 16.285 16.97Z"
    }
  }]
};
var locationSettingFilled = vue.defineComponent({
  name: "LocationSettingFilledIcon",
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
    var finalCls = vue.computed(() => ["t-icon", "t-icon-location-setting-filled", className.value]);
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

exports.default = locationSettingFilled;
//# sourceMappingURL=location-setting-filled.js.map
