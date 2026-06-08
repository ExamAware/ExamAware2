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
      "d": "M1 2.5H9.48063L11.4806 5H23V12.8464C21.8077 11.4127 20.0104 10.5 18 10.5C14.4101 10.5 11.5 13.4101 11.5 17C11.5 18.5085 12.0139 19.897 12.8762 21H1V2.5Z"
    }
  }, {
    "tag": "path",
    "attrs": {
      "fill": "props.filledColor",
      "d": "M18.9999 13.126V11.75H16.9999V13.126C16.285 13.31 15.6474 13.6867 15.1458 14.1975L13.9533 13.509L12.9533 15.241L14.1449 15.929C14.0504 16.2699 13.9999 16.629 13.9999 17C13.9999 17.371 14.0504 17.7301 14.1449 18.071L12.9533 18.759L13.9533 20.491L15.1458 19.8025C15.6474 20.3133 16.285 20.69 16.9999 20.874V22.25H18.9999V20.874C19.7149 20.69 20.3525 20.3133 20.854 19.8025L22.0466 20.491L23.0466 18.759L21.855 18.071C21.9494 17.7301 21.9999 17.371 21.9999 17C21.9999 16.629 21.9494 16.2699 21.855 15.929L23.0466 15.241L22.0466 13.509L20.854 14.1975C20.3525 13.6867 19.7149 13.31 18.9999 13.126ZM16.2852 15.97C16.6351 15.3888 17.2721 15 17.9999 15C18.7278 15 19.3648 15.3888 19.7147 15.97L19.7512 16.0332C19.9097 16.3198 19.9999 16.6493 19.9999 17C19.9999 17.3507 19.9097 17.6802 19.7512 17.9668L19.7147 18.03C19.3648 18.6112 18.7278 19 17.9999 19C17.2721 19 16.6351 18.6112 16.2852 18.03L16.2487 17.9667C16.0902 17.6802 15.9999 17.3506 15.9999 17C15.9999 16.6494 16.0902 16.3198 16.2487 16.0333L16.2852 15.97Z"
    }
  }]
};
var folderSettingFilled = vue.defineComponent({
  name: "FolderSettingFilledIcon",
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
    var finalCls = vue.computed(() => ["t-icon", "t-icon-folder-setting-filled", className.value]);
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

exports.default = folderSettingFilled;
//# sourceMappingURL=folder-setting-filled.js.map
