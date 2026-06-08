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
      "d": "M1.00024 20.8441L1.00024 3.15601L2.2873 3.54212L2.28916 3.54268L2.2979 3.54527L2.33643 3.55654C2.37132 3.56667 2.42441 3.58191 2.49448 3.60153C2.63465 3.64077 2.84261 3.69751 3.10866 3.76592C3.64104 3.90282 4.40444 4.08607 5.32136 4.26946C7.16187 4.63756 9.59096 5.00004 12.0002 5.00004C14.4095 5.00004 16.8386 4.63756 18.6791 4.26946C19.5961 4.08607 20.3594 3.90282 20.8918 3.76592C21.1579 3.69751 21.3658 3.64077 21.506 3.60152C21.5761 3.5819 21.6292 3.56667 21.6641 3.55654L21.7026 3.54527L21.7129 3.54221L23.0002 3.15601V20.8441L21.7132 20.4579L21.7113 20.4574L21.7026 20.4548L21.6641 20.4435C21.6292 20.4334 21.5761 20.4182 21.506 20.3985C21.3658 20.3593 21.1579 20.3026 20.8918 20.2342C20.3594 20.0973 19.5961 19.914 18.6791 19.7306C16.8386 19.3625 14.4095 19 12.0002 19C9.59096 19 7.16188 19.3625 5.32136 19.7306C4.40444 19.914 3.64104 20.0973 3.10866 20.2342C2.84261 20.3026 2.63465 20.3593 2.49448 20.3985C2.42441 20.4182 2.37132 20.4334 2.33643 20.4435L2.2979 20.4548L2.28916 20.4574L2.28759 20.4579L1.00024 20.8441Z"
    }
  }]
};
var panoramaHorizontalFilled = vue.defineComponent({
  name: "PanoramaHorizontalFilledIcon",
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
    var finalCls = vue.computed(() => ["t-icon", "t-icon-panorama-horizontal-filled", className.value]);
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

exports.default = panoramaHorizontalFilled;
//# sourceMappingURL=panorama-horizontal-filled.js.map
