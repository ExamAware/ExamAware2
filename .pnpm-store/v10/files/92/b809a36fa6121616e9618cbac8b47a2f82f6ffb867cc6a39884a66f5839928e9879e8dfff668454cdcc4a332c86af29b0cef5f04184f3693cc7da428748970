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
      "d": "M12.9993 1L12.9997 3.06187C13.7363 3.1537 14.4418 3.34567 15.1021 3.62372L16.1328 1.83856L17.8648 2.83856L16.8335 4.62481C17.4138 5.0655 17.9322 5.5836 18.3731 6.16374L20.1583 5.13305L21.1583 6.8651L19.3749 7.89475C19.6536 8.5559 19.846 9.26236 19.938 10H21.9995V12H19.938C19.8461 12.7372 19.6538 13.4432 19.3754 14.1038L21.1579 15.1329L20.1579 16.865L18.3739 15.835C17.7311 16.681 16.9238 17.3951 16.0001 17.9294V21.0002H18.9995V23.0002H4.99952V21.0002H8.00009L8.00009 17.9296C7.07564 17.3949 6.26781 16.6803 5.62471 15.8334L3.83777 16.8651L2.83777 15.133L4.62359 14.102C4.34562 13.4419 4.15365 12.7366 4.06179 12.0001L2.00018 12.0003L2 10.0003L4.06177 10.0001C4.15366 9.26308 4.34581 8.55721 4.62413 7.89655L2.83743 6.865L3.83743 5.13295L5.62551 6.1653C6.06626 5.58509 6.58441 5.06689 7.16457 4.62609L6.13276 2.83893L7.86481 1.83893L8.89573 3.62454C9.55652 3.34609 10.2625 3.15385 10.9997 3.06191L10.9993 1.00036L12.9993 1ZM10.0001 18.7478V21.0002H14.0001V18.7477C13.3602 18.9124 12.6898 19 11.9999 19C11.3101 19 10.6398 18.9125 10.0001 18.7478ZM15.4387 15.9176C16.1011 15.4535 16.6651 14.8593 17.0938 14.1722L17.2993 13.8163C17.7466 12.9763 17.9999 12.0175 17.9999 11C17.9999 9.96622 17.7384 8.99351 17.2781 8.14437L17.1176 7.86643C16.608 7.036 15.902 6.33911 15.0643 5.84047L14.9263 5.76081C14.0606 5.27623 13.0625 5 11.9999 5C8.68617 5 5.99988 7.68629 5.99988 11C5.99988 13.0334 7.01134 14.832 8.56129 15.9178L11.9993 8.66636L15.4387 15.9176Z"
    }
  }]
};
var ferrisWheelFilled = vue.defineComponent({
  name: "FerrisWheelFilledIcon",
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
    var finalCls = vue.computed(() => ["t-icon", "t-icon-ferris-wheel-filled", className.value]);
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

exports.default = ferrisWheelFilled;
//# sourceMappingURL=ferris-wheel-filled.js.map
