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
      "d": "M1.59229 4.99313V19.007C1.59229 20.8311 3.08352 22.3106 4.92669 22.3106H19.0739C20.9157 22.3106 22.4075 20.8311 22.4075 19.007V18.8636C22.3455 18.838 16.9979 16.6282 14.2798 15.3334C12.446 17.5691 10.0808 18.9254 7.62498 18.9254C3.47231 18.9254 2.06212 15.3249 4.02841 12.9547C4.45713 12.438 5.18646 11.9444 6.31839 11.6681C8.08911 11.2371 10.9071 11.9372 13.5484 12.8007C14.0235 11.9336 14.4232 10.9787 14.7209 9.96195H6.58145V9.14532H10.7785V7.68083H5.69513V6.86366H10.7785V4.77467C10.7785 4.77467 10.7785 4.4228 11.1384 4.4228H13.1901V6.86359H18.2154V7.68097H13.1901V9.14532H17.2921C16.8996 10.7384 16.3036 12.2048 15.5554 13.4921C15.9967 13.6503 16.422 13.8055 16.8243 13.9524C17.5569 14.2198 18.2131 14.4594 18.7507 14.6377C21.5287 15.5586 22.3073 15.6712 22.4077 15.6829V4.99319C22.4077 3.16769 20.9158 1.68903 19.0741 1.68903L4.92669 1.68896C3.08352 1.68896 1.59229 3.16762 1.59229 4.99313Z"
    }
  }, {
    "tag": "path",
    "attrs": {
      "fill": "props.filledColor",
      "d": "M6.67164 12.8911C6.85201 12.8735 7.03108 12.8639 7.20932 12.8619C8.93241 12.8421 10.5729 13.5253 12.4777 14.4461C11.0003 16.355 9.11958 17.5472 7.23729 17.5472C3.99926 17.5472 3.04172 15.0203 4.64156 13.638C5.17532 13.1702 6.15163 12.9429 6.67164 12.8911Z"
    }
  }]
};
var logoAlipayFilled = vue.defineComponent({
  name: "LogoAlipayFilledIcon",
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
    var finalCls = vue.computed(() => ["t-icon", "t-icon-logo-alipay-filled", className.value]);
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

exports.default = logoAlipayFilled;
//# sourceMappingURL=logo-alipay-filled.js.map
