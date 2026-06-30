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
      "d": "M13 1V2H16V8H15.0226C15.102 9.8724 15.3927 12.3528 15.9258 14.7313C16.2426 16.1448 16.64 17.499 17.1179 18.6556C17.4733 19.5155 17.8587 20.2302 18.2633 20.7737C18.3376 20.856 18.4049 20.9318 18.4644 21H20V23H14V21H15.6744C15.5853 20.9183 15.4935 20.8361 15.3992 20.754C14.8585 20.2831 14.2581 19.833 13.6504 19.5049C13.0353 19.1728 12.4761 19 12 19C11.5239 19 10.9647 19.1728 10.3496 19.5049C9.74188 19.833 9.14146 20.2831 8.60079 20.754C8.50653 20.8361 8.41471 20.9183 8.32561 21H10V23H4V21H5.53562C5.59513 20.9318 5.66236 20.856 5.73673 20.7737C6.14129 20.2302 6.52668 19.5155 6.88206 18.6556C7.36004 17.499 7.75739 16.1448 8.07421 14.7313C8.60731 12.3528 8.89796 9.8724 8.97739 8H8V2H11V1H13ZM10.979 8C10.8994 10.0097 10.5914 12.6454 10.0258 15.1687C9.82635 16.0585 9.59305 16.9428 9.32324 17.7867C9.34854 17.7727 9.37391 17.7588 9.39934 17.7451C10.1732 17.3272 11.0681 17 12 17C12.9319 17 13.8268 17.3272 14.6007 17.7451C14.6261 17.7588 14.6515 17.7727 14.6768 17.7867C14.407 16.9428 14.1737 16.0585 13.9742 15.1687C13.4086 12.6454 13.1006 10.0097 13.021 8H10.979Z"
    }
  }]
};
var towerFilled = vue.defineComponent({
  name: "TowerFilledIcon",
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
    var finalCls = vue.computed(() => ["t-icon", "t-icon-tower-filled", className.value]);
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

exports.default = towerFilled;
//# sourceMappingURL=tower-filled.js.map
