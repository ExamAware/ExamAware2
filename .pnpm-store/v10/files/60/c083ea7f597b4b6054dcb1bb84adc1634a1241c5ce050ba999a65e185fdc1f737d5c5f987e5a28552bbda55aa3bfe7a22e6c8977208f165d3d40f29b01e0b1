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
      "d": "M23 2H1V18H11.7682C11.7562 17.8349 11.75 17.6682 11.75 17.5C11.75 16.2178 12.1075 15.019 12.7283 13.998H3V3.99805H21V11.2281C21.7402 11.5234 22.4159 11.946 23 12.4688V2Z"
    }
  }, {
    "tag": "path",
    "attrs": {
      "fill": "props.filledColor",
      "d": "M3 20H12.2281C12.5234 20.7402 12.946 21.4159 13.4688 22H3V20Z"
    }
  }, {
    "tag": "path",
    "attrs": {
      "fill": "props.filledColor",
      "d": "M19.4998 13.376V12H17.4998V13.376C16.7848 13.56 16.1472 13.9367 15.6457 14.4475L14.4531 13.759L13.4531 15.491L14.6447 16.179C14.5503 16.5199 14.4998 16.879 14.4998 17.25C14.4998 17.621 14.5503 17.9801 14.6447 18.321L13.4531 19.009L14.4531 20.741L15.6457 20.0525C16.1472 20.5633 16.7848 20.94 17.4998 21.124V22.5H19.4998V21.124C20.2147 20.94 20.8523 20.5633 21.3539 20.0525L22.5464 20.741L23.5464 19.009L22.3548 18.321C22.4493 17.9801 22.4998 17.621 22.4998 17.25C22.4998 16.879 22.4493 16.5199 22.3548 16.179L23.5464 15.491L22.5464 13.759L21.3539 14.4475C20.8523 13.9367 20.2147 13.56 19.4998 13.376ZM16.785 16.22C17.1349 15.6388 17.7719 15.25 18.4998 15.25C19.2276 15.25 19.8646 15.6388 20.2145 16.22L20.251 16.2832C20.4095 16.5698 20.4998 16.8993 20.4998 17.25C20.4998 17.6007 20.4095 17.9302 20.251 18.2168L20.2145 18.28C19.8646 18.8612 19.2276 19.25 18.4998 19.25C17.7719 19.25 17.1349 18.8612 16.785 18.28L16.7485 18.2167C16.59 17.9302 16.4998 17.6006 16.4998 17.25C16.4998 16.8994 16.59 16.5698 16.7485 16.2833L16.785 16.22Z"
    }
  }]
};
var systemSettingFilled = vue.defineComponent({
  name: "SystemSettingFilledIcon",
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
    var finalCls = vue.computed(() => ["t-icon", "t-icon-system-setting-filled", className.value]);
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

exports.default = systemSettingFilled;
//# sourceMappingURL=system-setting-filled.js.map
