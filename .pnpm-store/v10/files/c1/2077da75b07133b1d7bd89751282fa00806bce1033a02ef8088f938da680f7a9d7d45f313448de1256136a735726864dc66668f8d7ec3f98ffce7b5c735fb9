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
      "id": "logo-wechatpay",
      "fill": "props.strokeColor1",
      "d": "M12 2C15.7127 2 18.9934 3.5344 20.9852 5.88214L21.7472 6.91912C22.5459 8.18932 23 9.63327 23 11.1667C23 16.2299 18.075 20.3341 12 20.3341C10.745 20.3341 9.53301 20.1544 8.40932 19.8314C8.30711 19.8001 8.19839 19.7828 8.08596 19.7828C7.87473 19.7828 7.68301 19.8475 7.50182 19.9522L5.09368 21.3423C5.02647 21.381 4.96142 21.4107 4.88213 21.4107C4.67926 21.4107 4.51511 21.2462 4.51511 21.044C4.51511 20.9756 4.53552 20.9076 4.55539 20.8414C4.562 20.8194 4.56855 20.7976 4.57426 20.7761L5.06983 18.9267C5.0912 18.8492 5.10855 18.7746 5.10855 18.6931C5.10855 18.4469 4.98682 18.2289 4.80067 18.096C2.48174 16.4154 1 13.9292 1 11.1667C1 6.10391 5.92468 2 12 2ZM20.0048 7.92552L9.081 14.2325L9.00078 14.2789C8.90136 14.3291 8.78955 14.3579 8.67061 14.3579C8.39588 14.3579 8.15677 14.2065 8.03102 13.9828L5.98062 9.48311C5.95894 9.43541 5.94531 9.38151 5.94531 9.32886C5.94531 9.12629 6.10947 8.96214 6.31203 8.96214C6.39442 8.96214 6.4703 8.98908 6.53163 9.03492L8.89454 10.7174C9.06737 10.8304 9.27365 10.8967 9.49541 10.8967C9.62767 10.8967 9.75404 10.8719 9.87143 10.8292L19.0594 6.73975C17.4453 5.11296 14.9239 4 12 4C6.67234 4 3 7.53441 3 11.1667C3 13.1731 4.07345 15.0971 5.96976 16.4733C6.46957 16.8325 6.84664 17.3614 7.01373 17.978C7.3257 17.8616 7.68465 17.7828 8.08596 17.7828C8.39696 17.7828 8.6955 17.8296 8.97352 17.9126C9.91734 18.1828 10.9394 18.3341 12 18.3341C17.3272 18.3341 21 14.7995 21 11.1667C21 10.0611 20.6813 9.00289 20.0898 8.04129L20.0048 7.92552Z"
    }
  }]
};
var logoWechatpay = vue.defineComponent({
  name: "LogoWechatpayIcon",
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
    var finalCls = vue.computed(() => ["t-icon", "t-icon-logo-wechatpay", className.value]);
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

exports.default = logoWechatpay;
//# sourceMappingURL=logo-wechatpay.js.map
