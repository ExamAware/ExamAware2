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
      "d": "M3.15601 1L20.8441 1L20.4579 2.28706L20.4574 2.28891L20.4548 2.29765L20.4435 2.33618C20.4334 2.37108 20.4182 2.42417 20.3985 2.49424C20.3593 2.6344 20.3026 2.84237 20.2342 3.10842C20.0973 3.6408 19.914 4.40419 19.7306 5.32112C19.3625 7.16163 19 9.59072 19 12C19 14.4093 19.3625 16.8384 19.7306 18.6789C19.914 19.5958 20.0973 20.3592 20.2342 20.8916C20.3026 21.1576 20.3593 21.3656 20.3985 21.5058C20.4182 21.5758 20.4334 21.6289 20.4435 21.6638L20.4548 21.7023L20.4574 21.7111L20.4579 21.7127L20.8441 23L3.15601 23L3.54212 21.7129L3.54268 21.7111L3.54527 21.7023L3.55654 21.6638C3.56667 21.6289 3.58191 21.5758 3.60153 21.5058C3.64077 21.3656 3.69751 21.1576 3.76592 20.8916C3.90282 20.3592 4.08607 19.5958 4.26946 18.6789C4.63756 16.8384 5.00004 14.4093 5.00004 12C5.00004 9.59072 4.63756 7.16163 4.26946 5.32112C4.08607 4.40419 3.90282 3.6408 3.76592 3.10842C3.69751 2.84237 3.64077 2.6344 3.60153 2.49424C3.58191 2.42417 3.56667 2.37108 3.55654 2.33618L3.54527 2.29765L3.54268 2.28891L3.54221 2.28735L3.15601 1Z"
    }
  }]
};
var panoramaVerticalFilled = vue.defineComponent({
  name: "PanoramaVerticalFilledIcon",
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
    var finalCls = vue.computed(() => ["t-icon", "t-icon-panorama-vertical-filled", className.value]);
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

exports.default = panoramaVerticalFilled;
//# sourceMappingURL=panorama-vertical-filled.js.map
