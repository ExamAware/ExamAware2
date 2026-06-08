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
      "d": "M17.5496 2.17352C15.9218 1.51685 14.4622 1.50634 13.2018 1.97099C11.9642 2.42724 11.022 3.3031 10.3289 4.24227C9.84383 4.89959 9.54259 5.63924 9.2942 6.24915C9.25616 6.34255 9.21932 6.43301 9.18328 6.51956C8.89431 7.2137 8.62293 7.76461 8.16023 8.22735C7.70445 8.68318 7.15662 8.9543 6.46088 9.24543C6.3737 9.28191 6.28271 9.31917 6.18868 9.35769C5.57798 9.6078 4.83878 9.91054 4.17911 10.393C3.2176 11.0962 2.3273 12.0415 1.87049 13.283C1.40456 14.5492 1.43268 16.0073 2.11049 17.629C3.28814 20.4464 6.09772 22.0752 9.19493 22.3193C12.3079 22.5646 15.8055 21.4351 18.5868 18.6538C21.5333 15.7073 22.6925 12.1966 22.4019 9.09571C22.1123 6.00621 20.3674 3.31021 17.5496 2.17352ZM6.76797 11.0336C6.69968 10.9653 6.63543 10.8946 6.5752 10.8218L6.73897 10.7542C6.8376 10.7136 6.9379 10.6722 7.03996 10.6295C7.7626 10.3272 8.54495 9.96446 9.22101 9.28833C9.90424 8.60503 10.2671 7.81958 10.5681 7.09643C10.6104 6.99485 10.6513 6.8951 10.6915 6.79713C10.7211 6.72481 10.7506 6.65294 10.7797 6.58252C10.8593 6.64725 10.9364 6.71673 11.0106 6.79097C12.1822 7.96255 12.1822 9.86204 11.0106 11.0336C9.83904 12.2052 7.93954 12.2052 6.76797 11.0336Z"
    }
  }]
};
var beanFilled = vue.defineComponent({
  name: "BeanFilledIcon",
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
    var finalCls = vue.computed(() => ["t-icon", "t-icon-bean-filled", className.value]);
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

exports.default = beanFilled;
//# sourceMappingURL=bean-filled.js.map
