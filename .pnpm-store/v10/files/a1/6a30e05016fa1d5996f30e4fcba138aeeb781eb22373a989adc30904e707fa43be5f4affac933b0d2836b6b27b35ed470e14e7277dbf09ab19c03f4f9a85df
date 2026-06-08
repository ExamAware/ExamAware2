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
      "d": "M15.0757 10.7062C15.4262 9.59704 15.6595 8.5216 15.7432 7.52501C15.8402 6.36801 15.7418 5.24609 15.3256 4.28816C14.8962 3.29966 14.1452 2.53048 13.0568 2.11521C11.3621 1.46853 9.72353 1.84042 8.31466 2.7077C6.92936 3.56048 5.70918 4.91873 4.70763 6.40285C4.30184 7.00415 3.92531 7.63597 3.58257 8.2788C3.07349 9.23352 2.63894 10.2126 2.29372 11.1521C1.72761 12.6928 1.37277 14.2056 1.36684 15.3702C1.29642 16.665 1.62209 17.7344 2.30071 18.5192C2.8009 19.0977 3.43919 19.4594 4.10948 19.6573C4.30732 20.3276 4.66897 20.9659 5.24736 21.4661C6.03211 22.1448 7.10153 22.4706 8.39634 22.4002C9.55778 22.3942 11.1185 22.0393 12.7199 21.4775C14.3547 20.904 16.1188 20.0842 17.6779 19.0919C19.2224 18.1089 20.6415 16.9087 21.4982 15.5456C22.3797 14.1432 22.6955 12.4973 21.8373 10.84C21.1919 9.59345 20.2064 8.64174 19.1704 8.00189C18.7243 7.72634 18.2559 7.50083 17.7863 7.33402C18.394 6.77012 19.2434 6.21998 20.2422 5.97021L21.2124 5.7276L20.7271 3.78735L19.757 4.02996C18.5294 4.33696 17.4634 4.96563 16.6417 5.67499C16.6585 5.86134 16.6658 6.04893 16.6641 6.23661C16.6498 7.79232 16.0329 9.42863 15.0757 10.7062Z"
    }
  }]
};
var meatPepperFilled = vue.defineComponent({
  name: "MeatPepperFilledIcon",
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
    var finalCls = vue.computed(() => ["t-icon", "t-icon-meat-pepper-filled", className.value]);
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

exports.default = meatPepperFilled;
//# sourceMappingURL=meat-pepper-filled.js.map
