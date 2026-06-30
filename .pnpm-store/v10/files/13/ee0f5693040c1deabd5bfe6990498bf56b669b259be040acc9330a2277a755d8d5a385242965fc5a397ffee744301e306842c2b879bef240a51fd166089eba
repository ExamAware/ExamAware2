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
      "d": "M2.0043 0.590088L2.00015 0.585938L0.585938 2.00015L3.82053 5.23475C3.61336 5.78365 3.5 6.37859 3.5 7C3.5 9.76142 5.73858 12 8.5 12C9.12141 12 9.71635 11.8866 10.2653 11.6795L12.6244 14.0386C12.4198 14.0131 12.2115 14 12 14H5C2.23858 14 0 16.2386 0 19V21H17V19C17 18.7885 16.9869 18.5802 16.9614 18.3756L22.0002 23.4144L23.4101 22.0045L2 0.594389L2.0043 0.590088Z"
    }
  }, {
    "tag": "path",
    "attrs": {
      "fill": "props.filledColor",
      "d": "M15.9126 11.6785L15.819 11.5849L16.3002 10.7479C16.431 10.5206 16.4998 10.2629 16.4999 10.0007C16.5 9.73847 16.4313 9.48079 16.3008 9.25336L15.8029 8.38612L17.5374 7.39035L18.0353 8.2576C18.3399 8.78826 18.5001 9.38952 18.4999 10.0014C18.4997 10.6133 18.3391 11.2144 18.034 11.7449L17.5355 12.6118L15.9126 11.6785Z"
    }
  }, {
    "tag": "path",
    "attrs": {
      "fill": "props.filledColor",
      "d": "M13.1286 8.89455L6.60545 2.37141C7.18976 2.13199 7.82947 2 8.5 2C11.2614 2 13.5 4.23858 13.5 7C13.5 7.67053 13.368 8.31024 13.1286 8.89455Z"
    }
  }, {
    "tag": "path",
    "attrs": {
      "fill": "props.filledColor",
      "d": "M21.0703 6.51519L20.5724 5.64795L18.8379 6.64371L19.3358 7.51096C19.771 8.26904 19.9999 9.12798 19.9995 10.0021C19.9992 10.8763 19.7698 11.735 19.334 12.4928L18.8355 13.3597L20.5693 14.3567L21.0678 13.4898C21.6779 12.4289 21.9991 11.2266 21.9995 10.0028C22 8.77903 21.6796 7.57652 21.0703 6.51519Z"
    }
  }]
};
var userTalkOff1Filled = vue.defineComponent({
  name: "UserTalkOff1FilledIcon",
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
    var finalCls = vue.computed(() => ["t-icon", "t-icon-user-talk-off-1-filled", className.value]);
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

exports.default = userTalkOff1Filled;
//# sourceMappingURL=user-talk-off-1-filled.js.map
