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
      "d": "M12 0.998535C5.92617 0.998535 1 6.0483 1 12.2766C1 17.2597 4.1515 21.4871 8.52308 22.9786C9.07217 23.0829 9.25 22.7333 9.25 22.4363V20.3367C6.19017 21.019 5.55308 19.0059 5.55308 19.0059C5.05258 17.7023 4.33117 17.3555 4.33117 17.3555C3.33292 16.6553 4.40725 16.6704 4.40725 16.6704C5.51183 16.7493 6.093 17.833 6.093 17.833C7.07383 19.5566 8.66608 19.0585 9.294 18.77C9.39208 18.0416 9.67717 17.5435 9.9925 17.2625C7.54958 16.9758 4.98108 16.0087 4.98108 11.6883C4.98108 10.4561 5.411 9.45052 6.11408 8.66105C6.00042 8.37628 5.62367 7.22874 6.22133 5.67612C6.22133 5.67612 7.14533 5.37349 9.24725 6.83212C10.1245 6.58213 11.065 6.45713 12 6.45243C12.935 6.45713 13.8764 6.58213 14.7555 6.83212C16.8556 5.37349 17.7778 5.67612 17.7778 5.67612C18.3763 7.22968 17.9996 8.37722 17.8859 8.66105C18.5917 9.45052 19.018 10.4571 19.018 11.6883C19.018 16.02 16.4449 16.9739 13.9956 17.2531C14.3897 17.6027 14.75 18.2888 14.75 19.3414V22.4363C14.75 22.7361 14.926 23.0885 15.4842 22.9776C19.8522 21.4842 23 17.2578 23 12.2766C23 6.0483 18.0748 0.998535 12 0.998535Z"
    }
  }]
};
var logoGithubFilled = vue.defineComponent({
  name: "LogoGithubFilledIcon",
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
    var finalCls = vue.computed(() => ["t-icon", "t-icon-logo-github-filled", className.value]);
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

exports.default = logoGithubFilled;
//# sourceMappingURL=logo-github-filled.js.map
