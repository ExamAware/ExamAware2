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
      "d": "M9 2H1V21H2C4.94416 21 7.13918 21.2453 8.5856 21.4864C9.30891 21.6069 9.84535 21.7265 10.195 21.8139C10.3698 21.8576 10.4979 21.8933 10.5794 21.917C10.6201 21.9289 10.6492 21.9378 10.6666 21.9432L10.6838 21.9487L10.6847 21.949L10.686 21.9494L10.8377 22H13.1623L13.314 21.9494L13.3162 21.9487L13.3334 21.9432C13.3508 21.9378 13.3799 21.9289 13.4206 21.917C13.5021 21.8933 13.6302 21.8576 13.805 21.8139C14.1546 21.7265 14.6911 21.6069 15.4144 21.4864C16.8608 21.2453 19.0558 21 22 21H23L23 2H15C13.8053 2 12.7329 2.52376 12 3.35418C11.2671 2.52375 10.1947 2 9 2ZM3 19.0093V4H9C10.1046 4 11 4.89543 11 6V19.9575C10.9117 19.9332 10.805 19.9049 10.68 19.8736C10.2796 19.7735 9.69108 19.6431 8.9144 19.5136C7.53508 19.2837 5.56349 19.0572 3 19.0093ZM16 10.5V11.5H14V10.5C14 8.84315 15.3431 7.5 17 7.5C18.6569 7.5 20 8.84315 20 10.5C20 11.1761 19.8282 11.7459 19.5259 12.2099C19.2288 12.6659 18.8429 12.9631 18.4972 13.1603C18.3243 13.2589 18.1536 13.3366 18.0034 13.3975V13.75H16.0034V12.75C16.0034 12.3263 16.2481 12.0627 16.3644 11.9601C16.4836 11.855 16.6042 11.7949 16.6602 11.7683C16.7666 11.7177 16.8935 11.6738 16.9686 11.6478L16.9869 11.6414C17.1775 11.5751 17.3462 11.5143 17.5062 11.423C17.6597 11.3355 17.7729 11.2368 17.8501 11.1182C17.9223 11.0075 18 10.8239 18 10.5C18 9.94772 17.5523 9.5 17 9.5C16.4477 9.5 16 9.94772 16 10.5ZM18.0039 14.5V16.5039H16V14.5H18.0039Z"
    }
  }]
};
var bookUnknownFilled = vue.defineComponent({
  name: "BookUnknownFilledIcon",
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
    var finalCls = vue.computed(() => ["t-icon", "t-icon-book-unknown-filled", className.value]);
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

exports.default = bookUnknownFilled;
//# sourceMappingURL=book-unknown-filled.js.map
