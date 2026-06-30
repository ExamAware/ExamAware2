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
      "d": "M4.98178 5.10982C6.40894 3.39722 8.68374 2 12 2C15.3163 2 17.5911 3.39722 19.0182 5.10982C20.0773 6.38067 20.6733 7.82942 20.8968 9H22V11H21V20H22V22H16.5V18.5C16.5 16.0147 14.4853 14 12 14C9.51472 14 7.5 16.0147 7.5 18.5V22H2V20H3V11H2V9H3.10317C3.32668 7.82942 3.92274 6.38067 4.98178 5.10982ZM18.8461 9C18.6403 8.231 18.2137 7.2685 17.4818 6.39018C16.7708 5.53703 15.7734 4.76496 14.4003 4.34117C14.5815 4.66019 14.7532 4.9995 14.9119 5.35201C15.4055 6.44866 15.799 7.73088 15.9419 9H18.8461ZM13.9261 9C13.7925 8.05122 13.4871 7.05935 13.0881 6.17299C12.8194 5.57591 12.5183 5.04984 12.2202 4.63657C12.144 4.53083 12.0703 4.43589 12 4.3512C11.9297 4.43589 11.856 4.53083 11.7798 4.63657C11.4817 5.04984 11.1806 5.57591 10.9119 6.17299C10.5129 7.05935 10.2075 8.05122 10.0739 9H13.9261ZM8.05806 9C8.20101 7.73088 8.59446 6.44866 9.08813 5.35201C9.24682 4.9995 9.41851 4.66019 9.59969 4.34117C8.22664 4.76496 7.22919 5.53703 6.51822 6.39018C5.78629 7.2685 5.35973 8.231 5.15392 9H8.05806Z"
    }
  }, {
    "tag": "path",
    "attrs": {
      "fill": "props.filledColor",
      "d": "M12 16C10.6193 16 9.5 17.1193 9.5 18.5V22H14.5V18.5C14.5 17.1193 13.3807 16 12 16Z"
    }
  }]
};
var shop2Filled = vue.defineComponent({
  name: "Shop2FilledIcon",
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
    var finalCls = vue.computed(() => ["t-icon", "t-icon-shop-2-filled", className.value]);
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

exports.default = shop2Filled;
//# sourceMappingURL=shop-2-filled.js.map
