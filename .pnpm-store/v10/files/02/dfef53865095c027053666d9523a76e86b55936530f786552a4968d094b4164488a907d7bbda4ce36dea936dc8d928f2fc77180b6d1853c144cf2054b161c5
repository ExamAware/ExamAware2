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
      "d": "M19.8646 6.99553C21.8176 7.75066 23.2027 9.64657 23.2027 11.866C23.2027 14.7489 20.8656 17.086 17.9827 17.086C17.3381 17.086 16.7208 16.9692 16.1508 16.7555C16.9665 17.2833 17.9388 17.5897 18.9827 17.5897C19.6296 17.5897 20.249 17.472 20.8207 17.2569C20.6453 19.5995 18.689 21.4457 16.3015 21.4457C14.2284 21.4457 12.4804 20.0536 11.9412 18.1533C11.7687 18.1451 11.5063 18.1813 11.1336 18.3178C10.6361 18.5001 10.0746 18.8125 9.508 19.1916C8.37661 19.9485 7.37094 20.8714 7.04984 21.1925L6.34274 21.8996L2.1001 17.6569L2.8072 16.9498C3.27498 16.482 3.963 15.2906 4.53193 13.9523C4.80653 13.3063 5.03367 12.6723 5.18039 12.1384C5.2529 11.8746 5.2976 11.6634 5.32353 11.5024C4.06667 10.5492 3.2549 9.03969 3.2549 7.34061C3.2549 4.45768 5.59197 2.12061 8.4749 2.12061C9.45073 2.12061 10.364 2.38837 11.1453 2.85443L11.1518 2.84794L11.4021 3.01782C12.6285 3.85017 13.4797 5.18792 13.6594 6.72756L13.6627 6.75559C13.6842 6.53668 13.6952 6.31468 13.6952 6.09012C13.6952 4.54612 13.1745 3.12375 12.2991 1.98902C13.0307 1.58674 13.8711 1.35791 14.765 1.35791C17.5954 1.35791 19.89 3.65245 19.89 6.48291C19.89 6.65592 19.8814 6.82693 19.8646 6.99553ZM12.0729 15.2802C12.1057 15.1888 12.1413 15.0983 12.1799 15.0088L11.2925 14.1214L9.87827 15.5356L8.46406 14.1214L9.87827 12.7072L9.6099 12.4388C8.7904 12.6553 7.95832 12.6443 7.17022 12.4351C7.15053 12.5138 7.12997 12.5917 7.10888 12.6684C6.93294 13.3086 6.67265 14.0287 6.37253 14.7347C5.95209 15.7237 5.41098 16.7852 4.85578 17.5842L6.36984 19.0982C6.8974 18.6356 7.61606 18.051 8.39594 17.5293C9.02906 17.1057 9.73919 16.6987 10.4456 16.4399C10.8669 16.2855 11.3447 16.1624 11.8332 16.1527C11.8842 15.8506 11.9652 15.5587 12.0729 15.2802Z"
    }
  }]
};
var broccoliFilled = vue.defineComponent({
  name: "BroccoliFilledIcon",
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
    var finalCls = vue.computed(() => ["t-icon", "t-icon-broccoli-filled", className.value]);
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

exports.default = broccoliFilled;
//# sourceMappingURL=broccoli-filled.js.map
